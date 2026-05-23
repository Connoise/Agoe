/* ================ VIEWS ================ */
const { useState, useEffect, useMemo, useRef } = React;

/* ---- Home ---- */
const HomeView = ({ navigate, active }) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const ts = time.toISOString().slice(11, 19);

  return (
    <div className="page" data-screen-label="01 Home">
      <div className="topbar">
        <div className="left">
          <span className="mono caps">AGOE.IDOL</span>
          <span className="mono" style={{ opacity: .4 }}>//</span>
          <span className="mono caps">INDEPENDENT ALT IDOL  //  EXPERIMENTAL POP ARTIST</span>
        </div>
        <div className="center">
          <span className="dot"></span>
          <span className="mono live">SIGNAL LIVE</span>
        </div>
        <div className="right">
          <span className="mono">SYS/IDOL_5G v0.1.23</span>
          <span className="mono" style={{ opacity: .4 }}>//</span>
          <span className="mono">HST 12:49:22</span>
        </div>
      </div>

      <div className="rail left mono"><span>SYS/06</span><span>MOD/03</span><span>IDX/01</span></div>
      <div className="rail right mono"><span>IDX/01</span><span>MOD/03</span><span>SYS/06</span></div>

      <div className="hero">
        <div className="hero-left">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 10 }}>
              <Crosshair size={18} />
              <span className="caption"><span className="num">01</span>IDENTITY_CORE / BOOT SEQUENCE OK</span>
            </div>

            <div className="wordmark" style={{ marginTop: 18 }}>
              AGOE
            </div>
            <div style={{
              fontFamily: 'Space Grotesk', fontWeight: 400,
              fontSize: 'clamp(22px, 2.4vw, 42px)',
              letterSpacing: '.32em', textTransform: 'uppercase',
              color: 'var(--ink)',
              marginTop: 4, paddingLeft: 6,
              display: 'flex', alignItems: 'center', gap: 14
            }}>
              <span style={{ color: 'var(--oxblood)' }}>/</span>
              <span>THE IDOL</span>
            </div>

            <div className="tagline">EXPERIMENTAL POP ARTIST</div>

            <div className="sub-tags">
              RITUAL <span className="sep">/</span> FREQUENCY <span className="sep">/</span> DIVINE MACHINERY
              <br />
              SOUND AS SIGNAL <span className="sep">/</span> THE IDOL AS INTERFACE
            </div>

            <div style={{ marginTop: 46, display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 280 }}>
              <NavBtn label="SOCIALS" onClick={() => navigate('socials')} active={active === 'socials'} />
              <NavBtn label="ALL MUSIC" onClick={() => navigate('content')} active={active === 'content'} />
            </div>
          </div>

          <div style={{ marginTop: 50 }}>
            <div className="hairline" style={{ margin: '18px 0 14px' }}></div>
            <div className="telemetry" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 520 }}>
              <div>
                <span className="k">&gt; LOCATION:</span> HONOLULU / UNDERGROUND<br />
                <span className="k">&gt; PROTOCOL:</span> NEW ALBUM - Un-Uncommon +<br />
                <span className="k">&gt; NEXT RITUAL:</span> 05.26.2026 - HONOLULU
              </div>
              <div>
                <span className="k">&gt; VOICE RANGE:</span> 2.3 OCT / F3-A5<br />
                <span className="k">&gt; SIGNAL DEPTH:</span> <b style={{ color: 'var(--oxblood-bright)' }}>0.982</b><br />
                <span className="k">&gt; STATUS:</span> FEEDBACK ON
              </div>
            </div>
          </div>
          <div style={{ marginTop: 28, width: '100%', maxWidth: 520, opacity: .95 }}>
            <Wave909 size={110} />
          </div>
        </div>

        <div className="hero-right">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div className="caption"><span className="num">02</span>NAVIGATION</div>
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column' }}>
                <NavBtn label="ABOUT" onClick={() => navigate('about')} active={active === 'about'} />
                <NavBtn label="UPCOMING PROJECTS" onClick={() => navigate('projects')} active={active === 'projects'} />
                <NavBtn label="PROMOTION" onClick={() => navigate('promo')} active={active === 'promo'} />
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="caption mono"><span className="num">03</span>STREAM</div>
              <div className="mono" style={{ fontSize: 10, color: 'var(--ink-dim)', marginTop: 8, letterSpacing: '.18em' }}>
                // NOW PLAYING<br />
                <span style={{ color: 'var(--ink)' }}>"STATIC PRAYER"</span><br />
                <span style={{ color: 'var(--oxblood)' }}>━━━━━━━━━</span><span style={{ opacity: .3 }}>━━━━━━</span><br />
                02:14 / 04:08
              </div>
            </div>
          </div>

          <div className="wire-stage">
            <div style={{ position: 'absolute', left: '5%', top: '6%' }}>
              <WireSphere size={180} />
            </div>
            <div style={{ position: 'absolute', right: '4%', top: '10%' }}>
              <WireIcosa size={190} />
            </div>
            <div style={{ position: 'absolute', left: '26%', bottom: '2%' }}>
              <WireTerrain size={260} />
            </div>
            <div style={{ position: 'absolute', left: '48%', top: '42%', display: 'flex', gap: 6, alignItems: 'center' }}>
              <Crosshair size={14} />
              <span className="mono" style={{ fontSize: 9, color: 'var(--ink-ghost)', letterSpacing: '.2em' }}>NODE_04</span>
            </div>
            <div style={{ position: 'absolute', right: '40%', top: '18%', display: 'flex', gap: 6, alignItems: 'center' }}>
              <Crosshair size={14} />
              <span className="mono" style={{ fontSize: 9, color: 'var(--ink-ghost)', letterSpacing: '.2em' }}>VERT_17</span>
            </div>
          </div>

          <div className="viewport">
            <span className="cnr tr"></span>
            <span className="cnr bl"></span>
            <h3>/ SIGNAL INTEGRITY - CH.06</h3>
            <div className="line">NOISE</div>
            <div className="line">ACT · LISTEN · DESIRE</div>
            <div className="bar">
              {[1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1].map((v, i) =>
              <i key={i} className={v ? 'on' : ''} />
              )}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
              <span className="mono" style={{ fontSize: 9, color: 'var(--ink-dim)', letterSpacing: '.2em' }}>// CH.06 // GAIN -3.2DB</span>
              <span className="mono" style={{ fontSize: 9, color: 'var(--oxblood-bright)', letterSpacing: '.2em' }}>◉ REC</span>
            </div>
          </div>
        </div>
      </div>

      <Enrollment />

      <div className="ticker">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, i) =>
          <React.Fragment key={i}>
              <span>NEW SINGLE <b>"STATIC PRAYER"</b> - OUT NOW <span className="mark">◆</span></span>
              <span>LIVE RITUAL - HONOLULU - 05.26.26 <span className="mark">◆</span></span>
              <span>UN-UNCOMMON + / MAY 22 2026 <span className="mark">◆</span></span>
              <span>SIGNAL DEPTH 0.982 - IDOL STATE LIVE <span className="mark">◆</span></span>
              <span>ENTER THE FEED <span className="mark">◆</span></span>
              <span>WATCHING BACK <span className="mark">◆</span></span>
            </React.Fragment>
          )}
        </div>
      </div>

      <span className="frame-corner fc-tl" />
      <span className="frame-corner fc-tr" />
      <span className="frame-corner fc-bl" />
      <span className="frame-corner fc-br" />
    </div>);

};

