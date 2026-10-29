import { o as T } from "./frameLoop-CeLX9Qef.js";
import { o as C } from "./residentSections-BEssGc_p.js";
import { c as _, D } from "./colorPalette-VQpnhwit.js";
const F = 0.05,
  k = (r) => {
    const u = r.closest("[data-f26-section-color]")?.getAttribute("data-f26-section-color");
    return (_[u] ?? _[D]).srgb;
  };
function H(r) {
  const u = new AbortController(),
    { signal: t } = u,
    v = r.ownerDocument,
    l = r.closest(".content-rail-item"),
    n = l ?? r,
    m = matchMedia("(prefers-reduced-motion: reduce)");
  let E = !1,
    h = !1;
  const L = () => l?.dataset.hoverIntent === "true";
  let b = l ? L() : n.matches(":hover"),
    p = n.contains(v.activeElement);
  const S = () => (b || p) && !n.hasAttribute("data-dismissed"),
    o = { presented: !1, revealed: S(), reducedMotion: m.matches },
    w = new Set(),
    g = new Set(),
    s = () => {
      if (t.aborted) return;
      const e = v.visibilityState === "visible" && (E || h),
        a = S(),
        d = m.matches;
      if (!(e === o.presented && a === o.revealed && d === o.reducedMotion)) {
        Object.assign(o, { presented: e, revealed: a, reducedMotion: d });
        for (const i of g) i();
        for (const i of w) i(o);
      }
    },
    c = { signal: t },
    M = (e) => () => {
      (b = e), s();
    };
  l || (n.addEventListener("pointerenter", M(!0), c), n.addEventListener("pointerleave", M(!1), c)),
    n.addEventListener(
      "focusin",
      () => {
        (p = !0), s();
      },
      c,
    ),
    n.addEventListener(
      "focusout",
      (e) => {
        (p = n.contains(e.relatedTarget)), s();
      },
      c,
    ),
    m.addEventListener("change", s, c),
    v.addEventListener("visibilitychange", s, c);
  const O = new MutationObserver(() => {
    l && (b = L()), s();
  });
  O.observe(n, { attributeFilter: ["data-dismissed", "data-hover-intent"] });
  const A = new IntersectionObserver((e) => {
    (E = e.at(-1)?.isIntersecting === !0), s();
  });
  return (
    A.observe(r),
    C(r, t, (e, a) => {
      (h = a), s();
    }),
    t.addEventListener(
      "abort",
      () => {
        O.disconnect(), A.disconnect(), g.clear(), w.clear();
      },
      { once: !0 },
    ),
    {
      signal: t,
      surface: k(r),
      state: o,
      watch(e) {
        t.aborted || (w.add(e), e(o));
      },
      loop(e) {
        let a = !0,
          d = !0,
          i;
        const f = () => {
          const I = a && o.presented && !t.aborted;
          if (I !== !!i) {
            if (!I) {
              i?.(), (i = void 0);
              return;
            }
            (d = !0),
              (i = T(
                (P, y) => {
                  const R = d ? 0 : Math.min(F, y / 1e3);
                  (d = !1), e(R) === !1 && ((a = !1), f());
                },
                { signal: t },
              ));
          }
        };
        return (
          t.aborted || g.add(f),
          f(),
          {
            wake() {
              (a = !0), f();
            },
          }
        );
      },
      dispose: () => u.abort(),
    }
  );
}
export { H as w };
