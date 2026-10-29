import { i as D, r as R, a as H, c as M, b as I, N as k, d as P, e as $ } from "./frame-BfwM6eZ2.js";
import { T as U } from "./typed-event-target-DhbNxY-V.js";
const B = 1e3;
function O(e) {
  let t = new WeakMap();
  return (
    document.addEventListener(
      "submit",
      (n) => {
        let i = n.target;
        if (!(i instanceof HTMLFormElement)) return;
        let a = t.get(i);
        a && (clearTimeout(a.timeout), a.removeFormDataListener());
        let r = n instanceof SubmitEvent ? n.submitter : null,
          o = r instanceof HTMLButtonElement || r instanceof HTMLInputElement ? r : null,
          s = () => {};
        if (T(i, o).toLowerCase() === "post" && i.method.toLowerCase() !== "post") {
          let u = (p) => {
            let f = t.get(i);
            f && (f.formData = p.formData);
          };
          i.addEventListener("formdata", u, { signal: e }), (s = () => i.removeEventListener("formdata", u));
        }
        let c = {
          submitter: o,
          timeout: setTimeout(() => {
            t.get(i) === c && t.delete(i), c.removeFormDataListener();
          }, B),
          removeFormDataListener: s,
        };
        t.set(i, c);
      },
      { capture: !0, signal: e },
    ),
    (n) => {
      let i = n.sourceElement;
      if (!(i instanceof Element)) return;
      let a = W(i);
      if (!a) return;
      let r = t.get(a),
        o = r?.submitter ?? null,
        s = T(a, o),
        l = q(a, o),
        c = w(a, o, "target", "formtarget");
      if (s === "dialog" || c?.toLowerCase() === "_blank") return;
      let u = n,
        p = () => {
          r && (clearTimeout(r.timeout), r.removeFormDataListener(), t.get(a) === r && t.delete(a));
        },
        f;
      return (
        s.toLowerCase() === "get"
          ? p()
          : (f = async () => (
              !u.formData && r && !r.formData && (await new Promise((m) => setTimeout(m, 0))),
              p(),
              { formData: u.formData ?? r?.formData, method: s, encType: l }
            )),
        {
          hasAttribute(m) {
            return o?.hasAttribute(m) === !0 || a.hasAttribute(m);
          },
          getAttribute(m, d) {
            return w(a, o, m, d);
          },
          getSubmission: f,
        }
      );
    }
  );
}
function W(e) {
  if (e instanceof HTMLFormElement) return e;
  if (e instanceof HTMLButtonElement || e instanceof HTMLInputElement) return e.form ?? void 0;
}
function w(e, t, n, i) {
  return (i ??= n), t?.hasAttribute(i) ? t.getAttribute(i) : e.getAttribute(n);
}
function T(e, t) {
  return t?.hasAttribute("formmethod") ? t.formMethod : e.method;
}
function q(e, t) {
  return t?.hasAttribute("formenctype") ? t.formEnctype : e.enctype;
}
const L = Symbol("frame-form-submission"),
  x = "frame-redirect";
