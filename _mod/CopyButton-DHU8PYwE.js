import { Button as u } from "./Button---CvFgJi.js";
import { c as y } from "./client-entries-B1h-jQ5r.js";
import { o as b } from "./on-mixin-Ci1jclOX.js";
import { F as f } from "./component-BWKvSpCv.js";
import { j as e } from "./jsx-CLqwgotn.js";
import "./index-CRnHN5xY.js";
import "./clsx-B-dksMZM.js";
import "./externalLink-DAUa5sJm.js";
import "./constants-Dvx39Bnh.js";
import "./mixin-CMuDUxNx.js";
import "./typed-event-target-DhbNxY-V.js";
const L = y(import.meta.url + "#CopyButton", function (t) {
  let r = "idle",
    p;
  t.signal.addEventListener("abort", () => clearTimeout(p), { once: !0 });
  const n = (o) => {
      (r = o), t.signal.aborted || t.update();
    },
    l = async (o) => {
      clearTimeout(p);
      try {
        await navigator.clipboard.writeText(o), n("copied"), (p = setTimeout(() => n("idle"), 2e3));
      } catch {
        n("idle");
      }
    };
  return () => {
    const { children: o, copiedLabel: a = "Copied", text: d, tooltip: s, ...m } = t.props,
      i = s?.trim() || void 0,
      c = i ? `${t.id}-tooltip` : void 0;
    return e(f, {
      children: [
        e(u, {
          ...m,
          "aria-describedby": c,
          title: i,
          "data-link-tooltip": r === "copied" ? a : i,
          "data-link-tooltip-open": r === "copied" ? "" : void 0,
          "data-component-name": "cta-copy-to-clipboard",
          type: "button",
          mix: b("click", () => l(d)),
          children: o,
        }),
        e("span", { role: "status", class: "sr-only", children: r === "copied" ? a : null }),
        i ? e("span", { id: c, role: "tooltip", hidden: !0, children: i }) : null,
      ],
    });
  };
});
export { L as CopyButton };
