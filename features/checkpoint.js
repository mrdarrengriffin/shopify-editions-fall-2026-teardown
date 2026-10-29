// Payment checkpoint: real widget, frame debugger, live telemetry, walkthrough.
import { canvasDebugger, findCanvas } from '../tools.js';
import { mountReal, stageProps } from '../runtime.js';

const F = 'checkpoint-BgJkuEPp.js';
const layers = [
  { id: 'guides', label: 'Lane guides (béziers)', colour: '#5b6bd6' },
  { id: 'envelopes', label: 'Lane envelopes (mean ± sd)', colour: '#4ce0a1' },
  { id: 'trails', label: 'Trails (Path2D alpha buckets)', colour: '#c06bff' },
  { id: 'dots', label: 'Payment dots', colour: '#ffffff' },
  { id: 'rings', label: 'Reject rings', colour: '#ff7a59' },
  { id: 'barrier', label: 'Barrier band + line', colour: '#ffcf5c' },
  { id: 'impacts', label: 'Impact flashes', colour: '#ff3d71' },
  { id: 'other', label: 'Other', colour: '#777' },
];
const has = (op, m) => (op.path || []).some((p) => p.m === m);
function classify(op) {
  if ((op.m === 'fill' || op.m === 'stroke') && op.a[0] instanceof Path2D) return 'trails';
  if (op.m === 'fillRect' || op.m === 'clearRect') return op.fs === 'gradient' ? 'barrier' : 'other';
  if (has(op, 'ellipse')) return 'impacts';
  if (op.m === 'stroke' && has(op, 'bezierCurveTo')) return 'guides';
  const n = (op.path || []).length;
  if (n > 8 && !has(op, 'arc')) return 'envelopes';
  if (op.m === 'fill' && has(op, 'arc')) return 'dots';
  if (op.m === 'stroke' && has(op, 'arc')) return 'rings';
  if (op.m === 'stroke' && n <= 2) return 'barrier';
  return 'other';
}
const outlines = [
  { id: 'env', label: 'Envelope outlines', colour: '#4ce0a1', match: (op) => op.layer === 'envelopes' },
  { id: 'guide', label: 'Guide curves', colour: '#8e9dff', match: (op) => op.layer === 'guides' },
];

