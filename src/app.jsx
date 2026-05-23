/* ================ APP SHELL ================ */
const { useState: uS, useEffect: uE } = React;

/* Valid view slugs - keep in sync with the switch below */
const VIEW_SLUGS = ['home', 'socials', 'content', 'about', 'projects', 'promo'];

/* Convenience aliases so connoi.se/#music or /#music opens the All Music page */
const SLUG_ALIASES = {
  music: 'content',
  releases: 'content',
  press: 'promo',
  promotion: 'promo',
  social: 'socials',
};

function normalizeSlug(raw) {
  if (!raw) return null;
  const cleaned = raw.replace(/^[#/]+/, '').replace(/\/.*$/, '').toLowerCase();
  if (!cleaned) return null;
  if (VIEW_SLUGS.includes(cleaned)) return cleaned;
  if (SLUG_ALIASES[cleaned]) return SLUG_ALIASES[cleaned];
  return null;
}

/* Resolve a starting view from the URL.
   Priority: hash (#promo) → pathname (/promo) → localStorage → home.
   pathname only used if it is a single segment that matches a known slug,
   so connoi.se/promo works when the server serves the same HTML for any path. */
function viewFromLocation() {
  const hashSlug = normalizeSlug(window.location.hash);
  if (hashSlug) return hashSlug;
  const pathSlug = normalizeSlug(window.location.pathname);
  if (pathSlug) return pathSlug;
  try { return localStorage.getItem('agoe.view') || 'home'; } catch(e) { return 'home'; }
}

function App(){
  const [view, setView] = uS(viewFromLocation);

  /* Persist + sync hash on view change */
  uE(() => {
    try { localStorage.setItem('agoe.view', view); } catch(e){}
    window.scrollTo({top:0, behavior:'instant'});

    const desiredHash = view === 'home' ? '' : '#' + view;
    const currentHash = window.location.hash || '';
    if (currentHash !== desiredHash) {
      // Use replaceState so we don't pollute history on every keypress-driven nav
      const url = window.location.pathname + window.location.search + desiredHash;
      try { history.replaceState(null, '', url); } catch(e) { window.location.hash = desiredHash; }
    }
  }, [view]);

  /* Sync state when the user changes the hash (back/forward, manual edit, etc.) */
  uE(() => {
    const onHashChange = () => {
      const next = viewFromLocation();
      setView((prev) => prev === next ? prev : next);
    };
    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('popstate', onHashChange);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('popstate', onHashChange);
    };
  }, []);

  const navigate = (next) => {
    if (next === view) return;
    const flash = document.getElementById('flash');
    flash.classList.remove('go');
    void flash.offsetWidth;
    flash.classList.add('go');
    setTimeout(() => setView(next), 80);
  };

  const View = (() => {
    switch(view){
      case 'socials': return <SocialsView navigate={navigate} active={view}/>;
      case 'content': return <ContentView navigate={navigate} active={view}/>;
      case 'about':   return <AboutView navigate={navigate} active={view}/>;
      case 'projects':return <ProjectsView navigate={navigate} active={view}/>;
      case 'promo':   return <PromotionView navigate={navigate} active={view}/>;
      default:        return <HomeView navigate={navigate} active={view}/>;
    }
  })();

  return <div className="hud">{View}</div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
