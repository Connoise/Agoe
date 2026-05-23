/* Wireframe SVG building blocks - floating orthographic objects */
const WireSphere = ({ size = 320, stroke = 'var(--oxblood)', lines = 14 }) => {
  const lats = [];
  const r = 150;
  for (let i = 1; i < lines; i++) {
    const t = (i / lines) * Math.PI;
    const ry = Math.sin(t) * r;
    const cy = -Math.cos(t) * r * 0.3;
    lats.push(<ellipse key={'la'+i} cx="0" cy={cy} rx={r} ry={ry*0.35} />);
  }
  const lngs = [];
  for (let i = 0; i < lines; i++) {
    const t = (i / lines) * Math.PI;
    const rx = Math.cos(t) * r;
    lngs.push(<ellipse key={'ln'+i} cx="0" cy="0" rx={Math.abs(rx)} ry={r} />);
  }
  return (
    <svg viewBox="-180 -180 360 360" width={size} height={size} fill="none" stroke={stroke} strokeWidth="0.8">
      <circle cx="0" cy="0" r={r} strokeWidth="1.2" />
      <g opacity="0.85">{lats}</g>
      <g opacity="0.55">{lngs}</g>
      <circle cx="0" cy="0" r="3" fill={stroke} stroke="none" />
      <g stroke={stroke} opacity="0.6">
        <line x1="-180" y1="0" x2="-160" y2="0" />
        <line x1="160" y1="0" x2="180" y2="0" />
        <line x1="0" y1="-180" x2="0" y2="-160" />
        <line x1="0" y1="160" x2="0" y2="180" />
      </g>
    </svg>
  );
};

const WireIcosa = ({ size = 280, stroke = 'var(--oxblood)' }) => {
  const R = 140;
  const pts = [];
  pts.push([0, -R]);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
    pts.push([Math.cos(a) * R * 0.9, -R * 0.45]);
  }
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 - Math.PI / 2 + Math.PI / 5;
    pts.push([Math.cos(a) * R * 0.9, R * 0.45]);
  }
  pts.push([0, R]);

  const edges = [];
  for (let i = 1; i <= 5; i++) edges.push([0, i]);
  for (let i = 1; i <= 5; i++) edges.push([i, i === 5 ? 1 : i + 1]);
  for (let i = 0; i < 5; i++) {
    const a = i + 1, b = i + 6, c = ((i + 1) % 5) + 6;
    edges.push([a, b]);
    edges.push([a, c]);
  }
  for (let i = 6; i <= 10; i++) edges.push([i, i === 10 ? 6 : i + 1]);
  for (let i = 6; i <= 10; i++) edges.push([i, 11]);

  return (
    <svg viewBox="-180 -180 360 360" width={size} height={size} fill="none" stroke={stroke} strokeWidth="1">
      {edges.map(([a, b], i) => (
        <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} />
      ))}
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="2" fill={stroke} stroke="none" />
      ))}
    </svg>
  );
};

const WireTerrain = ({ size = 260, stroke = 'var(--oxblood)' }) => {
  const cols = 20, rows = 14;
  const cellW = 22, cellH = 14;
  const offX = -(cols * cellW) / 2;
  const offY = 20;
  const shear = 0.55;
  const amp = 52;
  const h = (i, j) => {
    const s = Math.sin(i * 0.9 + j * 1.7) * 43758.5453;
    const n1 = s - Math.floor(s);
    const s2 = Math.sin(i * 0.31 - j * 0.47) * 12543.21;
    const n2 = s2 - Math.floor(s2);
    const cx = cols / 2, cy = rows / 2;
    const d = Math.hypot((i - cx) / cx, (j - cy) / cy);
    const ridge = Math.max(0, 1 - d) * 0.9;
    return (n1 * 0.55 + n2 * 0.45) * 0.45 + ridge * 0.55;
  };
  const project = (i, j) => {
    const px = offX + i * cellW + j * (cellH * shear);
    const py = offY + j * cellH * 0.55 - h(i, j) * amp;
    return [px, py];
  };
  const rowPaths = [];
  for (let j = 0; j < rows; j++) {
    let d = '';
    for (let i = 0; i < cols; i++) {
      const [x, y] = project(i, j);
      d += (i === 0 ? 'M ' : 'L ') + x.toFixed(1) + ' ' + y.toFixed(1) + ' ';
    }
    const t = j / (rows - 1);
    const op = 0.35 + (1 - Math.abs(t - 0.5) * 2) * 0.55;
    rowPaths.push(<path key={'r'+j} d={d} opacity={op.toFixed(2)} />);
  }
  const colPaths = [];
  for (let i = 0; i < cols; i++) {
    let d = '';
    for (let j = 0; j < rows; j++) {
      const [x, y] = project(i, j);
      d += (j === 0 ? 'M ' : 'L ') + x.toFixed(1) + ' ' + y.toFixed(1) + ' ';
    }
    const t = i / (cols - 1);
    const op = 0.3 + (1 - Math.abs(t - 0.5) * 2) * 0.5;
    colPaths.push(<path key={'c'+i} d={d} opacity={op.toFixed(2)} />);
  }
  const peaks = [];
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      if (h(i, j) > 0.82) {
        const [x, y] = project(i, j);
        peaks.push(<circle key={'p'+i+'_'+j} cx={x} cy={y} r="1.6" fill={stroke} stroke="none"/>);
      }
    }
  }
  return (
    <svg viewBox="-160 -120 320 240" width={size} height={size * 0.75} fill="none" stroke={stroke} strokeWidth="0.7">
      <rect x="-150" y="-110" width="300" height="220" stroke={stroke} strokeWidth="0.6" opacity="0.25"/>
      <g stroke={stroke} strokeWidth="0.9">
        <path d="M -150 -100 L -150 -110 L -140 -110"/>
        <path d="M 140 -110 L 150 -110 L 150 -100"/>
        <path d="M -150 100 L -150 110 L -140 110"/>
        <path d="M 140 110 L 150 110 L 150 100"/>
      </g>
      <g>{rowPaths}</g>
      <g>{colPaths}</g>
      {peaks}
      <g stroke={stroke} opacity="0.55">
        <line x1="-150" y1="90" x2="-140" y2="90"/>
        <line x1="-150" y1="50" x2="-140" y2="50"/>
        <line x1="-150" y1="10" x2="-140" y2="10"/>
        <line x1="-150" y1="-30" x2="-140" y2="-30"/>
        <line x1="140" y1="90" x2="150" y2="90"/>
        <line x1="140" y1="50" x2="150" y2="50"/>
      </g>
      <g stroke="none" fill={stroke} fontFamily="monospace" fontSize="7" letterSpacing="2" opacity="0.75">
        <text x="-150" y="-96">Z+</text>
        <text x="132" y="-96">ALT</text>
        <text x="-150" y="106">TERRAIN_04</text>
        <text x="86" y="106">H 0.82</text>
      </g>
    </svg>
  );
};
const WireMask = WireTerrain;

