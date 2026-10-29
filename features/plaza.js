// Isometric plaza — Shopify's real mountRoom, with a frame debugger and guided tour.
import { canvasDebugger, tour, findCanvas } from '../tools.js';
import { mountReal, stageProps } from '../runtime.js';

const F = 'room-fFDJVA5E.js';
const isScene = (s) => /room-story-(plaza|home|store)/.test(s);

const layers = [
  { id: 'background', label: 'Background art', colour: '#7f8cff' },
  { id: 'occluders', label: 'Tree occluders (clip + redraw)', colour: '#4ce0a1' },
  { id: 'shadows', label: 'Shadows (tinted atlas, sheared)', colour: '#c06bff' },
  { id: 'sprites', label: 'Sprites (atlas)', colour: '#ffcf5c' },
  { id: 'wash', label: 'Focus wash (saturation, navy, vignette)', colour: '#ff7a59' },
  { id: 'ui', label: 'Indicators, card, radar', colour: '#ffffff' },
];
function classify(op) {
  if (op.m === 'drawImage') {
    if (isScene(op.src)) return op.clip ? 'occluders' : 'background';
    if (op.src.startsWith('canvas')) return 'shadows';
    if (/atlas|1742623db5/.test(op.src)) return 'sprites';
    return 'ui';
  }
  if (op.m === 'fillRect' && (op.comp === 'saturation' || op.a[0] === 0 && op.a[1] === 0)) return 'wash';
  return 'ui';
}
const outlines = [
  { id: 'clip', label: 'Tree outline polygons (the clip paths)', colour: '#4ce0a1', match: (op) => op.m === 'clip', dash: [4, 3], default: true },
  { id: 'shear', label: 'Shadow shear quads', colour: '#c06bff', match: (op) => op.layer === 'shadows' },
  { id: 'sprite', label: 'Sprite destination rects', colour: '#ffcf5c', match: (op) => op.layer === 'sprites' },
];

