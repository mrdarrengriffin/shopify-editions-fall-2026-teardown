import { T as h } from "./typed-event-target-DhbNxY-V.js";
function g(r) {
  return new d(r);
}
class d {
  frame;
  #e;
  #s;
  #a;
  #l;
  #u = {};
  #i;
  #h;
  #r = !1;
  #n = "idle";
  #o;
  #d;
  #m;
  #p = () => {
    let e = this.#o;
    if (!e) throw new Error("scheduleUpdate not implemented");
    let n = this.#d,
      t = this.#m;
    if (!n || !t) throw new Error("scheduleUpdate target not initialized");
    e.enqueue(n, t);
  };
  #t = [];
  constructor(e) {
    (this.#e = e), (this.frame = e.frame), (this.#l = this.#g());
  }
  render = (e) => {
    if (this.#r)
      return (
        console.warn("render called after component was removed, potential application memory leak"),
        [null, []]
      );
    this.#f(), c(this.#u, e);
    let n = this.#h;
    if (n === void 0) {
      let i = this.#e.type,
        s;
      this.#n = "setup";
      try {
        s = i(this.#l);
      } finally {
        this.#n = "idle";
      }
      if (!m(s)) {
        let u = this.#e.type.name || "Anonymous";
        throw new Error(`${u} must return a render function, received ${typeof s}`);
      }
      (n = s), (this.#h = n);
    }
    let t;
    this.#n = "render";
    try {
      t = n();
    } finally {
      this.#n = "idle";
    }
    return [t, this.#c()];
  };
  remove = () =>
    this.#r || ((this.#r = !0), this.#s?.abort(), this.#f(), this.#t.length === 0)
      ? o
      : this.#c((a ??= AbortSignal.abort()));
  setScheduleUpdate = (e, n, t) => {
    (this.#o = e), (this.#d = n), (this.#m = t);
  };
  getContextValue = () => this.#a;
  isRemoved = () => this.#r;
  #g() {
    let e = this,
      n = {
        set: (t) => {
          this.#a = t;
        },
        get: (t) => (f(t) ? this.#e.getContext(t) : void 0),
      };
    return {
      id: this.#e.id,
      props: this.#u,
      update: () => {
        if (e.#r) return Promise.resolve(AbortSignal.abort());
        let t = e.#e.type.name || "Anonymous";
        if (e.#n === "setup")
          return (
            console.warn(
              `Ignored handle.update() while ${t} is running its setup function. The initial render includes setup changes.`,
            ),
            new Promise((i) => {
              this.#t.push((s) => i(s));
            })
          );
        if (e.#n !== "idle")
          throw new Error(
            `Cannot call handle.update() while ${t} is running its ${e.#n} function. Call it from an event handler or handle.queueTask() instead.`,
          );
        if (e.#o === void 0)
          throw new Error(
            `Cannot call handle.update() before ${t}'s initial render commits. Call it from an event handler or handle.queueTask() instead.`,
          );
        return new Promise((i) => {
          this.#t.push((s) => i(s)), this.#p();
        });
      },
      queueTask: (t) => {
        this.#t.push(t);
      },
      frame: this.#e.frame,
      frames: {
        get top() {
          return e.#e.getTopFrame?.() ?? e.#e.frame;
        },
        get(t) {
          return e.#e.getFrameByName(t);
        },
      },
      context: n,
      get signal() {
        return e.#e.signal ?? e.#w();
      },
    };
  }
  #w() {
    return (this.#s ??= new AbortController()), this.#s.signal;
  }
  #f() {
    this.#i?.abort(), (this.#i = void 0);
  }
  #c(e) {
    return this.#t.length === 0
      ? o
      : (e === void 0 && this.#t.some((i) => i.length >= 1) && (this.#i ??= new AbortController()),
        (e ??= this.#i?.signal),
        (e ??= a ??= AbortSignal.abort()),
        this.#t.splice(0, this.#t.length).map((i) => () => i(e)));
  }
}
function m(r) {
  return typeof r == "function";
}
function f(r) {
  return typeof r == "function";
}
const o = [];
let a;
function c(r, e) {
  for (let n in r) n in e || delete r[n];
  for (let n in e) r[n] = e[n];
}
function w(r) {
  return () => null;
}
function y(r) {
  return () => null;
}
function b(r) {
  return Object.assign(
    new h(),
    { src: "../shop/", replace: l("replace not implemented"), reload: l("reload not implemented") },
    r,
  );
}
function l(r) {
  return () => {
    throw new Error(r);
  };
}
export { y as F, w as a, b, g as c };
