const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/humanSignal-NNQJVNCS-CRx7HqeQ.js",
      "assets/preload-helper-CZudbPKK.js",
      "assets/breadcrumbs-D6XkVKYD.js",
      "assets/deviceSignal-STBD2VIS-iV_nE33R.js",
    ]),
) => i.map((i) => d[i]);
import { r as vt } from "./breadcrumbs-D6XkVKYD.js";
import { _ as Ie } from "./preload-helper-CZudbPKK.js";
const V = new Map(),
  Le = 5e3;
function bt(e) {
  return e instanceof Error
    ? { message: e.message, stack: e.stack }
    : typeof e == "string"
      ? { message: e }
      : e;
}
function Tt(e) {
  return (t, n) => {
    const i = bt(t),
      o = i.stack || new Error().stack || "Unknown",
      r = `${i.message}::${
        o
          .split(
            `
`,
          )[1]
          ?.trim() || ""
      }`,
      s = Date.now(),
      a = V.get(r);
    if (!(a && s - a < Le)) {
      if ((V.set(r, s), V.size > 100)) for (const [c, l] of V) s - l > Le && V.delete(c);
      e(
        { message: i.message || "Unknown error", stack: o, fileName: i.fileName, lineNumber: i.lineNumber },
        n,
      );
    }
  };
}
function Ai(e) {
  const t = e.error?.message || e.message || "";
  if (
    [
      "skilljarCourse is not defined",
      "jQuery is not defined",
      "$ is not defined",
      "gtag is not defined",
      "window.__tcfapi is not a function",
      "fbq is not defined",
      "ga is not defined",
      "_gaq is not defined",
    ].some((s) => t.includes(s))
  )
    return !0;
  const i = e.filename || "";
  if (i.startsWith("blob:")) {
    const s = e.error?.stack || "";
    if (["gtm.js", "fbevents.js", "analytics.js", "googletagmanager"].some((a) => s.includes(a))) return !0;
  }
  if (
    [
      "accounts.skilljar.com",
      "skilljar.com",
      "googletagmanager.com",
      "google-analytics.com",
      "facebook.com",
      "fbcdn.net",
      "doubleclick.net",
      "google.com",
      "googleapis.com",
      "gstatic.com",
      "cloudflare.com",
      "jsdelivr.net",
      "unpkg.com",
      "cdnjs.cloudflare.com",
      "chrome-extension://",
      "moz-extension://",
      "safari-extension://",
      "extension://",
    ].some((s) => i.includes(s)) ||
    (i &&
      !["shopify.com", "cdn.shopify.com", "localhost", "127.0.0.1", ".myshopify.dev"].some((a) =>
        i.includes(a),
      ) &&
      !i.startsWith("data:") &&
      !i.startsWith("blob:"))
  )
    return !0;
  const r = e.error?.stack || "";
  return ["gtm.js", "fbevents.js", "analytics.js", "skilljar", "chrome-extension:", "moz-extension:"].some(
    (s) => r.includes(s),
  );
}
var H = ((e) => (
    (e.Click = "website_click_event/1.5"),
    (e.ComponentViewability = "website_component_viewability_event/1.5"),
    (e.Error = "website_error_event/1.1"),
    (e.Form = "website_form_event/2.0"),
    (e.PageView = "website_client_page_view/2.14"),
    (e.ServerPageView = "website_server_page_view/3.0"),
    (e.ServerRequest = "website_server_request/2.2"),
    (e.Scroll = "website_scroll_event/1.0"),
    (e.UserSession = "website_user_session/2.5"),
    (e.UserSessionMarketing = "website_user_session_marketing/1.1"),
    (e.VisibilityChange = "website_visibility_change_event/1.0"),
    (e.WebVitals = "website_web_vitals_event/2.1"),
    (e.PrivacySignal = "website_privacy_signal/1.2"),
    (e.DenormalizedWebsiteEvent = "dux_website_events/1.8"),
    e
  ))(H || {}),
  Je = ((e) => (
    (e.Active = "active"), (e.GranularCompact = "granularCompact"), (e.Headless = "headless"), e
  ))(Je || {}),
  Qe = ((e) => ((e.Merchant = "merchant"), (e.ShopApp = "shop_app"), e))(Qe || {}),
  pe = ((e) => (
    (e.PageView = "page_view"),
    (e.Click = "click"),
    (e.Scroll = "scroll"),
    (e.Form = "form"),
    (e.Error = "error"),
    (e.ComponentViewability = "component_viewability"),
    (e.VisibilityChange = "visibility_change"),
    (e.WebVitals = "web_vitals"),
    (e.PrivacySignal = "privacy_signal"),
    (e.HumanSignal = "human_signal"),
    (e.DeviceSignal = "device_signal"),
    (e.ServerRequest = "server_request"),
    e
  ))(pe || {});
function et(e, t) {
  let n, i;
  return (...o) => (
    n && clearTimeout(n),
    i && cancelAnimationFrame(i),
    new Promise((r) => {
      t || typeof requestAnimationFrame > "u"
        ? (n = setTimeout(() => {
            const s = e(...o);
            r(s);
          }, t))
        : (i = requestAnimationFrame(() => {
            const s = e(...o);
            r(s);
          }));
    })
  );
}
var kt = "/.well-known/collect",
  St = [
    "AT",
    "BE",
    "BG",
    "HR",
    "CY",
    "CZ",
    "DK",
    "EE",
    "FI",
    "FR",
    "DE",
    "GR",
    "HU",
    "IS",
    "IE",
    "IT",
    "LV",
    "LI",
    "LT",
    "LU",
    "MT",
    "NL",
    "NO",
    "PL",
    "PT",
    "RO",
    "SI",
    "SK",
    "ES",
    "SE",
    "CH",
    "GB",
  ],
  Ct = ["AU"],
  _t = ["CN"],
  Et = "default-application",
  xt = new Set(["gdpr"]),
  ge = (e, t) => {
    const n = e?.toUpperCase();
    return n && St.includes(n)
      ? "gdpr"
      : n && Ct.includes(n)
        ? "au_privacy_act"
        : n && _t.includes(n)
          ? "pipl"
          : n === "US" && t?.toUpperCase() === "CA"
            ? "ccpa"
            : "none";
  },
  we = (e, t = {}) => (e === void 0 ? !1 : xt.has(e) ? !0 : (t.consentZones?.includes(e) ?? !1)),
  At = ({ complianceZone: e, enableActiveConsent: t, enableSecGpc: n, consentedSaleOfData: i }) =>
    e === "pipl" && t !== !1 ? i === "1" : n !== !0 && i !== "-1",
  Nt = [".spin.dev", ".workers.dev", ".myshopify.io", ".myshopify.dev", ".myshopify.com"],
  Dt = [".com", ".com.br", ".co.uk", ".dev", ".engineering", ".io", ".ai", ".app", ".org", ".cn"],
  It = [...Dt].sort((e, t) => t.length - e.length),
  Lt = (e) => /^[a-z][a-z\d+.-]*:\/\//i.test(e),
  Ot = (e) => {
    const t = e?.trim();
    if (!(!t || t === "null"))
      try {
        const n = Lt(t) ? t : `https://${t}`,
          { hostname: i } = new URL(n);
        return i || void 0;
      } catch {}
  },
  F = (e) => {
    const t = Ot(e);
    if (!t || Nt.some((o) => t.endsWith(o))) return;
    const i = It.find((o) => t.endsWith(o));
    if (i) {
      const r = t.slice(0, -i.length).split(".").pop();
      return r ? `.${r}${i}` : void 0;
    }
    if (t.startsWith("www.")) return `.${t.split("www.").pop()}`;
  },
  I = (e) => {
    if (!(typeof document > "u"))
      try {
        const t = new RegExp(`(?:^|; )${e}=([^;]*)(?:$|;| )`),
          n = document.cookie.match(t);
        return n ? decodeURIComponent(n[1]) : "";
      } catch {
        return "";
      }
  },
  R = (e, t, n) => {
    if (typeof document > "u") {
      console.warn(
        "setCookie should only be called client-side",
        new Error("setCookie called outside of browser context."),
      );
      return;
    }
    let i = `${encodeURIComponent(e)}=${encodeURIComponent(t)}`;
    n.maxage &&
      (n.maxage < 0 ? (n.expires = new Date(0)) : (n.expires = new Date(new Date().getTime() + n.maxage))),
      n.path && (i += `; path=${n.path}`),
      n.domain && (i += `; domain=${n.domain}`),
      n.expires && (i += `; expires=${n.expires.toUTCString()}`),
      n.samesite ? (i += `; SameSite=${n.samesite}`) : (i += "; SameSite=lax"),
      n.secure && !window.E2E && (i += "; secure");
    try {
      document.cookie = i;
    } catch {}
  };
