// The 3D clothes rail inside New Dimension mode, with live garment physics readouts.
import { gpuPanel } from '../tools.js';
import { mountSite, supportReport, enableHelp, lookPanel } from './site3d.js';

const W = 'htmlInCanvasWebGpu.client-CCocYEXD.js';
const h = (s) => { const t = document.createElement('template'); t.innerHTML = s.trim(); return t.content.firstElementChild; };

function garmentPanel(win) {
  const panel = h(`<div class="dbg"><div class="dbg-row"><b>Garments</b><span class="hint">live from <code>__hic.garments()</code> · swing φ plotted per garment</span><button data-a="reset">Stand props back up</button></div>
    <canvas class="phiplot" width="600" height="120" style="width:100%;height:120px;background:#020722;border-radius:4px"></canvas>
    <div class="gtable mono" style="max-height:260px;overflow:auto"></div></div>`);
  const plot = panel.querySelector('canvas'), g = plot.getContext('2d'), table = panel.querySelector('.gtable');
  const hist = new Map();
  panel.querySelector('[data-a=reset]').onclick = () => win.__hic?.resetProps?.();
  const tick = () => {
    if (!document.body.contains(panel)) return;
    const list = win.__hic?.garments?.() || [];
    list.forEach((r) => { const a = hist.get(r.key) || []; a.push(r.phi); if (a.length > 300) a.shift(); hist.set(r.key, a); });
    g.clearRect(0, 0, 600, 120); g.strokeStyle = 'rgba(255,255,255,.15)'; g.beginPath(); g.moveTo(0, 60); g.lineTo(600, 60); g.stroke();
    let i = 0;
    hist.forEach((a) => { g.strokeStyle = `hsl(${(i++ * 47) % 360} 80% 70%)`; g.beginPath(); a.forEach((v, k) => (k ? g.lineTo(k * 2, 60 - v * 60) : g.moveTo(0, 60 - v * 60))); g.stroke(); });
    table.innerHTML = list.length
      ? `<table class="k"><tr><td>garment</td><td>hook u · hem u · φ swing · b hem · ends</td></tr>${list.slice(0, 56).map((r) => `<tr><td>${r.key}</td><td>${(+r.hook).toFixed(1)} · ${(+r.hem).toFixed(1)} · ${(+r.phi).toFixed(3)} · ${(+r.b).toFixed(3)} · [${(r.ends || []).map((v) => (+v).toFixed(0)).join(', ')}]</td></tr>`).join('')}</table>`
      : '<p class="hint">No garments placed yet: scroll the frame down to the Merchandising section with the 3D mode active.</p>';
    setTimeout(tick, 100);
  };
  tick();
  return panel;
}

