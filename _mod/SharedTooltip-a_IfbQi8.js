import { n as Z } from "./frameLoop-CeLX9Qef.js";
import { c as Ft } from "./client-entries-B1h-jQ5r.js";
import { r as U } from "./ref-mixin-D6m2Cu20.js";
import { j as G } from "./jsx-CLqwgotn.js";
import "./mixin-CMuDUxNx.js";
import "./typed-event-target-DhbNxY-V.js";
const yt = 16;
function dt(t) {
  return t.startsWith("left") || t.startsWith("right");
}
function ut(t) {
  return t.startsWith("top") || t.startsWith("bottom");
}
function pt(t, e, i, l) {
  let u = t + e;
  return u > l && (t -= u - l), t < i && (t = i), t;
}
function J(t, e, i) {
  return Math.min(Math.max(t, e), i);
}
function mt(t, e, i) {
  return { min: e, max: Math.max(e, i - t) };
}
function wt(t, e) {
  return e === "horizontal"
    ? t.right <= 0
      ? "before"
      : t.left >= window.innerWidth
        ? "after"
        : "visible"
    : t.bottom <= 0
      ? "before"
      : t.top >= window.innerHeight
        ? "after"
        : "visible";
}
function Mt(t, e, i, l = 0, u = 0) {
  if (i === 0 && l === 0 && u === 0) return t;
  let { top: c, left: f } = t;
  return (
    e.startsWith("top")
      ? (c -= i)
      : e.startsWith("bottom")
        ? (c += i)
        : e.startsWith("left")
          ? (f -= i)
          : e.startsWith("right") && (f += i),
    (f += l),
    (c += u),
    { top: c, left: f }
  );
}
function rt(t, e) {
  return typeof t == "function" ? t(e) : (t ?? 0);
}
function zt(t) {
  if (typeof t != "object" || t === null || !("x" in t) || !("y" in t)) return !1;
  let e = "width" in t ? t.width : void 0,
    i = "height" in t ? t.height : void 0;
  return (
    typeof t.x == "number" &&
    typeof t.y == "number" &&
    (e === void 0 || typeof e == "number") &&
    (i === void 0 || typeof i == "number")
  );
}
function bt(t) {
  return t instanceof HTMLElement
    ? t.getBoundingClientRect()
    : new DOMRect(t.x, t.y, t.width ?? 0, t.height ?? 0);
}
function Pt(t, e, i, l, u = !1) {
  let c = e.bottom,
    f = e.left + (e.width - i) / 2;
  return (
    t === "bottom-start"
      ? (f = e.left)
      : t === "bottom-end"
        ? (f = e.right - i)
        : t === "top"
          ? (c = e.top - l)
          : t === "top-start"
            ? ((c = e.top - l), (f = e.left))
            : t === "top-end"
              ? ((c = e.top - l), (f = e.right - i))
              : t === "left"
                ? ((c = e.top + (e.height - l) / 2), (f = e.left - i))
                : t === "left-start"
                  ? ((c = e.top), (f = e.left - i))
                  : t === "left-end"
                    ? ((c = e.bottom - l), (f = e.left - i))
                    : t === "right"
                      ? ((c = e.top + (e.height - l) / 2), (f = e.right))
                      : t === "right-start"
                        ? ((c = e.top), (f = e.right))
                        : t === "right-end" && ((c = e.bottom - l), (f = e.right)),
    u &&
      (t.startsWith("bottom")
        ? (c = e.bottom - l)
        : t.startsWith("top")
          ? (c = e.top)
          : t.startsWith("left")
            ? (f = e.left)
            : t.startsWith("right") && (f = e.right - i)),
    { top: c, left: f }
  );
}
function gt(t) {
  return t === "auto" || t === "scroll" || t === "overlay";
}
function Vt(t, e) {
  let i = e.parentElement;
  for (; i && i !== t; ) {
    let l = getComputedStyle(i);
    if (gt(l.overflowX) || gt(l.overflowY)) return i;
    i = i.parentElement;
  }
  return t;
}
function $t(t, e) {
  let i = e ? t.querySelector(e) : null;
  i && !(i instanceof HTMLElement) && (i = null);
  let l = i ? Vt(t, i) : t,
    u = null,
    c = null,
    f = 0,
    p = 0;
  if (i instanceof HTMLElement) {
    let v = t.getBoundingClientRect(),
      a = l.getBoundingClientRect(),
      y = i.getBoundingClientRect();
    (f = a.left - v.left),
      (p = a.top - v.top),
      (u = y.left - a.left + l.scrollLeft),
      (c = y.top - a.top + l.scrollTop);
  }
  return {
    width: t.offsetWidth,
    height: t.offsetHeight,
    scrollContainer: l,
    scrollContainerOffsetX: f,
    scrollContainerOffsetY: p,
    scrollViewportWidth: l.offsetWidth,
    scrollViewportHeight: l.offsetHeight,
    scrollWidth: Math.max(l.scrollWidth, l.offsetWidth),
    scrollHeight: Math.max(l.scrollHeight, l.offsetHeight),
    relativeWidth: i instanceof HTMLElement ? i.offsetWidth : null,
    relativeHeight: i instanceof HTMLElement ? i.offsetHeight : null,
    relativeElement: i,
    relativeOffsetX: u,
    relativeOffsetY: c,
  };
}
function nt(t, e, { ignoreInlineMaxSize: i = !1 } = {}) {
  let l = t.style.position,
    u = t.style.left,
    c = t.style.display,
    f = t.style.maxWidth,
    p = t.style.maxHeight;
  i && ((t.style.maxWidth = ""), (t.style.maxHeight = ""));
  let v = t.offsetWidth === 0;
  v && ((t.style.position = "absolute"), (t.style.left = "-9999px"), (t.style.display = "block"));
  let a = $t(t, e);
  return (
    v && ((t.style.position = l), (t.style.left = u), (t.style.display = c)),
    i && ((t.style.maxWidth = f), (t.style.maxHeight = p)),
    a
  );
}
function Wt(t = 0) {
  return { left: t, top: t, right: window.innerWidth - t, bottom: window.innerHeight - t };
}
function qt(t, e = 0) {
  return t
    ? Wt(e)
    : {
        left: window.scrollX + e,
        top: window.scrollY + e,
        right: window.scrollX + window.innerWidth - e,
        bottom: window.scrollY + window.innerHeight - e,
      };
}
function Nt(t, e) {
  return (
    Math.max(e.left - t.left, 0) +
    Math.max(t.right - e.right, 0) +
    Math.max(e.top - t.top, 0) +
    Math.max(t.bottom - e.bottom, 0)
  );
}
function _t(t, e) {
  return (
    Math.abs(t.top - e.top) >= 1 ||
    Math.abs(t.left - e.left) >= 1 ||
    Math.abs(t.right - e.right) >= 1 ||
    Math.abs(t.bottom - e.bottom) >= 1
  );
}
function R(t, e) {
  return t === null || e === null ? t !== e : Math.abs(t - e) >= 1;
}
function Bt(t, e) {
  return (
    Math.abs(t.width - e.width) >= 1 ||
    Math.abs(t.height - e.height) >= 1 ||
    Math.abs(t.scrollViewportWidth - e.scrollViewportWidth) >= 1 ||
    Math.abs(t.scrollViewportHeight - e.scrollViewportHeight) >= 1 ||
    Math.abs(t.scrollWidth - e.scrollWidth) >= 1 ||
    Math.abs(t.scrollHeight - e.scrollHeight) >= 1 ||
    Math.abs(t.scrollContainerOffsetX - e.scrollContainerOffsetX) >= 1 ||
    Math.abs(t.scrollContainerOffsetY - e.scrollContainerOffsetY) >= 1 ||
    R(t.relativeWidth, e.relativeWidth) ||
    R(t.relativeHeight, e.relativeHeight) ||
    R(t.relativeOffsetX, e.relativeOffsetX) ||
    R(t.relativeOffsetY, e.relativeOffsetY)
  );
}
function It(t) {
  return {
    top: "bottom",
    "top-start": "bottom-start",
    "top-end": "bottom-end",
    bottom: "top",
    "bottom-start": "top-start",
    "bottom-end": "top-end",
    left: "right",
    "left-start": "right-start",
    "left-end": "right-end",
    right: "left",
    "right-start": "left-start",
    "right-end": "left-end",
  }[t];
}
function jt(t, e, i, l, u, c, f, p, v, a, y, P) {
  let d = Pt(t, e, i, l, f);
  return (
    (d = Mt(d, t, p, v, a)),
    y != null && (d.left -= y),
    P != null && (d.top -= P),
    { top: d.top, left: d.left, right: d.left + u, bottom: d.top + c }
  );
}
function xt(t, e, i, l, u, c, f, p, v, a, y, P) {
  let d = Wt(yt),
    r = jt(t, e, i, l, u, c, f, p, v, a, y, P),
    g = {
      leftOk: r.left >= d.left,
      rightOk: r.right <= d.right,
      topOk: r.top >= d.top,
      bottomOk: r.bottom <= d.bottom,
    },
    W = Object.values(g).filter(Boolean).length;
  return { overflow: Nt(r, d), total: W, perfect: W === 4 };
}
function Kt(t, e, i, l, u, c, f, p, v, a, y, P, d) {
  let r = window.scrollY > 0;
  if (t.startsWith("top") && f && r && e.top - l < 0) return t;
  let g = xt(t, e, i, l, u, c, p, v, a, y, P, d);
  if (g.perfect) return t;
  let W = It(t),
    L = xt(W, e, i, l, u, c, p, v, a, y, P, d);
  return L.perfect || L.total > g.total || (L.total === g.total && L.overflow < g.overflow) ? W : t;
}
function Gt(t, e, i, l) {
  return t.startsWith("left") ? e + i - l.left : t.startsWith("right") ? l.right - e : l.right - l.left;
}
function Jt(t, e, i, l) {
  return t.startsWith("top") ? e + i - l.top : t.startsWith("bottom") ? l.bottom - e : l.bottom - l.top;
}
function vt(t, e, i, l, u, c, f, p, v, a = 0, y = 0, P, d) {
  let r = Pt(t, e, i, l, u);
  return (
    v || ((r.top += window.scrollY), (r.left += window.scrollX)),
    (r = Mt(r, t, c, f, p)),
    (r.left -= a),
    (r.top -= y),
    P != null && (r.left -= P),
    d != null && (r.top -= d),
    r
  );
}
function D(t) {
  let e = Math.max(t.naturalSize - t.visibleSize, 0),
    i = J(t.currentScroll, 0, e);
  if (e === 0) return { position: J(t.desiredPosition, t.minPosition, t.maxPosition), scroll: i };
  let l = Math.max(0, t.minPosition - t.desiredPosition),
    u = Math.min(e, t.maxPosition - t.desiredPosition);
  return (
    l <= u
      ? (i = J(i, l, u))
      : t.desiredPosition > t.maxPosition
        ? (i = 0)
        : t.desiredPosition + e < t.minPosition && (i = e),
    { position: J(t.desiredPosition + i, t.minPosition, t.maxPosition), scroll: i }
  );
}
function Qt(t, e, i = {}) {
  let l, u;
  if (!(t instanceof HTMLElement)) throw new TypeError("anchor() expected a floating HTMLElement");
  if (!(e instanceof HTMLElement) && !zt(e))
    throw new TypeError("anchor() expected an anchor HTMLElement or coordinates");
  let {
      placement: c = "bottom",
      inset: f = !1,
      relativeTo: p,
      offset: v = 0,
      offsetX: a = 0,
      offsetY: y = 0,
    } = i,
    P = e instanceof HTMLElement && getComputedStyle(e).position !== "fixed",
    d = t.hasAttribute("popover") || !P,
    r = 0;
  function g(M = bt(e), b = nt(t, p, { ignoreInlineMaxSize: !0 })) {
    let A = rt(v, t),
      k = rt(a, t),
      _ = rt(y, t),
      E = qt(d, yt),
      F = p && b.relativeWidth ? b.relativeWidth : b.width,
      T = p && b.relativeHeight ? b.relativeHeight : b.height,
      C = Kt(c, M, F, T, b.width, b.height, P, f, A, k, _, b.relativeOffsetX, b.relativeOffsetY);
    t.setAttribute("data-anchor-placement", C);
    let h = vt(
        C,
        M,
        F,
        T,
        f,
        A,
        k,
        _,
        d,
        b.scrollContainerOffsetX,
        b.scrollContainerOffsetY,
        b.relativeOffsetX,
        b.relativeOffsetY,
      ),
      B = Math.max(Gt(C, h.left, b.width, E), 0),
      z = Math.max(Jt(C, h.top, b.height, E), 0);
    (t.style.maxWidth = B < b.width ? `${Math.floor(B)}px` : ""),
      (t.style.maxHeight = z < b.height ? `${Math.floor(z)}px` : "");
    let s = nt(t, p);
    (F = p && s.relativeWidth ? s.relativeWidth : s.width),
      (T = p && s.relativeHeight ? s.relativeHeight : s.height),
      (h = vt(
        C,
        M,
        F,
        T,
        f,
        A,
        k,
        _,
        d,
        s.scrollContainerOffsetX,
        s.scrollContainerOffsetY,
        s.relativeOffsetX,
        s.relativeOffsetY,
      ));
    let K = E.left,
      H = E.top,
      $ = E.right,
      I = E.bottom,
      Y = mt(s.width, K, $),
      X = mt(s.height, H, I);
    if (dt(C)) {
      if (p && s.relativeOffsetY !== null) {
        let x = D({
          currentScroll: s.scrollContainer.scrollTop,
          desiredPosition: h.top,
          naturalSize: s.scrollHeight,
          visibleSize: s.scrollViewportHeight,
          minPosition: X.min,
          maxPosition: X.max,
        });
        (s.scrollContainer.scrollTop = x.scroll), (h.top = x.position);
      } else h.top = pt(h.top, s.height, H, I);
      if (p)
        if (s.relativeOffsetX !== null) {
          let x = D({
            currentScroll: s.scrollContainer.scrollLeft,
            desiredPosition: h.left,
            naturalSize: s.scrollWidth,
            visibleSize: s.scrollViewportWidth,
            minPosition: Y.min,
            maxPosition: Y.max,
          });
          (s.scrollContainer.scrollLeft = x.scroll), (h.left = x.position);
        } else h.left = J(h.left, Y.min, Y.max);
    } else if (ut(C)) {
      if (p && s.relativeOffsetX !== null) {
        let x = D({
          currentScroll: s.scrollContainer.scrollLeft,
          desiredPosition: h.left,
          naturalSize: s.scrollWidth,
          visibleSize: s.scrollViewportWidth,
          minPosition: Y.min,
          maxPosition: Y.max,
        });
        (s.scrollContainer.scrollLeft = x.scroll), (h.left = x.position);
      } else h.left = pt(h.left, s.width, K, $);
      if ((!d && window.scrollY > 0 && h.top < E.top && (h.top = E.top), p))
        if (s.relativeOffsetY !== null) {
          let x = D({
            currentScroll: s.scrollContainer.scrollTop,
            desiredPosition: h.top,
            naturalSize: s.scrollHeight,
            visibleSize: s.scrollViewportHeight,
            minPosition: X.min,
            maxPosition: X.max,
          });
          (s.scrollContainer.scrollTop = x.scroll), (h.top = x.position);
        } else h.top = J(h.top, X.min, X.max);
    }
    if (dt(C)) {
      let x = wt(M, "horizontal");
      x === "before" ? (h.left = K) : x === "after" && (h.left = $ - s.width);
    } else if (ut(C)) {
      let x = wt(M, "vertical");
      x === "before" ? (h.top = H) : x === "after" && (h.top = I - s.height);
    }
    (t.style.position = d ? "fixed" : "absolute"),
      (t.style.inset = "auto"),
      (t.style.top = `${h.top}px`),
      (t.style.left = `${h.left}px`),
      (l = M),
      (u = s);
  }
  g();
  function W() {
    let M = bt(e),
      b = nt(t, p);
    (_t(M, l) || Bt(b, u)) && g(M, b), (r = requestAnimationFrame(W));
  }
  function L() {
    g();
  }
  function N() {
    g();
  }
  return (
    (r = requestAnimationFrame(W)),
    window.addEventListener("scroll", L, { passive: !0 }),
    window.addEventListener("resize", N, { passive: !0 }),
    () => {
      cancelAnimationFrame(r),
        window.removeEventListener("scroll", L),
        window.removeEventListener("resize", N);
    }
  );
}
const tt = ":is(a, button)[data-link-tooltip]",
  j = "data-link-tooltip-open",
  st = { grace: 400, fade: 300, content: 300 },
  oe = Ft(import.meta.url + "#SharedTooltip", function (e) {
    let i,
      l,
      u,
      c,
      f,
      p = "",
      v = "";
    return (
      e.queueTask(() => {
        const a = document.querySelector(`[data-tooltip-scope="${CSS.escape(e.props.scopeId)}"]`);
        if (!a || typeof i.showPopover != "function") return;
        const y = window.matchMedia("(prefers-reduced-motion: reduce)"),
          P = window.matchMedia("(hover: hover)"),
          d = { x: 0, y: 0 };
        let r = null,
          g = !1,
          W = [],
          L = 0,
          N = 0,
          M = 0,
          b,
          A,
          k,
          _ = 0,
          E = new WeakMap(),
          F,
          T,
          C,
          h = [],
          B = () => {};
        const z = (o) => {
            const n = o instanceof Element ? o.closest(tt) : null;
            return n && a.contains(n) ? n : null;
          },
          s = () => window.clearTimeout(b),
          K = () => {
            A?.(), k?.(), (A = void 0), (k = void 0), (_ = 0);
          },
          H = () => {
            M++,
              s(),
              K(),
              C?.cancel(),
              h.forEach((o) => o.cancel()),
              (h = []),
              T?.abort(),
              (T = void 0),
              B(),
              (B = () => {}),
              (F = void 0),
              (r = null),
              (g = !1),
              i.removeAttribute("data-pinned"),
              i.matches(":popover-open") && i.hidePopover();
          },
          $ = (o) => {
            const n = getComputedStyle(i).opacity;
            C?.cancel(),
              (C = i.animate([{ opacity: n }, { opacity: o ? 1 : 0 }], {
                duration: st.fade,
                easing: "ease-in-out",
                fill: "forwards",
              })),
              o || C.finished.then(H, () => {});
          },
          I = () => {
            s(),
              !(!r || r.hasAttribute(j)) &&
                (r?.matches(":focus-visible") ||
                  r?.matches(":hover") ||
                  i.matches(":hover") ||
                  (b = window.setTimeout(() => $(!1), st.grace)));
          },
          Y = (o) => {
            const n = [];
            for (const w of o.getClientRects()) {
              if (!w.width || !w.height) continue;
              const m = n.find(
                (V) =>
                  Math.min(V.bottom, w.bottom) - Math.max(V.top, w.top) > Math.min(V.height, w.height) / 2,
              );
              if (!m) {
                n.push(DOMRect.fromRect(w));
                continue;
              }
              const O = Math.min(m.left, w.left),
                q = Math.min(m.top, w.top);
              (m.width = Math.max(m.right, w.right) - O),
                (m.height = Math.max(m.bottom, w.bottom) - q),
                (m.x = O),
                (m.y = q);
            }
            return n;
          },
          X = (o, n) => {
            const w = W.find((m) => n >= m.top - 2 && n <= m.bottom + 2) ?? W[0];
            w &&
              ((d.x = Math.min(Math.max(o, w.left), w.right)),
              (d.y = w.top),
              (d.height = w.height),
              (L = o),
              (N = n));
          },
          x = () => {
            const o = d.y - i.offsetHeight - 8 < (e.props.topInset ?? 0) ? "bottom" : "top";
            F !== o && (B(), (F = o), (B = Qt(i, d, { placement: F, offset: 8 })));
          },
          et = (o) => {
            if (!r?.isConnected) return H();
            W = o ?? Y(r);
            const n = W[0];
            if (!n) return H();
            X(g ? n.left + n.width / 2 : L, g ? n.top : N), x();
          },
          Et = (o) => {
            const n = o.target ?? window,
              w =
                n instanceof Element
                  ? { left: n.scrollLeft, top: n.scrollTop }
                  : { left: window.scrollX, top: window.scrollY },
              m = E.get(n);
            if ((E.set(n, w), !r || _ !== M || A !== void 0 || (m?.left === w.left && m.top === w.top)))
              return;
            const O = M;
            A = Z(() => {
              if (O !== M || !r) {
                A = void 0;
                return;
              }
              A = Z(() => {
                if (((A = void 0), O !== M || !r)) return;
                const q = Y(r),
                  V = q[0];
                if (!(V?.top === W[0]?.top && V?.left === W[0]?.left)) {
                  if (!g) return H();
                  (i.dataset.motion = "snap"), et(q);
                }
              });
            });
          },
          Ct = () => {
            if (!g) return H();
            h.forEach((o) => o.cancel()), (l.style.width = `${f.offsetWidth}px`), et();
          },
          it = async (o, n, w, m) => {
            s(), K();
            const O = !i.matches(":popover-open"),
              q = o.dataset.linkTooltip ?? "",
              V = !O && (r !== o || p !== q),
              lt = ++M;
            (r = o), (g = m), i.toggleAttribute("data-pinned", o.hasAttribute(j));
            const ht = { left: window.scrollX, top: window.scrollY };
            if (
              ((E = new WeakMap()),
              E.set(window, ht),
              E.set(document, ht),
              (W = Y(o)),
              X(n, w),
              (i.dataset.motion = V ? "morph" : O ? "snap" : "follow"),
              !T)
            ) {
              T = new AbortController();
              const S = { signal: T.signal, passive: !0 };
              a.addEventListener("pointermove", Lt, S),
                a.addEventListener("pointerout", Ot, S),
                a.addEventListener("focusout", I, S),
                a.addEventListener("pointerdown", at, S),
                a.addEventListener("click", at, S),
                document.addEventListener("keydown", Tt, { signal: T.signal }),
                window.addEventListener("scroll", Et, { ...S, capture: !0 }),
                window.addEventListener("resize", Ct, S);
            }
            const Yt = l.offsetWidth,
              Xt = l.offsetHeight;
            if (
              (h.forEach((S) => S.cancel()),
              (h = []),
              (v = p),
              (p = q),
              (await e.update()).aborted || lt !== M)
            )
              return;
            O && i.showPopover(), (l.style.width = `${f.offsetWidth}px`);
            const kt = u.offsetHeight;
            if (V && !y.matches) {
              const S = { duration: st.content, easing: "ease" };
              h = [
                l.animate(
                  [
                    { width: `${Yt}px`, height: `${Xt}px` },
                    { width: `${f.offsetWidth}px`, height: `${kt}px` },
                  ],
                  S,
                ),
                u.animate([{ opacity: 0 }, { opacity: 1 }], S),
                c.animate([{ opacity: 1 }, { opacity: 0 }], S),
              ];
            }
            x(),
              $(!0),
              (k = Z(() => {
                k = Z(() => {
                  (k = void 0), lt === M && (_ = lt);
                });
              }));
          },
          ft = (o) => {
            const n = Y(o)[0];
            n && it(o, n.left + n.width / 2, n.top, !0);
          },
          Ht = () => {
            r &&
              (r.dataset.linkTooltip &&
              (r.hasAttribute(j) || r.matches(":focus-visible") || (P.matches && r.matches(":hover")))
                ? it(r, L, N, g)
                : $(!1));
          };
        function St(o) {
          if (o.pointerType === "touch") return;
          const n = z(o.target);
          !n || n.contains(o.relatedTarget) || it(n, o.clientX, o.clientY, !1);
        }
        function Lt(o) {
          o.pointerType === "touch" ||
            !r ||
            z(o.target) !== r ||
            (o.clientX === L && o.clientY === N) ||
            ((g = !1), (i.dataset.motion = "follow"), X(o.clientX, o.clientY));
        }
        function Ot(o) {
          z(o.target) !== r ||
            r?.contains(o.relatedTarget) ||
            (r?.matches(":focus-visible") && ((g = !0), et()), I());
        }
        function At(o) {
          const n = z(o.target);
          n?.matches(":focus-visible") && ft(n);
        }
        function at(o) {
          const n = z(o.target);
          n && !n.hasAttribute(j) && H();
        }
        function Tt(o) {
          o.key === "Escape" && (o.preventDefault(), H());
        }
        const ot = (o) => {
          o.matches(tt) && o.removeAttribute("title"),
            o.querySelectorAll(tt).forEach((n) => n.removeAttribute("title"));
        };
        ot(a);
        const ct = new MutationObserver((o) => {
          let n = null,
            w = !1;
          for (const m of o) {
            if (m.type === "attributes" && m.target instanceof Element) {
              if ((ot(m.target), m.attributeName === "title")) continue;
              m.attributeName === j && m.target.hasAttribute(j) && (n = z(m.target)),
                m.target === r && (w = !0);
            }
            for (const O of m.addedNodes) O instanceof Element && ot(O);
          }
          r && !r.isConnected ? H() : n ? ft(n) : w && Ht();
        });
        ct.observe(a, {
          childList: !0,
          subtree: !0,
          attributes: !0,
          attributeFilter: ["title", "data-link-tooltip", j],
        });
        const Q = { signal: e.signal, passive: !0 };
        a.addEventListener("pointerover", St, Q),
          a.addEventListener("focusin", At, Q),
          i.addEventListener(
            "pointerenter",
            () => {
              s(), r && $(!0);
            },
            Q,
          ),
          i.addEventListener("pointerleave", I, Q),
          y.addEventListener("change", () => h.forEach((o) => o.finish()), Q),
          e.signal.addEventListener(
            "abort",
            () => {
              H(),
                ct.disconnect(),
                a.querySelectorAll(tt).forEach((o) => {
                  o.title = o.dataset.linkTooltip ?? "";
                });
            },
            { once: !0 },
          );
      }),
      () =>
        G("span", {
          popover: "manual",
          "aria-hidden": "true",
          class: "shared-tooltip",
          mix: U((a) => (i = a)),
          children: G("span", {
            class: "shared-tooltip__bubble",
            children: [
              G("span", {
                class: "shared-tooltip__track",
                mix: U((a) => (l = a)),
                children: [
                  G("span", { class: "block", mix: U((a) => (u = a)), children: p }),
                  G("span", {
                    class: "pointer-events-none absolute inset-0 block select-none opacity-0",
                    mix: U((a) => (c = a)),
                    children: v,
                  }),
                ],
              }),
              G("span", { class: "shared-tooltip__measure", mix: U((a) => (f = a)), children: p }),
            ],
          }),
        })
    );
  });
export { oe as SharedTooltip };