function j(e, t, n) {
  let i = navigator.userAgent;
  !i.includes("AppleWebKit") ||
    C(i) ||
    !t ||
    (e.navigationType !== "push" && e.navigationType !== "replace") ||
    new URL(e.destination.url).hash ||
    n.finished.then(
      () => {
        e.signal.aborted ||
          window.scrollX !== 0 ||
          window.scrollY !== 0 ||
          (window.scrollTo({ behavior: "instant", left: 0, top: 1 }),
          requestAnimationFrame(() => {
            e.signal.aborted ||
              window.scrollX !== 0 ||
              window.scrollY !== 1 ||
              window.scrollTo({ behavior: "instant", left: 0, top: 0 });
          }));
      },
      () => {},
    );
}
async function oe(e, t) {
  let n = { target: t?.target, src: t?.src ?? e, resetScroll: t?.resetScroll !== !1, $rmx: !0 },
    i = v();
  if (!i) {
    window.location.replace(e);
    return;
  }
  await i.navigate(e, { state: n, history: t?.history }).finished;
}
function X(e) {
  return _(e, { getTopFrame: ee, getNamedFrame: te, reloadFrame: H });
}
function _(e, t) {
  let n = v();
  if (!n) return;
  let i = O(e),
    a = !1;
  n.updateCurrentEntry({ state: { target: void 0, src: window.location.href, resetScroll: !0, $rmx: !0 } }),
    n.addEventListener(
      "navigate",
      (r) => {
        if (
          D(r.info) ||
          (r.hashChange && !a) ||
          r.downloadRequest != null ||
          !r.canIntercept ||
          !E(r.destination.url)
        )
          return;
        if (K(r.info)) {
          h(n, r, r.info.resetScroll, { async handler() {}, scroll: "manual" });
          return;
        }
        let o = z(r.info) ? r.info : void 0,
          s = o ? { state: o.state, getSubmission: o.getSubmission } : Q(n, r, i);
        if (!s) return;
        let { state: l } = s;
        if (!E(l.src)) {
          F(n, r);
          return;
        }
        let c = t.getTopFrame(),
          u = o?.frame;
        if (!u)
          if (l.target) {
            if (((u = t.getNamedFrame(l.target)), !u)) {
              F(n, r);
              return;
            }
          } else u = c;
        a = !0;
        let f = {
          handler: async () => {
            if (r.signal.aborted) return;
            let m = await s.getSubmission?.();
            if (r.signal.aborted) return;
            r.navigationType !== "traverse" && n.updateCurrentEntry({ state: l }),
              (c.src = r.destination.url),
              u !== c && (u.src = l.src);
            let d = t.reloadFrame(u, { ...m, signal: r.signal });
            if ((await d.committed, r.signal.aborted || d.signal.aborted)) return;
            l.resetScroll && r.scroll();
            let { redirectedTo: y } = await d.finished;
            r.signal.aborted ||
              d.signal.aborted ||
              ((a = !1),
              y &&
                u === c &&
                ((u.src = y),
                n.navigate(y, {
                  history: "replace",
                  state: { ...l, src: y },
                  info: { type: x, resetScroll: l.resetScroll },
                })));
          },
          scroll: l.resetScroll === !1 ? "manual" : void 0,
        };
        if (s.getSubmission) {
          if (s.replaceHistory && o == null) {
            if (typeof Reflect.get(window, "NavigationPrecommitController") == "function") {
              h(n, r, l.resetScroll, {
                ...f,
                precommitHandler(d) {
                  d.redirect(r.destination.url, { history: "replace" });
                },
              });
              return;
            }
            if (r.cancelable) {
              r.preventDefault(),
                n.navigate(r.destination.url, {
                  history: "replace",
                  state: l,
                  info: { type: L, state: l, frame: u, getSubmission: s.getSubmission },
                });
              return;
            }
          }
          h(n, r, l.resetScroll, f);
        } else
          s.replaceHistory && r.cancelable
            ? (r.preventDefault(), n.navigate(r.destination.url, { history: "replace", state: l }))
            : h(n, r, l.resetScroll, f);
      },
      { signal: e },
    );
}
function v() {
  let e = window.navigation;
  if (!(!e || typeof NavigateEvent > "u" || !("sourceElement" in NavigateEvent.prototype))) return e;
}
function b(e) {
  return typeof e == "object" && e != null && "$rmx" in e;
}
function z(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    e.type === L &&
    "state" in e &&
    b(e.state) &&
    "frame" in e &&
    "getSubmission" in e &&
    typeof e.getSubmission == "function"
  );
}
function K(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    e.type === x &&
    "resetScroll" in e &&
    typeof e.resetScroll == "boolean"
  );
}
function E(e) {
  try {
    return new URL(e, document.baseURI).origin === window.location.origin;
  } catch {
    return !1;
  }
}
function F(e, t) {
  t.navigationType === "traverse" &&
    h(e, t, !1, {
      scroll: "manual",
      handler() {
        t.signal.aborted || R(document);
      },
    });
}
function h(e, t, n, i) {
  let a = G(t, n),
    r = !1;
  function o() {
    if (r) return;
    if (t.signal.aborted) return a?.remove();
    let c = e.transition;
    if (!c) return a?.remove();
    (r = !0), j(t, n, c), a && J(c, a.remove, a.cleanup);
  }
  let s = {
      ...i,
      handler() {
        return o(), i.handler?.();
      },
    },
    l = i.precommitHandler;
  l &&
    (s.precommitHandler = function (u) {
      return o(), l(u);
    });
  try {
    t.intercept(s);
  } catch (c) {
    throw (a?.remove(), c);
  }
}
function Y(e, t) {
  if (t) {
    if (e.navigationType === "traverse") {
      let { scrollHeight: n, clientHeight: i } = document.documentElement;
      return {
        cssText: `
        html {
          min-height: ${n + i}px !important;
          overflow-anchor: none !important;
        }

        body {
          overflow-anchor: none !important;
        }
      `,
        cleanup: "finished",
      };
    }
    if (
      !(e.navigationType !== "push" && e.navigationType !== "replace") &&
      !new URL(e.destination.url).hash &&
      C(navigator.userAgent)
    )
      return {
        cssText: `
      html,
      body {
        overflow-anchor: none !important;
      }
    `,
        cleanup: "after-paint",
      };
  }
}
function C(e) {
  return e.includes("Chrome") || e.includes("Chromium");
}
function G(e, t) {
  let n = Y(e, t);
  if (!n) return;
  let i = new CSSStyleSheet();
  i.replaceSync(n.cssText), (document.adoptedStyleSheets = [...document.adoptedStyleSheets, i]);
  let a = !1;
  function r() {
    e.signal.removeEventListener("abort", r),
      !a && ((a = !0), (document.adoptedStyleSheets = document.adoptedStyleSheets.filter((o) => o !== i)));
  }
  return (
    e.signal.aborted ? r() : e.signal.addEventListener("abort", r, { once: !0 }),
    { remove: r, cleanup: n.cleanup }
  );
}
function J(e, t, n) {
  function i() {
    if (n === "finished") return t();
    requestAnimationFrame(() => requestAnimationFrame(t));
  }
  e.finished.then(i, t);
}
function Q(e, t, n) {
  if (t.navigationType === "traverse") {
    let r = V(e, t);
    return r ? { state: r } : void 0;
  }
  let i = Z(e, t, n);
  if (i) return i;
  let a = t.destination.getState();
  if (b(a)) return { state: a };
}
function V(e, t) {
  let n = t.destination.getState();
  if (b(n)) return n;
  let i = e.entries().find((a) => a.key === t.destination.key);
  if (i) {
    let a = i.getState();
    if (b(a)) return a;
  }
}
function Z(e, t, n) {
  let a = t.sourceElement;
  if (!(a instanceof Element)) return;
  let r = a.closest("a, area");
  if (r instanceof Element)
    return r.hasAttribute("data-rmx-document") || r.hasAttribute("download")
      ? void 0
      : {
          state: {
            target: r.getAttribute("data-rmx-target") ?? void 0,
            src: r.getAttribute("data-rmx-src") ?? t.destination.url,
            resetScroll: r.getAttribute("data-rmx-reset-scroll") !== "false",
            $rmx: !0,
          },
          replaceHistory: A(r.getAttribute("data-rmx-history"), !1),
        };
  let o = n(t);
  if (!o || o.hasAttribute("data-rmx-document")) return;
  let s = o.getSubmission !== void 0 && t.destination.url === e.currentEntry?.url;
  return {
    state: {
      target: o.getAttribute("data-rmx-target") ?? void 0,
      src: o.getAttribute("data-rmx-src") ?? t.destination.url,
      resetScroll: o.getAttribute("data-rmx-reset-scroll") !== "false",
      $rmx: !0,
    },
    replaceHistory: A(o.getAttribute("data-rmx-history"), s),
    getSubmission: o.getSubmission,
  };
}
function A(e, t) {
  return e === "replace" ? !0 : e === "push" ? !1 : t;
}
let g;
function ee() {
  if (!g) throw new Error("app runtime not initialized");
  return g.handle;
}
const S = new k();
function te(e) {
  return S.get(e);
}
function re(e) {
  let t = e?.formData,
    n = e?.method;
  if (!t || !n || ["get", "head"].includes(n.toLowerCase())) return;
  let i = e?.encType;
  if (i === "text/plain") {
    let r = "";
    for (let [o, s] of t)
      (o = N(o)),
        (s = N(typeof s == "string" ? s : s.name)),
        (r += `${o}=${s}\r
`);
    return new Blob([r], { type: "text/plain" });
  }
  if (i !== "application/x-www-form-urlencoded") return t;
  let a = new URLSearchParams();
  for (let [r, o] of t) a.append(r, typeof o == "string" ? o : o.name);
  return a;
}
function N(e) {
  return e.replace(
    /\r\n|\r|\n/g,
    `\r
`,
  );
}
async function ne(e, t) {
  let n = new Headers({ Accept: "text/html", "X-Remix-Frame": "true" });
  t?.target != null && n.set("X-Remix-Target", t.target);
  let i = await fetch(e, {
      body: re(t),
      headers: n,
      method: t?.method,
      mode: "same-origin",
      signal: t?.signal,
    }),
    a = i.headers.get("Content-Type")?.toLowerCase().includes("text/html");
  if (i.status >= 500 || (i.status >= 300 && !a))
    throw new Error(`Failed to resolve frame: ${i.status} ${i.statusText}`.trimEnd());
  return i;
}
function se(e) {
  let t = $(),
    n = new U(),
    i = M(document, n, t),
    a = e.resolveFrame ?? ne;
  g = I(document, {
    src: document.location.href,
    errorTarget: n,
    loadModule: e.loadModule,
    resolveFrame: a,
    pendingClientEntries: new Map(),
    scheduler: i,
    styleManager: t,
    data: {},
    moduleCache: new Map(),
    moduleLoads: new Map(),
    frameInstances: new WeakMap(),
    namedFrames: S,
    processClientEntryPreloads: e.processClientEntryPreloads,
  });
  let r = new AbortController(),
    o = {
      top: g.handle,
      get(l) {
        return S.get(l);
      },
    };
  X(r.signal);
  let s = g.ready().catch((l) => {
    throw (n.dispatchEvent(P(l)), l);
  });
  return Object.assign(n, {
    frames: o,
    ready: () => s,
    flush: () => g.flush(),
    dispose: () => {
      r.abort(), g.dispose(), t.dispose();
    },
  });
}
export { oe as n, se as r };
