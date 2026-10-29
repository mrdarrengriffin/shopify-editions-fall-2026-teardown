import { t as vt } from "./index-CRnHN5xY.js";
import { a as bt } from "./breadcrumbs-D6XkVKYD.js";
import { r as et, e as yt, f as wt } from "./reportError-C6Wenmm6.js";
import { W as it, v as kt, x as xt, y as Lt, d as St } from "./build-section-frame-DWD4QmNv.js";
import { s as Et } from "./screens-Ba-bo_-7.js";
import { G as Ct, a as Tt, D as Y, f as Pt, b as ot } from "./controller-K4XUImFK.js";
import { B as It } from "./viewport-BNcWwBnZ.js";
import { C as Mt, w as Ht, c as Rt } from "./pointer-BIwh0LIE.js";
import { l as $, s as Nt, r as At } from "./easing-BhDfN7yX.js";
import { r as j } from "./ref-mixin-D6m2Cu20.js";
import { F as Bt } from "./component-BWKvSpCv.js";
import { o as G } from "./on-mixin-Ci1jclOX.js";
import { j as z } from "./jsx-CLqwgotn.js";
import { G as Dt } from "./GraphLabels-Bzy3rnoo.js";
import { a as Ot } from "./constants-Dvx39Bnh.js";
import { h as zt, N as Q } from "./frame-uyhWmNSJ.js";
import { p as V } from "./pageCover-D_pd6g0y.js";
import { n as st } from "./frameLoop-CeLX9Qef.js";
import { C as Gt } from "./cardWire-CPLlDeJq.js";
import { S as _t } from "./sectionHub-D4Y0MOvJ.js";
import "./preload-helper-CZudbPKK.js";
import "./highlight-BjwrNyM6.js";
import "./pack-D8z7b37W.js";
import "./style-i6E2ipwK.js";
import "./colorPalette-VQpnhwit.js";
import "./wire-BRlyKbjJ.js";
import "./clamp-co6UzHBn.js";
import "./journey-B8CyvxC_.js";
import "./htmlInCanvasSupport-jvDIQ00h.js";
import "./renderer-BovJ3rtt.js";
import "./color-CltOj4AS.js";
import "./edges-q2U63MtZ.js";
import "./nodes-CE-hkA1S.js";
import "./label-geometry-bLZ-6wUC.js";
import "./surface-Be90gCgo.js";
import "./disabledByUrl-iUMtXRf9.js";
import "./edges-Bnyb0sYf.js";
import "./shader-7sCtY4bJ.js";
import "./fontFamily-DUpol7iY.js";
import "./nodes-DcsteTs-.js";
import "./mixin-CMuDUxNx.js";
import "./typed-event-target-DhbNxY-V.js";
import "./clsx-B-dksMZM.js";
import "./Button---CvFgJi.js";
import "./externalLink-DAUa5sJm.js";
const Ft = "#ffffff",
  J = 0.85,
  rt = 0.82,
  qt = 32,
  jt = 0.3,
  Kt = 22,
  Wt = 0.1;
