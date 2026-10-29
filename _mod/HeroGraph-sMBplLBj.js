const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/ExponentialGraph-BWucKcE7.js",
      "assets/index-CRnHN5xY.js",
      "assets/breadcrumbs-D6XkVKYD.js",
      "assets/reportError-C6Wenmm6.js",
      "assets/preload-helper-CZudbPKK.js",
      "assets/build-section-frame-DWD4QmNv.js",
      "assets/frame-uyhWmNSJ.js",
      "assets/highlight-BjwrNyM6.js",
      "assets/pack-D8z7b37W.js",
      "assets/easing-BhDfN7yX.js",
      "assets/clamp-co6UzHBn.js",
      "assets/style-i6E2ipwK.js",
      "assets/colorPalette-VQpnhwit.js",
      "assets/wire-BRlyKbjJ.js",
      "assets/journey-B8CyvxC_.js",
      "assets/screens-Ba-bo_-7.js",
      "assets/controller-K4XUImFK.js",
      "assets/htmlInCanvasSupport-jvDIQ00h.js",
      "assets/renderer-BovJ3rtt.js",
      "assets/color-CltOj4AS.js",
      "assets/edges-q2U63MtZ.js",
      "assets/nodes-CE-hkA1S.js",
      "assets/label-geometry-bLZ-6wUC.js",
      "assets/viewport-BNcWwBnZ.js",
      "assets/surface-Be90gCgo.js",
      "assets/pointer-BIwh0LIE.js",
      "assets/disabledByUrl-iUMtXRf9.js",
      "assets/edges-Bnyb0sYf.js",
      "assets/shader-7sCtY4bJ.js",
      "assets/fontFamily-DUpol7iY.js",
      "assets/nodes-DcsteTs-.js",
      "assets/ref-mixin-D6m2Cu20.js",
      "assets/mixin-CMuDUxNx.js",
      "assets/jsx-CLqwgotn.js",
      "assets/typed-event-target-DhbNxY-V.js",
      "assets/component-BWKvSpCv.js",
      "assets/on-mixin-Ci1jclOX.js",
      "assets/GraphLabels-Bzy3rnoo.js",
      "assets/clsx-B-dksMZM.js",
      "assets/Button---CvFgJi.js",
      "assets/externalLink-DAUa5sJm.js",
      "assets/constants-Dvx39Bnh.js",
      "assets/pageCover-D_pd6g0y.js",
      "assets/frameLoop-CeLX9Qef.js",
      "assets/cardWire-CPLlDeJq.js",
      "assets/sectionHub-D4Y0MOvJ.js",
      "assets/exploreGraph-c2U0pF4f.js",
      "assets/getProductAreaMatches-BMTzck5J.js",
      "assets/getExponentialGraphPayload-HXkqQaSB.js",
      "assets/buildGraphIndex-C3BQu6G8.js",
      "assets/graphThumbnailUrl-BS_hfECj.js",
    ]),
) => i.map((i) => d[i]);
import { _ as ot } from "./preload-helper-CZudbPKK.js";
import { c as ue } from "./clsx-B-dksMZM.js";
import { c as xt } from "./colorPalette-VQpnhwit.js";
import { s as Qt } from "./screens-Ba-bo_-7.js";
import { g as Tt } from "./graphThumbnailUrl-BS_hfECj.js";
import { G as Ft, o as pe } from "./graphEggs-BvMWnesv.js";
import { p as fe, o as me } from "./merchModal-vjkRzpE6.js";
import { I as Zt, G as ge, c as ye, D as we } from "./controller-K4XUImFK.js";
import { r as Bt } from "./reportError-C6Wenmm6.js";
import { m as ve } from "./rootMirror-C_uDdAx6.js";
import { s as be, h as Ee } from "./sectionDot-BkMs301a.js";
import { g as Se } from "./heroTap-in5modXK.js";
import { d as Nt } from "./color-CltOj4AS.js";
import { s as lt, r as K, l as N, a as Me } from "./easing-BhDfN7yX.js";
import { g as _e, r as At, f as te, F as W } from "./build-section-frame-DWD4QmNv.js";
import { p as zt, G as St } from "./style-i6E2ipwK.js";
import { c as ee } from "./clamp-co6UzHBn.js";
import { a as xe, D as Te } from "./constants-Dvx39Bnh.js";
import { H as Ae, m as Le, a as Ie, s as Re, p as Ce, f as Pe, w as Oe } from "./heroMediaFlight-CVHz6-Mq.js";
import { n as k, o as ke } from "./frameLoop-CeLX9Qef.js";
import { p as Ut } from "./pageCover-D_pd6g0y.js";
import { h as He } from "./frame-uyhWmNSJ.js";
import { C as Ge } from "./renderer-BovJ3rtt.js";
import { S as De } from "./journey-B8CyvxC_.js";
import { c as Fe } from "./client-entries-B1h-jQ5r.js";
import { r as at } from "./ref-mixin-D6m2Cu20.js";
import { j as O } from "./jsx-CLqwgotn.js";
import "./htmlInCanvasSupport-jvDIQ00h.js";
import "./highlight-BjwrNyM6.js";
import "./pack-D8z7b37W.js";
import "./label-geometry-bLZ-6wUC.js";
import "./breadcrumbs-D6XkVKYD.js";
import "./wire-BRlyKbjJ.js";
import "./typed-event-target-DhbNxY-V.js";
import "./edges-q2U63MtZ.js";
import "./nodes-CE-hkA1S.js";
import "./mixin-CMuDUxNx.js";
const M = {
    at: 1.4,
    travel: 1.2,
    widgetStagger: 0.08,
    widgetStretch: 0.65,
    wordmarkAt: 1.75,
    wordmarkTravel: 1.05,
  },
  Be = "cubic-bezier(0.83, 0, 0.17, 1)",
  Mt = 20,
  Ne = 60,
  Y = (i) => (i / Zt) * 1e3;
