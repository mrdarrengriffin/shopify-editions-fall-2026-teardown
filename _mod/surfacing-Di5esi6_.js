import { g as xs, f as de } from "./formatCopy-Cs7MVtfe.js";
import { c as vs, W as ws } from "./surface-Be90gCgo.js";
import { v as Ms, n as ne, a as As, S as pe, P as Es, q as Ss, B as Jt, b as Ts } from "./gltf-CF5uy7xI.js";
import { c as _s, n as Ls } from "./shader-7sCtY4bJ.js";
import { M as ks, r as Ps } from "./mesh.wgsl-CahI0rXV.js";
import "./locale-DXEWuBc6.js";
import "./preload-helper-CZudbPKK.js";
const Cs = {
  data: "Data",
  aiChats: "AI Chats",
  back: "Back to product",
  storeData: "Store data",
  chatChannels: "AI chat channels",
  channel1: "ChatGPT",
  channel2: "Google Gemini",
  channel3: "Microsoft Copilot",
  channel4: "Meta Muse",
  channel5: "TikTok",
  stock: "{count} in stock",
  colours: "{count} colours",
  description:
    "{name} in {colour}, 3D model. Hover to see its parts, click for the next product, drag to rotate.",
  announcement: "{name}, {price}, {stock}",
  "Instant camera": "Instant camera",
  "Mushroom lamp": "Mushroom lamp",
  "Dutch oven": "Dutch oven",
  "Portable radio": "Portable radio",
  Imaging: "Imaging",
  Lighting: "Lighting",
  Cookware: "Cookware",
  Audio: "Audio",
  Blue: "Blue",
  Pink: "Pink",
  Green: "Green",
  Orange: "Orange",
  Purple: "Purple",
};
function Os(n, e = "en") {
  const s = { ...Cs, ...n },
    o = new Intl.NumberFormat(xs(e));
  return {
    label: (a) => s[a] ?? a,
    format: (a, r) => de(s[a], r),
    stock: (a) => de(s.stock, { count: o.format(a) }),
    colours: (a) => de(s.colours, { count: o.format(a) }),
  };
}
const Ue = { POSITION: 0, NORMAL: 1 },
  ze = "depth24plus",
  me = 4,
  Lt = Float32Array.BYTES_PER_ELEMENT,
  We = 28,
  Fs = 16,
  fe = 20,
  Ve = 36,
  Ns = 16,
  $s = 28,
  Qt = 32,
  Ae = 256,
  ge = Ae / Lt,
  Ee = 8,
  Is = 8,
  es = 24,
  ss = 32,
  ns = es + Ee * ss;
