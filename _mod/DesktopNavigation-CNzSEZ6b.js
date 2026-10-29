import { c as Mt } from "./clsx-B-dksMZM.js";
import { D as it } from "./constants-Dvx39Bnh.js";
import { s as St } from "./screens-Ba-bo_-7.js";
import { S as At } from "./journey-B8CyvxC_.js";
import { DesktopNavigationLinks as Tt } from "./DesktopNavigationLinks-BV6QsI1B.js";
import { o as pt, n as Lt } from "./frameLoop-CeLX9Qef.js";
import { g as kt } from "./get-active-section-DTAm5rbu.js";
import { S as It } from "./sectionHub-D4Y0MOvJ.js";
import { T as Rt } from "./titleSignalConstants-B6yFK_44.js";
import { c as Ht } from "./client-entries-B1h-jQ5r.js";
import { r as Ct } from "./ref-mixin-D6m2Cu20.js";
import { j as Q } from "./jsx-CLqwgotn.js";
import "./clamp-co6UzHBn.js";
import "./easing-BhDfN7yX.js";
import "./htmlInCanvasTilt-BU1xBiHq.js";
import "./mixin-CMuDUxNx.js";
import "./typed-event-target-DhbNxY-V.js";
const $t = 0.35,
  st = 0.1,
  Pt = 0.3,
  gt = 0.75,
  mt = 1.25,
  U = 36,
  Y = 6,
  _t = 260,
  Z = 4,
  Dt = 0.4,
  rt = (o) => Math.min(1, Math.max(0, o)),
  at = (o) => 1 - (1 - o) ** 3,
  Ot = (o, e, n, s) => e + (o - e) * 2 ** (-n / s);
