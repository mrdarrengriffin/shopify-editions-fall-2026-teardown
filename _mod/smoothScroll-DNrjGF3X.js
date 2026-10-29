import { o as P } from "./frameLoop-CeLX9Qef.js";
var z = "1.3.23";
function W(t, e, s) {
  return Math.max(t, Math.min(e, s));
}
function A(t, e, s) {
  return (1 - s) * t + s * e;
}
function I(t, e, s, o) {
  return A(t, e, 1 - Math.exp(-s * o));
}
function X(t, e) {
  return ((t % e) + e) % e;
}
var U = class {
  isRunning = !1;
  value = 0;
  from = 0;
  to = 0;
  currentTime = 0;
  lerp;
  duration;
  easing;
  onUpdate;
  advance(t) {
    if (!this.isRunning) return;
    let e = !1;
    if (this.duration && this.easing) {
      this.currentTime += t;
      const s = W(0, this.currentTime / this.duration, 1);
      e = s >= 1;
      const o = e ? 1 : this.easing(s);
      this.value = this.from + (this.to - this.from) * o;
    } else
      this.lerp
        ? ((this.value = I(this.value, this.to, this.lerp * 60, t)),
          Math.round(this.value) === Math.round(this.to) && ((this.value = this.to), (e = !0)))
        : ((this.value = this.to), (e = !0));
    e && this.stop(), this.onUpdate?.(this.value, e);
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(t, e, { lerp: s, duration: o, easing: i, onStart: h, onUpdate: c }) {
    (this.from = this.value = t),
      (this.to = e),
      (this.lerp = s),
      (this.duration = o),
      (this.easing = i),
      (this.currentTime = 0),
      (this.isRunning = !0),
      h?.(),
      (this.onUpdate = c);
  }
};
function V(t, e) {
  let s;
  return function (...o) {
    clearTimeout(s),
      (s = setTimeout(() => {
        (s = void 0), t.apply(this, o);
      }, e));
  };
}
var B = class {
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    constructor(t, e, { autoResize: s = !0, debounce: o = 250 } = {}) {
      (this.wrapper = t),
        (this.content = e),
        s &&
          ((this.debouncedResize = V(this.resize, o)),
          this.wrapper instanceof Window
            ? window.addEventListener("resize", this.debouncedResize)
            : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.wrapperResizeObserver.observe(this.wrapper)),
          (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
          this.contentResizeObserver.observe(this.content)),
        this.resize();
    }
    destroy() {
      this.wrapperResizeObserver?.disconnect(),
        this.contentResizeObserver?.disconnect(),
        this.wrapper === window &&
          this.debouncedResize &&
          window.removeEventListener("resize", this.debouncedResize);
    }
    resize = () => {
      this.onWrapperResize(), this.onContentResize();
    };
    onWrapperResize = () => {
      this.wrapper instanceof Window
        ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
        : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
    };
    onContentResize = () => {
      this.wrapper instanceof Window
        ? ((this.scrollHeight = this.content.scrollHeight), (this.scrollWidth = this.content.scrollWidth))
        : ((this.scrollHeight = this.wrapper.scrollHeight), (this.scrollWidth = this.wrapper.scrollWidth));
    };
    get limit() {
      return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
    }
  },
  D = class {
    events = {};
    emit(t, ...e) {
      const s = this.events[t] || [];
      for (let o = 0, i = s.length; o < i; o++) s[o]?.(...e);
    }
    on(t, e) {
      return (
        this.events[t] ? this.events[t].push(e) : (this.events[t] = [e]),
        () => {
          this.events[t] = this.events[t]?.filter((s) => e !== s);
        }
      );
    }
    off(t, e) {
      this.events[t] = this.events[t]?.filter((s) => e !== s);
    }
    destroy() {
      this.events = {};
    }
  };
const F = 100 / 6,
  E = { passive: !1 };
function N(t, e) {
  return t === 1 ? F : t === 2 ? e : 1;
}
var K = class {
  touchStart = { x: 0, y: 0 };
  lastDelta = { x: 0, y: 0 };
  window = { width: 0, height: 0 };
  emitter = new D();
  constructor(t, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
    (this.element = t),
      (this.options = e),
      window.addEventListener("resize", this.onWindowResize),
      this.onWindowResize(),
      this.element.addEventListener("wheel", this.onWheel, E),
      this.element.addEventListener("touchstart", this.onTouchStart, E),
      this.element.addEventListener("touchmove", this.onTouchMove, E),
      this.element.addEventListener("touchend", this.onTouchEnd, E);
  }
  on(t, e) {
    return this.emitter.on(t, e);
  }
  destroy() {
    this.emitter.destroy(),
      window.removeEventListener("resize", this.onWindowResize),
      this.element.removeEventListener("wheel", this.onWheel, E),
      this.element.removeEventListener("touchstart", this.onTouchStart, E),
      this.element.removeEventListener("touchmove", this.onTouchMove, E),
      this.element.removeEventListener("touchend", this.onTouchEnd, E);
  }
  onTouchStart = (t) => {
    const { clientX: e, clientY: s } = t.targetTouches ? t.targetTouches[0] : t;
    (this.touchStart.x = e),
      (this.touchStart.y = s),
      (this.lastDelta = { x: 0, y: 0 }),
      this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t });
  };
  onTouchMove = (t) => {
    const { clientX: e, clientY: s } = t.targetTouches ? t.targetTouches[0] : t,
      o = -(e - this.touchStart.x) * this.options.touchMultiplier,
      i = -(s - this.touchStart.y) * this.options.touchMultiplier;
    (this.touchStart.x = e),
      (this.touchStart.y = s),
      (this.lastDelta = { x: o, y: i }),
      this.emitter.emit("scroll", { deltaX: o, deltaY: i, event: t });
  };
  onTouchEnd = (t) => {
    this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: t });
  };
  onWheel = (t) => {
    let { deltaX: e, deltaY: s, deltaMode: o } = t;
    const i = N(o, this.window.width),
      h = N(o, this.window.height);
    (e *= i),
      (s *= h),
      (e *= this.options.wheelMultiplier),
      (s *= this.options.wheelMultiplier),
      this.emitter.emit("scroll", { deltaX: e, deltaY: s, event: t });
  };
  onWindowResize = () => {
    this.window = { width: window.innerWidth, height: window.innerHeight };
  };
};
const O = (t) => Math.min(1, 1.001 - 2 ** (-10 * t));
var q = class {
  _isScrolling = !1;
  _isStopped = !1;
  _isLocked = !1;
  _preventNextNativeScrollEvent = !1;
  _resetVelocityTimeout = null;
  _rafId = null;
  isTouching;
  time = 0;
  userData = {};
  lastVelocity = 0;
  velocity = 0;
  direction = 0;
  options;
  targetScroll;
  animatedScroll;
  animate = new U();
  emitter = new D();
  dimensions;
  virtualScroll;
  constructor({
    wrapper: t = window,
    content: e = document.documentElement,
    eventsTarget: s = t,
    smoothWheel: o = !0,
    syncTouch: i = !1,
    syncTouchLerp: h = 0.075,
    touchInertiaExponent: c = 1.7,
    duration: a,
    easing: u,
    lerp: d = 0.1,
    infinite: f = !1,
    orientation: p = "vertical",
    gestureOrientation: l = p === "horizontal" ? "both" : "vertical",
    touchMultiplier: r = 1,
    wheelMultiplier: n = 1,
    autoResize: m = !0,
    prevent: v,
    virtualScroll: w,
    overscroll: S = !0,
    autoRaf: g = !1,
    anchors: y = !1,
    autoToggle: b = !1,
    allowNestedScroll: T = !1,
    __experimental__naiveDimensions: x = !1,
    naiveDimensions: Y = x,
    stopInertiaOnNavigate: C = !1,
  } = {}) {
    (window.lenisVersion = z),
      window.lenis || (window.lenis = {}),
      (window.lenis.version = z),
      p === "horizontal" && (window.lenis.horizontal = !0),
      i === !0 && (window.lenis.touch = !0),
      (!t || t === document.documentElement) && (t = window),
      typeof a == "number" && typeof u != "function"
        ? (u = O)
        : typeof u == "function" && typeof a != "number" && (a = 1),
      (this.options = {
        wrapper: t,
        content: e,
        eventsTarget: s,
        smoothWheel: o,
        syncTouch: i,
        syncTouchLerp: h,
        touchInertiaExponent: c,
        duration: a,
        easing: u,
        lerp: d,
        infinite: f,
        gestureOrientation: l,
        orientation: p,
        touchMultiplier: r,
        wheelMultiplier: n,
        autoResize: m,
        prevent: v,
        virtualScroll: w,
        overscroll: S,
        autoRaf: g,
        anchors: y,
        autoToggle: b,
        allowNestedScroll: T,
        naiveDimensions: Y,
        stopInertiaOnNavigate: C,
      }),
      (this.dimensions = new B(t, e, { autoResize: m })),
      this.updateClassName(),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      this.options.wrapper.addEventListener("scroll", this.onNativeScroll),
      this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: !0 }),
      (this.options.anchors || this.options.stopInertiaOnNavigate) &&
        this.options.wrapper.addEventListener("click", this.onClick),
      this.options.wrapper.addEventListener("pointerdown", this.onPointerDown),
      (this.virtualScroll = new K(s, { touchMultiplier: r, wheelMultiplier: n })),
      this.virtualScroll.on("scroll", this.onVirtualScroll),
      this.options.autoToggle &&
        (this.checkOverflow(), this.rootElement.addEventListener("transitionend", this.onTransitionEnd)),
      this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
  }
  destroy() {
    this.emitter.destroy(),
      this.options.wrapper.removeEventListener("scroll", this.onNativeScroll),
      this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, { capture: !0 }),
      this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown),
      (this.options.anchors || this.options.stopInertiaOnNavigate) &&
        this.options.wrapper.removeEventListener("click", this.onClick),
      this.virtualScroll.destroy(),
      this.dimensions.destroy(),
      this.cleanUpClassName(),
      this._rafId && cancelAnimationFrame(this._rafId);
  }
  on(t, e) {
    return this.emitter.on(t, e);
  }
  off(t, e) {
    return this.emitter.off(t, e);
  }
  onScrollEnd = (t) => {
    t instanceof CustomEvent ||
      ((this.isScrolling === "smooth" || this.isScrolling === !1) && t.stopPropagation());
  };
  dispatchScrollendEvent = () => {
    this.options.wrapper.dispatchEvent(
      new CustomEvent("scrollend", {
        bubbles: this.options.wrapper === window,
        detail: { lenisScrollEnd: !0 },
      }),
    );
  };
  get overflow() {
    const t = this.isHorizontal ? "overflow-x" : "overflow-y";
    return getComputedStyle(this.rootElement)[t];
  }
  checkOverflow() {
    ["hidden", "clip"].includes(this.overflow) ? this.internalStop() : this.internalStart();
  }
  onTransitionEnd = (t) => {
    t.propertyName?.includes("overflow") && t.target === this.rootElement && this.checkOverflow();
  };
  setScroll(t) {
    this.isHorizontal
      ? this.options.wrapper.scrollTo({ left: t, behavior: "instant" })
      : this.options.wrapper.scrollTo({ top: t, behavior: "instant" });
  }
  onClick = (t) => {
    const e = t
        .composedPath()
        .filter((o) => o instanceof HTMLAnchorElement && o.href)
        .map((o) => new URL(o.href)),
      s = new URL(window.location.href);
    if (this.options.anchors) {
      const o = e.find((i) => s.host === i.host && s.pathname === i.pathname && i.hash);
      if (o) {
        const i =
            typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0,
          h = `#${o.hash.split("#")[1]}`;
        this.scrollTo(h, i);
        return;
      }
    }
    if (this.options.stopInertiaOnNavigate && e.some((o) => s.host === o.host && s.pathname !== o.pathname)) {
      this.reset();
      return;
    }
  };
  onPointerDown = (t) => {
    t.button === 1 && this.reset();
  };
  onVirtualScroll = (t) => {
    if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(t) === !1) return;
    const { deltaX: e, deltaY: s, event: o } = t;
    if (
      (this.emitter.emit("virtual-scroll", { deltaX: e, deltaY: s, event: o }),
      o.ctrlKey || o.lenisStopPropagation)
    )
      return;
    const i = o.type.includes("touch"),
      h = o.type.includes("wheel");
    this.isTouching = o.type === "touchstart" || o.type === "touchmove";
    const c = e === 0 && s === 0;
    if (this.options.syncTouch && i && o.type === "touchstart" && c && !this.isStopped && !this.isLocked) {
      this.reset();
      return;
    }
    const a =
      (this.options.gestureOrientation === "vertical" && s === 0) ||
      (this.options.gestureOrientation === "horizontal" && e === 0);
    if (c || a) return;
    let u = o.composedPath();
    u = u.slice(0, u.indexOf(this.rootElement));
    const d = this.options.prevent,
      f = Math.abs(e) >= Math.abs(s) ? "horizontal" : "vertical";
    if (
      u.find(
        (n) =>
          n instanceof HTMLElement &&
          ((typeof d == "function" && d?.(n)) ||
            n.hasAttribute?.("data-lenis-prevent") ||
            (f === "vertical" && n.hasAttribute?.("data-lenis-prevent-vertical")) ||
            (f === "horizontal" && n.hasAttribute?.("data-lenis-prevent-horizontal")) ||
            (i && n.hasAttribute?.("data-lenis-prevent-touch")) ||
            (h && n.hasAttribute?.("data-lenis-prevent-wheel")) ||
            (this.options.allowNestedScroll && this.hasNestedScroll(n, { deltaX: e, deltaY: s }))),
      )
    )
      return;
    if (this.isStopped || this.isLocked) {
      o.cancelable && o.preventDefault();
      return;
    }
    if (!((this.options.syncTouch && i) || (this.options.smoothWheel && h))) {
      (this.isScrolling = "native"), this.animate.stop(), (o.lenisStopPropagation = !0);
      return;
    }
    let p = s;
    this.options.gestureOrientation === "both"
      ? (p = Math.abs(s) > Math.abs(e) ? s : e)
      : this.options.gestureOrientation === "horizontal" && (p = e),
      (!this.options.overscroll ||
        this.options.infinite ||
        (this.options.wrapper !== window &&
          this.limit > 0 &&
          ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
            (this.animatedScroll === 0 && s > 0) ||
            (this.animatedScroll === this.limit && s < 0)))) &&
        (o.lenisStopPropagation = !0),
      o.cancelable && o.preventDefault();
    const l = i && this.options.syncTouch,
      r = i && o.type === "touchend";
    r && (p = Math.sign(p) * Math.abs(this.velocity) ** this.options.touchInertiaExponent),
      this.scrollTo(this.targetScroll + p, {
        programmatic: !1,
        ...(l
          ? { lerp: r ? this.options.syncTouchLerp : 1 }
          : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing }),
      });
  };
  resize() {
    this.dimensions.resize(), (this.animatedScroll = this.targetScroll = this.actualScroll), this.emit();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  onNativeScroll = () => {
    if (
      (this._resetVelocityTimeout !== null &&
        (clearTimeout(this._resetVelocityTimeout), (this._resetVelocityTimeout = null)),
      this._preventNextNativeScrollEvent)
    ) {
      this._preventNextNativeScrollEvent = !1;
      return;
    }
    if (this.isScrolling === !1 || this.isScrolling === "native") {
      const t = this.animatedScroll;
      (this.animatedScroll = this.targetScroll = this.actualScroll),
        (this.lastVelocity = this.velocity),
        (this.velocity = this.animatedScroll - t),
        (this.direction = Math.sign(this.animatedScroll - t)),
        this.isStopped || (this.isScrolling = "native"),
        this.emit(),
        this.velocity !== 0 &&
          (this._resetVelocityTimeout = setTimeout(() => {
            (this.lastVelocity = this.velocity), (this.velocity = 0), (this.isScrolling = !1), this.emit();
          }, 400));
    }
  };
  reset() {
    (this.isLocked = !1),
      (this.isScrolling = !1),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      (this.lastVelocity = this.velocity = 0),
      this.animate.stop();
  }
  start() {
    if (this.isStopped) {
      if (this.options.autoToggle) {
        this.rootElement.style.removeProperty("overflow");
        return;
      }
      this.internalStart();
    }
  }
  internalStart() {
    this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
  }
  stop() {
    if (!this.isStopped) {
      if (this.options.autoToggle) {
        this.rootElement.style.setProperty("overflow", "clip");
        return;
      }
      this.internalStop();
    }
  }
  internalStop() {
    this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
  }
  raf = (t) => {
    const e = t - (this.time || t);
    (this.time = t),
      this.animate.advance(e * 0.001),
      this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
  };
  scrollTo(
    t,
    {
      offset: e = 0,
      immediate: s = !1,
      lock: o = !1,
      programmatic: i = !0,
      lerp: h = i ? this.options.lerp : void 0,
      duration: c = i ? this.options.duration : void 0,
      easing: a = i ? this.options.easing : void 0,
      onStart: u,
      onComplete: d,
      force: f = !1,
      userData: p,
    } = {},
  ) {
    if ((this.isStopped || this.isLocked) && !f) return;
    let l = t,
      r = e;
    if (typeof l == "string" && ["top", "left", "start", "#"].includes(l)) l = 0;
    else if (typeof l == "string" && ["bottom", "right", "end"].includes(l)) l = this.limit;
    else {
      let n = null;
      if (
        (typeof l == "string"
          ? ((n = document.querySelector(l)),
            n || (l === "#top" ? (l = 0) : console.warn("Lenis: Target not found", l)))
          : l instanceof HTMLElement && l?.nodeType && (n = l),
        n)
      ) {
        if (this.options.wrapper !== window) {
          const y = this.rootElement.getBoundingClientRect();
          r -= this.isHorizontal ? y.left : y.top;
        }
        const m = n.getBoundingClientRect(),
          v = getComputedStyle(n),
          w = this.isHorizontal
            ? Number.parseFloat(v.scrollMarginLeft)
            : Number.parseFloat(v.scrollMarginTop),
          S = getComputedStyle(this.rootElement),
          g = this.isHorizontal
            ? Number.parseFloat(S.scrollPaddingLeft)
            : Number.parseFloat(S.scrollPaddingTop);
        l =
          (this.isHorizontal ? m.left : m.top) +
          this.animatedScroll -
          (Number.isNaN(w) ? 0 : w) -
          (Number.isNaN(g) ? 0 : g);
      }
    }
    if (typeof l == "number") {
      if (((l += r), this.options.infinite)) {
        if (i) {
          this.targetScroll = this.animatedScroll = this.scroll;
          const n = l - this.animatedScroll;
          n > this.limit / 2 ? (l -= this.limit) : n < -this.limit / 2 && (l += this.limit);
        }
      } else l = W(0, l, this.limit);
      if (l === this.targetScroll) {
        u?.(this), d?.(this);
        return;
      }
      if (((this.userData = p ?? {}), s)) {
        (this.animatedScroll = this.targetScroll = l),
          this.setScroll(this.scroll),
          this.reset(),
          this.preventNextNativeScrollEvent(),
          this.emit(),
          d?.(this),
          (this.userData = {}),
          requestAnimationFrame(() => {
            this.dispatchScrollendEvent();
          });
        return;
      }
      i || (this.targetScroll = l),
        typeof c == "number" && typeof a != "function"
          ? (a = O)
          : typeof a == "function" && typeof c != "number" && (c = 1),
        this.animate.fromTo(this.animatedScroll, l, {
          duration: c,
          easing: a,
          lerp: h,
          onStart: () => {
            o && (this.isLocked = !0), (this.isScrolling = "smooth"), u?.(this);
          },
          onUpdate: (n, m) => {
            (this.isScrolling = "smooth"),
              (this.lastVelocity = this.velocity),
              (this.velocity = n - this.animatedScroll),
              (this.direction = Math.sign(this.velocity)),
              (this.animatedScroll = n),
              this.setScroll(this.scroll),
              i && (this.targetScroll = n),
              m || this.emit(),
              m &&
                (this.reset(),
                this.emit(),
                d?.(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                }),
                this.preventNextNativeScrollEvent());
          },
        });
    }
  }
  preventNextNativeScrollEvent() {
    (this._preventNextNativeScrollEvent = !0),
      requestAnimationFrame(() => {
        this._preventNextNativeScrollEvent = !1;
      });
  }
  hasNestedScroll(t, { deltaX: e, deltaY: s }) {
    const o = Date.now();
    t._lenis || (t._lenis = {});
    const i = t._lenis;
    let h, c, a, u, d, f, p, l, r, n;
    if (o - (i.time ?? 0) > 2e3) {
      i.time = Date.now();
      const T = window.getComputedStyle(t);
      if (
        ((i.computedStyle = T),
        (h = ["auto", "overlay", "scroll"].includes(T.overflowX)),
        (c = ["auto", "overlay", "scroll"].includes(T.overflowY)),
        (d = ["auto"].includes(T.overscrollBehaviorX)),
        (f = ["auto"].includes(T.overscrollBehaviorY)),
        (i.hasOverflowX = h),
        (i.hasOverflowY = c),
        !(h || c))
      )
        return !1;
      (p = t.scrollWidth),
        (l = t.scrollHeight),
        (r = t.clientWidth),
        (n = t.clientHeight),
        (a = p > r),
        (u = l > n),
        (i.isScrollableX = a),
        (i.isScrollableY = u),
        (i.scrollWidth = p),
        (i.scrollHeight = l),
        (i.clientWidth = r),
        (i.clientHeight = n),
        (i.hasOverscrollBehaviorX = d),
        (i.hasOverscrollBehaviorY = f);
    } else
      (a = i.isScrollableX),
        (u = i.isScrollableY),
        (h = i.hasOverflowX),
        (c = i.hasOverflowY),
        (p = i.scrollWidth),
        (l = i.scrollHeight),
        (r = i.clientWidth),
        (n = i.clientHeight),
        (d = i.hasOverscrollBehaviorX),
        (f = i.hasOverscrollBehaviorY);
    if (!((h && a) || (c && u))) return !1;
    const m = Math.abs(e) >= Math.abs(s) ? "horizontal" : "vertical";
    let v, w, S, g, y, b;
    if (m === "horizontal") (v = Math.round(t.scrollLeft)), (w = p - r), (S = e), (g = h), (y = a), (b = d);
    else if (m === "vertical") (v = Math.round(t.scrollTop)), (w = l - n), (S = s), (g = c), (y = u), (b = f);
    else return !1;
    return !b && (v >= w || v <= 0) ? !0 : (S > 0 ? v < w : v > 0) && g && y;
  }
  get rootElement() {
    return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
  }
  get limit() {
    return this.options.naiveDimensions
      ? this.isHorizontal
        ? this.rootElement.scrollWidth - this.rootElement.clientWidth
        : this.rootElement.scrollHeight - this.rootElement.clientHeight
      : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  get actualScroll() {
    const t = this.options.wrapper;
    return this.isHorizontal ? (t.scrollX ?? t.scrollLeft) : (t.scrollY ?? t.scrollTop);
  }
  get scroll() {
    return this.options.infinite ? X(this.animatedScroll, this.limit) : this.animatedScroll;
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  get isScrolling() {
    return this._isScrolling;
  }
  set isScrolling(t) {
    this._isScrolling !== t && ((this._isScrolling = t), this.updateClassName());
  }
  get isStopped() {
    return this._isStopped;
  }
  set isStopped(t) {
    this._isStopped !== t && ((this._isStopped = t), this.updateClassName());
  }
  get isLocked() {
    return this._isLocked;
  }
  set isLocked(t) {
    this._isLocked !== t && ((this._isLocked = t), this.updateClassName());
  }
  get isSmooth() {
    return this.isScrolling === "smooth";
  }
  get className() {
    let t = "lenis";
    return (
      this.options.autoToggle && (t += " lenis-autoToggle"),
      this.isStopped && (t += " lenis-stopped"),
      this.isLocked && (t += " lenis-locked"),
      this.isScrolling && (t += " lenis-scrolling"),
      this.isScrolling === "smooth" && (t += " lenis-smooth"),
      t
    );
  }
  updateClassName() {
    this.cleanUpClassName(),
      this.className.split(" ").forEach((t) => {
        this.rootElement.classList.add(t);
      });
  }
  cleanUpClassName() {
    for (const t of Array.from(this.rootElement.classList))
      (t === "lenis" || t.startsWith("lenis-")) && this.rootElement.classList.remove(t);
  }
};
function j(t) {
  if (t.length < 2) return null;
  const e = t[t.length - 1] - t[0];
  return e > 0 && ((t.length - 1) / e) * 1e3 > 50;
}
const L = 0.75,
  G = 0.1,
  M = 1.2,
  $ = 3,
  R = (t) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2);
