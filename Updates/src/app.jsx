/* ================ APP SHELL ================ */
const { useState: uS, useEffect: uE } = React;

function App(){
  const [view, setView] = uS(() => {
    try { return localStorage.getItem('agoe.view') || 'home'; } catch(e) { return 'home'; }
  });

  uE(() => {
    try { localStorage.setItem('agoe.view', view); } catch(e){}
    window.scrollTo({top:0, behavior:'instant'});
  }, [view]);

  const navigate = (next) => {
    if (next === view) return;
    const flash = document.getElementById('flash');
    flash.classList.remove('go');
    // force reflow
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
      case 'art':     return <ArtView navigate={navigate} active={view}/>;
      case 'code':    return <CodeView navigate={navigate} active={view}/>;
      case 'video':   return <VideoView navigate={navigate} active={view}/>;
      default:        return <HomeView navigate={navigate} active={view}/>;
    }
  })();

  const orange = view === 'art' || view === 'code' || view === 'video';
  return <div className={"hud" + (orange ? " theme-orange" : "")}>{View}</div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
