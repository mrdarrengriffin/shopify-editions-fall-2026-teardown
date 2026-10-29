import { _ as C } from "./preload-helper-CZudbPKK.js";
import { n as g } from "./frameLoop-CeLX9Qef.js";
import { s as S } from "./easing-BhDfN7yX.js";
import { c as k } from "./client-entries-B1h-jQ5r.js";
import "./clamp-co6UzHBn.js";
function A(r, e) {
  const t = e.map(({ start: a, distance: n }) => S((r - a) / n));
  return t.map((a, n) => ({ arrival: a, handover: t[n + 1] ?? 0 }));
}
const b = "button-surface",
  E = "--f26-button-scroll-arrival",
  h = "--f26-button-scroll-handover";
function B(r) {
  const e = [...document.querySelectorAll("[data-f26-page-section]")];
  if (!e.length) return;
  const t = e.map((s) => s.getElementsByClassName(b));
  let a = [];
  const n = [];
  let d = !0,
    f;
  function L(s) {
    const o = getComputedStyle(document.documentElement),
      i = parseFloat(o.getPropertyValue("--f26-crossfade-line")) || 0.5,
      c = parseFloat(o.getPropertyValue("--f26-crossfade-distance")),
      l = window.innerHeight * i;
    a = e.map((u) => {
      const p = parseFloat(getComputedStyle(u).getPropertyValue("--f26-entry-lead")) || 0;
      return { start: u.getBoundingClientRect().top + s - l - p + 1, distance: c };
    });
  }
  function P() {
    f = void 0;
    const s = window.scrollY;
    d && (L(s), (d = !1)),
      A(s, a).forEach((o, i) => {
        const c = n[i];
        n[i] = o;
        const l = o.arrival !== c?.arrival,
          u = o.handover !== c?.handover;
        if (!(!l && !u))
          for (const p of t[i])
            l && p.style.setProperty(E, String(o.arrival)), u && p.style.setProperty(h, String(o.handover));
      });
  }
  const m = () => {
      f ??= g(P, { signal: r });
    },
    v = () => {
      (d = !0), m();
    };
  window.addEventListener("scroll", m, { passive: !0, signal: r }),
    window.addEventListener("resize", v, { signal: r }),
    window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", v, { signal: r });
  const y = new ResizeObserver(v);
  y.observe(document.documentElement);
  const w = new MutationObserver((s) => {
    for (const { target: o, addedNodes: i } of s)
      for (const c of i)
        if (c instanceof Element && (c.classList.contains(b) || c.getElementsByClassName(b).length)) {
          (n[e.findIndex((l) => l.contains(o))] = void 0), m();
          break;
        }
  });
  for (const s of e) w.observe(s, { childList: !0, subtree: !0 });
  r.addEventListener(
    "abort",
    () => {
      y.disconnect(), w.disconnect();
      for (const s of t) for (const o of s) o.style.removeProperty(E), o.style.removeProperty(h);
    },
    { once: !0 },
  ),
    m();
}
const O = k(import.meta.url + "#HomePageBackground", function (e) {
  return (
    e.queueTask(async () => {
      const t = e.signal;
      if (t.aborted) return;
      _(t);
      const a = CSS.supports("animation-timeline", "view()")
        ? B
        : (
            await C(async () => {
              const { startSectionCrossfadeFallback: f } = await import(
                "./sectionCrossfadeFallback-D7NPRjaA.js"
              );
              return { startSectionCrossfadeFallback: f };
            }, [])
          ).startSectionCrossfadeFallback;
      if (t.aborted) return;
      let n;
      function d() {
        n?.abort(), (n = new AbortController()), a(n.signal);
      }
      e.frame.addEventListener("reloadComplete", d, { signal: t }),
        t.addEventListener("abort", () => n?.abort(), { once: !0 }),
        d();
    }),
    () => null
  );
});
function _(r) {
  const e = document.documentElement,
    t = () =>
      g(() =>
        g(() => {
          r.aborted || e.setAttribute("data-f26-page-settled", "");
        }),
      );
  document.readyState === "complete" ? t() : window.addEventListener("load", t, { once: !0, signal: r }),
    r.addEventListener("abort", () => e.removeAttribute("data-f26-page-settled"), { once: !0 });
}
export { O as HomePageBackground };
