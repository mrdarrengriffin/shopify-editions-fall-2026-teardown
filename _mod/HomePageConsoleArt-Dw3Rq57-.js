const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/logConsoleArt.client-DDwe3Ein.js", "assets/htmlInCanvasSupport-jvDIQ00h.js"]),
) => i.map((i) => d[i]);
import { _ as l } from "./preload-helper-CZudbPKK.js";
import { c as i } from "./client-entries-B1h-jQ5r.js";
const u = i(import.meta.url + "#HomePageConsoleArt", function (t) {
  return (
    t.queueTask(() => {
      const { signal: o } = t,
        r = () => {
          l(
            async () => {
              const { logConsoleArt: e } = await import("./logConsoleArt.client-DDwe3Ein.js");
              return { logConsoleArt: e };
            },
            __vite__mapDeps([0, 1]),
          )
            .then(({ logConsoleArt: e }) => e(t.props.expoMode))
            .catch(() => {});
        },
        n = () => {
          if (typeof requestIdleCallback != "function") {
            const a = setTimeout(r, 1e3);
            o.addEventListener("abort", () => clearTimeout(a));
            return;
          }
          const e = requestIdleCallback(r, { timeout: 5e3 });
          o.addEventListener("abort", () => cancelIdleCallback(e));
        };
      document.readyState === "complete" ? n() : window.addEventListener("load", n, { once: !0, signal: o });
    }),
    () => null
  );
});
export { u as HomePageConsoleArt };