export default {
  id: 'plaza', group: 'Hero rail', title: 'Isometric plaza',
  blurb: 'A 2D canvas that reads as isometric 3D: one painted image as world space, sprites from an atlas, and a clip-and-redraw trick for depth.',
  async mount(stage, side) {
    const host = document.createElement('div'); host.className = 'real-stage room'; stage.appendChild(host);
    const props = await stageProps('room');
    await mountReal('room', host, { strings: props.strings, locale: 'en' });
    const dbg = canvasDebugger(host, { name: 'room', classify, layers, outlines });
    side.appendChild(dbg.panel);
    dbg.attach(await findCanvas(host));
    return { dbg };
  },
  tour: [
    { title: 'Mount and data', body: `<p>The widget is one function, <code>mountRoom(element, strings)</code>, registered in <code>mountWidget.client</code> and loaded lazily when a media query matches. Everything it needs is authored data at the top of the module: a frame table for the sprite atlas (each frame has a source rect, a feet anchor and a reference height) and a scene table with the stops, trees, planters and floor polygons, all in the background image's pixel space.</p><p>Use the layer panel to the right: every number is a live count of draw calls per frame.</p>`,
      src: [{ file: F, from: 16, to: 34 }, { file: F, from: 201, to: 240 }], apply: ({ dbg }) => dbg.set([], null, ['clip']) },
    { title: 'Background as world space', body: `<p>Solo the <b>Background art</b> layer. That single <code>drawImage</code> is the whole plaza: trees, benches, lamps and the kiosk are painted in. The camera is a cover-fit scale plus a clamped centre, so world coordinates are simply pixels of this JPG.</p><p>Notice the blur: when you focus a shopper the same call runs with <code>ctx.filter = blur(1.4n px)</code>.</p>`,
      src: { file: F, from: 950, to: 967, mark: [966, 967] }, apply: ({ dbg }) => dbg.set([], 'background', []) },
    { title: 'A sprite atlas, sampled by distance', body: `<p>Solo <b>Sprites</b> and turn on <i>Sprite destination rects</i>. Each person is one <code>drawImage</code> from the atlas with a source rect from the frame table. The frame picker chooses a pose when idle, or <code>toward</code>/<code>away</code> walk frames indexed by <code>phase</code>. Phase only advances by distance walked divided by body height, so feet never slide as speed changes. Mirroring uses a negative x scale.</p>`,
      src: [{ file: F, from: 685, to: 711, mark: [707, 708] }, { file: F, from: 799, to: 808 }], apply: ({ dbg }) => dbg.set([], 'sprites', ['sprite']) },
    { title: 'Steering between stops', body: `<p>No pathfinding. Each shopper picks a random stop that isn't its current, previous or someone else's, then steers: heading eases toward the target at <code>1 − e^(−7dt)</code>, target speed is <code>min(max, max(0.3·max, dist·2.6))</code> and drops to zero inside the arrive radius, with faster braking (rate 8) than accelerating (4.5). Facing flips only past ±0.35/±0.3 thresholds so sprites don't flicker.</p>`,
      src: [{ file: F, from: 677, to: 684 }, { file: F, from: 712, to: 734, mark: [719, 721, 722, 725] }], apply: ({ dbg }) => dbg.set([], null, ['sprite']) },
    { title: 'Personal space and obstacles', body: `<p>Pairs are separated inside an ellipse of <code>0.26h × 0.12h</code> (wide and flat, because it's a floor seen at an angle). Planters are polygons: a ray-cast point-in-polygon test, then a snap to the closest point on the nearest edge. The same helpers clamp the pointer target to the walkable floor.</p>`,
      src: [{ file: F, from: 782, to: 798 }, { file: F, from: 431, to: 459 }], apply: ({ dbg }) => dbg.set([], null, ['clip', 'sprite']) },
    { title: 'Depth by feet y, trees by clip-and-redraw', body: `<p>Shoppers are sorted by y. While walking that list, any tree whose depth has been passed is drawn by clipping to its outline polygon and drawing the background again: the painted tree covers whoever is behind it. Toggle <b>Tree occluders</b> off and walk someone behind a tree to see the trick fail.</p>`,
      src: [{ file: F, from: 968, to: 975, mark: [968, 973] }, { file: F, from: 826, to: 830 }], apply: ({ dbg }) => dbg.set([], null, ['clip']) },
    { title: 'Shadows from a tinted atlas copy', body: `<p>Once, at load, the atlas is copied to a canvas and filled navy with <code>source-in</code>, which keeps only the silhouettes. Each frame, a shopper's shadow is that silhouette drawn with a shear transform <code>(c 0.62, d 0.32)</code> at 28% alpha, before the sprite itself. Solo <b>Shadows</b> with the shear quads on.</p>`,
      src: [{ file: F, from: 504, to: 515, mark: [509, 510] }, { file: F, from: 809, to: 825, mark: [817, 818] }], apply: ({ dbg }) => dbg.set([], 'shadows', ['shear']) },
    { title: 'Indicators and dwell', body: `<p>Head dots pulse on a 2.6 s cycle offset per person; hovering grows the dot and prints the name. Rest the pointer on someone for half a second and a progress arc completes at their feet, then they follow you. Hide <b>Indicators</b> to see the scene without any UI.</p>`,
      src: [{ file: F, from: 832, to: 866 }, { file: F, from: 1460, to: 1500 }], apply: ({ dbg }) => dbg.set([], null, []) },
    { title: 'Focus: blur, desaturate, navy, vignette', body: `<p>Click a shopper. The focus amount <code>n</code> drives zoom (<code>1 + 0.75n</code>), a <code>blur()</code> filter on the background, then three full-canvas fills: a grey <code>saturation</code> composite at <code>0.7n</code>, a navy wash at <code>0.58n</code>, and a side vignette gradient. The focused shopper is then drawn again, sharp, on top. Freeze while focused and scrub the frame to watch each pass land.</p>`,
      src: { file: F, from: 976, to: 1002, mark: [978, 984, 999] }, apply: ({ dbg }) => dbg.set([], null, []) },
    { title: 'Checkout card and profile radar', body: `<p>The card is drawn in canvas, not DOM: a rounded rect, text wrapped with <code>Intl.Segmenter</code> and shrunk to fit, the Buy with Shop logo, and a pulsing button. A cubic wire joins hand to card. After paying, a pentagon radar grows from per-person trait values, with dashed guides and travelling dots.</p>`,
      src: [{ file: F, from: 1115, to: 1160 }, { file: F, from: 1265, to: 1308 }, { file: F, from: 1453, to: 1459 }], apply: ({ dbg }) => dbg.set([], null, []) },
  ],
};