function Nt(o, e, n = 64) {
  const s = [],
    t = [0],
    a = (o.x + e.x) / 2,
    d = (o.y + e.y) / 2,
    c = Math.abs(e.y - o.y) / 2,
    h = e.y > o.y ? -Math.PI / 2 : Math.PI / 2;
  for (let r = 0; r <= n; r++) {
    const f = h - 2 * h * (r / n),
      x = { x: a + c * Math.cos(f), y: d + c * Math.sin(f) },
      g = s[s.length - 1];
    g && t.push(t[t.length - 1] + Math.hypot(x.x - g.x, x.y - g.y)), s.push(x);
  }
  return { pts: s, len: t, total: t[t.length - 1] };
}
function et(o, e) {
  const { pts: n, len: s } = o;
  if (e <= 0) return n[0];
  if (e >= o.total) return n[n.length - 1];
  let t = 1;
  for (; s[t] < e; ) t++;
  const a = (e - s[t - 1]) / (s[t] - s[t - 1] || 1);
  return { x: n[t - 1].x + (n[t].x - n[t - 1].x) * a, y: n[t - 1].y + (n[t].y - n[t - 1].y) * a };
}
function Wt(o, e) {
  const { pts: n, len: s } = o;
  for (let t = 1; t < n.length; t++) if ((e - n[t - 1].y) * (e - n[t].y) <= 0) return s[t];
  return 0;
}
function yt(o, e, n, s) {
  if (s <= n) return;
  const t = et(e, n),
    a = et(e, s);
  o.beginPath(), o.moveTo(t.x, t.y);
  for (let d = 1; d < e.pts.length; d++)
    if (!(e.len[d] <= n)) {
      if (e.len[d] >= s) break;
      o.lineTo(e.pts[d].x, e.pts[d].y);
    }
  o.lineTo(a.x, a.y), o.stroke();
}
function Bt(o, e, n, s) {
  const t = U / Y;
  o.lineWidth = mt;
  for (let a = 0; a < Y; a++) {
    const d = n - a * t;
    d <= 0 ||
      d - t >= e.total ||
      ((o.globalAlpha = s * (1 - a / Y)), yt(o, e, Math.max(0, d - t), Math.min(e.total, d)));
  }
  o.lineWidth = gt;
}
function qt(o, e) {
  const n = o.querySelector("nav"),
    s = o.querySelector("canvas"),
    t = s?.getContext("2d");
  if (!n || !s || !t) return { setActive: () => {} };
  const a = window.matchMedia("(prefers-reduced-motion: reduce)");
  let d = [],
    c = [],
    h = -1,
    r = -1,
    f = -1,
    x = { x: 0, y: 0 },
    g = 1,
    R = !1,
    B = "#fff",
    $;
  const P = () => {
      d = [...n.querySelectorAll("a[href]")].flatMap((i) => {
        const l = i.querySelector("[data-section-dot]");
        return i instanceof HTMLAnchorElement && l instanceof HTMLElement ? [{ link: i, dot: l }] : [];
      });
    },
    j = () => {
      const i = o.getBoundingClientRect(),
        l = n.getBoundingClientRect(),
        v = Math.ceil(l.right - i.left + Z + l.height / 2 + mt),
        E = Math.ceil(i.height);
      (g = Math.min(2, window.devicePixelRatio || 1)),
        (s.style.width = `${v}px`),
        (s.style.height = `${E}px`),
        (s.width = Math.round(v * g)),
        (s.height = Math.round(E * g));
      const w = s.getBoundingClientRect();
      (x = { x: w.left, y: w.top }), (B = getComputedStyle(n).color), (R = !0);
    },
    u = (i) => {
      const l = i.dot.getBoundingClientRect();
      return { x: l.left + l.width / 2 - x.x, y: l.top + l.height / 2 - x.y };
    },
    b = (i, l, v) => {
      const E = d[i.to];
      if (!E || l < 0) return !1;
      const w = i.presence,
        C = u(E);
      if (l === i.to) {
        if (v) return !1;
        const A = at(rt((i.age % 1.6) / 0.9)),
          y = Math.round(6 + A * 16);
        return (
          (t.globalAlpha = w * (1 - A) * 0.9),
          t.strokeRect(Math.round(C.x - y / 2) + 0.5, Math.round(C.y - y / 2) + 0.5, y - 1, y - 1),
          !0
        );
      }
      const m = u(d[l]),
        k = Nt({ x: m.x + Z, y: m.y }, { x: C.x + Z, y: C.y }),
        M = v ? 1 : at(rt(i.age / 0.4)),
        S = k.total * (i.live ? M : 1);
      let p = M < 1;
      (t.globalAlpha = $t * w), yt(t, k, i.live ? 0 : k.total * (1 - w), S);
      const N = [];
      if (!v && i.live) {
        const A = k.total + U + 60;
        for (let y = 0; y < 2; y++) {
          const I = (i.age * _t + (y * A) / 2) % A;
          I > S + U || (N.push(I), Bt(t, k, Math.min(I, S + U), w));
        }
        p = !0;
      }
      const L = Math.min(l, i.to),
        W = Math.max(l, i.to);
      for (let A = L + 1; A < W; A++) {
        const y = u(d[A]),
          I = Wt(k, y.y);
        if (I > S) continue;
        let F = 0;
        for (const V of N) {
          const z = V - I;
          z >= 0 && z < U * 2 && (F = Math.max(F, 1 - z / (U * 2)));
        }
        const q = Math.round(y.y) + 0.5;
        (t.globalAlpha = w * (st + (Pt - st) * F)),
          t.beginPath(),
          t.moveTo(y.x + 5, q),
          t.lineTo(et(k, I).x, q),
          t.stroke();
      }
      return p;
    },
    _ = (i, l) => {
      const v = Math.min(0.05, l / 1e3),
        E = a.matches;
      for (const m of c) {
        (m.age += v), (m.left = m.live ? 0 : m.left + v);
        const k = m.live || m.left < Dt,
          M = k ? 1 : 0;
        m.presence = E ? M : Ot(m.presence, M, v, k ? 0.06 : 0.14);
      }
      (c = c.filter((m) => m.live || m.presence > 0.004)),
        t.setTransform(1, 0, 0, 1, 0, 0),
        t.clearRect(0, 0, s.width, s.height),
        t.setTransform(g, 0, 0, g, 0, 0),
        (t.strokeStyle = B),
        (t.lineWidth = gt);
      let w = !1;
      for (const m of c) w = b(m, h, E) || w;
      t.globalAlpha = 1;
      const C = c.some((m) => !m.live || m.presence < 0.996);
      !w && !C && G();
    };
  function O() {
    R || j(), !$ && !e.aborted && ($ = pt(_, { signal: e }));
  }
  function G() {
    $?.(), ($ = void 0);
  }
  const H = () => {
      const i = r >= 0 ? r : f,
        l = c.find((E) => E.live);
      if (l?.to === i) return;
      if ((l && (l.live = !1), d[i]?.link.checkVisibility({ visibilityProperty: !0, opacityProperty: !0 }))) {
        const E = c.find((w) => w.to === i);
        E ? (E.live = !0) : c.push({ to: i, live: !0, presence: 0, age: 0, left: 0 });
      }
      O();
    },
    D = (i) => {
      P();
      const l = i instanceof Element ? i.closest("a[href]") : null;
      return d.findIndex((v) => v.link === l);
    },
    T = { signal: e };
  return (
    n.addEventListener(
      "pointerover",
      (i) => {
        const l = D(i.target);
        l < 0 || ((r = l), H());
      },
      T,
    ),
    n.addEventListener(
      "pointerleave",
      () => {
        (r = -1), H();
      },
      T,
    ),
    n.addEventListener(
      "focusin",
      (i) => {
        const l = i.target instanceof Element && i.target.matches(":focus-visible") ? D(i.target) : -1;
        l !== f && ((f = l), H());
      },
      T,
    ),
    n.addEventListener(
      "focusout",
      (i) => {
        n.contains(i.relatedTarget) || ((f = -1), H());
      },
      T,
    ),
    window.addEventListener(
      "resize",
      () => {
        R && (j(), O());
      },
      T,
    ),
    {
      setActive: (i) => {
        i !== h && ((h = i), i < 0 && ((r = -1), (f = -1)), c.length && (H(), O()));
      },
    }
  );
}
function Ft(o, e, n) {
  if (n.aborted || !o.length) return;
  const s = [];
  let t = [],
    a;
  const d = () => {
      a = void 0;
      const r = kt(
        t,
        e.map((f) => f.at()),
      );
      for (const [f, x] of e.entries()) r[f] !== s[f] && ((s[f] = r[f]), x.onChange(r[f]));
    },
    c = () => {
      a ||= Lt(d, { signal: n });
    },
    h = () => {
      (t = o.flatMap((r) => {
        const f = document.getElementById(r.handle);
        return f ? [f] : [];
      })),
        c();
    };
  h(),
    window.addEventListener("scroll", c, { passive: !0, signal: n }),
    window.addEventListener("resize", h, { signal: n });
}
const K = "data-title-signal",
  X = "data-title-signalled",
  ct = "data-html-in-canvas-drawn",
  xt = 0.56,
  vt = 0.7,
  wt = 0.5,
  zt = "#fff",
  Ut = 0.25,
  lt = 0.7,
  bt = 0.5,
  jt = 0.75,
  Gt = `radial-gradient(closest-side, ${zt} 100%, #0000 100%)`,
  Vt = Math.max(vt, wt, bt + 0.3),
  Kt = 3,
  Xt = 8,
  J = (o) => Math.min(1, Math.max(0, o)),
  dt = (o) => 1 - (1 - o) ** 3,
  tt = (o) => document.getElementById(`${o}-title`),
  ft = (o) => o.querySelector(":scope > [data-title-signal-nodes]"),
  ut = (o) => o.querySelector(":scope > [data-title-signal-fill]"),
  Jt = (o) => {
    const e = document.querySelector(`[data-section-dot="#${CSS.escape(o)}"]`)?.getBoundingClientRect();
    return e && { x: e.left + e.width / 2, y: e.top + e.height / 2 };
  },
  ht = (o) => {
    const e = { section: o };
    document.dispatchEvent(new CustomEvent(It, { detail: e }));
    const n = e.point;
    return n && n.x >= 0 && n.x <= window.innerWidth && n.y >= 0 && n.y <= window.innerHeight ? n : void 0;
  };