const Sigil = ({ size = 100, stroke = 'var(--oxblood)' }) => (
  <svg viewBox="-60 -60 120 120" width={size} height={size} fill="none" stroke={stroke} strokeWidth="0.8">
    <circle cx="0" cy="0" r="55" opacity="0.8"/>
    <circle cx="0" cy="0" r="42" opacity="0.5"/>
    <polygon points="0,-40 35,20 -35,20" />
    <polygon points="0,40 35,-20 -35,-20" />
    <circle cx="0" cy="0" r="12" />
    <circle cx="0" cy="0" r="2" fill={stroke} stroke="none"/>
    {Array.from({length:12}).map((_,i)=>{
      const a = (i/12)*Math.PI*2;
      return <circle key={i} cx={Math.cos(a)*55} cy={Math.sin(a)*55} r="1.2" fill={stroke} stroke="none"/>;
    })}
  </svg>
);

const Crosshair = ({ size = 22, stroke = 'var(--oxblood)' }) => (
  <svg viewBox="-12 -12 24 24" width={size} height={size} fill="none" stroke={stroke} strokeWidth="1">
    <line x1="-10" y1="0" x2="-3" y2="0"/>
    <line x1="3" y1="0" x2="10" y2="0"/>
    <line x1="0" y1="-10" x2="0" y2="-3"/>
    <line x1="0" y1="3" x2="0" y2="10"/>
    <circle cx="0" cy="0" r="1.5" fill={stroke} stroke="none"/>
  </svg>
);

