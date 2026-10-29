import { c as M } from "./clsx-B-dksMZM.js";
import { n as C } from "./frameLoop-CeLX9Qef.js";
import { Image as w } from "./Image-D_dPd3ZK.js";
import { s as E } from "./settleImages-BXogfgwb.js";
import { c as O } from "./client-entries-B1h-jQ5r.js";
import { r as j } from "./ref-mixin-D6m2Cu20.js";
import { j as S } from "./jsx-CLqwgotn.js";
import "./index-CRnHN5xY.js";
import "./mixin-CMuDUxNx.js";
import "./typed-event-target-DhbNxY-V.js";
const G = O(import.meta.url + "#StackedFigmaMotionVideoSync", function (m) {
  let l = !1;
  const h = j((s, a) => {
    const o = s.parentElement,
      c = o?.querySelector("[data-video-phase]"),
      e = c?.querySelector("video");
    if (!o || !c || !e) return;
    const f = typeof e.requestVideoFrameCallback == "function";
    let i = null,
      p = !1,
      d = [],
      r;
    const v = () => {
        const t = p && c.getAttribute("data-video-phase") === "ready";
        t !== l && ((l = t), m.update());
      },
      V = () => {
        !i ||
          (d[0] && d[0].animation.playState !== "idle") ||
          (d = i.getAnimations({ subtree: !0 }).flatMap((t) => {
            const n = t.effect?.getTiming().duration;
            return typeof n != "number" ? [] : (t.pause(), [{ animation: t, duration: n }]);
          }));
      },
      b = (t) => {
        V();
        const n = e.duration > 0 ? t / e.duration : 0;
        for (const { animation: q, duration: x } of d) q.currentTime = n * x;
      },
      y = (t, { mediaTime: n }) => {
        b(n), (r = e.requestVideoFrameCallback(y));
      },
      g = () => {
        f && (r !== void 0 && e.cancelVideoFrameCallback(r), (r = e.requestVideoFrameCallback(y)));
      },
      k = () => {
        (i = o.querySelector("[data-figma-motion-stage]")),
          i &&
            (u.disconnect(),
            f && b(e.currentTime),
            E(i)
              .then(() => new Promise((t) => C(t)))
              .then(() => document.fonts?.ready)
              .then(() => {
                a.aborted || ((p = !0), v());
              }));
      },
      u = new MutationObserver(k);
    u.observe(o, { childList: !0, subtree: !0 });
    const F = new MutationObserver(v);
    F.observe(c, { attributeFilter: ["data-video-phase"] }),
      e.addEventListener("playing", g, { signal: a }),
      a.addEventListener(
        "abort",
        () => {
          u.disconnect(), F.disconnect(), r !== void 0 && e.cancelVideoFrameCallback(r);
        },
        { once: !0 },
      ),
      k(),
      e.paused || g();
  });
  return () => {
    const { poster: s, loading: a, sizes: o } = m.props;
    return S("div", {
      "aria-hidden": "true",
      class: M(
        "stacked-figma-motion-poster pointer-events-none absolute inset-0 transition-opacity duration-300 motion-reduce:transition-none",
        l ? "opacity-0" : "opacity-100",
      ),
      mix: h,
      children: s
        ? S(w, { alt: "", className: "size-full object-cover", data: s, loading: a, sizes: o })
        : null,
    });
  };
});
export { G as StackedFigmaMotionVideoSync };
