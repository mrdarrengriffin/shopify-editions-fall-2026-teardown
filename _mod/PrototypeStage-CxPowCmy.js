const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/mountWidget.client-BVGwFRGg.js", "assets/preload-helper-CZudbPKK.js"]),
) => i.map((i) => d[i]);
import { _ as u } from "./preload-helper-CZudbPKK.js";
import { a as d } from "./breadcrumbs-D6XkVKYD.js";
import { r as f } from "./reportError-C6Wenmm6.js";
import { c as g } from "./client-entries-B1h-jQ5r.js";
import { r as w } from "./ref-mixin-D6m2Cu20.js";
import { j as l } from "./jsx-CLqwgotn.js";
import "./mixin-CMuDUxNx.js";
import "./typed-event-target-DhbNxY-V.js";
const x = g(import.meta.url + "#PrototypeStage", function (r) {
  const m = w((c, e) => {
    const { visual: o, media: i } = r.props,
      n = () => {
        d("widget.mount", { widget: o.widget }),
          e.addEventListener("abort", () => d("widget.cleanup", { widget: o.widget }), { once: !0 }),
          (async () => {
            const { default: a } = await u(
              async () => {
                const { default: p } = await import("./mountWidget.client-BVGwFRGg.js");
                return { default: p };
              },
              __vite__mapDeps([0, 1]),
            );
            await a?.(o.widget, c, e, { strings: r.props.strings, locale: r.props.locale });
          })().catch((a) => {
            e.aborted || f(a, "PrototypeStage.mount", { widget: o.widget });
          });
      },
      t = i ? window.matchMedia(i) : void 0;
    if (!t || t.matches) return n();
    const s = () => {
      t.matches && (t.removeEventListener("change", s), n());
    };
    t.addEventListener("change", s, { signal: e });
  });
  return () => l("div", { class: "absolute inset-0", mix: m });
});
export { x as PrototypeStage };