function Mt(e) {
  return decodeURIComponent(
    atob(e)
      .split("")
      .map((t) => `%${`00${t.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join(""),
  );
}
function Rt(e) {
  return typeof Buffer < "u" ? Buffer.from(e, "base64").toString() : Mt(e);
}
var ye = () => {
    const e = I("privacy_signal");
    if (e)
      try {
        return JSON.parse(Rt(e));
      } catch (t) {
        console.error(`Invalid privacy settings, ${t}`), Pt();
      }
  },
  Pt = () => {
    const e = F(window.location.href);
    R("privacy_signal", "", { maxage: 0, path: "../shop/", secure: !0, samesite: "lax", domain: e });
  },
  Oe = 0,
  O = {};
function v(...[e, t, n = window, i]) {
  Oe += 1;
  const o = Oe.toString();
  return (
    n.addEventListener(e, t, i),
    (O[o] = { listenerId: o, eventType: e, context: n, callback: t, options: i }),
    o
  );
}
function N(e, t) {
  if (typeof e == "object") e.forEach((n) => N(n));
  else {
    const n = e.toString();
    if (O[n]) {
      const { context: i, eventType: o, callback: r, options: s } = O[n];
      i.removeEventListener(o, r, s), delete O[n];
    } else
      Object.keys(O)
        .filter((i) => O[i].eventType === n && !0)
        .forEach((i) => N(i));
  }
}
function ve(...[e, t, n = window, i]) {
  const o = v(
    e,
    (...r) => {
      t.apply(n, r), N(o);
    },
    n,
    i,
  );
  return o;
}
function tt(e) {
  const t = [],
    n =
      (i, o) =>
      (...r) => {
        t.forEach((s) => N(s)), i.apply(o, r);
      };
  return (
    e.forEach(([i, o, r = window, s]) => {
      t.push(v(i, n(o, r), r, s));
    }),
    t
  );
}
const g = [];
for (let e = 0; e < 256; ++e) g.push((e + 256).toString(16).slice(1));
function Vt(e, t = 0) {
  return (
    g[e[t + 0]] +
    g[e[t + 1]] +
    g[e[t + 2]] +
    g[e[t + 3]] +
    "-" +
    g[e[t + 4]] +
    g[e[t + 5]] +
    "-" +
    g[e[t + 6]] +
    g[e[t + 7]] +
    "-" +
    g[e[t + 8]] +
    g[e[t + 9]] +
    "-" +
    g[e[t + 10]] +
    g[e[t + 11]] +
    g[e[t + 12]] +
    g[e[t + 13]] +
    g[e[t + 14]] +
    g[e[t + 15]]
  ).toLowerCase();
}
const Bt = new Uint8Array(16);
function Ut() {
  return crypto.getRandomValues(Bt);
}
function L(e, t, n) {
  return crypto.randomUUID ? crypto.randomUUID() : Ht(e);
}
function Ht(e, t, n) {
  e = e || {};
  const i = e.random ?? e.rng?.() ?? Ut();
  if (i.length < 16) throw new Error("Random bytes length must be >= 16");
  return (i[6] = (i[6] & 15) | 64), (i[8] = (i[8] & 63) | 128), Vt(i);
}
var Ft = "data-dux-initialized",
  nt = "dux_buffer",
  zt = "dux_queue",
  de =
    'a, button, [data-click-enabled], input, select, textarea, [role="button"], [role="link"], [role="radio"], [role="checkbox"], [role="switch"], [role="combobox"], [role="listbox"], [role="textbox"]',
  Wt = '[data-click-disabled], [data-click-enabled="false"]',
  $t = "[data-event-category], [data-ga-event], [data-ga-category]",
  Me = {
    default: {
      au: "en-AU",
      be: "nl-BE",
      "be-de": "de-BE",
      "be-en": "en-BE",
      "be-fr": "fr-BE",
      br: "pt-BR",
      ca: "en-CA",
      "ca-fr": "fr-CA",
      cn: "zh-CN",
      co: "es-CO",
      default: "en",
      dk: "da",
      "dk-en": "en-DK",
      "es-es": "es-ES",
      hk: "zh-HK",
      "hk-en": "en-HK",
      id: "en-ID",
      ie: "en-IE",
      in: "en-IN",
      jp: "ja",
      kr: "ko",
      mx: "es-MX",
      my: "en-MY",
      ng: "en-NG",
      "no-en": "en-NO",
      nz: "en-NZ",
      ph: "en-PH",
      "pt-pt": "pt-PT",
      "pt-br": "pt-BR",
      se: "sv",
      sg: "en-SG",
      tw: "zh-TW",
      uk: "en-GB",
      vn: "vi",
      za: "en-ZA",
      zh: "zh-CN",
      "zh-cn": "zh-CN",
      "zh-tw": "zh-TW",
    },
    "www.shopify.ca": "en-CA",
    "www.shopify.co.uk": "en-GB",
    "www.shopify.in": "en-IN",
    "www.shopify.com.au": "en-AU",
    "www.shopify.co.id": "en-ID",
    "www.shopify.com.br": "pt-BR",
    "www.shopify.co.nz": "en-NZ",
    "www.shopify.co.za": "en-ZA",
    "www.shopify.com.ng": "en",
    "www.shopify.com.ph": "en-PH",
    "www.shopify.com.sg": "en-SG",
    "www.shopify.hk": "zh-HK",
    "en.shopify.hk": "en-HK",
    "www.shopify.ie": "en-IE",
    "en.shopify.be": "en-BE",
    "www.shopify.my": "en-MY",
    "en.shopify.dk": "en-DK",
    "en.shopify.no": "en-NO",
    "es.shopify.com": "es",
    "www.shopify.es": "es-ES",
    "www.shopify.com.co": "es-CO",
    "www.shopify.com.mx": "es-MX",
    "www.shopify.fr": "fr",
    "fr.shopify.ca": "fr-CA",
    "fr.shopify.be": "fr-BE",
    "www.shopify.nl": "nl",
    "www.shopify.be": "nl-BE",
    "www.shopify.jp": "ja",
    "www.shopify.tw": "zh-TW",
    "www.shopify.de": "de",
    "de.shopify.be": "de-BE",
    "it.shopify.com": "it",
    "www.shopify.dk": "da",
    "www.shopify.co.kr": "ko",
    "www.shopify.se": "sv",
    "zh.shopify.com": "zh-CN",
    "www.shopify.net.vn": "vi",
    "www.shopify.cn": "zh-CN",
  },
  jt = {
    ar: !0,
    cs: !0,
    da: !0,
    de: !0,
    en: !0,
    es: !0,
    fi: !0,
    fr: !0,
    hi: !0,
    it: !0,
    ja: !0,
    ko: !0,
    ms: !0,
    nb: !0,
    nl: !0,
    pl: !0,
    ru: !0,
    sv: !0,
    th: !0,
    tr: !0,
    vi: !0,
  },
  it = "home",
  qt = 0.2,
  Gt = 0,
  be = "/__dux",
  Zt = kt,
  Kt = "dux_device_signal_queue",
  Xt = "dux_proto_queue";
function Yt(e) {
  return e instanceof ShadowRoot;
}
function* Te(e) {
  let t = e.parentNode;
  for (; t; )
    t instanceof HTMLElement && (yield t), !t.parentNode && Yt(t) ? (t = t.host) : (t = t.parentNode);
}
function Jt(e) {
  const t = e.composedPath?.();
  return !!t?.length && t[0] !== e.target;
}
function Qt(e) {
  const t = e.composedPath?.();
  if (!t?.length) return e.target;
  for (const n of t) {
    if (n instanceof ShadowRoot) continue;
    if (n === document || n === window) break;
    if (!(n instanceof HTMLElement)) continue;
    if (n.matches(de)) return n;
    const i = n.closest(de);
    if (i instanceof HTMLElement) return i;
  }
  return e.target;
}
var en = (() => {
    try {
      return new RegExp("[^\\p{L}\\p{N}-]+", "gu");
    } catch {
      return /[^a-zA-Z0-9-]+/g;
    }
  })(),
  tn = (e) =>
    e
      .toLowerCase()
      .replace(/^data-|^-/, "")
      .replace(/-./g, (t) => (t[1] || "").toUpperCase())
      .replace(/-/g, ""),
  Y = (e) => {
    let t = e;
    try {
      t = decodeURIComponent(e);
    } catch {}
    return (
      (t = t.replace(/[A-Z]{2,}/g, (n) => `${n.charAt(0)}${n.substring(1).toLowerCase()}`)),
      (t = t.charAt(0).toLowerCase() + t.substring(1)),
      (t = t.replace(/[\s_:./,\\\n|]/g, "-")),
      (t = t.replace(/[A-Z]/g, (n) => `-${n.toLowerCase()}`)),
      (t = t.replace(en, "-")),
      (t = t.replace(/-{2,}/g, "-")),
      (t = t.replace(/(^-)|(-$)/g, "")),
      (t = t.substring(0, 50)),
      t
    );
  },
  nn = (e) => {
    if (!e || !(e instanceof HTMLElement)) return !1;
    if (
      getComputedStyle(e)
        .getPropertyValue("position")
        .match(/fixed|sticky/i)
    )
      return !0;
    for (const t of Te(e)) {
      if (t.nodeName.toLowerCase() === "body") break;
      if (
        getComputedStyle(t)
          .getPropertyValue("position")
          .match(/fixed|sticky/i)
      )
        return !0;
    }
    return !1;
  },
  on = (e) => {
    const t =
      e.dataset.sectionName ||
      e.dataset.componentName ||
      e.getAttribute("name") ||
      e.getAttribute("id") ||
      e.getAttribute("aria-label") ||
      e.innerText ||
      e.textContent ||
      `unhandled-${e.tagName}`;
    return Y(t);
  },
  rn = (e) => {
    try {
      return new URL(e, document.baseURI).origin.match(/shopify.|myshopify.io|spin.dev/);
    } catch (t) {
      return console.error("isShopifyLink", t), !1;
    }
  },
  sn = (e) => {
    const t = e.tagName.toLowerCase();
    switch (t) {
      case "button":
        return "button_click";
      case "a":
        return rn(e.getAttribute("href") || "") ? "link_click" : "outbound_link_click";
      case "select":
        return "dropdown_click";
      case "option":
        return "dropdown_select";
      case "input":
        return e.type === "button" ? "button_click" : "input_select";
      case "img":
        return "image_click";
      default: {
        const n = e.getAttribute("role");
        return n === "button"
          ? "button_click"
          : n === "link"
            ? "link_click"
            : n === "combobox" || n === "listbox"
              ? "dropdown_click"
              : n === "switch" || n === "checkbox" || n === "radio" || n === "textbox"
                ? "input_select"
                : `${t}_click`;
      }
    }
  },
  ie = (e, t) => {
    const n = {};
    for (const i in e)
      if (i.startsWith(t)) {
        const o = i.substring(t.length);
        if (o) {
          const r = o.charAt(0).toLowerCase() + o.substring(1) || "";
          r && (n[r] = e[i] || "");
        }
      }
    return n;
  },
  an = "data-component-extra-",
  cn = (e, t = an) => {
    const n = {};
    let i;
    const o = tn(t);
    let r = !1;
    if (document && typeof document.evaluate == "function") {
      const s = document.evaluate(
        `ancestor::*[@*[starts-with(name(), ${t})]]`,
        e,
        null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE,
        null,
      );
      for (; (i = s.iterateNext()); ) (r = !0), Object.assign(n, ie(i.dataset, o));
    }
    if (!r) for (const s of Te(e)) Object.assign(n, ie(s.dataset, o));
    return Object.assign(n, ie(e.dataset, o)), n;
  },
  ln = (e, t) => {
    let n;
    const i = [];
    if (document && typeof document.evaluate != "function") return i;
    const o = document.evaluate(
      `ancestor::*[@${t}[1]]`,
      e,
      null,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      null,
    );
    for (; (n = o.iterateNext()); ) {
      const s = n.getAttribute(t);
      s && i.push({ node: n, attr: t, attrVal: s });
    }
    if (i.length > 0) return i;
    const r = [];
    for (const s of Te(e)) {
      const a = s.getAttribute(t);
      a && r.unshift({ node: s, attr: t, attrVal: a });
    }
    return r;
  },
  ot = (e, t = ["data-section-name", "data-component-name", "id"]) => {
    let n, i;
    for (i of t) if (((n = ln(e, i)), n.length > 0)) break;
    return n;
  },
  dn = (e, t) => {
    const i = (ot(e, t) || []).pop(),
      { attrVal: o = "" } = i || {},
      r = un(i);
    return { name: Y(o || "unhandled-parent-section"), index: r };
  },
  un = (e) => {
    if (!e) return 0;
    const { attr: t, attrVal: n, node: i } = e;
    try {
      const o = document.querySelectorAll(`[${t}="${CSS.escape(n)}"]`);
      return o.length <= 1 ? 0 : Array.from(o).findIndex((r) => r.isEqualNode(i));
    } catch {
      return 0;
    }
  },
  J = (e, t = !0, n) => {
    if (!e) return {};
    const i = on(e),
      o = sn(e),
      { name: r, index: s } = dn(e),
      a = ot(e, n) || [],
      c = [],
      l = cn(e);
    a.forEach(({ attrVal: u }) => {
      c.push(Y(u));
    }),
      c.push(i);
    const d = c.join("|").concat(t ? `:${Y(e.tagName)}` : "");
    return {
      elementName: i,
      elementType: o,
      sectionName: r,
      sectionIndex: s,
      componentTree: d,
      extraMetadata: l,
    };
  },
  fn = (e) => e.replace(/[A-Z]/g, (t) => `_${t.toLocaleLowerCase()}`),
  Q = (e, t = []) => {
    const n = {};
    for (const i in e)
      if (Object.prototype.hasOwnProperty.call(e, i)) {
        const o = e[i];
        if (t.indexOf(i) >= 0) n[i] = o;
        else {
          const r = fn(i);
          n[r] = o;
        }
      }
    return n;
  },
  Re = 0,
  X = {},
  D = {},
  ke = (e, t) => {
    const n = [];
    return (
      Object.keys(D).forEach((i) => {
        const { dom: o, threshold: r } = D[i] || {};
        o && o === e && r === t && n.push(D[i]);
      }),
      n
    );
  },
  rt = () =>
    typeof window < "u" &&
    window.IntersectionObserver &&
    "intersectionRatio" in window.IntersectionObserverEntry?.prototype,
  hn = (e) => {
    if (!e) return;
    e.timer && clearTimeout(e.timer);
    const { dom: t, id: n, observer: i, threshold: o } = e;
    delete D[n],
      ke(t, o).length || i.unobserve(t),
      Object.values(D).every((s) => s.observer !== i) && delete X[o];
  },
  mn = ({ threshold: e }) => (
    X[e] || (X[e] = new IntersectionObserver(wn(e), { root: null, threshold: e })), X[e]
  ),
  pn = ({ dom: e, getCurrentState: t, options: n, clientMessageId: i = L() }) => {
    if (!e || !rt()) return;
    Re += 1;
    const o = Re.toString(),
      r = n?.threshold || qt,
      s = n?.duration || Gt,
      a = mn({ threshold: r }),
      c = {
        id: o,
        dom: e,
        observer: a,
        threshold: r,
        duration: s,
        clientMessageId: i,
        extraMetadata: n?.extraMetadata || {},
        getCurrentState: t,
      };
    return ke(e, r).length || a.observe(e), (D[o] = c), c;
  },
  gn = ({ observation: e, store: t, trackers: n }) => {
    const { dom: i, threshold: o, duration: r } = e,
      { componentTree: s, extraMetadata: a, elementName: c, sectionName: l, sectionIndex: d } = J(i, !1),
      u = { ...a, ...e.extraMetadata },
      f = Math.round(window.scrollY + i.getBoundingClientRect().top),
      m = Math.round(window.scrollX + i.getBoundingClientRect().left),
      h = JSON.stringify(u);
    if (t.pageViewToken && n.denormalizedDux) {
      const p = {
        schemaId: "dux_website_events/1.8",
        payload: {
          eventType: "component_viewability",
          pageViewToken: t.pageViewToken,
          componentViewabilityComponentTree: s,
          componentViewabilityTargetName: c,
          componentViewabilityParentName: l,
          componentViewabilityParentIndex: d,
          componentViewabilityWidth: i.clientWidth,
          componentViewabilityHeight: i.clientHeight,
          componentViewabilityVerticalPosition: f,
          componentViewabilityHorizontalPosition: m,
          componentViewabilityDuration: r,
          componentViewabilityThreshold: o,
          componentViewabilityExtraMetadata: h,
        },
      };
      n.denormalizedDux(p, { clientMessageId: e.clientMessageId });
    }
    n.gtm &&
      n.gtm({
        event: "component_viewability",
        eventType: c,
        eventLocation: s,
        extraMetadata: JSON.stringify(Q(u)),
      });
  },
  wn = (e) => (t) => {
    t.forEach((n) => {
      const i = n?.target;
      ke(i, e).forEach(async (r) => {
        const { store: s, trackers: a, sidecarCallback: c } = r.getCurrentState(),
          l = {
            dom: i,
            clientMessageId: r.clientMessageId,
            parentSchemaId: "website_component_viewability_event/1.5",
            store: s,
            track: a,
            isIntersecting: n.isIntersecting,
          },
          d = () => {
            gn({ observation: r, store: s, trackers: a }), c?.(l), hn(r);
          };
        n.isIntersecting
          ? r.duration > 0
            ? (r.timer = setTimeout(() => {
                d();
              }, r.duration))
            : d()
          : r.timer && clearTimeout(r.timer);
      });
    });
  },
  yn = (e, t) => {
    rt() &&
      (document
        .querySelectorAll("[data-viewable-component]")
        .forEach((n) => pn({ dom: n, getCurrentState: () => ({ store: t, trackers: e }) })),
      Object.values(D).forEach(({ observer: n, dom: i }) => {
        n.observe(i);
      }));
  },
  vn = { debug: !0, enableActiveConsent: !1, isReady: !1, softNavigation: !1, service: Et },
  bn = ({ track: e, store: t }) => {
    if ((location.toString(), t.pageViewToken && e.denormalizedDux)) {
      const n = {
        schemaId: "dux_website_events/1.8",
        payload: { eventType: "page_view", pageViewToken: t.pageViewToken },
      };
      e.denormalizedDux(n, { flush: !0 });
    }
  },
  Tn = (e, t, n) => {
    bn({ track: e, store: t });
  };
let st = -1;
const P = (e) => {
    addEventListener(
      "pageshow",
      (t) => {
        t.persisted && ((st = t.timeStamp), e(t));
      },
      !0,
    );
  },
  C = (e, t, n, i) => {
    let o, r;
    return (s) => {
      t.value >= 0 &&
        (s || i) &&
        ((r = t.value - (o ?? 0)),
        (r || o === void 0) &&
          ((o = t.value),
          (t.delta = r),
          (t.rating = ((a, c) => (a > c[1] ? "poor" : a > c[0] ? "needs-improvement" : "good"))(t.value, n)),
          e(t)));
    };
  },
  Se = (e) => {
    requestAnimationFrame(() => requestAnimationFrame(e));
  },
  Ce = () => {
    const e = performance.getEntriesByType("navigation")[0];
    if (e && e.responseStart > 0 && e.responseStart < performance.now()) return e;
  },
  z = () => Ce()?.activationStart ?? 0,
  _ = (e, t = -1) => {
    const n = Ce();
    let i = "navigate";
    return (
      st >= 0
        ? (i = "back-forward-cache")
        : n &&
          (document.prerendering || z() > 0
            ? (i = "prerender")
            : document.wasDiscarded
              ? (i = "restore")
              : n.type && (i = n.type.replace(/_/g, "-"))),
      {
        name: e,
        value: t,
        rating: "good",
        delta: 0,
        entries: [],
        id: `v5-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`,
        navigationType: i,
      }
    );
  },
  oe = new WeakMap();
function _e(e, t) {
  return oe.get(e) || oe.set(e, new t()), oe.get(e);
}
class kn {
  t;
  i = 0;
  o = [];
  h(t) {
    if (t.hadRecentInput) return;
    const n = this.o[0],
      i = this.o.at(-1);
    this.i && n && i && t.startTime - i.startTime < 1e3 && t.startTime - n.startTime < 5e3
      ? ((this.i += t.value), this.o.push(t))
      : ((this.i = t.value), (this.o = [t])),
      this.t?.(t);
  }
}
const W = (e, t, n = {}) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        const i = new PerformanceObserver((o) => {
          queueMicrotask(() => {
            t(o.getEntries());
          });
        });
        return i.observe({ type: e, buffered: !0, ...n }), i;
      }
    } catch {}
  },
  Ee = (e) => {
    let t = !1;
    return () => {
      t || (e(), (t = !0));
    };
  };