const NavBtn = ({ label, onClick, active }) =>
<button className={"nav-item" + (active ? " active" : "")} onClick={onClick}>
    <span>{label}</span>
    <span className="plus" />
  </button>;


const SubHeader = ({ idx, label, title, navigate, active }) =>
<>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 40, flexWrap: 'wrap' }}>
      <div>
        <div className="eyebrow">
          <b>{idx}</b>
          <span className="sep" />
          <span>{label}</span>
          <span className="sep" />
          <span>IDOL INTERFACE SYSTEM</span>
        </div>
        <h1>{title}</h1>
      </div>
      <MiniNav navigate={navigate} active={active} />
    </div>
    <div className="hairline" style={{ margin: '30px 0 0' }}></div>
  </>;


const MiniNav = ({ navigate, active }) =>
<div style={{ display: 'flex', flexDirection: 'column', gap: 0, minWidth: 240, marginTop: 8 }}>
    <button className="nav-item" onClick={() => navigate('home')}>
      <span>← HOME</span>
      <span className="plus" />
    </button>
    {[
  ['SOCIALS', 'socials'],
  ['ALL MUSIC', 'content'],
  ['ABOUT', 'about'],
  ['UPCOMING PROJECTS', 'projects'],
  ['PROMOTION', 'promo']].
  map(([l, k]) =>
  <NavBtn key={k} label={l} onClick={() => navigate(k)} active={active === k} />
  )}
  </div>;


