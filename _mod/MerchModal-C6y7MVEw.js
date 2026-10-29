import { o as Re, n as Mt } from "./frameLoop-CeLX9Qef.js";
import { p as ke } from "./pageCover-D_pd6g0y.js";
import { h as Oe } from "./residentSections-BEssGc_p.js";
import { m as Me } from "./rootMirror-C_uDdAx6.js";
import { r as Lt, s as te } from "./easing-BhDfN7yX.js";
import { a as Le, s as Te, b as $e, c as Ie } from "./MerchScene-pXeKqqrb.js";
import { c as ee } from "./clamp-co6UzHBn.js";
import { M as _e, a as Q, b as He } from "./merchModal-vjkRzpE6.js";
import { c as Be } from "./client-entries-B1h-jQ5r.js";
import { r as W } from "./ref-mixin-D6m2Cu20.js";
import { o as J } from "./on-mixin-Ci1jclOX.js";
import { a as qe } from "./component-BWKvSpCv.js";
import { j as L } from "./jsx-CLqwgotn.js";
import "./typed-event-target-DhbNxY-V.js";
import "./clsx-B-dksMZM.js";
import "./Image-D_dPd3ZK.js";
import "./index-CRnHN5xY.js";
import "./MerchArtwork-D4a1F9Ph.js";
import "./preload-helper-CZudbPKK.js";
import "./disabledByUrl-iUMtXRf9.js";
import "./sectionJump-VOWWJQmH.js";
import "./surface-Be90gCgo.js";
import "./mixin-CMuDUxNx.js";
const ze = 1.1;
function De({ zoom: n, open: r }, s) {
  const h = window.innerWidth,
    w = window.innerHeight,
    l = s.left + s.width / 2,
    B = s.top + s.height / 2,
    M = Math.max(1.01, Math.max(h / s.width, w / s.height) * ze),
    C = n.map((v) => {
      const R = v.getBoundingClientRect();
      return `${l - R.left}px ${B - R.top}px`;
    });
  let A = 0,
    E = 0;
  const q = () => {
    const v = M ** A,
      R = (v - 1) / (M - 1);
    return { scale: v, x: (h / 2 - l) * R, y: (w / 2 - B) * R };
  };
  return {
    get node() {
      const { scale: v, x: R, y: x } = q();
      return new DOMRect(l + R + (s.left - l) * v, B + x + (s.top - B) * v, s.width * v, s.height * v);
    },
    get progress() {
      return A;
    },
    get scale() {
      return q().scale;
    },
    get opened() {
      return E;
    },
    set(v) {
      A = ee(v, 0, 1);
      const { scale: R, x, y: H } = q();
      n.forEach((P, Z) => {
        (P.style.transformOrigin = C[Z]),
          (P.style.willChange = "transform"),
          (P.style.transform = `translate(${x}px, ${H}px) scale(${R})`);
      });
    },
    open(v) {
      (E = ee(v, 0, 1)), r?.(E);
    },
    reset() {
      (A = 0), (E = 0);
      for (const v of n)
        v.style.removeProperty("transform"),
          v.style.removeProperty("transform-origin"),
          v.style.removeProperty("will-change");
      r?.(void 0);
    },
  };
}
const Ve = "cubic-bezier(0.25, 0.1, 0.25, 1)",
  oe = "cubic-bezier(0.22, 1, 0.36, 1)",
  Ne = "cubic-bezier(0.7, 0, 0.2, 1)",
  Fe = "cubic-bezier(0.4, 0, 0.2, 1)",
  yt = "cubic-bezier(0.5, 0, 0.12, 1)",
  re = "cubic-bezier(0.83, 0, 0.17, 1)",
  Ht = 1,
  zt = (n) =>
    Object.fromEntries(
      Object.entries(n).map(([r, { duration: s, delay: h, easing: w }]) => [
        r,
        { duration: s * Ht, delay: h === void 0 ? void 0 : h * Ht, easing: w },
      ]),
    ),
  V = zt({
    open: { duration: 820, easing: re },
    zoom: { duration: 1300, easing: Ne },
    zoomBack: { duration: 1100, easing: Fe },
    close: { delay: 440, duration: 720, easing: re },
  }),
  N = zt({
    card: { duration: 840, easing: yt },
    sock: { duration: 840, easing: yt },
    orbits: { delay: 40, duration: 880, easing: yt },
    back: { duration: 690, easing: yt },
  }),
  m = zt({
    fade: { duration: 220, easing: "ease-out" },
    swap: { duration: 120, easing: "linear" },
    still: { duration: 220, easing: "ease-out" },
    orbits: { duration: 900, easing: oe },
    orbitStagger: { duration: 90 },
    annotations: { delay: 100, duration: 500, easing: oe },
    lead: { duration: 380, easing: "cubic-bezier(0.65, 0, 0.35, 1)" },
    leadDot: { duration: 120, easing: "ease-out" },
    connector: { duration: 160, easing: "ease-out" },
    copy: { delay: 60, duration: 560, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
    copyStagger: { duration: 45 },
    copyOut: { duration: 160, easing: "ease-out" },
    fadeOut: { duration: 300, easing: "ease-out" },
    status: { duration: 200, easing: "ease-out" },
    graphicsOut: { duration: 420, easing: "cubic-bezier(0.4, 0, 1, 1)" },
  }),
  Ue = 0.9,
  We = 0.45,
  ie = [0.08, 0.4],
  Ke = 260 * Ht,
  ae = [0.04, 0.2],
  Ge = 0.7,
  Ye = 14,
  ne = "scale(0.78) rotate(-8deg)",
  gt = () => matchMedia("(prefers-reduced-motion: reduce)").matches,
  F = (n, r) => ({ ...n, delay: Math.max(0, (n.delay ?? 0) - (performance.now() - r)) });
function je(n = Ve) {
  const [r, s, h, w] = (n.match(/-?[\d.]+/g) ?? []).map(Number),
    l = (B, M, C) => 3 * (1 - C) ** 2 * C * B + 3 * (1 - C) * C * C * M + C ** 3;
  return (B) => {
    let M = 0,
      C = 1;
    for (let A = 0; A < 20; A++) {
      const E = (M + C) / 2;
      l(r, h, E) < B ? (M = E) : (C = E);
    }
    return l(s, w, (M + C) / 2);
  };
}
function K(n, r, s) {
  if (r.aborted) return Promise.resolve();
  if (gt()) return s(1), Promise.resolve();
  const h = je(n.easing);
  let w;
  return new Promise((l) => {
    const M = Re((A) => {
        if (r.aborted) return C();
        if (((w ??= A + (n.delay ?? 0)), A >= w)) {
          const E = Math.min(1, (A - w) / n.duration);
          if ((s(h(E)), E === 1)) return C();
        }
      }),
      C = () => {
        M(), l();
      };
  });
}
const Qe = "cubic-bezier(0.22, 1, 0.36, 1)",
  Je = 1500,
  Xe = "[data-takeover-aside]",
  se = "[data-f26-page-section]",
  ce = "data-takeover",
  mt = "data-takeover-launcher",
  Ze = 160,
  to = 40,
  eo = 250,
  oo = 16,
  Tt = { yaw: -0.3, pitch: 0.18, time: 0, velocity: 0 },
  ro = 200,
  le = "[data-merch-artwork], [data-merch-annotations]",
  Bt = "[data-merch-artwork] > svg, [data-merch-annotations]",
  $t = "[data-merch-artwork] > canvas, " + Bt,
  de = "[data-merch-details], [data-merch-connector], [data-merch-connector-end]",
  pe = "[data-merch-reveal]",
  ht = "[data-merch-viewport]";
function io(n) {
  return n.width >= innerWidth / 2;
}
function at(n) {
  const r = Math.max(1, Math.min(n.height, n.width));
  return new DOMRect(n.left + (n.width - r) / 2, n.top + (n.height - r) / 2, r, r);
}
function ao(n) {
  for (let r = n; r; r = r.parentElement)
    if (getComputedStyle(r).backgroundColor !== "rgba(0, 0, 0, 0)") return r;
}
function It(n, r) {
  const s = `color-mix(in display-p3, ${n.backgroundColor}, ${r.backgroundColor} var(--merch-colour-blend))`;
  return [
    { ...n, backgroundColor: s, "--merch-colour-blend": "0%" },
    { ...r, backgroundColor: s, "--merch-colour-blend": "100%" },
  ];
}
function no(n) {
  const r = Math.max(n.width, n.height);
  return new DOMRect(n.left + (n.width - r) / 2, n.top + (n.height - r) / 2, r, r);
}
function X(n, r) {
  return `inset(${n.top - r.top}px ${r.right - n.right}px ${r.bottom - n.bottom}px ${n.left - r.left}px)`;
}
function _t(n, r) {
  const s = Math.max(n.left, r.left),
    h = Math.max(n.top, r.top),
    w = Math.min(n.right, r.right),
    l = Math.min(n.bottom, r.bottom);
  return new DOMRect(s, h, Math.max(0, w - s), Math.max(0, l - h));
}
function qt(n, r, s) {
  return new DOMRect(
    n.left + (r.left - n.left) * s,
    n.top + (r.top - n.top) * s,
    n.width + (r.width - n.width) * s,
    n.height + (r.height - n.height) * s,
  );
}
function vt(n, r) {
  const s = Math.min(1, n.width / r.width);
  return qt(n, r, s * s);
}
function ue(n, r, s) {
  const h = s.width / r.width,
    w = s.left + (n.left - r.left) * h - n.left,
    l = s.top + (n.top - r.top) * h - n.top;
  return `translate(${w}px, ${l}px) scale(${h})`;
}
function so(n, r) {
  return ((((r - n + Math.PI) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) - Math.PI;
}
const To = Be(import.meta.url + "#MerchModal", function (r) {
  let s,
    h,
    w,
    l,
    B,
    M,
    C,
    A,
    E,
    q = !1,
    v,
    R,
    x,
    H,
    P = "closed",
    Z = !1,
    G = !1,
    Dt = 0,
    z,
    nt,
    bt,
    st,
    ct = "",
    Y = [],
    tt = [],
    wt = () => {},
    Vt = !1;
  const Et = (t) => {
    Vt !== t && ((Vt = t), ke.set(t));
  };
  let S;
  const Nt = new Map(),
    g = async (t, e, o, i, a = !1, c) => {
      if (i.aborted) return;
      const { duration: d, delay: u = 0, easing: f = Qe } = o,
        y = gt(),
        p = t.animate(e, { duration: y ? 0 : d, delay: y ? 0 : u, easing: f, fill: "both" });
      c && c.startTime !== null && (p.startTime = c.startTime);
      const b = () => {
        a && t.checkVisibility() && p.commitStyles(), p.cancel();
      };
      i.addEventListener("abort", b, { once: !0 }),
        await p.finished.catch(() => {}),
        i.removeEventListener("abort", b),
        p.cancel();
    },
    lt = (t) =>
      new Promise((e) => {
        const o = () => (--t <= 0 ? e() : Mt(o));
        Mt(o);
      });
  let Ft = "";
  const Pt = (t, e) => {
      const o = t.offsetWidth;
      return {
        x: e.left + e.width / 2 - o / 2,
        y: e.top + e.height / 2 - o / 2,
        scale: Math.min(e.width, e.height) / o,
      };
    },
    dt = (t, e) => {
      const { x: o, y: i, scale: a } = Pt(t, e);
      return `translate(${o}px, ${i}px) scale(${a})`;
    },
    Ut = (t, e) => {
      (Ft = t.style.transform), t.setAttribute("popover", "manual"), (t.style.transform = e), t.showPopover();
    },
    pt = (t) => {
      if (t.hasAttribute("popover")) {
        t.matches(":popover-open") && t.hidePopover(), t.removeAttribute("popover");
        for (const e of ["width", "height", "opacity"]) t.style.removeProperty(e);
        t.style.transform = Ft;
        for (const e of t.querySelectorAll("[data-merch-annotations]")) e.style.removeProperty("opacity");
      }
    },
    fe = (t, e, o, i) => {
      const a = t.getBoundingClientRect(),
        c = `${Math.min(e.width, e.height)}px`;
      (t.style.width = c), (t.style.height = c);
      const d = Pt(t, a),
        u = Pt(t, e);
      t.style.transform = `translate(${u.x}px, ${u.y}px) scale(${u.scale})`;
      const y = [
          {
            transform: `translate(${(d.x - u.x) / u.scale}px, ${(d.y - u.y) / u.scale}px) scale(${d.scale / u.scale})`,
          },
          { transform: "none" },
        ],
        p = F(N.sock, o);
      return Promise.all([
        ...[...t.querySelectorAll("[data-merch-artwork] > canvas")].map((b) => g(b, y, p, i)),
        ...[...t.querySelectorAll("[data-merch-artwork] > svg")].map((b) => g(b, y, F(N.orbits, o), i)),
        ...[...t.querySelectorAll("[data-merch-annotations]")].map((b) => g(b, y, p, i)),
      ]);
    },
    ye = (t, e, o, i, a) => {
      const c = dt(t, o);
      return (t.style.transform = c), g(t, [{ transform: e }, { transform: c }], i, a);
    },
    me = (t, e, o, i) => (
      (C.style.opacity = "1"),
      Promise.all([
        g(
          C,
          [{ opacity: 0 }, { opacity: 1 }],
          { ...m.leadDot, delay: (o.delay ?? 0) + o.duration - m.leadDot.duration },
          i,
        ),
        K(o, i, (a) => {
          const c = e.getBoundingClientRect(),
            d = e.hasAttribute("cx") && getComputedStyle(e).opacity !== "0";
          if (((B.style.opacity = d ? "1" : "0"), !d)) return;
          const u = new DOMPoint(c.x + c.width / 2, c.y + c.height / 2);
          M.setAttribute("d", Ie(t(), u)), (M.style.strokeDashoffset = String(a - 1));
          const f = M.getPointAtLength(M.getTotalLength() * (1 - a));
          C.setAttribute("cx", String(f.x)), C.setAttribute("cy", String(f.y));
        }),
      ])
    ),
    St = () => {
      (B.style.opacity = "0"), M.removeAttribute("d"), (C.style.opacity = "0");
    },
    At = (t, e) => {
      Z || e.aborted || ((Z = !0), (A.style.opacity = "1"), g(A, [{ opacity: 0 }, { opacity: 1 }], t, e));
    },
    Wt = () => {
      const t = [...l.querySelectorAll("[data-merch-details]")],
        e = [...l.querySelectorAll("[data-merch-connector]")];
      for (const o of [...t, ...e]) o.style.opacity = "0";
      return { details: t, connectors: e };
    },
    Kt = (t, e, { details: o }) => {
      const i = [...l.querySelectorAll(pe)].map((a, c) =>
        g(
          a,
          [
            { opacity: 0, transform: `translateY(${Ye}px)` },
            { opacity: 1, transform: "none" },
          ],
          F({ ...m.copy, delay: (m.copy.delay ?? 0) + c * m.copyStagger.duration }, e),
          t,
          !0,
        ),
      );
      for (const a of o) a.style.removeProperty("opacity");
      return At(F(m.copy, e), t), Promise.all(i);
    },
    Ct = async (t, e, o, i = Kt(t, performance.now(), o)) => {
      const a = l.querySelector("[data-merch-connector-end]");
      await (e && a ? me(() => e.getProductAnchor(), a, m.lead, t) : Promise.resolve()),
        !t.aborted &&
          (await Promise.all([
            g(B, [{ opacity: 1 }, { opacity: 0 }], m.connector, t),
            ...o.connectors.map(
              (d) => (
                d.style.removeProperty("opacity"), g(d, [{ opacity: 0 }, { opacity: 1 }], m.connector, t)
              ),
            ),
          ]),
          !t.aborted && (St(), await i));
    },
    Gt = (t) =>
      Promise.all(
        [...l.querySelectorAll(de)].map((e) => {
          const o = getComputedStyle(e).opacity;
          return (e.style.opacity = "0"), g(e, [{ opacity: o }, { opacity: 0 }], m.copyOut, t);
        }),
      ),
    he = (t, e) =>
      Promise.all(
        t.map(
          (o, i) => (
            o.style.removeProperty("opacity"),
            (o.style.transformOrigin = "50% 50%"),
            o.hasAttribute("data-merch-annotations")
              ? g(o, [{ opacity: 0 }, { opacity: 1 }], m.annotations, e, !0)
              : g(
                  o,
                  [
                    { opacity: 0, transform: ne },
                    { opacity: 1, transform: "none" },
                  ],
                  { ...m.orbits, delay: i * m.orbitStagger.duration },
                  e,
                  !0,
                )
          ),
        ),
      ),
    ve = (t) =>
      Promise.all(
        [...l.querySelectorAll(Bt)].map((e) => {
          const { opacity: o, transform: i } = getComputedStyle(e);
          return (
            (e.style.opacity = "0"),
            (e.style.transformOrigin = "50% 50%"),
            g(
              e,
              e.hasAttribute("data-merch-annotations")
                ? [{ opacity: o }, { opacity: 0 }]
                : [
                    { opacity: o, transform: i },
                    { opacity: 0, transform: ne },
                  ],
              m.graphicsOut,
              t,
            )
          );
        }),
      ),
    xt = (t, e, o) => {
      const i = 2 * e;
      (w.style.width = `${t.width + i * 2}px`),
        (w.style.height = `${t.height + i * 2}px`),
        (w.style.transform = `translate(${t.left - i}px, ${t.top - i}px)`),
        (w.style.opacity = String(o));
    },
    Yt = (t) => 1 - te(Lt(t, ie[0], ie[1])),
    ge = (t, e) => {
      w.style.removeProperty("transition"),
        (w.style.borderColor = t?.lit ?? "transparent"),
        xt(e, 1, 1),
        t &&
          Mt(() => {
            (w.style.transition = `border-color ${Ke}ms ease-out`), (w.style.borderColor = t.rest);
          });
    },
    Rt = (t) => {
      let e = Nt.get(t);
      return e || ((e = new Image()), (e.alt = ""), (e.src = t), Nt.set(t, e)), e;
    },
    et = (t) => {
      S && (S.style.transform = `translate(${t.left}px, ${t.top}px) scale(${t.width / S.offsetWidth})`);
    },
    jt = (t, e) => {
      (S = document.createElement("div")),
        (S.dataset.merchPoster = ""),
        (S.popover = "manual"),
        (S.className = "pointer-events-none size-640 origin-top-left");
      const o = Rt(t.thumbnailUrl);
      o.style.opacity = "1";
      const i = [o];
      if (t.url !== t.thumbnailUrl) {
        const a = Rt(t.url);
        (a.style.opacity = "0"), i.push(a);
        const c = S;
        a.decode()
          .then(() => {
            S === c && ((a.style.opacity = "1"), (o.style.opacity = "0"));
          })
          .catch(() => {});
      }
      for (const a of i)
        (a.className = "absolute inset-0 size-full object-contain"),
          (a.style.transition = `opacity ${ro}ms`),
          S.append(a);
      document.body.append(S), S.showPopover(), et(e);
    },
    ut = () => {
      S?.remove(), (S = void 0);
    },
    be = (t, e, o) => {
      const i = S.getBoundingClientRect();
      return K(e, o, (a) => et(qt(i, t(), a)));
    },
    we = (t) => {
      Y = t;
      for (const o of t) (o.style.willChange = "translate"), o.matches(se) && o.toggleAttribute(ce, !0);
      const e = t.map(Oe);
      wt = () => {
        for (const o of e) o();
      };
    },
    Qt = (t, e, o) =>
      Promise.all(
        Y.map((i) => {
          const a = i.style.translate || "0px 0px";
          return (
            (i.style.translate = `${t}px 0px`),
            g(i, [{ translate: a }, { translate: `${t}px 0px` }], e, o, !0)
          );
        }),
      ),
    Jt = (t, e) => ({ clipPath: X(t, e), backgroundColor: bt ?? ct }),
    j = (t, e) => {
      const o = (d) => getComputedStyle(d).backgroundColor,
        i = [document.body, ...document.querySelectorAll(".fall-navigation"), ...(st ? [st] : [])],
        a = i.map(o);
      for (const d of tt) d.cancel();
      const c = gt();
      tt = i.map((d, u) =>
        d.animate(It({ backgroundColor: a[u] }, { backgroundColor: t ?? o(d) }), {
          duration: c ? 0 : e.duration,
          delay: c ? 0 : e.delay,
          easing: e.easing,
          fill: "forwards",
        }),
      );
    },
    kt = () => {
      Dt++, (v = void 0);
    },
    Ee = () => {
      r.signal.aborted ||
        P !== "closed" ||
        G ||
        ((G = !0),
        fetch(Te)
          .then((t) => t.arrayBuffer())
          .catch(() => {}),
        kt(),
        r.update());
    },
    Xt = () => {
      if (s.open) return;
      R?.abort(), x?.(), (x = void 0), H?.(), (H = void 0), St();
      for (const e of l.querySelectorAll(`${le}, ${$t}, ${de}, ${pe}, ${ht}`))
        for (const o of ["visibility", "opacity", "transform", "transform-origin"]) e.style.removeProperty(o);
      l.style.removeProperty("opacity"),
        E?.live && (pt(E.live.stage), E.live.scene.setHeld(!1)),
        ut(),
        E?.poster?.setHidden(!1),
        z?.reset(),
        (z = void 0);
      for (const e of Y)
        e.style.removeProperty("translate"), e.style.removeProperty("will-change"), e.removeAttribute(ce);
      (Y = []), Et(!1), wt(), (wt = () => {});
      for (const e of tt) e.cancel();
      (tt = []),
        (w.style.opacity = "0"),
        w.style.removeProperty("transition"),
        h.style.removeProperty("clip-path"),
        h.style.removeProperty("background-color"),
        h.style.removeProperty("--merch-colour-blend"),
        (bt = void 0),
        (st = void 0);
      const t = E;
      if (
        (t?.launcher.removeAttribute(mt),
        (E = void 0),
        l.querySelector('[data-merch-status="available"]') || (G = !1),
        (P = "closed"),
        r.signal.aborted || r.update(),
        q)
      ) {
        if (((q = !1), r.signal.aborted)) return;
        r.props.returnHref &&
          (history.replaceState(history.state, "", r.props.returnHref),
          (r.frames.top.src = new URL(r.props.returnHref, location.href).href)),
          r.props.returnFocusId &&
            document.getElementById(r.props.returnFocusId)?.focus({ preventScroll: !0 });
      }
      t?.launcher.isConnected &&
        (t.restoreFocus === !1
          ? t.launcher.contains(document.activeElement) && document.activeElement.blur()
          : t.launcher.focus({ preventScroll: !0 }));
    },
    Pe = async (t, e, o, i, a, c) => {
      const d = [...l.querySelectorAll(Bt)],
        u = Wt();
      for (const b of d) b.style.opacity = "0";
      e?.setPose({ ...Tt, idle: 1 / 0 }), e?.setHeld(!1);
      const f = l.querySelector(ht),
        y = f?.getBoundingClientRect(),
        p = y && at(y);
      if (f && y && p) {
        if (
          ((f.style.transformOrigin = "0 0"),
          (l.style.opacity = "1"),
          g(f, [{ opacity: 0 }, { opacity: 1 }], m.still, c),
          K(F(V.zoom, o), c, () => {
            f.style.transform = ue(y, p, vt(t.node, p));
          }),
          await lt(2),
          c.aborted)
        )
          return;
        S &&
          g(S, [{ opacity: getComputedStyle(S).opacity }, { opacity: 0 }], m.still, c).then(() => {
            c.aborted || ut();
          });
      }
      await i,
        !c.aborted &&
          ((l.style.opacity = "1"),
          a.then(() => {
            c.aborted || (f?.style.removeProperty("transform"), ut());
          }),
          await Promise.all([he(d, c), Ct(c, e, u)]));
    },
    Se = async (t, e, o, i, a) => {
      const c = [...l.querySelectorAll(le)],
        d = Wt();
      for (const p of c) p.style.visibility = "hidden";
      l.style.opacity = "1";
      const u = Kt(a, i + N.card.duration * Ge, d),
        f = l.querySelector(ht),
        y = async (p) => {
          if (a.aborted) return;
          if (p && e) {
            e.scene.setHeld(!0), p.setHeld(!0);
            const T = e.scene.getPose();
            if ((p.setPose(T), await p.redraw(), a.aborted)) return;
            const $ = [...l.querySelectorAll($t)],
              k = [...e.stage.querySelectorAll($t)].flatMap((O, U) => {
                const I = O.getAnimations().find((D) =>
                  D.effect.getKeyframes().some((it) => it.transform !== void 0),
                );
                if (!I || !$[U]) return [];
                const ot = I.effect,
                  rt = ot.getTiming();
                return [
                  g(
                    $[U],
                    ot.getKeyframes(),
                    { duration: Number(rt.duration), delay: rt.delay, easing: rt.easing },
                    a,
                    !0,
                    I,
                  ),
                ];
              });
            f?.style.removeProperty("visibility");
            for (const O of c) O.style.removeProperty("visibility");
            pt(e.stage),
              p.setHeld(!1),
              p.setPose(T),
              await Promise.all([o, ...k]),
              a.aborted || (await Ct(a, p, d, u));
            return;
          }
          if (
            (await o,
            a.aborted || (p && (p.setHeld(!1), e && p.setPose(e.scene.getPose())), await lt(2), a.aborted))
          )
            return;
          f?.style.removeProperty("visibility");
          for (const T of c) T.style.removeProperty("visibility");
          const b = Ct(a, p, d, u);
          await Promise.all([
            e && g(e.stage, [{ opacity: 1 }, { opacity: 0 }], m.swap, a),
            ...c.map((T) => g(T, [{ opacity: 0 }, { opacity: 1 }], e ? m.swap : m.still, a)),
          ]),
            !a.aborted && (e && (pt(e.stage), e.scene.setHeld(!0)), await b);
        };
      if (t || v || !e) return y(t ?? v?.scene);
      f && (f.style.visibility = "hidden"),
        new Promise((p) => {
          x = p;
        }).then((p) => y(p?.scene)),
        await u;
    },
    Zt = async (t) => {
      if (
        P !== "closed" ||
        ((P = "opening"),
        t?.poster &&
          (await Rt(t.poster.thumbnailUrl)
            .decode()
            .catch(() => {})),
        r.signal.aborted || P !== "opening")
      )
        return;
      const e = performance.now();
      R = new AbortController();
      const { signal: o } = R,
        i = new Promise((_) => {
          x = _;
        }),
        a = new Promise((_) => {
          H = _;
        });
      (E = t), (q = !t), t?.launcher.setAttribute(mt, "");
      const c = t && !t.poster ? ao(t.launcher) : void 0;
      (bt = c && getComputedStyle(c).backgroundColor),
        (st = c === document.body ? void 0 : c),
        (ct = getComputedStyle(h).backgroundColor),
        G || ((G = !0), kt()),
        v && (v.scene?.setHeld(!0), x?.(v), (x = void 0));
      const { live: d, poster: u } = t ?? {},
        f = d?.stage.getBoundingClientRect(),
        y = u?.getBounds(),
        p = y ? u?.camera?.() : void 0;
      z = y && p?.zoom.length ? De(p, y) : void 0;
      const b = y ?? t?.launcher.getBoundingClientRect();
      (l.style.opacity = "0"),
        (A.style.opacity = "0"),
        (Z = !1),
        t && !t.restoreFocus && t.launcher.contains(document.activeElement) && document.activeElement.blur();
      const T = t?.poster ? void 0 : t?.launcher.closest(se);
      T && b && !gt() && !io(b) && we([T, ...document.querySelectorAll(Xe)]),
        s.showModal(),
        (s.scrollTop = 0);
      const $ = h.getBoundingClientRect();
      let k;
      if (z && u)
        (h.style.clipPath = X(_t(z.node, $), $)), ge(u.outline, z.node), jt(u, z.node), u.setHidden(!0);
      else if (b) {
        const _ = F(N.card, e);
        k = Promise.all([
          g(h, It(Jt(b, $), { clipPath: X($, $), backgroundColor: ct }), _, o, !0),
          Qt($.left - b.left, _, o),
        ]);
      } else k = g(s, [{ opacity: 0 }, { opacity: 1 }], m.fade, o);
      if (
        (j(ct, F(z ? V.zoom : b ? N.card : m.fade, e)),
        A.focus({ preventScroll: !0, focusVisible: t?.restoreFocus ?? !0 }),
        q && At(m.status, o),
        await r.update(),
        o.aborted)
      )
        return;
      const O = l.querySelector("[data-merch-artwork]");
      O
        ? (H?.(at(O.getBoundingClientRect())), (H = void 0))
        : l.querySelector("[data-merch-empty]") && (x?.(), H?.()),
        d && Ut(d.stage, dt(d.stage, f));
      const U = h.getBoundingClientRect(),
        I = z;
      let ot = () => {};
      const rt = new Promise((_) => {
        ot = _;
      });
      let D;
      if (
        (I &&
          (K(F(V.open, e), o, (_) => I.open(_)),
          (k = K(F(V.zoom, e), o, (_) => {
            I.set(_),
              (h.style.clipPath = X(_t(I.node, U), U)),
              xt(I.node, I.scale, Yt(_)),
              et(D ? vt(I.node, D) : I.node),
              _ >= Ue && ot();
          }))),
        (P = "loading"),
        r.update(),
        (D = await a),
        o.aborted)
      )
        return;
      D && I && S && ((S.style.width = S.style.height = `${D.width}px`), et(vt(I.node, D))),
        (P = "opening"),
        r.update();
      const it = Promise.all([k, D && d ? fe(d.stage, D, e, o) : void 0]);
      it.then(() => {
        o.aborted || v || ((P = "loading"), r.update());
      });
      const Ot = await Promise.race([i, new Promise((_) => setTimeout(_, Je))]);
      (x = void 0),
        !o.aborted &&
          (q
            ? (Ot?.scene?.setHeld(!1),
              (l.style.opacity = "1"),
              await g(l, [{ opacity: 0 }, { opacity: 1 }], m.fade, o))
            : I
              ? await Pe(I, Ot?.scene, e, rt, it, o)
              : await Se(Ot?.scene, d, it, e, o),
          !o.aborted && (Et(!0), (P = "ready"), r.update()));
    },
    Ae = async (t, e, o, i) => {
      const a = t.progress,
        c = t.opened;
      K(V.close, i, (f) => t.open(c * (1 - f)));
      let d = t.node;
      const u = (f) => {
        t.set(a * (1 - f));
        const y = e.getBounds();
        (d = y ? qt(t.node, y, 1 - te(Lt(t.progress, 0, We))) : t.node),
          (h.style.clipPath = X(_t(d, o), o)),
          xt(d, t.scale, Yt(t.progress));
      };
      if (S) {
        const f = getComputedStyle(l).opacity;
        (l.style.opacity = "0"),
          j(void 0, V.zoomBack),
          await Promise.all([
            g(l, [{ opacity: f }, { opacity: 0 }], m.copyOut, i),
            be(() => d, V.zoomBack, i),
            K(V.zoomBack, i, u),
          ]);
      } else {
        if ((await Gt(i), i.aborted || (await ve(i), i.aborted))) return;
        const f = v?.scene,
          y = f?.getPose();
        f?.setHeld(!0);
        const p = y ? so(y.yaw, Tt.yaw) : 0,
          b = l.querySelector(ht),
          T = b?.getBoundingClientRect(),
          $ = T && at(T);
        b && (b.style.transformOrigin = "0 0"),
          j(void 0, V.zoomBack),
          await K(V.zoomBack, i, (k) => {
            if (
              (u(k),
              f && y && f.setPose({ ...y, yaw: y.yaw + p * k, pitch: y.pitch + (Tt.pitch - y.pitch) * k }),
              !b || !T || !$)
            )
              return;
            b.style.transform = ue(T, $, vt(d, $));
            const O = 1 - Lt(t.progress, ae[0], ae[1]);
            O > 0 && !S && jt(e, d),
              S && (et(d), (S.style.opacity = String(O))),
              (b.style.opacity = String(1 - O));
          });
      }
      i.aborted || (e.setHidden(!1), await lt(1), !i.aborted && ((w.style.opacity = "0"), ut(), s.close()));
    },
    Ce = async (t, e, o, i, a) => {
      const c = E.launcher;
      if (!c.checkVisibility()) {
        for (const O of Y) O.style.removeProperty("translate");
        const k = [...document.querySelectorAll(`[data-merch-widget="${CSS.escape(r.props.id ?? Q)}"]`)].find(
          (O) => O.checkVisibility(),
        );
        k &&
          (c.removeAttribute(mt),
          k.setAttribute(mt, ""),
          (E = { ...E, launcher: k }),
          k.scrollIntoView({ block: "center", behavior: "instant" })),
          j(void 0, m.fadeOut),
          await g(s, [{ opacity: 1 }, { opacity: 0 }], m.fadeOut, a),
          a.aborted || s.close();
        return;
      }
      const d = parseFloat(Y[0]?.style.translate ?? "") || 0,
        u = c.getBoundingClientRect(),
        f = new DOMRect(u.left - d, u.top, u.width, u.height);
      let y = o;
      if ((await Gt(a), a.aborted)) return;
      const p = getComputedStyle(l).opacity;
      if (t && !e) {
        const k = l.querySelector("[data-merch-artwork] > canvas"),
          O = at(k ? k.getBoundingClientRect() : f);
        (t.style.width = `${O.width}px`),
          (t.style.height = `${O.height}px`),
          (y = dt(t, O)),
          E.live.scene.setHeld(!1);
        const U = v?.scene?.getPose();
        if ((U && E.live.scene.setPose(U), (t.style.opacity = "0"), Ut(t, y), await lt(2), a.aborted)) return;
        (t.style.opacity = "1"),
          (l.style.opacity = "0"),
          await Promise.all([
            g(t, [{ opacity: 0 }, { opacity: 1 }], m.swap, a),
            g(l, [{ opacity: p }, { opacity: 0 }], m.swap, a),
          ]);
      } else (l.style.opacity = "0"), await g(l, [{ opacity: p }, { opacity: 0 }], m.copyOut, a);
      if (a.aborted) return;
      const { clipPath: b, backgroundColor: T } = getComputedStyle(h),
        $ = Jt(f, i);
      Object.assign(h.style, $),
        j(void 0, N.back),
        await Promise.all([
          t && ye(t, y, no(f), N.back, a),
          g(h, It({ clipPath: b === "none" ? X(i, i) : b, backgroundColor: T }, $), N.back, a),
          Qt(0, N.back, a),
        ]),
        !a.aborted && (t && pt(t), s.close());
    },
    ft = async () => {
      if (P === "closed" || P === "closing") return;
      if (!s.open) {
        P = "closed";
        return;
      }
      const t = h.getBoundingClientRect(),
        e = E?.live?.stage,
        o = !!e?.hasAttribute("popover"),
        i = e && o ? dt(e, e.querySelector("canvas").getBoundingClientRect()) : "",
        a = getComputedStyle(A).opacity;
      R?.abort(),
        St(),
        e && o && (e.style.transform = i),
        x?.(),
        (x = void 0),
        H?.(),
        (H = void 0),
        (R = new AbortController());
      const { signal: c } = R;
      (P = "closing"), Et(!1);
      for (const d of tt) d.pause();
      (A.style.opacity = "0"),
        g(A, [{ opacity: a }, { opacity: 0 }], m.copyOut, c),
        A.focus({ preventScroll: !0 }),
        r.update(),
        q
          ? (j(void 0, m.fade),
            await g(s, [{ opacity: getComputedStyle(s).opacity }, { opacity: 0 }], m.fade, c),
            c.aborted || s.close())
          : z && E?.poster
            ? await Ae(z, E.poster, t, c)
            : await Ce(e, o, i, t, c);
    };
  r.queueTask(() => {
    document.addEventListener(
      _e,
      (i) => {
        const a = i.detail;
        (a.dialogId ?? Q) !== (r.props.id ?? Q) || P !== "closed" || Zt(a);
      },
      { signal: r.signal },
    ),
      document.addEventListener(
        He,
        (i) => {
          const { dialogId: a } = i.detail;
          (a ?? Q) === (r.props.id ?? Q) && Ee();
        },
        { signal: r.signal },
      );
    const t = () => z !== void 0 && P === "ready" && s.scrollTop + s.clientHeight >= s.scrollHeight - 2;
    let e = -1 / 0,
      o;
    s.addEventListener(
      "wheel",
      (i) => {
        if ((i.timeStamp - e > eo && (o = t() ? 0 : void 0), (e = i.timeStamp), o === void 0)) return;
        const a =
          i.deltaMode === WheelEvent.DOM_DELTA_LINE
            ? oo
            : i.deltaMode === WheelEvent.DOM_DELTA_PAGE
              ? s.clientHeight
              : 1;
        (o = Math.max(0, o + i.deltaY * a)), !(o < Ze || !t()) && ((o = void 0), ft());
      },
      { passive: !0, signal: r.signal },
    ),
      s.addEventListener(
        "touchstart",
        (i) => {
          nt = t() ? i.touches[0]?.clientY : void 0;
        },
        { passive: !0, signal: r.signal },
      ),
      s.addEventListener(
        "touchmove",
        (i) => {
          const a = i.touches[0]?.clientY;
          nt === void 0 || a === void 0 || nt - a <= to || ((nt = void 0), t() && ft());
        },
        { passive: !0, signal: r.signal },
      ),
      s.addEventListener(
        Le,
        (i) => {
          (v = i.detail), x && (v.scene?.setHeld(!0), x(v), (x = void 0));
        },
        { signal: r.signal },
      ),
      r.signal.addEventListener(
        "abort",
        () => {
          s.close(), Xt();
        },
        { once: !0 },
      );
  }),
    r.queueTask(() => {
      const t = () => {
        const e = !r.props.returnHref || location.pathname === new URL(r.props.src, location.href).pathname;
        r.props.initialOpen && e ? Zt() : q && ((q = !1), s.close());
      };
      t(),
        window.addEventListener("popstate", t, { signal: r.signal }),
        r.frames.top.addEventListener("reloadComplete", t, { signal: r.signal });
    });
  const xe = W((t, e) => {
    l = t;
    const o = new MutationObserver(() => {
      if (!G) return;
      const i = t.querySelector("[data-merch-artwork]");
      i && H && (H(at(i.getBoundingClientRect())), (H = void 0)),
        t.querySelector("[data-merch-empty]") && (x?.(), (x = void 0), H?.(), (H = void 0));
    });
    o.observe(t, { childList: !0, subtree: !0 }),
      e.addEventListener("abort", () => o.disconnect(), { once: !0 });
  });
  return () =>
    L("dialog", {
      id: r.props.id ?? Q,
      "aria-label": r.props.title,
      "aria-modal": "true",
      "data-component-name": "merch-modal",
      "data-phase": P,
      "data-f26-section-color": "blue",
      class:
        "merch-modal fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-x-hidden overflow-y-auto overscroll-contain border-0 bg-transparent p-0 text-white scheme-dark",
      mix: [
        W((t, e) => {
          (s = t), Me(t, "data-f26-merch", { open: "open", "data-phase": "phase" }, e);
        }),
        J("keydown", (t) => {
          if ((t.stopPropagation(), t.key !== "Tab")) return;
          const e = [...s.querySelectorAll("button, a[href], input, select, textarea, [tabindex]")].find(
            (o) =>
              o.tabIndex >= 0 &&
              !o.matches(":disabled") &&
              !o.closest("[inert]") &&
              o.getClientRects().length > 0,
          );
          !t.shiftKey && document.activeElement === A && e
            ? (t.preventDefault(), e.focus({ preventScroll: !0 }))
            : t.shiftKey &&
              document.activeElement === e &&
              (t.preventDefault(), A.focus({ preventScroll: !0 }));
        }),
        J("cancel", (t) => {
          t.preventDefault(), ft();
        }),
        J("close", Xt),
      ],
      children: [
        L("div", {
          class: "relative flex min-h-full flex-col pt-64",
          children: [
            L("div", {
              "aria-hidden": "true",
              class: "pointer-events-none absolute inset-0 bg-brand",
              mix: W((t) => {
                h = t;
              }),
            }),
            L("div", {
              "aria-hidden": "true",
              class: "pointer-events-none fixed top-0 left-0 box-border border opacity-0",
              mix: W((t) => {
                w = t;
              }),
            }),
            L("div", {
              class: "relative flex flex-1 flex-col",
              inert: P !== "ready",
              "aria-busy": P === "opening" || P === "loading",
              mix: xe,
              children: G ? L(qe, { name: $e, src: r.props.src, fallback: null }, Dt) : null,
            }),
            P === "loading"
              ? L("div", {
                  class:
                    "merch-modal-status absolute right-24 bottom-24 left-24 flex items-center justify-between gap-16 font-mono text-mono",
                  mix: J("animationstart", () => {
                    R && At(m.status, R.signal);
                  }),
                  children: [
                    L("p", { role: "status", children: r.props.loadingLabel }),
                    L("button", {
                      type: "button",
                      class: "min-h-44 cursor-pointer px-16 underline underline-offset-4",
                      mix: J("click", () => {
                        kt(), r.update();
                      }),
                      children: r.props.retryLabel,
                    }),
                  ],
                })
              : null,
          ],
        }),
        L("svg", {
          "aria-hidden": "true",
          class: "pointer-events-none fixed inset-0 z-40 size-full overflow-visible text-white",
          mix: W((t) => {
            B = t;
          }),
          children: [
            L("path", {
              fill: "none",
              "stroke-width": "1",
              pathLength: 1,
              "stroke-dasharray": "1 1",
              class: "stroke-white/55",
              mix: W((t) => {
                M = t;
              }),
            }),
            L("circle", {
              r: "2.5",
              opacity: "0",
              class: "fill-current",
              mix: W((t) => {
                C = t;
              }),
            }),
          ],
        }),
        L("button", {
          type: "button",
          "aria-disabled": P === "closing",
          class:
            "group fixed top-24 right-24 z-50 flex min-h-44 cursor-pointer items-center gap-12 rounded-full border border-transparent px-16 font-mono text-mono focus-visible:outline-2 focus-visible:outline-offset-4 global-lg:top-36 global-lg:right-36",
          mix: [
            W((t) => {
              A = t;
            }),
            J("click", () => {
              ft();
            }),
          ],
          children: [
            L("span", {
              "aria-hidden": "true",
              class:
                "pointer-events-none absolute -inset-1 rounded-full border border-white/30 bg-brand group-hover:bg-white/10",
            }),
            L("span", { class: "relative", children: r.props.closeLabel ?? "Close" }),
            L("svg", {
              "aria-hidden": "true",
              width: "12",
              height: "12",
              viewBox: "0 0 12 12",
              fill: "none",
              class: "relative",
              children: L("path", {
                d: "m2 2 8 8M10 2l-8 8",
                stroke: "currentColor",
                "stroke-width": "1.25",
              }),
            }),
          ],
        }),
      ],
    });
});
export { To as MerchModal };