export default {
  id: 'checkpoint', group: 'Hero rail', title: 'Payment checkpoint',
  blurb: 'A Canvas 2D particle system in a normalised world: 83.3 payments a second flow at a line, exactly 3.5 a second bounce off, and the rest spring into lanes whose spread is measured live.',
  async mount(stage, side) {
    const host = document.createElement('div'); host.className = 'real-stage cp'; host.dataset.heroColour = '#051daa'; stage.appendChild(host);
    const props = await stageProps('checkpoint');
    await mountReal('checkpoint', host, { strings: props.strings, locale: 'en' });
    const dbg = canvasDebugger(host, { name: 'checkpoint', classify, layers, outlines });
    side.appendChild(dbg.panel);
    dbg.attach(await findCanvas(host));
    const tel = document.createElement('div'); tel.className = 'dbg';
    tel.innerHTML = '<div class="dbg-row"><b>Telemetry</b><span class="hint">the widget writes these data-* attributes itself, every frame</span></div><div class="kv" data-k></div>';
    side.appendChild(tel);
    const kv = tel.querySelector('[data-k]');
    const tick = () => { if (!document.body.contains(kv)) return; const all = [host, ...host.querySelectorAll('*')].flatMap((n) => Object.entries(n.dataset || {})); kv.innerHTML = all.filter(([k]) => k !== 'heroColour').slice(0, 30).map(([k, v]) => `<span>${k}</span><b>${String(v).slice(0, 60)}</b>`).join(''); setTimeout(tick, 150); };
    tick();
    return { dbg };
  },
  tour: [
    { title: 'A world from 0 to 1', body: `<p>Particles live in a normalised square: x from 0 to 1 across, y from 0 to 1 down, mapped into a padded box each frame. The barrier is at x = 0.5 and four lanes sit at y = 0.2, 0.4, 0.6 and 0.8. Constants up top set the max age (4.6 s), reject life (1.1 s) and bounce angles.</p>`, src: [{ file: F, from: 13, to: 14 }, { file: F, from: 76, to: 84 }], apply: ({ dbg }) => dbg?.set([], null, []) },
    { title: 'Exact rates from accumulators', body: `<p>5000 payments a minute is 83.3 a second. Instead of rolling dice per frame, an accumulator adds <code>rate·dt</code> and emits one particle per whole unit, so the count is exact at any frame rate. Rejects are paced the same way at exactly 3.5 a second. Check <code>data-arrival-rate</code> and <code>data-rejection-rate</code> in the telemetry.</p>`, src: [{ file: F, from: 338, to: 358 }, { file: F, from: 169, to: 200 }], apply: ({ dbg }) => dbg?.set([], 'dots', []) },
    { title: 'The wavy approach', body: `<p>Before the line, vertical motion springs toward a target built from two drifting sines plus a gradual pull toward the particle's future lane, then squashed with <code>tanh</code> so nothing hugs the edges. Gaussian jitter scaled by √dt keeps it alive without depending on frame rate.</p>`, src: { file: F, from: 274, to: 291 }, apply: ({ dbg }) => dbg?.set([], 'dots', []) },
    { title: 'Crossing the line', body: `<p>When a particle reaches the barrier it either becomes <i>allowed</i> (keeping its speed, damping its vertical velocity) or, if it was marked as a reject, is pinned for 40 ms then bounced back at a random angle between 0.17 and 0.49 rad.</p>`, src: [{ file: F, from: 232, to: 250 }, { file: F, from: 292, to: 337 }], apply: ({ dbg }) => dbg?.set([], null, []) },
    { title: 'Snapping into lanes', body: `<p>Allowed particles get a stiff spring (k 300, damping 32) toward their lane's y over the next tenth of the width, which is what turns the cloud into four streams. Solo <b>Lane guides</b> to see the faint routes drawn behind them.</p>`, src: { file: F, from: 576, to: 606 }, apply: ({ dbg }) => dbg?.set([], 'guides', ['guide']) },
    { title: 'Trails in seven alpha buckets', body: `<p>Instead of stroking each trail separately, segments are sorted into a handful of <code>Path2D</code> objects by age and stroked once per bucket with decreasing alpha. That's a few draw calls for hundreds of trails. Freeze and scrub to see them land.</p>`, src: [{ file: F, from: 251, to: 273 }, { file: F, from: 499, to: 533 }], apply: ({ dbg }) => dbg?.set([], 'trails', []) },
    { title: 'Live envelopes: mean ± sd per lane', body: `<p>For each lane, 22 bins across the right half collect the y of every particle, then compute mean and standard deviation, low-passed over time. The band is drawn as mean ± max(0.024, sd) with dots marching along its edges. It's a real statistic of the live particles, not decoration.</p>`, src: [{ file: F, from: 359, to: 420 }, { file: F, from: 635, to: 652 }], apply: ({ dbg }) => dbg?.set([], 'envelopes', ['env']) },
    { title: 'Barrier, dots and reject rings', body: `<p>The barrier is a soft gradient band in the hero colour plus a 1 px line fading toward the ends. Allowed payments are filled dots; pending rejects are hollow rings so you can spot them before they hit.</p>`, src: [{ file: F, from: 421, to: 460 }, { file: F, from: 534, to: 575 }], apply: ({ dbg }) => dbg?.set([], null, []) },
    { title: 'Impact flashes', body: `<p>Each reject spawns a short-lived impact: a radial glow, two growing ellipses and a little spark, fading with <code>(1 − age/0.52)²</code>. Solo <b>Impact flashes</b> and wait for one.</p>`, src: { file: F, from: 653, to: 704 }, apply: ({ dbg }) => dbg?.set([], 'impacts', []) },
    { title: 'Telemetry and the frame', body: `<p>Every frame the widget clears, draws guides, envelopes, trails, dots, barrier and impacts in that order, then writes its own counts to <code>data-*</code> attributes. That's handy for tests, and it's what the telemetry panel reads.</p>`, src: [{ file: F, from: 755, to: 792 }, { file: F, from: 737, to: 754 }], apply: ({ dbg }) => dbg?.set([], null, []) },
  ],
};