/* ---- Socials ---- */
const SOCIALS = [
{ name: 'INSTAGRAM', handle: '@agoetheidol', followers: '184K', posts: '0.412', cta: 'ENTER FEED',     url: 'https://instagram.com/agoetheidol' },
{ name: 'YOUTUBE',   handle: '@agoetheidol', followers: '62.3K', posts: '1.8K', cta: 'OPEN STREAM',    url: 'https://youtube.com/@agoetheidol' },
{ name: 'TIKTOK',    handle: '@agoetheidol', followers: '311K', posts: '0.089', cta: 'BEGIN RITUAL',   url: 'https://tiktok.com/@agoetheidol' },
{ name: 'X',         handle: '@agoetheidol', followers: '44.1K', posts: '027',  cta: 'WATCH SIGNAL',   url: 'https://x.com/agoetheidol' },
{ name: 'BANDCAMP',  handle: '@agoetheidol', followers: '28.7K', posts: '041',  cta: 'TUNE IN',        url: 'https://agoetheidol.bandcamp.com' }];

const SocialsView = ({ navigate, active }) =>
<div className="subview page" data-screen-label="02 Socials">
    <SubHeader idx="02" label="SOCIALS // NODES" title="TRANSMIT" navigate={navigate} active={active} />
    <div className="socials-grid">
      {SOCIALS.map((s, i) =>
    <a className="social-card"
       key={s.name}
       href={s.url}
       target="_blank"
       rel="noopener noreferrer"
       aria-label={`Open ${s.name}`}>
          <div className="sc-num">0{i + 1} / 0{SOCIALS.length}</div>
          <div className="sc-name">{s.name}</div>
          <div className="sc-handle">{s.handle}</div>
          <div className="sc-cta">{s.cta} →</div>
        </a>
    )}
    </div>

    <div className="rule">
      <div className="l" />
      <div className="t">// END TRANSMISSION INDEX</div>
      <div className="r" />
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40, marginTop: 20 }}>
      <div className="telemetry">
        <div className="caption" style={{ marginBottom: 10 }}><span className="num">A</span>FOLLOW DIRECT</div>
        Type <span style={{ color: 'var(--oxblood)' }}>@agoetheidol</span> into any feed. The shrine opens where you're standing.
      </div>
      <div className="telemetry">
        <div className="caption" style={{ marginBottom: 10 }}><span className="num">B</span>NEWSLETTER / SIGNAL</div>
        Monthly dispatch, ritual schedule, unreleased stems. <span style={{ color: 'var(--oxblood-bright)' }}>SUBSCRIBE →</span>
      </div>
      <div className="telemetry">
        <div className="caption" style={{ marginBottom: 10 }}><span className="num">C</span>PRESS / BOOKING</div>
        <span style={{ color: 'var(--ink)' }}>im@connoi.se</span><br />
        All requests routed through the shrine.
      </div>
    </div>
  </div>;


