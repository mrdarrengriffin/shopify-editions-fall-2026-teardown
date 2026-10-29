import { c as $ } from "./clsx-B-dksMZM.js";
import { Button as G } from "./Button---CvFgJi.js";
import { a as B, L as E, b as x, c as N, s as K, d as I, e as D, f as O } from "./label-geometry-bLZ-6wUC.js";
import { r as H } from "./ref-mixin-D6m2Cu20.js";
import { F as P } from "./component-BWKvSpCv.js";
import { o as w } from "./on-mixin-Ci1jclOX.js";
import { j as u } from "./jsx-CLqwgotn.js";
const j =
    "[--f26-section-button-foreground:var(--color-black)] [--f26-section-button:var(--f26-color-section-slate-button)]",
  X = 4;
function q(e, a, l, f) {
  if ((e.side === "left" || e.side === "right" || e.side === "above") && !e.detail && !e.plain)
    return { ...K(e.x, e.y, e.radius, e.side, a, l), displaced: !1 };
  const g = a.width - x * 2,
    v = a.height - N * 2,
    L = e.x + e.radius + I + x,
    p = e.x - e.radius - I - x - g,
    k =
      e.side === "above" || e.side === "center"
        ? [e.x - g / 2]
        : e.side
          ? [e.side === "left" ? p : L]
          : e.x > l.left + l.width / 2
            ? [p, L]
            : [L, p],
    i = l.left + E + x,
    s = l.left + l.width - E - x - g,
    r = l.top + E + N,
    t = l.top + l.height - E - N - v,
    n = (h, b, m) => (e.plain ? h : Math.max(b, Math.min(m, h)));
  let o;
  for (const h of e.side ? [0] : [0, -1, 1, -2, 2, -3, 3, -4, 4]) {
    const b =
      (e.side === "above"
        ? e.y - e.radius - D - v
        : e.detail || e.side === "center"
          ? e.y - v / 2
          : e.y - (a.lineHeight ?? B) / 2 - (e.plain ? 0 : O)) +
      h * (a.height + 4);
    for (const m of k) {
      const d = {
        left: n(m, i, s) - x,
        top: n(b, r, t) - N,
        width: a.width,
        height: a.height,
        displaced: o !== void 0,
      };
      if (
        ((o ??= d),
        !f.some(
          (y) =>
            d.left < y.left + y.width + 4 &&
            d.left + d.width + 4 > y.left &&
            d.top < y.top + y.height + 4 &&
            d.top + d.height + 4 > y.top,
        ))
      )
        return d;
    }
  }
  return o;
}
function U(e, a, l) {
  if (!a || e.style.width) return;
  const f = document.createRange();
  f.selectNodeContents(a);
  const g = new Map();
  for (const p of f.getClientRects()) {
    if (!p.width) continue;
    const k = Math.round(p.top),
      i = g.get(k);
    i
      ? ((i.left = Math.min(i.left, p.left)), (i.right = Math.max(i.right, p.right)))
      : g.set(k, { left: p.left, right: p.right });
  }
  if (g.size < 2) return;
  const v = Math.max(...[...g.values()].map(({ left: p, right: k }) => k - p)),
    L = Math.ceil(v) + x * 2;
  return L < l - 1 ? L : void 0;
}
function _(e, a) {
  (a.style.width = ""), (e.fit = void 0);
}
function it(e) {
  const a = new Map(),
    l = new WeakMap();
  let f,
    g = 0;
  function v(i) {
    const s = a.get(i);
    if (s) return s;
    const r = {
      width: 0,
      height: 0,
      maxWidth: 0,
      generation: 0,
      hidden: !0,
      mode: "overview",
      caption: !1,
      truncated: !1,
      emphasized: !1,
      size: "",
      lineHeight: B,
      elementRef: H((t, n) => {
        (r.element = t),
          (t.style.visibility = "hidden"),
          (r.hidden = !0),
          (t.dataset.layout = r.mode),
          (t.inert = !0),
          l.set(t, r),
          f?.observe(t),
          n.addEventListener(
            "abort",
            () => {
              f?.unobserve(t), l.delete(t), r.element === t && ((r.element = void 0), a.delete(i));
            },
            { once: !0 },
          );
      }),
      lineRef: H((t, n) => {
        (r.line = t),
          (t.style.visibility = "hidden"),
          n.addEventListener(
            "abort",
            () => {
              r.line === t && (r.line = void 0);
            },
            { once: !0 },
          );
      }),
      sizerRef: H((t, n) => {
        (r.sizer = t),
          r.maxWidth && (t.style.maxWidth = `${r.maxWidth}px`),
          f?.observe(t),
          n.addEventListener(
            "abort",
            () => {
              f?.unobserve(t), r.sizer === t && (r.sizer = void 0);
            },
            { once: !0 },
          );
      }),
    };
    return a.set(i, r), r;
  }
  function L(i) {
    for (const s of i) {
      const r = s.target.dataset.titleIndex;
      if (r !== void 0) {
        const m = s.target.firstElementChild?.lastElementChild,
          d = m ? Number.parseFloat(getComputedStyle(m).lineHeight) : Number.NaN;
        e.props.onMeasureTitle?.(
          Number(r),
          s.contentRect.width,
          s.contentRect.height,
          Number.isFinite(d) ? d : B,
        );
        continue;
      }
      const t = l.get(s.target);
      if (!t) continue;
      const n = s.target.querySelector("[data-graph-index]"),
        o = U(s.target, n, s.contentRect.width);
      if (o !== void 0) {
        t.fit = o;
        continue;
      }
      (t.width = s.contentRect.width), (t.height = s.contentRect.height);
      const h = n?.lastElementChild,
        b = h ? Number.parseFloat(getComputedStyle(h).lineHeight) : Number.NaN;
      (t.lineHeight = Number.isFinite(b) ? b : B),
        n && e.props.onMeasure?.(Number(n.dataset.graphIndex), t.width, t.height, t.lineHeight);
    }
    e.props.onResize();
  }
  function p(i) {
    g++;
    const s = [],
      r = document.activeElement;
    for (const t of i.labels) {
      const n = a.get(t.id),
        o = n?.element;
      if (!n || !o) continue;
      const h = t.detail ? (t.side === "center" ? "center" : "detail") : "overview",
        b = !!t.caption;
      (n.mode !== h || n.caption !== b) &&
        ((n.mode = h),
        _(n, o),
        (n.caption = b),
        (o.dataset.layout = h),
        o.toggleAttribute("data-caption", b)),
        o.dataset.side !== (t.side ?? "") && (o.dataset.side = t.side ?? "");
      const m = Math.max(1, Math.min(t.maxWidth ?? 260, i.bounds.width - (E + x) * 2)) + x * 2;
      n.maxWidth !== m &&
        ((o.style.maxWidth = `${m}px`),
        n.sizer && (n.sizer.style.maxWidth = `${m}px`),
        _(n, o),
        (n.maxWidth = m));
      const d = o.contains(r),
        z = o.hasAttribute("data-section"),
        y = h === "overview" && !t.hovered && !d && !t.full && !z;
      n.truncated !== y && ((n.truncated = y), _(n, o), o.toggleAttribute("data-truncated", y));
      const S = !!t.emphasized;
      n.emphasized !== S && ((n.emphasized = S), o.toggleAttribute("data-emphasized", S));
      const M =
        h !== "overview"
          ? ""
          : z && !t.full
            ? t.plain || (!e.props.sectionNavigation && (t.hovered || d))
              ? "title"
              : "section"
            : t.hovered || d
              ? "hovered"
              : "related";
      n.size !== M && ((n.size = M), _(n, o), M ? (o.dataset.size = M) : delete o.dataset.size),
        n.fit !== void 0 && ((o.style.width = `${n.fit}px`), (n.fit = void 0));
      const T = d ? 1 : t.alpha,
        A = d || t.interactive,
        W = T < 0.01;
      if ((W && !t.focusable) || !n.height || (!d && n.width > m + 0.5)) continue;
      n.generation = g;
      const c = q(t, n, i.bounds, s),
        C = e.props.sectionNavigation && z && !t.plain;
      C &&
        ((c.left = Math.max(
          i.bounds.left + E,
          Math.min(i.bounds.left + i.bounds.width - E - c.width, t.x - c.width / 2),
        )),
        (c.top = Math.min(i.bounds.top + i.bounds.height - E - c.height, t.y + t.radius + X))),
        W || s.push(c),
        (o.style.transform =
          z && t.side === "left" && !C
            ? `translate(${c.left + c.width}px, ${c.top}px) translateX(-100%)`
            : `translate(${c.left}px, ${c.top}px)`),
        (o.style.opacity = String(T)),
        (o.style.backgroundColor = t.plain ? "transparent" : ""),
        (o.style.boxShadow = t.plain ? "none" : ""),
        (o.style.visibility = "visible"),
        (n.hidden = !1),
        (o.style.pointerEvents = A && !W && (e.props.pointer ?? !0) ? "auto" : "none"),
        (o.inert = !!t.plain);
      const [R, F] = o.children;
      R instanceof HTMLButtonElement
        ? (R.disabled = !A && !t.focusable)
        : R instanceof HTMLAnchorElement && (R.tabIndex = A || t.focusable ? 0 : -1),
        F instanceof HTMLAnchorElement && ((F.inert = !A), (F.style.pointerEvents = A ? "auto" : "none")),
        n.line &&
          ((n.line.style.visibility = c.displaced ? "visible" : "hidden"),
          (n.line.style.opacity = String(T * 0.35)),
          n.line.setAttribute("x1", String(t.x)),
          n.line.setAttribute("y1", String(t.y)),
          n.line.setAttribute("x2", String(Math.max(c.left + x, Math.min(c.left + c.width - x, t.x)))),
          n.line.setAttribute("y2", String(Math.max(c.top + N, Math.min(c.top + c.height - N, t.y)))));
    }
    for (const t of a.values())
      t.generation === g ||
        t.hidden ||
        !t.element ||
        (e.props.holdFocus && t.element.contains(r)) ||
        ((t.hidden = !0),
        (t.element.style.visibility = "hidden"),
        (t.element.inert = !0),
        t.line && (t.line.style.visibility = "hidden"));
  }
  const k = H((i, s) => {
    f = new ResizeObserver(L);
    for (const r of a.values()) r.element && f.observe(r.element), r.sizer && f.observe(r.sizer);
    e.props.onReady(p, s),
      s.addEventListener(
        "abort",
        () => {
          f?.disconnect(), a.clear();
        },
        { once: !0 },
      );
  });
  return () =>
    u("div", {
      class: "pointer-events-none absolute inset-0 font-mono text-graph-label font-light text-white",
      mix: k,
      children: [
        u("svg", {
          class: "absolute inset-0 h-full w-full overflow-visible",
          "aria-hidden": "true",
          children: e.props.labels.map((i) =>
            u(
              "line",
              { class: "invisible", stroke: "currentColor", "stroke-width": "0.5", mix: v(i.id).lineRef },
              i.id,
            ),
          ),
        }),
        e.props.labels.map((i, s) => {
          const r = u(P, {
              children: [
                i.caption
                  ? u("span", {
                      class: "hidden text-white/60 group-data-[caption]:block",
                      children: i.caption,
                    })
                  : null,
                u("span", {
                  class:
                    "group-data-[truncated]:block group-data-[truncated]:max-w-[24ch] group-data-[truncated]:truncate",
                  children: [
                    i.text,
                    i.count && !e.props.sectionNavigation
                      ? u("span", {
                          "aria-hidden": "true",
                          class: "ms-4 align-super text-mono-sm leading-none text-white/60",
                          children: i.count,
                        })
                      : null,
                  ],
                }),
              ],
            }),
            t = e.props.sectionNavigation && i.section,
            n = $(
              "box-border block w-full select-none whitespace-normal break-words px-4 py-4 text-left group-data-[side=left]:text-right group-data-[side=above]:text-center group-data-[side=center]:text-center focus-visible:text-graph-hover focus-visible:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
              t ? "min-h-24 touch-pan-y text-sm" : "touch-none",
              e.props.explore || t
                ? "cursor-pointer"
                : i.overviewText
                  ? "group-data-[layout=overview]:cursor-default group-data-[layout=center]:hover:text-graph-hover group-data-[layout=detail]:hover:text-graph-hover group-data-[layout=center]:hover:underline group-data-[layout=detail]:hover:underline"
                  : "cursor-pointer hover:text-graph-hover hover:underline",
            );
          return u(
            "div",
            {
              "data-section": i.section ? "" : void 0,
              class:
                "group invisible absolute left-0 top-0 w-max bg-graph-background transition-colors duration-300 motion-reduce:transition-none data-[emphasized]:bg-section-blue data-[size=related]:ring-1 data-[size=related]:ring-inset data-[size=related]:ring-graph-label-stroke/10 data-[layout=center]:text-body data-[layout=detail]:text-mono data-[size=section]:bg-transparent data-[size=title]:bg-transparent data-[size=title]:text-mono-lg motion-safe:data-[size=section]:transition-[color,background-color,font-size,line-height] motion-safe:data-[size=title]:transition-[color,background-color,font-size,line-height]",
              mix: [
                v(i.id).elementRef,
                w("pointerenter", () => e.props.onHover?.(i.id)),
                w("pointerleave", () => e.props.onHover?.(void 0)),
                w("focusin", () => {
                  e.props.onFocus?.(i.id), e.props.onResize();
                }),
                w("focusout", () => {
                  e.props.onFocus?.(void 0), e.props.onResize();
                }),
              ],
              children: [
                t
                  ? u("a", {
                      href: i.href,
                      "data-rmx-document": "",
                      "data-click-disabled": "",
                      "data-graph-index": s,
                      class: n,
                      mix: [
                        w("click", (o) => {
                          o.button === 0 &&
                            (e.props.onSectionLink?.(i.id, o),
                            !(o.metaKey || o.ctrlKey || o.shiftKey || o.altKey || !e.props.onNavigate) &&
                              (o.preventDefault(), e.props.onNavigate(i.id)));
                        }),
                        w("auxclick", (o) => {
                          (o.button === 1 || o.button === 2) && e.props.onSectionLink?.(i.id, o);
                        }),
                        w("contextmenu", (o) => {
                          e.props.onSectionLink?.(i.id, o);
                        }),
                      ],
                      children: r,
                    })
                  : u("button", {
                      type: "button",
                      "data-click-disabled": "",
                      "data-graph-index": s,
                      "aria-current": e.props.current === i.id ? "true" : void 0,
                      class: n,
                      mix: [
                        w("mousedown", (o) => {
                          !e.props.explore &&
                            i.overviewText &&
                            v(i.id).mode === "overview" &&
                            o.preventDefault();
                        }),
                        w("click", (o) => {
                          (!e.props.explore &&
                            i.overviewText &&
                            o.detail !== 0 &&
                            v(i.id).mode === "overview") ||
                            e.props.onSelect(i.id, o);
                        }),
                      ],
                      children: r,
                    }),
                e.props.detailLink?.id === i.id
                  ? u(G, {
                      as: "a",
                      href: e.props.detailLink.href,
                      "aria-label": e.props.detailLink.ariaLabel,
                      className: `mx-auto mb-5 mt-4 flex ${j}`,
                      mix: w("click", (o) => {
                        o.button !== 0 ||
                          o.metaKey ||
                          o.ctrlKey ||
                          o.shiftKey ||
                          o.altKey ||
                          !e.props.onNavigate ||
                          (o.preventDefault(), e.props.onNavigate(i.id));
                      }),
                      children: e.props.detailLink.label,
                    })
                  : null,
              ],
            },
            i.id,
          );
        }),
        e.props.labels.map((i, s) =>
          i.section
            ? u(
                "div",
                {
                  "aria-hidden": "true",
                  "data-title-index": s,
                  class: "invisible absolute left-0 top-0 w-max text-mono-lg",
                  mix: v(i.id).sizerRef,
                  children: u("div", {
                    class: "box-border block whitespace-normal break-words px-4 py-4",
                    children: u("span", {
                      children: [
                        i.text,
                        i.count
                          ? u("span", {
                              class: "ms-4 align-super text-mono-sm leading-none",
                              children: i.count,
                            })
                          : null,
                      ],
                    }),
                  }),
                },
                `${i.id}:title`,
              )
            : null,
        ),
      ],
    });
}
export { it as G };