function Qt(o, e) {
  const n = o.getBoundingClientRect(),
    s = jt * parseFloat(getComputedStyle(o).fontSize),
    t = document.createRange(),
    a = [],
    d = document.createTreeWalker(o, NodeFilter.SHOW_TEXT);
  for (let r = d.nextNode(); r; r = d.nextNode()) {
    const f = r.textContent ?? "";
    for (let x = 0; x < f.length; x++) {
      if (!f[x].trim()) continue;
      t.setStart(r, x), t.setEnd(r, x + 1);
      const g = t.getBoundingClientRect();
      if (!g.width) continue;
      const R = g.left + g.width / 2,
        B = g.height / 4;
      for (const $ of Rt) {
        const P = g.top + g.height * $;
        a.push({
          x: R - n.left,
          y: P - n.top,
          d: Math.hypot(R - e.x, P - e.y),
          reach: Math.max(s, Math.SQRT2 * Math.max(g.width / 2, P - g.top + B, g.bottom + B - P) + 1),
        });
      }
    }
  }
  const c = Math.min(...a.map((r) => r.d)),
    h = Math.max(...a.map((r) => r.d));
  return a.map(({ d: r, ...f }) => ({ ...f, lands: xt * (0.35 + (0.65 * (r - c)) / (h - c || 1)) }));
}
function Yt(o, e) {
  const n = window.matchMedia("(prefers-reduced-motion: reduce), (forced-colors: active)"),
    s = () => o.flatMap(({ handle: u }) => tt(u) ?? []);
  let t,
    a = () => {},
    d,
    c,
    h,
    r = !1;
  const f = (u) => {
      u === d && a(), !(!ft(u) || !ut(u)) && (u.removeAttribute(X), u.toggleAttribute(K, !0));
    },
    x = () => {
      if (!h) {
        h = new IntersectionObserver((u) => {
          for (const { target: b, isIntersecting: _, boundingClientRect: O } of u)
            !_ && O.top >= window.innerHeight && (f(b), c && b === tt(c) && P(c));
        });
        for (const u of s()) h.observe(u);
      }
    },
    g = () => {
      h?.disconnect(), (h = void 0), a();
      for (const u of s()) u.removeAttribute(K), u.removeAttribute(X);
    },
    R = () => (r && !n.matches && !document.querySelector(`[${ct}]`) ? x() : g()),
    B = () => {
      (r = !0), R();
    },
    $ = () => {
      (r = !1), R();
    },
    P = (u) => {
      if (((c = u), a(), h))
        for (const M of s()) M.hasAttribute(X) && M.getBoundingClientRect().top >= window.innerHeight && f(M);
      const b = u ? tt(u) : null,
        _ = b && ft(b),
        O = b && ut(b);
      if (!u || !_ || !O || !b?.hasAttribute(K)) return;
      const G = _.querySelectorAll(".title-signal-wire"),
        H = _.querySelectorAll(".title-signal-node"),
        { style: D } = O;
      let T,
        i = { x: 0, y: 0 },
        l = !1,
        v,
        E = 0,
        w = 0,
        C;
      (d = b),
        (a = () => {
          t?.(),
            (t = void 0),
            (a = () => {}),
            (d = void 0),
            b.removeAttribute(K),
            b.toggleAttribute(X, !0),
            (D.maskImage = D.maskPosition = D.maskSize = ""),
            (_.style.display = "");
        });
      const m = (M) => {
          _.style.display = "block";
          for (const [S, p] of M.entries())
            (H[S].style.translate = `${p.x}px ${p.y}px`), (H[S].style.opacity = G[S].style.opacity = "0");
          D.maskImage = M.map(() => Gt).join();
        },
        k = (M, S) => {
          const { x: p, y: N } = i,
            L = [],
            W = [];
          for (const [A, y] of M.entries()) {
            const I = w - y.lands,
              F = Math.floor((A + 1) * lt) > Math.floor(A * lt);
            if (F) {
              const V = Ut * (1 - J(I / wt)),
                z = G[A];
              if (((z.style.opacity = String(V)), V > 0)) {
                const nt = S.left + y.x - p,
                  ot = S.top + y.y - N,
                  Et = Math.hypot(nt, ot) * dt(J(w / y.lands));
                z.style.transform = `translate(${p}px, ${N}px) rotate(${Math.atan2(ot, nt)}rad) scaleX(${Et})`;
              }
            }
            if (I <= 0) {
              L.push("0 0"), W.push("0 0");
              continue;
            }
            F && (H[A].style.opacity = String(1 - J((I - bt) / 0.3)));
            const q = y.reach * dt(J(I / vt));
            L.push(`${(y.x - q).toFixed(1)}px ${(y.y - q).toFixed(1)}px`),
              W.push(`${(q * 2).toFixed(1)}px ${(q * 2).toFixed(1)}px`);
          }
          (D.maskPosition = L.join()), (D.maskSize = W.join());
        };
      t = pt(
        (M, S) => {
          const p = b.getBoundingClientRect(),
            N = C === void 0 || Math.abs(p.top - C) > Xt * S;
          if (((C = p.top), T)) {
            if (N || p.bottom < 0 || p.top > window.innerHeight) {
              a();
              return;
            } else if (l) {
              const L = ht(u);
              L ? ((i = L), (v = { x: L.x - p.left, y: L.y - p.top })) : (l = !1);
            }
          } else {
            if (p.bottom <= 0) {
              a();
              return;
            }
            if (N || p.top < 0 || p.bottom > window.innerHeight) return;
            const L = ht(u);
            l = !!L;
            const W = L ?? Jt(u);
            if (!W) {
              (E += S / 1e3) > Kt && a();
              return;
            }
            if (
              ((i = W),
              l && (v = { x: i.x - p.left, y: i.y - p.top }),
              (T = Qt(b, i)),
              !T.length || G.length < T.length || H.length < T.length)
            ) {
              a();
              return;
            }
            m(T);
          }
          !l && v && (i = { x: p.left + v.x, y: p.top + v.y }), (w += S / 1e3), k(T, p), w > xt + Vt && a();
        },
        { signal: e, late: !0 },
      );
    };
  n.addEventListener("change", R, { signal: e });
  const j = new MutationObserver(R);
  return (
    j.observe(document.documentElement, { subtree: !0, attributeFilter: [ct] }),
    e.addEventListener(
      "abort",
      () => {
        j.disconnect(), $();
      },
      { once: !0 },
    ),
    { arm: B, disarm: $, play: P }
  );
}
const Zt = 0.9,
  ye = Ht(import.meta.url + "#DesktopNavigation", function (e) {
    let n, s;
    const t = () => e.props.sections.findIndex((c) => c.handle === n),
      a = (c) => {
        (n = c), s?.setActive(t()), e.update();
      };
    e.queueTask(() => {
      if (e.signal.aborted) return;
      const c = window.matchMedia(`(min-width: ${St["global-lg"]})`),
        h = Yt(e.props.sections, e.signal);
      let r;
      const f = () => {
        if (c.matches !== !!r) {
          if (r) {
            r.abort(), (r = void 0), h.disarm(), a(void 0);
            return;
          }
          (r = new AbortController()),
            h.arm(),
            Ft(
              e.props.sections,
              [
                { at: () => Math.max(it, window.innerHeight * At), onChange: a },
                { at: () => Math.max(it, window.innerHeight * Zt), onChange: (x) => h.play(x) },
              ],
              r.signal,
            );
        }
      };
      c.addEventListener("change", f, { signal: e.signal }),
        e.signal.addEventListener("abort", () => r?.abort(), { once: !0 }),
        f();
    });
    const d = Ct((c, h) => {
      c instanceof HTMLElement && ((s = qt(c, h)), s.setActive(t()));
    });
    return () =>
      Q("div", {
        "data-component-name": "desktop-menu",
        "data-takeover-aside": "",
        mix: d,
        class: Mt(
          "desktop-navigation grid-container grid-layout pointer-events-none fixed inset-x-0 bottom-16 top-desktop-header-height z-20 hidden items-center text-white global-lg:grid",
          !n && "invisible",
        ),
        children: [
          Q(Tt, {
            label: e.props.label,
            links: e.props.sections.map((c) => ({ href: `#${c.handle}`, title: c.title })),
            activeHref: n ? `#${n}` : void 0,
          }),
          Q("canvas", { "aria-hidden": "true", class: "pointer-events-none absolute left-0 top-0" }),
        ],
      });
  });
export { ye as DesktopNavigation };