/* ---- New Content ---- */
const RELEASES = [
{ n: '001', title: 'UN-UNCOMMON +', kind: 'ALBUM / LP', date: '2026', dur: '42:18', tag: 'LATEST', cover: 'assets/covers/un-uncommon.jpg' },
{ n: '002', title: 'BURNING THE TREE', kind: 'EP', date: '2025', dur: '18:24', tag: 'EP', cover: 'assets/covers/burning-the-tree.jpg' },
{ n: '003', title: 'AGOE COLLECTION, VOL. 1', kind: 'ALBUM / COMPILATION', date: '2025', dur: '52:08', tag: 'COMPILATION', cover: 'assets/covers/agoe-collection-vol1.jpg' },
{ n: '004', title: 'NOTHING HAPPENS IN APRIL', kind: 'ALBUM / LP', date: '2024', dur: '38:21', tag: 'LP', cover: 'assets/covers/nothing-happens-in-april.jpg' },
{ n: '005', title: 'SUMMER THRENODY', kind: 'SINGLE', date: '2024', dur: '04:12', tag: '' },
{ n: '006', title: 'MICROMASHII VOL. 3', kind: 'REMIX / COMPILATION', date: '2024', dur: '24:46', tag: 'REMIX' },
{ n: '007', title: 'UN-UNCOMMON', kind: 'ALBUM / LP', date: '2023', dur: '34:55', tag: '', cover: 'assets/covers/un-uncommon.jpg' },
{ n: '008', title: 'LONELY SOUL', kind: 'SINGLE', date: '2022', dur: '03:48', tag: 'DEBUT' }];

const ContentView = ({ navigate, active }) => {
  const [filter, setFilter] = useState('ALL');
  const filtered = useMemo(() => {
    if (filter === 'ALL') return RELEASES;
    return RELEASES.filter((r) => r.kind.includes(filter === 'ALBUMS' ? 'ALBUM' : filter === 'SINGLES' ? 'SINGLE' : filter));
  }, [filter]);

  return (
    <div className="subview page" data-screen-label="03 New Content">
      <SubHeader idx="03" label="NEW CONTENT // RELEASE INDEX" title="TRANSMISSIONS" navigate={navigate} active={active} />

      <div style={{ display: 'flex', gap: 30, marginTop: 30, alignItems: 'center', flexWrap: 'wrap' }}>
        <span className="caption"><span className="num">//</span>FILTER</span>
        {['ALL', 'SINGLES', 'ALBUMS', 'REMIX'].map((f) =>
        <button key={f}
        onClick={() => setFilter(f)}
        className="caps"
        style={{
          background: 'transparent',
          border: 'none',
          color: filter === f ? 'var(--oxblood-bright)' : 'var(--ink-dim)',
          fontFamily: 'Space Grotesk', fontSize: 12, letterSpacing: '.22em',
          fontWeight: filter === f ? 500 : 400,
          cursor: 'pointer',
          borderBottom: '1px solid',
          borderColor: filter === f ? 'var(--oxblood-bright)' : 'transparent',
          paddingBottom: 4
        }}>{f}</button>
        )}
        <span style={{ flex: 1 }} />
        <span className="caption">{filtered.length} ENTRIES / {RELEASES.length} TOTAL</span>
      </div>

      <div className="releases">
        {filtered.map((r) => <ReleaseRow key={r.n} r={r} />)}
      </div>

      <div className="rule">
        <div className="l" />
        <div className="t">// END INDEX</div>
        <div className="r" />
      </div>
    </div>);

};

const ReleaseRow = ({ r }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="release-row" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="rr-num">{r.date}</div>
      <div className="rr-cover">
        {r.cover ?
        <img src={r.cover} alt={r.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: hover ? 'none' : 'grayscale(.15) contrast(1.05)', transition: 'filter .2s' }} /> :
        <React.Fragment>
          <div style={{
          position: 'absolute', inset: 0,
          background: hover ?
          'repeating-linear-gradient(45deg, rgba(183,29,29,.35) 0 2px, transparent 2px 6px)' :
          'repeating-linear-gradient(45deg, rgba(128,21,21,.2) 0 2px, transparent 2px 6px)',
          transition: 'background .2s'
        }} />
        <div style={{ position: 'absolute', inset: 8, border: '1px solid var(--hairline-strong)' }} />
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}>
          <HexMark size={60} />
        </div>
        </React.Fragment>}
      </div>
      <div className="rr-title">
        {r.title}
        <small>{r.kind}</small>
      </div>
      <div className="rr-meta"><b>{r.date}</b>RELEASED</div>
      <div className="rr-meta"><b>{r.dur}</b>RUNTIME {r.tag && <span style={{ color: 'var(--oxblood-bright)' }}>// {r.tag}</span>}</div>
      <div className="rr-play">
        <span>PLAY</span>
        <span className="arrow" />
      </div>
    </div>);

};

