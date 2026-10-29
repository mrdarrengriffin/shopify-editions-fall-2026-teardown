import { s as p } from "./shopifyMerchant-CQiMMM42.js";
import { Link as f } from "./Link-Dqyjg77a.js";
import { RichText as d } from "./RichText-3fUs84zD.js";
import { c as h } from "./client-entries-B1h-jQ5r.js";
import { j as m } from "./jsx-CLqwgotn.js";
import "./typed-event-target-DhbNxY-V.js";
import "./index-CRnHN5xY.js";
import "./uniqueId-rj4JeCtw.js";
import "./externalLink-DAUa5sJm.js";
import "./constants-Dvx39Bnh.js";
import "./mixin-CMuDUxNx.js";
import "./component-BWKvSpCv.js";
import "./create-element-sVm-IRH-.js";
import "./children-CK0rrdQP.js";
import "./unsafe-html-D-rYaoKo.js";
const N = h(import.meta.url + "#ProductDescription", function (i) {
  let e = !1;
  return (
    i.queueTask(() => {
      const t = () => {
        const o = p.isShopifyMerchant;
        o !== e && ((e = o), i.update());
      };
      p.addEventListener("change", t, { signal: i.signal }), t();
    }),
    () => {
      const { ctas: t, ...o } = i.props,
        r = t.find((n) => n.authenticated === e);
      return m(d, {
        ...o,
        renderLink: ({ key: n, text: c, target: s, rel: a, tooltip: u }) => {
          if (!(!r?.url || !r.title?.trim() || !t.some((l) => l.title?.trim() === c)))
            return m(
              f,
              {
                dataComponentName: "cta-inline-link",
                href: r.url,
                target: s,
                rel: a,
                tooltip: r.ariaLabel?.trim() || u,
                children: r.title,
              },
              n,
            );
        },
      });
    }
  );
});
export { N as ProductDescription };
