const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/htmlInCanvas.client-Dq0_-fLm.js", "assets/frameLoop-CeLX9Qef.js"]),
) => i.map((i) => d[i]);
import { _ as a } from "./preload-helper-CZudbPKK.js";
import { g as s } from "./htmlInCanvasRegistry-Bxwl97Ch.js";
import { c as i } from "./client-entries-B1h-jQ5r.js";
const g = i(import.meta.url + "#HtmlInCanvasRuntime", function (t) {
  return (
    t.queueTask(async () => {
      const r = document.getElementById(t.props.wrapperId);
      if (t.signal.aborted || !r) return;
      if (t.props.easterEgg) {
        s(t.frames.top).register(r, t.signal);
        return;
      }
      if (
        !("requestPaint" in HTMLCanvasElement.prototype) ||
        !("drawElementImage" in CanvasRenderingContext2D.prototype)
      )
        return;
      const { runHtmlInCanvas: n } = await a(
        async () => {
          const { runHtmlInCanvas: e } = await import("./htmlInCanvas.client-Dq0_-fLm.js");
          return { runHtmlInCanvas: e };
        },
        __vite__mapDeps([0, 1]),
      );
      t.signal.aborted || n(r, t.signal);
    }),
    () => null
  );
});
export { g as HtmlInCanvasRuntime };