/* ---- About ---- */
const AboutView = ({ navigate, active }) =>
<div className="subview page" data-screen-label="04 About">
    <SubHeader idx="04" label="ABOUT // IDOL PROTOCOL" title="FEEDBACK" navigate={navigate} active={active} />

    <div className="about-grid">
      <div>
        <p style={{ fontSize: 22, lineHeight: 1.5, color: 'var(--ink)', letterSpacing: '.01em' }}>
          Alt idol, experimental pop, digital art
          <br /><br />
          <span style={{ color: 'var(--ink-dim)', fontSize: 17 }}>A conduit for the Aether.</span>
        </p>

        <div className="rule">
          <div className="l" />
          <div className="t">// DOCTRINE</div>
          <div className="r" />
        </div>

        <p>Idol is an interface for devotion. Formless unconsciousness pervades culture and society as The Aether. Agoe is a vessel for what is denied on the surface. Ritual performance is the tip of the spear that disrupts the smooth surface.</p>
        <p>Releases are a ritual lithography. Every performance is a rite. The audience is feedback. Noise is form to The Aether.</p>
        <p>Agoe resides in Honolulu, HI.</p>
      </div>

      <div>
        <div className="manifest">
          <div className="m-head">
            <span>// IDOL MANIFEST / v0.1.23</span>
            <span style={{ color: 'var(--oxblood-bright)' }}>● LIVE</span>
          </div>
          <div className="row"><span>IDENTITY</span><span>AGOE THE IDOL</span></div>
          <div className="row"><span>CLASS</span><span>ALT IDOL/EXPERIMENTAL POP</span></div>
          <div className="row"><span>ORIGIN</span><span>HONOLULU</span></div>
          <div className="row"><span>ACTIVE</span><span>2021 - PRESENT</span></div>
          <div className="row"><span>PROTOCOL</span><span>NEW ALBUM - UNUNCOMMON +</span></div>
          <div className="row"><span>LABEL</span><span>CONNOI.SE</span></div>
          <div className="row"><span>MGMT</span><span>CONNOI.SE</span></div>
          <div className="row"><span>SIGNAL DEPTH</span><span style={{ color: 'var(--oxblood-bright)' }}>0.982</span></div>
          <div className="row"><span>VOICE RANGE</span><span>F3 → A5</span></div>
          <div className="row" style={{ borderBottom: 'none' }}><span>STATUS</span><span style={{ color: 'var(--oxblood-bright)' }}>WATCHING BACK</span></div>
        </div>

        <div style={{ marginTop: 24, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <AgoeTotem size={72} />
          <div className="telemetry" style={{ paddingTop: 8 }}>
            <div className="caption" style={{ marginBottom: 6 }}>/ SIGIL_003</div>
            Worn on the inside of the left wrist.<br />
            Activates the Aether.
          </div>
        </div>
      </div>
    </div>
  </div>;


/* ---- Projects ---- */
const PROJECTS = [
{ n: 'P01', title: 'WHISPERING STAR', type: 'FULL LENGTH ALBUM', year: '2026', collab: 'NA' },
{ n: 'P02', title: 'IF/IDOL', type: 'FULL LENGTH ALBUM / TYPE', year: '2026-27', collab: 'NA ' }];


const ProjectsView = ({ navigate, active }) =>
<div className="subview page" data-screen-label="05 Projects">
    <SubHeader idx="05" label="PROJECTS // RITUAL ARCHIVE" title="EVIDENCE" navigate={navigate} active={active} />

    <div className="projects-stack">
      {PROJECTS.map((p) =>
    <div className="project-row" key={p.n}>
          <div className="pr-num">{p.n}</div>
          <div className="pr-title">{p.title}</div>
          <div className="pr-type"><b>{p.type.split(' / ')[0]}</b>{p.type.includes('/') ? p.type.split(' / ')[1] : 'TYPE'}</div>
          <div className="pr-year">{p.year}</div>
          <div className="pr-collab" style={{ textAlign: 'right' }}>
            {p.collab}
            <span style={{ color: 'var(--oxblood)', marginLeft: 14 }}>→</span>
          </div>
        </div>
    )}
    </div>

    <div className="rule">
      <div className="l" />
      <div className="t">// ARCHIVE v0.1.23 - 02 ENTRIES</div>
      <div className="r" />
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 60, marginTop: 30, alignItems: 'center' }}>
      <div className="telemetry">
        <div className="caption" style={{ marginBottom: 12 }}>/ COMMISSION / COLLABORATION</div>
        Agoe accepts frequent collaboration<br />
        Send a signal to <span style={{ color: 'var(--oxblood-bright)' }}>im@connoi.se</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <WireIcosa size={180} />
      </div>
    </div>
  </div>;


