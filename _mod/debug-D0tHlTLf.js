import { p as m, G as f, L as d, a1 as j } from "./htmlInCanvasWebGpu.client-CCocYEXD.js";
import { p as S, l as W } from "./index-CDrXm2i4.js";
import "./clamp-co6UzHBn.js";
import "./frameLoop-CeLX9Qef.js";
import "./smoothScroll-DNrjGF3X.js";
import "./mesh.wgsl-CahI0rXV.js";
import "./residentSections-BEssGc_p.js";
import "./rootMirror-C_uDdAx6.js";
import "./colorPalette-VQpnhwit.js";
import "./frame-uyhWmNSJ.js";
import "./easing-BhDfN7yX.js";
import "./build-section-frame-DWD4QmNv.js";
import "./highlight-BjwrNyM6.js";
import "./pack-D8z7b37W.js";
import "./style-i6E2ipwK.js";
import "./wire-BRlyKbjJ.js";
import "./journey-B8CyvxC_.js";
import "./sectionDot-BkMs301a.js";
import "./preload-helper-CZudbPKK.js";
import "./htmlInCanvasTilt-BU1xBiHq.js";
import "./shader-7sCtY4bJ.js";
import "./surface-Be90gCgo.js";
import "./random-CYrl7Amx.js";
import "./HtmlInCanvasEntry-Bdoyn_tT.js";
import "./heroTap-in5modXK.js";
import "./reportError-C6Wenmm6.js";
import "./breadcrumbs-D6XkVKYD.js";
import "./HtmlInCanvasCornerButton-DFPZ9Nom.js";
import "./buttonCount-ouJvNL2Q.js";
import "./ref-mixin-D6m2Cu20.js";
import "./mixin-CMuDUxNx.js";
import "./jsx-CLqwgotn.js";
import "./typed-event-target-DhbNxY-V.js";
import "./on-mixin-Ci1jclOX.js";
import "./formatCopy-Cs7MVtfe.js";
import "./locale-DXEWuBc6.js";
import "./htmlInCanvasRegistry-Bxwl97Ch.js";
import "./htmlInCanvasSupport-jvDIQ00h.js";
import "./client-entries-B1h-jQ5r.js";
import "./component-BWKvSpCv.js";
import "./fontFamily-DUpol7iY.js";
function ht(w, l) {
  const p = w.dev,
    { board: u, hop: g, words: c, ui: b } = p,
    o = p.state,
    M = f.legs;
  let h = null;
  return {
    get labels() {
      return o().labels.map(({ t, x: e, y: r, alpha: n, font: a }) => ({ t, x: e, y: r, alpha: n, font: a }));
    },
    get lift() {
      const { raised: t } = o();
      return [...l.lift].map(([e, r]) => {
        const n = t.find((a) => a.el === e);
        return {
          tag: e.tagName,
          kind: j(e),
          k: r.k,
          p: r.p,
          ink: n?.ink,
          spec: n?.spec,
          text: e.textContent?.trim(),
          section: [...document.querySelectorAll("[data-f26-page-section]")].findIndex((a) => a.contains(e)),
          box: n && { x0: n.x0, x1: n.x1, r0: n.r0, r1: n.r1, base: n.base, top: n.top },
        };
      });
    },
    inspectOn(t) {
      d.layers.inspect.on = t;
    },
    inspectAlpha(t) {
      (d.layers.inspect.alpha = t), p.redraw();
    },
    inspectPills(t) {
      (d.layers.inspect.pills = t), p.redraw();
    },
    debugWell(t) {
      p.well(t);
    },
    get gridWells() {
      return l.gridWells();
    },
    project(t, e, r = 0) {
      const { g: n } = o();
      return n ? m(n, t, e, r) : null;
    },
    bright(t) {
      const { grid: e, pulses: r } = d.layers;
      t && !h && (h = { grid: { ...e }, pulses: { ...r }, callouts: { ...d.callouts } });
      const n = h;
      t
        ? (Object.assign(e, { minor: 1, major: 1, diagonal: 0 }), (r.on = !1), (d.callouts.alpha = 0))
        : n &&
          (Object.assign(e, n.grid),
          Object.assign(r, n.pulses),
          Object.assign(d.callouts, n.callouts),
          (h = null)),
        p.redraw();
    },
    get music() {
      return p.music.debug;
    },
    get phase() {
      return o().phase;
    },
    get startBox() {
      return o().startBox;
    },
    get padY() {
      return o().padY;
    },
    get offset() {
      return o().g?.offset ?? 0;
    },
    get look() {
      return W(innerHeight);
    },
    get ending() {
      return o().ending;
    },
    get armed() {
      return o().armed;
    },
    get camY() {
      return o().camY;
    },
    get over() {
      return l.over();
    },
    get finishY() {
      return o().ball?.finishY ?? 0;
    },
    get fuzz() {
      const { o: t, on: e } = o().fuzz;
      let r = 0;
      for (let n = 0; n < t.length; n += 3) r = Math.max(r, Math.hypot(t[n], t[n + 1], t[n + 2]));
      return { on: e, most: Math.round(r * 10) / 10 };
    },
    get aim() {
      return o().aim;
    },
    get t() {
      return o().ball?.t ?? 0;
    },
    place(t, e) {
      p.place(t, e);
    },
    set radius(t) {
      const { ball: e } = o();
      e && (e.r = t);
    },
    get taken() {
      return { ...o().taken };
    },
    get flying() {
      return o().picked.filter((t) => !t.landed).length;
    },
    hop: Object.defineProperties(
      () => {
        const { phase: t, ending: e, pit: r, clock: n } = o();
        t === "play" && !e && !r && !g.air && g.press < 0 && (g.press = n);
      },
      Object.fromEntries(["z", "vz", "s", "air", "n"].map((t) => [t, { get: () => g[t] }])),
    ),
    get shoved() {
      return o().shoved;
    },
    get props() {
      return l.props();
    },
    get blocks() {
      const t = l.blocks();
      return { n: t.length, first: t.slice(0, 16) };
    },
    get touch() {
      return o().ball?.touch ?? null;
    },
    get board() {
      return {
        gaps: o().gapsSeen,
        pads: u.pads.map(({ x0: t, x1: e, y0: r, y1: n, ry: a, h: s, j: i }) => ({
          x0: t,
          x1: e,
          y0: r,
          y1: n,
          ry: a,
          h: s,
          j: i,
        })),
        holes: u.holes.map(({ x: t, y: e, R: r, X: n, over: a, j: s }) => ({
          x: t,
          y: e,
          R: r,
          X: n ?? r,
          over: !!a,
          j: s,
        })),
        pushes: u.pushes.map((t) => ({ ...t })),
        fence: u.fence,
      };
    },
    get boosts() {
      return u.boosts;
    },
    get falls() {
      return o().falls;
    },
    get pit() {
      const { pit: t, ball: e } = o();
      if (!t) return null;
      const r = e;
      return {
        x: t.h.x,
        y: t.h.y,
        R: t.h.R,
        fell: !!t.fell,
        done: !!t.done,
        card: t.card,
        z: r.z,
        vz: r.vz,
        pinch: r.pinch,
        dist: t.dist,
      };
    },
    get jumps() {
      return u.jumps;
    },
    get jumpPoints() {
      return u.jumpPoints;
    },
    get ramp() {
      return u.ramp;
    },
    get kickers() {
      return u.liftK();
    },
    get boostK() {
      return u.boostK();
    },
    get hopZ() {
      return g.z;
    },
    get air() {
      return g.air;
    },
    boardOn(t) {
      f.board = t;
    },
    boostSpeed(t) {
      f.boostSpeed = t;
    },
    propsOn(t) {
      f.props = t;
    },
    legsOn(t) {
      f.legs = t ? M : 0;
    },
    get legs() {
      const { ball: t } = o(),
        e = t ? [t.x, t.y, p.centreZ()] : [0, 0, 0];
      return {
        count: c.legs.length,
        phases: c.legs.map((r) => r.phase),
        yanked: c.yanked,
        at: c.legs.map((r) => ({ phase: r.phase, a: r.a, knee: r.knee, foot: r.foot, hip: c.hip(r, e) })),
      };
    },
    get tally() {
      return p.tally();
    },
    get size() {
      const { ball: t, R0: e } = o();
      return t ? { r: t.r, n: t.n, R0: e } : null;
    },
    get picked() {
      return o().picked.map((t) => ({ ra: t.ra, landed: t.landed }));
    },
    get graphs() {
      return {
        sections: l
          .graphs()
          .map((t) => ({
            name: t.name,
            nodes: t.nodes.length,
            gone: t.gone.size,
            at: t.nodes.map((e) => [t.anchor[0] + e.x, t.anchor[1] + e.y + t.offset]),
          })),
        home: l.hero().length,
        homeAt: l.hero().map((t) => [t.w, t.at[0], t.at[1], t.hub]),
        homeGone: l.heroGone.size,
      };
    },
    get wordStats() {
      return c.debug;
    },
    get wordIndex() {
      return c.words().map((t) => [t.text, t.x, t.y, t.w, t.h, t.si, t.st, t.kind, t.z]);
    },
    get wordDrift() {
      const t = {},
        e = document.createRange();
      return (
        l.words.measure(() => {
          for (const r of c.words()) {
            e.setStart(r.r.startContainer, r.r.startOffset), e.setEnd(r.r.endContainer, r.r.endOffset);
            const [n, , a] = l.words.place(e),
              s = (t[r.si] ??= [0, 0, 0]);
            (s[0] = Math.max(s[0], n - r.y)),
              (s[1] = Math.min(s[1], n - r.y)),
              (s[2] = Math.max(s[2], Math.abs(a - r.x)));
          }
        }),
        t
      );
    },
    wordScreen(t) {
      const e = c.screen(t),
        { left: r, top: n } = l.canvas();
      return e && [e[0] + r, e[1] + n, e[2] + r, e[3] + n];
    },
    words(t) {
      (c.enabled = t), p.redraw();
    },
    get layoutMs() {
      return o().layoutMs;
    },
    get stepMs() {
      return o().stepMs;
    },
    get drawMs() {
      return o().drawMs;
    },
    get hidden() {
      return o().hidden;
    },
    set hidden(t) {
      p.hide(t);
    },
    get ball() {
      const { g: t, ball: e, cz: r } = o();
      if (!t || !e) return null;
      const n = p.rowOf(e.y),
        a = Math.max(e.r, r),
        s = m(t, e.x, n, a),
        i = m(t, e.x + e.r, n, a);
      if (!s || !i) return null;
      const y = m(t, e.x, n, p.centreZ()) ?? s,
        { left: k, top: x } = l.canvas(),
        z = S((O, v = 0) => m(t, e.x, O, v)?.y, n, e.r, a, t.W);
      return {
        x: s.x + k,
        y: s.y + x,
        r: e.r,
        z: a,
        py: e.y,
        px: e.x,
        W: t.W,
        vx: e.vx,
        vy: e.vy,
        q: e.q,
        t: e.t,
        floor: (m(t, e.x, n)?.y ?? 0) + x,
        rx: Math.abs(i.x - s.x),
        low: z.low + x,
        at: [y.x + k, y.y + x],
      };
    },
    get under() {
      const { g: t, ball: e, solid: r } = o();
      if (!t || !e) return null;
      const n = p.rowOf(e.y),
        a = 3 * e.r,
        s = o().finCard && o().fin;
      return {
        W: t.W,
        card: s && [s.x0, s.x1, s.back - t.offset, s.face - t.offset, s.hz].map(Math.round),
        ball: [e.x, n, e.r].map(Math.round),
        boxes: r
          .filter((i) => i.x1 > e.x - a && i.x0 < e.x + a && i.r1 > n - a && i.r0 < n + a)
          .map((i) => ({
            el: `${i.el.tagName.toLowerCase()}.${String(i.el.className).split(" ").slice(0, 3).join(".")}`,
            r: [i.x0, i.x1, i.r0, i.r1, i.base, i.top].map(Math.round),
          })),
      };
    },
    get start() {
      return b.button.hidden || b.layer.hidden ? null : b.button.getBoundingClientRect().toJSON();
    },
    get quad() {
      return o().quad;
    },
    get fireworks() {
      const t = o().fireworks;
      return { state: [...t.state], n: [...t.n], t: [...t.t] };
    },
  };
}
export { ht as createGameDebug };