function Xt(i, { bounds: t, label: { source: o } }, e, r) {
  const { x: c } = kt({ x: o.x + (e / 2 - o.x) * 0.88, y: o.y }, t, qt),
    d = { x: c, y: $(t.top, t.bottom, jt) },
    l = 1 - (1 - r / J) ** 5,
    p = i.journey ? i.journey.sample.isolate : Nt(At(i.sample.focus, 0, 0.7));
  return {
    point: Lt(o, { x: $(o.x, d.x, l), y: $(o.y, d.y, l) }, i.target, i.sample.menu, rt),
    alpha: p * xt(i.sample.menu, rt).alpha,
    launch: l,
  };
}
function Yt(i) {
  const { sectionId: t } = i.props;
  let o,
    e = null,
    r,
    c = !1,
    d = 0,
    l = { x: 0, y: 0 },
    p = { x: 0, y: 0 },
    L = [];
  function B() {
    return c && ((c = !1), (d = 0), r && (r.hidden = !0), o && (o.width = o.height = 0)), !1;
  }
  function C(v, y) {
    const { left: I, top: w, width: E, height: A } = o.getBoundingClientRect(),
      P = ({ x: S, y: s, alpha: m }) => m > Wt && S >= 0 && s >= 0 && S <= E && s <= A;
    i.props.onOpen({
      launcher: v,
      restoreFocus: y,
      points: [...L, { ...l, alpha: 1 }]
        .filter(P)
        .map(({ x: S, y: s, alpha: m }) => ({ x: S + I, y: s + w, alpha: m })),
      menu: { x: p.x + I, y: p.y + w },
      standIn: i.props.onStandIn,
    });
  }
  function g(v, y) {
    return !r || r.hidden || Math.hypot(v - l.x, y - l.y) > Kt ? !1 : (C(r, !1), !0);
  }
  function D({ section: v, reduced: y, dt: I, width: w, height: E, ratio: A }) {
    if (!o || !e || !r) return !1;
    if (v?.presentation.label.sectionId !== t) return B();
    const { frame: P, presentation: S } = v;
    d = P.reduced || y ? J : Math.min(J, d + I);
    const s = Xt(P, S, w, d);
    if (!s.alpha) return B();
    (c = !0),
      (l = s.point),
      (p = P.journey?.target ?? P.target),
      (L = S.nodes),
      (r.hidden = s.alpha < 0.005),
      (r.style.left = `${l.x}px`),
      (r.style.top = `${l.y}px`);
    const m = Math.round(w * A),
      O = Math.round(E * A);
    (o.width !== m || o.height !== O) && ((o.width = m), (o.height = O)),
      e.setTransform(A, 0, 0, A, 0, 0),
      e.clearRect(0, 0, w, E),
      e.save(),
      e.beginPath(),
      e.rect(0, it.top, w, E - it.top),
      e.clip(),
      (e.strokeStyle = e.fillStyle = Ft),
      (e.globalAlpha = 0.34 * s.alpha),
      (e.lineWidth = 0.7),
      e.setLineDash([3, 5]),
      e.beginPath(),
      e.moveTo(S.label.mark.x, S.label.mark.y),
      e.lineTo(l.x, l.y),
      e.stroke(),
      e.setLineDash([]);
    const H = s.launch * s.alpha;
    return (
      (e.globalAlpha = H),
      e.beginPath(),
      e.arc(l.x, l.y, 6 * H, 0, Math.PI * 2),
      e.stroke(),
      e.beginPath(),
      e.arc(l.x, l.y, 2 * H, 0, Math.PI * 2),
      e.fill(),
      e.restore(),
      s.launch < 1
    );
  }
  const N = j((v, y) => {
      (o = v), (e = v.getContext("2d")), i.props.onReady({ paint: D, click: g }, y);
    }),
    T = j((v) => {
      r = v;
    });
  return () =>
    z(Bt, {
      children: [
        z("canvas", {
          class: "pointer-events-none absolute inset-0 block h-full w-full",
          "aria-hidden": "true",
          mix: N,
        }),
        z("button", {
          type: "button",
          hidden: !0,
          "aria-label": i.props.label,
          class:
            "absolute size-44 -translate-x-1/2 -translate-y-1/2 rounded-full text-white focus-visible:outline-2 focus-visible:outline-offset-4",
          mix: [
            T,
            G("click", (v) => {
              C(v.currentTarget, v.detail === 0);
            }),
          ],
        }),
      ],
    });
}
const $t =
    "a, button, input, select, textarea, label, summary, [contenteditable], img, video, iframe, dialog, [popover], [data-html-in-canvas-drawn], .graph-egg",
  Vt = 250,
  Ut = "position:fixed;inset:0;z-index:2147483647;cursor:grabbing;touch-action:none;display:none";