/* ---- Promotion (press kit / link hub) ---- */
const PROMO_PHOTOS = [
{ src: 'assets/photos/agoe-01.jpg', label: 'PORTRAIT_01 / GRAPHITE' },
{ src: 'assets/photos/agoe-02.jpg', label: 'PORTRAIT_02 / CORDUROY' },
{ src: 'assets/photos/agoe-03.png', label: 'PORTRAIT_03 / AMBER LENS' },
{ src: 'assets/photos/agoe-04.png', label: 'PORTRAIT_04 / FORMATION LAP' }];


const PromotionView = ({ navigate, active }) => {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % PROMO_PHOTOS.length), 4200);
    return () => clearInterval(t);
  }, [paused]);

  const go = (n) => setIdx((PROMO_PHOTOS.length + n) % PROMO_PHOTOS.length);
  const cur = PROMO_PHOTOS[idx];

  return (
    <div className="subview page" data-screen-label="06 Promotion">
      <SubHeader idx="06" label="PROMOTION // PRESS KIT" title="DISPATCH" navigate={navigate} active={active} />

      <div className="promo-grid">
        <div
          className="promo-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}>

          <div className="pc-frame">
            {PROMO_PHOTOS.map((p, i) =>
            <img
              key={p.src}
              src={p.src}
              alt={p.label}
              className={"pc-img" + (i === idx ? ' on' : '')} />

            )}
            <span className="cnr tl" />
            <span className="cnr tr" />
            <span className="cnr bl" />
            <span className="cnr br" />

            <div className="pc-meta">
              <span>{cur.label}</span>
              <span>{String(idx + 1).padStart(2, '0')} / {String(PROMO_PHOTOS.length).padStart(2, '0')}</span>
            </div>

            <button className="pc-nav prev" onClick={() => go(idx - 1)} aria-label="previous">‹</button>
            <button className="pc-nav next" onClick={() => go(idx + 1)} aria-label="next">›</button>
          </div>

          <div className="pc-thumbs">
            {PROMO_PHOTOS.map((p, i) =>
            <button
              key={p.src}
              className={"pc-thumb" + (i === idx ? ' on' : '')}
              onClick={() => setIdx(i)}
              aria-label={"select " + (i + 1)}>

                <img src={p.src} alt="" />
              </button>
            )}
          </div>

          <div className="pc-progress">
            <div className="pc-progress-bar" key={idx + (paused ? 'p' : 'r')} style={{ animationPlayState: paused ? 'paused' : 'running' }} />
          </div>
        </div>

        <div className="promo-info">
          <div className="caption" style={{ marginBottom: 14 }}>
            <span className="num">A</span>SUMMARY
          </div>
          <p className="promo-lede">
            <b>AGOE THE IDOL</b> is an <span style={{ color: 'var(--oxblood-bright)' }}>Independent Alt Idol from Honolulu</span> - an experimental pop artist who fuses electronic sounds with explosive live performances.
          </p>

          <div className="promo-card">
            <div className="pcard-eyebrow">
              <span className="caption" style={{ margin: 0 }}><span className="num">B</span>NEWEST MUSIC PROJECT</span>
            </div>
            <div className="pcard-body">
              <div className="pcard-cover">
                <img src="assets/covers/un-uncommon.jpg" alt="Un-Uncommon +" />
              </div>
              <div className="pcard-text">
                <div className="pcard-title">UN-UNCOMMON +</div>
                <div className="pcard-meta">ALBUM / LP <span className="sep">/</span> 2026 <span className="sep">/</span> 42:18</div>
                <button
                  className="pcard-cta"
                  onClick={() => navigate('content')}>

                  ENTER THE INDEX <span>→</span>
                </button>
              </div>
            </div>
          </div>

          <div className="promo-card">
            <div className="pcard-eyebrow">
              <span className="caption" style={{ margin: 0 }}><span className="num">C</span>BOOKING / PRESS</span>
            </div>
            <div className="pcard-body" style={{ alignItems: 'center' }}>
              <div className="pcard-text" style={{ flex: 1 }}>
                <div className="pcard-title" style={{ fontSize: 28, letterSpacing: '.02em' }}>
                  <a href="mailto:im@connoi.se" className="promo-mail">im@connoi.se</a>
                </div>
                <div className="pcard-meta">DIRECT LINE</div>
              </div>
              <a href="mailto:im@connoi.se" className="pcard-cta" style={{ alignSelf: 'flex-end', textDecoration: 'none' }}>
                COMPOSE <span>→</span>
              </a>
            </div>
          </div>

          <div className="promo-card">
            <div className="pcard-eyebrow">
              <span className="caption" style={{ margin: 0 }}><span className="num">D</span>INSTAGRAM</span>
            </div>
            <div className="pcard-body" style={{ alignItems: 'center' }}>
              <div className="pcard-text" style={{ flex: 1 }}>
                <div className="pcard-title" style={{ fontSize: 28, letterSpacing: '.02em' }}>
                  <a href="https://instagram.com/agoetheidol" target="_blank" rel="noopener noreferrer" className="promo-mail">@agoetheidol</a>
                </div>
                <div className="pcard-meta">FOLLOW ON INSTAGRAM</div>
              </div>
              <a href="https://instagram.com/agoetheidol" target="_blank" rel="noopener noreferrer" className="pcard-cta" style={{ alignSelf: 'flex-end', textDecoration: 'none' }}>
                OPEN FEED <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="rule">
        <div className="l" />
        <div className="t">// PRESS DISPATCH v0.1.23 - END OF PACKAGE</div>
        <div className="r" />
      </div>
    </div>);

};