function ze(i) {
  const t = ee(i, 0, 1);
  return t < 0.5 ? 16 * t ** 5 : 1 - (-2 * t + 2) ** 5 / 2;
}
function oe(i) {
  return Array.from({ length: Mt + 1 }, (t, e) => ({ ...i(e / Mt), offset: e / Mt }));
}
function Ue(i) {
  return oe((t) => ({
    transform: `translateX(${(-1.11 * i * (1 - t)).toFixed(2)}px)`,
    marginLeft: `${(-100 * M.widgetStretch * (1 - t) ** 1.5).toFixed(2)}%`,
    opacity: lt(K(t, 0, 0.5)),
  }));
}
function $e() {
  return oe((i) => ({
    transform: `translateX(${(-140 * (1 - i)).toFixed(2)}px)`,
    opacity: lt(K(i, 0, 0.5)),
  }));
}
const re = (i) => M.travel + Math.max(0, i - 1) * M.widgetStagger;
function qe(i, t) {
  const e = re(t),
    o = Math.ceil((e / Zt) * Ne);
  return Array.from({ length: o + 1 }, (r, n) => {
    const s = (n / o) * e;
    let a = 0;
    for (let d = 0; d < t; d++) {
      const g = 1 - ze((s - d * M.widgetStagger) / M.travel);
      a = Math.min(a, -1.11 * i.travel * g - M.widgetStretch * i.widgetWidth * g ** 1.5);
    }
    const h = ee(1 + a / i.wordmarkWidth, 0, 1);
    return { opacity: lt(K(h, 0.72, 1)) };
  });
}
const Ve = (i) => [...i.querySelectorAll(".hero-entrance-item")],
  ne = ({ left: i, width: t }) => i - (document.documentElement.clientWidth - i - t),
  We = (i, t, e) => (i * (1 - t) * (1 - e) ** 2) / 2;
function Ye({ panel: i, widgets: t, wordmark: e, tagline: o }) {
  const r = i.getBoundingClientRect(),
    n = {
      travel: ne(r),
      widgetWidth: t[0]?.offsetWidth ?? 0,
      wordmarkWidth: e?.getBoundingClientRect().width ?? 0,
    },
    s = { delay: Y(M.at), duration: Y(M.travel), easing: Be, fill: "backwards" },
    a = [i.animate({ "--hero-enter": [0, 1] }, s)],
    h = Ue(n.travel);
  for (const [d, g] of t.entries()) a.push(g.animate(h, { ...s, delay: Y(M.at + d * M.widgetStagger) }));
  return (
    e && a.push(e.animate($e(), { ...s, delay: Y(M.wordmarkAt), duration: Y(M.wordmarkTravel) })),
    o &&
      n.wordmarkWidth > 0 &&
      a.push(o.animate(qe(n, t.length), { delay: s.delay, duration: Y(re(t.length)), fill: "backwards" })),
    a
  );
}
const _t = [
    [1.2249401, -0.2249404, 0],
    [-0.0420569, 1.0420571, 0],
    [-0.0196376, -0.0786361, 1.0982735],
  ],
  Ke = [
    [0.8224621, 0.177538, 0],
    [0.0331941, 0.9668058, 0],
    [0.0170827, 0.0723974, 0.9105199],
  ],
  Xe = [
    [0.4122214708, 0.5363325363, 0.0514459929],
    [0.2119034982, 0.6806995451, 0.1073969566],
    [0.0883024619, 0.2817188376, 0.6299787005],
  ],
  je = [
    [0.2104542553, 0.793617785, -0.0040720468],
    [1.9779984951, -2.428592205, 0.4505937099],
    [0.0259040371, 0.7827717662, -0.808675766],
  ],
  Je = [
    [1, 0.3963377774, 0.2158037573],
    [1, -0.1055613458, -0.0638541728],
    [1, -0.0894841775, -1.291485548],
  ],
  Qe = [
    [4.0767416621, -3.3077115913, 0.2309699292],
    [-1.2684380046, 2.6097574011, -0.3413193965],
    [-0.0041960863, -0.7034186147, 1.707614701],
  ],
  ct = 1e-4,
  H = (i, [t, e, o]) => [
    i[0][0] * t + i[0][1] * e + i[0][2] * o,
    i[1][0] * t + i[1][1] * e + i[1][2] * o,
    i[2][0] * t + i[2][1] * e + i[2][2] * o,
  ],
  X = (i, t) => [t(i[0]), t(i[1]), t(i[2])],
  rt = (i, t, e) => [N(i[0], t[0], e), N(i[1], t[1], e), N(i[2], t[2], e)],
  ie = (i) => i - Math.floor(i),
  $t = (i, t, e) => {
    const o = Math.min(1, Math.max(0, (e - i) / (t - i)));
    return o * o * (3 - 2 * o);
  },
  ht = (i) =>
    X(i, (t) => {
      const e = Math.abs(t);
      return Math.sign(t) * (e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92);
    }),
  et = (i) =>
    X(i, (t) => {
      const e = Math.abs(t);
      return Math.sign(t) * (e > 0.0031308 ? 1.055 * e ** (1 / 2.4) - 0.055 : e * 12.92);
    }),
  z = (i) => H(je, X(H(Xe, i), Math.cbrt)),
  Lt = (i) =>
    H(
      Qe,
      X(H(Je, i), (t) => t ** 3),
    ),
  qt = (i) => X(H(Ke, i), (t) => Math.min(1, Math.max(0, t)));
