import { s as c } from "./shopifyMerchant-CQiMMM42.js";
import { Button as f } from "./Button---CvFgJi.js";
import { CopyButton as y } from "./CopyButton-DHU8PYwE.js";
import { c as h } from "./client-entries-B1h-jQ5r.js";
import { c as v } from "./mixin-CMuDUxNx.js";
import { j as n } from "./jsx-CLqwgotn.js";
import "./typed-event-target-DhbNxY-V.js";
import "./index-CRnHN5xY.js";
import "./clsx-B-dksMZM.js";
import "./externalLink-DAUa5sJm.js";
import "./constants-Dvx39Bnh.js";
import "./component-BWKvSpCv.js";
import "./on-mixin-Ci1jclOX.js";
const u = {
    "primary-md": { variant: "primary", size: "md" },
    "primary-lg": { variant: "primary", size: "lg" },
    "stroked-md": { variant: "outline", size: "md" },
    "stroked-lg": { variant: "outline", size: "lg" },
    "text-secondary": { variant: "secondary" },
  },
  m = (i, r) => {
    const a = i.find((e) => !e.authenticated),
      t = i.find((e) => e.authenticated);
    return r ? (t ?? a) : a;
  },
  x = v((i) => {
    let r = !1;
    const a = i.signal;
    return (
      i.addEventListener("insert", () => {
        const t = () => {
          const e = c.isShopifyMerchant;
          e !== r && ((r = e), i.update());
        };
        c.addEventListener("change", t, { signal: a }), t();
      }),
      (t) => n(i.element, { ...t, "data-component-extra-is-auth": r ? "true" : "false" })
    );
  }),
  A = h(import.meta.url + "#ProductCtas", function (r) {
    let a = !1;
    return (
      r.queueTask(() => {
        const t = () => {
          const e = c.isShopifyMerchant;
          if (e === a) return;
          const s = m(r.props.ctas, a),
            o = m(r.props.ctas, e);
          (a = e), (o !== s || o?.copyText !== void 0) && r.update();
        };
        c.addEventListener("change", t, { signal: r.signal }), t();
      }),
      () => {
        const t = m(r.props.ctas, a);
        if (!t) return null;
        const { productTitle: e, style: s = "primary-md" } = r.props,
          o = t.title ?? t.copyText,
          p = o ?? e,
          l = t.ariaLabel ?? (o ? `${o}, ${e}` : p),
          d = a ? "true" : "false";
        return t.copyText !== void 0
          ? n("div", {
              children: n(y, {
                ...u[s],
                text: t.copyText,
                copiedLabel: r.props.copiedLabel,
                "aria-label": l,
                "data-component-extra-is-auth": d,
                children: p,
              }),
            })
          : n("div", {
              children: n(f, {
                as: "a",
                ...u[s],
                href: t.url,
                target: "_blank",
                "aria-label": l,
                "data-component-name": "cta-link",
                mix: x(),
                children: p,
              }),
            });
      }
    );
  });
export { u as CTA_STYLE_PROPS, A as ProductCtas, m as resolveProductCta };
