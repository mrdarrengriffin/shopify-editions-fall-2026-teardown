import { s as a } from "./shopifyMerchant-CQiMMM42.js";
import { c as h } from "./client-entries-B1h-jQ5r.js";
import { j as u } from "./jsx-CLqwgotn.js";
import "./typed-event-target-DhbNxY-V.js";
function l(r) {
  return (
    r.queueTask(async (e) => {
      const n = r.props.controller ?? a,
        s = window.location.hostname === "www.shopify.com",
        i = window.location.hostname.includes("brochure"),
        t = new URLSearchParams(window.location.search).get("debug_shopify_merchant");
      if (!s && (t === "true" || t === "false")) {
        n.set(t === "true");
        return;
      }
      if (!(!s && !i))
        try {
          const o = await fetch(new URL("/services/auth/session", window.location.origin), {
            credentials: "same-origin",
            signal: e,
          });
          if (!o.ok || e.aborted) return;
          const c = await o.json();
          n.set(!!c.isShopifyMerchant);
        } catch (o) {
          e.aborted || console.error("Merchant session check failed:", o);
        }
    }),
    () => null
  );
}
const d = h(import.meta.url + "#MerchantSession", function () {
  return () => u(l, {});
});
export { d as MerchantSession };