function Vt([i, t, e]) {
  const o = Math.max(i, t, e),
    r = Math.min(i, t, e),
    n = (o + r) / 2,
    s = o - r,
    a = Math.min(n, 1 - n);
  if (s < ct || Math.abs(a) < ct) return [0, 0, n];
  const h = o === i ? (t - e) / s : o === t ? (e - i) / s + 2 : (i - t) / s + 4;
  return [ie(h / 6), (o - n) / a, n];
}
function Ze([i, t, e]) {
  const o = t * Math.min(e, 1 - e);
  return X([0, 8, 4], (r) => {
    const n = (r + i * 12) % 12;
    return e - o * Math.min(1, Math.max(-1, Math.min(n - 3, 9 - n)));
  });
}
function Wt(i, t, e, o, r) {
  const n = e < ct ? t : i,
    s = o < ct ? n : t,
    a = s - n - Math.round(s - n);
  return ie(n + a * r);
}
function to(i, t, e, o) {
  switch (i) {
    case "srgb":
      return ht(rt(et(t), et(e), o));
    case "srgb-linear":
      return rt(t, e, o);
    case "oklab":
      return Lt(rt(z(t), z(e), o));
    case "oklch": {
      const r = z(t),
        n = z(e),
        s = Math.hypot(r[1], r[2]),
        a = Math.hypot(n[1], n[2]),
        h =
          Wt(Math.atan2(r[2], r[1]) / (2 * Math.PI), Math.atan2(n[2], n[1]) / (2 * Math.PI), s, a, o) *
          2 *
          Math.PI,
        d = N(s, a, o);
      return Lt([N(r[0], n[0], o), d * Math.cos(h), d * Math.sin(h)]);
    }
    case "hsl": {
      const r = Vt(et(t)),
        n = Vt(et(e)),
        s = Wt(r[0], n[0], r[1], n[1], o);
      return ht(Ze([s, N(r[1], n[1], o), N(r[2], n[2], o)]));
    }
  }
}
function eo({ colour: i, width: t, height: e }, o, r) {
  const { mix: n, originX: s, originY: a, settings: h } = i;
  if (h.pageColourStyle === "fade") return n;
  if (h.pageColourStyle === "vertical") {
    const y = Math.max(h.pageColourSoftness * e, 1),
      x = n * (e + y);
    return 1 - $t(x - y, x, e - r);
  }
  const d = Math.hypot(Math.max(Math.abs(s), Math.abs(t - s)), Math.max(Math.abs(a), Math.abs(e - a))),
    g = Math.max(h.pageColourSoftness * d, 1),
    l = n * (Math.max(h.pageColourReach, 1) * d + g);
  return 1 - $t(l - g, l, Math.hypot(o - s, r - a));
}
function oo(i, t, e) {
  const { from: o, to: r, settings: n } = i.colour,
    s = Math.min(1, Math.max(0, eo(i, t, e)));
  if (s <= 0) return o;
  if (s >= 1) return r;
  const a = H(_t, ht(o)),
    h = H(_t, ht(r)),
    d = n.pageColourSpace;
  let g = to(d, a, h, s);
  if ((d === "oklch" || d === "hsl") && n.pageColourHueTravel < 1) {
    const l = rt(z(a), z(h), s),
      y = z(H(_t, qt(g)));
    g = Lt(rt(l, y, n.pageColourHueTravel));
  }
  return et(qt(g));
}
const ro = 4;
class no {
  #t;
  #i;
  #d;
  #l = 0;
  #s = 0;
  #a = 0;
  constructor(t, e) {
    (this.#i = new Ge(t)),
      (this.#t = new ge(e, { width: 1, height: 1 })),
      this.#t.configure({ introOn: !1, warmBudget: ro }),
      (this.#d = e.nodes.filter(({ role: o }) => o === "section").map(({ id: o }) => o));
  }
  get warming() {
    return this.#t.simulation.warming;
  }
  warm() {
    return this.warming ? (this.#t.step(0), this.warming) : !1;
  }
  setFrame({ sectionId: t, width: e, height: o, ratio: r, reduced: n }) {
    (e !== this.#l || o !== this.#s) && this.#t.resize(e, o),
      (e !== this.#l || o !== this.#s || r !== this.#a) &&
        (this.#i.resize(e, o, r), (this.#l = e), (this.#s = o), (this.#a = r));
    const s = { x: e / 2, y: o / 2 },
      a = { left: 0, right: e, top: 0, bottom: o, anchorX: s.x, anchorY: s.y },
      h = _e(0, o, e);
    (this.#t.reducedMotion = n),
      this.#t.setScrollFrame({
        sectionId: t,
        sample: n ? { ...h, depth: 0, turn: 0 } : h,
        target: s,
        anchors: [],
        reduced: n,
        layout: a,
        fitLayouts: this.#d.map((d) => ({ sectionId: d, layout: a })),
        firstSectionId: this.#d[0],
        previousSectionId: t,
        focusAnchor: { ...s, hold: 1 },
        gapAbove: { fromBottom: -o, toTop: o * De },
      });
  }
  draw(t) {
    if ((this.#t.step(t), this.warming)) return !1;
    this.#t.introDone || this.#t.step(0);
    const e = this.#t.build();
    return He(e, this.#t.simulation.settings.updateRadius), this.#i.draw(e), !0;
  }
  dispose() {
    this.#i.dispose();
  }
}
const io = 1e3 / 30,
  so = 8,
  ao = 50;
function co(i, t, e) {
  return i.find(({ top: o, bottom: r }) => r > t && o < t + e);
}
class ho {
  #t = [];
  #i = new Set();
  #d = new AbortController();
  #l = window.matchMedia("(prefers-reduced-motion: reduce)");
  #s;
  #a;
  #f;
  #e = document.createElement("canvas");
  #m;
  #o;
  #r;
  #c;
  #h = "";
  #u = 0;
  #g = !1;
  constructor(t) {
    (this.#e.className = "title-graph"),
      this.#e.setAttribute("aria-hidden", "true"),
      (this.#e.style.visibility = "hidden"),
      (this.#m = new no(this.#e, { nodes: t.nodes, edges: t.edges, hubIds: t.hubIds, relatedById: {} }));
    for (const o of t.nodes) {
      if (o.role !== "section") continue;
      const r = document.getElementById(`${o.handle}-title`)?.closest("header");
      r && this.#t.push({ sectionId: o.id, header: r, width: 0, height: 0, top: 0, bottom: 0 });
    }
    (this.#s = new IntersectionObserver(
      (o) => {
        for (const r of o) {
          const n = this.#t.find(({ header: a }) => a === r.target);
          if (!n) continue;
          const s = r.isIntersecting && r.intersectionRatio > 0;
          (n.top = s ? r.intersectionRect.top : 0), (n.bottom = s ? r.intersectionRect.bottom : 0);
        }
        this.#n();
      },
      { threshold: [0, Number.EPSILON] },
    )),
      (this.#a = new IntersectionObserver(
        (o) => {
          for (const r of o) {
            const n = this.#t.find(({ header: s }) => s === r.target);
            n && (r.isIntersecting ? this.#i.add(n) : this.#i.delete(n));
          }
          this.#n();
        },
        { rootMargin: "600px 0px" },
      )),
      (this.#f = new ResizeObserver((o) => {
        for (const r of o) {
          const n = this.#t.find(({ header: a }) => a === r.target);
          if (!n) continue;
          const s = r.borderBoxSize?.[0];
          (n.width = Math.round(s?.inlineSize ?? r.contentRect.width)),
            (n.height = Math.round(s?.blockSize ?? r.contentRect.height));
        }
        this.#n();
      }));
    for (const { header: o } of this.#t) this.#s.observe(o), this.#a.observe(o), this.#f.observe(o);
    const e = { signal: this.#d.signal };
    document.addEventListener("visibilitychange", this.#n, e);
    for (const o of ["resize", "pagehide", "pageshow"]) window.addEventListener(o, this.#n, e);
    this.#l.addEventListener("change", this.#n, e),
      Ut.addEventListener("change", this.#n, e),
      this.#e.addEventListener("contextrestored", this.#y, e);
  }
  #y = () => {
    this.#c?.active && (this.#o?.(), (this.#u = 0), (this.#o = k(this.#p)));
  };
  #n = (t) => {
    t?.type === "pagehide" && (this.#g = !0), t?.type === "pageshow" && (this.#g = !1);
    const e = co(this.#t, 0, 1 / 0),
      o = e ?? [...this.#i].at(-1),
      r = this.#c,
      n = o ?? (r ? void 0 : this.#t.find(({ width: d, height: g }) => d && g));
    if (n && (!n.width || !n.height)) return;
    const s = !!o && !this.#g && !document.hidden && !Ut.covered;
    if (!n && !r) return;
    const a = {
        sectionId: n?.sectionId ?? r.sectionId,
        width: n ? window.innerWidth : r.width,
        height: n?.height ?? r.height,
        ratio: Math.min(xe, Math.max(1, window.devicePixelRatio || 1)),
        reduced: this.#l.matches,
        active: s,
        animate: !!e,
      },
      h = JSON.stringify(a);
    if (h !== this.#h) {
      if (
        ((this.#h = h),
        (this.#c = a),
        this.#o?.(),
        (this.#o = void 0),
        o &&
          this.#e.parentElement !== o.header &&
          ((this.#e.style.visibility = "hidden"), o.header.prepend(this.#e)),
        this.#m.setFrame(a),
        !s)
      )
        return this.#v();
      this.#r?.(), (this.#r = void 0), (this.#u = 0), (this.#o = k(this.#p));
    }
  };
  #v = () => {
    if ((this.#r?.(), (this.#r = void 0), this.#c?.active || !this.#m.warm())) return;
    const t = setTimeout(this.#v, ao);
    this.#r = () => clearTimeout(t);
  };
  #p = (t) => {
    this.#o = void 0;
    const e = this.#c;
    if (!e?.active) return;
    const o = this.#m.draw(this.#u ? (t - this.#u) / 1e3 : 0);
    if (((this.#u = t), !o)) {
      this.#o = k(this.#p);
      return;
    }
    if (((this.#e.style.visibility = ""), e.reduced || !e.animate)) return;
    const r = Math.max(0, io - so - (performance.now() - t)),
      n = setTimeout(() => {
        this.#o = k(this.#p);
      }, r);
    this.#o = () => clearTimeout(n);
  };
  destroy() {
    this.#d.abort(),
      this.#s.disconnect(),
      this.#a.disconnect(),
      this.#f.disconnect(),
      this.#o?.(),
      this.#r?.(),
      this.#m.dispose(),
      this.#e.remove();
  }
}
function lo(i, t, e, o, r) {
  const n = i.dataset.f26SectionColor;
  if (!n || !Object.hasOwn(xt, n)) return;
  const s = xt[n],
    a = parseFloat(getComputedStyle(i).getPropertyValue("--f26-entry-lead")) || 0;
  return {
    id: t,
    start: e - (window.innerHeight * o + a) + 1,
    distance: r,
    colour: zt(s.displayP3),
    tone: zt(s.surface.displayP3),
  };
}
function uo(i, t) {
  const e = [];
  for (let o = i; o !== t && o.parentElement; o = o.parentElement)
    for (const r of o.parentElement.children) r !== o && r instanceof HTMLElement && e.push(r);
  return e;
}
const po = 0.33,
  fo = 0.95,
  dt = 1400,
  Yt = "--f26-header-fill",
  Kt = 24;
function mo(i) {
  const t = [];
  for (let e = 0; e <= Kt; e++) {
    const o = e / Kt,
      [r, n, s] = oo(i, o * i.width, Te);
    t.push(`color(display-p3 ${r.toFixed(4)} ${n.toFixed(4)} ${s.toFixed(4)}) ${(o * 100).toFixed(2)}%`);
  }
  return `linear-gradient(to right in display-p3, ${t.join()})`;
}
const It = dt / 2,
  nt = "cubic-bezier(0.333333, 0, 0.666667, 1)";
function go(i, t) {
  const e = getComputedStyle(i).getPropertyValue("--f26-section-background"),
    o = [
      ...document.querySelectorAll(
        ".hero-runway :is(.hero-chrome.bg-section-blue, .hero-chrome .bg-section-blue)",
      ),
    ],
    r = o[0] && getComputedStyle(o[0]).backgroundColor;
  if (!e || !r) return [];
  const n = [document.body, ...document.querySelectorAll(".fall-navigation")];
  return [...o, ...n].map((s) =>
    s.animate([{ backgroundColor: r }, { backgroundColor: e }], {
      duration: t,
      easing: nt,
      fill: "forwards",
    }),
  );
}
function yo(i) {
  const t = (r) => (r / W.takeover) * It,
    e = go(i, t(W.push)),
    o = [...document.querySelectorAll(".hero-runway :is(.hero-chrome, .hero-graph-layer)")].flatMap((r) => {
      const n = r.classList.contains("hero-chrome") ? { visibility: "visible" } : {};
      return [
        r.animate(
          [
            { "--hero-expand-x": 0, ...n },
            { "--hero-expand-x": 1, ...n },
          ],
          { duration: t(W.push), easing: nt },
        ),
        r.animate([{ "--hero-expand-y": 0 }, { "--hero-expand-y": 1 }], {
          delay: t(W.coverAt),
          duration: t(W.takeover - W.coverAt),
          easing: nt,
          fill: "backwards",
        }),
      ];
    });
  return [...e, ...o];
}
function wo() {
  return [...document.querySelectorAll(".desktop-navigation, .html-in-canvas-corner-dock")].map((i) =>
    i.animate([{ "--hero-menu": 0 }, { "--hero-menu": 1 }], {
      delay: It,
      duration: dt - It,
      easing: nt,
      fill: "backwards",
    }),
  );
}
const Xt = "--f26-first-lead",
  jt = "--f26-first-gather",
  Jt = "--f26-first-delay";
class vo {
  #t;
  #i;
  #d;
  #l = new Set();
  #s;
  #a = [];
  #f = new Map();
  #e = new Map();
  #m;
  #o = new Ae();
  #r;
  #c = new Map();
  #h;
  #u = 1;
  #g;
  #y;
  #n = new Map();
  #v = !1;
  #p = !1;
  #E;
  #S = [];
  #x;
  #b;
  constructor(t, e, o) {
    (this.#t = t),
      (this.#x = o),
      (this.#i = window.matchMedia(`(min-width: ${Qt["global-lg"]})`)),
      (this.#d = window.matchMedia("(prefers-reduced-motion: reduce)")),
      window.addEventListener("scroll", this.update, { passive: !0, signal: e }),
      window.addEventListener("resize", this.measure, { signal: e });
    for (const s of [this.#i, this.#d])
      s.addEventListener(
        "change",
        () => {
          this.#w(), this.measure();
        },
        { signal: e },
      );
    for (const s of ["transitionrun", "transitionend", "transitioncancel"])
      document.addEventListener(s, this.#P, { signal: e });
    const r = new ResizeObserver(this.measure);
    r.observe(document.documentElement),
      document.fonts.ready.then(() => {
        e.aborted || this.measure();
      }),
      document.addEventListener(
        "click",
        (s) => {
          const a = s.target instanceof Element ? s.target.closest('a.hero-nav-link[href^="#"]') : null;
          a &&
            s.button === 0 &&
            !(s.metaKey || s.ctrlKey || s.shiftKey || s.altKey) &&
            this.#T(a.hash.slice(1)) &&
            s.preventDefault();
        },
        { signal: e },
      );
    const n = o.watch(this.update);
    e.addEventListener(
      "abort",
      () => {
        n(), this.#w(!1), this.#g?.(), this.#y?.(), this.#n.clear(), this.#_(r);
      },
      { once: !0 },
    ),
      this.#I();
  }
  current() {
    return this.#s;
  }
  subscribe(t) {
    return this.#l.add(t), () => this.#l.delete(t);
  }
  paintHero = (t) => {
    this.#R() && this.update(), this.#p ? this.#o.release() : this.#o.follow(t, this.#e);
  };
  paintPageColour = (t) => {
    const e = t && mo(t);
    e !== this.#m &&
      ((this.#m = e),
      queueMicrotask(() => {
        for (const o of document.querySelectorAll(".fall-navigation"))
          e ? o.style.setProperty(Yt, e) : o.style.removeProperty(Yt);
      }));
  };
  goTo = (t) => {
    this.#T(t) ||
      (location.hash === `#${t}`
        ? (history.replaceState(history.state, "", location.pathname + location.search),
          location.replace(`#${t}`))
        : (location.hash = t),
      document.getElementById(t)?.focus({ preventScroll: !0 }));
  };
  #T(t) {
    const e = this.#t.nodes.find((n) => n.role === "section" && n.handle === t),
      o = document.getElementById(t),
      r = this.#a.findIndex((n) => n.id === e?.id) > 0;
    return !e ||
      !o ||
      !r ||
      window.scrollY > 1 ||
      !this.#i.matches ||
      this.#d.matches ||
      this.#p ||
      document.querySelector("[data-html-in-canvas-drawn]")
      ? !1
      : (history.pushState(history.state, "", `#${t}`),
        o.scrollIntoView({ behavior: "instant" }),
        this.#C(e.id, o),
        !0);
  }
  #C(t, e) {
    this.#w(), (e.inert = !0);
    const o = new AbortController(),
      r = {
        id: t,
        started: performance.now(),
        progress: 0,
        section: e,
        animations: [
          e.animate([{ opacity: 0 }, { opacity: 1 }], { duration: dt, easing: nt }),
          ...yo(e),
          ...wo(),
        ],
        input: o,
      },
      n = (s) => {
        (r.progress = Math.min(1, (s - r.started) / dt)), r.progress >= 1 ? this.#w() : this.update();
      };
    (this.#E = r),
      this.update(),
      (r.stop = ke(n)),
      window.addEventListener("popstate", () => this.#w(!1), { signal: o.signal }),
      k(() => {
        for (const s of ["wheel", "touchstart", "pointerdown", "keydown"])
          window.addEventListener(s, () => this.#w(), { passive: !0, signal: o.signal });
      });
  }
  #w(t = !0) {
    const e = this.#E;
    if (e) {
      (this.#E = void 0), e.stop?.(), e.input.abort();
      for (const o of e.animations) o.cancel();
      (e.section.inert = !1), t && e.section.focus({ preventScroll: !0 }), this.update();
    }
  }
  measure = () => {
    this.#g ||
      (this.#g = k(() => {
        (this.#g = void 0), this.#I();
      }));
  };
  #P = (t) => {
    if (
      !(t instanceof TransitionEvent) ||
      t.propertyName !== "translate" ||
      !(t.target instanceof HTMLElement) ||
      !t.target.closest(".desktop-navigation")
    )
      return;
    const e = t.target,
      o = e.dataset.sectionDot,
      r = this.#t.nodes.find((n) => n.role === "section" && `#${n.handle}` === o);
    r &&
      (this.#n.set(e, r.id),
      this.#A(),
      t.type !== "transitionrun" && this.#n.delete(e),
      !this.#y && this.#n.size && (this.#y = k(this.#L)));
  };
  #A() {
    if (this.#i.matches) {
      for (const [t, e] of this.#n) {
        if (!t.isConnected) {
          this.#n.delete(t);
          continue;
        }
        const o = t.getBoundingClientRect();
        this.#f.set(e, { x: o.left + o.width / 2, y: o.top + o.height / 2 });
      }
      this.update();
    }
  }
  #L = () => {
    (this.#y = void 0), this.#n.size && (this.#A(), this.#n.size && (this.#y = k(this.#L)));
  };
  #I() {
    if (!this.#i.matches) {
      if (!this.#b) {
        this.#_(), (this.#b = new ho(this.#t)), (this.#s = void 0);
        for (const l of this.#l) l();
      }
      return;
    }
    this.#b && this.#_();
    const t = this.#t.nodes.filter(({ role: l }) => l === "section"),
      e = window.scrollY,
      o = [];
    this.#M(),
      this.#o.release(),
      (this.#u = At(document.querySelector("[data-f26-page]") ?? document.documentElement)),
      (this.#r = void 0),
      (this.#c = new Map()),
      this.#f.clear(),
      this.#e.clear();
    const r = new Map(),
      n = (l) => {
        let y = r.get(l);
        return y || ((y = l.getBoundingClientRect()), r.set(l, y)), y;
      },
      s = getComputedStyle(document.documentElement),
      a = parseFloat(s.getPropertyValue("--f26-crossfade-line")) || 0.5,
      h = parseFloat(s.getPropertyValue("--f26-crossfade-distance")),
      d = h > 1 && CSS.supports("animation-timeline", "view()"),
      g = [];
    for (const l of t) {
      const y = document.getElementById(l.handle);
      if (!y) continue;
      const x = be(l.handle);
      x && this.#f.set(l.id, x);
      const T = [],
        E = [];
      let w;
      for (const _ of this.#t.nodes) {
        if (_.primarySectionId !== l.id) continue;
        const G = document.getElementById(_.handle);
        if (!G || !y.contains(G)) continue;
        const b = n(G);
        E.push(b),
          (!w || b.top < w.bounds.top || (b.top === w.bounds.top && b.left < w.bounds.left)) &&
            (w = { node: _, card: G, bounds: b });
        const tt = G.querySelector("[data-card-marker]"),
          D = tt && n(tt);
        D &&
          T.push({
            id: _.id,
            x: D.left + D.width / 2,
            y: D.top + D.height / 2 + e,
            top: b.top + e,
            left: b.left,
            width: b.width,
            height: b.height,
            domMarker: !0,
          });
      }
      const j = w?.node.shape === "image" ? Le(w.card, e, n) : void 0;
      w && j && this.#e.set(l.id, { id: w.node.id, card: j });
      const I = n(y),
        U = d && lo(y, l.id, I.top + e, a, h);
      U && g.push(U);
      const L = document.getElementById(`${l.handle}-title`),
        R = L ? n(L) : void 0;
      if (
        (o.push({
          id: l.id,
          top: I.top + e,
          gridTop: Math.min(...E.map(({ top: _ }) => _), I.bottom) + e,
          flowBottom: Math.max(...E.map(({ bottom: _ }) => _), I.bottom) + e,
          title: R && { left: R.left, top: R.top + e, height: R.height },
          anchors: T,
        }),
        !L || o.length !== 1)
      )
        continue;
      const {
        header: J,
        pin: Q,
        timing: Z,
        lead: $,
      } = Ie({ section: y, title: L, offset: e, height: window.innerHeight, runway: this.#u }, n);
      this.#c.set(l.id, Z.lands), $ && (this.#h = $), (this.#r = { around: uo(L, J), pin: Q });
    }
    if (this.#h) {
      const { page: l, px: y, gather: x, delay: T } = this.#h;
      for (const [E, w] of [
        [Xt, `${y}px`],
        [jt, `${x}px`],
        [Jt, `${T}px`],
      ])
        l.style.getPropertyValue(E) !== w && l.style.setProperty(E, w);
    }
    for (const { id: l } of o) this.#c.has(l) || this.#c.set(l, 0);
    (this.#a = o), (this.#S = g), this.update();
  }
  update = () => {
    if (!this.#i.matches) return;
    this.#R();
    const t = this.#a.length > 0;
    if (!t && this.#v) return;
    this.#v = !t;
    const e = window.scrollY,
      o = window.innerWidth,
      r = window.innerHeight,
      n = this.#d.matches,
      s = t && this.#r ? te(Math.max(0, e), r, n, o, this.#h?.gather, this.#u) : void 0;
    if (
      (s && document.documentElement.toggleAttribute("data-page-graph-intro", s.menu < 0.55),
      s && this.#r && !this.#p)
    ) {
      const d = Me(K(s.label, po, fo));
      for (const g of this.#r.around) g.style.opacity = String(d);
      this.#r.pin.style.pointerEvents = s.label < 1 ? "none" : "";
    }
    const a = t
        ? Re({
            scrollY: e,
            width: o,
            height: r,
            reduced: n,
            heroBottom: 0,
            sections: this.#a,
            targets: this.#f,
            titleLands: this.#c,
            firstLead: this.#h?.gather,
            runway: this.#u,
          })
        : void 0,
      h = this.#E;
    if (a && h && a.sectionId === h.id && !a.journey) {
      const d = lt(h.progress);
      (a.homeMix = d),
        (a.sample = { ...a.sample, focus: d, label: d }),
        a.focusAnchor && (a.focusAnchor = { ...a.focusAnchor, hold: d });
    }
    a && ((a.pageColours = Ce(e, this.#S)), (a.fluidTone = Pe(e, this.#S))),
      (this.#s = Oe(a, this.#e, e)),
      this.#s?.hero || this.#o.release();
    for (const d of this.#l) d();
  };
  #R() {
    const t = this.#x.session;
    return t === this.#p ? !1 : ((this.#p = t), t && this.#M(), !0);
  }
  #M() {
    if (!this.#r) return;
    const { around: t, pin: e } = this.#r;
    for (const o of t) o.style.removeProperty("opacity");
    e.style.removeProperty("pointer-events");
  }
  #_(t) {
    t?.disconnect(),
      this.#b?.destroy(),
      (this.#b = void 0),
      document.documentElement.removeAttribute("data-page-graph-intro"),
      this.paintPageColour(void 0),
      this.#M(),
      this.#o.release(),
      this.#h?.page.style.removeProperty(Xt),
      this.#h?.page.style.removeProperty(jt),
      this.#h?.page.style.removeProperty(Jt),
      (this.#h = void 0),
      (this.#r = void 0),
      (this.#a = []),
      (this.#S = []),
      this.#e.clear(),
      (this.#c = new Map());
  }
}
const bo = {
    sidekick: [-0.66, -0.66],
    agentic: [0, -0.74],
    online: [0.66, -0.66],
    merchandising: [-0.42, -0.24],
    retail: [0.42, -0.24],
    payments: [-0.66, 0.22],
    developer: [0, 0.37],
    operations: [0.66, 0.22],
    marketing: [-0.66, 0.66],
    fulfillment: [0, 0.74],
    shop: [0.66, 0.66],
  },
  ur = Fe(import.meta.url + "#HeroGraph", function (t) {
    let e,
      o,
      r,
      n,
      s = !0,
      a = !1,
      h,
      d = !1,
      g = () => {},
      l = !0,
      y = () => {},
      x = () => 0,
      T,
      E,
      w,
      j = () => !1,
      I,
      U;
    const L = Se(t.frames.top);
    let R,
      J,
      Q,
      Z = !1,
      $ = !1;
    function _() {
      (d = !0), (l = !1), g(), t.update();
    }
    t.queueTask(async () => {
      let u = "HeroGraph.loadGraph";
      U = ye(t.signal);
      try {
        const [c, { index: m, payload: f }] = await Promise.all([
          ot(
            () => import("./ExponentialGraph-BWucKcE7.js"),
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
              26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
            ]),
          ),
          Lo(t.props.endpoint, t.signal, t.props.thumbnails, t.props.merch),
        ]);
        if (t.signal.aborted) return;
        if (f.nodes.length === 0) throw new Error("Hero graph is empty");
        (u = "HeroGraph.initialize"),
          (Z = !!Q && getComputedStyle(Q).opacity !== "0"),
          (e = c.default),
          (o = f),
          Ee.resolve(f),
          (r = m),
          (h = new vo(f, t.signal, L)),
          y(),
          t.update();
      } catch (c) {
        if (t.signal.aborted) return;
        Bt(c, u), _();
      }
    });
    const G = at((u, c) => {
      const m = window.matchMedia(`(min-width: ${Qt["global-lg"]})`),
        f = window.matchMedia("(prefers-reduced-motion: reduce)"),
        v = CSS.supports("(animation-timeline: scroll()) and (animation-range: 0px 1px)"),
        S = document.documentElement;
      let F = At(u);
      const B = document.querySelectorAll(".hero-chrome"),
        ft = document.querySelector(".hero-sidebar");
      let Ct = "",
        mt = !1,
        q = [],
        V = Pt(),
        gt = V ? u.animate({ "--hero-enter": [0, 0] }, { duration: 1 / 0 }) : void 0;
      function it(p, A, P) {
        const st = p === void 0 ? "" : `${p} ${A} ${P}`;
        st !== Ct &&
          ((Ct = st),
          p === void 0
            ? (S.style.removeProperty("--hero-expand-x"),
              S.style.removeProperty("--hero-expand-y"),
              S.style.removeProperty("--hero-blend"))
            : (S.style.setProperty("--hero-expand-x", String(p)),
              S.style.setProperty("--hero-expand-y", String(A)),
              S.style.setProperty("--hero-blend", String(P))),
          S.toggleAttribute("data-hero-expanded", p === 1));
      }
      function Pt() {
        return getComputedStyle(u).getPropertyValue("--hero-enter").trim() === "0";
      }
      function Ot(p) {
        p.target !== u || p.animationName !== "hero-enter-hold" || gt || ((V = !1), C());
      }
      function yt() {
        gt?.cancel(), (gt = void 0);
      }
      function kt(p) {
        p !== mt && ((mt = p), C());
      }
      function C() {
        for (const p of B) p.inert = mt || (p === ft && (V || q.length > 0));
      }
      y = () => {
        const p = Pt();
        if ((yt(), (V = !1), (l = !1), t.update(), !p || !ft)) return C();
        const A = Ye({
          panel: u,
          widgets: Ve(ft),
          wordmark: document.querySelector(".hero-logo"),
          tagline: document.querySelector(".hero-tagline"),
        });
        (q = A),
          C(),
          Promise.allSettled(A.map(({ finished: P }) => P)).then(() => {
            q === A && ((q = []), C());
          });
      };
      function wt() {
        for (const p of q) p.cancel();
        yt(), l && ((l = !1), (V = !1), C(), c.aborted || t.update());
      }
      x = () => {
        const p = q[0]?.effect?.getComputedTiming().progress;
        return typeof p != "number" || !n ? 0 : We(ne(n), p, vt().expandX);
      };
      function vt() {
        return te(Math.max(0, window.scrollY), window.innerHeight, f.matches, void 0, void 0, F);
      }
      (j = () => m.matches && vt().expandX >= 1),
        (g = () => {
          yt(), (V = !1), it(), kt(!1), C();
        });
      function bt() {
        if (((a = m.matches), a && D(u), (F = At(u)), m.matches)) {
          const { left: p, top: A, width: P, height: st } = u.getBoundingClientRect();
          n = { left: p, top: A, width: P, height: st };
        } else n = void 0;
        t.update();
      }
      function Et() {
        const p = m.matches && window.scrollY > 0;
        if (((T || E) && window.scrollY > 0 && pt(), p === s && ((s = !p), t.update()), !p && w)) {
          const { id: A, at: P } = w;
          (w = void 0), performance.now() - P < Eo && ut(A);
        }
        kt(p && !d), Ht();
      }
      function Ht() {
        if (v) return;
        if (!m.matches || d) return it();
        const p = vt();
        it(p.expandX, p.expandY, p.blend);
      }
      function Gt() {
        bt(), Et();
      }
      function de() {
        bt(), Ht();
      }
      const Dt = new ResizeObserver(bt);
      Dt.observe(u),
        window.addEventListener("scroll", Et, { passive: !0, signal: c }),
        window.addEventListener("resize", de, { signal: c }),
        m.addEventListener("change", Gt, { signal: c }),
        m.addEventListener("change", wt, { signal: c }),
        f.addEventListener("change", Et, { signal: c }),
        f.addEventListener("change", wt, { signal: c }),
        u.addEventListener("animationend", Ot, { signal: c }),
        u.addEventListener("animationcancel", Ot, { signal: c });
      const le = L.placeCard({
        element: u,
        size: () => (m.matches ? [window.innerWidth, window.innerHeight] : [u.clientWidth, u.clientHeight]),
        bounds: () => document.getElementById(t.props.hero).getBoundingClientRect(),
      });
      c.addEventListener(
        "abort",
        () => {
          le(), Dt.disconnect(), it(), wt();
        },
        { once: !0 },
      ),
        C(),
        Gt();
    });
    let b, tt;
    function D(u) {
      const c = t.props.merch;
      if (b || !c) return;
      b = u;
      const m = Tt(c.posterUrl);
      To(m, t.signal).then((f) => {
        if (f) {
          if (t.signal.aborted) return URL.revokeObjectURL(f);
          t.signal.addEventListener("abort", () => URL.revokeObjectURL(f), { once: !0 }),
            (tt = { [m]: f }),
            t.update();
        }
      });
    }
    function se(u) {
      u && a && b && fe(b);
    }
    function ae() {
      const u = [
        ...(J ? [J] : []),
        ...document.querySelectorAll(".hero-chrome, .hero-paint, .f26-nav-underlay"),
      ];
      let c = [];
      return {
        zoom: R ? [R] : [],
        open(m) {
          if (m === void 0) {
            for (const f of c) for (const v of f) v.cancel();
            c = [];
            return;
          }
          c.length ||
            (c = u.map((f) => {
              const v = (S) => {
                const F = f.animate([{ [S]: 0 }, { [S]: 1 }], { duration: 1, fill: "both" });
                return F.pause(), F;
              };
              return [v("--hero-expand-x"), v("--hero-expand-y")];
            }));
          for (const [f, v] of c) (f.currentTime = K(m, ...Mo)), (v.currentTime = K(m, ..._o));
        },
      };
    }
    function ut(u, c) {
      if (u === Rt) {
        if (!t.props.merch || !c) return;
        (E = void 0), (w = void 0);
        const { launcher: f, getBounds: v, setHidden: S, fromKeyboard: F } = c;
        me({
          launcher: f,
          restoreFocus: F,
          poster: {
            url: Ao(t.props.merch.posterUrl),
            thumbnailUrl: Tt(t.props.merch.posterUrl),
            getBounds: () => {
              const B = v();
              return B ? new DOMRect(B.left, B.top, B.width, B.height) : void 0;
            },
            setHidden: S,
            outline: xo,
            camera: ae,
          },
        });
        return;
      }
      if (!r) return;
      if (!s) {
        w = { id: u, at: performance.now() };
        const f = window.matchMedia("(prefers-reduced-motion: reduce)");
        window.scrollTo({ top: 0, behavior: f.matches ? "auto" : "smooth" });
        return;
      }
      E = u;
      const m = r;
      (I ??= ot(
        async () => {
          const { createGraphExplorer: f } = await import("./exploreGraph-c2U0pF4f.js");
          return { createGraphExplorer: f };
        },
        __vite__mapDeps([46, 47]),
      ).then(({ createGraphExplorer: f }) => f(m))),
        I.then((f) => {
          if (t.signal.aborted || E !== u) return;
          E = void 0;
          const v = f(u);
          v && v.id !== T?.id && U?.explore(v.id), (T = v), t.update();
        }).catch((f) => {
          t.signal.aborted || ((I = void 0), Bt(f, "HeroGraph.explore"));
        });
    }
    function ce(u) {
      const c = o?.nodes.find((m) => m.id === u && (m.role === "update" || m.role === "section"));
      !c || !h || (pt(), h.goTo(c.handle));
    }
    function he(u) {
      !u.active ||
        $ ||
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            ($ = !0), t.signal.aborted || t.update();
          }),
        );
    }
    function pt() {
      U?.reset(), (E = void 0), (T = void 0), t.update();
    }
    return () => {
      const u = t.props.copy ?? we;
      return O("div", {
        class: ue(
          "relative min-h-0 min-w-0 bg-graph-background global-lg:bg-transparent",
          l && "hero-entrance-hold",
        ),
        mix: G,
        children: [
          d
            ? null
            : O("div", {
                "data-interactive": s && a ? "" : void 0,
                class: "hero-graph-layer absolute inset-0 global-lg:fixed global-lg:z-2",
                mix: at((c, m) => {
                  (J = c), ve(c, "data-f26-hero-graph", {}, m);
                }),
                children: O("div", {
                  class: "hero-graph-backdrop absolute inset-0",
                  children: [
                    O("div", { "aria-hidden": "true", class: "hero-graph-colour absolute inset-0" }),
                    e && o
                      ? O("div", {
                          class: "absolute inset-0",
                          mix: at((c) => {
                            R = c;
                          }),
                          children: O(e, {
                            data: o,
                            backend: "auto",
                            settings: Z ? So : void 0,
                            description: u.description,
                            className: "bg-transparent",
                            home: n,
                            homeShift: x,
                            interactive: s && a,
                            sectionNavigation: !a,
                            sectionSeats: a ? void 0 : bo,
                            scroll: h,
                            heroTap: L,
                            eggs: t.props.eggs?.map((c) => ({
                              section: Ft[c].section,
                              label: Ft[c].label,
                              open: (m) => pe(c, m),
                            })),
                            focus: T,
                            captions: u.captions,
                            sectionCounts: t.props.sectionCounts,
                            learnMoreLabel: u.learnMore,
                            learnMoreAriaLabel: u.learnMoreAriaLabel,
                            thumbnailSources: tt,
                            canSelect: () => !j(),
                            onSelect: ut,
                            onHover: se,
                            onNavigate: ce,
                            onExplore: ut,
                            onShowAll: pt,
                            onError: _,
                            onBackendChange: he,
                            onHeroMedia: h?.paintHero,
                            onPageColour: h?.paintPageColour,
                          }),
                        })
                      : null,
                  ],
                }),
              }),
          d || $ || (e && !Z)
            ? null
            : O("div", {
                "aria-hidden": "true",
                class: "hero-graph-spinner-track pointer-events-none absolute inset-0 z-2",
                children: O("div", {
                  class:
                    "hero-graph-spinner absolute inset-0 m-auto size-9 rounded-full border border-graph-ink",
                  mix: at((c) => {
                    Q = c;
                  }),
                }),
              }),
        ],
      });
    };
  }),
  Eo = 3e3,
  So = { introSeedFrom: 1 },
  Mo = [0, 0.8],
  _o = [0.35, 1],
  xo = { rest: Nt(...St.imageStroke, St.imageStrokeAlpha), lit: Nt(...St.hover, 1) };
async function To(i, t) {
  try {
    const e = await fetch(i, { signal: t });
    if (!e.ok) return;
    const o = await createImageBitmap(await e.blob()),
      r = Math.max(o.width, o.height),
      n = new OffscreenCanvas(r, r),
      s = n.getContext("2d", { colorSpace: "display-p3" });
    if (!s) {
      o.close();
      return;
    }
    (s.fillStyle = xt.blue.displayP3),
      s.fillRect(0, 0, r, r),
      s.drawImage(o, (r - o.width) / 2, (r - o.height) / 2),
      o.close();
    const a = await n.convertToBlob();
    return t.aborted ? void 0 : URL.createObjectURL(a);
  } catch {
    return;
  }
}
const Rt = "merch";
function Ao(i) {
  if (!URL.canParse(i)) return i;
  const t = new URL(i);
  return t.hostname !== "cdn.shopify.com" ? i : (t.searchParams.set("width", "1920"), t.href);
}
async function Lo(i, t, e, o) {
  const [r, { validateGraph: n }, { buildGraphIndex: s }, { getExponentialGraphPayload: a }] =
    await Promise.all([
      fetch(i, { signal: t }),
      ot(() => import("./validateGraph-BirFXLW7.js"), []),
      ot(() => import("./buildGraphIndex-C3BQu6G8.js"), []),
      ot(
        () => import("./getExponentialGraphPayload-HXkqQaSB.js"),
        __vite__mapDeps([48, 49, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 47, 50]),
      ),
    ]);
  if (!r.ok) throw new Error(`Graph returned ${r.status}`);
  const h = await r.json();
  t.throwIfAborted();
  const d = n(h),
    g = s(d),
    l = a(d, e, g);
  return {
    index: g,
    payload: o
      ? {
          ...l,
          nodes: [
            ...l.nodes,
            {
              id: Rt,
              role: "update",
              handle: "merch",
              label: o.title,
              prominence: "normal",
              shape: "image",
              thumbnailUrl: Tt(o.posterUrl),
            },
          ],
          hubIds: [...(l.hubIds ?? []), Rt],
        }
      : l,
  };
}
export { ur as HeroGraph };
