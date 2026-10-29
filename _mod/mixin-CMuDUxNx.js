import { j as P } from "./jsx-CLqwgotn.js";
import { T as x } from "./typed-event-target-DhbNxY-V.js";
function c(n, e) {
  let t = "Framework invariant";
  if (!n) throw new Error(e ? `${t}: ${e}` : t);
}
const C = 1024;
function U(n, e, t) {
  let r = v(e),
    o = M(e),
    i = p(o);
  for (let s = 0; s < r.length && s < C; s++) {
    let u = t(r[s], s, i);
    if (!u || g(u)) continue;
    let a = L(u);
    if (a) {
      for (let f of a) r.push(f);
      continue;
    }
    if (!S(u)) {
      console.error(new Error("mixins must return a remix element"));
      continue;
    }
    if ((typeof u.type == "string" ? u.type : g(u.type) ? u.type.__rmxMixinElementType : null) !== n) {
      console.error(new Error("mixins must return an element with the same host type"));
      continue;
    }
    let h = A(u.props);
    for (let f of v(h)) r.push(f);
    (o = { ...o, ...M(h) }), (i = p(o));
  }
  let l = e.mix;
  return { ...o, ...(l === void 0 ? {} : { mix: l }) };
}
function v(n) {
  let e = n.mix;
  return e ? (Array.isArray(e) ? (e.length === 0 ? [] : e.filter(Boolean)) : [e]) : [];
}
function M(n) {
  if (!("mix" in n)) return n;
  let e = { ...n };
  return delete e.mix, e;
}
function p(n) {
  if (!y(n)) return n;
  let e = { ...n };
  return delete e.children, delete e.innerHTML, delete e.srcDoc, delete e.srcdoc, delete e.outerHTML, e;
}
function A(n) {
  return y(n) ? (console.error(new Error("mixins must not return children or raw HTML props")), p(n)) : n;
}
function y(n) {
  return "children" in n || "innerHTML" in n || "srcDoc" in n || "srcdoc" in n || "outerHTML" in n;
}
function k(n) {
  if (!n || typeof n != "object" || S(n)) return !1;
  let e = n;
  return typeof e.type == "function" && Array.isArray(e.args);
}
function g(n) {
  return typeof n != "function" ? !1 : "__rmxMixinElementType" in n;
}
function S(n) {
  return !n || typeof n != "object" ? !1 : n.$rmx === !0;
}
function L(n) {
  let e = [];
  return T(n, e) ? e : null;
}
function T(n, e) {
  if (!n) return !0;
  if (Array.isArray(n)) {
    for (let t of n) if (!T(t, e)) return !1;
    return !0;
  }
  return k(n) ? (e.push(n), !0) : !1;
}
function V(n, e) {
  let { key: t, ...r } = e ?? {};
  return P(n, r, t);
}
let q = 0;
function W(n) {
  return (...e) => ({ type: n, args: e });
}
function Y(n) {
  let e = n.state ?? H(),
    t = e.handle;
  t ||
    ((t = D({
      id: e.id,
      hostType: n.hostType,
      frame: n.frame,
      scheduler: n.scheduler,
      getContext: n.getContext ?? (() => {}),
      getRuntimeSignal: () => N(e),
      getBinding: () => e.binding,
    })),
    (e.handle = t));
  let r = t,
    o = n.hostType,
    i = 0,
    l = U(o, n.props, (s, u, a) => {
      i = u + 1;
      let d = e.runners[u];
      if (!d || d.type !== s.type) {
        d && O(r, d.scope);
        let f = Symbol("mixin-scope");
        r.setActiveScope(f),
          (d = { scope: f, type: s.type, runner: J(s.type(r, o), r) }),
          r.setActiveScope(void 0),
          (e.runners[u] = d);
        let m = e.binding;
        m?.node && w(r, d.scope, m.node, m.parent, m.key);
      }
      r.setActiveScope(d.scope);
      let h = d.runner(...s.args, a);
      return r.setActiveScope(void 0), h;
    });
  for (let s = i; s < e.runners.length; s++) {
    let u = e.runners[s];
    u && (r.dispatchScopedEvent(u.scope, new Event("remove")), r.releaseScope(u.scope));
  }
  return e.runners.length > i && (e.runners.length = i), { state: e, props: l };
}
function Z(n) {
  if (!n) return;
  (n.binding = void 0), _(n), B(n);
  let e = n.handle;
  if (e) {
    e.queueCommitTask(() => b(n));
    return;
  }
  b(n);
}
function ee(n, e, t) {
  if (!n) return;
  let r = n.binding?.node,
    o = e;
  if (((n.binding = o), !o?.node || r === o.node)) return;
  let i = o.node,
    l = n.handle;
  if (l)
    for (let s of n.runners)
      t?.dispatchReclaimed ? F(l, s.scope, i, o.parent, o.key) : w(l, s.scope, i, o.parent, o.key);
}
function _(n) {
  if (!n || n.removePrepared) return n?.pendingRemoval?.done;
  n.removePrepared = !0;
  let e,
    t = [],
    r = (i) => {
      t.push(i);
    },
    o = n.handle;
  if (o) {
    for (let i of n.runners) z(o, i.scope, r);
    if (t.length > 0) {
      let i = new AbortController(),
        l = Promise.allSettled(t.map((s) => Promise.resolve().then(() => s(i.signal)))).then(() => {});
      e = {
        signal: i.signal,
        cancel(s) {
          i.abort(s);
        },
        done: l,
      };
    }
    return (n.pendingRemoval = e), e?.done;
  }
}
function B(n, e = new DOMException("", "AbortError")) {
  n?.pendingRemoval && (n.pendingRemoval.cancel(e), (n.pendingRemoval = void 0), (n.removePrepared = !1));
}
function H() {
  return { id: `m${++q}`, aborted: !1, runners: [] };
}
function D(n) {
  return new I(n);
}
class I extends x {
  id;
  context;
  frame;
  element;
  #e;
  #t = { beforeUpdate: 0, commit: 0 };
  #n;
  #o = new Map();
  #r = new Map();
  #i = new Map();
  #s = (e) => {
    this.#u("beforeUpdate", e);
  };
  #l = (e) => {
    this.#u("commit", e);
  };
  constructor(e) {
    super(), (this.#e = e), (this.id = e.id), (this.context = { get: e.getContext }), (this.frame = e.frame);
    let t = (r, o) => (i) => ({ $rmx: !0, type: e.hostType, key: null, props: i });
    (t.__rmxMixinElementType = e.hostType), (this.element = t);
  }
  get signal() {
    let e = this.#n;
    return (
      c(e, "handle.signal is only available during mixin setup, render, or lifecycle callbacks"), this.#f(e)
    );
  }
  addEventListener(e, t, r) {
    if ((this.#d().addEventListener(e, t, r), !t || !E(e))) return;
    let i = this.#n;
    c(i);
    let l = this.#i.get(i);
    c(l),
      (l[e] += 1),
      (this.#t[e] += 1),
      this.#t[e] === 1 &&
        (e === "beforeUpdate"
          ? this.#e.scheduler.addEventListener("beforeUpdate", this.#s)
          : this.#e.scheduler.addEventListener("commit", this.#l));
  }
  removeEventListener(e, t, r) {
    if ((this.#d().removeEventListener(e, t, typeof r == "boolean" ? { capture: r } : r), !t || !E(e)))
      return;
    let i = this.#n;
    c(i);
    let l = this.#i.get(i);
    c(l),
      (l[e] = Math.max(0, l[e] - 1)),
      (this.#t[e] = Math.max(0, this.#t[e] - 1)),
      this.#t[e] === 0 &&
        (e === "beforeUpdate"
          ? this.#e.scheduler.removeEventListener("beforeUpdate", this.#s)
          : this.#e.scheduler.removeEventListener("commit", this.#l));
  }
  update() {
    return new Promise((e) => {
      let t = this.#e.getRuntimeSignal();
      if (t.aborted) {
        e(t);
        return;
      }
      let r = this.#e.getBinding();
      if (!r) {
        e(t);
        return;
      }
      r.enqueueUpdate(e);
    });
  }
  queueTask(e) {
    this.#e.scheduler.enqueueTasks([
      () => {
        let t = this.#e.getBinding();
        c(t), e(t.node, this.#e.getRuntimeSignal());
      },
    ]);
  }
  queueCommitTask(e) {
    this.#e.scheduler.enqueueCommitPhase([e]);
  }
  setActiveScope(e) {
    (this.#n = e),
      e && (this.#r.has(e) || (this.#r.set(e, new x()), this.#i.set(e, { beforeUpdate: 0, commit: 0 })));
  }
  dispatchScopedEvent(e, t) {
    let r = this.#n;
    (this.#n = e), this.#r.get(e)?.dispatchEvent(t), (this.#n = r);
  }
  releaseScope(e) {
    let t = this.#i.get(e);
    t && (this.#c("beforeUpdate", t.beforeUpdate), this.#c("commit", t.commit));
    let r = this.#o.get(e);
    r && (r.abort(), this.#o.delete(e)),
      this.#i.delete(e),
      this.#r.delete(e),
      this.#n === e && (this.#n = void 0);
  }
  #u(e, t) {
    let r = this.#e.getBinding();
    if (r && G(r, t.parents))
      for (let [, o] of this.#r) {
        let i = new Event(e);
        (i.node = r.node), o.dispatchEvent(i);
      }
  }
  #d() {
    let e = this.#n;
    c(e);
    let t = this.#r.get(e);
    return c(t), t;
  }
  #f(e) {
    let t = this.#o.get(e);
    return t || ((t = new AbortController()), this.#o.set(e, t)), t.signal;
  }
  #c(e, t) {
    t <= 0 ||
      ((this.#t[e] = Math.max(0, this.#t[e] - t)),
      this.#t[e] === 0 &&
        (e === "beforeUpdate"
          ? this.#e.scheduler.removeEventListener("beforeUpdate", this.#s)
          : this.#e.scheduler.removeEventListener("commit", this.#l)));
  }
}
function N(n) {
  let e = n.controller;
  return e || ((e = new AbortController()), n.aborted && e.abort(), (n.controller = e)), e.signal;
}
function ne(n) {
  R(n, "beforeUpdate");
}
function te(n) {
  R(n, "commit");
}
function $(n, e, t, r, o) {
  let i = new Event("insert");
  (i.node = t), (i.parent = r), (i.key = o), n.dispatchScopedEvent(e, i);
}
function j(n, e, t, r, o) {
  let i = new Event("reclaimed");
  (i.node = t), (i.parent = r), (i.key = o), n.dispatchScopedEvent(e, i);
}
function z(n, e, t) {
  let r = new Event("beforeRemove");
  (r.persistNode = t), n.dispatchScopedEvent(e, r);
}
function w(n, e, t, r, o) {
  n.queueCommitTask(() => {
    $(n, e, t, r, o);
  });
}
function F(n, e, t, r, o) {
  n.queueCommitTask(() => {
    j(n, e, t, r, o);
  });
}
function O(n, e) {
  n.queueCommitTask(() => {
    n.dispatchScopedEvent(e, new Event("remove")), n.releaseScope(e);
  });
}
function X(n) {
  let e = n?.runners;
  if (!e?.length) return;
  let t = n?.handle;
  if (t) for (let r of e) t.dispatchScopedEvent(r.scope, new Event("remove"));
}
function b(n) {
  X(n);
  let e = n.handle;
  if (e) for (let t of n.runners) e.releaseScope(t.scope);
  (n.runners.length = 0),
    (n.aborted = !0),
    n.controller?.abort(),
    (n.pendingRemoval = void 0),
    (n.removePrepared = !0),
    (n.handle = void 0);
}
function R(n, e) {
  let t = n?.binding?.node;
  if (!t) return;
  let r = n?.runners;
  if (!r?.length) return;
  let o = n?.handle;
  if (o)
    for (let i of r) {
      let l = new Event(e);
      (l.node = t), o.dispatchScopedEvent(i.scope, l);
    }
}
function E(n) {
  return n === "beforeUpdate" || n === "commit";
}
function G(n, e) {
  if (e.length === 0) return !1;
  let t = n.node;
  for (let r of e) {
    let o = r;
    if (o === t || o.contains(t)) return !0;
  }
  return !1;
}
function J(n, e) {
  return typeof n == "function" && !g(n) ? n : n === void 0 ? () => e.element : () => n;
}
export { k as a, te as b, W as c, ne as d, ee as e, B as f, N as g, V as h, c as i, _ as p, Y as r, Z as t };
