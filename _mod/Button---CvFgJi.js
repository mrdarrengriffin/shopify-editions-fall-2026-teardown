import { t as w } from "./index-CRnHN5xY.js";
import { c as v } from "./clsx-B-dksMZM.js";
import { e as j } from "./externalLink-DAUa5sJm.js";
import { j as e } from "./jsx-CLqwgotn.js";
import { F as c } from "./component-BWKvSpCv.js";
import "./constants-Dvx39Bnh.js";
import "./mixin-CMuDUxNx.js";
import "./typed-event-target-DhbNxY-V.js";
const k = {
    primary:
      "button-surface inline-flex h-auto w-max min-w-40 max-w-full select-none appearance-none items-center justify-center gap-4 rounded-full align-top whitespace-normal no-underline",
    outline:
      "button-outline relative isolate inline-flex items-center justify-center h-auto min-w-40 whitespace-normal rounded-full ring-1 ring-inset ring-current/10 bg-transparent shadow-none",
    inline: "inline-link-decoration my-0",
    secondary:
      "relative inline-flex min-h-24 min-w-24 items-center justify-center bg-transparent p-0 inline-link-decoration",
  },
  z = { md: "min-h-24 px-12 py-4", lg: "min-h-40 px-20 py-12" };
function _(u) {
  return () => {
    const { variant: n = "primary", size: m = "md", className: p, children: t, ...i } = u.props,
      r = w(
        v(
          "button-control cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-55 aria-disabled:cursor-not-allowed aria-disabled:opacity-55",
          k[n],
          (n === "primary" || n === "outline") && z[m],
          n !== "inline" && "font-mono text-mono",
        ),
        p,
      ),
      o = e("span", { "aria-hidden": "true", class: "button-count" }),
      a = n !== "inline" ? "glyphs" : void 0,
      s =
        n === "primary" || n === "outline"
          ? e(c, { children: [e("span", { "aria-hidden": "true", class: "button-ink" }), o, t] })
          : n === "secondary"
            ? e(c, { children: [o, t] })
            : t;
    if (i.as === "a") {
      const { as: b, mix: h, target: l, rel: g = l === "_blank" ? "noopener noreferrer" : void 0, ...x } = i;
      return e(b, { "data-count": a, ...x, target: l, rel: g, class: r, mix: [h, j()], children: s });
    }
    const { as: d = "button", type: f = "button", ...y } = i;
    return e(d, { "data-count": a, ...y, type: f, class: r, children: s });
  };
}
export { _ as Button };
