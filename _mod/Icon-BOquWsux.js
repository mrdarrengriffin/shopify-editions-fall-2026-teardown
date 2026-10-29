import { t } from "./index-CRnHN5xY.js";
import { j as r } from "./jsx-CLqwgotn.js";
var h = ((s) => ((s.Black = "text-g7"), (s.G4 = "text-g4"), (s.White = "text-g1"), s))(h || {}),
  c = ((s) => ((s.Small = "size-16"), (s.Large = "size-24"), s))(c || {}),
  l = ((s) => (
    (s.Alert16 = "alert16"),
    (s.ArrowDiagonal16 = "arrowDiagonal16"),
    (s.ArrowRight16 = "arrowRight16"),
    (s.ArrowRight24 = "arrowRight24"),
    (s.ChevronDown16 = "chevronDown16"),
    (s.ChevronDown24 = "chevronDown24"),
    (s.ChevronRight24 = "chevronRight24"),
    (s.ChevronUp16 = "chevronUp16"),
    (s.ChevronUp24 = "chevronUp24"),
    (s.Close16 = "close16"),
    (s.Close24 = "close24"),
    (s.CloseX16 = "closeX16"),
    (s.Editions16 = "editions16"),
    (s.Editions24 = "editions24"),
    (s.ExternalLink16 = "externalLink16"),
    (s.ExternalLink24 = "externalLink24"),
    (s.Globe16 = "globe16"),
    (s.Globe24 = "globe24"),
    (s.Menu24 = "menu24"),
    (s.MenuClose24 = "menuClose24"),
    (s.Search16 = "search16"),
    (s.Search24 = "search24"),
    s
  ))(l || {});
const f = {
  alert16: "https://cdn.shopify.com/s/files/1/0921/8919/6588/files/Alert.svg?v=1760988657",
  arrowDiagonal16:
    "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/global-16-arrow-diagonal.svg?v=1715720958",
  arrowRight16:
    "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/global-16-arrow-right.svg?v=1715720958",
  arrowRight24:
    "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/global-24-arrow-right.svg?v=1715720958",
  chevronDown16:
    "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/global-16-shrevon-down.svg?v=1715720958",
  chevronDown24:
    "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/global-24-Chevron-Down.svg?v=1715720958",
  chevronRight24:
    "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/global-24-chevron-right.svg?v=1715720958",
  chevronUp16: "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/global-16-shrevon-up.svg?v=1715720958",
  chevronUp24: "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/global-24-Chevron-up.svg?v=1715720958",
  close16: "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/global-16-close.svg?v=1715720957",
  close24: "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/global-24-close.svg?v=1715720957",
  closeX16: "https://cdn.shopify.com/s/files/1/0921/8919/6588/files/CloseX16.svg?v=1760987632",
  editions16: "https://cdn.shopify.com/b/shopify-brochure2-assets/b02e40d255302243e0cb2d01d45d11ad.svg",
  editions24: "https://cdn.shopify.com/b/shopify-brochure2-assets/6c5b9cac2633b1813f7fe9acb7519221.svg",
  externalLink16:
    "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/global-16-external-link.svg?v=1715720958",
  externalLink24:
    "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/global-24-external-link.svg?v=1715720958",
  globe16: "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/global-16-globe.svg?v=1715720957",
  globe24: "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/global-24-globe.svg?v=1715720957",
  menu24: "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/global-24-menu.svg?v=1715781039",
  menuClose24: "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/global-24-menu-close.svg?v=1715784413",
  search16: "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/global-16-search.svg?v=1715720958",
  search24: "https://cdn.shopify.com/s/files/1/0842/2601/5254/files/global-24-search.svg?v=1715720958",
};
function n(s, e) {
  const o = s.includes("16") || s.includes("24");
  return l[`${s}${o ? "" : (e ?? (o ? void 0 : "size-24")) === "size-16" ? "16" : "24"}`];
}
function a(s) {
  return () => {
    const { name: e, theme: o = "text-g7" } = s.props,
      i = s.props.size ?? (e.includes("24") ? "size-24" : e.includes("16") ? "size-16" : void 0);
    return r("span", {
      class: t("icon inline-block bg-current", o, i, s.props.class, s.props.className),
      "aria-hidden": "true",
      style: { "--mask-url": `url(${f[e] || ""})`, WebkitMaskSize: "contain" },
    });
  };
}
export { a as I, h as a, c as b, l as c, n as g };
