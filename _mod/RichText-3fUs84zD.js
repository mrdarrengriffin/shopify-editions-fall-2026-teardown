import { c as v } from "./create-element-sVm-IRH-.js";
import { u as E } from "./unsafe-html-D-rYaoKo.js";
import { Link as T } from "./Link-Dqyjg77a.js";
import { j as h } from "./jsx-CLqwgotn.js";
import "./children-CK0rrdQP.js";
import "./mixin-CMuDUxNx.js";
import "./typed-event-target-DhbNxY-V.js";
import "./index-CRnHN5xY.js";
import "./uniqueId-rj4JeCtw.js";
import "./externalLink-DAUa5sJm.js";
import "./constants-Dvx39Bnh.js";
import "./component-BWKvSpCv.js";
const b = {
  class: "className",
  for: "htmlFor",
  charset: "charSet",
  "http-equiv": "httpEquiv",
  acceptcharset: "acceptCharset",
  crossorigin: "crossOrigin",
  tabindex: "tabIndex",
  autocomplete: "autoComplete",
  autofocus: "autoFocus",
  readonly: "readOnly",
  maxlength: "maxLength",
  contenteditable: "contentEditable",
  allowfullscreen: "allowFullScreen",
  frameborder: "frameBorder",
  hreflang: "hrefLang",
  marginheight: "marginHeight",
  marginwidth: "marginWidth",
  srcdoc: "srcDoc",
  srcset: "srcSet",
  novalidate: "noValidate",
  formnovalidate: "formNoValidate",
  spellcheck: "spellCheck",
};
function S(t) {
  const e = {};
  return (
    t.split(";").forEach((o) => {
      const [n, s] = o.split(":").map((r) => r.trim());
      n && s && (e[n.replace(/-([a-z])/g, (r, i) => i.toUpperCase())] = s);
    }),
    e
  );
}
function w(t) {
  const e = { ...t };
  typeof t.style == "string" && (e.style = S(t.style));
  for (const [o, n] of Object.entries(b))
    if (o in e) {
      const s = e[o];
      (e[n] = n === "srcDoc" && typeof s == "string" ? E(s) : s), delete e[o];
    }
  return e;
}
function z(t, e = {}, o) {
  const n = (s, r, i) => v(e[s] ?? s, w(r), ...i);
  return L(t, (s, r, i) => o?.({ type: s, attribs: r, children: i }) ?? n(s, r, i));
}
const y =
    /(?:<([a-z][a-z0-9-:]*)((?:\s+[^<>'"=\s/]+(?:=(['"]).*?\3|=[^>'"\s]*?|))*)\s*(\/?)\s*>|<\/([a-z][a-z0-9-:]*)>|([^<>]+))/gis,
  k = /\s+([^<>'"=\s]+)(?:=(['"])(.*?)\2|=([^>'"\s]*?)|)/gs,
  C = {
    constructor: null,
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
    command: !0,
    keygen: !0,
    menuitem: !0,
  },
  N = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " };
function x(t) {
  return t.replace(/&(?:(amp|quot|apos|lt|gt|nbsp)|#(\d+));/gi, (e, o, n) =>
    n ? String.fromCharCode(n) : N[o] || e,
  );
}
class f {
  constructor(e, o, n) {
    (this.type = e), (this.props = o), (this.children = n);
  }
  type;
  props;
  children;
}
function L(t, e) {
  const o = t.trim(),
    n = new f("", {}, []),
    s = [n];
  let r = n,
    i;
  y.lastIndex = 0;
  const p = () => {
    const l = r.children.length - 1,
      a = r.children[l];
    a instanceof f && (r.children[l] = e(a.type, a.props, a.children));
  };
  for (; (i = y.exec(o)); ) {
    const l = i[1];
    if (l) {
      const a = {};
      k.lastIndex = 0;
      let u;
      for (; (u = k.exec(i[2] ?? "")); ) {
        let c = u[1],
          m = x(u[3] || u[4] || "");
        c.endsWith(":") ? ((c = c.slice(0, -1)), (m = JSON.parse(String(m)))) : m === "" && (m = !0),
          (a[c] = m);
      }
      if ((p(), (a.key = r.children.length), l in C || i[4])) r.children.push(e(l, a, []));
      else {
        const c = new f(l, a, []);
        r.children.push(c), s.push(r), (r = c);
      }
    } else if (i[5]) (r = s.pop() || n), p();
    else {
      const a = x(i[6] ?? "");
      a.length > 0 && (p(), r.children.push(a));
    }
  }
  return (r = n), p(), n.children.filter((l) => typeof l != "string" || l.length > 0);
}
const j = new Set(["blockquote", "div", "h1", "h2", "h3", "h4", "h5", "h6", "ol", "p", "pre", "table", "ul"]),
  g = (t) => !!(t && typeof t == "object" && !Array.isArray(t) && "$rmx" in t),
  d = (t) =>
    typeof t == "string" || typeof t == "number"
      ? String(t)
      : Array.isArray(t)
        ? t.map(d).join("")
        : t && typeof t == "object" && "$rmx" in t
          ? d(t.props.children)
          : "",
  A = ({ type: t, attribs: e, children: o }, n) => {
    if (t !== "a" || typeof e.href != "string") return;
    const s = typeof e.key == "string" || typeof e.key == "number" ? e.key : void 0,
      r = typeof e.title == "string" ? e.title : void 0,
      i = typeof e.target == "string" ? e.target : void 0,
      p = typeof e.rel == "string" ? e.rel : void 0,
      l = n?.({ href: e.href, key: s, children: o, text: d(o).trim(), target: i, rel: p, tooltip: r });
    return (
      l ||
      h(
        T,
        { dataComponentName: "cta-inline-link", href: e.href, target: i, rel: p, tooltip: r, children: o },
        s,
      )
    );
  };
function J(t) {
  return () => {
    const { as: e = "div", className: o, content: n, renderLink: s } = t.props,
      r = z(n, {}, (c) => A(c, s));
    if (e === "div") return h("div", { class: o, children: r });
    const i = e,
      p = r.length === 1 && g(r[0]) && r[0].type === "p" ? r[0] : null,
      l = r.some((c) => g(c) && typeof c.type == "string" && j.has(c.type));
    if (p || !l) return h(i, { class: o, children: p ? p.props.children : r });
    let a = !1;
    const u = r.map((c) => (a || !g(c) || c.type !== "p" ? c : ((a = !0), v(i, c.props, c.props.children))));
    return h("div", { class: o, children: u });
  };
}
export { J as RichText };
