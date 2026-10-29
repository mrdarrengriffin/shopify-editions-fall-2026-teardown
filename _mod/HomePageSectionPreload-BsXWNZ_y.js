import { s as k, a as P } from "./residentSections-BEssGc_p.js";
import { s as g } from "./sectionJump-VOWWJQmH.js";
import { c as w } from "./client-entries-B1h-jQ5r.js";
import "./typed-event-target-DhbNxY-V.js";
const I = "data-rive-prefetch",
  b = '[data-component-name="rive"]',
  T = "data-section-preload",
  E = 150,
  A = 2,
  f = `${b}, [data-component-name="video"], [data-resident-media]`,
  S = 200,
  _ = 400,
  R = 3e3,
  C = ["wheel", "touchstart", "pointerdown", "keydown"],
  y = (n) => {
    const r = n instanceof Element ? n.closest('a[href*="#"]') : null;
    return r &&
      r.origin === location.origin &&
      r.pathname === location.pathname &&
      r.search === location.search
      ? r
      : null;
  },
  K = (n) =>
    (n.type === "pointerdown" ||
      n.type === "touchstart" ||
      (n instanceof KeyboardEvent && n.key === "Enter")) &&
    y(n.target) !== null,
  h = (n) => (n instanceof Element ? n.closest(`a[${T}]`) : null),
  H = () => navigator.connection?.saveData === !0;
function J(n, r) {
  let o = null,
    e = null,
    c = null,
    i;
  const s = () => {
    const t = o ?? e;
    if (t === c || ((c = t), clearTimeout(i), !t)) return;
    const a = () => {
      t.closest("[inert]") ? (i = setTimeout(a, E)) : r(t.getAttribute(T) ?? "");
    };
    i = setTimeout(a, E);
  };
  document.addEventListener(
    "pointerover",
    (t) => {
      t.pointerType !== "touch" && ((o = h(t.target)), s());
    },
    { signal: n },
  ),
    document.addEventListener(
      "pointerout",
      (t) => {
        t.pointerType === "touch" || t.relatedTarget || ((o = null), s());
      },
      { signal: n },
    ),
    document.addEventListener(
      "focusin",
      (t) => {
        const a = h(t.target);
        (e = a?.matches(":focus-visible") ? a : null), s();
      },
      { signal: n },
    ),
    document.addEventListener(
      "focusout",
      (t) => {
        t.relatedTarget || ((e = null), s());
      },
      { signal: n },
    ),
    n.addEventListener("abort", () => clearTimeout(i), { once: !0 });
}
function O(n, r) {
  let o, e;
  const c = () => o?.abort(),
    i = (s) => {
      let t;
      try {
        t = s.length > 1 ? document.getElementById(decodeURIComponent(s.slice(1))) : null;
      } catch {
        return;
      }
      if (!t) return;
      const a = r.find((d) => d.contains(t)) ?? t;
      if (o && t === e) return;
      const l = new AbortController(),
        u = l.signal,
        L = performance.now() + R;
      let m;
      const p = (d = S) => {
        clearTimeout(m), (m = setTimeout(c, Math.min(d, Math.max(0, L - performance.now()))));
      };
      u.addEventListener(
        "abort",
        () => {
          clearTimeout(m), o === l && ((o = e = void 0), g.set(void 0));
        },
        { once: !0 },
      );
      const M = o;
      (o = l),
        (e = t),
        M?.abort(),
        g.set(a),
        addEventListener("scroll", () => p(), { passive: !0, signal: u });
      for (const d of C)
        addEventListener(
          d,
          (v) => {
            K(v) || c();
          },
          { passive: !0, signal: u },
        );
      p(_);
    };
  document.addEventListener(
    "click",
    (s) => {
      if (s.defaultPrevented || s.button || s.metaKey || s.ctrlKey || s.shiftKey || s.altKey) return;
      const t = y(s.target);
      t && i(t.hash);
    },
    { signal: n },
  ),
    addEventListener("hashchange", () => i(location.hash), { signal: n }),
    n.addEventListener("abort", c, { once: !0 });
}
function x(n, r) {
  const o = [];
  for (const e of n.querySelectorAll(`${f}, img`)) {
    if ((!e.matches(f) && e.parentElement?.closest(f)) || !P(e)) continue;
    const { left: c, top: i, width: s, height: t } = e.getBoundingClientRect(),
      a = [c, i, s, t].map(Math.round).join(),
      l = o.at(-1);
    if (l?.box === a) l.nodes.push(e);
    else {
      if (o.length === r) break;
      o.push({ box: a, nodes: [e] });
    }
  }
  return o.flatMap(({ nodes: e }) => e);
}
function B(n) {
  const r = x(n, A),
    o = r.flatMap((e) => (e instanceof HTMLImageElement ? [e] : k(e)));
  for (const e of r) e.matches(b) && e.setAttribute(I, "");
  for (const e of o) e.loading = "eager";
}
const V = w(import.meta.url + "#HomePageSectionPreload", function (r) {
  return (
    r.queueTask(() => {
      let o;
      const e = () => {
        o?.abort(), (o = new AbortController());
        const { signal: c } = o,
          i = r.props.sectionIds.flatMap((s) => {
            const t = document.getElementById(s);
            return t ? [t] : [];
          });
        J(c, (s) => {
          const t = i.find((a) => a.id === s);
          t && document.readyState === "complete" && !H() && B(t);
        }),
          O(c, i);
      };
      r.frame.addEventListener("reloadComplete", e, { signal: r.signal }),
        r.signal.addEventListener("abort", () => o?.abort(), { once: !0 }),
        r.signal.aborted || e();
    }),
    () => null
  );
});
export { V as HomePageSectionPreload };
