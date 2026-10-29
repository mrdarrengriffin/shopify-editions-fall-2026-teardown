import { B as i } from "./constants-Dvx39Bnh.js";
import { c as n } from "./mixin-CMuDUxNx.js";
import { j as m } from "./jsx-CLqwgotn.js";
const c = (r, e = "https://www.shopify.com") => {
    if (!/^(https?:\/\/|\/\/)/i.test(r)) return r;
    let t, o;
    try {
      (o = new URL(e, "https://www.shopify.com")), (t = new URL(r, o));
    } catch {
      return r;
    }
    if (
      (t.protocol !== "https:" && t.protocol !== "http:") ||
      ((t.origin === o.origin || t.hostname === "shopify.com" || t.hostname === "www.shopify.com") &&
        /^\/(?:[a-z]{2}(?:-[a-z]{2})?\/)?editions(?:\/|$)/i.test(t.pathname))
    )
      return r;
    for (const [a, s] of new URLSearchParams(i)) t.searchParams.has(a) || t.searchParams.append(a, s);
    return t.href;
  },
  w = n((r) => (e) => m(r.element, { ...e, href: c(e.href ?? "", r.frame.src) }));
export { w as e };