export default {
  id: 'rail', group: 'New Dimension (3D site)', title: 'The clothes rail', needs: 'flag',
  blurb: 'Line-art clothing racks standing beside the curled page at the Merchandising section: 56 garments that slide, swing, twist and bump each other, all procedural, all draggable.',
  needsNote: 'Lives inside New Dimension mode, so it needs the HTML-in-Canvas API too.',
  async mount(stage, side) {
    const frame = await mountSite(stage, 'expo-mode&game#merchandising');
    const win = frame.contentWindow;
    const sup = supportReport(win);
    if (!sup.ok) { side.appendChild(h(`<div class="dbg"><div class="dbg-row"><b>Support</b></div>${enableHelp}</div>`)); return {}; }
    side.appendChild(garmentPanel(win));
    side.appendChild(lookPanel(win));
    side.appendChild(gpuPanel({ lab: win.__lab, filter: (p) => /overlay/.test(p.label) }).panel);
    side.style.gridTemplateColumns = 'repeat(auto-fit, minmax(320px, 1fr))';
    return { win };
  },
  tour: [
    { title: 'Where it lives', body: `<p>The stores layer is one of the overlay layers in the 3D mode's look config (<code>layers.stores</code>: alpha 0.78, scale 0.65, placed 1.25 viewports below the section top). When the page's sections are measured, the one with id <code>merchandising</code> gets a scene: two rows, one each side of the page, each rack, rack, mannequin, rack, rack. The rail only becomes interactive once the tilt has finished.</p>`, src: [{ file: W, from: 532, to: 532 }, { file: W, from: 8380, to: 8399 }, { file: W, from: 8698, to: 8713 }] },
    { title: 'A rack, in real units', body: `<p>A rack is 300 px wide and 380 px tall, and the code treats it as 1.8 m, so about 211 px per metre. That scale gives physically sensible gravity later. Seven garments hang at even spacing, their kind taken from a cycle so neighbouring racks differ, each with a small starting twist from a sine.</p>`, src: [{ file: W, from: 6967, to: 6995 }, { file: W, from: 6882, to: 6882 }] },
    { title: 'Garments are drawn outlines', body: `<p>No models and no textures. Each kind (tee, Oxford shirt, linen dress, wool coat, chinos) is a hand-authored 2D outline in pixels, with seam and placket lines, button dots and a price tag. The hanger is a hook arc plus an 88 px triangle.</p>`, src: [{ file: W, from: 6727, to: 6760 }, { file: W, from: 6930, to: 6966 }] },
    { title: 'Meshing: resample, ear-clip, subdivide', body: `<p>The outline is resampled every 18 px, ear-clipped into triangles, then triangles are split along their longest edge until none is longer than 44 px. That dense mesh can bend smoothly; a cheap "still" mesh from the raw outline is used when nothing is moving.</p>`, src: [{ file: W, from: 6040, to: 6070 }, { file: W, from: 6883, to: 6929 }] },
    { title: 'Per-garment state', body: `<p>Each garment carries four tiny systems: slide along the rail (<code>du</code>, <code>vu</code>), swing (<code>phi</code>), hem lag (<code>b</code>) and twist (<code>th</code>). Gravity is 9.8 m/s² converted with the 211 px/m scale, and rail friction is 0.35.</p>`, src: [{ file: W, from: 12201, to: 12204 }, { file: W, from: 12661, to: 12669 }] },
    { title: 'Sliding on a curled page', body: `<p>Because the page curls, the rail tilts. The slope at the rack's row drives the slide: <code>g·(sin s − 0.35·cos s)</code>, so garments only start sliding once the slope beats the friction angle. Scrolling adds an inertial kick from the smoothed scroll acceleration. Velocity is damped at <code>e^(−4.5dt)</code>.</p>`, src: { file: W, from: 12704, to: 12718 } },
    { title: 'Pendulum swing, hem lag, twist', body: `<p>Swing is a damped pendulum around the slope, also pushed by rail acceleration. The hem is a stiffer spring that trails the swing, which is what makes it read as fabric. Twist springs back to zero unless you're holding it. Watch the φ plot settle after a flick.</p>`, src: { file: W, from: 12719, to: 12734 } },
    { title: 'Packing and hem collisions', body: `<p>Neighbours can't overlap. Their minimum gap depends on how twisted each is, so turned garments pack tighter. Sweeps forward and back push neighbours along, transferring velocity or bouncing at −0.2. Swinging hems that meet share their relative velocity. Up to six relaxation passes settle it all.</p>`, src: [{ file: W, from: 12235, to: 12241 }, { file: W, from: 12736, to: 12801 }] },
    { title: 'Bending the cloth on the CPU', body: `<p>Each frame the outline is deformed. At rest, a cheap path swings it rigidly with a little hem flare and waist pinch. Once moving or grabbed, the dense mesh adds per-vertex twist lag, sag and a travelling ripple whose speed follows the slide velocity. A motionless garment reuses a cached result.</p>`, src: { file: W, from: 8456, to: 8525 } },
    { title: 'Drawing: black fills, white lines', body: `<p>No lighting. Garments are black triangles that write depth, so they hide the white lines behind them, plus white outline, seam and hanger lines. Hovering brightens a garment and shows a price pill above the hook.</p>`, src: [{ file: W, from: 8892, to: 8925 }, { file: W, from: 9867, to: 9915 }] },
    { title: 'Grab, drag, twist, flick', body: `<p>Picking projects each outline to the screen and tests the pointer against it. Dragging is projected onto the rail's on-screen direction to slide the garment, and sideways movement twists it. A tap without movement adds a swing-and-spin flick. Props get knocked over instead.</p>`, src: [{ file: W, from: 12366, to: 12401 }, { file: W, from: 12472, to: 12498 }] },
  ],
};
