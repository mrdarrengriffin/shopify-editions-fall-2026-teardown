class f {
  #t;
  #e;
  #i = !1;
  #s = !1;
  #r;
  #a = new Set();
  get session() {
    return this.#i;
  }
  #h(t) {
    (this.#i = t), this.#t?.taken(t);
    for (const e of this.#a) e();
  }
  get card() {
    return this.#e;
  }
  watch(t) {
    return this.#a.add(t), () => this.#a.delete(t);
  }
  register(t) {
    return (
      (this.#t = t),
      this.#i && t.taken(!0),
      this.#s && t.cover(!0),
      {
        laidOut: () => {
          this.#t === t && this.#r?.();
        },
        forget: () => {
          this.#t === t && (this.#t = void 0);
        },
      }
    );
  }
  placeCard(t) {
    return (
      (this.#e = t),
      () => {
        this.#e === t && (this.#e = void 0);
      }
    );
  }
  take(t) {
    if (this.#i) return null;
    (this.#r = t), this.#h(!0);
    let e = !0;
    const h = (i) => {
      !e || i === this.#s || ((this.#s = i), this.#t?.cover(i));
    };
    let r;
    const n = {
      begin: (i, s, l) => {
        (r = e ? this.#t?.drag : void 0), r?.begin(i, s, l);
      },
      to: (i, s) => r?.to(i, s),
      end: (i) => {
        const s = r;
        (r = void 0), s?.end(i);
      },
    };
    return {
      card: () => (e ? this.#e : void 0),
      layout: () => (e ? this.#t?.layout() : void 0),
      drag: () => (e && this.#t ? n : void 0),
      cover: h,
      replay: () => {
        e && this.#t?.replay();
      },
      click: (i, s) => {
        e && this.#t?.click(i, s);
      },
      showAll: () => (e && this.#t?.showAll()) || !1,
      release: () => {
        e && (n.end(!0), h(!1), (e = !1), (this.#r = void 0), this.#h(!1));
      },
    };
  }
}
const o = new WeakMap();
function d(a) {
  let t = o.get(a);
  return t || ((t = new f()), o.set(a, t)), t;
}
export { d as g };
