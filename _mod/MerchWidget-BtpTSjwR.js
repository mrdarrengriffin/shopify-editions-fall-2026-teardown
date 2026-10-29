import { t as g } from "./index-CRnHN5xY.js";
import { c as v } from "./clsx-B-dksMZM.js";
import { Image as b } from "./Image-D_dPd3ZK.js";
import { Widget as h } from "./Widget-DOWhOrfN.js";
import { M } from "./MerchScene-pXeKqqrb.js";
import { a as x, p as n, o as y } from "./merchModal-vjkRzpE6.js";
import { c as I } from "./client-entries-B1h-jQ5r.js";
import { r as w } from "./ref-mixin-D6m2Cu20.js";
import { o as c } from "./on-mixin-Ci1jclOX.js";
import { j as i } from "./jsx-CLqwgotn.js";
import "./colorPalette-VQpnhwit.js";
import "./component-BWKvSpCv.js";
import "./typed-event-target-DhbNxY-V.js";
import "./clamp-co6UzHBn.js";
import "./easing-BhDfN7yX.js";
import "./MerchArtwork-D4a1F9Ph.js";
import "./preload-helper-CZudbPKK.js";
import "./disabledByUrl-iUMtXRf9.js";
import "./sectionJump-VOWWJQmH.js";
import "./surface-Be90gCgo.js";
import "./mixin-CMuDUxNx.js";
const J = I(import.meta.url + "#MerchWidget", function (e) {
  let s,
    a = !1,
    p;
  const m = (t, r) => {
      const o = s && p ? { scene: s, stage: p } : void 0;
      o && o.scene.setPose({ ...o.scene.getPose(), idle: 1 / 0 }),
        y({ dialogId: e.props.dialogId, launcher: t, live: o, restoreFocus: r });
    },
    l = w((t, r) => {
      p = t;
      const o = new ResizeObserver(([d]) => {
        if (t.hasAttribute("popover")) return;
        const { width: f, height: u } = d.contentRect;
        t.style.transform = `translate(-50%, -50%) scale(${Math.max(f, u) / t.offsetWidth})`;
      });
      o.observe(t.parentElement), r.addEventListener("abort", () => o.disconnect(), { once: !0 });
    });
  return () =>
    i(h, {
      legend: e.props.title,
      className: g("min-h-240", e.props.className),
      children: i("button", {
        type: "button",
        "aria-label": e.props.openLabel,
        "data-merch-widget": e.props.dialogId ?? x,
        "data-ready": a,
        class:
          "group absolute inset-0 cursor-pointer overflow-hidden text-white outline-offset-4 focus-visible:outline-2",
        mix: [
          c("pointerenter", (t) => n(t.currentTarget, e.props.dialogId)),
          c("focus", (t) => n(t.currentTarget, e.props.dialogId)),
          c("click", (t) => m(t.currentTarget, t.detail === 0)),
        ],
        children: [
          i(b, {
            data: e.props.poster,
            alt: "",
            loading: "lazy",
            sizes: "300px",
            widths: [320, 640, 960],
            className: v(
              "pointer-events-none absolute inset-0 size-full object-cover transition-opacity duration-300 motion-reduce:transition-none",
              a && "opacity-0",
            ),
          }),
          i("div", {
            class: "pointer-events-none absolute top-1/2 left-1/2 size-640",
            style: { transform: "translate(-50%, -50%) scale(0)" },
            mix: l,
            children: i(M, {
              decorative: !0,
              title: e.props.title,
              presentation: e.props.presentation,
              rootMargin: "600px 0px",
              onReady: (t) => {
                (s = t.scene), (a = !!s);
                const r = t.canvas.closest("[data-merch-widget]");
                r && matchMedia("(hover: none)").matches && n(r, e.props.dialogId),
                  e.signal.aborted || e.update();
              },
            }),
          }),
        ],
      }),
    });
});
export { J as MerchWidget };