function H(t) {
  if (t.defaultPrevented || t.button || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return null;
  const e = t.target instanceof Element ? t.target.closest("a") : null;
  return e && e.origin === location.origin && e.pathname === location.pathname && e.search === location.search
    ? e
    : null;
}
const _ = "a[data-scroll-to-top]";
function k() {
  location.hash && history.replaceState(history.state, "", location.pathname + location.search);
}
function J(t, { autoResize: e = !1, easeTrackpad: s = !0, glideLinks: o = !0 } = {}) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || matchMedia("(pointer: coarse)").matches)
    return (
      o &&
        addEventListener(
          "click",
          (r) => {
            H(r)?.matches(_) && (r.preventDefault(), k(), scrollTo({ top: 0, behavior: "instant" }));
          },
          { signal: t },
        ),
      null
    );
  const i = new q({
      duration: L,
      easing: (r) => Math.min(1, 1.001 - 2 ** (-10 * r)),
      smoothWheel: !0,
      syncTouch: !1,
      autoRaf: !1,
      autoResize: e,
      allowNestedScroll: !0,
      prevent: (r) => r instanceof HTMLDialogElement || r.hasAttribute("popover"),
      virtualScroll: ({ event: r, deltaY: n }) =>
        r.defaultPrevented ? !1 : l.wheelHook?.(n, r) ? (r.cancelable && r.preventDefault(), !1) : !0,
    }),
    h = [];
  let c = 0;
  const a = () => {
      clearTimeout(c), removeEventListener("wheel", u, { capture: !0 });
      const r = j(h);
      r !== null && ((i.options.duration = r ? G : L), r && !s && (i.stop(), i.destroy()));
    },
    u = (r) => {
      h.length || (c = window.setTimeout(a, 2e3)), h.push(r.timeStamp), h.length >= 10 && a();
    };
  addEventListener("wheel", u, { passive: !0, capture: !0 }),
    addEventListener(
      "click",
      (r) => {
        const n = o ? H(r) : null;
        if (!n) return;
        if (n.matches(_)) {
          r.preventDefault(),
            k(),
            i.scrollTo(0, { duration: Math.min($, Math.max(M, window.scrollY / 8e3)), easing: R });
          return;
        }
        if (!n.hash) return;
        const m = document.getElementById(decodeURIComponent(n.hash.slice(1)));
        if (!m) return;
        r.preventDefault();
        const v = window.scrollY;
        location.hash === n.hash
          ? (history.replaceState(history.state, "", location.pathname + location.search),
            location.replace(n.hash))
          : (location.hash = n.hash);
        const w = window.scrollY;
        window.scrollTo({ top: v, behavior: "instant" }),
          m.focus({ preventScroll: !0 }),
          i.scrollTo(w, { duration: M, easing: R });
      },
      { signal: t },
    );
  const d = () => {
    i.stop(), i.start();
  };
  o ||
    window.navigation?.addEventListener(
      "navigate",
      (r) => {
        r.hashChange && d();
      },
      { signal: t },
    ),
    addEventListener(
      "beforetoggle",
      (r) => {
        r.target instanceof HTMLDialogElement && r.newState === "open" && d();
      },
      { capture: !0, signal: t },
    );
  let f = window.scrollY,
    p = !1;
  t.addEventListener(
    "abort",
    () => {
      a(), i.destroy();
    },
    { once: !0 },
  );
  const l = {
    wheelHook: null,
    get limit() {
      return i.limit;
    },
    get target() {
      return i.targetScroll;
    },
    get duration() {
      return i.options.duration ?? L;
    },
    get easing() {
      return i.isSmooth;
    },
    scrollTo: (r, n) => i.scrollTo(r, n),
    wheelTo: (r) =>
      i.scrollTo(r, {
        programmatic: !1,
        lerp: i.options.lerp,
        duration: i.options.duration,
        easing: i.options.easing,
      }),
    jump(r) {
      const n = Math.min(Math.max(0, r), i.limit);
      window.scrollTo({ top: n, behavior: "instant" }), (i.animatedScroll = i.targetScroll = n);
    },
    step(r) {
      p && i.isSmooth && Math.abs(window.scrollY - f) > 0.5 && d(), i.raf(r);
      const n = window.scrollY !== f;
      return (f = window.scrollY), (p = i.isSmooth), n;
    },
    resize: () => i.resize(),
  };
  return l;
}
function Z(t) {
  const e = J(t, { autoResize: !0, easeTrackpad: !1, glideLinks: !1 });
  if (!e) return;
  let s = 0,
    o;
  const i = (c, a) => {
      (s += a), e.step(s), !e.easing && (o?.(), (o = void 0));
    },
    h = () => {
      e.easing && (o ??= P(i, { signal: t }));
    };
  addEventListener("wheel", h, { passive: !0, signal: t });
}
export { J as createSmoothScroll, j as isTrackpad, Z as startSmoothScroll };
