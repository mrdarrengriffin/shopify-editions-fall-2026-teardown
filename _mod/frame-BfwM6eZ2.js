import { i as mi, j as je } from "./jsx-CLqwgotn.js";
import { F as ot, a as yt, c as pi, b as Wr } from "./component-BWKvSpCv.js";
import {
  i as N,
  a as nr,
  p as hi,
  d as Ut,
  b as Pt,
  e as zr,
  t as Vt,
  r as gi,
  f as yi,
  g as ir,
} from "./mixin-CMuDUxNx.js";
import { n as Kr } from "./style-BrvkoWQt.js";
import { i as Gr, l as lr, s as Ei } from "./client-entries-B1h-jQ5r.js";
import { i as ki, b as bi, c as Si, n as Ci } from "./children-CK0rrdQP.js";
import { n as _i } from "./unsafe-html-D-rYaoKo.js";
import { i as Xr } from "./on-mixin-Ci1jclOX.js";
import { T as Yr } from "./typed-event-target-DhbNxY-V.js";
function re(e) {
  return new ErrorEvent("error", { error: e });
}
function Ke(e) {
  return e.error;
}
function vi(e) {
  let t = e ?? document;
  function r() {
    return t.activeElement || t.body;
  }
  function n(h) {
    let y = h.nodeName.toLowerCase();
    return (
      (y === "input" &&
        "type" in h &&
        (h.type === "text" ||
          h.type === "search" ||
          h.type === "tel" ||
          h.type === "url" ||
          h.type === "password")) ||
      y === "textarea" ||
      (h instanceof HTMLElement && h.contentEditable === "true")
    );
  }
  function i(h) {
    if ("selectionStart" in h && typeof h.selectionStart == "number" && "selectionEnd" in h) {
      let y = h;
      return { start: y.selectionStart ?? 0, end: y.selectionEnd ?? y.selectionStart ?? 0 };
    }
    return null;
  }
  function l(h, y) {
    if ("selectionStart" in h && "selectionEnd" in h)
      try {
        let u = h;
        (u.selectionStart = y.start), (u.selectionEnd = Math.min(y.end, u.value?.length ?? 0));
      } catch {}
  }
  function a(h) {
    return t.documentElement.contains(h);
  }
  function s() {
    let h = r();
    return { focusedElem: h, selectionRange: h && n(h) ? i(h) : null };
  }
  function d(h) {
    let y = r(),
      u = h.focusedElem,
      m = h.selectionRange;
    if (y !== u && u && a(u)) {
      let p = [],
        b = u;
      for (; b; ) {
        if (b.nodeType === Node.ELEMENT_NODE) {
          let E = b;
          p.push({ element: E, left: E.scrollLeft ?? 0, top: E.scrollTop ?? 0 });
        }
        b = b.parentNode;
      }
      m !== null && n(u) && l(u, m), u instanceof HTMLElement && typeof u.focus == "function" && u.focus();
      for (let E of p) (E.element.scrollLeft = E.left), (E.element.scrollTop = E.top);
    }
  }
  let o = null;
  function f() {
    o = s();
  }
  function c() {
    o !== null && d(o), (o = null);
  }
  return { capture: f, restore: c };
}
const Ti = Symbol("TEXT_NODE"),
  Mi = Symbol("NON_RENDER_NODE"),
  Jr = Symbol("ROOT_VNODE");
function fe(e) {
  return e.kind === "fragment";
}
function Me(e) {
  return e.kind === "text";
}
function Ni(e) {
  return e.kind === "host";
}
function Ne(e) {
  return e.kind === "host";
}
function ue(e) {
  return e.kind === "component" && "_content" in e;
}
function we(e) {
  return e.kind === "client-entry";
}
function ye(e, t) {
  let r = e;
  for (; r; ) {
    if (r.kind === "component" && r.type === t) return r._handle.getContextValue();
    if (r.kind === "root") return r._getContext?.(t);
    r = "_parent" in r ? r._parent : void 0;
  }
}
async function Zr(e) {
  return e instanceof Response
    ? { content: e.body ?? (await e.text()), redirectedTo: e.redirected && e.url ? e.url : void 0 }
    : { content: e };
}
const x = "http://www.w3.org/1999/xlink",
  K = "http://www.w3.org/XML/1998/namespace",
  Qr = new Set([
    "accentHeight",
    "attributeName",
    "attributeType",
    "autoReverse",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "viewBox",
    "preserveAspectRatio",
    "externalResourcesRequired",
    "filterRes",
    "gradientUnits",
    "gradientTransform",
    "glyphRef",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "patternUnits",
    "patternContentUnits",
    "patternTransform",
    "markerWidth",
    "numOctaves",
    "pathLength",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "clipPathUnits",
    "maskUnits",
    "maskContentUnits",
    "filterUnits",
    "primitiveUnits",
    "refX",
    "refY",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan",
    "edgeMode",
    "diffuseConstant",
    "markerUnits",
  ]),
  en = new Map();
