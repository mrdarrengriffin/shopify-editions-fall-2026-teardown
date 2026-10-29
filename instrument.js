// Lab instrumentation. Load as a classic <script> BEFORE any site module so every canvas/GPU call is observable.
// Nothing here edits Shopify's files; it wraps browser APIs so the lab can record, filter, freeze and replay.
(() => {
  if (window.__lab) return;
  const LAB = (window.__lab = { frame: 0, frozen: false, held: [], recorders: new Set(), gpu: null, listeners: new Set() });
  const emit = (type, detail) => LAB.listeners.forEach((fn) => fn(type, detail));
  LAB.on = (fn) => (LAB.listeners.add(fn), () => LAB.listeners.delete(fn));

  // ---------------- frame clock + freeze ----------------
  const rAF = window.requestAnimationFrame.bind(window);
  let lastTs = -1;
  window.requestAnimationFrame = (cb) => {
    if (LAB.frozen) { LAB.held.push(cb); return -1; }
    return rAF((ts) => {
      if (ts !== lastTs) { lastTs = ts; LAB.frame++; }
      if (LAB.frozen) { LAB.held.push(cb); return; }
      cb(ts);
    });
  };
  LAB.freeze = (on) => {
    LAB.frozen = on;
    if (!on) { const h = LAB.held.splice(0); h.forEach((cb) => window.requestAnimationFrame(cb)); }
    emit('freeze', on);
  };
  LAB.step = () => { const h = LAB.held.splice(0); LAB.frozen = false; h.forEach((cb) => window.requestAnimationFrame(cb)); rAF(() => rAF(() => { LAB.frozen = true; emit('freeze', true); })); };

  // ---------------- Canvas 2D recorder ----------------
  const P = CanvasRenderingContext2D.prototype;
  const DRAW = new Set(['drawImage', 'fill', 'stroke', 'fillRect', 'strokeRect', 'fillText', 'strokeText', 'clearRect', 'putImageData']);
  const PATH = new Set(['beginPath', 'moveTo', 'lineTo', 'arc', 'arcTo', 'ellipse', 'bezierCurveTo', 'quadraticCurveTo', 'rect', 'roundRect', 'closePath']);
  const STATE = new Set(['save', 'restore', 'clip', 'setTransform', 'transform', 'translate', 'scale', 'rotate', 'resetTransform', 'setLineDash']);
  const PROPS = ['globalAlpha', 'globalCompositeOperation', 'filter', 'fillStyle', 'strokeStyle', 'lineWidth', 'font', 'textAlign', 'textBaseline', 'lineCap', 'lineJoin', 'shadowColor', 'shadowBlur', 'imageSmoothingEnabled'];

  class Recorder {
    constructor(canvas, { name = 'canvas', classify } = {}) {
      this.canvas = canvas; this.name = name; this.classify = classify || defaultClassify;
      this.ops = []; this.last = []; this.frameId = -1; this.hidden = new Set(); this.counts = {}; this.lastCounts = {};
      this.stack = [{ clip: 0 }]; this.path = []; this.solo = null;
      canvas.__labRec = this; LAB.recorders.add(this);
    }
    roll() {
      if (this.frameId === LAB.frame) return;
      if (this.ops.length) { this.last = this.ops; this.lastCounts = this.counts; emit('frame', this); }
      this.ops = []; this.counts = {}; this.frameId = LAB.frame;
    }
    detach() { delete this.canvas.__labRec; LAB.recorders.delete(this); }
  }
  LAB.Recorder = Recorder;
  LAB.attach = (canvas, opts) => canvas.__labRec || new Recorder(canvas, opts);

  function srcName(img) {
    if (!img) return '';
    if (img instanceof HTMLImageElement) return (img.currentSrc || img.src || '').split('./shop/').pop().split('?')[0];
    if (img instanceof HTMLCanvasElement || (window.OffscreenCanvas && img instanceof OffscreenCanvas)) return `canvas ${img.width}×${img.height}`;
    if (img instanceof HTMLVideoElement) return 'video';
    if (window.ImageBitmap && img instanceof ImageBitmap) return `bitmap ${img.width}×${img.height}`;
    return img.constructor?.name || '';
  }
  function defaultClassify(op) {
    if (op.m === 'drawImage') return op.clip ? 'image (clipped)' : 'image';
    if (op.m === 'clearRect') return 'clear';
    if (op.comp && op.comp !== 'source-over') return `composite: ${op.comp}`;
    if (op.m === 'fillText' || op.m === 'strokeText') return 'text';
    if (op.m === 'stroke' || op.m === 'strokeRect') return 'strokes';
    return 'fills';
  }

  const wrap = (name) => {
    const orig = P[name]; if (typeof orig !== 'function') return;
    P[name] = function (...a) {
      const r = this.canvas && this.canvas.__labRec;
      if (!r) return orig.apply(this, a);
      r.roll();
      if (name === 'save') r.stack.push({ clip: r.stack.at(-1).clip });
      else if (name === 'restore') { if (r.stack.length > 1) r.stack.pop(); }
      if (name === 'beginPath') r.path = [];
      const t = this.getTransform();
      if (PATH.has(name) && name !== 'beginPath') r.path.push({ m: name, a, t });
      const op = { m: name, a, t, alpha: this.globalAlpha, comp: this.globalCompositeOperation, filter: this.filter, clip: r.stack.at(-1).clip, lw: this.lineWidth, fs: typeof this.fillStyle === 'string' ? this.fillStyle : 'gradient', ss: typeof this.strokeStyle === 'string' ? this.strokeStyle : 'gradient' };
      if (name === 'drawImage') op.src = srcName(a[0]);
      if (name === 'fill' || name === 'stroke' || name === 'clip') op.path = r.path.slice();
      if (name === 'clip') r.stack.at(-1).clip++;
      if (DRAW.has(name)) {
        op.layer = r.classify(op, this, r);
        r.counts[op.layer] = (r.counts[op.layer] || 0) + 1;
        r.ops.push(op);
        if (r.hidden.has(op.layer) || (r.solo && r.solo !== op.layer)) return;
      } else if (STATE.has(name) || PATH.has(name)) r.ops.push(op);
      return orig.apply(this, a);
    };
  };
  [...DRAW, ...PATH, ...STATE].forEach(wrap);
  PROPS.forEach((k) => {
    const d = Object.getOwnPropertyDescriptor(P, k); if (!d || !d.set) return;
    Object.defineProperty(P, k, {
      ...d,
      set(v) { const r = this.canvas && this.canvas.__labRec; if (r) { r.roll(); r.ops.push({ m: 'set', k, v }); } d.set.call(this, v); },
    });
  });

  // geometry helpers for overlays
  LAB.apply = (t, x, y) => [t.a * x + t.c * y + t.e, t.b * x + t.d * y + t.f];
  LAB.opQuad = (op) => {
    const t = op.t, a = op.a; let r;
    if (op.m === 'drawImage') r = a.length >= 9 ? [a[5], a[6], a[7], a[8]] : a.length >= 5 ? [a[1], a[2], a[3], a[4]] : [a[1], a[2], a[0]?.width || 0, a[0]?.height || 0];
    else if (op.m === 'fillRect' || op.m === 'strokeRect' || op.m === 'clearRect') r = a.slice(0, 4);
    else if (op.m === 'fillText' || op.m === 'strokeText') r = [a[1], a[2] - 8, (String(a[0]).length || 1) * 5, 10];
    if (r) return [[r[0], r[1]], [r[0] + r[2], r[1]], [r[0] + r[2], r[1] + r[3]], [r[0], r[1] + r[3]]].map(([x, y]) => LAB.apply(t, x, y));
    if (op.path) return LAB.pathPoints(op.path);
    return null;
  };
  LAB.pathPoints = (path) => {
    const pts = [];
    path.forEach((p) => {
      const a = p.a;
      if (p.m === 'moveTo' || p.m === 'lineTo') pts.push(LAB.apply(p.t, a[0], a[1]));
      else if (p.m === 'bezierCurveTo') pts.push(LAB.apply(p.t, a[4], a[5]));
      else if (p.m === 'quadraticCurveTo') pts.push(LAB.apply(p.t, a[2], a[3]));
      else if (p.m === 'arc' || p.m === 'ellipse') { const rx = a[2], ry = p.m === 'ellipse' ? a[3] : a[2]; for (let i = 0; i <= 16; i++) { const th = (i / 16) * Math.PI * 2; pts.push(LAB.apply(p.t, a[0] + Math.cos(th) * rx, a[1] + Math.sin(th) * ry)); } }
      else if (p.m === 'rect' || p.m === 'roundRect') { const [x, y, w, h] = a; [[x, y], [x + w, y], [x + w, y + h], [x, y + h], [x, y]].forEach(([u, v]) => pts.push(LAB.apply(p.t, u, v))); }
    });
    return pts;
  };
  // replay the first n recorded ops of a frame into a context (frame debugger)
  LAB.replay = (ops, ctx, n) => {
    ctx.save();
    for (let i = 0; i < Math.min(n, ops.length); i++) {
      const op = ops[i];
      try {
        if (op.m === 'set') ctx[op.k] = op.v;
        else if (op.m === 'beginPath' || PATH.has(op.m) || STATE.has(op.m)) ctx[op.m](...op.a);
        else if (DRAW.has(op.m)) { ctx.setTransform(op.t); ctx[op.m](...op.a); }
      } catch { /* sources may have been released */ }
    }
    ctx.restore();
  };

  // ---------------- WebGPU interceptor ----------------
  if (window.GPUDevice) {
    const G = (LAB.gpu = { modules: [], pipelines: [], buffers: new Map(), draws: {}, lastDraws: {}, passes: [], lastPasses: [], hidden: new Set(), shaderPatches: [], frame: -1 });
    const D = GPUDevice.prototype, Q = GPUQueue.prototype, E = GPURenderPassEncoder.prototype, C = GPUCommandEncoder.prototype;
    const roll = () => { if (G.frame !== LAB.frame) { G.lastDraws = G.draws; G.lastPasses = G.passes; G.draws = {}; G.passes = []; G.frame = LAB.frame; emit('gpu-frame', G); } };
    const csm = D.createShaderModule;
    D.createShaderModule = function (desc) {
      let code = desc.code;
      for (const p of G.shaderPatches) { const out = p(code, desc.label); if (typeof out === 'string') code = out; }
      const mod = csm.call(this, { ...desc, code });
      const rec = { label: desc.label || guessLabel(code), code, original: desc.code, module: mod, patched: code !== desc.code };
      G.modules.push(rec); mod.__lab = rec; emit('shader', rec);
      return mod;
    };
    const guessLabel = (code) => (code.match(/fn\s+(\w+)\s*\(/g) || []).slice(0, 3).map((s) => s.replace(/fn\s+|\s*\(/g, '')).join(' · ') || 'shader';
    const pipeLabel = (desc) => desc.label || [desc.vertex?.module?.__lab?.label, desc.fragment?.entryPoint].filter(Boolean).join(' / ') || `pipeline ${G.pipelines.length}`;
    const track = (p, desc) => { const rec = { label: pipeLabel(desc), desc, pipeline: p, samples: desc.multisample?.count || 1, blend: !!desc.fragment?.targets?.[0]?.blend, depth: desc.depthStencil?.format || 'none' }; p.__lab = rec; G.pipelines.push(rec); emit('pipeline', rec); return p; };
    const crp = D.createRenderPipeline; D.createRenderPipeline = function (desc) { return track(crp.call(this, desc), desc); };
    const crpa = D.createRenderPipelineAsync; if (crpa) D.createRenderPipelineAsync = function (desc) { return crpa.call(this, desc).then((p) => track(p, desc)); };
    const cb = D.createBuffer; D.createBuffer = function (desc) { const b = cb.call(this, desc); b.__lab = { label: desc.label || '', size: desc.size, usage: desc.usage, data: null }; return b; };
    const wb = Q.writeBuffer;
    Q.writeBuffer = function (buf, off, data, dataOff = 0, size) {
      try {
        if (buf.__lab && (buf.__lab.usage & GPUBufferUsage.UNIFORM || buf.__lab.size <= 4096)) {
          const src = ArrayBuffer.isView(data) ? data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) : data.slice(0);
          buf.__lab.data = new Float32Array(src.slice(0, Math.floor(src.byteLength / 4) * 4)); buf.__lab.offset = off; G.buffers.set(buf, buf.__lab);
        }
      } catch { /* ignore */ }
      return wb.call(this, buf, off, data, dataOff, size);
    };
    const brp = C.beginRenderPass;
    C.beginRenderPass = function (desc) { roll(); const pass = brp.call(this, desc); pass.__lab = { label: desc.label || `pass ${G.passes.length}`, draws: 0, colour: desc.colorAttachments?.length || 0, depth: !!desc.depthStencilAttachment }; G.passes.push(pass.__lab); return pass; };
    const sp = E.setPipeline; E.setPipeline = function (p) { this.__pipe = p.__lab; return sp.call(this, p); };
    for (const name of ['draw', 'drawIndexed', 'drawIndirect', 'drawIndexedIndirect']) {
      const orig = E[name]; if (!orig) continue;
      E[name] = function (...a) {
        roll();
        const lab = this.__pipe?.label || '?';
        const cnt = name === 'drawIndexed' ? a[0] : name === 'draw' ? a[0] : 0, inst = name.startsWith('draw') && !name.endsWith('Indirect') ? a[1] ?? 1 : 1;
        const d = (G.draws[lab] ||= { calls: 0, verts: 0, inst: 0 }); d.calls++; d.verts += cnt; d.inst += inst;
        if (this.__lab) this.__lab.draws++;
        if (G.hidden.has(lab)) return;
        return orig.apply(this, a);
      };
    }
  }
})();