class _e {
  static async create(e, s, o) {
    const { device: a, format: r } = e;
    try {
      if (s.studio.panels.length > Ee) throw new Error(`A studio has at most ${Ee} panels`);
      const l = await _s(a, ks, "mesh");
      o.throwIfAborted();
      const u = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
        i = a.createBindGroupLayout({
          label: "mesh-frame-layout",
          entries: [
            { binding: 0, visibility: u, buffer: { type: "uniform" } },
            { binding: 1, visibility: GPUShaderStage.FRAGMENT, buffer: { type: "uniform" } },
          ],
        }),
        p = a.createBindGroupLayout({
          label: "mesh-draw-layout",
          entries: [
            {
              binding: 0,
              visibility: u,
              buffer: { type: "uniform", hasDynamicOffset: !0, minBindingSize: Ve * Lt },
            },
          ],
        }),
        d = await a.createRenderPipelineAsync({
          label: "mesh",
          layout: a.createPipelineLayout({ label: "mesh-layout", bindGroupLayouts: [i, p] }),
          vertex: { module: l, entryPoint: "vertexMain", buffers: Ms(Ue) },
          fragment: { module: l, entryPoint: "fragmentMain", targets: [{ format: r }] },
          primitive: { topology: "triangle-list", cullMode: "none" },
          depthStencil: { format: ze, depthWriteEnabled: !0, depthCompare: "less" },
          multisample: { count: me },
        });
      o.throwIfAborted();
      const f = new _e(e, d, i, p, s);
      return (
        (f.#a = Ps(e.canvas, {
          frame: () => f.#y(),
          clear: () => {
            f.#d([]), s.onTaken?.(!0);
          },
          redraw: () => {
            f.#d(f.#c?.draws ?? []), s.onTaken?.(!1);
          },
        })),
        f
      );
    } catch (l) {
      throw (e.dispose(), l);
    }
  }
  #e;
  #p;
  #m;
  #l;
  #s = new Float32Array(We);
  #f;
  #r;
  #h = new Float32Array(0);
  #g;
  #i = 0;
  #t;
  #n;
  #o = !1;
  #a;
  #b;
  #u;
  #c;
  constructor(e, s, o, a, { light: r, studio: l, ring: u }) {
    const { context: i, device: p, format: d } = e;
    (this.#e = e),
      (this.#b = u),
      (this.#u = { light: r, environment: Bs(l) }),
      (this.#p = s),
      (this.#m = a),
      (this.#l = p.createBuffer({
        label: "mesh-frame",
        size: We * Lt,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
      })),
      this.#s.set(ne(r.direction), fe),
      (this.#s[fe + 3] = r.intensity),
      this.#s.set(r.color, fe + 4);
    const f = p.createBuffer({
      label: "mesh-environment",
      size: ns * Lt,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });
    p.queue.writeBuffer(f, 0, this.#u.environment),
      (this.#f = p.createBindGroup({
        label: "mesh-frame-group",
        layout: o,
        entries: [
          { binding: 0, resource: { buffer: this.#l } },
          { binding: 1, resource: { buffer: f } },
        ],
      })),
      i.configure({ device: p, format: d, alphaMode: "premultiplied", colorSpace: "srgb" });
  }
  upload(e, s) {
    return e.createMesh(this.#e.device, Ue, s);
  }
  resize(e, s, o) {
    if (this.#o) return;
    const { canvas: a, device: r, format: l } = this.#e;
    if (this.#a?.defer(() => this.resize(e, s, o))) return;
    const u = r.limits.maxTextureDimension2D,
      i = {
        width: Math.min(u, Math.max(1, Math.round(e * o))),
        height: Math.min(u, Math.max(1, Math.round(s * o))),
      };
    (this.#t?.width === i.width && this.#t.height === i.height) ||
      ((a.width = i.width),
      (a.height = i.height),
      this.#t?.destroy(),
      this.#n?.destroy(),
      (this.#t = r.createTexture({
        label: "mesh-color",
        size: i,
        format: l,
        sampleCount: me,
        usage: GPUTextureUsage.RENDER_ATTACHMENT,
      })),
      (this.#n = r.createTexture({
        label: "mesh-depth",
        size: i,
        format: ze,
        sampleCount: me,
        usage: GPUTextureUsage.RENDER_ATTACHMENT,
      })));
  }
  render(e, s, o) {
    return this.#o || !this.#t || !this.#n
      ? !1
      : ((this.#c = { viewProjection: e, camera: s, draws: o }),
        this.#s.set(e),
        this.#s.set(s, Fs),
        this.#a?.publish() || this.#d(o),
        !0);
  }
  #y() {
    if (!this.#c) return;
    const { viewProjection: e, camera: s, draws: o } = this.#c,
      a = o.flatMap(({ mesh: l, world: u, material: i }) =>
        l.geometry
          ? [
              {
                geometry: l.geometry,
                world: Float32Array.from(u),
                color: [i.color[0], i.color[1], i.color[2]],
                factors: [i.metallic, i.roughness, i.clearcoat, i.clearcoatRoughness],
              },
            ]
          : [],
      ),
      r = a.length === o.length;
    return (
      r ||
        Promise.all(o.map(({ mesh: l }) => l.readGeometry())).then((l) => {
          this.#o || (l.every(Boolean) ? this.#a?.publish() : this.#a?.drop());
        }),
      {
        viewProjection: Float32Array.from(e),
        camera: [s[0], s[1], s[2]],
        ring: this.#b?.(),
        lighting: this.#u,
        draws: r ? a : [],
      }
    );
  }
  #d(e) {
    if (this.#o || !this.#t || !this.#n) return;
    const { context: s, device: o } = this.#e;
    o.queue.writeBuffer(this.#l, 0, this.#s),
      e.length &&
        (this.#x(e.length),
        e.forEach((l, u) => Rs(this.#h, u * ge, l)),
        o.queue.writeBuffer(this.#r, 0, this.#h, 0, e.length * ge));
    const a = o.createCommandEncoder({ label: "mesh-render" }),
      r = a.beginRenderPass({
        label: "mesh-pass",
        colorAttachments: [
          {
            view: this.#t.createView(),
            resolveTarget: s.getCurrentTexture().createView(),
            clearValue: { r: 0, g: 0, b: 0, a: 0 },
            loadOp: "clear",
            storeOp: "discard",
          },
        ],
        depthStencilAttachment: {
          view: this.#n.createView(),
          depthClearValue: 1,
          depthLoadOp: "clear",
          depthStoreOp: "discard",
        },
      });
    r.setPipeline(this.#p),
      r.setBindGroup(0, this.#f),
      e.forEach((l, u) => {
        r.setBindGroup(1, this.#g, [u * Ae]), l.mesh.draw(r);
      }),
      r.end(),
      o.queue.submit([a.finish()]);
  }
  finished() {
    return this.#e.device.queue.onSubmittedWorkDone();
  }
  dispose() {
    this.#o ||
      ((this.#o = !0), this.#a?.unregister(), this.#t?.destroy(), this.#n?.destroy(), this.#e.dispose());
  }
  #x(e) {
    if (e <= this.#i) return;
    const { device: s } = this.#e;
    (this.#i = Ls(this.#i, e)),
      this.#r?.destroy(),
      (this.#r = s.createBuffer({
        label: "mesh-draws",
        size: this.#i * Ae,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
      })),
      (this.#h = new Float32Array(this.#i * ge)),
      (this.#g = s.createBindGroup({
        label: "mesh-draw-group",
        layout: this.#m,
        entries: [{ binding: 0, resource: { buffer: this.#r, size: Ve * Lt } }],
      }));
  }
}
function Rs(n, e, s) {
  const o = s.world;
  n.set(o, e);
  const a = As(o);
  for (let l = 0; l < 3; l++) for (let u = 0; u < 3; u++) n[e + Ns + l * 4 + u] = a[l * 3 + u];
  const { material: r } = s;
  n.set(r.color, e + $s),
    (n[e + Qt] = r.metallic),
    (n[e + Qt + 1] = r.roughness),
    (n[e + Qt + 2] = r.clearcoat),
    (n[e + Qt + 3] = r.clearcoatRoughness);
}
function Bs({ room: n, floor: e, panels: s, blur: o }) {
  const a = new ArrayBuffer(ns * Lt),
    r = new Float32Array(a);
  r.set([n.radiance, e.radiance, e.depth / n.halfSize, o]), (new Uint32Array(a)[4] = s.length);
  const { halfSize: l } = n;
  return (
    r.set(
      He([
        [l, -e.depth, l],
        [-l, -e.depth, l],
        [-l, -e.depth, -l],
        [l, -e.depth, -l],
      ]),
      Is,
    ),
    s.forEach((u, i) => {
      const p = ne([-u.position[0], -u.position[1], -u.position[2]]),
        d = [p[2], 0, -p[0]],
        f = Math.hypot(...d) ? ne(d) : [1, 0, 0],
        c = [p[1] * f[2] - p[2] * f[1], p[2] * f[0] - p[0] * f[2], p[0] * f[1] - p[1] * f[0]],
        m = Math.hypot(...u.position),
        [M, y] = [u.width / 2, u.height / 2],
        x = (v, L) => [
          u.position[0] + f[0] * v + c[0] * L,
          u.position[1] + f[1] * v + c[1] * L,
          u.position[2] + f[2] * v + c[2] * L,
        ];
      r.set(
        [
          -p[0],
          -p[1],
          -p[2],
          0,
          ...f,
          Math.atan(u.width / 2 / m),
          ...c,
          Math.atan(u.height / 2 / m),
          u.radiance - n.radiance,
          0,
          0,
          0,
          ...He([x(M, y), x(-M, y), x(-M, -y), x(M, -y)]),
        ],
        es + i * ss,
      );
    }),
    a
  );
}
function He(n) {
  const e = n.map(ne),
    [s, o, a] = e,
    r = [o[0] - s[0], o[1] - s[1], o[2] - s[2]],
    l = [a[0] - s[0], a[1] - s[1], a[2] - s[2]];
  return (
    (r[1] * l[2] - r[2] * l[1]) * s[0] +
      (r[2] * l[0] - r[0] * l[2]) * s[1] +
      (r[0] * l[1] - r[1] * l[0]) * s[2] <
      0 && e.reverse(),
    e.flatMap((i) => [...i, 0])
  );
}
const te = "http://www.w3.org/2000/svg",
  be = 4,
  Gs = 3,
  Ds = [0.3, 0.56, 0.82];
function os(n, e, s, o, a, r) {
  const l = r ? -1 : 1,
    u = r ? Math.min(a, Math.max(o + 2, n - 14)) : Math.max(a, Math.min(o - 2, n + 14));
  return { x: u, y: s, c1: [u + (n - u) * 0.45, s], c2: [n + l * 10, e], ax: n, ay: e };
}
const _ = (n) => n.toFixed(2),
  Us = (n) =>
    `M${_(n.x)},${_(n.y)} C${_(n.c1[0])},${_(n.c1[1])} ${_(n.c2[0])},${_(n.c2[1])} ${_(n.ax)},${_(n.ay)}`,
  zs = (n) =>
    `M${_(n.ax)},${_(n.ay)} C${_(n.c2[0])},${_(n.c2[1])} ${_(n.c1[0])},${_(n.c1[1])} ${_(n.x)},${_(n.y)}`;
class Ws {
  element;
  svg;
  entries;
  point = [0, 0, 0];
  swatchButtons = [];
  onSwatch;
  anchorTo;
  origin;
  clock = 0;
  constructor(e, s = "Store data") {
    (this.element = document.createElement("div")),
      (this.element.className = "surfacing__data"),
      this.element.setAttribute("role", "group"),
      this.element.setAttribute("aria-label", s),
      (this.svg = document.createElementNS(te, "svg")),
      this.svg.setAttribute("aria-hidden", "true"),
      this.svg.classList.add("surfacing__leaders"),
      this.element.append(this.svg),
      (this.entries = e.map((o, a) => {
        const r = document.createElement("span");
        if (((r.className = "surfacing__value"), (r.dataset.index = String(a)), !o.swatches)) {
          const p = document.createElement("span");
          (p.textContent = o.value), r.append(p);
        }
        if (o.swatches) {
          const p = document.createElement("span");
          (p.className = "surfacing__swatches"),
            p.setAttribute("role", "group"),
            p.setAttribute("aria-label", o.value),
            o.swatches.forEach((d, f) => {
              const c = document.createElement("button");
              (c.type = "button"),
                (c.className = "surfacing__swatch"),
                c.style.setProperty("--swatch", d.hex),
                d.p3 && c.style.setProperty("--swatch-p3", `color(display-p3 ${d.p3.join(" ")})`),
                c.setAttribute("aria-label", d.name),
                c.setAttribute("aria-pressed", String(f === 0)),
                c.addEventListener("pointerenter", (m) => {
                  m.pointerType === "mouse" && this.onSwatch?.(f);
                }),
                c.addEventListener("click", () => this.onSwatch?.(f)),
                this.swatchButtons.push(c),
                p.append(c);
            }),
            r.append(p);
        }
        const l = document.createElementNS(te, "path");
        l.setAttribute("pathLength", "1"), l.setAttribute("stroke-dasharray", "1 1");
        const u = document.createElementNS(te, "circle");
        u.setAttribute("r", "1.5");
        const i = document.createElementNS(te, "circle");
        return (
          i.setAttribute("r", "1.25"),
          i.classList.add("surfacing__packet"),
          this.svg.append(l, u, i),
          this.element.append(r),
          { spec: o, label: r, line: l, dot: u, packet: i, width: 0, height: 0 }
        );
      }));
  }
  get labels() {
    return this.entries.map((e) => e.label);
  }
  get swatches() {
    return this.swatchButtons;
  }
  get columnWidth() {
    return be + Math.max(0, ...this.entries.map((e) => e.width));
  }
  setValue(e, s) {
    const o = this.entries[e];
    if (!o || o.spec.swatches) return;
    const a = o.label.firstElementChild;
    a && (a.textContent = s), this.measure();
  }
  setSwatches(e) {
    this.swatchButtons.forEach((s, o) => {
      const a = e[o];
      a &&
        (s.style.setProperty("--swatch", a.hex),
        a.p3 && s.style.setProperty("--swatch-p3", `color(display-p3 ${a.p3.join(" ")})`),
        s.setAttribute("aria-label", a.name));
    });
  }
  selectSwatch(e) {
    this.swatchButtons.forEach((s, o) => s.setAttribute("aria-pressed", String(o === e)));
  }
  bind(e) {
    for (const s of this.entries) s.anchor = e.get(`anchor_${s.spec.anchor}`);
  }
  measure() {
    for (const e of this.entries) (e.width = e.label.offsetWidth), (e.height = e.label.offsetHeight);
  }
  update(e, s, o, a, r, l = 0, u = !1) {
    const i = u && a > 0.98;
    (this.clock = i ? this.clock + l : 0), this.svg.setAttribute("viewBox", `0 0 ${s} ${o}`);
    const p = a > 0.001;
    (this.element.style.visibility = p ? "visible" : "hidden"),
      p &&
        this.entries.forEach((d, f) => {
          const c = Math.min(1, Math.max(0, (a - f * 0.14) / 0.6)),
            m = r[f] ?? 1,
            M = Math.round(o * (Ds[f] ?? 0.5)) + 0.5;
          (d.label.style.top = `${M - Gs - d.height}px`),
            (d.label.style.opacity = String(c)),
            (d.label.style.pointerEvents = c > 0.5 ? "auto" : "none"),
            (d.label.style.transform = `translateX(${(1 - c) * -6}px)`),
            d.label.style.setProperty("--focus", m.toFixed(3));
          let y, x;
          if (this.origin) ({ x: y, y: x } = this.origin());
          else {
            if (!d.anchor) return;
            e.project(d.anchor.getWorldPosition(this.point), this.point),
              (y = (this.point[0] * 0.5 + 0.5) * s),
              (x = (-this.point[1] * 0.5 + 0.5) * o),
              this.anchorTo && ({ x: y, y: x } = this.anchorTo(y, x, "left"));
          }
          const v = be,
            L = be + d.width,
            F = os(y, x, M, v, L, !0);
          d.line.setAttribute("d", `M${v},${M} L${_(F.x)},${M} ${Us(F)}`),
            (d.line.style.strokeDashoffset = String(1 - c)),
            (d.line.style.opacity = String(0.35 + 0.65 * m)),
            d.dot.setAttribute("cx", _(this.origin ? F.x : y)),
            d.dot.setAttribute("cy", _(this.origin ? M : x)),
            (d.dot.style.opacity = String(Math.max(0, c * 2 - 1) * (0.5 + 0.5 * m)));
          const R = 2.4,
            j = (((this.clock - f * 0.8) % R) + R) % R,
            T = this.clock > f * 0.8 ? j / 1.1 : 2;
          if (!i || T >= 1) {
            d.packet.style.opacity = "0";
            return;
          }
          const K = d.line.getTotalLength(),
            V = T * T * (3 - 2 * T),
            at = d.line.getPointAtLength(K * (1 - V));
          d.packet.setAttribute("cx", at.x.toFixed(2)),
            d.packet.setAttribute("cy", at.y.toFixed(2)),
            (d.packet.style.opacity = String(Math.min(1, T * 6, (1 - T) * 6) * (0.4 + 0.6 * m)));
        });
  }
}
const Bt = "http://www.w3.org/2000/svg",
  ye = 4,
  Vs = 3,
  qe = 0.2,
  Hs = 0.86,
  ee = 3.2,
  qs = 1,
  Ys = 0.14,
  Xs = 0.95;
class js {
  element;
  svg;
  routes;
  point = [0, 0, 0];
  anchor;
  clock = 0;
  hovered = -1;
  anchorTo;
  origin;
  constructor(e, s = "AI chat channels") {
    (this.element = document.createElement("div")),
      (this.element.className = "surfacing__channels"),
      this.element.setAttribute("role", "list"),
      this.element.setAttribute("aria-label", s),
      (this.svg = document.createElementNS(Bt, "svg")),
      this.svg.classList.add("surfacing__leaders"),
      this.svg.setAttribute("aria-hidden", "true"),
      this.element.append(this.svg),
      (this.routes = e.map((o) => {
        const a = document.createElementNS(Bt, "path"),
          r = document.createElementNS(Bt, "path");
        for (const p of [a, r]) p.setAttribute("pathLength", "1"), p.setAttribute("stroke-dasharray", "1 1");
        const l = document.createElementNS(Bt, "circle");
        l.setAttribute("r", "1.5"), l.classList.add("surfacing__channel-end"), this.svg.append(a, r, l);
        const u = Array.from({ length: qs }, () => {
            const p = document.createElementNS(Bt, "circle");
            return p.setAttribute("r", "1.25"), p.classList.add("surfacing__packet"), this.svg.append(p), p;
          }),
          i = document.createElement("span");
        return (
          (i.className = "surfacing__channel"),
          i.setAttribute("role", "listitem"),
          (i.textContent = o),
          this.element.append(i),
          { label: i, curve: a, rule: r, end: l, packets: u, width: 0, height: 0, landed: 0 }
        );
      }));
  }
  get labels() {
    return this.routes.map((e) => e.label);
  }
  get columnWidth() {
    return ye + Math.max(0, ...this.routes.map((e) => e.width));
  }
  bind(e) {
    this.anchor = e.get("anchor_channel");
  }
  measure() {
    for (const e of this.routes) (e.width = e.label.offsetWidth), (e.height = e.label.offsetHeight);
  }
  update(e, s, o, a, r, l) {
    this.svg.setAttribute("viewBox", `0 0 ${s} ${o}`);
    const u = r > 0.001;
    if (((this.element.style.visibility = u ? "visible" : "hidden"), !u)) return (this.clock = 0), !1;
    if (!this.anchor) return !1;
    e.project(this.anchor.getWorldPosition(this.point), this.point);
    let i = (this.point[0] * 0.5 + 0.5) * s,
      p = (-this.point[1] * 0.5 + 0.5) * o;
    this.origin
      ? ({ x: i, y: p } = this.origin())
      : this.anchorTo && ({ x: i, y: p } = this.anchorTo(i, p, "right"));
    const d = l && r > 0.98;
    d && (this.clock += a);
    const f = this.routes.length;
    let c = !1;
    return (
      this.routes.forEach((m, M) => {
        const y = Math.min(1, Math.max(0, (r - M * 0.08) / 0.6)),
          x = Math.round(o * (qe + (Hs - qe) * (f > 1 ? M / (f - 1) : 0.5))) + 0.5,
          v = s - ye,
          L = s - ye - m.width,
          F = os(i, p, x, v, L, !1);
        m.curve.setAttribute("d", zs(F)),
          m.rule.setAttribute("d", `M${F.x.toFixed(2)},${x} L${v},${x}`),
          (m.curve.style.strokeDashoffset = String(1 - y)),
          (m.rule.style.strokeDashoffset = String(1 - Math.max(0, y * 2 - 1))),
          m.end.setAttribute("cx", F.x.toFixed(2)),
          m.end.setAttribute("cy", String(x)),
          (m.label.style.top = `${x - Vs - m.height}px`),
          (m.label.style.opacity = String(y)),
          (m.label.style.transform = `translateX(${(1 - y) * 6}px)`);
        let R = 0;
        const j = d ? m.curve.getTotalLength() : 0;
        m.packets.forEach((T, K) => {
          if (!d) {
            T.style.opacity = "0";
            return;
          }
          const V = (M / f) * ee + K * Ys,
            at = (((this.clock - V) % ee) + ee) % ee,
            B = this.clock < V ? -1 : at / Xs;
          if (B <= 0 || B >= 1) {
            (T.style.opacity = "0"), B >= 1 && (R = Math.max(R, 1 - Math.min(1, (B - 1) * 2.5)));
            return;
          }
          c = !0;
          const w = B * B * (3 - 2 * B),
            it = m.curve.getPointAtLength(w * j);
          T.setAttribute("cx", it.x.toFixed(2)),
            T.setAttribute("cy", it.y.toFixed(2)),
            (T.style.opacity = String(Math.min(1, B * 6, (1 - B) * 6)));
        }),
          (m.landed = R),
          m.label.style.setProperty("--focus", (0.7 + 0.3 * R).toFixed(3)),
          (m.curve.style.opacity = m.rule.style.opacity = "0.55");
      }),
      c
    );
  }
}
const St = "http://www.w3.org/2000/svg",
  Ks = 0.45,
  Zs = 0.4,
  Ye = 6,
  kt = Math.PI * 2;
function Se(n) {
  return ((n % kt) + kt) % kt;
}
function Js(n, e) {
  const s = Se(e - n);
  return s > Math.PI ? s - kt : s;
}
class Qs {
  element;
  ring;
  ticks;
  stubs;
  ports;
  dots = [];
  cx = 0;
  cy = 0;
  r = 40;
  shown = 0;
  width = 0;
  ticksAlpha = 0;
  stubEnds = { left: { x: 0, y: 0, alpha: 0 }, right: { x: 0, y: 0, alpha: 0 } };
  portAlphas = { left: 0, right: 0 };
  constructor() {
    (this.element = document.createElementNS(St, "svg")),
      this.element.classList.add("surfacing__orbit"),
      this.element.setAttribute("aria-hidden", "true"),
      (this.ring = document.createElementNS(St, "circle")),
      this.ring.classList.add("surfacing__orbit-ring"),
      this.ring.setAttribute("pathLength", "1"),
      (this.ticks = document.createElementNS(St, "path")),
      this.ticks.classList.add("surfacing__orbit-ticks");
    const e = () => {
        const o = document.createElementNS(St, "path");
        return o.classList.add("surfacing__orbit-stub"), o;
      },
      s = () => {
        const o = document.createElementNS(St, "circle");
        return o.classList.add("surfacing__orbit-port"), o.setAttribute("r", "1.6"), o;
      };
    (this.stubs = { left: e(), right: e() }),
      (this.ports = { left: s(), right: s() }),
      this.element.append(
        this.ring,
        this.ticks,
        this.stubs.left,
        this.stubs.right,
        this.ports.left,
        this.ports.right,
      );
    for (let o = 0; o < Ye; o++) {
      const a = document.createElementNS(St, "circle");
      a.classList.add("surfacing__orbit-dot"),
        a.setAttribute("r", o % 3 === 0 ? "1.5" : "1.1"),
        this.element.append(a),
        this.dots.push({
          el: a,
          angle: (o / Ye) * kt + Math.sin(o * 2.3) * 0.5,
          speed: 0.34 + ((o * 0.37) % 0.3),
          life: 1,
        });
    }
  }
  port(e) {
    return { x: this.cx + (e === "left" ? -this.r : this.r), y: this.cy };
  }
  attach(e, s, o) {
    const a = Math.max(-this.r * 0.92, Math.min(this.r * 0.92, s - this.cy)),
      r = Math.sqrt(this.r * this.r - a * a);
    return { x: this.cx + (o === "left" ? -r : r), y: this.cy + a };
  }
  update(e, s, o, a) {
    this.element.setAttribute("viewBox", `0 0 ${e} ${s}`),
      (this.width = e),
      (this.cx = a.cx),
      (this.cy = a.cy),
      (this.r = Math.max(8, a.r)),
      (this.shown += (a.reveal - this.shown) * Math.min(1, o * 6));
    const r = this.shown,
      { cx: l, cy: u, r: i } = this;
    this.ring.setAttribute("cx", l.toFixed(2)),
      this.ring.setAttribute("cy", u.toFixed(2)),
      this.ring.setAttribute("r", i.toFixed(2)),
      (this.ring.style.strokeDasharray = `${r.toFixed(3)} 1`),
      (this.ring.style.transform = "rotate(-90deg)"),
      (this.ring.style.transformOrigin = `${l.toFixed(2)}px ${u.toFixed(2)}px`);
    const p = 3;
    this.ticks.setAttribute(
      "d",
      [0, 1, 2, 3]
        .map((c) => {
          const m = (c * kt) / 4,
            M = l + Math.cos(m) * (i + 2),
            y = u + Math.sin(m) * (i + 2),
            x = l + Math.cos(m) * (i + 2 + p),
            v = u + Math.sin(m) * (i + 2 + p);
          return `M${M.toFixed(2)},${y.toFixed(2)}L${x.toFixed(2)},${v.toFixed(2)}`;
        })
        .join(""),
    ),
      (this.ticksAlpha = r * 0.9 * (1 - (a.open?.amount ?? 0) * 0.6)),
      (this.ticks.style.opacity = String(this.ticksAlpha)),
      ["left", "right"].forEach((c) => {
        const m = { x: l + (c === "left" ? -i : i), y: u },
          M = a.labels[c],
          y = c === "left" ? Math.min(M.x, m.x - 4) : Math.max(M.x, m.x + 4),
          x = a.rest * r,
          v = m.x + (y - m.x) * x;
        this.stubs[c].setAttribute(
          "d",
          `M${m.x.toFixed(2)},${m.y.toFixed(2)} L${v.toFixed(2)},${M.y.toFixed(2)}`,
        );
        const L = Math.min(1, x * 1.4);
        (this.stubEnds[c] = { x: v, y: M.y, alpha: L }), (this.stubs[c].style.opacity = String(L));
        const F = a.open?.side === c ? a.open.amount : 0;
        this.ports[c].setAttribute("cx", m.x.toFixed(2)),
          this.ports[c].setAttribute("cy", m.y.toFixed(2)),
          (this.portAlphas[c] = r * Math.max(a.rest, F)),
          (this.ports[c].style.opacity = String(this.portAlphas[c])),
          (this.ports[c].style.transform = `scale(${1 + F * 0.5})`);
      });
    const d = a.open && a.open.amount > 0.01 ? a.open : null,
      f = d && d.side === "left" ? Math.PI : 0;
    for (const c of this.dots) {
      if (a.running) {
        const m = c.speed;
        let M = m;
        if (d) {
          const y = Js(c.angle, f),
            x = Math.sign(y || 1) * (0.9 + c.speed * 1.4);
          (M = m * (1 - d.amount) + x * d.amount),
            Math.abs(y) < 0.12 &&
              d.amount > 0.5 &&
              ((c.angle = Se(f + Math.PI + (Math.random() - 0.5) * 1.2)), (c.life = 0));
        }
        (c.angle = Se(c.angle + M * o)), (c.life = Math.min(1, c.life + o * 3));
      }
      c.el.setAttribute("cx", (l + Math.cos(c.angle) * i).toFixed(2)),
        c.el.setAttribute("cy", (u + Math.sin(c.angle) * i).toFixed(2)),
        (c.el.style.opacity = String(r * c.life));
    }
  }
  tapped() {
    const { left: e, right: s } = this.stubEnds;
    return {
      width: this.width,
      cx: this.cx,
      cy: this.cy,
      r: this.r,
      drawn: this.shown,
      ticks: this.ticksAlpha * Ks,
      stubs: [e, s].map((o) => ({ ...o, alpha: o.alpha * Zs })),
      ports: [this.portAlphas.left, this.portAlphas.right],
      dots: this.dots.map((o) => ({
        angle: o.angle,
        alpha: this.shown * o.life,
        radius: Number(o.el.getAttribute("r")),
      })),
    };
  }
}
const tn = [
    { at: [-2.4, 2.4, 2.4], size: [2.4, 2.4], power: 6.5 },
    { at: [-3.2, 0.2, 0.2], size: [2.6, 4.2], power: 1.5 },
    { at: [2.8, 0.4, 1.8], size: [0.9, 2.6], power: 1.1 },
    { at: [0, 3.4, -0.3], size: [3.2, 2.4], power: 2.2 },
    { at: [1.8, 1.6, -2.4], size: [0.9, 1.6], power: 5 },
  ],
  Xe = (n, [e, s], o) => ({ position: n, width: e, height: s, radiance: o }),
  en = {
    room: { radiance: 0.3, halfSize: 6 },
    floor: { radiance: 0.03, depth: 2.5 },
    panels: [...tn.map((n) => Xe(n.at, n.size, n.power)), Xe([3.2, 0, -0.4], [3, 5], 0.015)],
    blur: 0.02,
  },
  sn = { direction: [2.4, -2.4, -2.4], color: [1, 1, 1], intensity: 1.1 },
  pt = {
    blue: { name: "Blue", hex: "#051daa", p3: [0.0444, 0.1135, 0.638] },
    pink: { name: "Pink", hex: "#b2005b", p3: [0.638, 0.0444, 0.3511] },
    green: { name: "Green", hex: "#00632e", p3: [0.02, 0.38, 0.2] },
    orange: { name: "Orange", hex: "#b03400", p3: [0.6358, 0.2414, 0.0442] },
    purple: { name: "Purple", hex: "#7000a9", p3: [0.4005, 0.0444, 0.638] },
    dev: { name: "Developer", hex: "#0f0f0f", p3: [0.0573, 0.0573, 0.0573] },
  },
  nn = { name: "Navy", hex: "#010419", p3: [0.0063, 0.0167, 0.0937] };
pt.blue.hex;
const on = (n) => (n <= 0.04045 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4),
  xe = (n) => (n <= 0.0031308 ? n * 12.92 : 1.055 * n ** (1 / 2.4) - 0.055);
function as(n) {
  const e = n.replace("#", "");
  return [0, 2, 4].map((s) => Number.parseInt(e.slice(s, s + 2), 16) / 255);
}
function an(n) {
  const [e, s, o] = as(n).map(on);
  return [
    xe(0.8224621 * e + 0.177538 * s),
    xe(0.0331941 * e + 0.9668058 * s),
    xe(0.0170827 * e + 0.0723974 * s + 0.9105199 * o),
  ];
}
[
  ...[...Object.values(pt), nn].map((n) => {
    const e = an(n.hex);
    return { at: as(n.hex), delta: n.p3.map((s, o) => s - e[o]) };
  }),
];
typeof CSS < "u" &&
  CSS.supports?.("color", "color(display-p3 1 0 0)") &&
  typeof matchMedia < "u" &&
  matchMedia("(color-gamut: p3)").matches;
const rn = {
  blue: { name: "Blue CTA", hex: "#071047", p3: [0.0345, 0.0619, 0.2655] },
  pink: { name: "Pink CTA", hex: "#4b0128", p3: [0.2655, 0.0345, 0.1539] },
  green: { name: "Green CTA", hex: "#002f17", p3: [0.02, 0.18, 0.1] },
  orange: { name: "Orange CTA", hex: "#491903", p3: [0.2655, 0.1115, 0.0345] },
  purple: { name: "Purple CTA", hex: "#310647", p3: [0.1731, 0.0345, 0.2655] },
  dev: { name: "Developer CTA", hex: "#cecece", p3: [0.8071, 0.8071, 0.8071] },
};
Object.fromEntries(Object.entries(rn).map(([n, e]) => [n, e.hex]));
const cn = { name: "Blue", hex: "#a2b4db", p3: [0.6486, 0.7037, 0.8457] },
  is = [pt.blue, pt.pink, pt.green, pt.orange, pt.purple, cn],
  ve = (n) => (n < 0.04045 ? n * 0.0773993808 : (n * 0.9478672986 + 0.0521327014) ** 2.4);
function rs(n) {
  const e = typeof n == "number" ? n : Number.parseInt(n.replace("#", ""), 16);
  return [ve(((e >> 16) & 255) / 255), ve(((e >> 8) & 255) / 255), ve((e & 255) / 255)];
}
function ln([n, e, s], o, a, r) {
  const l = Math.max(n, e, s),
    u = Math.min(n, e, s),
    i = (u + l) / 2;
  let p = 0,
    d = 0;
  if (l !== u) {
    const v = l - u;
    (d = i <= 0.5 ? v / (l + u) : v / (2 - l - u)),
      l === n ? (p = (e - s) / v + (e < s ? 6 : 0)) : l === e ? (p = (s - n) / v + 2) : (p = (n - e) / v + 4),
      (p /= 6);
  }
  const f = (((p + o) % 1) + 1) % 1,
    c = Math.min(1, Math.max(0, d + a)),
    m = Math.min(1, Math.max(0, i + r));
  if (c === 0) return [m, m, m];
  const M = m <= 0.5 ? m * (1 + c) : m + c - m * c,
    y = 2 * m - M,
    x = (v) => (
      v < 0 && (v += 1),
      v > 1 && (v -= 1),
      v < 1 / 6 ? y + (M - y) * 6 * v : v < 1 / 2 ? M : v < 2 / 3 ? y + (M - y) * 6 * (2 / 3 - v) : y
    );
  return [x(f + 1 / 3), x(f), x(f - 1 / 3)];
}
function hn(n, e) {
  let s = rs(n);
  return (
    e === "body_gloss" && (s = ln(s, 0, 0.02, 0.025)), e === "body_inner" && (s = s.map((o) => o * 0.36)), s
  );
}
class un {
  constructor(e = 0) {
    this.index = e;
  }
  index;
  targets = [];
  t = 1;
  velocity = 0;
  collect(e) {
    const s = e.name;
    ["body", "body_gloss", "body_inner"].includes(s) &&
      (this.targets.some((o) => o.material === e) ||
        this.targets.push({ material: e, role: s, from: [...e.color], to: [...e.color] }));
  }
  get current() {
    return this.index;
  }
  get settled() {
    return this.t >= 1 && this.velocity === 0;
  }
  set(e) {
    if (e !== this.index) {
      this.index = e;
      for (const s of this.targets) (s.from = [...s.material.color]), (s.to = hn(is[e].hex, s.role));
      (this.t = 0), (this.velocity = 0);
    }
  }
  step(e, s = !1) {
    if (this.settled) return;
    if (s) (this.t = 1), (this.velocity = 0);
    else {
      const r = Math.max(1, Math.ceil(e * 240));
      for (let l = 0; l < r; l++)
        (this.velocity += ((1 - this.t) * 90 - this.velocity * 2 * Math.sqrt(90)) * (e / r)),
          (this.t += this.velocity * (e / r));
      1 - this.t < 0.001 && Math.abs(this.velocity) < 0.001 && ((this.t = 1), (this.velocity = 0));
    }
    const o = Math.min(1, this.t);
    for (const { material: a, from: r, to: l } of this.targets)
      for (let u = 0; u < 3; u++) a.color[u] = r[u] + (l[u] - r[u]) * o;
  }
}
const ot = (n) => (n * Math.PI) / 180,
  dn = (n, e, s) => Math.max(e, Math.min(s, n)),
  pn = (n, e, s) => n + (e - n) * s,
  mn = {
    lamp: /^Shade$/,
    dutch_oven: /^Lid$/,
    instax: /^(Lens[ _]housing|Lens[ _]barrel|Shutter[ _]button)$/,
    radio: /^(Strap|Grille[ _]recess)$/,
  },
  fn = { body: 15856111, body_gloss: 16777215, body_inner: 13224390 },
  gn = {
    instax: "https://cdn.shopify.com/b/shopify-brochure2-assets/63862047674286025ecfd47299409384.glb",
    lamp: "https://cdn.shopify.com/b/shopify-brochure2-assets/01a19c36bdf203ffdd184f131e009f69.glb",
    dutch_oven: "https://cdn.shopify.com/b/shopify-brochure2-assets/4f1440c14d0b1a908ce40a7d20d3aaf4.glb",
    radio: "https://cdn.shopify.com/b/shopify-brochure2-assets/b5c02ef3e879e5ec2a98b3bdde10b9a9.glb",
  },
  se = ot(-10),
  we = ot(-42),
  Me = ot(4),
  je = 0.55,
  bn = 0.7,
  yn = 0.1,
  Ke = 22,
  Tt = 0.56,
  Ze = 0.46,
  xn = 0.86,
  vn = 140,
  wn = 180,
  Mn = 120,
  An = 420,
  Je = ot(24),
  En = ot(12),
  Sn = 17,
  Tn = ["channel1", "channel2", "channel3", "channel4", "channel5"],
  _n = [
    {
      key: "instax",
      name: "Instant camera",
      category: "Imaging",
      colour: 0,
      swatches: [0, 1, 3],
      stock: 24,
      price: "$79",
      shipsTo: "US, CA",
    },
    {
      key: "lamp",
      name: "Mushroom lamp",
      category: "Lighting",
      colour: 3,
      swatches: [3, 2, 4],
      stock: 9,
      price: "$265",
      shipsTo: "US, CA, UK",
    },
    {
      key: "dutch_oven",
      name: "Dutch oven",
      category: "Cookware",
      colour: 1,
      swatches: [1, 0, 2],
      stock: 27,
      price: "$285",
      shipsTo: "US",
    },
    {
      key: "radio",
      name: "Portable radio",
      category: "Audio",
      colour: 2,
      swatches: [2, 3, 0],
      stock: 17,
      price: "$144",
      shipsTo: "US, CA",
    },
  ],
  cs = 0,
  Ln = 5,
  _t = (n) => n.swatches.map((e) => (e === cs ? Ln : e)),
  Te = { stock: 0, variants: 1, price: 2 },
  Qe = Te.variants,
  $ = (n, e = 120, s = 0.9) => ({ value: n, target: n, velocity: 0, k: e, c: 2 * s * Math.sqrt(e) });
function ts(n, e) {
  const s = Math.max(1, Math.ceil(e * 240)),
    o = e / s;
  for (let a = 0; a < s; a++)
    (n.velocity += ((n.target - n.value) * n.k - n.velocity * n.c) * o), (n.value += n.velocity * o);
}
const kn = (n) => Math.abs(n.value - n.target) < 1e-4 && Math.abs(n.velocity) < 1e-4;
function dt(n, e) {
  const s = document.createElement(n);
  return (s.className = e), s;
}
function Rn(n, e) {
  const s = Os(e?.strings, e?.locale),
    o = _n.map((t) => ({ ...t, name: s.label(t.name), category: s.label(t.category) })),
    a = is.map((t) => ({ ...t, name: s.label(t.name) })),
    r = o[0],
    l = [
      { anchor: "stock", value: s.stock(r.stock) },
      { anchor: "variants", value: s.colours(_t(r).length), swatches: _t(r).map((t) => a[t]) },
      { anchor: "price", value: r.price },
    ],
    u = new AbortController(),
    { signal: i } = u,
    p = matchMedia("(prefers-reduced-motion: reduce)"),
    d = dt("section", "surfacing surfacing--mono");
  d.dataset.view = "rest";
  const f = dt("div", "surfacing__stage"),
    c = new Ws(l, s.label("storeData")),
    m = new js(Tn.map(s.label), s.label("chatChannels")),
    M = (t, h, g) => {
      const S = dt("div", `surfacing__zone surfacing__zone--${t}`),
        A = dt("button", `surfacing__trigger surfacing__trigger--${t}`);
      return (
        (A.type = "button"),
        (A.textContent = h),
        A.setAttribute("aria-expanded", "false"),
        (g.id = `surfacing-${t}-${Math.random().toString(36).slice(2, 8)}`),
        A.setAttribute("aria-controls", g.id),
        S.append(A),
        { zone: S, button: A }
      );
    },
    y = { data: M("data", s.label("data"), c.element), agentic: M("agentic", s.label("aiChats"), m.element) },
    x = dt("button", "surfacing__back");
  (x.type = "button"), (x.textContent = "←"), x.setAttribute("aria-label", s.label("back"));
  const v = dt("span", "surfacing__status");
  v.setAttribute("aria-live", "polite"), d.append(f, v), n.append(d);
  const L = dt("canvas", "surfacing__canvas");
  L.setAttribute("role", "img");
  const F = new Qs();
  (c.origin = () => F.port("left")),
    (m.origin = () => F.port("right")),
    f.append(F.element, L, c.element, m.element, y.data.zone, y.agentic.zone, x);
  let R;
  const j = vs(L, i, ls).then((t) =>
      _e.create(t, { light: sn, studio: en, onTaken: gs, ring: () => (Z ? F.tapped() : void 0) }, i),
    ),
    T = new Es(Ke, 0.1, 50),
    K = new pe("pivot"),
    V = new pe("holder");
  K.add(V);
  const at = 1 / Tt / (2 * Math.tan(ot(Ke / 2)));
  T.position.splice(0, 3, 0, at * Math.sin(Me), at), T.update();
  const B = new Map();
  let w,
    it = 0,
    rt = 1,
    oe = bn,
    Z = !1,
    Le = !1,
    ke = !1;
  const Gt = $(se, 70, 0.85),
    ae = $(Me, 70, 0.85),
    mt = $(1, 90, 0.9),
    Dt = $(0, 90, 0.9),
    Ut = $(0, 110, 0.92),
    ft = $(1, 110, 0.92),
    G = $(0, 170, 0.72),
    ct = $(0, 120, 0.9),
    Pt = $(0, 60, 0.8),
    Ct = $(0, 70, 1),
    Ot = $(0, 70, 1),
    zt = l.map(() => $(1, 80, 0.95)),
    Wt = $(Je, 20, 1),
    gt = $(0, 60, 0.8),
    bt = $(0, 60, 0.8);
  let k = "rest",
    J = !1,
    H,
    W = -1,
    Vt = !1,
    yt = 0,
    Ht = 0,
    Q = 0,
    qt = !1,
    Ft = 0,
    xt = 0,
    q = !1,
    ie = -1 / 0,
    D,
    Y,
    lt = 0,
    re = performance.now(),
    ht = 0,
    vt = !0,
    I = 0,
    U = 0;
  const E = { x0: 0, y0: 0, x1: 0, y1: 0 },
    ut = [0, 0, 0],
    Yt = [0, 0, 0],
    tt = new Jt();
  function ce(t, h) {
    h.makeEmpty();
    for (const g of t) h.expandByTransformedBox(g.bounds, g.world);
    return h;
  }
  function ls(t) {
    i.aborted ||
      (console.error(`Surfacing: ${t}`),
      (Z = !1),
      cancelAnimationFrame(ht),
      (ht = 0),
      d.classList.add("is-error"));
  }
  const Pe = (t, h = t.recolour.current) =>
    s.format("description", { name: t.product.name, colour: a[h].name });
  function Xt(t) {
    qt !== t &&
      ((qt = t),
      d.classList.toggle("is-exploded", t),
      (Gt.target = t ? we : se),
      (mt.target = t ? oe : 1),
      (Dt.target = t ? yn : 0),
      w?.parts.forEach((h) => {
        h.t.target = t ? 1 : 0;
      }),
      P());
  }
  function Ce() {
    if (!w) return;
    const t = I / Math.max(1, U);
    rt = Math.min(1 / w.height, (Ze * t) / Tt / w.width);
    const h = { height: 1 / rt, width: (Ze * t) / Tt / rt };
    (oe = dn(Math.min((h.height * 1.08) / w.exploded.height, (h.width * 1.2) / w.exploded.width), 0.6, 1)),
      qt && (mt.target = oe);
  }
  function hs(t) {
    if (t === "rest" || !w) return { x: 0, s: 1 };
    const h = w.width * rt * Tt * U,
      [g, S] = t === "data" ? [c.columnWidth + 22, I - 6] : [10, I - m.columnWidth - 26],
      A = Math.max(0.45, Math.min(xn, (S - g) / h));
    return { x: (g + S) / 2 - I / 2, s: A };
  }
  function jt() {
    const t = hs(k);
    (Ut.target = t.x),
      (ft.target = t.s),
      (Ct.target = k === "data" ? 1 : 0),
      (Ot.target = k === "agentic" ? 1 : 0),
      (Wt.target = k === "rest" ? Je : En);
  }
  function et(t, h = !1) {
    clearTimeout(yt),
      clearTimeout(Ht),
      (J = t !== "rest" && h),
      t !== k && ((k = t), (d.dataset.view = t), t === "rest" && (W = -1)),
      d.classList.toggle("is-pinned", J),
      y.data.button.setAttribute("aria-expanded", String(k === "data")),
      y.agentic.button.setAttribute("aria-expanded", String(k === "agentic")),
      jt(),
      P();
  }
  function Oe() {
    const t = f.getBoundingClientRect();
    (I = Math.max(1, Math.round(t.width))),
      (U = Math.max(1, Math.round(t.height))),
      R?.resize(I, U, Math.min(2, devicePixelRatio || 1)),
      (T.aspect = I / U),
      T.update(),
      Ce(),
      c.measure(),
      m.measure(),
      jt(),
      P();
  }
  function us() {
    if ((ce(w?.draws ?? [], tt), (E.x0 = E.y0 = 1 / 0), (E.x1 = E.y1 = -1 / 0), !tt.isEmpty()))
      for (let t = 0; t < 8; t++) {
        (ut[0] = t & 1 ? tt.max[0] : tt.min[0]),
          (ut[1] = t & 2 ? tt.max[1] : tt.min[1]),
          (ut[2] = t & 4 ? tt.max[2] : tt.min[2]),
          T.project(ut, ut);
        const h = (ut[0] * 0.5 + 0.5) * I,
          g = (-ut[1] * 0.5 + 0.5) * U;
        (E.x0 = Math.min(E.x0, h)),
          (E.x1 = Math.max(E.x1, h)),
          (E.y0 = Math.min(E.y0, g)),
          (E.y1 = Math.max(E.y1, g));
      }
  }
  const Kt = (t, h, g) => t > E.x0 - g && t < E.x1 + g && h > E.y0 - g && h < E.y1 + g;
  function ds() {
    if (!Y || J || k === "rest") {
      clearTimeout(Q), (Q = 0);
      return;
    }
    if (!(k === "data" ? Y.x > I * 0.56 : Y.x < I * 0.44)) {
      clearTimeout(Q), (Q = 0);
      return;
    }
    Q ||
      (Q = window.setTimeout(() => {
        (Q = 0), J || et("rest");
      }, Mn));
  }
  function Fe() {
    if (!Y || q || !Z || H !== void 0) return;
    const t = Kt(Y.x, Y.y, qt ? 2 : -6),
      h = W >= 0 || Vt;
    Xt(t && !h), f.classList.toggle("is-over-product", t && !h);
  }
  function le(t) {
    const h = B.get(t.key);
    if (h) return h;
    const g = (async () => {
      const [S, A] = await Promise.all([Ts.load(gn[t.key], i, ["POSITION", "NORMAL"]), j]),
        C = pe.fromGltf(S),
        O = new Map(),
        N = [],
        X = [],
        st = new un(t.colour),
        Nt = S.materials.map((b) => ({
          name: b.name,
          color: [b.baseColor[0], b.baseColor[1], b.baseColor[2]],
          metallic: b.metallic,
          roughness: b.roughness,
          clearcoat: b.clearcoat,
          clearcoatRoughness: b.clearcoatRoughness,
        })),
        $t = { name: "", color: [1, 1, 1], metallic: 1, roughness: 1, clearcoat: 0, clearcoatRoughness: 0 };
      C.traverse((b) => {
        if ((b.name.startsWith("anchor_") && O.set(b.name, b), b.mesh !== void 0)) {
          const z = mn[t.key],
            nt = !!z && (z.test(b.name) || z.test(b.parent?.name ?? ""));
          S.meshes[b.mesh].forEach((Et, ys) => {
            let Rt = Et.material === void 0 ? $t : Nt[Et.material];
            if (nt) st.collect(Rt);
            else {
              const De = fn[Rt.name];
              De !== void 0 && (Rt = { ...Rt, color: rs(De) });
            }
            X.push({
              mesh: A.upload(Et.geometry, `surfacing-${t.key}-${b.name}-${ys}`),
              world: b.world,
              material: Rt,
              bounds: Jt.fromPositions(Et.geometry.read("POSITION")),
            });
          });
        }
        if (b.name.startsWith("part_") && Array.isArray(b.extras.explode)) {
          const [z, nt, Et] = b.extras.explode;
          N.push({ node: b, home: [...b.position], offset: [z ?? 0, nt ?? 0, Et ?? 0], t: $(0, 1, 1) });
        }
      }),
        st.current === cs && (st.set(_t(t)[0]), st.step(0, !0));
      const wt = Math.max(...N.map((b) => Math.hypot(...b.offset)), 0.001);
      N.forEach((b) => {
        const z = pn(150, 85, Math.hypot(...b.offset) / wt);
        Object.assign(b.t, { k: z, c: 2 * 0.72 * Math.sqrt(z) });
      });
      for (const b of N) Zt(b, je);
      C.updateWorld();
      const Mt = ce(X, new Jt()).getSize([0, 0, 0]);
      for (const b of N) Zt(b, 0);
      C.updateWorld();
      const At = ce(X, new Jt()),
        It = At.getSize([0, 0, 0]),
        he = At.getCenter([0, 0, 0]);
      for (let b = 0; b < 3; b++) C.position[b] -= he[b];
      const ue = It[0] * Math.cos(se) + It[2] * Math.abs(Math.sin(se));
      return {
        product: t,
        root: C,
        draws: X,
        parts: N,
        anchors: O,
        recolour: st,
        height: It[1],
        width: ue,
        exploded: { height: Mt[1], width: Mt[0] * Math.cos(we) + Mt[2] * Math.abs(Math.sin(we)) },
      };
    })();
    return B.set(t.key, g), g;
  }
  function Zt(t, h) {
    for (let g = 0; g < 3; g++) t.node.position[g] = t.home[g] + t.offset[g] * h;
  }
  function Ne(t) {
    w && V.remove(w.root), (w = t);
    for (const h of t.parts) (h.t.value = h.t.target = 0), (h.t.velocity = 0), Zt(h, 0);
    V.add(t.root),
      c.bind(t.anchors),
      m.bind(t.anchors),
      c.setValue(Te.stock, s.stock(t.product.stock)),
      c.setValue(Te.price, t.product.price),
      c.setSwatches(_t(t.product).map((h) => a[h])),
      c.selectSwatch(_t(t.product).indexOf(t.recolour.current)),
      L.setAttribute("aria-label", Pe(t)),
      (d.dataset.product = t.product.key),
      Ce(),
      c.measure(),
      jt();
  }
  function $e() {
    Z &&
      ((H = ((H ?? it) + 1) % o.length),
      Xt(!1),
      f.classList.remove("is-over-product"),
      le(o[H]),
      (G.target = 0),
      (ct.target = -26),
      p.matches && (G.value = 0),
      P());
  }
  function ps() {
    if (H === void 0 || G.value > 0.06) return;
    const t = H,
      h = B.get(o[t].key);
    h &&
      h.then((g) => {
        i.aborted ||
          H !== t ||
          ((H = void 0),
          (it = t),
          Ne(g),
          (G.value = 0),
          (G.velocity = 0),
          (G.target = 1),
          (ct.value = 26),
          (ct.target = 0),
          (Pt.value = p.matches ? 0 : 0.9),
          (Pt.target = 0),
          p.matches && ((G.value = 1), (ct.value = 0)),
          (v.textContent = s.format("announcement", {
            name: g.product.name,
            price: g.product.price,
            stock: s.stock(g.product.stock),
          })),
          P());
      });
  }
  function ms(t) {
    const h = p.matches;
    (lt += h || !ke ? 0 : t),
      q ||
        ((Ft += xt * t),
        (xt *= Math.exp(-t * 3.2)),
        performance.now() - ie > 1400 && (Ft *= Math.exp(-t * 2.4))),
      zt.forEach((N, X) => {
        N.target = W < 0 || W === X ? 1 : 0.3;
      });
    for (const N of [Gt, ae, mt, Dt, Ut, ft, G, ct, Pt, Ct, Ot, Wt, gt, bt, ...zt]) ts(N, t);
    ps();
    for (const N of w?.parts ?? []) ts(N.t, t), Zt(N, N.t.value * je);
    const g = h
        ? 0
        : Math.sin(lt * 0.43) * 0.07 +
          Math.sin(lt * 0.19) * 0.04 +
          Math.sin((lt * Math.PI * 2) / Sn) * Wt.value,
      S = h ? 0 : Math.sin(lt * 0.8) * 0.018 + Math.sin(lt * 0.31) * 0.01,
      A = h ? 0 : Math.sin(lt * 0.37) * 0.018,
      C = 1 / (Tt * U),
      O = (w?.height ?? 1) * rt * ft.value;
    Ss(K.quaternion, ae.value - Me + bt.value, Gt.value + Ft + g + gt.value + Pt.value, A),
      K.position.splice(0, 3, (Ut.value + ct.value) * C + Dt.value * O, S * O, 0),
      V.scale.fill(Math.max(0.001, rt * mt.value * ft.value * Math.max(0, G.value))),
      w?.recolour.step(t, h);
  }
  function fs(t, h) {
    if (!w) return;
    T.project(V.getWorldPosition(Yt), Yt);
    const g = (Yt[0] * 0.5 + 0.5) * I,
      S = (-Yt[1] * 0.5 + 0.5) * U,
      A = Tt * U * rt * ft.value * mt.value,
      C = w.parts.length ? w.parts.reduce((b, z) => b + z.t.value, 0) / w.parts.length : 0,
      O = 0.5 * Math.hypot(w.width, w.height) * A,
      N = 0.5 * Math.hypot(w.exploded.width, w.exploded.height) * A,
      X = f.getBoundingClientRect(),
      st = (b, z) => {
        const nt = b.getBoundingClientRect();
        return { x: (z === "left" ? nt.right + 3 : nt.left - 3) - X.left, y: nt.top + nt.height / 2 - X.top };
      },
      Nt = { left: st(y.data.button, "left"), right: st(y.agentic.button, "right") },
      $t = Math.max(0, Ct.value),
      wt = Math.max(0, Ot.value),
      Mt = Math.max(0, 1 - Math.max($t, wt) * 1.6),
      At = Math.min(U / 2 - 6, g - 4, I - g - 4),
      It = Math.min(g - Nt.left.x - 8, Nt.right.x - g - 8),
      he = At + (Math.min(At, It) - At) * Mt,
      ue = Math.min((O + (N - O) * C) * 0.88 + 6, he);
    F.update(I, U, t, {
      cx: g,
      cy: S,
      r: Math.max(10, ue),
      reveal: h,
      rest: Mt,
      open: $t > wt ? { side: "left", amount: $t } : wt > 0.01 ? { side: "right", amount: wt } : null,
      labels: Nt,
      running: !p.matches,
    });
  }
  function Ie(t) {
    ht = 0;
    const h = Math.min(0.05, (t - re) / 1e3);
    (re = t), ms(h), K.updateWorld(), us();
    const g = Math.min(1, Math.max(0, G.value));
    fs(h, g),
      c.update(
        T,
        I,
        U,
        Math.max(0, Ct.value) * g,
        zt.map((O) => O.value),
        h,
        !p.matches,
      );
    const S = m.update(T, I, U, h, Math.max(0, Ot.value) * g, !p.matches);
    R?.render(T.viewProjection, T.position, w?.draws ?? []) &&
      R &&
      w &&
      !Le &&
      ((Le = !0),
      R.finished().then(
        () =>
          requestAnimationFrame(() => {
            i.aborted ||
              (d.classList.add("is-drawn"),
              window.setTimeout(() => {
                ke = !0;
              }, An));
          }),
        () => {},
      ));
    const C =
      !q &&
      !S &&
      H === void 0 &&
      Math.abs(xt) < 0.001 &&
      Math.abs(Ft) < 0.001 &&
      [
        Gt,
        ae,
        mt,
        Dt,
        Ut,
        ft,
        G,
        ct,
        Pt,
        Ct,
        Ot,
        Wt,
        gt,
        bt,
        ...zt,
        ...(w?.parts.map((O) => O.t) ?? []),
      ].every(kn) &&
      (w?.recolour.settled ?? !0);
    vt && Z && (!p.matches || !C) && (ht = requestAnimationFrame(Ie));
  }
  function gs(t) {
    d.classList.toggle("is-taken", t),
      (gt.target = bt.target = 0),
      (Y = void 0),
      f.classList.remove("is-over-product"),
      P();
  }
  function P() {
    ht || !vt || !Z || ((re = performance.now()), (ht = requestAnimationFrame(Ie)));
  }
  async function bs() {
    navigator.gpu || (await j);
    const t = o.findIndex((A) => A.key === new URLSearchParams(location.search).get("product"));
    it = Math.max(0, t);
    const [h, g] = await Promise.all([j, le(o[it])]);
    if (i.aborted) return;
    (R = h), Ne(g), (G.value = G.target = 1), (Z = !0), d.classList.add("is-ready"), Oe();
    const S = () => {
      for (const A of o) le(A).catch(() => {});
    };
    "requestIdleCallback" in window ? requestIdleCallback(S, { timeout: 1500 }) : setTimeout(S, 600);
  }
  ["data", "agentic"].forEach((t) => {
    const { zone: h, button: g } = y[t];
    h.addEventListener(
      "pointerenter",
      (S) => {
        S.pointerType !== "mouse" || J || (clearTimeout(yt), (yt = window.setTimeout(() => et(t), vn)));
      },
      { signal: i },
    ),
      h.addEventListener("pointerleave", () => clearTimeout(yt), { signal: i }),
      h.addEventListener(
        "click",
        () => {
          k === t && J ? et("rest") : et(t, !0),
            document.activeElement === g &&
              (k === "data"
                ? c.swatches[0]?.focus({ preventScroll: !0 })
                : k === "agentic" && x.focus({ preventScroll: !0 }));
        },
        { signal: i },
      );
  }),
    x.addEventListener(
      "click",
      () => {
        const t = k;
        et("rest"), y[t === "agentic" ? "agentic" : "data"].button.focus({ preventScroll: !0 });
      },
      { signal: i },
    ),
    d.addEventListener(
      "keydown",
      (t) => {
        if (t.key === "Escape" && k !== "rest") {
          t.preventDefault();
          const h = k;
          et("rest"), y[h === "agentic" ? "agentic" : "data"].button.focus({ preventScroll: !0 });
        } else (t.key === "Enter" || t.key === " ") && t.target === L && (t.preventDefault(), $e());
      },
      { signal: i },
    ),
    (L.tabIndex = 0),
    d.addEventListener("pointerenter", () => clearTimeout(Ht), { signal: i }),
    d.addEventListener(
      "pointerleave",
      (t) => {
        clearTimeout(yt),
          !(t.pointerType !== "mouse" || J || k === "rest") && (Ht = window.setTimeout(() => et("rest"), wn));
      },
      { signal: i },
    ),
    d.addEventListener(
      "focusout",
      (t) => {
        !J && k !== "rest" && !d.contains(t.relatedTarget) && et("rest");
      },
      { signal: i },
    ),
    c.labels.forEach((t, h) => {
      t.addEventListener(
        "pointerenter",
        () => {
          (W = h), Xt(!1), P();
        },
        { signal: i },
      ),
        t.addEventListener(
          "pointerleave",
          () => {
            W === h && (W = -1), P();
          },
          { signal: i },
        );
    }),
    (c.onSwatch = (t) => {
      if (!w) return;
      const h = _t(w.product)[t] ?? w.product.colour;
      w.recolour.set(h), c.selectSwatch(t), L.setAttribute("aria-label", Pe(w, h)), (W = Qe), P();
    }),
    c.element.addEventListener(
      "focusin",
      () => {
        (Vt = !0), (W = Qe), P();
      },
      { signal: i },
    ),
    c.element.addEventListener(
      "focusout",
      () => {
        (Vt = !1), (W = -1), P();
      },
      { signal: i },
    ),
    document.fonts?.ready.then(() => {
      i.aborted || (c.measure(), m.measure(), jt(), P());
    }),
    f.addEventListener(
      "pointerleave",
      (t) => {
        (gt.target = bt.target = 0),
          (Y = void 0),
          f.classList.remove("is-over-product"),
          t.pointerType === "mouse" && !q && Xt(!1),
          P();
      },
      { signal: i },
    ),
    f.addEventListener(
      "pointermove",
      (t) => {
        const h = f.getBoundingClientRect(),
          g = t.clientX - h.left,
          S = t.clientY - h.top;
        if (!q) {
          const A = Z && Kt(g, S, 2) && !(W >= 0 || Vt),
            C = A ? (g - (E.x0 + E.x1) / 2) / Math.max(1, E.x1 - E.x0) : 0,
            O = A ? (S - (E.y0 + E.y1) / 2) / Math.max(1, E.y1 - E.y0) : 0;
          (gt.target = C * ot(16)), (bt.target = O * ot(9));
        }
        if ((t.pointerType === "mouse" && ((Y = { x: g, y: S }), Fe(), ds()), D && t.pointerId === D.id)) {
          const A = t.clientX - D.x,
            C = performance.now();
          if (((D.moved += Math.abs(A)), D.moved > 4 && (q = !0), q)) {
            const O = A * 0.012;
            (Ft += O), (xt = O / Math.max(0.008, (C - D.t) / 1e3)), (ie = C);
          }
          (D.x = t.clientX), (D.t = C);
        }
        P();
      },
      { signal: i },
    ),
    f.addEventListener(
      "pointerdown",
      (t) => {
        if (t.target.closest("button, .surfacing__value, .surfacing__channel")) return;
        const h = f.getBoundingClientRect();
        Kt(t.clientX - h.left, t.clientY - h.top, t.pointerType === "mouse" ? 2 : 10) &&
          ((D = { id: t.pointerId, x: t.clientX, t: performance.now(), moved: 0 }),
          f.setPointerCapture(t.pointerId),
          (xt = 0));
      },
      { signal: i },
    );
  const Re = (t) => {
    if (!D || t.pointerId !== D.id) return;
    const h = q;
    if (
      (performance.now() - D.t > 70 && (xt = 0),
      (q = !1),
      (D = void 0),
      (ie = performance.now()),
      !h && t.type === "pointerup")
    ) {
      const g = f.getBoundingClientRect();
      Kt(t.clientX - g.left, t.clientY - g.top, t.pointerType === "mouse" ? 2 : 10) && $e();
    }
    h && t.pointerType === "mouse" && Fe(), P();
  };
  f.addEventListener("pointerup", Re, { signal: i }), f.addEventListener("pointercancel", Re, { signal: i });
  const Be = new ResizeObserver(Oe);
  Be.observe(f);
  const Ge = new IntersectionObserver(([t]) => {
    (vt = !!t?.isIntersecting && document.visibilityState === "visible"), vt && P();
  });
  return (
    Ge.observe(d),
    document.addEventListener(
      "visibilitychange",
      () => {
        (vt = document.visibilityState === "visible"), vt && P();
      },
      { signal: i },
    ),
    p.addEventListener("change", P, { signal: i }),
    bs().catch((t) => {
      i.aborted || (t instanceof ws || console.error(t), d.classList.add("is-error"));
    }),
    () => {
      u.abort(),
        clearTimeout(yt),
        clearTimeout(Ht),
        clearTimeout(Q),
        Be.disconnect(),
        Ge.disconnect(),
        cancelAnimationFrame(ht),
        j.then(
          (t) => t.dispose(),
          () => {},
        ),
        d.remove();
    }
  );
}
export { Rn as mountSurfacing };