function Qt(i, t, o, e, r) {
  let c,
    d = { x: 0, y: 0 },
    l = !1,
    p = !1,
    L,
    B = { x: 0, y: 0, time: 0 },
    C,
    g,
    D;
  const N = () => (D = void 0);
  function T(s) {
    const m = s instanceof HTMLElement || s instanceof SVGElement ? s : void 0;
    m !== C?.element &&
      (C && (C.element.style.cursor = C.cursor),
      (C = m && { element: m, cursor: m.style.cursor }),
      m && (m.style.cursor = "grab"));
  }
  function v(s) {
    return (D ??= i.getBoundingClientRect()), [s.clientX - D.left, s.clientY - D.top];
  }
  let y;
  function I(s) {
    return (
      y?.target !== s.target &&
        (y = {
          target: s.target,
          input: s.composedPath().some((m) => m instanceof Element && m.matches($t)),
        }),
      y.input
    );
  }
  function w(s, m, O) {
    const H = L,
      R = B;
    if (
      ((R.x = m),
      (R.y = O),
      (R.time = s.timeStamp),
      (L = R),
      (B = H ?? { x: 0, y: 0, time: 0 }),
      !H || R.time - H.time > Vt)
    )
      return;
    const _ = (R.time - H.time) / 1e3;
    t.brush(H, R, _, R.time) && o();
  }
  function E(s) {
    (p = !1),
      !(
        c !== void 0 ||
        s.button !== 0 ||
        !s.isPrimary ||
        s.pointerType !== "mouse" ||
        !r() ||
        I(s) ||
        !t.grab(...v(s))
      ) &&
        ((c = s.pointerId),
        (d = { x: s.clientX, y: s.clientY }),
        (l = !1),
        (L = void 0),
        s.preventDefault(),
        s.stopPropagation(),
        T(void 0),
        g ||
          ((g = document.createElement("div")),
          g.setAttribute("aria-hidden", "true"),
          (g.style.cssText = Ut),
          g.addEventListener("lostpointercapture", S, { signal: e })),
        g.isConnected || document.body.append(g),
        (g.style.display = ""),
        g.setPointerCapture(c),
        o());
  }
  function A(s) {
    if (c !== void 0) {
      if (s.pointerId !== c) return;
      if (!r()) return P();
      Math.hypot(s.clientX - d.x, s.clientY - d.y) > Mt && (l = !0), t.drag(...v(s)), o();
      return;
    }
    if (s.pointerType !== "mouse" || s.buttons !== 0 || !r() || I(s)) {
      (L = void 0), T(void 0), t.hover(void 0) && o();
      return;
    }
    const [m, O] = v(s);
    w(s, m, O), T(t.pick(m, O) === void 0 ? void 0 : s.target), t.hover({ x: m, y: O }) && o();
  }
  function P() {
    if (c === void 0) return;
    const s = c;
    (c = void 0),
      (p = l),
      t.release(),
      g && (g.hasPointerCapture(s) && g.releasePointerCapture(s), (g.style.display = "none")),
      o();
  }
  function S(s) {
    s.pointerId === c && P();
  }
  return (
    window.addEventListener("pointerdown", E, { capture: !0, signal: e }),
    window.addEventListener("pointermove", A, { signal: e }),
    window.addEventListener("pointerup", S, { signal: e }),
    window.addEventListener("pointercancel", S, { signal: e }),
    window.addEventListener("blur", P, { signal: e }),
    window.addEventListener("resize", N, { passive: !0, signal: e }),
    window.addEventListener(
      "scroll",
      (s) => {
        N(), s.target === document && ((L = void 0), (y = void 0), c === void 0 && T(void 0));
      },
      { passive: !0, capture: !0, signal: e },
    ),
    window.addEventListener(
      "pointerout",
      (s) => {
        s.relatedTarget === null && ((L = void 0), t.hover(void 0) && o());
      },
      { signal: e },
    ),
    document.addEventListener(
      "selectstart",
      (s) => {
        c !== void 0 && s.preventDefault();
      },
      { signal: e },
    ),
    window.addEventListener(
      "click",
      (s) => {
        !p || s.detail === 0 || ((p = !1), s.preventDefault(), s.stopPropagation());
      },
      { signal: e, capture: !0 },
    ),
    e.addEventListener(
      "abort",
      () => {
        P(), T(void 0), g?.remove(), (y = void 0);
      },
      { once: !0 },
    ),
    {
      sync() {
        r() || (P(), T(void 0), t.hover(void 0), (L = void 0), (y = void 0));
      },
    }
  );
}
class Jt {
  controller;
  #y;
  #t;
  #w;
  #A;
  #B = !0;
  #h;
  #V = {};
  #k;
  #x;
  #U;
  #d = new Set();
  #D;
  #O;
  #u;
  #Q;
  #z;
  #s;
  #L;
  #n;
  #p = 0;
  #a = 0;
  #c = 0;
  #S = 0;
  #E = 0;
  #C = 0;
  #T = !1;
  #P = V.covered;
  #I = !1;
  #f = !0;
  #i = !1;
  #J = window.matchMedia("(hover: hover) and (pointer: fine)");
  #M;
  #Z;
  #m;
  #e;
  #H;
  #l = !0;
  #R;
  #tt;
  #G = !1;
  #et = () => 0;
  #it = 0;
  #_;
  #o;
  #F = !1;
  #g;
  #ct = {
    begin: (t, o, e) => {
      const { pointerLayout: r, simulation: c } = this.controller;
      (this.#g = r.active ? r : c), this.#g.beginDrag(t, o, e), this.wake();
    },
    to: (t, o) => {
      this.#g?.dragTo(t, o), this.wake();
    },
    end: (t) => {
      this.#g?.endDrag(t), (this.#g = void 0), this.wake();
    },
  };
  #lt = {
    layout: () => this.#o,
    drag: this.#ct,
    cover: (t) => this.#rt(t),
    taken: (t) => {
      (this.#r = t), this.#m?.sync(), this.wake();
    },
    replay: () => this.replayIntro(),
    click: (t, o) => {
      this.controller.introDone &&
        this.#l &&
        !this.#i &&
        !this.controller.pointerLayout.active &&
        this.#u?.(t, o);
    },
    showAll: () => (this.controller.exploring ? (this.#z?.(), !0) : !1),
  };
  #v = !1;
  #r = !1;
  #ot;
  #q;
  #N;
  constructor(t, o, e, r) {
    (this.#y = t),
      (this.#q = r),
      (this.controller = new Ct(t, o)),
      (this.#_ = window.matchMedia("(prefers-reduced-motion: reduce)")),
      this.#J.addEventListener("change", this.#$, { signal: e }),
      this.#$(),
      (this.controller.reducedMotion = this.#_.matches),
      this.#_.addEventListener("change", this.#ft, { signal: e }),
      document.addEventListener("visibilitychange", this.#nt, { signal: e });
    for (const c of ["pagehide", "pageshow"]) window.addEventListener(c, this.#nt, { signal: e });
    document.addEventListener(Gt, this.#ht, { signal: e }),
      document.addEventListener(_t, this.#dt, { signal: e }),
      V.addEventListener(
        "change",
        () => {
          (this.#P = V.covered), this.#P ? this.#b() : this.wake();
        },
        { signal: e },
      ),
      e.addEventListener("abort", this.#pt, { once: !0 });
  }
  #ht = (t) => {
    const o = t.detail;
    if (!o || !this.#t || !this.#X || !this.#f) return;
    const e = this.#y.nodes.find(({ handle: d }) => d === o.handle);
    if (!e) return;
    o.pin && (this.controller.pinCard(e.id), this.wake());
    const r = this.controller.cardWire(e.id);
    if (!r) return;
    const c = this.#st(this.#t);
    o.wire = { from: c(r.from), to: c(r.point), handle: r.handle };
  };
  #dt = (t) => {
    const o = t.detail;
    if (!o || !this.#t || !this.#X || !this.#f) return;
    const e = this.controller.sectionHubPoint(o.section);
    e && (o.point = this.#st(this.#t)(e));
  };
  #st(t) {
    const o = t.getBoundingClientRect(),
      e = o.width / t.clientWidth,
      r = o.height / t.clientHeight;
    return ({ x: c, y: d }) => ({ x: o.left + c * e, y: o.top + d * r });
  }
  getNodeBounds(t) {
    if (!this.#t || !this.#e || t < 0 || t >= this.#e.nodeCount) return;
    const o = t * Q,
      e = this.#e.nodes[o + 2];
    if (e <= 0 || (this.#R !== t && this.#e.nodes[o + 7] < 0.05)) return;
    const r = this.#t.getBoundingClientRect(),
      c = r.width / this.#t.clientWidth,
      d = r.height / this.#t.clientHeight;
    return {
      left: r.left + (this.#e.nodes[o] - e) * c,
      top: r.top + (this.#e.nodes[o + 1] - e) * d,
      width: e * 2 * c,
      height: e * 2 * d,
    };
  }
  setHiddenNode(t) {
    (this.#R = t), this.wake();
  }
  setClickListener(t) {
    this.#u = t;
  }
  setHoverListener(t) {
    this.#Q = t;
  }
  setBackgroundClickListener(t) {
    this.#z = t;
  }
  setDrawListener(t) {
    this.#D = t;
  }
  setLabelPainter(t) {
    (this.#U = t), this.wake();
  }
  get paintedPageColour() {
    return this.#H;
  }
  setThumbnails(t) {
    (this.#B = t), this.#j(), this.wake();
  }
  setThumbnailSources(t) {
    (this.#V = t), this.#j();
  }
  #j() {
    const t = this.#w,
      o = this.#A;
    if (!this.#B || !t || !o) return;
    const e = this.controller.images.map((l) => this.#V[l] ?? l),
      r = this.#h;
    if (e.length === 0 || (r && te(r, e))) return;
    this.#h = e;
    const c = r && e.filter((l) => !r.includes(l));
    (c?.length
      ? t.loadImages([...r, ...c], o).then(() => (this.#h === e ? t.loadImages(e, o) : void 0))
      : t.loadImages(e, o)
    ).then(this.wake, (l) => {
      o.aborted || this.#L?.(l, "HeroPreview.loadImages");
    });
  }
  setStoodIn(t) {
    (this.#I = t), this.#m?.sync(), t ? this.#b() : this.wake();
  }
  addOverlay(t) {
    return (
      this.#d.add(t),
      this.wake(),
      () => {
        this.#d.delete(t), this.wake();
      }
    );
  }
  attach(t, o, e, r) {
    this.#t && this.detach(this.#t),
      (this.#t = t),
      (this.#w = o),
      (this.controller.glyphLayers = o.kind === "webgpu"),
      (this.#A = e),
      (this.#O = Tt(e, () => ({
        backend: o.kind,
        width: this.#a,
        height: this.#c,
        pixelRatio: this.#C,
        reducedMotion: this.controller.reducedMotion,
      }))),
      (this.#h = void 0),
      (this.#L = r),
      (this.#a = this.#c = this.#C = 0),
      (this.#S = t.clientWidth),
      (this.#E = t.clientHeight),
      (this.#k = new ResizeObserver(this.#ut)),
      this.#k.observe(t),
      (this.#f = !0),
      (this.#x = new IntersectionObserver(this.#mt)),
      this.#x.observe(t),
      this.#j(),
      this.#K(),
      (this.#N = this.#q?.register(this.#lt)),
      (this.#s = new AbortController()),
      Ht(t, this.controller.simulation, this.#y.nodes, this.wake, this.#s.signal, {
        onHover: this.#yt,
        displayed: this.controller.intro,
        origin: () => this.controller.origin,
        onClick: (c, d) => {
          this.controller.introDone && this.#u?.(c, d);
        },
        onBackgroundClick: () => this.#z?.(),
        clickable: () => this.controller.introDone && this.#u !== void 0,
        layout: this.controller.pointerLayout,
        surface: t.parentElement ?? t,
        enabled: () => this.#l && !this.#i,
      }),
      window.addEventListener("click", this.#bt, { signal: this.#s.signal });
    for (const c of ["resize", "scroll"])
      window.addEventListener(c, this.#gt, { passive: !0, signal: this.#s.signal });
    window.addEventListener("pointermove", this.#vt, { passive: !0, signal: this.#s.signal }),
      (this.#m = Qt(t, this.controller.pageInput, this.wake, this.#s.signal, () => this.#X)),
      e.addEventListener("abort", () => this.detach(t), { once: !0 }),
      this.wake();
  }
  detach(t) {
    this.#t === t &&
      (this.#b(),
      this.#k?.disconnect(),
      this.#x?.disconnect(),
      this.#s?.abort(),
      this.#N?.forget(),
      (this.#N = this.#o = void 0),
      (this.#r = !1),
      this.#rt(!1),
      (this.#k = this.#x = this.#s = void 0),
      (this.#t = this.#w = this.#L = void 0),
      (this.controller.glyphLayers = !1),
      (this.#A = void 0),
      (this.#O = void 0),
      (this.#h = void 0));
  }
  replayIntro() {
    this.controller.replayIntro(), (this.#F = !0), this.wake();
  }
  setScrollFrame(t) {
    (!t && !this.#i) ||
      (this.controller.setScrollFrame(t),
      this.#i !== (t !== void 0) && ((this.#i = t !== void 0), this.#K()),
      this.wake());
  }
  setHome(t) {
    (this.#tt = t), (this.#G = !0), this.wake();
  }
  setHomeShift(t) {
    (this.#et = t), this.wake();
  }
  setInteractive(t) {
    this.#l !== t && ((this.#l = t), this.#$(), this.#K(), this.wake());
  }
  #K() {
    if (!this.#t) return;
    this.#m?.sync();
    const t = this.#i || !this.#l;
    (this.#t.style.pointerEvents = t ? "none" : ""),
      t &&
        (this.controller.hover(-1),
        this.controller.simulation.setPointer(null),
        this.controller.simulation.endDrag(!0),
        this.controller.pointerLayout.setPointer?.(null),
        this.controller.pointerLayout.endDrag(!0));
  }
  #W(t, o = !1) {
    const { x: e, y: r } = this.controller.origin,
      c = !this.#o;
    (this.#o ??= { frame: t, x: e, y: r, explored: o }),
      (this.#o.frame = t),
      (this.#o.x = e),
      (this.#o.y = r),
      (this.#o.explored = o),
      c && this.#N?.laidOut();
  }
  setCoverListener(t) {
    this.#ot = t;
  }
  #rt(t) {
    t !== this.#v && ((this.#v = t), this.#m?.sync(), this.#ot?.(t), this.wake());
  }
  get #X() {
    return this.#i && !this.#r && !this.#v && !this.#I;
  }
  get #Y() {
    return this.#f || this.#v || this.#r;
  }
  wake = () => {
    !this.#n &&
      this.#t &&
      !this.#T &&
      !this.#P &&
      !this.#I &&
      this.#Y &&
      ((this.#p = 0), (this.#n = st(this.#at)));
  };
  #ut = (t) => {
    const { width: o, height: e } = t[0].contentRect;
    (this.#S = Math.round(o)), (this.#E = Math.round(e)), this.wake();
  };
  #pt = () => {
    this.#t && this.detach(this.#t);
  };
  #ft = (t) => {
    (this.controller.reducedMotion = t.matches), this.wake();
  };
  #nt = (t) => {
    (this.#T = t.type === "pagehide" || document.hidden), this.#T ? this.#b() : this.wake();
  };
  #mt = (t) => {
    const o = t.find((e) => e.target === this.#t);
    o && ((this.#f = o.isIntersecting), this.#Y ? this.wake() : this.#b());
  };
  #b() {
    this.#n?.(), (this.#n = void 0), (this.#H = void 0), this.#D?.(!1);
  }
  #$ = () => {
    (this.controller.heroGlyphs = this.#l && this.#J.matches), this.wake();
  };
  #gt = () => {
    (this.#Z = void 0), (this.#M = void 0);
  };
  #vt = (t) => {
    const o = this.#t;
    if (t.pointerType !== "mouse" || this.#i || !o) {
      this.#M = void 0;
      return;
    }
    const e = (this.#Z ??= o.getBoundingClientRect()),
      r = { x: t.clientX - e.left, y: t.clientY - e.top },
      c = this.#M,
      d = c ? (t.timeStamp - c.time) / 1e3 : 0;
    c && d < 0.25 && this.controller.stirHero(c, r, d) && this.wake(),
      (this.#M = { ...r, time: t.timeStamp });
  };
  #bt = (t) => {
    if (
      t.defaultPrevented ||
      !this.#i ||
      !this.#t ||
      !this.#e ||
      (t.target instanceof Element &&
        t.target.closest("a, button, input, select, textarea, label, .graph-egg")) ||
      !this.#t.checkVisibility({ visibilityProperty: !0 })
    )
      return;
    const o = this.#t.getBoundingClientRect(),
      e = t.clientX - o.left,
      r = t.clientY - o.top;
    for (const d of this.#d) if (d.click(e, r)) return;
    const c = Zt(this.#e, this.#y.nodes.length, e, r);
    c >= 0 && this.#u?.(c, t);
  };
  #yt = (t) => {
    this.controller.hover(t), this.#Q?.(t);
  };
  #at = (t) => {
    this.#n = void 0;
    const o = this.#t,
      e = this.#w;
    if (!o || !e) return;
    const r = this.#p ? t - this.#p : 0,
      c = this.#p ? Math.min(r / 1e3, 1 / 20) : 1 / 60;
    this.#p = t;
    try {
      const d = (this.#S || this.#a) && (this.#E || this.#c) ? void 0 : this.#q?.card?.size(),
        l = nt(this.#S, this.#a, d?.[0]),
        p = nt(this.#E, this.#c, d?.[1]);
      if (!l || !p) return;
      const L = Math.min(Ot, Math.max(1, window.devicePixelRatio || 1)),
        B = l !== this.#a || p !== this.#c || L !== this.#C;
      B && e.resize(l, p, L);
      const C = this.#tt,
        g = C ? this.#et() : 0;
      (B || this.#G || g !== this.#it) &&
        ((this.#G = !1),
        (this.#a = l),
        (this.#c = p),
        (this.#C = L),
        (this.#it = g),
        this.controller.resize(l, p, C && g ? { ...C, left: C.left - g } : C));
      const D = this.controller.step(c) || g !== 0;
      (this.#e = this.controller.build()),
        this.#B || zt(this.#e, this.controller.simulation.settings.updateRadius),
        this.#R !== void 0 && (this.#e.nodes[this.#R * Q + 7] = 0);
      const N = this.#o?.explored === !0,
        T = this.#r && (!this.#i || N) ? this.controller.buildHeroExplored() : void 0;
      T
        ? this.#W(T, !0)
        : !this.#i && !this.controller.exploring
          ? this.#W(this.#e)
          : this.#r &&
            (N || (this.#o ? this.#F : this.controller.introDone)) &&
            !this.controller.exploring &&
            this.#W(this.controller.buildHero()),
        (this.#F &&= !this.controller.introDone);
      let v = !1;
      if (((this.#H = void 0), !this.#v && !this.#r)) {
        e.draw(this.#e);
        const y = this.#e.pageColour;
        if (
          (e.paintedPageColour && y && (this.#H = { colour: y, width: l, height: p }),
          this.#U?.(this.controller.labelFrame),
          this.#d.size)
        ) {
          const I = {
            section: this.controller.section,
            reduced: this.controller.reducedMotion,
            dt: c,
            width: l,
            height: p,
            ratio: L,
          };
          for (const w of this.#d) v = w.paint(I) || v;
        }
        this.#O?.(r);
      }
      this.#D?.(!0), (D || v) && !this.#T && !this.#P && !this.#I && this.#Y && (this.#n = st(this.#at));
    } catch (d) {
      this.#L?.(d, "HeroPreview.frame");
    }
  };
}
function nt(i, t, o = 0) {
  return i || t || o;
}
function Zt(i, t, o, e) {
  let r = -1,
    c = 1 / 0;
  for (let d = 0; d < Math.min(t, i.nodeCount); d++) {
    const l = d * Q;
    if (i.nodes[l + 7] < 0.5 || i.nodes[l + 2] <= 0) continue;
    const p = Math.hypot(o - i.nodes[l], e - i.nodes[l + 1]);
    p <= Math.max(10, i.nodes[l + 2]) && p < c && ((c = p), (r = d));
  }
  return r;
}
function te(i, t) {
  return i.length === t.length && i.every((o, e) => o === t[e]);
}
const U = {};
function Ye(i) {
  let t, o;
  const e = new It(() => {
      bt("graph.backend", { active: e.active, fallbackReason: e.fallbackReason, error: e.error }),
        e.error ? i.props.onError?.() : yt(e, e.status),
        i.props.onBackendChange?.(e.status),
        i.update();
    }),
    r = St(i.props.data),
    c = typeof window > "u" ? void 0 : window.matchMedia("(hover: hover) and (pointer: fine)"),
    d = i.props.captions ?? Y.captions,
    l = r.map(({ id: n, label: a, role: h, handle: u }) => ({
      id: n,
      handle: u,
      role: h,
      text: a,
      caption: d[h],
      count: h === "section" ? i.props.sectionCounts?.[u] : void 0,
      section: h === "section",
      href: h === "section" ? "#" + u : void 0,
      overviewText: h === "section" || h === "update",
    })),
    p = new Map(r.map(({ id: n }, a) => [n, a]));
  function L(n, a, { gtm: h, innerText: u, clickEventType: f, bounds: b, point: k } = {}) {
    const M = r[a];
    if (!n || !M) return;
    const x = M.role === "section";
    wt({
      element: n,
      targetName: x ? "section" : "node",
      tagName: n instanceof HTMLAnchorElement ? "a" : "button",
      innerText: u ?? M.label,
      extraMetadata: x ? { sectionHandle: M.handle } : { handle: M.handle, type: M.role },
      gtm: h,
      clickEventType: f,
      bounds: b,
      point: k,
    });
  }
  function B(n, a) {
    const h = a.currentTarget instanceof HTMLElement ? a.currentTarget : void 0;
    L(h, p.get(n) ?? -1, {
      gtm: !0,
      innerText: h?.innerText || h?.textContent || h?.getAttribute("aria-label") || "",
      clickEventType: a.type,
    });
  }
  const C = (i.props.eggs ?? []).flatMap((n) => {
    const a = r.find((h) => h.role === "section" && h.handle === n.section);
    return a ? [{ sectionId: a.id, egg: n }] : [];
  });
  let g = !1,
    D = !1;
  const N = typeof window > "u" ? void 0 : window.matchMedia(`(min-width: ${Et["global-lg"]})`);
  N?.addEventListener(
    "change",
    () => {
      t?.setThumbnails(N.matches), i.props.focus && K();
    },
    { signal: i.signal },
  );
  const T = {};
  let v = i.props.replay,
    y = i.props.thumbnailSources ?? U,
    I,
    w = !0,
    E = !1;
  const A = () => w && !E;
  let P = "",
    S,
    s,
    m;
  const O = j((n) => {
    m = n;
  });
  let H, R;
  function _() {
    R?.(), (R = void 0), (H = i.props.scroll);
    const n = H,
      a = t;
    if (!a) return;
    if (!n) {
      a.setScrollFrame(void 0);
      return;
    }
    const h = () => a.setScrollFrame(n.current());
    (R = n.subscribe(h)), h();
  }
  i.signal.addEventListener("abort", () => R?.(), { once: !0 });
  function K() {
    const n = i.props.focus,
      a = n ? (p.get(n.id) ?? -1) : -1,
      h = [];
    for (const b of n?.neighbors ?? []) {
      const k = p.get(b);
      k !== void 0 && k !== a && h.push(k);
    }
    const u = [];
    for (const { source: b, target: k } of n?.edges ?? []) {
      const M = p.get(b),
        x = p.get(k);
      M !== void 0 && x !== void 0 && u.push([M, x]);
    }
    for (const b of n?.productAreaMatches ?? []) {
      const k = p.get(b.id);
      a >= 0 && k !== void 0 && u.push([a, k]);
    }
    const f = N?.matches ?? !1;
    a >= 0 ? t?.controller.explore(a, h, u, f) : t?.controller.showAll(),
      g !== (a >= 0 && f) && ((g = a >= 0 && f), i.update()),
      t?.wake();
  }
  const W = new Map(),
    X = new Map();
  function at(n, a, h, u) {
    t ? t.controller.setLabelSize(n, a, h, u) : W.set(n, [a, h, u]);
  }
  function ct(n, a, h, u) {
    t ? t.controller.setTitleSize(n, a, h, u) : X.set(n, [a, h, u]);
  }
  function Z(n) {
    t && (t.controller.configure(n), t.wake());
  }
  function lt(n, a) {
    if (!t) {
      (t = new Jt(i.props.data, n.getBoundingClientRect(), i.signal, i.props.heroTap)),
        t.setThumbnailSources(y),
        t.setThumbnails(N?.matches ?? !1),
        Object.keys(T).length > 0 && Z(T);
      for (const [f, b] of W) t.controller.setLabelSize(f, ...b);
      W.clear();
      for (const [f, b] of X) t.controller.setTitleSize(f, ...b);
      X.clear(),
        t.setHome(I),
        t.setHomeShift(() => i.props.homeShift?.() ?? 0),
        t.setInteractive(w),
        (t.controller.sectionLabels = E),
        (t.controller.sectionSeats = i.props.sectionSeats),
        (t.controller.ambientSections = A());
      const u = t;
      u.setDrawListener((f) => {
        i.props.onHeroMedia?.(f ? u.controller.heroMedia : void 0),
          i.props.onPageColour?.(f ? u.paintedPageColour : void 0),
          (!w || document.activeElement !== m) && (s = void 0),
          s?.focus({ preventScroll: !0 }),
          document.activeElement === s && (s = void 0);
      }),
        u.setClickListener((f, b) => {
          if (i.props.canSelect?.() === !1) return;
          const k = r[f];
          k &&
            (L(m, f, { bounds: u.getNodeBounds(f), point: { x: b.clientX, y: b.clientY } }),
            (S = s = void 0),
            m?.focus({ preventScroll: !0 }),
            i.props.onExplore?.(
              k.id,
              m
                ? {
                    launcher: m,
                    fromKeyboard: !1,
                    getBounds: () => u.getNodeBounds(f),
                    setHidden: (M) => u.setHiddenNode(M ? f : void 0),
                  }
                : void 0,
            ));
        }),
        u.setHoverListener(tt),
        u.setBackgroundClickListener(() => {
          i.props.focus && i.props.onShowAll?.();
        }),
        u.setCoverListener((f) => {
          (D = f), i.signal.aborted || i.update();
        }),
        K(),
        _();
    }
    const h = t;
    e.mount(a, {
      create: (u, f, b) => Rt(n, u, f, b, i.props.hdr ?? !1),
      attach: (u, f, b) => h.attach(n, u, f, b),
      detach: () => h.detach(n),
      onError: (u, f) =>
        et(u, f, {
          componentName: "ExponentialGraph",
          requestedBackend: i.props.backend,
          activeBackend: e.active,
        }),
    });
  }
  const ht = j((n, a) => {
    try {
      lt(n, a);
    } catch (h) {
      et(h, "ExponentialGraph.mount"), i.props.onError?.();
    }
  });
  function dt(n, a) {
    t?.setLabelPainter(n), a.addEventListener("abort", () => t?.setLabelPainter(void 0), { once: !0 });
  }
  function ut(n, a) {
    const h = t?.addOverlay(n);
    h && a.addEventListener("abort", h, { once: !0 });
  }
  function pt(n, a) {
    i.props.canSelect?.() !== !1 &&
      (i.props.focus || (S = n),
      B(n, a),
      i.props.onSelect?.(
        n,
        a.currentTarget instanceof HTMLElement
          ? {
              launcher: a.currentTarget,
              fromKeyboard: a.detail === 0,
              getBounds: () => t?.getNodeBounds(p.get(n) ?? -1),
              setHidden: (h) => t?.setHiddenNode(h ? p.get(n) : void 0),
            }
          : void 0,
      ));
  }
  function ft() {
    const n = S === void 0 ? void 0 : p.get(S),
      a = m?.querySelector(`[data-graph-index="${n}"]`);
    a?.focus({ preventScroll: !0 }),
      (s = void 0),
      document.activeElement !== a && (m?.focus({ preventScroll: !0 }), (s = a ?? void 0)),
      i.props.onShowAll?.();
  }
  function F(n) {
    const a = n === void 0 ? -1 : p.get(n);
    t?.controller.hover(a), t?.wake(), tt(a);
  }
  function tt(n) {
    const a = r[n]?.id;
    a !== o && ((o = a), i.props.onHover?.(a));
  }
  function mt() {
    t?.wake();
  }
  return () => {
    const { backend: n, description: a, hdr: h = !1 } = i.props;
    e.sync(n);
    const u = Object.fromEntries(Object.entries(i.props.settings ?? {}).filter(([x, q]) => T[x] !== q));
    Object.keys(u).length > 0 && (Object.assign(T, u), i.queueTask(() => Z(u))),
      i.props.replay !== v && ((v = i.props.replay), i.queueTask(() => t?.replayIntro())),
      i.props.scroll !== H && i.queueTask(_),
      (i.props.thumbnailSources ?? U) !== y &&
        ((y = i.props.thumbnailSources ?? U), i.queueTask(() => t?.setThumbnailSources(y))),
      ee(i.props.home, I) || ((I = i.props.home), i.queueTask(() => t?.setHome(I))),
      (i.props.interactive ?? !0) !== w &&
        ((w = i.props.interactive ?? !0),
        i.queueTask(() => {
          t && (t.setInteractive(w), (t.controller.ambientSections = A()));
        })),
      (i.props.sectionNavigation ?? !1) !== E &&
        ((E = i.props.sectionNavigation ?? !1),
        i.queueTask(() => {
          t && ((t.controller.sectionLabels = E), (t.controller.ambientSections = A()), t.wake());
        })),
      t &&
        t.controller.sectionSeats !== i.props.sectionSeats &&
        i.queueTask(() => {
          t && ((t.controller.sectionSeats = i.props.sectionSeats), t.wake());
        });
    const { focus: f } = i.props,
      b = f ? r[p.get(f.id) ?? -1] : void 0,
      k =
        (b?.role === "update" || b?.role === "section") && i.props.onNavigate
          ? {
              id: b.id,
              href: "#" + b.handle,
              label: i.props.learnMoreLabel ?? Y.learnMore,
              ariaLabel: Pt(i.props.learnMoreAriaLabel ?? Y.learnMoreAriaLabel, b.label),
            }
          : void 0,
      M = f ? [f.id, ...f.neighbors].join(" ") : "";
    return (
      M !== P && ((P = M), i.queueTask(K)),
      z("div", {
        "data-component-name": "graph",
        class: vt(
          "relative h-full w-full overflow-hidden bg-graph-background outline-none",
          i.props.className,
        ),
        style: D ? { visibility: "hidden" } : void 0,
        tabIndex: -1,
        role: "group",
        "aria-label": a,
        mix: [
          O,
          G("keydown", (x) => {
            x.key !== "Escape" || !i.props.focus || (i.props.onShowAll && ft());
          }),
        ],
        children: [
          z(
            "canvas",
            { class: "absolute inset-0 block h-full w-full touch-none", "aria-hidden": "true", mix: ht },
            `${e.canvasKey}:${h}`,
          ),
          C.map(({ sectionId: x, egg: q }) =>
            z(
              Yt,
              {
                sectionId: x,
                label: q.label,
                onReady: ut,
                onOpen: q.open,
                onStandIn: (gt) => t?.setStoodIn(gt),
              },
              x,
            ),
          ),
          z(Dt, {
            labels: l,
            onReady: dt,
            onResize: mt,
            onMeasure: at,
            onMeasureTitle: ct,
            explore: g,
            current: f?.id,
            onSelect: pt,
            detailLink: !g && b?.role === "update" ? k : void 0,
            onNavigate: i.props.onNavigate,
            onSectionLink: B,
            sectionNavigation: E,
            onHover: E ? void 0 : F,
            onFocus: E ? void 0 : F,
            holdFocus: w,
            pointer: E || (w && (!c?.matches || (!!f && !g))),
          }),
          g && k
            ? z("a", {
                href: k.href,
                "aria-label": k.ariaLabel,
                class:
                  "group absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-graph-hover outline-none",
                style: {
                  left: `${(i.props.home?.left ?? 0) + (i.props.home?.width ?? 0) / 2}px`,
                  top: `${(i.props.home?.top ?? 0) + (i.props.home?.height ?? 0) / 2}px`,
                  width: `${ot * 2}px`,
                  height: `${ot * 2}px`,
                },
                mix: [
                  G("focus", () => F(k.id)),
                  G("blur", () => F(void 0)),
                  G("click", (x) => {
                    x.button !== 0 ||
                      x.metaKey ||
                      x.ctrlKey ||
                      x.shiftKey ||
                      x.altKey ||
                      !i.props.onNavigate ||
                      (x.preventDefault(), i.props.onNavigate(k.id));
                  }),
                ],
                children: z("svg", {
                  viewBox: "0 0 12 12",
                  width: "12",
                  height: "12",
                  "aria-hidden": "true",
                  class:
                    "opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none",
                  children: z("path", {
                    d: "M6 1.5v8.5M2.5 6.5 6 10l3.5-3.5",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "1.25",
                  }),
                }),
              })
            : null,
        ],
      })
    );
  };
}
function ee(i, t) {
  return (
    i === t ||
    (i !== void 0 &&
      t !== void 0 &&
      i.left === t.left &&
      i.top === t.top &&
      i.width === t.width &&
      i.height === t.height)
  );
}
export { Ye as default, ee as sameBounds };
