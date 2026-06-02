/* ================ DIGITAL PORTFOLIO VIEWS ================ */
const { useState: usePf } = React;

/* Shared sub-header for portfolio pages (orange-themed, own mini nav) */
const PortfolioNav = ({ navigate, active }) =>
<div style={{ display: 'flex', flexDirection: 'column', gap: 0, minWidth: 240, marginTop: 8 }}>
    <button className="nav-item" onClick={() => navigate('home')}>
      <span>← HOME</span>
      <span className="plus" />
    </button>
    {[
  ['DIGITAL ART', 'art'],
  ['VIDEOS & LIVESTREAMS', 'video'],
  ['CODE PROJECTS', 'code']].
  map(([l, k]) =>
  <NavBtn key={k} label={l} onClick={() => navigate(k)} active={active === k} />
  )}
  </div>;

const PortfolioHeader = ({ idx, label, title, navigate, active }) =>
<>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 40, flexWrap: 'wrap' }}>
      <div>
        <div className="eyebrow">
          <b>{idx}</b>
          <span className="sep" />
          <span>{label}</span>
          <span className="sep" />
          <span>DIGITAL PORTFOLIO</span>
        </div>
        <h1>{title}</h1>
      </div>
      <PortfolioNav navigate={navigate} active={active} />
    </div>
    <div className="hairline" style={{ margin: '30px 0 0' }}></div>
  </>;


/* ---- Digital Art ---- */
const ART_WORKS = [
{ n: 'DA01', title: 'TOUCHDESIGNER', medium: 'REAL-TIME / GENERATIVE', note: 'Node-based visual system. Live signal-reactive geometry and projection studies.', glyph: 'grid' },
{ n: 'DA02', title: 'STABLE DIFFUSION', medium: 'DIFFUSION / IMAGE SYNTHESIS', note: 'Prompt-driven image generation. Character studies, texture plates, cover explorations.', glyph: 'noise' }];

const ArtView = ({ navigate, active }) =>
<div className="subview page" data-screen-label="07 Digital Art">
    <PortfolioHeader idx="07" label="PORTFOLIO // VISUAL" title="DIGITAL ART" navigate={navigate} active={active} />

    <div className="art-grid">
      {ART_WORKS.map((w) =>
    <div className="art-card" key={w.n}>
          <div className={"art-thumb " + w.glyph}>
            <span className="cnr tl" /><span className="cnr tr" />
            <span className="cnr bl" /><span className="cnr br" />
            <span className="art-standin">STAND-IN / NO MEDIA YET</span>
          </div>
          <div className="art-meta">
            <div className="art-num">{w.n} / 0{ART_WORKS.length}</div>
            <div className="art-title">{w.title}</div>
            <div className="art-medium">{w.medium}</div>
            <div className="art-note">{w.note}</div>
          </div>
        </div>
    )}
    </div>

    <div className="rule">
      <div className="l" />
      <div className="t">// VISUAL INDEX - 02 STAND-IN ENTRIES</div>
      <div className="r" />
    </div>
  </div>;


/* ---- Code Projects ---- */
const CODE_REPOS = [
{ n: 'C01', title: 'PLASTIGLOM', slug: 'Plastiglom', kind: 'DAILY EXERCISES AND ANALYSIS', note: 'Material / generative experiment.' },
{ n: 'C02', title: 'SANDO SCHEDULER', slug: 'Sando-Scheduler', kind: 'TOOL / SCHEDULING', note: 'Scheduling utility.' },
{ n: 'C03', title: 'SECOND BRIAN', slug: 'Second-Brian', kind: 'DEEP THOUGHT CATALOG AND ANALYSIS', note: 'Personal knowledge / note system.' },
{ n: 'C04', title: 'FROG BUDGET', slug: 'Frog-Budget', kind: 'BUDGETING AND ANALYSIS', note: 'Personal budgeting app.' },
{ n: 'C05', title: 'INVENTOROIS', slug: 'Inventorois', kind: 'TOOL / INVENTORY', note: 'Inventory tracking tool.' }];

const CodeView = ({ navigate, active }) =>
<div className="subview page" data-screen-label="08 Code Projects">
    <PortfolioHeader idx="08" label="PORTFOLIO // SOURCE" title="CODE PROJECTS" navigate={navigate} active={active} />

    <div className="code-source">
      <span className="caption" style={{ margin: 0 }}><span className="num">//</span>SOURCE</span>
      <a href="https://github.com/Connoise" target="_blank" rel="noopener noreferrer" className="code-gh">github.com/Connoise →</a>
    </div>

    <div className="code-stack">
      {CODE_REPOS.map((r) =>
    <a className="code-row" key={r.n} href={"https://github.com/Connoise/" + r.slug} target="_blank" rel="noopener noreferrer">
          <div className="cr-num">{r.n}</div>
          <div className="cr-title">{r.title}<small>{r.note}</small></div>
          <div className="cr-kind">{r.kind}</div>
          <div className="cr-cta">VIEW ON GITHUB <span>→</span></div>
        </a>
    )}
    </div>

    <div className="rule">
      <div className="l" />
      <div className="t">// SOURCE INDEX - 05 REPOSITORIES</div>
      <div className="r" />
    </div>
  </div>;


/* ---- Videos & Livestreams ---- */
const VIDEO_CHANNELS = [
{
  n: 'VC01', name: 'AGOE THE IDOL', handle: '@agoetheidol',
  url: 'https://www.youtube.com/@agoetheidol',
  note: 'Variety Video Projects',
  videos: [{ id: '_XsIzS8pKGU', title: 'FEATURED TRANSMISSION' }] },

{
  n: 'VC02', name: 'AGOE 808', handle: '@agoe808',
  url: 'https://www.youtube.com/@agoe808',
  note: 'Livestreams, Past Performances, Demos',
  videos: [] }];


const VideoView = ({ navigate, active }) =>
<div className="subview page" data-screen-label="09 Videos & Livestreams">
    <PortfolioHeader idx="09" label="PORTFOLIO // MOTION" title="VIDEOS & LIVESTREAMS" navigate={navigate} active={active} />

    <div className="vid-channels">
      {VIDEO_CHANNELS.map((c) =>
    <div className="vid-channel" key={c.n}>
          <div className="vc-head">
            <div>
              <div className="vc-num">{c.n}</div>
              <div className="vc-name">{c.name}</div>
              <div className="vc-handle">{c.handle}</div>
              <div className="vc-note">{c.note}</div>
            </div>
            <a href={c.url} target="_blank" rel="noopener noreferrer" className="cr-cta">OPEN CHANNEL <span>→</span></a>
          </div>

          {c.videos.length > 0 ?
      <div className="vc-videos">
              {c.videos.map((v) =>
        <div className="vc-video" key={v.id}>
                  <div className="vc-embed">
                    <iframe
                src={"https://www.youtube-nocookie.com/embed/" + v.id}
                title={v.title}
                loading="lazy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen />

                  </div>
                  <div className="vc-vlabel">{v.title}</div>
                </div>
        )}
            </div> :

      <div className="vc-empty">// NO FEATURED VIDEOS YET - VISIT CHANNEL FOR FULL ARCHIVE</div>}

        </div>
    )}
    </div>

    <div className="rule">
      <div className="l" />
      <div className="t">// MOTION INDEX - 02 CHANNELS</div>
      <div className="r" />
    </div>
  </div>;


Object.assign(window, { ArtView, CodeView, VideoView });