const Wave909 = ({ size = 160, stroke = 'var(--oxblood)' }) => {
  const W = 320, H = 140;
  const N = 260;
  const cx = 0, cy = 0;
  const samples = [];
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1);
    const env = Math.exp(-t * 3.2);
    const click = Math.exp(-t * 90) * 0.8;
    const freq = 22 - t * 16;
    const body = Math.sin(t * freq * Math.PI * 2 - 0.2) * env;
    const sub  = Math.sin(t * (freq * 0.5) * Math.PI * 2) * env * 0.35;
    const y = (body + sub + click) * 0.85;
    samples.push(y);
  }
  const toPath = (flip = 1) => {
    let d = '';
    for (let i = 0; i < N; i++) {
      const x = -W / 2 + (i / (N - 1)) * W;
      const y = cy + samples[i] * (H / 2) * flip;
      d += (i === 0 ? 'M ' : 'L ') + x.toFixed(1) + ' ' + y.toFixed(1) + ' ';
    }
    return d;
  };
  const bars = [];
  const BAR_N = 52;
  for (let i = 0; i < BAR_N; i++) {
    const t = i / (BAR_N - 1);
    const idx = Math.floor(t * (N - 1));
    const amp = Math.abs(samples[idx]);
    const x = -W / 2 + t * W;
    const half = amp * (H / 2) * 0.95;
    const bright = t < 0.08 ? 1 : 0.6;
    bars.push(
      <line key={i} x1={x} y1={-half} x2={x} y2={half}
        stroke={stroke} strokeWidth="1" opacity={bright}/>
    );
  }
  return (
    <svg viewBox={`${-W/2 - 10} ${-H/2 - 22} ${W + 20} ${H + 44}`}
         width={size * 2} height={size}
         fill="none" stroke={stroke} strokeWidth="0.8">
      <g strokeWidth="0.8">
        <path d={`M ${-W/2 - 4} ${-H/2 - 8} L ${-W/2 - 4} ${-H/2 - 14} L ${-W/2 + 6} ${-H/2 - 14}`}/>
        <path d={`M ${W/2 - 6} ${-H/2 - 14} L ${W/2 + 4} ${-H/2 - 14} L ${W/2 + 4} ${-H/2 - 8}`}/>
        <path d={`M ${-W/2 - 4} ${H/2 + 8} L ${-W/2 - 4} ${H/2 + 14} L ${-W/2 + 6} ${H/2 + 14}`}/>
        <path d={`M ${W/2 - 6} ${H/2 + 14} L ${W/2 + 4} ${H/2 + 14} L ${W/2 + 4} ${H/2 + 8}`}/>
      </g>
      <line x1={-W/2} y1="0" x2={W/2} y2="0" strokeDasharray="2 4" opacity="0.35"/>
      <g opacity="0.7">{bars}</g>
      <path d={toPath(1)} strokeWidth="1.1"/>
      <path d={toPath(-1)} strokeWidth="1.1" opacity="0.85"/>
      <g stroke={stroke} strokeWidth="0.9">
        <line x1={-W/2 + 4} y1={-H/2 - 2} x2={-W/2 + 4} y2={H/2 + 2} strokeDasharray="1 3"/>
      </g>
      <g stroke="none" fill={stroke} fontFamily="monospace" fontSize="8" letterSpacing="2" opacity="0.85">
        <text x={-W/2} y={-H/2 - 4}>909 / KICK</text>
        <text x={W/2 - 60} y={-H/2 - 4}>55HZ ↓ 32HZ</text>
        <text x={-W/2} y={H/2 + 12}>TRANSIENT</text>
        <text x={W/2 - 44} y={H/2 + 12}>DECAY 820MS</text>
      </g>
    </svg>
  );
};

const Wave808 = Wave909;

const HexMark = ({ size = 60, stroke = 'var(--oxblood)' }) => {
  const R = 50;
  const hex = (r) => {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
      pts.push([Math.cos(a) * r, Math.sin(a) * r]);
    }
    return pts;
  };
  const outer = hex(R);
  const inner = hex(R * 0.55);
  const toPoly = (pts) => pts.map(p => p.join(',')).join(' ');
  return (
    <svg viewBox="-60 -60 120 120" width={size} height={size} fill="none" stroke={stroke} strokeWidth="0.9">
      <polygon points={toPoly(outer)} strokeWidth="1.1"/>
      <polygon points={toPoly(hex(R * 0.78))} opacity="0.55"/>
      <polygon points={toPoly(inner)} strokeWidth="1"/>
      {outer.map((p, i) => (
        <line key={'s'+i} x1="0" y1="0" x2={p[0]} y2={p[1]} opacity="0.45"/>
      ))}
      {outer.map((p, i) => {
        const q = inner[(i + 1) % 6];
        return <line key={'z'+i} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} opacity="0.6"/>;
      })}
      <circle cx="0" cy="0" r="3" fill={stroke} stroke="none"/>
      {outer.map((p, i) => (
        <circle key={'d'+i} cx={p[0]} cy={p[1]} r="1.6" fill={stroke} stroke="none"/>
      ))}
    </svg>
  );
};

const AgoeTotem = ({ size = 72, stroke = 'var(--oxblood)' }) => (
  <svg viewBox="-30 -10 60 200" width={size * 0.6} height={size * 2}
       fill="none" stroke={stroke} strokeWidth="2.4"
       strokeLinecap="round" strokeLinejoin="round">
    <g>
      <path d="M -14 36 L 0 0 L 14 36" />
      <line x1="-8" y1="22" x2="8" y2="22" />
    </g>
    <g transform="translate(0 62)">
      <path d="M 12 -14
               C 4 -22, -14 -20, -16 -4
               C -18 12, 0 18, 12 12
               L 12 0 L 4 0" />
    </g>
    <g transform="translate(0 110)">
      <path d="M -14 0
               C -14 -14, 14 -14, 14 0
               C 14 14, -14 14, -14 0 Z" />
    </g>
    <g transform="translate(0 158)">
      <line x1="-12" y1="-14" x2="-12" y2="14" />
      <line x1="-12" y1="-14" x2="12" y2="-14" />
      <line x1="-12" y1="0"   x2="8"  y2="0"  />
      <line x1="-12" y1="14"  x2="12" y2="14" />
    </g>
  </svg>
);

Object.assign(window, { WireSphere, WireIcosa, WireMask, WireTerrain, Sigil, Crosshair, Wave808, Wave909, HexMark, AgoeTotem });