let M = -1;
const at = new Set(),
  Pe = () => (document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0),
  ue = (e) => {
    if (document.visibilityState === "hidden") {
      if (e.type === "visibilitychange") for (const t of at) t();
      isFinite(M) ||
        ((M = e.type === "visibilitychange" ? e.timeStamp : 0),
        removeEventListener("prerenderingchange", ue, !0));
    }
  },
  ee = () => {
    if (M < 0) {
      const e = z();
      (M =
        (document.prerendering
          ? void 0
          : globalThis.performance
              .getEntriesByType("visibility-state")
              .find((n) => n.name === "hidden" && n.startTime >= e)?.startTime) ?? Pe()),
        addEventListener("visibilitychange", ue, !0),
        addEventListener("prerenderingchange", ue, !0),
        P(() => {
          setTimeout(() => {
            M = Pe();
          });
        });
    }
    return {
      get firstHiddenTime() {
        return M;
      },
      onHidden(e) {
        at.add(e);
      },
    };
  },
  te = (e) => {
    document.prerendering ? addEventListener("prerenderingchange", e, !0) : e();
  },
  Ve = [1800, 3e3],
  ct = (e, t = {}) => {
    te(() => {
      const n = ee();
      let i,
        o = _("FCP");
      const r = W("paint", (s) => {
        for (const a of s)
          a.name === "first-contentful-paint" &&
            (r.disconnect(),
            a.startTime < n.firstHiddenTime &&
              ((o.value = Math.max(a.startTime - z(), 0)), o.entries.push(a), i(!0)));
      });
      r &&
        ((i = C(e, o, Ve, t.reportAllChanges)),
        P((s) => {
          (o = _("FCP")),
            (i = C(e, o, Ve, t.reportAllChanges)),
            Se(() => {
              (o.value = performance.now() - s.timeStamp), i(!0);
            });
        }));
    });
  },
  Be = [0.1, 0.25],
  Sn = (e, t = {}) => {
    const n = ee();
    ct(
      Ee(() => {
        let i,
          o = _("CLS", 0);
        const r = _e(t, kn),
          s = (c) => {
            for (const l of c) r.h(l);
            r.i > o.value && ((o.value = r.i), (o.entries = r.o), i());
          },
          a = W("layout-shift", s);
        a &&
          ((i = C(e, o, Be, t.reportAllChanges)),
          n.onHidden(() => {
            s(a.takeRecords()), i(!0);
          }),
          P(() => {
            (r.i = 0), (o = _("CLS", 0)), (i = C(e, o, Be, t.reportAllChanges)), Se(i);
          }),
          setTimeout(i));
      }),
    );
  };
let lt = 0,
  re = 1 / 0,
  $ = 0;
const Cn = (e) => {
  for (const t of e)
    t.interactionId &&
      ((re = Math.min(re, t.interactionId)),
      ($ = Math.max($, t.interactionId)),
      (lt = $ ? ($ - re) / 7 + 1 : 0));
};
let fe;
const Ue = () => (fe ? lt : (performance.interactionCount ?? 0)),
  _n = () => {
    "interactionCount" in performance || fe || (fe = W("event", Cn, { durationThreshold: 0 }));
  };
let He = 0;
class En {
  l = [];
  u = new Map();
  m;
  p;
  v() {
    (He = Ue()), (this.l.length = 0), this.u.clear();
  }
  T() {
    const t = Math.min(this.l.length - 1, Math.floor((Ue() - He) / 50));
    return this.l[t];
  }
  h(t) {
    if ((this.m?.(t), !t.interactionId && t.entryType !== "first-input")) return;
    const n = this.l.at(-1);
    let i = this.u.get(t.interactionId);
    if (i || this.l.length < 10 || t.duration > n.L) {
      if (
        (i
          ? t.duration > i.L
            ? ((i.entries = [t]), (i.L = t.duration))
            : t.duration === i.L && t.startTime === i.entries[0].startTime && i.entries.push(t)
          : ((i = { id: t.interactionId, entries: [t], L: t.duration }), this.u.set(i.id, i), this.l.push(i)),
        this.l.sort((o, r) => r.L - o.L),
        this.l.length > 10)
      ) {
        const o = this.l.splice(10);
        for (const r of o) this.u.delete(r.id);
      }
      this.p?.(i);
    }
  }
}
const dt = (e) => {
    const t = globalThis.requestIdleCallback || setTimeout,
      n = globalThis.cancelIdleCallback || clearTimeout;
    if (document.visibilityState === "hidden") e();
    else {
      const i = Ee(e);
      let o = -1;
      const r = () => {
        n(o), i();
      };
      addEventListener("visibilitychange", r, { once: !0, capture: !0 }),
        (o = t(() => {
          removeEventListener("visibilitychange", r, { capture: !0 }), i();
        }));
    }
  },
  Fe = [200, 500],
  xn = (e, t = {}) => {
    if (!globalThis.PerformanceEventTiming || !("interactionId" in PerformanceEventTiming.prototype)) return;
    const n = ee();
    te(() => {
      _n();
      let i,
        o = _("INP");
      const r = _e(t, En),
        s = (c) => {
          dt(() => {
            for (const d of c) r.h(d);
            const l = r.T();
            l && l.L !== o.value && ((o.value = l.L), (o.entries = l.entries), i());
          });
        },
        a = W("event", s, { durationThreshold: t.durationThreshold ?? 40 });
      (i = C(e, o, Fe, t.reportAllChanges)),
        a &&
          (a.observe({ type: "first-input", buffered: !0 }),
          n.onHidden(() => {
            s(a.takeRecords()), i(!0);
          }),
          P(() => {
            r.v(), (o = _("INP")), (i = C(e, o, Fe, t.reportAllChanges));
          }));
    });
  };
