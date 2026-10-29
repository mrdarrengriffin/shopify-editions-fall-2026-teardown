import { t as v } from "./index-CRnHN5xY.js";
import { j as S } from "./jsx-CLqwgotn.js";
const M = [320, 480, 640, 720, 960, 1080, 1280, 1600, 1920, 2560],
  j = (i) => {
    try {
      const { hostname: t } = new URL(i);
      return ["cdn.shopify.com", "myshopify.com", "mock.shop"].some((s) => t === s || t.endsWith(`.${s}`));
    } catch {
      return !1;
    }
  },
  x = (i, t, s) => {
    let o;
    try {
      o = new URL(i);
    } catch {
      return { src: i };
    }
    const r = j(i),
      a = r ? "anonymous" : void 0;
    if (
      !r ||
      !["https:", "http:"].includes(o.protocol) ||
      /\.svg$/i.test(o.pathname) ||
      ["width", "height", "crop", "scale"].some((e) => o.searchParams.has(e))
    )
      return { src: i, crossOrigin: a };
    const m = Math.min(s && s > 0 ? s : 5760, 5760),
      n = [
        ...new Set(t.filter((e) => Number.isFinite(e) && e >= 1).map((e) => Math.min(Math.round(e), m))),
      ].sort((e, d) => e - d);
    if (!n.length) return { src: i, crossOrigin: a };
    const h = n.map((e) => (o.searchParams.set("width", String(e)), `${o.href} ${e}w`)).join(", ");
    return o.searchParams.set("width", String(n[0])), { src: o.href, srcSet: h, crossOrigin: a };
  };
function z(i) {
  return () => {
    const {
      data: t,
      src: s = t?.url,
      alt: o = t?.altText ?? "",
      width: r,
      height: a,
      style: m,
      widths: n = M,
      srcSet: h,
      className: e,
      loading: d = "lazy",
      decoding: p = "async",
      sizes: f = "100vw",
      ...w
    } = i.props;
    if (!s) return null;
    const c = t?.width && t.height ? t.width / t.height : void 0,
      g = r ?? (a && c ? Math.round(a * c) : t?.width),
      u = a ?? (r && c ? Math.round(r / c) : t?.height),
      y = g && u ? g / u : void 0,
      l = h !== void 0 ? { src: s, srcSet: h } : x(s, n, t?.width ?? r);
    return S("img", {
      ...w,
      ...l,
      alt: o,
      width: g ?? void 0,
      height: u ?? void 0,
      loading: d,
      decoding: p,
      sizes: l.srcSet ? f : void 0,
      style: { "--image-aspect-ratio": y, ...m },
      class: v("image-aspect-ratio block h-auto w-full object-cover", e),
    });
  };
}
export { z as Image, j as isShopifyHost };