for (let e of Qr) en.set(tn(e), e);
const wi = new Map([
  ["xlinkHref", { ns: x, attr: "xlink:href" }],
  ["xlink:href", { ns: x, attr: "xlink:href" }],
  ["xlink-href", { ns: x, attr: "xlink:href" }],
  ["xlinkActuate", { ns: x, attr: "xlink:actuate" }],
  ["xlink:actuate", { ns: x, attr: "xlink:actuate" }],
  ["xlink-actuate", { ns: x, attr: "xlink:actuate" }],
  ["xlinkArcrole", { ns: x, attr: "xlink:arcrole" }],
  ["xlink:arcrole", { ns: x, attr: "xlink:arcrole" }],
  ["xlink-arcrole", { ns: x, attr: "xlink:arcrole" }],
  ["xlinkRole", { ns: x, attr: "xlink:role" }],
  ["xlink:role", { ns: x, attr: "xlink:role" }],
  ["xlink-role", { ns: x, attr: "xlink:role" }],
  ["xlinkShow", { ns: x, attr: "xlink:show" }],
  ["xlink:show", { ns: x, attr: "xlink:show" }],
  ["xlink-show", { ns: x, attr: "xlink:show" }],
  ["xlinkTitle", { ns: x, attr: "xlink:title" }],
  ["xlink:title", { ns: x, attr: "xlink:title" }],
  ["xlink-title", { ns: x, attr: "xlink:title" }],
  ["xlinkType", { ns: x, attr: "xlink:type" }],
  ["xlink:type", { ns: x, attr: "xlink:type" }],
  ["xlink-type", { ns: x, attr: "xlink:type" }],
  ["xmlBase", { ns: K, attr: "xml:base" }],
  ["xml:base", { ns: K, attr: "xml:base" }],
  ["xml-base", { ns: K, attr: "xml:base" }],
  ["xmlLang", { ns: K, attr: "xml:lang" }],
  ["xml:lang", { ns: K, attr: "xml:lang" }],
  ["xml-lang", { ns: K, attr: "xml:lang" }],
  ["xmlSpace", { ns: K, attr: "xml:space" }],
  ["xml:space", { ns: K, attr: "xml:space" }],
  ["xml-space", { ns: K, attr: "xml:space" }],
  ["xmlnsXlink", { attr: "xmlns:xlink" }],
  ["xmlns:xlink", { attr: "xmlns:xlink" }],
  ["xmlns-xlink", { attr: "xmlns:xlink" }],
]);
function Ri(e) {
  let t = en.get(e);
  return t || (Qr.has(e) ? e : tn(e));
}
function xi(e) {
  let t = wi.get(e);
  return t || { attr: Ri(e) };
}
function tn(e) {
  return e
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/_/g, "-")
    .toLowerCase();
}
const Ai = new Set([
    "width",
    "height",
    "href",
    "list",
    "form",
    "tabIndex",
    "download",
    "rowSpan",
    "colSpan",
    "role",
    "popover",
    "translate",
  ]),
  Fi = new Set([
    "autoReverse",
    "contenteditable",
    "draggable",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
    "spellcheck",
  ]),
  Ii = new Set(["__proto__", "outerHTML"]),
  Li = /[\u0000\t\n\f\r "'/>=]/,
  Di = new Set(["href", "src", "action", "formaction", "xlink:href"]),
  Oi =
    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,
  Hi = "javascript:throw new Error('Remix has blocked a javascript: URL as a security precaution.')";
function ar(e) {
  return e.length === 0 || Li.test(e) ? !1 : !e.toLowerCase().startsWith("on") && !Ii.has(e);
}
function Ui(e, t, r) {
  return (Di.has(t) || (t === "data" && e.toLowerCase() === "object")) && Oi.test(String(r)) ? Hi : r;
}
function rn(e, t, r, n) {
  return r || Ai.has(t) || an(n) ? !1 : t in e;
}
const nn = 256,
  Pi = new Map(),
  Vi = new Map();
function ln(e, t) {
  let r = t ? Vi : Pi,
    n = r.get(e);
  if (n === void 0) {
    if (((n = ji(e, t)), r.size >= nn)) {
      let i = r.keys().next();
      i.done || r.delete(i.value);
    }
    r.set(e, n);
  }
  return n;
}
function ji(e, t) {
  return e.startsWith("aria-") || e.startsWith("data-")
    ? { attr: e }
    : e === "className"
      ? { attr: "class" }
      : t
        ? xi(e)
        : e === "htmlFor"
          ? { attr: "for" }
          : e === "tabIndex"
            ? { attr: "tabindex" }
            : e === "acceptCharset"
              ? { attr: "accept-charset" }
              : e === "httpEquiv"
                ? { attr: "http-equiv" }
                : { attr: e.toLowerCase() };
}
function an(e) {
  return Fi.has(e);
}
function qi(e) {
  let t = [];
  for (let [r, n] of Object.entries(e)) {
    if (n == null || typeof n == "boolean" || (typeof n == "number" && !Number.isFinite(n))) continue;
    let i = Et(r),
      l = Array.isArray(n) ? n.join(", ") : Kr(r, n);
    t.push(`${i}: ${l};`);
  }
  return t.join(" ");
}
function or(e) {
  let t = typeof e.class == "string" ? e.class : "",
    r = typeof e.className == "string" ? e.className : "";
  return (t && r ? `${t} ${r}` : t || r) || void 0;
}
const pe = new Map();
function Et(e) {
  let t = pe.get(e);
  if (t === void 0) {
    if (((t = e.replace(/[A-Z]/g, (r) => `-${r.toLowerCase()}`)), pe.size >= nn)) {
      let r = pe.keys().next();
      r.done || pe.delete(r.value);
    }
    pe.set(e, t);
  }
  return t;
}
const Bi = "http://www.w3.org/2000/svg";
function sr(e) {
  return e === "children" || e === "mix" || e === "key" || e === "animate" || e === "innerHTML" || e === "on";
}
function on(e) {
  let t = e.indexOf(":");
  return t === -1 ? e : e.slice(t + 1);
}
function $i(e, t) {
  try {
    if (t === "value" || t === "defaultValue") {
      e[t] = "";
      return;
    }
    if (t === "checked" || t === "defaultChecked" || t === "selected") {
      e[t] = !1;
      return;
    }
    t === "selectedIndex" && (e[t] = -1);
  } catch {}
}
function ee(e, t, r) {
  let n = r.namespaceURI === Bi,
    i = or(e),
    l = or(t);
  i !== l && (l ? r.setAttribute("class", l) : r.removeAttribute("class"));
  for (let a in e) {
    if (sr(a) || !ar(a) || a === "class" || a === "className" || (a in t && t[a] != null)) continue;
    let { ns: s, attr: d } = ln(a, n);
    rn(r, a, n, d) && $i(r, a), s ? r.removeAttributeNS(s, on(d)) : r.removeAttribute(d);
  }
  for (let a in t) {
    if (sr(a) || !ar(a) || a === "class" || a === "className") continue;
    let s = t[a];
    if (s == null) continue;
    let d = e[a];
    if (d !== s) {
      if (a === "style" && kt(s)) {
        kt(d) ? bt(r, d, s) : (r.removeAttribute("style"), bt(r, void 0, s));
        continue;
      }
      Wi(r, a, s, n);
    }
  }
}
function Wi(e, t, r, n) {
  let { ns: i, attr: l } = ln(t, n);
  if (((r = Ui(e.localName, l, r)), l === "style" && kt(r))) {
    bt(e, void 0, r);
    return;
  }
  if (l === "style" && typeof r == "string") {
    e.setAttribute("style", r);
    return;
  }
  if (rn(e, t, n, l))
    try {
      e[t] = r ?? "";
      return;
    } catch {}
  if (typeof r == "function") return;
  let a = t.startsWith("aria-") || t.startsWith("data-"),
    s = an(l);
  if (r != null && (r !== !1 || a || s)) {
    let d = t === "popover" && r === !0 ? "" : String(r);
    i ? e.setAttributeNS(i, l, d) : e.setAttribute(l, d);
  } else i ? e.removeAttributeNS(i, on(l)) : e.removeAttribute(l);
}
function kt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function bt(e, t, r) {
  if (!(e instanceof HTMLElement || e instanceof SVGElement)) {
    e.setAttribute("style", qi(r));
    return;
  }
  let n = e.style;
  if (t) for (let i in t) De(i, r[i]) !== void 0 || De(i, t[i]) === void 0 || n.removeProperty(Et(i));
  for (let i in r) {
    let l = De(i, r[i]);
    l === void 0 || (t ? De(i, t[i]) : void 0) === l || n.setProperty(Et(i), l);
  }
}
function De(e, t) {
  if (t != null && typeof t != "boolean" && !(typeof t == "number" && !Number.isFinite(t)))
    return Array.isArray(t) ? t.join(", ") : Kr(e, t);
}
function dr(e) {
  let t = e.children;
  if (t === void 0) return [];
  if (!Array.isArray(t)) return [Re(t)];
  let r = [];
  return sn(t, r), r;
}
function sn(e, t) {
  let r = Ci(e);
  for (let n = 0; n < r.length; n++) t.push(Re(r[n]));
}
function Re(e) {
  if (ki(e)) return { kind: "empty", type: Mi };
  if (bi(e)) return { kind: "text", type: Ti, _text: String(e) };
  if (mi(e)) {
    if (e.type === ot) {
      let t = fr(e.props);
      return { kind: "fragment", type: ot, key: e.key, _children: dr(t) };
    }
    if (e.type === yt)
      return (
        N(zi(e.props), "<Frame /> requires a src prop"),
        { kind: "frame", type: yt, key: e.key, props: e.props }
      );
    if (typeof e.type == "string") {
      let t = fr(e.props),
        r = t.innerHTML != null ? [] : dr(t);
      return { kind: "host", type: e.type, key: e.key, props: t, _children: r };
    }
    return (
      N(Gi(e.type), "Expected component element type"),
      { kind: "component", type: e.type, key: e.key, props: e.props }
    );
  }
  if (Array.isArray(e)) {
    let t = [];
    return sn(e, t), { kind: "fragment", type: ot, _children: t };
  }
  N(!1, "Unexpected RemixNode");
}
function zi(e) {
  return typeof e.src == "string" && e.src.length > 0;
}
function fr(e) {
  let t = _i(e),
    r = t.children;
  N(r === void 0 || Si(r), "Invalid host children");
  let n = t.mix;
  return N(n === void 0 || Ki(n), "Invalid mix prop"), t;
}
function Ki(e) {
  if (!Array.isArray(e)) return nr(e);
  for (let t of e) if (!nr(t)) return !1;
  return !0;
}
function Gi(e) {
  return typeof e == "function";
}
const dn = new Set();
function fn(e) {
  dn.add(e);
}
function un(e) {
  dn.delete(e);
}
const qe = Symbol("ClientEntryBoundaryOwner");
function Ge(e) {
  return e[qe];
}
function Xi(e, t, r, n) {
  let i = { end: t, identity: r, root: n };
  return (
    Object.defineProperties(e, {
      [qe]: { configurable: !0, value: i },
      $rmx: { configurable: !0, value: n },
    }),
    i
  );
}
function jt(e) {
  let t = e,
    r = t[qe];
  return r ? (delete t[qe], delete t.$rmx, r.root.dispose(), !0) : !1;
}
const Yi = "http://www.w3.org/2000/svg";
let Ji = 0,
  Zi = 0;
const qt = new Set();
let cn;
function Y(e, t) {
  if (t.kind === "host") {
    if (t.type === "svg") return !0;
    if (t.type === "foreignObject") return !1;
  }
  return e._svg;
}
function xe(e) {
  return "_mixedProps" in e ? e._mixedProps : e.props;
}
function Qi(e, t, r) {
  (e._persistence = { parent: t, token: r }), qt.add(e), zr(e._mixState, void 0);
}
function mn(e) {
  (e._persistence = void 0), qt.delete(e);
}
function el(e, t, r) {
  if (t == null) return null;
  for (let n of qt) if (n._persistence?.parent === r && n.type === e && n.key === t) return n;
  return null;
}
const tl = [],
  Bt = [];
function rl(e, t) {
  return !(t.hasControlledChecked || e.type === "select");
}
function Xe(e, t) {
  let r = e._controlledState;
  if (r) return r;
  let n = {
    disposed: !1,
    listenersAttached: !1,
    pendingRestoreVersion: 0,
    managesValue: !1,
    managesChecked: !1,
    hasControlledValue: !1,
    controlledValue: void 0,
    hasControlledChecked: !1,
    controlledChecked: void 0,
    onInput: () => {
      rl(e, n) && ur(e, n);
    },
    onChange: () => {
      ur(e, n);
    },
  };
  return (
    (e._controlledState = n),
    t.enqueueTasks([
      () => {
        n.disposed ||
          (e._dom.addEventListener("input", n.onInput),
          e._dom.addEventListener("change", n.onChange),
          (n.listenersAttached = !0));
      },
    ]),
    n
  );
}
function Ye(e, t) {
  let r = e._controlledState;
  !r ||
    r.disposed ||
    ((r.managesValue = ll(e.type, e._dom)),
    (r.managesChecked = Je(e._dom, "checked")),
    (r.hasControlledValue = r.managesValue && hn(t)),
    (r.controlledValue = t.value),
    (r.hasControlledChecked = r.managesChecked && gn(t)),
    (r.controlledChecked = t.checked),
    r.pendingRestoreVersion++);
}
function $t(e) {
  return hn(e) || gn(e);
}
function ur(e, t) {
  if (t.disposed) return;
  let r = ++t.pendingRestoreVersion;
  queueMicrotask(() => {
    t.disposed || (t.pendingRestoreVersion === r && nl(e, t));
  });
}
function nl(e, t) {
  let r = e._dom;
  t.hasControlledValue && cr(r, "value") !== t.controlledValue && mr(r, "value", t.controlledValue),
    t.hasControlledChecked &&
      cr(r, "checked") !== t.controlledChecked &&
      mr(r, "checked", t.controlledChecked);
}
function il(e) {
  let t = e._controlledState;
  t &&
    ((t.disposed = !0),
    t.pendingRestoreVersion++,
    t.listenersAttached &&
      (e._dom.removeEventListener("input", t.onInput),
      e._dom.removeEventListener("change", t.onChange),
      (t.listenersAttached = !1)));
}
function pn(e) {
  let t = e._controlledState;
  t && ((t.disposed = !0), t.pendingRestoreVersion++, (t.listenersAttached = !1));
}
function ll(e, t) {
  return e === "progress" ? !1 : Je(t, "value");
}
function hn(e) {
  return "value" in e && e.value !== void 0;
}
function gn(e) {
  return "checked" in e && e.checked !== void 0;
}
function Je(e, t) {
  return t in e && !t.includes("-");
}
function cr(e, t) {
  if (Je(e, t)) return e[t];
}
function mr(e, t, r) {
  Je(e, t) && (e[t] = r ?? "");
}
function Ze(e, t, r, n, i) {
  let l = e.props.mix,
    a = ol(l);
  if (a) return i && Vt(i), { props: e.props, directEventDescriptors: a };
  if (i == null && (l == null || (Array.isArray(l) && l.length === 0))) return { props: e.props };
  let s = gi({
    hostType: e.type,
    frame: r,
    scheduler: n,
    getContext: (d) => {
      if (typeof d == "function") return ye(t, d);
    },
    props: e.props,
    state: i,
  });
  return { props: s.props, mixState: s.state };
}
function al(e, t) {
  (e._mixedProps = t.props),
    (e._mixState = t.mixState),
    (e._directEventDescriptors = t.directEventDescriptors);
}
function ol(e) {
  return e ? (Array.isArray(e) ? (sl(e) ? e : null) : Xr(e) ? [e] : null) : tl;
}
function sl(e) {
  for (let t = 0; t < e.length; t++) if (!Xr(e[t])) return !1;
  return !0;
}
function dl(e) {
  let t = this.target,
    r = t._mixState;
  this.scheduler.enqueueWork([
    () => {
      if (r?.aborted) {
        e(ir(r));
        return;
      }
      Ut(r);
      let n = xe(t),
        i = Ze(t, t._parent, this.frame, this.scheduler, r);
      al(t, i),
        ee(n, i.props, this.node),
        (t._controlledState || $t(i.props)) && (Xe(t, this.scheduler), Ye(t, i.props)),
        Pt(r),
        e(r ? ir(r) : AbortSignal.abort());
    },
  ]);
}
function ie(e, t, r, n, i = !1, l) {
  let a = e._mixState;
  zr(
    a,
    {
      node: e._dom,
      parent: l ?? fl(e._dom),
      key: e.key,
      target: e,
      frame: t,
      scheduler: r,
      enqueueUpdate: dl,
    },
    { dispatchReclaimed: i },
  );
}
function St(e) {
  return e.type === "head" ? !0 : e.type.length !== 4 ? !1 : e.type.toLowerCase() === "head";
}
function fl(e) {
  let t = e.parentNode;
  return N(t, "Expected mounted host node to have a DOM parent"), t;
}
function ul(e) {
  return e instanceof Document ? e.head : e instanceof Node ? (e.ownerDocument?.head ?? null) : null;
}
function yn(e, t, r) {
  let n = e;
  return (n._parent = t), (n._svg = r), n;
}
function he(e, t, r, n) {
  let i = e;
  return (i._parent = t), (i._svg = r), (i._dom = n), i;
}
function En(e, t, r) {
  let n = e;
  return (n._parent = t), (n._svg = r), (n._children = Bt), n;
}
function le(e, t, r, n, i, l = Bt) {
  let a = e;
  return (
    (a._parent = t),
    (a._svg = r),
    (a._dom = n),
    (a._children = l),
    (a._mixedProps = i.props),
    (a._mixState = i.mixState),
    (a._directEventDescriptors = i.directEventDescriptors),
    a
  );
}
function pr(e, t, r, n, i) {
  let l = e;
  return (l._parent = t), (l._svg = r), (l._handle = n), (l._context = i), l;
}
function cl(e, t) {
  let r = e;
  return (r._content = t), r;
}
function Ae(e, t, r, n, i, l, a) {
  if (e === null) return Se(t, r, n, i, l, a);
  if (we(e) && t.kind === "component" && Gr(t.type)) return Nl(e, t, n, i);
  if (e.kind !== t.kind || e.type !== t.type) return ml(e, t, r, n, i, l);
  switch (t.kind) {
    case "host":
      return pl(e, t, n, i);
    case "text":
      return El(e, t, n, Y(n, t));
    case "empty":
      return yn(t, n, Y(n, t));
    case "fragment": {
      let s = t._children,
        d = En(t, n, Y(n, t));
      return (d._children = te(e._children, s, r, d, i, void 0, l)), d;
    }
    case "frame":
      return kl(e, t, r, n, i, Y(n, t), l);
    case "component":
      return Cn(e, t, r, n, i, Y(n, t), l, a);
  }
}
function ml(e, t, r, n, i, l) {
  let a = oe(e);
  if (a && a.parentNode === r) {
    let d = document.createComment("rmx:replace");
    r.insertBefore(d, a);
    try {
      return j(e, r, i), Se(t, r, n, i, d);
    } finally {
      d.parentNode?.removeChild(d);
    }
  }
  let s = ke(e) ?? l;
  return j(e, r, i), Se(t, r, n, i, s);
}
function pl(e, t, r, n) {
  let { frame: i, scheduler: l, styles: a } = n,
    s = e._mixState,
    d = xe(e),
    o = Ze(t, r, i, l, s),
    f = t._children,
    c = o.props,
    h = o.mixState,
    y = (h?.runners.length ?? 0) > 0 && Rt(e._dom);
  y && Ut(h),
    c.innerHTML != null
      ? d.innerHTML !== c.innerHTML && (e._dom.innerHTML = c.innerHTML)
      : d.innerHTML != null && (e._dom.innerHTML = "");
  let u = le(t, r, Y(r, t), e._dom, o);
  return (
    (u._directEventState = e._directEventState),
    (u._controlledState = e._controlledState),
    (u._children = te(e._children, f, e._dom, u, n)),
    ee(d, c, e._dom),
    Wt(u),
    (u._controlledState || $t(c)) && (Xe(u, l), Ye(u, c)),
    u._mixState && ie(u, i, l),
    y && l.enqueueCommitPhase([() => Pt(h)]),
    u
  );
}
function Oe(e, t) {
  let r = xe(e);
  Wt(e), $t(r) && (Xe(e, t), Ye(e, r));
}
function Wt(e) {
  let t = e._directEventDescriptors;
  if (!t) {
    _t(e);
    return;
  }
  if (t.length === 0) {
    _t(e);
    return;
  }
  let r = e._directEventState;
  r || ((r = { bindings: [] }), (e._directEventState = r));
  let n = r.bindings;
  for (let i = 0; i < t.length; i++) {
    let l = t[i].args,
      a = l[0],
      s = l[1],
      d = l[2] ?? !1,
      o = n[i];
    if (!o) {
      (o = hl(a, s, d)), (n[i] = o), hr(e._dom, o);
      continue;
    }
    (o.type !== a || o.capture !== d) && (Ct(e._dom, o), (o.type = a), (o.capture = d), hr(e._dom, o)),
      (o.handler = s);
  }
  for (let i = t.length; i < n.length; i++) Ct(e._dom, n[i]);
  n.length = t.length;
}
function hl(e, t, r) {
  return { type: e, handler: t, capture: r, reentry: null, stableHandler: null };
}
function gl(e) {
  return (
    e.stableHandler ||
      (e.stableHandler = (t) => {
        yl(e, t);
      }),
    e.stableHandler
  );
}
function hr(e, t) {
  e.addEventListener(t.type, gl(t), t.capture);
}
function Ct(e, t) {
  t.stableHandler && e.removeEventListener(t.type, t.stableHandler, t.capture),
    t.reentry?.abort(new DOMException("", "AbortError")),
    (t.reentry = null);
}
function _t(e) {
  let t = e._directEventState;
  if (t) {
    for (let r of t.bindings) Ct(e._dom, r);
    (t.bindings.length = 0), (e._directEventState = void 0);
  }
}
function kn(e) {
  let t = e._directEventState;
  if (t) {
    for (let r of t.bindings) r.reentry?.abort(new DOMException("", "AbortError")), (r.reentry = null);
    (t.bindings.length = 0), (e._directEventState = void 0);
  }
}
function yl(e, t) {
  e.reentry?.abort(new DOMException("", "EventReentry")),
    (e.reentry = new AbortController()),
    e.handler(t, e.reentry.signal);
}
function El(e, t, r, n) {
  return e._text !== t._text && (e._dom.textContent = t._text), he(t, r, n, e._dom);
}
function Se(e, t, r, n, i, l) {
  let { frame: a, scheduler: s, styles: d } = n,
    o = Y(r, e),
    f = l?.current;
  if (
    (f && i && f === i && (f = null),
    (f = vl(f ?? null, e.kind === "component" || e.kind === "fragment" || e.kind === "empty")),
    f && i && f === i && (f = null),
    l && (l.current = f),
    r.kind !== "root" && e.kind === "component" && Gr(e.type) && f instanceof Comment)
  ) {
    let y = J(a)?.pendingClientEntries.get(f),
      u = Ge(f),
      m = y?.[0] ?? u?.end;
    if (m) {
      let p = _n(e, r, o, f, m);
      return vn(p, n), l && (l.current = m.nextSibling), p;
    }
  }
  let c = i ? (h) => t.insertBefore(h, i) : (h) => t.appendChild(h);
  if (e.kind === "empty") return yn(e, r, o);
  if (e.kind === "text") {
    if (f instanceof Text) {
      if (f.data !== e._text) {
        if (f.data.startsWith(e._text) && e._text.length < f.data.length) {
          let y = f.splitText(e._text.length);
          return l && (l.current = y), he(e, r, o, f);
        }
        if (e._text.startsWith(f.data) && f.data.length < e._text.length) {
          let y = e._text.slice(f.data.length),
            u = f.nextSibling;
          for (; y.length > 0 && u instanceof Text && y.startsWith(u.data); ) {
            y = y.slice(u.data.length);
            let m = u.nextSibling;
            u.remove(), (u = m);
          }
          return (
            y.length > 0 && u instanceof Text && u.data.startsWith(y) && u.deleteData(0, y.length),
            (f.data = e._text),
            l && (l.current = u),
            he(e, r, o, f)
          );
        }
        lr("text mismatch", f.data, e._text), (f.data = e._text);
      }
      return l && (l.current = f.nextSibling), he(e, r, o, f);
    }
    let h = document.createTextNode(e._text);
    return c(h), he(e, r, o, h);
  }
  if (e.kind === "host") {
    let h = Ze(e, r, a, s),
      y = h.props,
      u = e._children;
    if (St(e)) {
      let E = ul(t);
      if (E) {
        let C = l ? { current: f } : void 0;
        if (f instanceof Element && f.tagName.toLowerCase() === "head") {
          C && (C.current = f.firstChild);
          let w = f.nextSibling;
          if (f !== E) {
            for (; f.firstChild; ) E.appendChild(f.firstChild);
            f.remove();
          }
          l && (l.current = w);
        }
        let v = le(e, r, o, E, h);
        return (v._children = te(null, u, E, v, n, C)), ee({}, y, E), Oe(v, s), v._mixState && ie(v, a, s), v;
      }
    }
    let m = el(e.type, e.key, t);
    if (m) return Vl(m, e, r, n);
    if (f instanceof Element) {
      let E = o ? f.tagName : f.tagName.toLowerCase();
      if (E === e.type) {
        let C = f.nextSibling;
        ee({}, y, f);
        let v = le(e, r, o, f, h);
        if (y.innerHTML != null) f.innerHTML = y.innerHTML;
        else {
          let w = { current: f.firstChild };
          v._children = te(null, u, f, v, n, w);
        }
        return Oe(v, s), v._mixState && ie(v, a, s), l && (l.current = C), v;
      } else {
        let C = Ei(f.nextSibling);
        if (C instanceof Element && (o ? C.tagName : C.tagName.toLowerCase()) === e.type) {
          let w = C.nextSibling;
          ee({}, y, C);
          let H = le(e, r, o, C, h);
          if (y.innerHTML != null) C.innerHTML = y.innerHTML;
          else {
            let I = { current: C.firstChild };
            H._children = te(null, u, C, H, n, I);
          }
          return Oe(H, s), H._mixState && ie(H, a, s), l && (l.current = w), H;
        }
        lr("tag", E, e.type), l && (l.current = void 0);
      }
    }
    let p = o ? document.createElementNS(Yi, e.type) : document.createElement(e.type);
    ee({}, y, p);
    let b = le(e, r, o, p, h);
    return (
      y.innerHTML != null ? (p.innerHTML = y.innerHTML) : (b._children = te(null, u, p, b, n)),
      Oe(b, s),
      b._mixState && ie(b, a, s, d, !1, t),
      c(p),
      b
    );
  }
  if (e.kind === "fragment") {
    let h = e._children,
      y = En(e, r, o),
      u = h;
    for (let m = 0; m < h.length; m++) u[m] = Se(h[m], t, y, n, i, l);
    return (y._children = u), y;
  }
  if (e.kind === "component") return Cn(null, e, t, r, n, o, i, l);
  if (e.kind === "frame") return vt(e, t, r, n, o, i, l);
  N(!1, "Unexpected node type");
}
function kl(e, t, r, n, i, l, a) {
  let { frame: s } = i,
    d = Ce(e),
    o = Ce(t),
    f = _e(e),
    c = _e(t);
  if (f !== c) {
    let p = e._rangeEnd.nextSibling ?? a;
    return j(e, r, i), vt(t, r, n, i, l, p);
  }
  if (d !== o && !e._state.resolved) {
    let p = e._rangeEnd.nextSibling ?? a;
    return j(e, r, i), vt(t, r, n, i, l, p);
  }
  let h = t;
  Object.assign(h, {
    _rangeStart: e._rangeStart,
    _rangeEnd: e._rangeEnd,
    _state: e._state,
    _parent: n,
    _svg: l,
  });
  let y = J(s),
    u = h._state.instance,
    m = y?.serverFrameReload;
  return (
    d !== o ? (u && (u.handle.src = o), y && Tt(h, y, m)) : y && u && m && Tt(h, y, m),
    !h._state.resolved && h._state.fallbackRoot && h._state.fallbackRoot.render(h.props.fallback ?? null),
    h
  );
}
function vt(e, t, r, n, i, l, a) {
  let { frame: s, styles: d } = n,
    o = J(s);
  if (!o || o.canResolveFrames === !1)
    throw new Error(
      "Cannot render <Frame /> without frame runtime. Use run() or pass frameInit to createRoot/createRangeRoot.",
    );
  if (zt(a?.current)) {
    let p = a.current,
      b = Ml(p);
    if (b) {
      let E = o.frameInstances.get(p),
        C = (w) => ye(r, w),
        v = E?.handle.src ?? Ce(e);
      if (!E)
        (E = It([p, b], {
          name: _e(e),
          src: v,
          getContext: C,
          errorTarget: o.errorTarget,
          loadModule: o.loadModule,
          resolveFrame: o.resolveFrame,
          pendingClientEntries: o.pendingClientEntries,
          scheduler: o.scheduler,
          styleManager: o.styleManager,
          data: {},
          moduleCache: o.moduleCache,
          moduleLoads: o.moduleLoads,
          frameInstances: o.frameInstances,
          namedFrames: o.namedFrames,
          processClientEntryPreloads: o.processClientEntryPreloads,
        })),
          o.frameInstances.set(p, E);
      else {
        let w = J(E.handle);
        w && (w.getContext = C);
      }
      return (
        (a.current = b.nextSibling),
        Object.assign(e, {
          _rangeStart: p,
          _rangeEnd: b,
          _parent: r,
          _svg: i,
          _state: {
            instance: E,
            resolveToken: 0,
            resolveController: void 0,
            fallbackRoot: void 0,
            resolved: !0,
          },
        })
      );
    }
  }
  let f = document.createComment(` rmx:f:${_l()} `),
    c = document.createComment(" /rmx:f "),
    h = l ? (p) => t.insertBefore(p, l) : (p) => t.appendChild(p);
  h(f), h(c);
  let y = Xt([f, c], { frame: s, getContext: (p) => ye(r, p), styleManager: d });
  y.render(e.props.fallback ?? null);
  let u = It([f, c], {
    name: _e(e),
    src: Ce(e),
    getContext: (p) => ye(r, p),
    errorTarget: o.errorTarget,
    loadModule: o.loadModule,
    resolveFrame: o.resolveFrame,
    pendingClientEntries: o.pendingClientEntries,
    scheduler: o.scheduler,
    styleManager: o.styleManager,
    data: {},
    moduleCache: o.moduleCache,
    moduleLoads: o.moduleLoads,
    frameInstances: o.frameInstances,
    namedFrames: o.namedFrames,
    processClientEntryPreloads: o.processClientEntryPreloads,
  });
  o.frameInstances.set(f, u);
  let m = Object.assign(e, {
    _rangeStart: f,
    _rangeEnd: c,
    _parent: r,
    _svg: i,
    _state: { instance: u, fallbackRoot: y, resolved: !1, resolveToken: 0, resolveController: void 0 },
  });
  return Tt(m, o, o.serverFrameReload), m;
}
function Tt(e, t, r) {
  let n = Ce(e),
    i = e._state,
    l = i.instance,
    a = i.resolveToken + 1;
  (i.resolveToken = a), i.resolveController?.abort();
  let s = r ? l.beginClientFrameReloadForAncestorReload(r.signal) : void 0;
  s || l.cancelReload();
  let d = s?.controller ?? new AbortController();
  i.resolveController = d;
  let o = Promise.withResolvers(),
    f = Promise.resolve()
      .then(() => t.resolveFrame(n, { signal: d.signal, target: _e(e) }))
      .then(async (c) => {
        if (i.resolveToken !== a || d.signal.aborted) return;
        let { content: h } = await Zr(c);
        if (i.resolveToken !== a || d.signal.aborted) return;
        i.fallbackRoot?.dispose(), (i.fallbackRoot = void 0);
        let y = bl(h, d.signal);
        await l.render(y, {
          signal: d.signal,
          reconciliationTracker: r?.reconciliationTracker,
          blockingFrameTracker: r?.blockingFrameTracker,
          onCommit: o.resolve,
        }),
          !(i.resolveToken !== a || d.signal.aborted) && (i.resolved = !0);
      })
      .catch((c) => {
        s && i.resolveToken === a && !d.signal.aborted && t.errorTarget.dispatchEvent(re(c));
      })
      .finally(() => {
        o.resolve(), s?.complete(), i.resolveController === d && (i.resolveController = void 0);
      });
  r?.reconciliationTracker && !e.props.fallback && r.reconciliationTracker.waitFor(f),
    r?.blockingFrameTracker && !e.props.fallback && r.blockingFrameTracker.waitFor(o.promise);
}
function bn(e) {
  let t = e._state;
  t.resolveToken++,
    t.resolveController?.abort(),
    (t.resolveController = void 0),
    t.fallbackRoot?.dispose(),
    (t.fallbackRoot = void 0),
    t.instance.dispose();
}
function bl(e, t) {
  return e instanceof ReadableStream ? Sl(e, t) : e;
}
function Sl(e, t) {
  let r = e.getReader(),
    n = !1,
    i = () => {
      (n = !0), r.cancel(t.reason);
    };
  return (
    t.aborted ? i() : t.addEventListener("abort", i, { once: !0 }),
    new ReadableStream({
      async pull(l) {
        if (n) {
          l.close();
          return;
        }
        let a,
          s = new Promise((o) => {
            if (t.aborted) {
              o({ done: !0, value: void 0 });
              return;
            }
            let f = () => {
              o({ done: !0, value: void 0 });
            };
            (a = () => t.removeEventListener("abort", f)), t.addEventListener("abort", f, { once: !0 });
          }),
          d = await Promise.race([r.read(), s]);
        if ((a?.(), d.done)) {
          l.close();
          return;
        }
        l.enqueue(d.value);
      },
      cancel(l) {
        return t.removeEventListener("abort", i), r.cancel(l);
      },
    })
  );
}
function Cl(e, t) {
  Sn(e._rangeStart, e._rangeEnd, t);
}
function Sn(e, t, r) {
  let n = e;
  for (; n; ) {
    let i = n.nextSibling;
    if ((n.parentNode === r && r.removeChild(n), n === t)) break;
    n = i;
  }
}
function J(e) {
  let t = e.$runtime;
  return Qt(t) ? t : void 0;
}
function Ce(e) {
  return e.props.src;
}
function _e(e) {
  let t = e.props.name;
  return typeof t == "string" && t.length > 0 ? t : void 0;
}
function _l() {
  return `f${crypto.randomUUID().slice(0, 8)}`;
}
function vl(e, t) {
  for (; e && e.nodeType === Node.COMMENT_NODE; ) {
    if (zt(e) || (t && Kt(e) && e.data.trim().startsWith("rmx:h:"))) return e;
    e = e.nextSibling;
  }
  return e;
}
function zt(e) {
  return Kt(e) && e.data.trim().startsWith("rmx:f:");
}
function Tl(e) {
  return Kt(e) && e.data.trim() === "/rmx:f";
}
function Kt(e) {
  return e?.nodeType === Node.COMMENT_NODE;
}
function Ml(e) {
  let t = 1,
    r = e.nextSibling;
  for (; r; ) {
    if (zt(r)) t++;
    else if (Tl(r) && (t--, t === 0)) return r;
    r = r.nextSibling;
  }
  return null;
}
function Mt(e, t, r, n, i, l) {
  let { scheduler: a } = n,
    s = t._handle;
  if (s.isRemoved()) return N("_content" in t, "Expected removed component to be committed"), t;
  let [d, o] = s.render(t.props),
    f = Ae(e, Re(d), r, t, n, i, l),
    c = cl(t, f);
  return s.setScheduleUpdate(a, c, r), a.enqueueTasks(o), c;
}
function Cn(e, t, r, n, i, l, a, s) {
  let { frame: d } = i;
  if (e === null) {
    let f = n.kind === "root" ? n._pendingHydrationComponentId : void 0;
    f ? n.kind === "root" && (n._pendingHydrationComponentId = void 0) : (f = `c${++Ji}`);
    let c = pi({
        id: f,
        frame: d,
        type: t.type,
        getContext: (y) => ye(n, y),
        getFrameByName(y) {
          return J(d)?.namedFrames.get(y);
        },
        getTopFrame() {
          return J(d)?.topFrame;
        },
      }),
      h = pr(t, n, l, c, i);
    return Mt(null, h, r, i, a, s);
  }
  let o = pr(t, n, l, e._handle, i);
  return Mt(e._content, o, r, i, a, s);
}
function _n(e, t, r, n, i) {
  return {
    kind: "client-entry",
    type: e.type,
    key: e.key,
    props: e.props,
    _parent: t,
    _svg: r,
    _rangeStart: n,
    _rangeEnd: i,
  };
}
function vn(e, t) {
  let r = je(e.type, e.props, e.key),
    n = Ge(e._rangeStart);
  if (n) {
    n.root.render(r);
    return;
  }
  let i = J(t.frame),
    l = i?.pendingClientEntries.get(e._rangeStart);
  N(i && l?.[0] === e._rangeEnd, "Expected pending client entry boundary"),
    i.pendingClientEntries.set(e._rangeStart, [e._rangeEnd, r]);
}
function Nl(e, t, r, n) {
  let i = _n(t, r, e._svg, e._rangeStart, e._rangeEnd);
  return vn(i, n), i;
}
function Tn(e, t) {
  return J(t.frame)?.pendingClientEntries.delete(e._rangeStart), jt(e._rangeStart);
}
function Ee(e, t) {
  let { scheduler: r } = t;
  if (!Me(e)) {
    if (Ne(e)) {
      let n = e._children;
      for (let i = 0; i < n.length; i++) Ee(n[i], t);
      Vt(e._mixState), kn(e), pn(e);
      return;
    }
    if (fe(e)) {
      let n = e._children;
      for (let i = 0; i < n.length; i++) Ee(n[i], t);
      return;
    }
    if (ue(e)) {
      Ee(e._content, t);
      let n = e._handle.remove();
      r.enqueueTasks(n);
      return;
    }
    if (we(e)) {
      Tn(e, t);
      return;
    }
    if (e.kind === "frame") {
      bn(e);
      return;
    }
  }
}
function j(e, t, r) {
  let { scheduler: n } = r;
  if (Me(e)) {
    e._dom.parentNode?.removeChild(e._dom);
    return;
  }
  if (Ne(e)) {
    if (e._persistence) return;
    let i = hi(e._mixState);
    if (i) {
      let l = ++Zi;
      Qi(e, t, l),
        i
          .catch(() => {})
          .finally(() => {
            e._persistence && e._persistence.token === l && (mn(e), gr(e, t, r));
          });
      return;
    }
    gr(e, t, r);
    return;
  }
  if (fe(e)) {
    let i = e._children;
    for (let l = 0; l < i.length; l++) j(i[l], t, r);
    return;
  }
  if (ue(e)) {
    j(e._content, t, r);
    let i = e._handle.remove();
    n.enqueueTasks(i);
    return;
  }
  if (we(e)) {
    Tn(e, r) ? (e._rangeStart.remove(), e._rangeEnd.remove()) : Sn(e._rangeStart, e._rangeEnd, t);
    return;
  }
  if (e.kind === "frame") {
    bn(e), Cl(e, t);
    return;
  }
}
function gr(e, t, r) {
  let n = e._children;
  if (St(e)) for (let i = 0; i < n.length; i++) j(n[i], e._dom, r);
  else for (let i = 0; i < n.length; i++) Ee(n[i], r);
  Vt(e._mixState), St(e) ? (_t(e), il(e)) : (kn(e), pn(e), e._dom.parentNode?.removeChild(e._dom));
}
function te(e, t, r, n, i, l, a) {
  let s = Rl(t),
    d = t;
  if (e === null) {
    s && Nn(t);
    for (let o = 0; o < t.length; o++) d[o] = Se(t[o], r, n, i, a, l);
    return d;
  }
  if (e.length > 0 && t.length === 0 && a === void 0 && !wl(n) && Nt(e)) {
    for (let o = 0; o < e.length; o++) Ee(e[o], i);
    return (r.textContent = ""), Bt;
  }
  if (!s) {
    for (let o = 0; o < t.length; o++) {
      let f = o < e.length ? e[o] : null;
      d[o] = Ae(f, t[o], r, n, i, a, l);
    }
    if (e.length > t.length)
      for (let o = t.length; o < e.length; o++) {
        let f = e[o];
        f && j(f, r, i);
      }
    return d;
  }
  return xl(e, t, r, n, i, l, a);
}
function wl(e) {
  return Ni(e) && xe(e).innerHTML != null;
}
function Nt(e) {
  for (let t = 0; t < e.length; t++) if (!Mn(e[t])) return !1;
  return !0;
}
function Mn(e) {
  return Me(e)
    ? !0
    : Ne(e)
      ? e._mixState
        ? !1
        : Nt(e._children)
      : fe(e)
        ? Nt(e._children)
        : ue(e)
          ? Mn(e._content)
          : !1;
}
function Rl(e) {
  for (let t = 0; t < e.length; t++) if (e[t].key != null) return !0;
  return !1;
}
function Nn(e) {
  let t, r;
  for (let n of e)
    if (n.key != null) {
      if (!t) {
        t = new Set([n.key]);
        continue;
      }
      t.has(n.key) ? ((r ??= new Set()), r.add(n.key)) : t.add(n.key);
    }
  if (r?.size) {
    let n = Array.from(r, (i) => `"${String(i)}"`);
    console.warn(`Duplicate keys detected in siblings: ${n.join(", ")}. Keys should be unique.`);
  }
}
function xl(e, t, r, n, i, l, a) {
  let s = Fl(e, t) ?? Il(e, t) ?? Ll(e, t);
  s || (Nn(t), (s = Al(e, t)));
  let d = t,
    o = Dl(e.length, s);
  if (o.hasRemovals) {
    let u = new Uint8Array(e.length);
    for (let m = 0; m < s.length; m++) {
      let p = s[m];
      p >= 0 && (u[p] = 1);
    }
    for (let m = 0; m < e.length; m++) u[m] === 0 && j(e[m], r, i);
  }
  for (let u = 0; u < t.length; u++) {
    let m = s[u],
      p = m >= 0 ? e[m] : null;
    d[u] = Ae(p, t[u], r, n, i, a, l);
  }
  let f = d;
  if (o.canSkipPlacement) return f;
  let c = Ol(s),
    h = c.length - 1,
    y = a ?? null;
  for (let u = t.length - 1; u >= 0; u--) {
    let m = f[u];
    c[h] === u ? h-- : Hl(m, r, y), (y = oe(m) ?? y);
  }
  return f;
}
function Al(e, t) {
  let r = new Map(),
    n = new Set(),
    i = 0;
  for (let a = 0; a < e.length; a++) {
    let s = e[a].key;
    s != null && r.set(s, a);
  }
  let l = [];
  for (let a = 0; a < t.length; a++) {
    let s = t[a],
      d = -1;
    if (s.key != null) {
      let o = r.get(s.key);
      if (o !== void 0) {
        let f = e[o];
        !n.has(o) && f.type === s.type && (d = o);
      }
    } else
      for (let o = i; o < e.length; o++) {
        let f = e[o];
        if (!(n.has(o) || f.key != null || f.type !== s.type)) {
          (d = o), (i = o + 1);
          break;
        }
      }
    d >= 0 && n.add(d), l.push(d);
  }
  return l;
}
function Fl(e, t) {
  let r = Math.min(e.length, t.length),
    n = [];
  for (let i = 0; i < r; i++) {
    let l = t[i];
    if (l.key == null) return null;
    let a = e[i];
    if (a.key !== l.key || a.type !== l.type) return null;
    n.push(i);
  }
  for (let i = r; i < t.length; i++) {
    if (t[i].key == null) return null;
    n.push(-1);
  }
  return n;
}
function Il(e, t) {
  if (e.length !== t.length + 1) return null;
  let r = [],
    n = 0,
    i = !1;
  for (let l = 0; l < t.length; l++) {
    let a = t[l];
    if (a.key == null) return null;
    let s = e[n];
    if (s.key === a.key && s.type === a.type) {
      r.push(n), n++;
      continue;
    }
    if (i || ((i = !0), n++, (s = e[n]), s.key !== a.key || s.type !== a.type)) return null;
    r.push(n), n++;
  }
  return r;
}
function Ll(e, t) {
  if (e.length !== t.length) return null;
  let r = [],
    n = -1,
    i = -1;
  for (let o = 0; o < t.length; o++) {
    let f = t[o];
    if (f.key == null) return null;
    let c = e[o];
    if (c.key === f.key && c.type === f.type) {
      r.push(o);
      continue;
    }
    if (n === -1) n = o;
    else if (i === -1) i = o;
    else return null;
    r.push(-1);
  }
  if (n === -1) return r;
  if (i === -1) return null;
  let l = e[n],
    a = e[i],
    s = t[n],
    d = t[i];
  return l.key !== d.key || l.type !== d.type || a.key !== s.key || a.type !== s.type
    ? null
    : ((r[n] = i), (r[i] = n), r);
}
function Dl(e, t) {
  let r = t.length !== e,
    n = !0,
    i = -1,
    l = !1;
  for (let a = 0; a < t.length; a++) {
    let s = t[a];
    if (s < 0) {
      (r = !0), (l = !0);
      continue;
    }
    (l || s < i) && (n = !1), (i = s);
  }
  return { hasRemovals: r, canSkipPlacement: n };
}
function Ol(e) {
  let t = Array.from({ length: e.length }),
    r = [];
  for (let i = 0; i < e.length; i++) {
    let l = e[i] + 1;
    if (l === 0) continue;
    let a = 0,
      s = r.length;
    for (; a < s; ) {
      let d = (a + s) >> 1;
      e[r[d]] + 1 < l ? (a = d + 1) : (s = d);
    }
    (t[i] = a > 0 ? r[a - 1] : -1), (r[a] = i);
  }
  let n = r.at(-1) ?? -1;
  for (let i = r.length - 1; i >= 0; i--) (r[i] = n), (n = t[n] ?? -1);
  return r;
}
function Hl(e, t, r) {
  let n = oe(e);
  if (!n || n.parentNode !== t) return;
  let i = wt(e);
  i && ((r && Ul(n, i, r)) || (n !== r && Pl(t, n, i, r)));
}
function oe(e) {
  if (!e) return null;
  if (Me(e) || Ne(e)) return e._dom;
  if (ue(e)) return oe(e._content);
  if (we(e) || e.kind === "frame") return e._rangeStart;
  if (fe(e)) {
    let t = e._children;
    for (let r = 0; r < t.length; r++) {
      let n = oe(t[r]);
      if (n) return n;
    }
  }
  return null;
}
function wt(e) {
  if (!e) return null;
  if (Me(e) || Ne(e)) return e._dom;
  if (ue(e)) return wt(e._content);
  if (we(e) || e.kind === "frame") return e._rangeEnd;
  if (fe(e))
    for (let t = e._children.length - 1; t >= 0; t--) {
      let r = wt(e._children[t]);
      if (r) return r;
    }
  return null;
}
function Ul(e, t, r) {
  let n = e;
  for (; n; ) {
    if (n === r) return !0;
    if (n === t) break;
    n = n.nextSibling;
  }
  return !1;
}
function Pl(e, t, r, n) {
  let i = t;
  for (; i; ) {
    let l = i === r ? null : i.nextSibling;
    if ((e.insertBefore(i, n), i === r)) break;
    i = l;
  }
}
function st(e) {
  cn = e;
}
function Rt(e) {
  let t = cn;
  if (!t?.length) return !0;
  for (let r of t) {
    if (!(r instanceof Node)) continue;
    let n = r;
    if (n === e || n.contains(e)) return !1;
  }
  return !0;
}
function ke(e) {
  let t = e._parent;
  if (t.kind === "component") return ke(t);
  let r = t._children;
  if (r.length === 0) return t.kind === "root" ? (t._rangeEnd ?? null) : t.kind === "fragment" ? ke(t) : null;
  let n = r.indexOf(e);
  if (n === -1) return null;
  for (let i = n + 1; i < r.length; i++) {
    let l = oe(r[i]);
    if (l) return l;
  }
  return fe(t) ? ke(t) : t.kind === "root" ? (t._rangeEnd ?? null) : null;
}
function Vl(e, t, r, n) {
  let { frame: i, scheduler: l, styles: a } = n;
  yi(e._mixState), mn(e);
  let s = xe(e),
    d = t._children,
    o = Ze(t, r, i, l, e._mixState),
    f = o.props,
    c = le(t, r, Y(r, t), e._dom, o);
  return (
    (c._directEventState = e._directEventState),
    (c._controlledState = e._controlledState),
    Rt(e._dom) && Ut(c._mixState),
    ee(s, f, e._dom),
    Wt(c),
    Xe(c, l),
    Ye(c, f),
    (c._children = te(e._children, d, e._dom, c, n)),
    c._mixState && ie(c, i, l, a, !0),
    Rt(e._dom) && l.enqueueCommitPhase([() => Pt(c._mixState)]),
    c
  );
}
const wn = "rmx",
  yr = "style[data-rmx-style]";
function jl(e, t = wn) {
  return `${t}.${e}`;
}
function ql(e, t) {
  if (e === t) return 0;
  let r = e.compareDocumentPosition(t);
  return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
}
function Bl(e) {
  return "querySelectorAll" in e;
}
function Er(e, t) {
  if (kr(e) && e.matches(yr)) {
    t.add(e);
    return;
  }
  if (!(e instanceof Element) && !(e instanceof Document) && !(e instanceof DocumentFragment)) return;
  let r = e.querySelectorAll?.(yr) ?? [];
  for (let n = 0; n < r.length; n++) {
    let i = r[n];
    kr(i) && t.add(i);
  }
}
function $l(e) {
  let t = new Set();
  if (Bl(e)) Er(e, t);
  else for (let r of e) Er(r, t);
  return Array.from(t).sort(ql);
}
function kr(e) {
  return typeof e == "object" && e !== null && e instanceof HTMLStyleElement;
}
function Wl(e) {
  let t = e.getAttribute("data-rmx-style")?.trim();
  return t || null;
}
function Rn(e = wn) {
  let t = null,
    r = 0,
    n = new Map();
  function i() {
    return t || ((t = new CSSStyleSheet()), document.adoptedStyleSheets.push(t)), t;
  }
  function l() {
    t &&
      ((document.adoptedStyleSheets = Array.from(document.adoptedStyleSheets).filter((p) => p !== t)),
      (t = null));
  }
  function a() {
    if (t) for (let p = t.cssRules.length - 1; p >= 0; p--) t.deleteRule(p);
  }
  function s(p) {
    let b = Wl(p);
    if (!b) return;
    let E = n.get(b);
    if (E) return (E.pinned = !0), p.remove(), b;
    let C = p.textContent?.trim() ?? "";
    if (C.length === 0) {
      p.remove();
      return;
    }
    try {
      let v = i(),
        w = v.cssRules.length;
      return v.insertRule(C, w), n.set(b, { count: 0, index: w, pinned: !0 }), p.remove(), b;
    } catch {
      return;
    }
  }
  function d(p) {
    let b = n.get(p);
    return b !== void 0 && (b.pinned || b.count > 0);
  }
  function o() {
    return r;
  }
  function f(p, b) {
    let E = n.get(p);
    if (E) {
      E.pinned || E.count++;
      return;
    }
    let C = i(),
      v = C.cssRules.length;
    C.insertRule(`@layer ${jl(p, e)} { ${b} }`, v), n.set(p, { count: 1, index: v, pinned: !1 });
  }
  function c(p) {
    let b = n.get(p);
    if (!b || b.pinned || (b.count--, b.count > 0)) return;
    let E = b.index;
    if ((n.delete(p), !!t)) {
      t.deleteRule(E);
      for (let [, C] of n.entries()) C.index > E && C.index--;
    }
  }
  function h() {
    a(), n.clear(), l(), r++;
  }
  function y(p) {
    let b = $l(p),
      E = new Set();
    for (let C of b) {
      let v = s(C);
      v && E.add(v);
    }
    return E;
  }
  function u() {
    return n.keys();
  }
  function m() {
    l(), n.clear(), r++;
  }
  return {
    insert: f,
    remove: c,
    has: d,
    getGeneration: o,
    reset: h,
    adoptServerStyles: y,
    selectors: u,
    dispose: m,
  };
}
let zl = typeof window < "u" ? Rn() : null,
  Gt = zl;
const Kl = 50,
  Gl = 50;
function Xl(e) {
  return e.type.name || "Anonymous";
}
function br(e) {
  return Array.from(e, ([t, r]) => `${t} x${r}`).join(", ");
}
function xn(e, t, r = Gt) {
  let n = vi(e),
    i = new Map(),
    l = [],
    a = [],
    s = [],
    d = !1,
    o = !1,
    f = 0,
    c = new WeakMap(),
    h = new Map(),
    y = !1,
    u = !1,
    m = new EventTarget(),
    p = { beforeUpdate: 0, commit: 0 },
    b;
  function E(S) {
    console.error(S), t.dispatchEvent(re(S));
  }
  function C() {
    u ||
      ((u = !0),
      setTimeout(() => {
        (f = 0), (c = new WeakMap()), (h = new Map()), (y = !1), (u = !1);
      }, 0));
  }
  function v(S) {
    f++;
    let M = Xl(S);
    h.set(M, (h.get(M) ?? 0) + 1);
    let R = (c.get(S) ?? 0) + 1;
    if (
      (c.set(S, R),
      C(),
      !y &&
        f >= Kl &&
        ((y = !0),
        console.warn(
          `${f} cascading component updates detected in one event loop turn. Consider reducing hydration regions. Components: ${br(h)}`,
        )),
      R > Gl)
    ) {
      let F = new Error(
        `handle.update() infinite loop detected in ${M} after ${R} cascading updates. Components: ${br(h)}`,
      );
      return E(F), !1;
    }
    return !0;
  }
  function w() {
    if (!o) {
      o = !0;
      try {
        for (;;) {
          d = !1;
          let S = new Map(i);
          if ((i.clear(), !(S.size > 0 || l.length > 0 || a.length > 0 || s.length > 0))) return;
          n.capture();
          let R = S.size > 0 ? Array.from(new Set(S.values())) : [];
          if ((st(R), H("beforeUpdate", R), S.size > 0)) {
            let F = Array.from(S),
              U = new Set();
            for (let [L, tt] of F) {
              if (X(L, S, U)) continue;
              if (!v(L)) return;
              let rt = L._content,
                nt = ke(L) || void 0;
              try {
                Mt(rt, L, tt, L._context, nt);
              } catch (it) {
                E(it);
              }
            }
          }
          I(l), st(void 0), n.restore(), I(a), H("commit", R), I(s);
        }
      } finally {
        st(void 0), (o = !1);
      }
    }
  }
  function H(S, M) {
    if (p[S] === 0) return;
    let R = Object.assign(new Event(S), { parents: M });
    m.dispatchEvent(R);
  }
  function I(S) {
    for (; S.length > 0; ) {
      let M = S.shift();
      if (M)
        try {
          M();
        } catch (R) {
          E(R);
        }
    }
  }
  function A() {
    d || o || ((d = !0), queueMicrotask(w));
  }
  function X(S, M, R) {
    let F = [],
      U = S._parent;
    for (; U; ) {
      if (R.has(U)) {
        for (let L of F) R.add(L);
        return !1;
      }
      if ((F.push(U), ue(U) && M.has(U))) return !0;
      U = U.kind === "root" ? void 0 : U._parent;
    }
    for (let L of F) R.add(L);
    return !1;
  }
  return (
    (b = {
      enqueue(S, M) {
        i.set(S, M), A();
      },
      enqueueWork(S) {
        l.push(...S), A();
      },
      enqueueCommitPhase(S) {
        a.push(...S), A();
      },
      enqueueTasks(S) {
        s.push(...S), A();
      },
      addEventListener(S, M, R) {
        M && p[S]++, m.addEventListener(S, M, R);
      },
      removeEventListener(S, M, R) {
        M && (p[S] = Math.max(0, p[S] - 1)), m.removeEventListener(S, M, R);
      },
      dequeue() {
        w();
      },
    }),
    b
  );
}
function Yl(e) {
  if (!(e instanceof Comment)) return;
  let t = e.data.trim();
  if (!t.startsWith("rmx:h:")) return;
  let r = t.slice(6);
  return r.length > 0 ? r : void 0;
}
function Xt(e, t = {}) {
  let [r, n] = e,
    i = null,
    l,
    a = t.styleManager ?? Gt,
    s = n.parentNode;
  N(s, "Expected parent node"), N(r.parentNode === s, "Boundaries must share parent");
  let d = s,
    o = r.nextSibling,
    f = new Yr(),
    c = t.scheduler ?? xn(d.ownerDocument ?? document, f, a),
    y = {
      frame:
        t.frame ??
        An({
          src: t.frameInit?.src,
          resolveFrame: t.frameInit?.resolveFrame,
          loadModule: t.frameInit?.loadModule,
          errorTarget: f,
          scheduler: c,
          styleManager: a,
        }),
      scheduler: c,
      styles: a,
      rootTarget: f,
    },
    u = !1;
  function m(C) {
    f.dispatchEvent(re(Ke(C)));
  }
  function p() {
    u || (d.addEventListener("error", m), (u = !0));
  }
  function b() {
    u && (d.removeEventListener("error", m), (u = !1));
  }
  p();
  let E = Object.assign(f, {
    render(C) {
      p(), (l = C);
      let v = Re(C),
        w = {
          kind: "root",
          type: Jr,
          _children: [],
          _svg: !1,
          _getContext: t.getContext,
          _rangeStart: r,
          _rangeEnd: n,
          _pendingHydrationComponentId: Yl(r),
        };
      c.enqueueWork([
        () => {
          let I = Ae(i, v, d, w, y, n, o === null ? void 0 : { current: o });
          (w._children = [I]), (i = I), (o = null);
        },
      ]),
        c.dequeue();
    },
    reconcile() {
      l !== void 0 && E.render(l);
    },
    dispose() {
      if ((b(), un(E), (l = void 0), !i)) return;
      let C = i;
      (i = null), c.enqueueWork([() => j(C, d, y)]), c.dequeue();
    },
    flush() {
      c.dequeue();
    },
  });
  return fn(E), E;
}
function Jl(e, t = {}) {
  let r = null,
    n,
    i = t.styleManager ?? Gt;
  e.innerHTML.trim() !== "" && i.adoptServerStyles(e);
  let l = e.innerHTML.trim() !== "" ? e.firstChild : void 0,
    a = new Yr(),
    s = t.scheduler ?? xn(e.ownerDocument ?? document, a, i),
    o = {
      frame:
        t.frame ??
        An({
          src: t.frameInit?.src,
          resolveFrame: t.frameInit?.resolveFrame,
          loadModule: t.frameInit?.loadModule,
          errorTarget: a,
          scheduler: s,
          styleManager: i,
        }),
      scheduler: s,
      styles: i,
      rootTarget: a,
    },
    f = !1;
  function c(m) {
    a.dispatchEvent(re(Ke(m)));
  }
  function h() {
    f || (e.addEventListener("error", c), (f = !0));
  }
  function y() {
    f && (e.removeEventListener("error", c), (f = !1));
  }
  h();
  let u = Object.assign(a, {
    render(m) {
      h(), (n = m);
      let p = Re(m),
        b = { kind: "root", type: Jr, _children: [], _svg: !1, _getContext: t.getContext };
      s.enqueueWork([
        () => {
          let C = Ae(r, p, e, b, o, void 0, l === void 0 ? void 0 : { current: l });
          (b._children = [C]), (r = C), (l = void 0);
        },
      ]),
        s.dequeue();
    },
    reconcile() {
      n !== void 0 && u.render(n);
    },
    dispose() {
      if ((y(), un(u), (n = void 0), !r)) return;
      let m = r;
      (r = null), s.enqueueWork([() => j(m, e, o)]), s.dequeue();
    },
    flush() {
      s.dequeue();
    },
  });
  return fn(u), u;
}
function An(e) {
  let t =
      e.resolveFrame ??
      (() => {
        throw new Error(
          "Cannot render <Frame /> without frame runtime. Use run() or pass frameInit to createRoot/createRangeRoot.",
        );
      }),
    r = Kn({
      topFrame: void 0,
      loadModule:
        e.loadModule ??
        (() => {
          throw new Error("loadModule is required to hydrate client entries inside <Frame />");
        }),
      resolveFrame: t,
      errorTarget: e.errorTarget,
      pendingClientEntries: new Map(),
      scheduler: e.scheduler,
      styleManager: e.styleManager,
      moduleCache: new Map(),
      moduleLoads: new Map(),
      frameInstances: new WeakMap(),
      namedFrames: new Ra(),
    });
  r.canResolveFrames = !!e.resolveFrame;
  let n = Wr({ src: e.src ?? "../shop/", $runtime: r });
  return (r.topFrame = n), n;
}
const Ue = "data-rmx-preserve-dom";
function Pe(e, t, r) {
  let n = e[0]?.parentNode ?? r.regionParent ?? null;
  N(n, "Parent node not found");
  let i = r.regionTailRef ?? (e.length > 0 ? e[e.length - 1].nextSibling : null);
  In(e, t, n, i, r);
}
function Sr(e, t, r) {
  if (Be(e) && Be(t)) {
    let i = t.textContent || "";
    e.textContent !== i && (e.textContent = i);
    return;
  }
  if (q(e) && q(t)) {
    let i = t.data;
    return e.data !== i && (e.data = i), Dn(t);
  }
  if (G(e) && G(t) && Ln(e, t)) {
    let i = t.data,
      l = !1;
    if ($(e))
      if (Yt(e, t, r)) {
        e.data !== i && (e.data = i), (l = !0);
        let a = r.frameInstances.get(e),
          s = Hn(t, r);
        if (a && s) {
          if (s.status === "resolved") {
            let d = At(t),
              o = pa(e.ownerDocument, t, d),
              f = a.renderMarkerContent({ ...s, id: Un(t) }, o, {
                data: r.data,
                signal: r.signal,
                reconciliationTracker: r.reconciliationTracker,
              });
            return r.reconciliationTracker && r.reconciliationTracker.waitFor(f), d;
          }
          if (a.isDisplayingResolvedContent()) return At(t);
        }
      } else e.data !== i && (Pn(e, r), (e.data = i), (l = !0));
    !l && e.data !== i && (e.data = i);
    return;
  }
  if (se(e) && se(t)) {
    if (e.tagName !== t.tagName) {
      let i = e.parentNode;
      i && (i.insertBefore(t, e), Te(e, i, r));
      return;
    }
    if (Zl(e, t) || (Fn(e, t), Ql(e, t))) return;
    ta(e, t, r);
    return;
  }
  let n = e.parentNode;
  n && (n.insertBefore(t, e), Te(e, n, r));
}
function Fn(e, t) {
  let r = e.getAttributeNames(),
    n = t.getAttributeNames(),
    i = t.getAttribute("data-rmx-preserve-attrs")?.split(/[\t\n\f\r ]+/),
    l = new Set(n);
  for (let a of r)
    if (!i?.includes(a) && !l.has(a)) {
      if (Cr(e, t, a)) continue;
      e.removeAttribute(a);
    }
  for (let a of n) {
    if (i?.includes(a)) continue;
    let s = e.getAttribute(a),
      d = t.getAttribute(a);
    if (s !== d) {
      if (Cr(e, t, a)) continue;
      e.setAttribute(a, d == null ? "" : String(d));
    }
  }
}
function Zl(e, t) {
  return t.hasAttribute(Ue) ? (e.hasAttribute(Ue) || e.setAttribute(Ue, ""), !0) : !1;
}
function Cr(e, t, r) {
  return r === "open" &&
    ((e instanceof HTMLDetailsElement && t instanceof HTMLDetailsElement) ||
      (e instanceof HTMLDialogElement && t instanceof HTMLDialogElement))
    ? e.open !== t.open
    : r === "checked" && e instanceof HTMLInputElement && t instanceof HTMLInputElement
      ? e.checked !== t.checked
      : r === "value" && e instanceof HTMLInputElement && t instanceof HTMLInputElement && ea(e)
        ? e.value !== t.value
        : r === "selected" && e instanceof HTMLOptionElement && t instanceof HTMLOptionElement
          ? e.selected !== t.selected
          : r === "popover"
            ? _r(e) !== _r(t)
            : !1;
}
function Ql(e, t) {
  return e instanceof HTMLTextAreaElement && t instanceof HTMLTextAreaElement ? e.value !== t.value : !1;
}
function ea(e) {
  return (
    e.type !== "button" &&
    e.type !== "checkbox" &&
    e.type !== "hidden" &&
    e.type !== "image" &&
    e.type !== "radio" &&
    e.type !== "reset" &&
    e.type !== "submit"
  );
}
function _r(e) {
  try {
    return e.matches(":popover-open");
  } catch {
    return !1;
  }
}
function ta(e, t, r) {
  let n = r.shouldPreserveHeadNode,
    i = [],
    l = Array.from(e.childNodes);
  e === e.ownerDocument.head && n && ((i = l.filter(n)), (l = l.filter((s) => !n(s))));
  let a = Array.from(t.childNodes);
  In(l, a, e, i[0] ?? null, r);
}
function In(e, t, r, n, i) {
  let l = vr(e),
    a = vr(t),
    s = new Map();
  for (let m = 0; m < l.length; m++) {
    let p = He(l[m]);
    p !== void 0 && s.set(p, m);
  }
  let d = new Array(l.length).fill(!1),
    o = new Array(a.length).fill(-1);
  for (let m = 0; m < a.length; m++) {
    let p = a[m],
      b = -1,
      E = He(p);
    if (E !== void 0) {
      let C = s.get(E);
      C !== void 0 && !d[C] && Tr(l[C], p) && (b = C);
    }
    if (b === -1 && p.kind !== "node")
      for (let C = 0; C < l.length; C++) {
        let v = l[C];
        if (!(d[C] || v.kind !== p.kind) && ra(v, p, i)) {
          b = C;
          break;
        }
      }
    b !== -1 && (d[b] = !0), (o[m] = b);
  }
  let f = [];
  for (let m = 0; m < l.length; m++) d[m] || f.push(m);
  let c = [];
  for (let m = 0; m < a.length; m++) o[m] === -1 && c.push(m);
  let h = Math.min(f.length, c.length);
  for (let m = 0; m < h; m++) {
    let p = f[m],
      b = c[m],
      E = l[p],
      C = a[b];
    E.kind !== "node" ||
      C.kind !== "node" ||
      He(E) !== void 0 ||
      He(C) !== void 0 ||
      !Tr(E, C) ||
      ((d[p] = !0), (o[b] = p));
  }
  let y = new Array(a.length);
  for (let m = 0; m < a.length; m++) {
    let p = o[m],
      b = a[m];
    if (p === -1) {
      y[m] = b;
      continue;
    }
    let E = l[p];
    if (E.kind === "node" && b.kind === "node") {
      Sr(E.node, b.node, i), (y[m] = E);
      continue;
    }
    N(E.kind !== "node" && b.kind !== "node", "Expected boundaries");
    let C = fa(E.start, b.start, e, t, E.startIndex, b.startIndex, i);
    if (C) {
      ma(C, r, i), (y[m] = b);
      continue;
    }
    !Sr(E.start, b.start, i) &&
      E.kind === "frame" &&
      b.kind === "frame" &&
      Pe(aa(E.start, E.end), t.slice(b.startIndex + 1, b.endIndex), {
        ...i,
        regionParent: r,
        regionTailRef: E.end,
      }),
      (y[m] = E);
  }
  let u = n;
  for (let m = y.length - 1; m >= 0; m--) {
    let p = y[m],
      b = na(p),
      E = u?.parentNode === r ? u : null;
    if (p.kind === "node" && oa(p.node) && p.node.parentNode === r) {
      u = p.node;
      continue;
    }
    ia(p, r, E), b.parentNode === r && (u = b);
  }
  for (let m = 0; m < l.length; m++) d[m] || la(l[m], r, i);
}
function vr(e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    if (q(n)) {
      let i = xt(e, r);
      N(i > r, "Hydration end marker not found");
      let l = e[i];
      N(We(l), "Expected hydration end marker"),
        t.push({ kind: "hydration", start: n, end: l, startIndex: r, endIndex: i }),
        (r = i);
      continue;
    }
    if ($(n)) {
      let i = Ft(e, r);
      N(i > r, "Frame end marker not found");
      let l = e[i];
      N(ve(l), "Expected frame end marker"),
        t.push({ kind: "frame", start: n, end: l, startIndex: r, endIndex: i }),
        (r = i);
      continue;
    }
    N(!We(n), "Unexpected hydration end marker"),
      N(!ve(n), "Unexpected frame end marker"),
      t.push({ kind: "node", node: n, startIndex: r, endIndex: r });
  }
  return t;
}
function He(e) {
  if (!(e.kind !== "node" || !se(e.node))) return e.node.getAttribute("data-rmx-key") ?? void 0;
}
function Tr(e, t) {
  return e.kind !== t.kind ? !1 : e.kind !== "node" || t.kind !== "node" ? !0 : sa(e.node, t.node);
}
function ra(e, t, r) {
  return e.kind !== t.kind ? !1 : e.kind === "frame" ? Yt(e.start, t.start, r) : On(e.start, t.start, r);
}
function na(e) {
  return e.kind === "node" ? e.node : e.start;
}
function ia(e, t, r) {
  if (e.kind === "node") {
    (e.node.parentNode !== t || e.node.nextSibling !== r) && t.insertBefore(e.node, r);
    return;
  }
  let n = $e(e.start, e.end);
  if (e.start.parentNode === t && e.end.nextSibling === r) return;
  let i = e.start.ownerDocument.createDocumentFragment();
  for (let l of n) i.appendChild(l);
  t.insertBefore(i, r);
}
function la(e, t, r) {
  if (e.kind === "node") {
    Te(e.node, t, r);
    return;
  }
  for (let n of $e(e.start, e.end)) Te(n, t, r);
}
function aa(e, t) {
  let r = [],
    n = e.nextSibling;
  for (; n && n !== t; ) r.push(n), (n = n.nextSibling);
  return r;
}
function oa(e) {
  return se(e) && e.hasAttribute(Ue);
}
function sa(e, t) {
  return Be(e) && Be(t) ? !0 : se(e) && se(t) ? e.tagName === t.tagName : G(e) && G(t) ? Ln(e, t) : !1;
}
function Mr(e) {
  if (G(e)) {
    if ($(e)) return "frame-start";
    if (ve(e)) return "frame-end";
    if (q(e)) return "virtual-root-start";
    if (We(e)) return "virtual-root-end";
  }
}
function Ln(e, t) {
  return Mr(e) === Mr(t);
}
function da(e) {
  return G(e) && e.data.trim() === "/rmx:h";
}
function Dn(e) {
  let t = e.nextSibling,
    r = 1;
  for (; t; ) {
    if (G(t) && (q(t) && r++, We(t) && (r--, r === 0))) return t;
    t = t.nextSibling;
  }
  throw new Error("Hydration end marker not found");
}
function xt(e, t) {
  let r = 1;
  for (let n = t + 1; n < e.length; n++) {
    let i = e[n];
    if ((q(i) && r++, da(i) && (r--, r === 0))) return n;
  }
  return t;
}
function At(e) {
  let t = e.nextSibling,
    r = 1;
  for (; t; ) {
    if (($(t) && r++, ve(t) && (r--, r === 0))) return t;
    t = t.nextSibling;
  }
  throw new Error("Frame end marker not found");
}
function Ft(e, t) {
  let r = 1;
  for (let n = t + 1; n < e.length; n++) {
    let i = e[n];
    if (($(i) && r++, ve(i) && (r--, r === 0))) return n;
  }
  return t;
}
function Be(e) {
  return e.nodeType === Node.TEXT_NODE;
}
function se(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function G(e) {
  return e.nodeType === Node.COMMENT_NODE;
}
function $(e) {
  return e instanceof Comment && e.data.trim().startsWith("rmx:f:");
}
function ve(e) {
  return e instanceof Comment && e.data.trim() === "/rmx:f";
}
function Yt(e, t, r) {
  if (!$(t)) return !1;
  let n = Hn(t, r),
    i = r.frameInstances.get(e);
  return i !== void 0 && n !== void 0 && i.matchesIdentity(n.src, n.name);
}
function On(e, t, r) {
  if (!q(t)) return !1;
  let n = Ge(e),
    i = ua(t, r);
  return (
    n !== void 0 &&
    i !== void 0 &&
    n.identity.moduleUrl === i.moduleUrl &&
    n.identity.exportName === i.exportName
  );
}
function fa(e, t, r, n, i, l, a) {
  if ($(e) && $(t) && !Yt(e, t, a))
    return { currentStart: e, nextStart: t, currentEndIndex: Ft(r, i), nextEndIndex: Ft(n, l) };
  if (q(e) && q(t) && !On(e, t, a))
    return { currentStart: e, nextStart: t, currentEndIndex: xt(r, i), nextEndIndex: xt(n, l) };
}
function ua(e, t) {
  let r = ca(e);
  return t.data.h?.[r];
}
function ca(e) {
  let t = e.data.trim();
  return N(t.startsWith("rmx:h:"), "Invalid hydration start marker"), t.slice(6);
}
function Hn(e, t) {
  let r = Un(e);
  return t.data.f?.[r];
}
function Un(e) {
  let t = e.data.trim();
  return N(t.startsWith("rmx:f:"), "Invalid frame start marker"), t.slice(6);
}
function ma(e, t, r) {
  let n = Nr(e.currentStart),
    i = Nr(e.nextStart),
    l = $e(e.nextStart, i),
    a = $e(e.currentStart, n);
  for (let s of l) t.insertBefore(s, e.currentStart);
  for (let s of a) Te(s, t, r);
}
function Nr(e) {
  if ($(e)) return At(e);
  if (q(e)) return Dn(e);
  throw new Error("Comment marker range start not found");
}
function $e(e, t) {
  let r = [],
    n = e;
  for (; n && (r.push(n), n !== t); ) n = n.nextSibling;
  return r;
}
function pa(e, t, r) {
  let n = e.createDocumentFragment(),
    i = t.nextSibling;
  for (; i && i !== r; ) {
    let l = i.nextSibling;
    n.appendChild(i), (i = l);
  }
  return n;
}
function Te(e, t, r) {
  ha(e), ga(e, r), e.parentNode === t && t.removeChild(e);
}
function ha(e) {
  let t = [e];
  for (; t.length > 0; ) {
    let r = t.pop();
    if (r && !(q(r) && jt(r))) for (let n of Array.from(r.childNodes)) t.push(n);
  }
}
function ga(e, t) {
  let r = [e];
  for (; r.length > 0; ) {
    let n = r.pop();
    if (n) {
      $(n) && Pn(n, t);
      for (let i of Array.from(n.childNodes)) r.push(i);
    }
  }
}
function Pn(e, t) {
  let r = t.frameInstances.get(e);
  r && (r.dispose(), t.frameInstances.delete(e));
}
function q(e) {
  return G(e) && e.data.trim().startsWith("rmx:h:");
}
function We(e) {
  return G(e) && e.data.trim() === "/rmx:h";
}
const dt = /<!--\s*rmx:flush\s+(document|fragment)\s*-->/g;
function wr(e, t) {
  dt.lastIndex = t;
  let r = dt.exec(e);
  if (r) return { index: r.index, endIndex: dt.lastIndex, kind: r[1] };
}
const Rr = 'link[data-rmx-module-preload][rel~="modulepreload" i][href]',
  xr = new WeakMap();
function ya(e) {
  let t = xr.get(e);
  return t || ((t = Ea(e)), xr.set(e, t)), t;
}
function Ea(e) {
  let t = new Set(),
    r = new WeakSet(),
    n = 0;
  function i(s) {
    r.add(s), n++;
  }
  function l(s) {
    r.delete(s) && n--;
  }
  function a(s) {
    let d = e.createElement("link");
    (d.rel = "modulepreload"), (d.href = s), d.setAttribute("data-rmx-module-preload", "");
    let o = d.href;
    t.has(o) ||
      (t.add(o),
      i(d),
      d.addEventListener(
        "load",
        () => {
          l(d), d.remove();
        },
        { once: !0 },
      ),
      d.addEventListener(
        "error",
        () => {
          l(d), d.remove(), t.delete(o);
        },
        { once: !0 },
      ),
      e.head.append(d));
  }
  return {
    adoptInitialPreloadLinks(s) {
      for (let d of s.querySelectorAll(Rr)) {
        let h = function (y) {
          c || ((c = !0), l(d), l(o), d.remove(), o.remove(), y || t.delete(f));
        };
        if (r.has(d)) continue;
        let o = e.createElement("link");
        (o.rel = "modulepreload"), (o.href = d.href), o.setAttribute("data-rmx-module-preload", "");
        let f = d.href;
        t.add(f), i(d), i(o);
        let c = !1;
        o.addEventListener("load", () => h(!0), { once: !0 }),
          o.addEventListener("error", () => h(!1), { once: !0 }),
          e.head.append(o);
      }
    },
    async consumePreloadLinks(s, d) {
      let o = [];
      for (let c of s.querySelectorAll(Rr)) {
        let h = c.getAttribute("href");
        c.remove(), h && o.push(h);
      }
      let f = d ? await d(o) : o;
      for (let c of f) a(c);
    },
    hasActivePreloads() {
      return n > 0;
    },
    isActivePreload(s) {
      return s instanceof HTMLLinkElement && r.has(s);
    },
  };
}
const ft = 'script[data-rmx-import-map][type="importmap"]',
  Ar = 'script[type="importmap"]',
  Fr = new WeakMap();
class Jt extends Error {}
function ka(e) {
  let t = Fr.get(e);
  return t || ((t = ba(e)), Fr.set(e, t)), t;
}
function ba(e) {
  let t = e.head.querySelector(ft)?.nonce,
    r = Sa(),
    n = new WeakSet(),
    i = !1;
  function l(o) {
    if (n.has(o)) return;
    n.add(o);
    let f = Dr(o.textContent ?? "");
    f && Ir(r, f, o.baseURI);
  }
  function a() {
    for (let o of e.querySelectorAll(Ar)) l(o);
  }
  function s(o) {
    for (let f of o)
      if (f.type === "childList")
        for (let c of f.addedNodes) c instanceof HTMLScriptElement && c.matches(Ar) && l(c);
  }
  let d = new MutationObserver(s);
  return (
    d.observe(e, { childList: !0 }),
    d.observe(e.head, { childList: !0 }),
    a(),
    {
      consumeImportMaps(o) {
        if (i) return "blocked";
        s(d.takeRecords()), a();
        let f = Array.from(o.querySelectorAll(ft));
        if (f.length === 0) return "ready";
        let c = {
            imports: new Map(r.imports),
            scopes: new Map(Array.from(r.scopes, ([u, m]) => [u, new Map(m)])),
            integrity: new Map(r.integrity),
          },
          h = [],
          y = e.baseURI;
        try {
          for (let u of f) {
            let m = Dr(u.textContent ?? "");
            if (!m) continue;
            let p = Ca(c, m, y);
            p && (h.push(p), Ir(c, p, y));
          }
        } catch (u) {
          if (!(u instanceof Jt)) throw u;
          return console.warn(u.message), (i = !0), "conflict";
        }
        for (let u of h) {
          let m = Ta(e, u, t);
          n.add(m);
        }
        r = c;
        for (let u of f) u.remove();
        return "ready";
      },
      disconnect() {
        d.disconnect();
      },
      shouldPreserveHeadNode(o) {
        return o.isConnected && o instanceof HTMLScriptElement && o.matches(ft);
      },
    }
  );
}
function Sa() {
  return { imports: new Map(), scopes: new Map(), integrity: new Map() };
}
function Ca(e, t, r) {
  let n = Vn(e.imports, t.imports, r),
    i = _a(e, t.scopes, r),
    l = va(e.integrity, t.integrity, r);
  if (!(!n && !i && !l))
    return {
      ...(n ? { imports: n } : null),
      ...(i ? { scopes: i } : null),
      ...(l ? { integrity: l } : null),
    };
}
function Vn(e, t, r, n) {
  if (!t) return;
  let i = {};
  for (let [l, a] of Object.entries(t)) {
    let s = qn(l, r);
    if (s === null) continue;
    let d = Bn(a, r),
      o = e.get(s);
    if (o?.normalizedHref !== d) {
      if (o) {
        let f = n ? ` in scope "${n}"` : "";
        throw new Jt(
          `[remix] Reloading page after import map conflict for "${l}"${f}: ${Or(o.href)} is already installed, but the new map points to ${Or(a)}`,
        );
      }
      i[l] = a;
    }
  }
  return Object.keys(i).length > 0 ? i : void 0;
}
function _a(e, t, r) {
  if (!t) return;
  let n = {};
  for (let [i, l] of Object.entries(t)) {
    let a = de(i, r);
    if (a === null) continue;
    let s = e.scopes.get(a) ?? new Map(),
      d = Vn(s, l, r, i);
    d && (n[i] = d);
  }
  return Object.keys(n).length > 0 ? n : void 0;
}
function va(e, t, r) {
  if (!t) return;
  let n = {};
  for (let [i, l] of Object.entries(t)) {
    let a = de(i, r);
    if (a === null) continue;
    let s = e.get(a);
    if (s !== l) {
      if (s !== void 0)
        throw new Jt(
          `[remix] Reloading page after import map integrity conflict for "${i}": "${s}" is already installed, but the new map points to "${l}"`,
        );
      n[i] = l;
    }
  }
  return Object.keys(n).length > 0 ? n : void 0;
}
function Ir(e, t, r) {
  if ((Lr(e.imports, t.imports, r), t.scopes))
    for (let [n, i] of Object.entries(t.scopes)) {
      let l = de(n, r);
      if (l === null) continue;
      let a = e.scopes.get(l);
      a || ((a = new Map()), e.scopes.set(l, a)), Lr(a, i, r);
    }
  if (t.integrity)
    for (let [n, i] of Object.entries(t.integrity)) {
      let l = de(n, r);
      l === null || e.integrity.has(l) || e.integrity.set(l, i);
    }
}
function Lr(e, t, r) {
  for (let [n, i] of Object.entries(t ?? {})) {
    let l = qn(n, r);
    l === null || e.has(l) || e.set(l, { href: i, normalizedHref: Bn(i, r) });
  }
}
function Ta(e, t, r) {
  let n = e.createElement("script");
  return (
    n.setAttribute("data-rmx-import-map", ""),
    (n.type = "importmap"),
    r && (n.nonce = r),
    (n.textContent = JSON.stringify(t)),
    e.head.appendChild(n),
    n
  );
}
function Dr(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return null;
  }
  if (!t || typeof t != "object") return null;
  let r = {};
  if ("imports" in t) {
    let n = t.imports;
    if (!jn(n)) return null;
    r.imports = n;
  }
  if ("scopes" in t) {
    let n = t.scopes;
    if (!Ma(n)) return null;
    r.scopes = n;
  }
  if ("integrity" in t) {
    let n = t.integrity;
    if (!Na(n)) return null;
    r.integrity = n;
  }
  return r;
}
function jn(e) {
  return !e || typeof e != "object" ? !1 : Object.values(e).every((t) => t === null || typeof t == "string");
}
function Ma(e) {
  return !e || typeof e != "object" ? !1 : Object.values(e).every(jn);
}
function Na(e) {
  return !e || typeof e != "object" ? !1 : Object.values(e).every((t) => typeof t == "string");
}
function qn(e, t) {
  return e.startsWith("../shop/") || e.startsWith("./") || e.startsWith("../") || URL.canParse(e) ? de(e, t) : e;
}
function Bn(e, t) {
  return e === null ? null : de(e, t);
}
function de(e, t) {
  try {
    return new URL(e, t).href;
  } catch {
    return null;
  }
}
function Or(e) {
  return e === null ? "null" : `"${e}"`;
}
const Zt = "remix-document-reload";
function lo(e) {
  return e === Zt;
}
function wa(e, t = e.location.href) {
  let r = e.defaultView?.navigation;
  r ? r.navigate(t, { history: "replace", info: Zt }) : e.location.replace(t);
}
function ao(e) {
  let t = e.defaultView?.navigation;
  t && typeof t.reload == "function" ? t.reload({ info: Zt }) : e.location.reload();
}
class Ra {
  #e = new Map();
  register(t, r) {
    let n = this.#e.get(t);
    n ? n.push(r) : this.#e.set(t, [r]);
  }
  get(t) {
    return this.#e.get(t)?.at(-1);
  }
  unregister(t, r) {
    let n = this.#e.get(t);
    if (!n) return;
    let i = n.lastIndexOf(r);
    i !== -1 && (n.splice(i, 1), n.length === 0 && this.#e.delete(t));
  }
}
const ze = new Map(),
  ge = new Map(),
  be = new WeakMap(),
  ut = new WeakMap(),
  xa = /<!doctype(?:\s[^>]*)?>/gi;
function Aa(e, t) {
  let r = new AbortController(),
    n = t ? [e, t] : [e],
    i = () => r.abort();
  for (let l of n) {
    if (l.aborted) {
      r.abort();
      break;
    }
    l.addEventListener("abort", i, { once: !0 });
  }
  return {
    controller: r,
    disconnect() {
      for (let l of n) l.removeEventListener("abort", i);
    },
  };
}
function $n(e) {
  return e.replace(xa, "");
}
const Fa = /^\s*(?:<!doctype\b|<html\b)/i;
function Wn(e) {
  return Fa.test(e) ? "document" : "fragment";
}
const zn = Symbol("FrameRuntime");
function Qt(e) {
  return Qe(e) && Reflect.get(e, zn) === !0;
}
function oo(e, t) {
  let r = e.$runtime;
  N(Qt(r), "Expected a frame runtime");
  let n = r.reloadForNavigation;
  return N(n, "Expected frame runtime to support navigation reloads"), n(t);
}
function It(e, t) {
  let r = Br(e),
    n,
    i,
    l = !t.styleManager,
    a,
    s,
    d = t.styleManager ?? Rn(),
    o = ya(r.doc),
    f = ka(r.doc),
    c = t.marker,
    h = t.marker?.status ?? "resolved",
    y,
    u,
    m,
    p = !1,
    b,
    E = !1,
    C = new AbortController();
  async function v(g, k) {
    let _ = f.consumeImportMaps(g);
    return _ !== "ready"
      ? (C.abort(), _ === "conflict" && wa(r.doc, k), !1)
      : (await o.consumePreloadLinks(g, t.processClientEntryPreloads), !0);
  }
  let w;
  function H(g) {
    return f.shouldPreserveHeadNode(g) || (o.hasActivePreloads() && o.isActivePreload(g));
  }
  $r(r.root) ? o.adoptInitialPreloadLinks(r.root) : (w = v(r.root)), Hr(t.data, r.doc);
  let I = Kn({ ...t, styleManager: d, reloadForNavigation: er }),
    A = Wr({
      src: t.src,
      $runtime: I,
      reload: async () => (await ii()).signal,
      replace: async (g) => {
        await M(g);
      },
    });
  I.topFrame = I.topFrame ?? t.topFrame ?? A;
  let X = t.marker?.name ?? t.name;
  X && t.namedFrames.register(X, A);
  let S = {
    topFrame: I.topFrame,
    getContext: (g) => I.getContext?.(g),
    errorTarget: t.errorTarget,
    loadModule: t.loadModule,
    resolveFrame: t.resolveFrame,
    pendingClientEntries: t.pendingClientEntries,
    scheduler: t.scheduler,
    frame: A,
    styleManager: d,
    data: t.data,
    moduleCache: t.moduleCache,
    moduleLoads: t.moduleLoads,
    frameInstances: t.frameInstances,
    namedFrames: t.namedFrames,
    processClientEntryPreloads: t.processClientEntryPreloads,
    lifecycleSignal: C.signal,
    regionTailRef: r.regionTailRef,
    regionParent: r.regionParent,
  };
  async function M(g, k) {
    if (E || C.signal.aborted || k?.signal?.aborted) return;
    let _ = k?.data === void 0,
      T = { ...k, data: k?.data ?? {} };
    try {
      await R(g, T);
    } finally {
      _ && mt(T.data);
    }
  }
  async function R(g, k) {
    if (F(k.signal)) return;
    if (g instanceof ReadableStream) {
      let D = Aa(C.signal, k.signal);
      try {
        await Wa(
          g,
          r.doc,
          async (V, Q) => {
            F(k.signal) || (await M(V, { ...k, flushKind: Q }));
          },
          D.controller.signal,
        );
      } finally {
        D.disconnect();
      }
      return;
    }
    if (Ka(g)) {
      if (!n) {
        let V = L();
        Lt(V), Dt(V, S), tt(), (n = U());
      }
      if (F(k.signal)) return;
      let D = I.serverFrameReload;
      k.signal &&
        (I.serverFrameReload = {
          signal: k.signal,
          reconciliationTracker: k.reconciliationTracker,
          blockingFrameTracker: k.blockingFrameTracker,
        });
      try {
        n.render(g), await new Promise((V) => S.scheduler.enqueueCommitPhase([V])), k.onCommit?.();
      } finally {
        I.serverFrameReload = D;
      }
      if (F(k.signal)) return;
      h = k.contentStatus ?? "resolved";
      return;
    }
    if ((n && (n.dispose(), (n = void 0)), typeof g == "string")) {
      let D = await Zn(g, async (V, Q) => {
        await M(V, { ...k, flushKind: Q });
      });
      if (D.applied) {
        D.remainder !== "" && (await M(D.remainder, { ...k, flushKind: "fragment" }));
        return;
      }
    }
    let _ = typeof g == "string" ? g : void 0,
      T = _ === void 0 ? void 0 : $n(_);
    if (r.root instanceof Document && _ !== void 0 && (k.flushKind ?? Wn(_)) === "document" && T !== void 0) {
      let D = new DOMParser().parseFromString(T, "text/html");
      if (!(await v(D, k.documentHref)) || F(k.signal)) return;
      let V = k.data;
      Hr(V, D);
      let Q = {
        ...S,
        data: V,
        reconciliationTracker: k.reconciliationTracker,
        blockingFrameTracker: k.blockingFrameTracker,
      };
      S.styleManager.adoptServerStyles(pt(Ve(D))),
        Fn(r.doc.documentElement, D.documentElement),
        Pe([r.doc.head], [D.head], {
          ...Q,
          regionParent: r.doc.documentElement,
          regionTailRef: null,
          signal: k.signal,
          shouldPreserveHeadNode: H,
        }),
        Pe([r.doc.body], [D.body], {
          ...Q,
          regionParent: r.doc.documentElement,
          regionTailRef: null,
          signal: k.signal,
        });
      let ui = Ve(r.doc.body);
      if (F(k.signal)) return;
      let ci = ht(ui, Q, k);
      if ((k.onCommit?.(), await ci, F(k.signal))) return;
      h = k.contentStatus ?? "resolved";
      return;
    }
    let P = T !== void 0 ? Qn(r.doc, T) : g;
    if (!(await v(P, k.documentHref)) || F(k.signal)) return;
    S.styleManager.adoptServerStyles(pt(Ve(P))), La(P);
    let Z = k.data;
    Ia(Z, P);
    let z = {
        ...S,
        data: Z,
        reconciliationTracker: k.reconciliationTracker,
        blockingFrameTracker: k.blockingFrameTracker,
      },
      ne = Br(P);
    if (F(k.signal)) return;
    Pe(r.childNodes, Array.from(ne.childNodes), {
      ...z,
      regionTailRef: r.regionTailRef,
      regionParent: r.regionParent,
      signal: k.signal,
    });
    let fi = ht(r, z, k);
    k.onCommit?.(), await fi, !F(k.signal) && (h = k.contentStatus ?? "resolved");
  }
  function F(g) {
    return E || C.signal.aborted || g?.aborted === !0;
  }
  function U() {
    let g;
    return (
      r.root instanceof Document
        ? (g = Jl(r.doc.body, {
            scheduler: S.scheduler,
            frame: A,
            getContext: S.getContext,
            styleManager: S.styleManager,
          }))
        : (N(Array.isArray(e), "Expected comment-bounded frame root"),
          (g = Xt(e, {
            scheduler: S.scheduler,
            frame: A,
            getContext: S.getContext,
            styleManager: S.styleManager,
          }))),
      g.addEventListener("error", (k) => {
        S.errorTarget !== g && S.errorTarget.dispatchEvent(re(Ke(k)));
      }),
      g
    );
  }
  function L() {
    return r.root instanceof Document ? Array.from(r.doc.body.childNodes) : r.childNodes;
  }
  function tt() {
    for (let g of L()) g.parentNode?.removeChild(g);
  }
  async function rt() {
    let g = ct();
    if ((await w) === !1 || E || S.lifecycleSignal.aborted) return;
    S.styleManager.adoptServerStyles(pt(r));
    let k = ht(r, S, { reconciliationTracker: g });
    try {
      if ((await k, E || S.lifecycleSignal.aborted)) return;
      c?.status === "pending" && (await rr(c, g)), g.finalize(), await g.ready();
    } finally {
      mt(S.data);
    }
  }
  function nt() {
    E ||
      ((E = !0),
      C.abort(),
      mt(S.data),
      i?.abort(),
      (i = void 0),
      a?.(),
      (a = void 0),
      (s = void 0),
      n?.dispose(),
      (n = void 0),
      B(),
      Lt(r.childNodes),
      Dt(r.childNodes, S),
      l && S.styleManager.dispose(),
      X && t.namedFrames.unregister(X, A));
  }
  let it = rt();
  return {
    render: M,
    ready: () => it,
    flush: () => S.scheduler.dequeue(),
    clearPendingTemplateWatch: B,
    isDisplayingResolvedContent: () => h === "resolved",
    beginClientFrameReloadForAncestorReload: ai,
    cancelReload: oi,
    startInheritedReload: at,
    updateMarker: ri,
    renderMarkerContent: ni,
    matchesIdentity: (g, k) => !E && A.src === g && X === k,
    dispose: nt,
    handle: A,
  };
  async function ri(g, k) {
    if (E || S.lifecycleSignal.aborted || k?.signal?.aborted) return;
    let _ = c,
      T = _ !== void 0 && _.id !== g.id;
    (c = g),
      T && at(k?.signal),
      g.status === "pending"
        ? await rr(
            g,
            k?.reconciliationTracker,
            k?.signal,
            T
              ? () => {
                  Ie();
                }
              : void 0,
          )
        : (B(), T && !k?.signal?.aborted && Ie());
  }
  async function ni(g, k, _) {
    if (E || S.lifecycleSignal.aborted || _?.signal?.aborted) return;
    let T = c,
      O = T !== void 0 && T.id !== g.id;
    (c = g),
      O && at(_?.signal),
      B(),
      await M(k, { ..._, contentStatus: "resolved" }),
      O && !E && !S.lifecycleSignal.aborted && !_?.signal?.aborted && Ie();
  }
  async function ii(g) {
    let k = er(g);
    return k.committed.catch(() => {}), await k.finished;
  }
  function er(g) {
    let k = li(g?.signal),
      _ = Promise.withResolvers(),
      T = !1,
      O = si(k, g, (P) => {
        T || ((T = !0), P.then(_.resolve, _.reject));
      });
    return O.then(() => _.resolve(), _.reject), { signal: k.signal, committed: _.promise, finished: O };
  }
  function li(g) {
    let k = tr(g);
    return (s = "direct"), A.dispatchEvent(new Event("reloadStart")), Le(L(), k.signal), k;
  }
  function ai(g) {
    let k = di(),
      _ = s === "ancestor",
      T = tr(g);
    return (
      (s = "ancestor"),
      !k && !_ && (A.dispatchEvent(new Event("reloadStart")), Le(L(), T.signal)),
      { controller: T, complete: () => lt(T) }
    );
  }
  function oi() {
    let g = i;
    g && (g.abort(), lt(g));
  }
  function tr(g) {
    i?.abort(), a?.(), (a = void 0);
    let k = new AbortController();
    if (((i = k), g))
      if (g.aborted) k.abort();
      else {
        let _ = () => k.abort();
        g.addEventListener("abort", _, { once: !0 }), (a = () => g.removeEventListener("abort", _));
      }
    return k;
  }
  async function si(g, k, _) {
    try {
      let T = await t.resolveFrame(A.src, { ...k, signal: g.signal, target: X });
      if (i !== g || g.signal.aborted) return { signal: g.signal };
      let { content: O, redirectedTo: P } = await Zr(T);
      if (i !== g || g.signal.aborted) return { signal: g.signal };
      let Z = ct(),
        z = ct(),
        ne = !1;
      return (
        await M(O, {
          documentHref: $r(r.root) ? (P ?? A.src) : void 0,
          signal: g.signal,
          reconciliationTracker: Z,
          blockingFrameTracker: z,
          onCommit() {
            ne || ((ne = !0), z.finalize(), _?.(z.ready()));
          },
        }),
        Z.finalize(),
        await Z.ready(),
        { signal: g.signal, redirectedTo: i === g && !g.signal.aborted ? P : void 0 }
      );
    } catch (T) {
      if (i !== g || g.signal.aborted) return { signal: g.signal };
      throw (t.errorTarget.dispatchEvent(re(T)), T);
    } finally {
      lt(g);
    }
  }
  function lt(g) {
    i !== g ||
      s === void 0 ||
      (a?.(), (a = void 0), (s = void 0), A.dispatchEvent(new Event("reloadComplete")));
  }
  function at(g) {
    if (
      !g?.aborted &&
      (p || ((p = !0), A.dispatchEvent(new Event("reloadStart")), Le(L(), g)), b?.(), (b = void 0), g)
    ) {
      let k = () => Ie();
      g.addEventListener("abort", k, { once: !0 }),
        (b = () => {
          g.removeEventListener("abort", k);
        });
    }
  }
  function di() {
    return p ? ((p = !1), b?.(), (b = void 0), !0) : !1;
  }
  function Ie() {
    p && ((p = !1), b?.(), (b = void 0), A.dispatchEvent(new Event("reloadComplete")));
  }
  function Le(g, k) {
    for (let _ = 0; _ < g.length && !k?.aborted; _++) {
      let T = g[_];
      if (W(T)) {
        let O = me(T, W, Fe);
        S.frameInstances.get(T)?.startInheritedReload(k), (_ = ce(g, O, _));
        continue;
      }
      T.childNodes && T.childNodes.length > 0 && Le(Array.from(T.childNodes), k);
    }
  }
  function B() {
    m?.(), (m = void 0), u?.disconnect(), (u = void 0), (y = void 0);
  }
  async function rr(g, k, _, T) {
    if (E || S.lifecycleSignal.aborted || _?.aborted || y === g.id) return;
    B(), (y = g.id);
    let O = jr(g.id) ?? ja(g.id);
    if (O) {
      B(),
        await M(O, { reconciliationTracker: k, signal: _, contentStatus: "resolved" }),
        !E && !S.lifecycleSignal.aborted && !_?.aborted && T?.();
      return;
    }
    if (E || S.lifecycleSignal.aborted || _?.aborted) {
      B();
      return;
    }
    (u = qa()),
      (m = $a(g.id, async (ne) => {
        E ||
          S.lifecycleSignal.aborted ||
          _?.aborted ||
          (y === g.id &&
            (B(),
            await M(ne, { signal: _, contentStatus: "resolved" }),
            !E && !S.lifecycleSignal.aborted && !_?.aborted && T?.()));
      })),
      _?.addEventListener(
        "abort",
        () => {
          y === g.id && B();
        },
        { once: !0 },
      );
    let z = jr(g.id);
    z &&
      (B(),
      await M(z, { reconciliationTracker: k, signal: _, contentStatus: "resolved" }),
      !E && !S.lifecycleSignal.aborted && !_?.aborted && T?.());
  }
}
function Kn(e) {
  return {
    [zn]: !0,
    topFrame: e.topFrame,
    getContext: e.getContext,
    errorTarget: e.errorTarget,
    loadModule: e.loadModule,
    resolveFrame: e.resolveFrame,
    pendingClientEntries: e.pendingClientEntries,
    scheduler: e.scheduler,
    styleManager: e.styleManager,
    moduleCache: e.moduleCache,
    moduleLoads: e.moduleLoads,
    frameInstances: e.frameInstances,
    namedFrames: e.namedFrames,
    processClientEntryPreloads: e.processClientEntryPreloads,
    serverFrameReload: void 0,
    reloadForNavigation: e.reloadForNavigation,
  };
}
function ct() {
  let e = 0,
    t = !1,
    r = !1,
    n,
    i,
    l,
    a = new Promise((o, f) => {
      (i = o), (l = f);
    });
  function s() {
    !t || e !== 0 || (r ? l?.(n) : i?.(), (i = void 0), (l = void 0));
  }
  function d() {
    e++;
    let o = !1;
    return () => {
      o || ((o = !0), e--, s());
    };
  }
  return {
    track: d,
    waitFor(o) {
      let f = d();
      o.then(f, (c) => {
        r || ((r = !0), (n = c)), f();
      });
    },
    finalize() {
      (t = !0), s();
    },
    ready() {
      return a;
    },
  };
}
function Hr(e, t) {
  let r = Array.from(t.querySelectorAll("script#rmx-data"));
  for (let n of r) n instanceof HTMLScriptElement && (Yn(e, Xn(n)), n.remove());
}
function Ia(e, t) {
  let r = Array.from(t.querySelectorAll("script#rmx-data"));
  for (let n of r) n instanceof HTMLScriptElement && (Yn(e, Xn(n)), n.remove());
}
function mt(e) {
  delete e.h, delete e.f;
}
function La(e) {
  let t = Array.from(e.querySelectorAll("head"));
  for (let r of t) r.childNodes.length || r.remove();
}
function pt(e) {
  let t = [],
    r =
      e.root instanceof Document
        ? [...Array.from(e.doc.head.childNodes), ...Array.from(e.doc.body.childNodes)]
        : e.childNodes;
  return Gn(r, t), t;
}
function Gn(e, t) {
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    if (W(n)) {
      let i = me(n, W, Fe);
      r = ce(e, i, r);
      continue;
    }
    if (n instanceof HTMLStyleElement && n.matches("style[data-rmx-style]")) {
      t.push(n);
      continue;
    }
    n.childNodes.length > 0 && Gn(Array.from(n.childNodes), t);
  }
}
function Xn(e) {
  try {
    return JSON.parse(e.textContent || "{}");
  } catch {
    return console.error("[createFrame] Failed to parse rmx-data script"), {};
  }
}
function Yn(e, t) {
  t.h && (e.h || (e.h = {}), Ur(e.h, t.h)), t.f && (e.f || (e.f = {}), Ur(e.f, t.f));
}
function Ur(e, t) {
  for (let r of Object.keys(t))
    r === "__proto__" || r === "constructor" || r === "prototype" || (Object.hasOwn(t, r) && (e[r] = t[r]));
}
function ht(e, t, r) {
  let n = t.data.h,
    i = Ga(e, n),
    l = [];
  for (let s of i) {
    let d = n?.[s.id];
    if (!d) continue;
    t.pendingClientEntries.has(s.start) || t.pendingClientEntries.set(s.start, [s.end, void 0]);
    let { promise: o, resolve: f } = Promise.withResolvers();
    be.set(s.start, o),
      l.push({
        marker: s,
        entry: d,
        complete() {
          be.get(s.start) === o && be.delete(s.start), f();
        },
      });
  }
  let a = Jn(e.childNodes, t, r);
  for (let { marker: s, entry: d, complete: o } of l) Da(s, d, t, o, r?.reconciliationTracker, r?.signal);
  return a;
}
function Da(e, t, r, n, i, l) {
  if (l?.aborted || r.lifecycleSignal.aborted) {
    n();
    return;
  }
  let a = i?.track(),
    s = `${t.moduleUrl}#${t.exportName}`,
    d = { moduleUrl: t.moduleUrl, exportName: t.exportName },
    o = t.props,
    f = !1,
    c = () => {
      f ||
        ((f = !0),
        (o = void 0),
        l?.removeEventListener("abort", c),
        r.lifecycleSignal.removeEventListener("abort", c),
        n(),
        a?.());
    };
  l?.addEventListener("abort", c, { once: !0 }), r.lifecycleSignal.addEventListener("abort", c, { once: !0 });
  let h = (p) => {
      if (l?.aborted || r.lifecycleSignal.aborted || !Va(e, r) || !o) return;
      let E = r.pendingClientEntries.get(e.start)?.[1] ?? Ha(p, o);
      r.pendingClientEntries.set(e.start, [e.end, E]), Pa(E, e.start, e.end, d, r, l);
    },
    y = e.parent && be.get(e.parent),
    u = r.moduleCache.get(s);
  if (u && !y) {
    h(u), c();
    return;
  }
  let m = u ?? Oa(s, d, e.id, r);
  Promise.all([m, y])
    .then(([p]) => {
      p && h(p);
    })
    .finally(() => {
      c();
    });
}
function Oa(e, t, r, n) {
  let i = n.moduleLoads.get(e);
  if (i) return i;
  let l = (async () => {
    try {
      let a = await n.loadModule(t.moduleUrl, t.exportName);
      if (!Ua(a)) throw new Error(`Export "${t.exportName}" from "${t.moduleUrl}" is not a function`);
      return n.moduleCache.set(e, a), a;
    } catch (a) {
      console.error(`[createFrame] Failed to load module for ${r}:`, a);
      return;
    } finally {
      n.moduleLoads.delete(e);
    }
  })();
  return n.moduleLoads.set(e, l), l;
}
function Ha(e, t) {
  let r = ae(t);
  return N(Qe(r), "Expected revived component props to be an object"), je(e, r);
}
function Ua(e) {
  return typeof e == "function";
}
function ae(e) {
  if (e == null || typeof e != "object") return e;
  if (Array.isArray(e)) return e.map((n) => ae(n));
  if (!Qe(e)) return e;
  let t = e;
  if (t.$rmxFrame === !0) {
    let n = Pr(t.props),
      i = ae(t.key);
    return je(yt, n, i);
  }
  if (t.$rmx === !0 && typeof t.type == "string") {
    let n = Pr(t.props),
      i = ae(t.key);
    return je(t.type, n, i);
  }
  let r = {};
  for (let n in t) r[n] = ae(t[n]);
  return r;
}
function Pr(e) {
  if (!e || typeof e != "object" || Array.isArray(e)) return {};
  let t = ae(e);
  return !t || typeof t != "object" || Array.isArray(t) ? {} : Qe(t) ? t : {};
}
function Qe(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Pa(e, t, r, n, i, l) {
  if (l?.aborted) return;
  i.pendingClientEntries.delete(t);
  let a = (o) => {
      if (!l) {
        o.render(e);
        return;
      }
      let f = i.frame.$runtime;
      N(Qt(f), "Expected frame runtime while rendering a client entry during a reload");
      let c = f.serverFrameReload;
      f.serverFrameReload = {
        signal: l,
        reconciliationTracker: i.reconciliationTracker,
        blockingFrameTracker: i.blockingFrameTracker,
      };
      try {
        o.render(e);
      } finally {
        f.serverFrameReload = c;
      }
    },
    s = Ge(t);
  if (s) {
    a(s.root);
    return;
  }
  let d = Xt([t, r], {
    scheduler: i.scheduler,
    frame: i.frame,
    getContext: i.getContext,
    styleManager: i.styleManager,
  });
  d.addEventListener("error", (o) => {
    i.errorTarget !== d && i.errorTarget.dispatchEvent(re(Ke(o)));
  }),
    Xi(t, r, n, d),
    a(d);
}
async function Jn(e, t, r) {
  let n = [];
  for (let i = 0; i < e.length && !r?.signal?.aborted; i++) {
    let l = e[i];
    if (W(l)) {
      let a = me(l, W, Fe),
        s = t.frameInstances.get(l),
        d = Xa(l),
        o = t.data.f?.[d];
      if (s)
        if (o) {
          let f = { ...o, id: d };
          n.push(s.updateMarker(f, r));
        } else s.clearPendingTemplateWatch();
      else if (o) {
        let f = { ...o, id: d },
          c = It([l, a], {
            src: f.src,
            marker: f,
            topFrame: t.topFrame,
            getContext: t.getContext,
            errorTarget: t.errorTarget,
            loadModule: t.loadModule,
            resolveFrame: t.resolveFrame,
            pendingClientEntries: t.pendingClientEntries,
            scheduler: t.scheduler,
            styleManager: t.styleManager,
            data: t.data,
            moduleCache: t.moduleCache,
            moduleLoads: t.moduleLoads,
            frameInstances: t.frameInstances,
            namedFrames: t.namedFrames,
            processClientEntryPreloads: t.processClientEntryPreloads,
          });
        t.frameInstances.set(l, c), f.status === "resolved" && n.push(c.ready());
      }
      i = ce(e, a, i);
      continue;
    }
    l.childNodes && l.childNodes.length > 0 && n.push(Jn(Array.from(l.childNodes), t, r));
  }
  await Promise.all(n);
}
function Va(e, t) {
  if (
    !e.start.isConnected ||
    !e.end.isConnected ||
    e.start.parentNode !== e.end.parentNode ||
    e.start.data.trim() !== `rmx:h:${e.id}` ||
    e.end.data.trim() !== "/rmx:h" ||
    !e.start.parentNode
  )
    return !1;
  if (t.regionTailRef) {
    let i = e.start.compareDocumentPosition(t.regionTailRef),
      l = e.end.compareDocumentPosition(t.regionTailRef),
      a = (i & Node.DOCUMENT_POSITION_FOLLOWING) !== 0,
      s = (l & Node.DOCUMENT_POSITION_FOLLOWING) !== 0;
    if (!a || !s) return !1;
  }
  return !0;
}
function Lt(e) {
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    if (et(r) && Ht(r) && jt(r)) {
      let n = me(r, Ht, ei);
      t = ce(e, n, t);
      continue;
    }
    r.childNodes && r.childNodes.length > 0 && Lt(Array.from(r.childNodes));
  }
}
function Dt(e, t) {
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    if (W(n)) {
      let i = me(n, W, Fe),
        l = t.frameInstances.get(n);
      l && (l.dispose(), t.frameInstances.delete(n)), (r = ce(e, i, r));
      continue;
    }
    n.childNodes && n.childNodes.length > 0 && Dt(Array.from(n.childNodes), t);
  }
}
function ja(e) {
  let t = document.querySelector(`template#${e}`);
  if (t instanceof HTMLTemplateElement) {
    let r = t.content;
    return t.remove(), r;
  }
  return null;
}
function qa() {
  let e = document.body ?? document.documentElement ?? document,
    t = new MutationObserver((r) => {
      for (let n of r) for (let i of n.addedNodes) Ba(i);
    });
  return t.observe(e, { childList: !0, subtree: !0 }), t;
}
function Ba(e) {
  if (e instanceof HTMLTemplateElement) {
    Vr(e);
    return;
  }
  if (!(e instanceof Element)) return;
  let t = Array.from(e.querySelectorAll("template"));
  for (let r of t) r instanceof HTMLTemplateElement && Vr(r);
}
function Vr(e) {
  e.id && (e.remove(), Ot(e.id, e.content));
}
function Ot(e, t) {
  let r = ge.get(e);
  if (!r || r.size === 0) {
    let n = ze.get(e);
    n || ((n = []), ze.set(e, n)), n.push(t);
    return;
  }
  for (let n of r) {
    let i = t.cloneNode(!0);
    N(ti(i), "Expected cloned frame template fragment"), n(i);
  }
}
function jr(e) {
  let t = ze.get(e);
  if (!t || t.length === 0) return null;
  let r = t.shift() ?? null;
  return t.length === 0 && ze.delete(e), r;
}
function $a(e, t) {
  let r = ge.get(e);
  return (
    r || ((r = new Set()), ge.set(e, r)),
    r.add(t),
    () => {
      let n = ge.get(e);
      n && (n.delete(t), n.size === 0 && ge.delete(e));
    }
  );
}
const gt = /<template\b[^>]*\bid=(?:"([^"]+)"|'([^']+)')[^>]*>[\s\S]*?<\/template>/gi;
function qr(e, t, r) {
  let n = "",
    i = 0,
    l = !1;
  gt.lastIndex = 0;
  let a = gt.exec(t);
  for (; a; ) {
    l = !0;
    let o = a.index,
      f = a[0],
      c = a[1] ?? a[2],
      h = o + f.length;
    if (((n += t.slice(i, o)), c)) {
      let u = Qn(e, f).querySelector("template");
      u instanceof HTMLTemplateElement && u.id && r(u.id, u.content);
    }
    (i = h), (a = gt.exec(t));
  }
  let s = t.slice(i);
  if (s === "") return { html: n, remainder: "" };
  let d = s.toLowerCase().lastIndexOf("<template");
  return d === -1
    ? { html: n + s, remainder: "" }
    : l
      ? { html: n + s.slice(0, d), remainder: s.slice(d) }
      : { html: t.slice(0, d), remainder: t.slice(d) };
}
async function Wa(e, t, r, n) {
  let i = e.getReader(),
    l = new TextDecoder(),
    a = "",
    s = "",
    d = !1,
    o = () => {
      i.cancel().catch(() => {});
    };
  if (n?.aborted) {
    await i.cancel(), i.releaseLock();
    return;
  }
  n?.addEventListener("abort", o, { once: !0 });
  try {
    for (;;) {
      let { done: c, value: h } = await i.read();
      if (c) break;
      a += l.decode(h, { stream: !0 });
      let y = qr(t, a, Ot);
      if (((a = y.remainder), y.html !== "")) {
        s += y.html;
        let u = await Zn(s, r);
        (d = u.applied || d), (s = u.remainder);
      }
    }
    a += l.decode();
    let f = qr(t, a, Ot);
    (s += f.html),
      (a = f.remainder),
      a !== "" && ((s += a), (a = "")),
      s !== "" && (await r(s, d ? "fragment" : Wn(s)), (d = !0)),
      s === "" && !d && (await r("", "fragment"));
  } finally {
    n?.removeEventListener("abort", o), i.releaseLock();
  }
}
async function Zn(e, t) {
  let r = !1,
    n = 0,
    i = wr(e, n);
  for (; i; ) {
    let l = e.slice(n, i.index);
    await t(l, i.kind), (r = !0), (n = i.endIndex), (i = wr(e, n));
  }
  return { applied: r, remainder: e.slice(n) };
}
function Br(e) {
  return Array.isArray(e) ? za(e) : Ve(e);
}
function Ve(e) {
  return {
    doc: e instanceof Document ? e : (e.ownerDocument ?? document),
    root: e,
    get childNodes() {
      return Array.from(e.childNodes);
    },
  };
}
function za([e, t]) {
  let r = t.parentNode;
  N(r, "Invalid comment container"), N(e.parentNode === r, "Boundaries must share parent");
  let n = r.ownerDocument ?? document,
    i = () => {
      let l = [],
        a = e.nextSibling;
      for (; a && a !== t; ) l.push(a), (a = a.nextSibling);
      return l;
    };
  return {
    doc: n,
    root: r,
    regionStart: e,
    get childNodes() {
      return i();
    },
    regionTailRef: t,
    regionParent: r,
  };
}
function Qn(e, t) {
  let r = e.createElement("template");
  return (r.innerHTML = $n(t).trim()), r.content;
}
function Ka(e) {
  return !(e instanceof ReadableStream || ti(e) || typeof e == "string");
}
function Ga(e, t) {
  let r = [],
    n = e.regionStart && ut.get(e.regionStart);
  return (
    i(e.childNodes, n),
    r.map(({ id: l, start: a, end: s, parent: d }) => {
      if (!s) throw new Error("End marker not found");
      return { id: l, start: a, end: s, parent: d };
    })
  );
  function i(l, a) {
    let s = [];
    for (let d = 0; d < l.length; d++) {
      let o = l[d];
      if (W(o)) {
        a ? ut.set(o, a) : ut.delete(o);
        let f = me(o, W, Fe);
        d = ce(l, f, d);
        continue;
      }
      if (et(o)) {
        if (Ht(o)) {
          let f = o.data.trim().slice(6),
            c = { id: f, start: o, parent: a };
          r.push(c), s.push(c), (t?.[f] || be.has(o)) && (a = o);
        } else if (ei(o)) {
          let f = s.pop();
          f && ((f.end = o), (a = f.parent));
        }
      }
      o.childNodes.length > 0 && i(Array.from(o.childNodes), a);
    }
  }
}
function Ht(e) {
  return e.data.trim().startsWith("rmx:h:");
}
function ei(e) {
  return e.data.trim() === "/rmx:h";
}
function W(e) {
  return et(e) && e.data.trim().startsWith("rmx:f:");
}
function Fe(e) {
  return e.data.trim() === "/rmx:f";
}
function Xa(e) {
  let t = e.data.trim();
  return N(t.startsWith("rmx:f:"), "Invalid frame start marker"), t.slice(6);
}
function ce(e, t, r) {
  return Math.max(r, e.indexOf(t, r));
}
function me(e, t, r) {
  let n = e.nextSibling,
    i = 1;
  for (; n; ) {
    if (et(n)) {
      let l = n;
      if (t(l)) i++;
      else if (r(l) && (i--, i === 0)) return l;
    }
    n = n.nextSibling;
  }
  throw new Error("End marker not found");
}
function et(e) {
  return e?.nodeType === Node.COMMENT_NODE;
}
function $r(e) {
  return e.nodeType === Node.DOCUMENT_NODE;
}
function ti(e) {
  return typeof e == "object" && e !== null && Reflect.get(e, "nodeType") === Node.DOCUMENT_FRAGMENT_NODE;
}
export { Ra as N, oo as a, It as b, xn as c, re as d, Rn as e, Xt as f, lo as i, ao as r };
