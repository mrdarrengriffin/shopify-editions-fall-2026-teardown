import { t as n } from "./index-CRnHN5xY.js";
import { u as s } from "./uniqueId-rj4JeCtw.js";
import { e as a } from "./externalLink-DAUa5sJm.js";
import { F as m } from "./component-BWKvSpCv.js";
import { j as r } from "./jsx-CLqwgotn.js";
import "./constants-Dvx39Bnh.js";
import "./mixin-CMuDUxNx.js";
import "./typed-event-target-DhbNxY-V.js";
const c =
  "inline-link-decoration focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-4";
function g(o) {
  const e = s("tooltip");
  return () => {
    const t = o.props.tooltip?.trim() || void 0,
      i = t ? e : void 0,
      p = o.props.rel ?? (o.props.target === "_blank" ? "noopener noreferrer" : void 0);
    return r(m, {
      children: [
        r("a", {
          class: n(c, o.props.className),
          href: o.props.href,
          mix: a(),
          rel: p,
          target: o.props.target,
          title: t,
          "data-component-name": o.props.dataComponentName,
          "data-component-extra-product-handle": o.props["data-component-extra-product-handle"],
          "data-rmx-document": o.props["data-rmx-document"],
          "data-link-tooltip": t,
          "aria-describedby": i,
          children: o.props.children,
        }),
        t ? r("span", { id: i, role: "tooltip", hidden: !0, children: t }) : null,
      ],
    });
  };
}
export { g as Link };