class An {
  m;
  h(t) {
    this.m?.(t);
  }
}
const ze = [2500, 4e3],
  Nn = (e, t = {}) => {
    te(() => {
      const n = ee();
      let i,
        o = _("LCP");
      const r = _e(t, An),
        s = (c) => {
          t.reportAllChanges || (c = c.slice(-1));
          for (const l of c)
            r.h(l),
              l.startTime < n.firstHiddenTime &&
                ((o.value = Math.max(l.startTime - z(), 0)), (o.entries = [l]), i());
        },
        a = W("largest-contentful-paint", s);
      if (a) {
        i = C(e, o, ze, t.reportAllChanges);
        const c = Ee(() => {
            s(a.takeRecords()), a.disconnect(), i(!0);
          }),
          l = (d) => {
            d.isTrusted && (dt(c), removeEventListener(d.type, l, { capture: !0 }));
          };
        for (const d of ["keydown", "click", "visibilitychange"]) addEventListener(d, l, { capture: !0 });
        P((d) => {
          (o = _("LCP")),
            (i = C(e, o, ze, t.reportAllChanges)),
            Se(() => {
              (o.value = performance.now() - d.timeStamp), i(!0);
            });
        });
      }
    });
  },
  We = [800, 1800],
  he = (e) => {
    document.prerendering
      ? te(() => he(e))
      : document.readyState !== "complete"
        ? addEventListener("load", () => he(e), !0)
        : setTimeout(e);
  },
  Dn = (e, t = {}) => {
    let n = _("TTFB"),
      i = C(e, n, We, t.reportAllChanges);
    he(() => {
      const o = Ce();
      o &&
        ((n.value = Math.max(o.responseStart - z(), 0)),
        (n.entries = [o]),
        i(!0),
        P(() => {
          (n = _("TTFB", 0)), (i = C(e, n, We, t.reportAllChanges)), i(!0);
        }));
    });
  };