const Enrollment = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!valid) {setTouched(true);return;}
    setSubmitted(true);
  };

  return (
    <div className="enroll">
      <div>
        <div className="caption" style={{ marginBottom: 12 }}>
          <span className="num">//</span>SIGNAL INTAKE / ENROLLMENT
        </div>
        <div className="e-head">
          CONSECRATE <b>YOUR FREQUENCY</b>
        </div>
        <div className="e-sub">
          Leave an email address. Dispatches from the shrine arrive there -<br />
          ritual dates, unreleased stems, broadcast shifts.<br />
          <span style={{ color: 'var(--oxblood)' }}>// A MAILING LIST, TUNED TO RITUAL.</span>
        </div>
      </div>

      <div>
        {!submitted ?
        <form onSubmit={onSubmit} noValidate>
            <input
            type="email"
            placeholder="NAME@FREQUENCY.ORG"
            value={email}
            onChange={(e) => {setEmail(e.target.value);setTouched(false);}}
            aria-label="Email address" />

            <button type="submit" className="e-submit">
              <span>INSCRIBE</span>
              <span>→</span>
            </button>
          </form> :

        <div className="e-ok">
            <span style={{ width: 8, height: 8, background: 'var(--oxblood-bright)', display: 'inline-block', boxShadow: '0 0 8px var(--oxblood-bright)' }} />
            SIGNAL RECEIVED - <span style={{ color: 'var(--ink)' }}>{email}</span> - WATCHING BACK.
          </div>
        }
        <div className="e-terms">
          {touched && !valid ?
          <span style={{ color: 'var(--oxblood-bright)' }}>// INVALID FREQUENCY - PLEASE RE-TUNE</span> :
          <>// DISPATCH ~1× PER CYCLE · <b>UNSUBSCRIBE</b> IN ANY TRANSMISSION · NEVER SOLD</>}
        </div>
      </div>
    </div>);

};

Object.assign(window, { HomeView, SocialsView, ContentView, AboutView, ProjectsView, PromotionView, NavBtn, Enrollment });
