const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/smoothScroll-DNrjGF3X.js", "assets/frameLoop-CeLX9Qef.js"]),
) => i.map((i) => d[i]);
import { _ as i } from "./preload-helper-CZudbPKK.js";
import { c as l } from "./client-entries-B1h-jQ5r.js";
const a = "data-html-in-canvas-drawn",
  b = l(import.meta.url + "#HomePageSmoothScroll", function (o) {
    return (
      o.queueTask(async () => {
        const e = o.signal;
        if (e.aborted || matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
        const { startSmoothScroll: c } = await i(
          async () => {
            const { startSmoothScroll: s } = await import("./smoothScroll-DNrjGF3X.js");
            return { startSmoothScroll: s };
          },
          __vite__mapDeps([0, 1]),
        );
        if (e.aborted) return;
        let t;
        const r = () => {
            document.querySelector(`[${a}]`)
              ? (t?.abort(), (t = void 0))
              : t || ((t = new AbortController()), c(t.signal));
          },
          n = new MutationObserver(r);
        n.observe(document.documentElement, { subtree: !0, attributeFilter: [a] }),
          e.addEventListener(
            "abort",
            () => {
              n.disconnect(), t?.abort();
            },
            { once: !0 },
          ),
          r();
      }),
      () => null
    );
  });
export { b as HomePageSmoothScroll };