var In = (e) => {
    const t = e.hostname,
      n = Me[t] || Me.default;
    if (typeof n == "string") return n;
    const [, i = ""] = e.pathname.toLowerCase().split("../shop/");
    return Object.prototype.hasOwnProperty.call(n, i) ? n[i] : jt[i] === !0 ? i : n.default || "en";
  },
  Ln = (e) => e?.replace(/^\/+/, "").split("-")[0] || "en",
  On = (e) => {
    const t = e.getBoundingClientRect(),
      n = !nn(e);
    return {
      left: Math.round(t.left + (n ? window.scrollX - e.clientLeft : 0)),
      top: Math.round(t.top + (n ? window.scrollY - e.clientTop : 0)),
    };
  },
  Mn = ({
    element: e,
    clientMessageId: t = L(),
    eventType: n,
    track: i,
    store: o,
    options: r = { extraMetadata: {} },
  }) => {
    const s = e.closest(de);
    if (!s || s.matches(Wt)) return;
    const { left: a, top: c } = On(s),
      {
        elementName: l,
        elementType: d,
        sectionName: u,
        sectionIndex: f,
        componentTree: m,
        extraMetadata: h,
      } = J(s),
      p = { ...h, ...r?.extraMetadata },
      b = s.getAttribute("href") || "";
    let w = s.innerText || s.textContent || s.getAttribute("aria-label") || "";
    if (((w = [...w].slice(0, 50).join("")), o.pageViewToken && i.denormalizedDux)) {
      const y = {
        schemaId: "dux_website_events/1.8",
        payload: {
          eventType: "click",
          pageViewToken: o.pageViewToken,
          clickComponentTree: m,
          clickTargetName: l,
          clickParentName: u,
          clickParentIndex: f,
          clickXCoord: a,
          clickYCoord: c,
          clickRecirculation: b,
          clickInnerText: w,
          clickTagType: d,
          clickEventType: n,
          clickExtraMetadata: JSON.stringify(p),
        },
      };
      i.denormalizedDux(y, { clientMessageId: t });
    }
    if (i.gtm) {
      const y = e.closest($t);
      let T;
      y ? (T = y.dataset) : (T = { eventCategory: f ? `${u}-${f}` : u, eventAction: d, eventLabel: l }),
        Object.assign(T, {
          event: d,
          eventName: d,
          eventType: l,
          eventText: w,
          eventLocation: f ? `${u}-${f}` : u,
          eventUrl: b,
          extraMetadata: JSON.stringify(Q(p)),
        }),
        i.gtm(T);
    }
  },
  B,
  Rn = (e) => {
    B &&
      e?.forEach((t) => {
        v("click", B, t, !0), v("contextmenu", B, t, !0), v("auxclick", B, t, !0);
      });
  },
  Pn = (e, t, n) => {
    (B = (i) => {
      const o = Qt(i),
        r = Jt(i) ? "shadow_dom" : "global_listener";
      Mn({
        element: o,
        eventType: i.type,
        track: e,
        store: t,
        options: { extraMetadata: { triggeredBy: r } },
      });
    }),
      Rn(n);
  },
  $e = (e) => (e !== void 0 ? parseInt(e, 10) : void 0),
  Vn = (e) => {
    if (typeof e != "string") return {};
    const t = e?.replace(/[^\w\s\n():/.$-]/g, ""),
      n = t?.match(/(https?:\/\/[^\s:\n]+|\/[^\s:\n]+)/) || [],
      o = t?.match(/:\d+:\d+/)?.[0].split(":");
    return { filename: n[1], lineNumber: $e(o?.[1]), columnNumber: $e(o?.[2]) };
  },
  Bn = (e, t) => {
    ve(
      "error",
      (n) => {
        const i = n?.error?.stack || n?.error?.message || n?.message,
          { filename: o, lineNumber: r, columnNumber: s } = Vn(i) || {},
          a = n.error?.message || n.message || "Unknown error",
          c = n.filename || o,
          l = n.error?.stack,
          d = n.lineno || r,
          u = { url: location.href };
        s && (u.columnNumber = n.colno || s);
        const f = JSON.stringify(u);
        if (t.pageViewToken && e.denormalizedDux) {
          const m = {
            schemaId: "dux_website_events/1.8",
            payload: {
              eventType: "error",
              pageViewToken: t.pageViewToken,
              errorMessage: a,
              errorFileName: c,
              errorStack: l,
              errorLineNumber: d,
              errorExtraMetadata: f,
            },
          };
          e.denormalizedDux(m);
        }
      },
      window,
    );
  },
  Un = (e) => {
    const t = e?.currentTarget instanceof HTMLFormElement ? e?.currentTarget : e?.target,
      n = e?.submitter || e?.target,
      { action: i } = t,
      o = e.defaultPrevented;
    let r = "",
      s;
    o &&
      ((s = Array.from(t.elements).find((l) => l instanceof HTMLInputElement && l.validationMessage)),
      s && (r = `${s.name || s.id}: ${s?.validationMessage}`));
    const { componentTree: a = "" } = J(t, !1),
      { componentTree: c = "" } = J(n, !0);
    return {
      formEl: t,
      submitterEl: n,
      errorEl: s,
      hasError: o,
      action: i,
      message: r,
      componentTree: a,
      submitterComponentTree: c,
    };
  },
  Hn = (e, t) => {
    v(
      "submit",
      (i) => {
        if (!i) return;
        const { hasError: o, message: r, action: s, componentTree: a, submitterComponentTree: c } = Un(i),
          l = o ? "error" : "success";
        if (t.pageViewToken && e.denormalizedDux) {
          const d = {
            schemaId: "dux_website_events/1.8",
            payload: {
              eventType: "form",
              pageViewToken: t.pageViewToken,
              formAction: s,
              formState: l,
              formComponentTree: a,
              formSubmitterComponentTree: c,
              formMessage: r,
            },
          };
          e.denormalizedDux(d);
        }
      },
      document?.body,
      !0,
    );
  },
  j = [],
  q = null,
  ut = (e, t) => {
    let n = 0,
      i = 0,
      o = !1;
    const r = t.pageViewToken;
    j.forEach((u) => N(u)), (j = []), q && N(q), (q = null);
    const s = () => {
        const f =
            (document?.documentElement?.scrollHeight || document?.body?.scrollHeight) -
            document?.documentElement?.clientHeight,
          m = document?.documentElement?.scrollTop || document?.body?.scrollTop,
          h = m ? Math.round((m / f) * 100) : 0;
        return (
          h > n &&
            ((n = h),
            n < 25 ? (i = 0) : n < 50 ? (i = 25) : n < 75 ? (i = 50) : n < 95 ? (i = 75) : (i = 100)),
          i
        );
      },
      a = (u) => {
        const f = s();
        c(f);
      },
      c = (u) => {
        if (!o) {
          if (((o = !0), r && e.denormalizedDux)) {
            const f = {
              schemaId: "dux_website_events/1.8",
              payload: { eventType: "scroll", pageViewToken: r, scrollMaxScrollQuadrant: u },
            };
            e.denormalizedDux?.(f, { flush: !0 });
          }
          e.gtm && e.gtm({ event: "scroll", scrollDepth: u }), j.forEach((f) => N(f));
        }
      },
      l = et(() => {
        const u = s();
        u === 100 && c(u);
      }),
      d = (u) => {
        c(i), ut(e, t);
      };
    j.push(
      v("scroll", l, document),
      v("beforeunload", a, window),
      v("pagehide", a, window),
      v("visibilitychange", a, document),
    ),
      (q = ve("website_client_page_view/2.14", d, document)),
      l();
  },
  je = "hidden",
  se = "visible",
  Fn = (e, t) => {
    let n = new Date().getTime();
    const i = (r) => () => {
        const s = new Date().getTime(),
          a = Math.round(s - n);
        if (t.pageViewToken && e.denormalizedDux) {
          const c = {
            schemaId: "dux_website_events/1.8",
            payload: {
              eventType: "visibility_change",
              pageViewToken: t.pageViewToken,
              visibilityState: r,
              visibilityDuration: a,
            },
          };
          e.denormalizedDux(c, { flush: !0 });
        }
        (n = s), o(r === se ? je : se);
      },
      o = (r) => {
        tt([
          ["visibilitychange", i(r), document],
          [r === se ? "pageshow" : "pagehide", i(r), window, !0],
        ]);
      };
    o(je);
  },
  zn = {
    CLS: "cumulativeLayoutShift",
    CLS_ENTRIES: "cumulativeLayoutShiftEntries",
    FCP: "firstContentfulPaint",
    LCP: "largestContentfulPaint",
    TTFB: "timeToFirstByte",
    INP: "interactionToNextPaint",
    FPS: "framesPerSecond",
  },
  S = (e, t) => {
    if (
      !(typeof e != "number" || typeof t != "number" || !Number.isFinite(e) || !Number.isFinite(t) || t < e)
    )
      return Math.round(t - e);
  },
  Wn = (e) => {
    if (!(typeof e != "number" || !Number.isFinite(e))) return e;
  },
  $n = (e) => {
    if (!e) return {};
    const t = {},
      n = (i, o) => {
        o !== void 0 && o !== "" && (t[i] = o);
      };
    return (
      n("webVitalsNavigationType", e.type),
      n("webVitalsNavigationTimeToFirstByte", S(e.startTime, e.responseStart)),
      n("webVitalsNavigationRedirectCount", Wn(e.redirectCount)),
      n("webVitalsNavigationRedirectDuration", S(e.redirectStart, e.redirectEnd)),
      n("webVitalsNavigationFetchStartDelay", S(e.startTime, e.fetchStart)),
      n("webVitalsNavigationDnsDuration", S(e.domainLookupStart, e.domainLookupEnd)),
      n("webVitalsNavigationConnectDuration", S(e.connectStart, e.connectEnd)),
      n("webVitalsNavigationRequestToFirstByte", S(e.requestStart, e.responseStart)),
      n("webVitalsNavigationResponseDuration", S(e.responseStart, e.responseEnd)),
      e.workerStart > 0 && n("webVitalsNavigationWorkerStartDelay", S(e.startTime, e.workerStart)),
      e.secureConnectionStart > 0 &&
        n("webVitalsNavigationTlsDuration", S(e.secureConnectionStart, e.connectEnd)),
      n("webVitalsNavigationNextHopProtocol", e.nextHopProtocol),
      t
    );
  },
  jn = async (e, t) => {
    const n = t.pageViewToken;
    let i = !1;
    const o = (a) => {
        if (i) return;
        const c = Math.round(0),
          l = performance?.getEntriesByType?.("navigation")?.[0],
          d = S(l?.startTime, l?.domContentLoadedEventEnd),
          u = $n(l);
        if (n && e.denormalizedDux) {
          const f = {
            schemaId: "dux_website_events/1.8",
            payload: {
              eventType: "web_vitals",
              pageViewToken: n,
              ...(c ? { webVitalsFramesPerSecond: c } : {}),
              ...(d === void 0 ? {} : { webVitalsDomContentLoaded: d }),
              ...u,
              ...(a.CLS
                ? {
                    webVitalsCumulativeLayoutShift: Math.round(a.CLS.value),
                    webVitalsCumulativeLayoutShiftEntries: a.CLS.entries.length,
                  }
                : {}),
              ...(a.FCP ? { webVitalsFirstContentfulPaint: Math.round(a.FCP.value) } : {}),
              ...(a.LCP ? { webVitalsLargestContentfulPaint: Math.round(a.LCP.value) } : {}),
              ...(a.TTFB ? { webVitalsTimeToFirstByte: Math.round(a.TTFB.value) } : {}),
              ...(a.INP ? { webVitalsInteractionToNextPaint: Math.round(a.INP.value) } : {}),
            },
          };
          e.denormalizedDux(f, { flush: !0 });
        }
        i = !0;
      },
      r = {},
      s = (a) => {
        a.name in zn && (r[a.name] = a);
      };
    Sn(s, { reportAllChanges: !0 }),
      xn(s, { reportAllChanges: !0 }),
      Nn(s, { reportAllChanges: !0 }),
      Dn(s, { reportAllChanges: !0 }),
      ct(s, { reportAllChanges: !0 }),
      tt([
        ["beforeunload", () => o(r), window, !0],
        ["pagehide", () => o(r), window, !0],
        ["visibilitychange", () => o(r), document, !0],
      ]);
  },
  qn = (e) => e.schemaId !== void 0,
  Gn = "dux_website_events/",
  qe = (e) =>
    e !== null && typeof e == "object" && typeof e.schemaId == "string" && e.schemaId.startsWith(Gn),
  xe = (e) => (document.querySelector('link[rel="canonical"]')?.getAttribute("href") || e).split(/[?#]/)[0],
  Ge = (e) => {
    if (e)
      try {
        const { pathname: t } = new URL(e);
        return (t.split("../shop/").filter(Boolean).join("../shop/") || it).toLowerCase();
      } catch (t) {
        console.error("malformed href", t);
      }
    return "";
  },
  Zn = (e, t) => {
    let n = Ge(document.querySelector('link[rel="alternate"][hreflang="en"]')?.getAttribute("href"));
    return n || (n = Ge(xe(e))), t && n === t.toLowerCase() && (n = it), n;
  },
  G = new Map();
function Kn() {
  try {
    const e = "__dux_storage_test__";
    return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0;
  } catch {
    return !1;
  }
}
var ae = Kn(),
  ce = {
    getItem(e) {
      if (ae)
        try {
          return sessionStorage.getItem(e);
        } catch {
          return G.get(e) ?? null;
        }
      return G.get(e) ?? null;
    },
    setItem(e, t) {
      if (ae)
        try {
          sessionStorage.setItem(e, t);
          return;
        } catch {}
      G.set(e, t);
    },
    removeItem(e) {
      if (ae)
        try {
          sessionStorage.removeItem(e);
          return;
        } catch {}
      G.delete(e);
    },
  },
  Xn = 10,
  Yn = 1024,
  Ae = class {
    constructor(e) {
      (this.store = e),
        (this.inMemoryBuffer = this.createEmptyBuffer()),
        (this.track = this.track.bind(this)),
        (this.flush = this.flush.bind(this)),
        (this.debounceFlush = et(this.flush.bind(this), 250)),
        v("beforeunload", this.flush, window),
        v(
          "visibilitychange",
          () => {
            document.visibilityState === "hidden" && this.flush();
          },
          document,
        ),
        v("pagehide", this.flush, window);
    }
    debounceFlush;
    sessionStorageKey = nt;
    inMemoryBuffer;
    track(e, t) {
      const { flush: n = !1, clientMessageId: i = L(), isEssential: o } = t || {};
      this.refreshLegacySessionToken();
      let r;
      if (
        (qn(e) ? (r = { ...e, metadata: { eventCreatedAtMs: Date.now(), clientMessageId: i } }) : (r = e),
        this.store.enableActiveConsent &&
          this.store.isConsentRequired &&
          !o &&
          this.store.consentState?.consentedAnalytics !== "1")
      ) {
        const s = this.getSessionStorageBuffer();
        this.store.consentState?.consentedAnalytics !== "-1" &&
          s.events.length < Yn &&
          (this.addEventToBuffer(s, r), this.persistToSessionStorage(s));
      } else
        this.addEventToBuffer(this.inMemoryBuffer, r),
          n || this.inMemoryBuffer.events.length >= Xn ? this.flush() : this.debounceFlush();
    }
    flush() {
      if (typeof window > "u") return;
      let e = this.createEmptyBuffer();
      this.store.consentState?.consentedAnalytics === "1" &&
        ((e = this.getSessionStorageBuffer()), ce.removeItem(this.sessionStorageKey));
      const t = this.mergeBuffers(this.inMemoryBuffer, e);
      (this.inMemoryBuffer = this.createEmptyBuffer()), t.events.length && this.send(t.events, t);
    }
    createEmptyBuffer() {
      return { events: [] };
    }
    getSessionStorageBuffer() {
      let e = this.createEmptyBuffer();
      const t = ce.getItem(this.sessionStorageKey);
      if (t)
        try {
          const n = JSON.parse(t);
          Array.isArray(n)
            ? (e = { ...e, events: n })
            : n && Array.isArray(n.events) && (e = { ...this.createEmptyBuffer(), ...n });
        } catch {}
      return e;
    }
    addEventToBuffer(e, t) {
      e.events.push(t);
    }
    mergeBuffers(e, t) {
      return { ...t, ...e, events: [...e.events, ...t.events] };
    }
    persistToSessionStorage(e) {
      ce.setItem(this.sessionStorageKey, JSON.stringify(e));
    }
    createEventMessage(e, t) {
      const n = {
        enableActiveConsent: this.store.enableActiveConsent || !1,
        consentZones: this.store.consentZones,
        enableProtoEventForwarding:
          !!this.store.protoEventSource || this.store.enableProtoEventForwarding || !1,
        protoEventSource: this.store.protoEventSource,
        enableOptOutSaleOfData: this.store.enableOptOutSaleOfData || !1,
        disableLegacyCookies: this.store.disableLegacyCookies || !1,
        protoSessionAppType: this.store.protoSessionAppType,
        enableSessionWrites: this.store.enableSessionWrites,
        events: e,
      };
      return (
        this.store.isStateless &&
          ((n.essentialToken = this.store.essentialToken),
          (n.multiTrackToken = this.store.multiTrackToken),
          (n.sessionToken = this.store.sessionToken)),
        n
      );
    }
    getEndpoint() {
      return this.store.eventHandlerEndpoint || be;
    }
    async send(e, t) {
      const n = this.createEventMessage(e, t),
        i = JSON.stringify(n),
        o = this.getEndpoint();
      try {
        if (this.isSendBeaconAndBlobSupported()) {
          const r = new window.Blob([i], { type: "application/json" });
          if (window.navigator.sendBeacon.bind(window.navigator)(o, r))
            return Promise.resolve({ status: 200 });
        }
      } catch {}
      return fetch(o, {
        method: "POST",
        headers: { "cache-control": "no-store", "content-type": "application/json" },
        credentials: "include",
        body: i,
        keepalive: !0,
      })
        .then((r) => ({ response: r, message: n, status: r.status || 0 }))
        .catch((r) => ({ message: n, status: 0, error: r }));
    }
    isSendBeaconAndBlobSupported() {
      return (
        window &&
        window.navigator &&
        typeof window.navigator.sendBeacon == "function" &&
        typeof window.Blob == "function"
      );
    }
    canLoadAnalytics() {
      return (
        !this.store.enableActiveConsent ||
        !this.store.isConsentRequired ||
        this.store.consentState?.consentedAnalytics === "1"
      );
    }
    refreshLegacySessionToken() {
      if (
        !this.canLoadAnalytics() ||
        (this.store.isStateless && this.store.sessionToken) ||
        this.store.disableLegacyCookies
      )
        return;
      const e = I("_shopify_s");
      if (e) {
        this.store.sessionToken = e;
        return;
      }
      const t = L();
      (this.store.sessionToken = t),
        R("_shopify_s", t, {
          maxage: 1800 * 1e3,
          path: "../shop/",
          secure: !0,
          samesite: "lax",
          domain: F(window.location.href),
        });
    }
  },
  Jn = class extends Ae {
    sessionStorageKey = nt;
  },
  Qn = class {
    constructor(e, t = new Array()) {
      (this.store = e), (this.queue = t), (this.track = this.track.bind(this));
    }
    queueInterval = null;
    track(e, t = {}) {
      const n = {
        project: "brochure",
        service: this.store.service,
        user_token: this.store.multiTrackToken || "",
        event: "event",
        event_non_interaction: "false",
        event_context: t,
        experiment_variation_id: this.store.experimentVariationId || "",
        ...Q(e),
      };
      window.dataLayer
        ? window.dataLayer.push(n)
        : (this.queue.push(n),
          this.queueInterval ||
            (this.queueInterval = setInterval(() => {
              if (window.dataLayer)
                for (this.queueInterval && clearInterval(this.queueInterval); this.queue.length; ) {
                  const i = this.queue.shift();
                  window.dataLayer.push(i);
                }
            }, 100)));
    }
  },
  ft = class extends Ae {
    sessionStorageKey = zt;
    track(e, t) {
      if (qe(e)) {
        const n = e.payload?.pageViewToken;
        n && this.capturePageViewContext(n);
      }
      super.track(e, t);
    }
    capturePageViewContext(e) {
      if (typeof window > "u") return;
      const t = e || this.store.pageViewToken;
      !t ||
        this.inMemoryBuffer.pageContext[t] ||
        (this.inMemoryBuffer.pageContext[t] = this.createPageContext());
    }
    createEmptyBuffer() {
      return { events: [], pageContext: {} };
    }
    addEventToBuffer(e, t) {
      if (qe(t)) {
        const n = t.payload?.pageViewToken;
        n && !e.pageContext[n] && (e.pageContext[n] = this.createPageContext());
      }
      e.events.push(t);
    }
    mergeBuffers(e, t) {
      return { events: [...e.events, ...t.events], pageContext: { ...t.pageContext, ...e.pageContext } };
    }
    createEventMessage(e, t) {
      const n = {
        enableActiveConsent: this.store.enableActiveConsent || !1,
        consentZones: this.store.consentZones,
        enableProtoEventForwarding:
          !!this.store.protoEventSource || this.store.enableProtoEventForwarding || !1,
        protoEventSource: this.store.protoEventSource,
        enableOptOutSaleOfData: this.store.enableOptOutSaleOfData || !1,
        disableLegacyCookies: this.store.disableLegacyCookies || !1,
        protoSessionAppType: this.store.protoSessionAppType,
        enableSessionWrites: this.store.enableSessionWrites,
        eventsV2: { events: e, pageContext: t.pageContext },
      };
      return (
        this.store.isStateless &&
          ((n.essentialToken = this.store.essentialToken),
          (n.multiTrackToken = this.store.multiTrackToken),
          (n.sessionToken = this.store.sessionToken)),
        n
      );
    }
    createPageContext() {
      const e = new URL(window.location.href);
      let t;
      try {
        t = this.store.extraMetadata ? JSON.stringify(Q(this.store.extraMetadata)) : void 0;
      } catch {}
      return {
        pageviewUrl: window.location.href,
        canonicalUrl: xe(e.href),
        referrerUrl: document.referrer || void 0,
        documentTitle: document.title || void 0,
        viewportWidth: Math.round(window.innerWidth) || 0,
        viewportHeight: Math.round(window.innerHeight) || 0,
        screenWidth: screen?.width,
        screenHeight: screen?.height,
        devicePixelRatio: window.devicePixelRatio,
        canvasWidth: Math.round(document.body?.clientWidth) || 0,
        canvasHeight: Math.round(document.body?.clientHeight) || 0,
        userLocale: navigator?.language || "",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        beaconBlocked: !this.isSendBeaconAndBlobSupported(),
        cookiesEnabled: navigator.cookieEnabled,
        pageId: this.store.metadata?.pageId,
        application: this.store.service || this.store.metadata?.page?.environment,
        handle: this.store.handle,
        experimentVariationId:
          this.store.metadata?.page?.experimentVariationId || this.store.experimentVariationId,
        softNavigation: this.store.softNavigation,
        manifestRouteId: this.store.manifestRouteId,
        siteEnvironment: this.store.mode || "production",
        httpStatusCode: this.store.httpStatusCode,
        pageviewExtraMetadata: t,
        version: "8.2.0",
        pageViewEdgeEventCreatedAtMs: Date.now(),
        sessionId: this.store.sessionId,
        identityUuid: this.store.identityUuid,
        userId: this.store.userId,
        shopifyEmployee: this.store.shopifyEmployee,
        shopifyEmployeeId: this.store.shopifyEmployeeId,
        shopId: this.store.shopId,
        organizationId: this.store.organizationId,
        tabToken: this.store.tabToken,
      };
    }
  },
  ei = class extends ft {
    sessionStorageKey = Kt;
    getEndpoint() {
      return this.store.deviceSignalEndpoint || Zt;
    }
  };
function ti() {
  if (typeof window > "u") return;
  const e = {},
    t = typeof document < "u",
    n = window.location?.href;
  n && (e.href = n);
  const i = t ? document.referrer : void 0;
  i && (e.referrer = i);
  const o = t ? document.title : void 0;
  o && (e.documentTitle = o),
    typeof window.innerWidth == "number" && (e.windowInnerWidth = Math.round(window.innerWidth)),
    typeof window.innerHeight == "number" && (e.windowInnerHeight = Math.round(window.innerHeight));
  const r = t ? document.body : null;
  return (
    r && typeof r.clientWidth == "number" && (e.documentBodyWidth = Math.round(r.clientWidth)),
    r && typeof r.clientHeight == "number" && (e.documentBodyHeight = Math.round(r.clientHeight)),
    e
  );
}
var ni = class extends Ae {
  sessionStorageKey = Xt;
  track(e, t, n) {
    const i = ti(),
      o = this.store.pageViewToken,
      r = {
        kind: "protojson",
        event: e,
        ...(i ? { view: i } : {}),
        ...(n ? { hints: n } : {}),
        ...(o ? { pageViewToken: o } : {}),
      };
    super.track(r, t);
  }
};
function ii(e) {
  const t = e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/%/g, ".*");
  return new RegExp(`^${t}$`);
}
var oi = {
    privacy_signal: "essential",
    _shopify_test: "essential",
    _shopify_y: "analytics",
    _shopify_s: "analytics",
  },
  ri = (e, t) => {
    const n = [],
      { approvedCookiesList: i, cookieBlockerDryRunOnly: o } = t,
      r = { ...oi, ...(i || {}) },
      { countryCode: s, regionCode: a, consentZones: c } = t,
      l = ge(s, a);
    if (!we(l, { consentZones: c })) return;
    const u = Object.keys(r)
        .filter((m) => m.includes("%"))
        .map((m) => ({ glob: m, regex: ii(m) })),
      f =
        Object.getOwnPropertyDescriptor(Document.prototype, "cookie") ||
        Object.getOwnPropertyDescriptor(HTMLDocument.prototype, "cookie");
    if (f && f.configurable) {
      const m = (h, p) => {
        if (!h) return "Missing cookie";
        if (!p) return "Cookie not in allow list";
        if (p === "essential") return;
        const { consentedAnalytics: b, consentedFunctional: w, consentedMarketing: y } = ye() || {},
          T = (k) => `Missing ${k} consent`;
        if (
          (p === "analytics" && b !== "1") ||
          (p === "functional" && w !== "1") ||
          (p === "marketing" && y !== "1")
        )
          return T(p);
      };
      Object.defineProperty(Document.prototype || HTMLDocument.prototype, "cookie", {
        get() {
          return f?.get?.call(this);
        },
        set(h) {
          const [, p] = /(.+?)=/g.exec(h) || [];
          if (!p) return;
          let b = r[p];
          if (!b && u.length) {
            const y = u.find(({ regex: T }) => T.test(p));
            y && (b = r[y.glob]);
          }
          const w = m(p, b);
          if (w) {
            if (n.includes(p) || n.length > 20) return;
            if ((n.push(p), o)) {
              const y = JSON.stringify({ cookieName: p, reason: w, ...(o ? { isDryRun: !0 } : {}) }),
                T = "[Client Consent Error] cookie blocked";
              if (t.pageViewToken && e.denormalizedDux) {
                const k = {
                  schemaId: "dux_website_events/1.8",
                  payload: {
                    eventType: "error",
                    pageViewToken: t.pageViewToken,
                    errorMessage: T,
                    errorExtraMetadata: y,
                  },
                };
                e.denormalizedDux(k, { flush: !0 });
              }
            }
          }
          (!w || o) && f?.set?.call(this, h);
        },
        configurable: !0,
      });
    }
  },
  si = class {
    connections = [];
    isChild = !1;
    parentWindow = null;
    parentOrigin = null;
    onContextUpdateCallback;
    mutationObserver;
    messageListener;
    isInitialized = !1;
    messageSequence = 0;
    receivedNonces = new Set();
    MAX_MESSAGE_AGE_MS = 5e3;
    MAX_NONCE_CACHE_SIZE = 100;
    iframeDiscoveryTimeout;
    lastDiscoveryTime = 0;
    DISCOVERY_DEBOUNCE_MS = 500;
    DISCOVERY_RATE_LIMIT_MS = 2e3;
    constructor() {
      (this.isChild = this.isWindowAvailable() && window.self !== window.top), this.setupMessageListener();
    }
    initAsParent(e) {
      this.isChild ||
        this.isInitialized ||
        ((this.isInitialized = !0),
        this.discoverIframes(),
        this.connections.forEach((t) => {
          this.sendMessage(t.window, { type: "DUX_HANDSHAKE_REQUEST", source: "dux" }, t.origin);
        }),
        this.broadcastContext(e),
        this.watchForNewIframes(e));
    }
    initAsChild(e) {
      !this.isChild ||
        this.isInitialized ||
        !this.isWindowAvailable() ||
        ((this.isInitialized = !0),
        (this.onContextUpdateCallback = e),
        window.parent &&
          window.parent !== window.self &&
          ((this.parentWindow = window.parent),
          (this.parentOrigin = this.getParentOrigin()),
          this.sendMessage(
            this.parentWindow,
            { type: "DUX_HANDSHAKE_RESPONSE", source: "dux" },
            this.parentOrigin,
          )));
    }
    broadcastContext(e) {
      this.isChild ||
        this.connections.forEach((t) => {
          t.ready
            ? this.sendMessage(
                t.window,
                { type: "DUX_CONTEXT_UPDATE", payload: this.serializeContext(e), source: "dux" },
                t.origin,
              )
            : (t.pendingUpdates || (t.pendingUpdates = []), t.pendingUpdates.push(e));
        });
    }
    hasIframes() {
      return !this.isChild && this.connections.length > 0;
    }
    isRunningInIframe() {
      return this.isChild;
    }
    cleanup() {
      this.mutationObserver && (this.mutationObserver.disconnect(), (this.mutationObserver = void 0)),
        this.messageListener &&
          this.isWindowAvailable() &&
          (window.removeEventListener("message", this.messageListener), (this.messageListener = void 0)),
        this.iframeDiscoveryTimeout &&
          (clearTimeout(this.iframeDiscoveryTimeout), (this.iframeDiscoveryTimeout = void 0)),
        (this.connections = []),
        this.receivedNonces.clear(),
        (this.onContextUpdateCallback = void 0),
        (this.isInitialized = !1),
        (this.messageSequence = 0);
    }
    isWindowAvailable() {
      return typeof window < "u";
    }
    discoverIframes() {
      if (!this.isWindowAvailable() || typeof document > "u") return;
      document.querySelectorAll("iframe").forEach((t) => {
        if (!this.connections.some((i) => i.iframe === t) && t.contentWindow) {
          const i = this.getIframeOrigin(t);
          this.connections.push({ iframe: t, window: t.contentWindow, ready: !1, origin: i });
        }
      });
    }
    getIframeOrigin(e) {
      if (!this.isWindowAvailable()) return "";
      try {
        const t = e.src;
        if (t) return new URL(t, window.location.href).origin;
      } catch {}
      return window.location.origin;
    }
    getParentOrigin() {
      if (!this.isWindowAvailable() || typeof document > "u") return "";
      try {
        if (document.referrer) return new URL(document.referrer).origin;
      } catch {}
      return window.location.origin;
    }
    isValidOrigin(e) {
      if (
        !this.isWindowAvailable() ||
        !e ||
        e === "null" ||
        e.startsWith("data:") ||
        e.startsWith("javascript:")
      )
        return !1;
      try {
        if (!new URL(e).protocol) return !1;
      } catch {
        return !1;
      }
      return e === window.location.origin
        ? !0
        : this.isChild
          ? e === this.parentOrigin
          : this.connections.some((t) => t.origin === e);
    }
    watchForNewIframes(e) {
      typeof MutationObserver > "u" ||
        typeof document > "u" ||
        ((this.mutationObserver = new MutationObserver((t) => {
          let n = !1;
          if (
            (t.forEach((i) => {
              i.addedNodes.forEach((o) => {
                o.nodeName === "IFRAME" && (n = !0);
              });
            }),
            n)
          ) {
            this.iframeDiscoveryTimeout && clearTimeout(this.iframeDiscoveryTimeout);
            const o = Date.now() - this.lastDiscoveryTime;
            if (o < this.DISCOVERY_RATE_LIMIT_MS) {
              console.warn(`Dux iframe sync: Rate limiting iframe discovery (${o}ms since last)`);
              return;
            }
            this.iframeDiscoveryTimeout = setTimeout(() => {
              (this.lastDiscoveryTime = Date.now()),
                this.discoverIframes(),
                this.connections.forEach((r) => {
                  r.ready ||
                    this.sendMessage(r.window, { type: "DUX_HANDSHAKE_REQUEST", source: "dux" }, r.origin);
                }),
                this.broadcastContext(e);
            }, this.DISCOVERY_DEBOUNCE_MS);
          }
        })),
        this.mutationObserver.observe(document.body, { childList: !0, subtree: !0 }));
    }
    setupMessageListener() {
      this.isWindowAvailable() &&
        window.addEventListener("message", (e) => {
          try {
            const t = e.data;
            if (!t || t.source !== "dux") return;
            if (!this.isValidOrigin(e.origin)) {
              console.warn(`Dux iframe sync: Blocked message from unauthorized origin: ${e.origin}`);
              return;
            }
            if (!this.validateMessage(t)) return;
            if (!e.source || typeof e.source != "object") {
              console.warn("Dux iframe sync: Invalid message source");
              return;
            }
            this.handleMessage(t, e.source);
          } catch (t) {
            console.warn("Dux iframe sync: Error processing message:", t);
          }
        });
    }
    handleMessage(e, t) {
      switch (e.type) {
        case "DUX_HANDSHAKE_REQUEST":
          this.isChild &&
            this.parentWindow === t &&
            this.sendMessage(
              t,
              { type: "DUX_HANDSHAKE_RESPONSE", source: "dux" },
              this.parentOrigin || void 0,
            );
          break;
        case "DUX_HANDSHAKE_RESPONSE":
          if (!this.isChild) {
            const n = this.connections.find((i) => i.window === t);
            n &&
              ((n.ready = !0),
              n.pendingUpdates &&
                n.pendingUpdates.length > 0 &&
                (n.pendingUpdates.forEach((i) => {
                  this.sendMessage(
                    n.window,
                    { type: "DUX_CONTEXT_UPDATE", payload: this.serializeContext(i), source: "dux" },
                    n.origin,
                  );
                }),
                (n.pendingUpdates = [])));
          }
          break;
        case "DUX_CONTEXT_UPDATE":
          this.isChild &&
            e.payload &&
            this.onContextUpdateCallback &&
            this.onContextUpdateCallback(e.payload);
          break;
      }
    }
    sendMessage(e, t, n) {
      if (this.isWindowAvailable())
        try {
          const i = {
              ...t,
              timestamp: Date.now(),
              nonce: this.generateNonce(),
              sequence: this.messageSequence++,
            },
            o = n || window.location.origin;
          e.postMessage(i, o);
        } catch (i) {
          console.warn("Dux iframe sync: Failed to send message to iframe:", i);
        }
    }
    serializeContext(e) {
      const t = Object.create(null);
      return (
        Object.keys(e).forEach((n) => {
          if (n === "__proto__" || n === "constructor" || n === "prototype") {
            console.warn(`Dux: Blocked dangerous property "${n}" in context`);
            return;
          }
          if (!Object.prototype.hasOwnProperty.call(e, n)) return;
          const i = e[n];
          typeof i != "function" && typeof i != "symbol" && typeof i < "u" && (t[n] = i);
        }),
        t
      );
    }
    generateNonce() {
      return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
    }
    validateMessage(e) {
      const t = Date.now() - e.timestamp;
      if (t > this.MAX_MESSAGE_AGE_MS || t < 0)
        return console.warn(`Dux iframe sync: Rejected message with invalid timestamp (age: ${t}ms)`), !1;
      if (this.receivedNonces.has(e.nonce))
        return console.warn("Dux iframe sync: Rejected replayed message (duplicate nonce)"), !1;
      if ((this.receivedNonces.add(e.nonce), this.receivedNonces.size > this.MAX_NONCE_CACHE_SIZE)) {
        const n = this.receivedNonces.values().next().value;
        n && this.receivedNonces.delete(n);
      }
      return !0;
    }
  },
  Z = new si(),
  ai = () => {
    let e = 0;
    if (window && window.performance && typeof window.performance.getEntriesByType == "function") {
      const t = window.performance.getEntriesByType("navigation");
      Array.isArray(t) && t[0] && typeof t[0] == "object" && (e = t[0].responseStatus || 0);
    }
    return !e && document.title.match(/(^|\s)404($|\b)/i) && (e = 404), e;
  },
  K,
  Ze = 0,
  Ke,
  me = async (e) => {
    const {
        eventHandlerEndpoint: t = be,
        protoSessionAppType: n,
        enableSessionWrites: i,
        enableSecGpc: o,
        enableOptOutSaleOfData: r,
        disableLegacyCookies: s,
        essentialToken: a,
        multiTrackToken: c,
        sessionToken: l,
        isStateless: d,
      } = e,
      u = {
        pb: "geo",
        enableActiveConsent: !0,
        protoSessionAppType: n,
        enableSessionWrites: i,
        enableOptOutSaleOfData: r,
        enableSecGpc: o,
        disableLegacyCookies: s,
        ...(d ? { essentialToken: a, multiTrackToken: c, sessionToken: l } : {}),
      },
      f = JSON.stringify(u);
    return (
      await fetch(t, {
        method: "POST",
        headers: { "cache-control": "no-store", "content-type": "application/json" },
        credentials: "include",
        body: f,
      })
    ).json();
  },
  ci = (e, t) => {
    try {
      const n = new URL(e),
        i = new URL(t);
      if (n.protocol !== i.protocol) return !0;
      const o = F(n.href),
        r = F(t);
      return o && r ? o !== r : n.origin !== i.origin;
    } catch {
      return !1;
    }
  },
  li = (e) => {
    if (e.isStateless) return !0;
    try {
      if (window.self !== window.top)
        try {
          if (typeof document.cookie != "string") return !0;
        } catch {
          return !0;
        }
    } catch {
      return !0;
    }
    const t = e.eventHandlerEndpoint || be;
    if (t.startsWith("http") && ci(t, window.location.href)) return !0;
    try {
      R("_shopify_test", "1", { maxage: 5e3, path: "../shop/" });
      const i = I("_shopify_test") === "1";
      if ((R("_shopify_test", "", { maxage: -1, path: "../shop/" }), !i)) return !0;
    } catch {
      return !0;
    }
    return !1;
  },
  di = () =>
    new Promise((e) => {
      document.body ? e() : ve("domcontentloaded", e);
    }),
  ui = async (e, t, n, i, o) => {
    if (K) return K;
    const r = Ze;
    return (
      (K = (async () => {
        if (typeof window > "u") throw new Error("window is undefined");
        (e.isStateless = li(e)), (e.enableOptOutSaleOfData = e.enableOptOutSaleOfData ?? !0);
        const s = e.enableActiveConsent && !e.countryCode,
          a = (e.countryCode === void 0 || e.countryCode === "US") && e.enableSecGpc === void 0,
          c = e.countryCode ? ge(e.countryCode, e.regionCode) : void 0,
          d = ye()?.consentedAnalytics === "1",
          u = e.enableActiveConsent && we(c, { consentZones: e.consentZones }) && !d,
          f = !!e.protoSessionAppType && !u && (!e.multiTrackToken || !e.sessionToken || !e.essentialToken);
        if (s || a || f)
          try {
            const m = { ...e, enableSecGpc: e.enableSecGpc === !0 ? !0 : void 0 },
              h = await me(m);
            Object.assign(e, h);
          } catch (m) {
            console.warn("Dux: unable to fetch server-data", m);
          }
        await di(), fi(e, t, n, i, o);
      })()),
      K
    );
  },
  fi = (e, t, n, i, o) => {
    (Ke = document.body), Ke.setAttribute(Ft, "1");
    const r = ge(e.countryCode, e.regionCode),
      s = Number(e.httpStatusCode || ai()) || void 0,
      a = {
        essentialToken: e.essentialToken,
        multiTrackToken: e.multiTrackToken,
        sessionToken: e.sessionToken,
      },
      c = Object.assign(i || vn, {
        ...e,
        ...hi(e),
        ...le(e.enableActiveConsent, r, e.enableSecGpc, a, e.disableLegacyCookies, e.consentZones),
        complianceZone: r,
        isReady: !0,
        softNavigation: !1,
        httpStatusCode: s,
      });
    t && t(c);
    const l = o || {
      dux: new Jn(c).track,
      denormalizedDux: new ft(c).track,
      deviceSignal: e?.enableLogger?.deviceSignal ? new ei(c).track : void 0,
      gtm: e?.enableGtm ? new Qn(c).track : void 0,
      duxProto: e?.enableLogger?.duxProto ? new ni(c).track : void 0,
    };
    n && l && n(l);
    const d = (h = {}) => {
        t ? t(h, c) : Object.assign(c, h), Z.broadcastContext(c);
      },
      { disableLogger: u, enableLogger: f } = e;
    f?.cookieBlocker && ri(l, c),
      f?.humanSignal &&
        Ie(
          async () => {
            const { initHumanSignalTracking: h } = await import("./humanSignal-NNQJVNCS-CRx7HqeQ.js");
            return { initHumanSignalTracking: h };
          },
          __vite__mapDeps([0, 1, 2]),
        )
          .then(({ initHumanSignalTracking: h }) => {
            h(l, c);
          })
          .catch((h) => {
            console.warn("Dux: unable to initialize human signal tracking", h);
          }),
      f?.deviceSignal &&
        Ie(
          async () => {
            const { initDeviceSignalTracking: h } = await import("./deviceSignal-STBD2VIS-iV_nE33R.js");
            return { initDeviceSignalTracking: h };
          },
          __vite__mapDeps([3, 2, 1]),
        )
          .then(({ initDeviceSignalTracking: h }) => {
            h(l, c);
          })
          .catch((h) => {
            console.warn("Dux: unable to initialize device signal tracking", h);
          }),
      Z.isRunningInIframe()
        ? Z.initAsChild((h) => {
            d(h);
          })
        : Z.initAsParent(c),
      u?.page || Tn(l, c),
      u?.click || Pn(l, c, [document.body]),
      u?.componentViewability || yn(l, c),
      u?.error || Bn(l, c),
      u?.visibility || Fn(l, c),
      u?.webVitals || jn(l, c),
      u?.scroll || ut(l, c),
      u?.form || Hn(l, c);
    const m = (h) => {
      document.dispatchEvent(
        new CustomEvent(h, {
          detail: {
            ...c.consentState,
            isConsentRequired: c.isConsentRequired,
            complianceZone: c.complianceZone,
            countryCode: c.countryCode,
            regionCode: c.regionCode,
            canLoadAnalytics: c.canLoadAnalytics,
            canLoadFunctional: c.canLoadFunctional,
            canLoadMarketing: c.canLoadMarketing,
            optOutSaleOfData: c.optOutSaleOfData,
            enableSecGpc: c.enableSecGpc,
          },
        }),
      );
    };
    v(
      "dux_opt_out_sale_of_data",
      async (h) => {
        const { detail: p } = h,
          { optOutSaleOfData: b } = p || {},
          { enableActiveConsent: w, complianceZone: y, disableLegacyCookies: T, consentZones: k } = c;
        try {
          const E = await me({ ...e, enableSecGpc: b, enableSessionWrites: !0 }),
            yt = {
              essentialToken: E.essentialToken,
              multiTrackToken: E.multiTrackToken,
              sessionToken: E.sessionToken,
            };
          d({ ...E, ...le(w, y, b, yt, T, k) });
        } catch (E) {
          console.warn("Dux: fetchGeoData failed during opt-out sale of data", E);
        }
        m("dux_consent_changed");
      },
      document,
    ),
      v(
        "dux_consent_change_request",
        async (h) => {
          const {
            enableActiveConsent: p,
            complianceZone: b,
            enableSecGpc: w,
            disableLegacyCookies: y,
            consentZones: T,
          } = c;
          try {
            const k = await me({ ...e, enableSecGpc: w, enableSessionWrites: !0 }),
              E = {
                essentialToken: k.essentialToken,
                multiTrackToken: k.multiTrackToken,
                sessionToken: k.sessionToken,
              };
            d({ ...k, ...le(p, b, w, E, y, T) });
          } catch (k) {
            console.warn("Dux: fetchGeoData failed during consent change", k);
          }
          m("dux_consent_changed");
        },
        document,
      ),
      m("dux_consent_ready");
  },
  le = (e, t, n, i, o, r) => {
    const s = we(t, { consentZones: r }),
      a = ye(),
      { consentedAnalytics: c } = a || {},
      l = (p) => e === !1 || s === !1 || (s === !0 && p === "1"),
      d = i?.multiTrackToken || I("_shopify_y"),
      u = i?.sessionToken || I("_shopify_s");
    let f = "",
      m = "";
    if (!e || !s || c === "1") {
      (f = d || L()), (m = u || L());
      const p = F(window.location.href);
      o ||
        (!i?.multiTrackToken &&
          f !== d &&
          R("_shopify_y", f, {
            maxage: 365 * 24 * 60 * 60 * 1e3,
            path: "../shop/",
            secure: !0,
            samesite: "lax",
            domain: p,
          }),
        m !== u &&
          R("_shopify_s", m, { maxage: 1800 * 1e3, path: "../shop/", secure: !0, samesite: "lax", domain: p }));
    }
    const h = !At({
      complianceZone: t,
      enableActiveConsent: e,
      enableSecGpc: n,
      consentedSaleOfData: a?.consentedSaleOfData,
    });
    return {
      consentState: a,
      isConsentRequired: s,
      multiTrackToken: f,
      sessionToken: m,
      isNewUser: !d,
      canLoadAnalytics: l(a?.consentedAnalytics),
      canLoadFunctional: l(a?.consentedFunctional),
      canLoadMarketing: l(a?.consentedMarketing),
      optOutSaleOfData: h,
    };
  },
  hi = (e, t = window.location.href) => {
    const n = e.pageViewToken || L(),
      { metadata: i, extraMetadata: o } = e,
      r = new URL(t),
      s = e.canonicalUrl || xe(t),
      a = e.pathPrefix || In(r) || "",
      c = i?.handle || Zn(t, a),
      l = i?.page?.experimentVariationId || "",
      d = {
        ...i?.page,
        affiliate: i?.page?.affiliate || r.searchParams.get("partner") || I("source") || "",
        experimentVariationId: l,
      };
    return {
      pageViewToken: n,
      url: t,
      pageLanguageCode: Ln(a),
      lastShopDomain: I("last_shop"),
      canonicalUrl: s,
      experimentVariationId: l,
      pathPrefix: a,
      handle: c,
      extraMetadata: o,
      metadata: {
        ...i,
        title: i?.title || document.title,
        language: i?.page?.language || navigator.language || "",
        page: d,
      },
    };
  };
const Ne = (e) => ["shopify.com", "myshopify.com"].some((t) => e === t || e.endsWith(`.${t}`)),
  mi = (e) => ({
    project: "Shopify/editions",
    compliance_zone: e.complianceZone,
    region_code: e.regionCode,
    session_token: e.sessionToken,
  });
let ne = {},
  Xe = !1,
  ht = !1,
  mt,
  A = "",
  x;
const pi = 20,
  U = [];
function De(e) {
  return e.releaseStage === "production";
}
function gi(e) {
  x = e;
  for (const { error: t, metadata: n, config: i } of U.splice(0)) wt(t, n, i);
}
function Ni(e) {
  ne = e;
}
function wi(e) {
  return {
    service: "editions-fall-2026",
    mode: e,
    eventHandlerEndpoint: "https://www.shopify.com/.well-known/dux?v2",
    protoEventSource: "EVENT_APP_EDITIONS",
    protoSessionAppType: Qe.Merchant,
    enableSessionWrites: !0,
    disableLogger: { error: !0, scroll: !0, form: !0 },
    disableLegacyCookies: !0,
    ...(e === "production"
      ? { enableGtm: !0, enableGtmLoader: !0, gtmAccountId: "GTM-KW6FGBL7", onPageView: mi }
      : {}),
    enableActiveConsent: Je.GranularCompact,
    enableDenormalization: !0,
    disableLegacyTracking: !0,
  };
}
function Di(e = ui) {
  if (Xe) return;
  Xe = !0;
  const t = window.location.hostname,
    n = De(ne) && Ne(t) ? "production" : "development";
  mt = e(
    wi(n),
    (i) => {
      A = i.pageViewToken ?? A;
    },
    gi,
  ).catch(Ci);
}
function yi() {
  return De(ne) && Ne(window.location.hostname);
}
function pt(e, t = {}, n = ne) {
  t.severity !== "info" && (t = { ...t, t: Math.round(performance.now()), breadcrumbs: vt() });
  const i = window.location.hostname;
  if (!De(n) || !Ne(i)) {
    (t?.severity === "info" ? console.info : console.error)(
      "[Error] non-production, not tracked with Dux",
      `releaseStage: ${n.releaseStage}, hostname: ${i}`,
      `
Error:`,
      e,
      `
Extra metadata:`,
      t,
    );
    return;
  }
  if (!x) {
    if (ht) {
      console.error("[Error - Dux failed to initialize]", e.message, e);
      return;
    }
    U.length >= pi && U.shift(), U.push({ error: e, metadata: t, config: n });
    return;
  }
  wt(e, t, n);
}
async function Ii(e, t, { width: n = 0, height: i = 0, duration: o = 0, flush: r = !1 } = {}) {
  if (!yi()) {
    console.info("[Telemetry]", e, t);
    return;
  }
  try {
    if ((x || (await mt), !x?.denormalizedDux || !A)) return;
    x.denormalizedDux(
      {
        schemaId: H.DenormalizedWebsiteEvent,
        payload: {
          eventType: pe.ComponentViewability,
          pageViewToken: A,
          componentViewabilityComponentTree: `technical|${e}:canvas`,
          componentViewabilityTargetName: e,
          componentViewabilityParentName: "technical",
          componentViewabilityParentIndex: 0,
          componentViewabilityWidth: n,
          componentViewabilityHeight: i,
          componentViewabilityVerticalPosition: 0,
          componentViewabilityHorizontalPosition: 0,
          componentViewabilityDuration: o,
          componentViewabilityThreshold: 0,
          componentViewabilityExtraMetadata: JSON.stringify({ ...t, appVersion: window.__APP_VERSION__ }),
        },
      },
      { flush: r },
    );
  } catch (s) {
    console.warn("Failed to track telemetry with Dux", s);
  }
}
function vi(e) {
  try {
    return /shopify.|myshopify.io|spin.dev/.test(new URL(e, document.baseURI).origin);
  } catch {
    return !1;
  }
}
function gt(e) {
  const t = e.getAttribute("href") || "",
    n = e instanceof HTMLAnchorElement ? (vi(t) ? "link_click" : "outbound_link_click") : "button_click";
  return { href: t, action: n };
}
function bi(e) {
  for (let t = e; t && t.nodeName !== "BODY"; t = t.parentElement)
    if (/fixed|sticky/i.test(getComputedStyle(t).position)) return !0;
  return !1;
}
function Ti({ element: e, bounds: t, point: n }) {
  const i = t ?? (n && Number.isFinite(n.x) && Number.isFinite(n.y) ? { left: n.x, top: n.y } : void 0),
    { left: o, top: r } = i ?? e.getBoundingClientRect();
  if (bi(e)) return { x: Math.round(o), y: Math.round(r) };
  const s = i ? 0 : e.clientLeft,
    a = i ? 0 : e.clientTop;
  return { x: Math.round(o + window.scrollX - s), y: Math.round(r + window.scrollY - a) };
}
function Li(e) {
  const t = [];
  for (
    let i = e.element.closest("[data-component-name]");
    i;
    i = i.parentElement?.closest("[data-component-name]") ?? null
  )
    t.unshift(i.getAttribute("data-component-name") ?? "");
  const n = t.at(-1) ?? "unhandled-parent-section";
  ki(e, t, n), e.gtm && Si(e, n);
}
function ki(e, t, n) {
  const i = x?.denormalizedDux;
  if (!i || !A) return;
  const { x: o, y: r } = Ti(e),
    { href: s, action: a } = gt(e.element),
    c = {
      schemaId: H.DenormalizedWebsiteEvent,
      payload: {
        eventType: pe.Click,
        pageViewToken: A,
        clickComponentTree: `${[...t, e.targetName].join("|")}:${e.tagName}`,
        clickTargetName: e.targetName,
        clickParentName: n,
        clickParentIndex: 0,
        clickXCoord: o,
        clickYCoord: r,
        clickRecirculation: s,
        clickInnerText: [...e.innerText].slice(0, 50).join(""),
        clickTagType: a,
        clickEventType: e.clickEventType ?? "click",
        clickExtraMetadata: JSON.stringify(e.extraMetadata),
      },
    };
  try {
    i(c);
  } catch (l) {
    console.error("Failed to track click with Dux", l);
  }
}
function Si(e, t) {
  const n = x?.gtm;
  if (!n) return;
  const { element: i } = e,
    { href: o, action: r } = gt(i),
    s = (i instanceof HTMLElement && (i.innerText || i.textContent || i.getAttribute("aria-label"))) || "",
    a = Object.fromEntries(
      Object.entries(e.extraMetadata).map(([c, l]) => [c.replace(/[A-Z]/g, (d) => `_${d.toLowerCase()}`), l]),
    );
  try {
    n({
      eventCategory: t,
      eventAction: r,
      eventLabel: e.targetName,
      event: r,
      eventName: r,
      eventType: e.targetName,
      eventText: [...s].slice(0, 50).join(""),
      eventLocation: t,
      eventUrl: o,
      extraMetadata: JSON.stringify(a),
    });
  } catch (c) {
    console.error("Failed to track click with GTM", c);
  }
}
const Ye = new WeakMap();
function Oi(e, t) {
  const n = !!t.error,
    i = !n && !!t.fallbackReason && !!t.active;
  if (!n && !i) return;
  const o = `${t.requested ?? ""}|${t.active ?? ""}|${t.fallbackReason ?? ""}|${t.error ?? ""}`;
  Ye.get(e) !== o &&
    (Ye.set(e, o),
    pt(
      { message: n ? "graph_renderer_failed" : "graph_renderer_fallback", stack: "" },
      {
        signal: "graph_renderer_status",
        severity: n ? "fatal" : "info",
        requestedBackend: t.requested,
        activeBackend: t.active,
        fallbackReason: t.fallbackReason,
        errorReason: t.error,
      },
    ));
}
function wt(e, t, n) {
  const i = t?.severity !== "info",
    o = JSON.stringify({
      url: location.href,
      releaseStage: n.releaseStage,
      bugsnagApiKey: n.apiKey,
      appVersion: window.__APP_VERSION__,
      ...t,
    }),
    r = i
      ? {
          schemaId: H.Error,
          payload: {
            pageViewToken: A,
            message: e.message,
            stack: e.stack,
            ...(e.fileName ? { fileName: e.fileName } : {}),
            ...(e.lineNumber ? { lineNumber: e.lineNumber } : {}),
            extraMetadata: o,
          },
        }
      : {
          schemaId: H.ComponentViewability,
          payload: {
            pageViewToken: A,
            componentTree: `graph_renderer|${e.message}:canvas`,
            targetName: e.message,
            parentName: "graph_renderer",
            parentIndex: 0,
            componentWidth: 0,
            componentHeight: 0,
            verticalPosition: 0,
            horizontalPosition: 0,
            duration: 0,
            threshold: 0,
            extraMetadata: o,
          },
        };
  try {
    x.dux(r, { isEssential: i, flush: i });
  } catch (s) {
    console.error("Failed to log error to Dux", s);
  }
}
function Ci(e) {
  (ht = !0), console.error("Failed to initialize Dux client error reporting", e);
  for (const t of U.splice(0)) console.error("[Error - Dux failed to initialize]", t.error.message, t.error);
}
const _i = Tt(pt);
function Mi(e, t, n = {}) {
  if (e instanceof Error && e.name === "AbortError") return;
  const i =
    typeof e == "object" && e !== null && "message" in e && typeof e.message == "string" ? e : String(e);
  _i(i, { errorType: "handled_error", ...n, source: t });
}
export { Di as a, yi as b, Ni as c, tt as d, Oi as e, Li as f, Ai as i, Mi as r, Ii as t };
