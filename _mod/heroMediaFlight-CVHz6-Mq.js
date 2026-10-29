import { r as x, l as T, s as v } from "./easing-BhDfN7yX.js";
import {
  i as P,
  j as B,
  F as C,
  f as q,
  g as G,
  k as W,
  M as J,
  D as U,
  l as H,
} from "./build-section-frame-DWD4QmNv.js";
import { e as V, S as K } from "./journey-B8CyvxC_.js";
import { D as X } from "./constants-Dvx39Bnh.js";
import { s as z } from "./screens-Ba-bo_-7.js";
import { S as Q } from "./style-i6E2ipwK.js";
function lt(t, o) {
  let e = 1;
  for (; e < o.length && o[e].start <= t; ) e++;
  const r = [];
  for (const n of [e - 1, e]) {
    const a = o[n],
      s = o[n - 1]?.colour;
    n < 1 ||
      !a ||
      !s ||
      s.every((d, h) => d === a.colour[h]) ||
      r.push({ from: s, to: a.colour, progress: (t - a.start) / a.distance, sectionId: a.id });
  }
  return r;
}
function ht(t, o) {
  let e = o[0]?.tone;
  for (const r of o) {
    if (t < r.start) break;
    const n = x(t, r.start, r.start + r.distance);
    e = n < 0.5 ? b(e ?? r.tone, r.colour, v(n * 2)) : b(r.colour, r.tone, v(n * 2 - 1));
  }
  return e;
}
function b(t, o, e) {
  return [T(t[0], o[0], e), T(t[1], o[1], e), T(t[2], o[2], e)];
}
const L = 940;
function S(t, o) {
  return t.targets?.get(o) ?? (t.width >= L ? { x: 99, y: t.height / 2 } : { x: 84, y: t.height * 0.6 });
}
function I(t, o) {
  return (t.anchors ?? []).map((e) => ({ ...e, y: e.y - o, top: e.top === void 0 ? void 0 : e.top - o }));
}
function A(t, o) {
  return { left: 18, right: t - 24, top: 82, bottom: o * 0.78, anchorX: t * 0.22, anchorY: o * 0.5 };
}
function O(t, o, e, r, n, a) {
  const s = G(t, r, e, a);
  return n ? { ...s, scroll: o, depth: 0, turn: 0 } : { ...s, scroll: o };
}
function Z(t, o, e) {
  for (let r = 1; r < t.length; r++) {
    const n = t[r - 1],
      a = t[r],
      s = V(o, n.flowBottom, a.top, e);
    if (s.active) return { from: n, to: a, sample: s };
  }
}
function ft(t) {
  const { sections: o } = t,
    e = o[0];
  if (!e) return;
  const r = t.scrollY - t.heroBottom;
  if (r <= 0) return;
  const n = t.width >= L,
    a = (i) => (n && t.titleLands?.has(i.id) ? S(t, i.id) : void 0),
    s = (i) => {
      const m = a(i);
      return m && { ...m, hold: 1 };
    },
    d = a(e),
    h = t.titleLands?.get(e.id) ?? 0,
    f = n ? o.map((i) => ({ sectionId: i.id, layout: A(t.width, t.height) })) : void 0,
    g = {
      sectionId: e.id,
      sample: q(r, t.height, t.reduced, t.width, t.firstLead, t.runway),
      target: S(t, e.id),
      anchors: I(e, t.scrollY),
      reduced: t.reduced,
      fitLayouts: f,
      firstSectionId: e.id,
      focusAnchor: d && { ...d, hold: v(x(t.scrollY, t.heroBottom, h)) },
      landedBy: n ? Math.max(0, r + (t.firstLead ?? 0) - (t.runway ?? B(t.height)) * C.end) : void 0,
    };
  if (g.sample.open < 1) return g;
  const y = (i) => o[o.indexOf(i) - 1]?.id,
    u = n && !t.reduced,
    c = u ? Z(o, t.scrollY, t.height) : void 0;
  if (c)
    return {
      sectionId: c.from.id,
      sample: O(1 - c.sample.unfold, r, t.width, t.height, t.reduced, t.runway),
      target: S(t, c.from.id),
      anchors: I(c.from, t.scrollY),
      reduced: t.reduced,
      fitLayouts: f,
      firstSectionId: e.id,
      previousSectionId: y(c.from),
      layout: A(t.width, t.height),
      focusAnchor: c.from === e ? g.focusAnchor : s(c.from),
      journey: {
        to: c.to.id,
        layout: A(t.width, t.height),
        sample: c.sample,
        focusAnchor: a(c.to),
        target: S(t, c.to.id),
        gap: E(t, c.from, c.to),
      },
    };
  const w = (i) => {
      const m = o[o.indexOf(i) - 1];
      return u && m ? E(t, m, i) : void 0;
    },
    p = (i) => {
      const m = o[o.indexOf(i) + 1];
      return u && m ? { id: m.id, gap: E(t, i, m) } : void 0;
    };
  let l = e;
  for (const i of o) x(i.top - t.scrollY, t.height * 0.8, t.height * 0.2) > 0 && (l = i);
  return l.id === e.id
    ? { ...g, next: p(e) }
    : {
        sectionId: l.id,
        sample: O(
          P(
            l.top - t.scrollY,
            l.gridTop - t.scrollY,
            t.height,
            t.reduced,
            l.title ? l.title.top - t.scrollY + l.title.height : -1 / 0,
            t.width,
            u,
          ).dock,
          r,
          t.width,
          t.height,
          t.reduced,
          t.runway,
        ),
        target: S(t, l.id),
        anchors: I(l, t.scrollY),
        reduced: t.reduced,
        fitLayouts: f,
        firstSectionId: e.id,
        previousSectionId: y(l),
        layout: A(t.width, t.height),
        focusAnchor: s(l),
        gapAbove: w(l),
        next: p(l),
      };
}
function E(t, o, e) {
  return { fromBottom: o.flowBottom - t.scrollY, toTop: e.top - t.scrollY };
}
const $ = {
  contentAt: 0.8,
  contentShows: 0.75,
  dockedContentTop: U,
  gather: C.gather,
  end: C.end,
  menuArrived: J,
  headerHeight: X,
  journeyLands: K,
};
function D(t, o, e, r, n, a = (s) => s.getBoundingClientRect()) {
  const h = a(t),
    f = a(o),
    g = a(e),
    y = h.top - f.top,
    u = g.bottom + r - f.height,
    c = Math.min(y, n - h.height - 48),
    w = (y <= c + 1 ? g.top + r : u) + y - c - 1;
  return { arrives: Math.min(Math.max(w, 1), u), lands: Math.max(1, u + 120) };
}
function tt(
  { section: t, title: o, offset: e, height: r, runway: n },
  a = (h) => h.getBoundingClientRect(),
  s = $,
  d = D,
) {
  const h = o.closest("header") ?? o,
    f = h.closest(".section-hero-pin") ?? h,
    g = d(o, h, f, e, r, a),
    y = f.nextElementSibling,
    u = y?.firstElementChild ?? y;
  if (!u) return { header: h, pin: f, timing: g };
  const c = t.querySelector(".product-card"),
    w = (c ? a(c).top : a(t).bottom) + e,
    p = t.closest("[data-f26-page]") ?? t,
    l = parseFloat(p.style.getPropertyValue("--f26-first-lead")) || 0,
    i = parseFloat(p.style.getPropertyValue("--f26-first-delay")) || 0,
    m = a(u).top + e + l,
    N = s.contentAt * g.arrives,
    F = m - (a(f).bottom + e),
    R = m - N - r * s.contentShows,
    k = Math.round(Math.max(0, Math.min(R, F))),
    _ = w + l - k - i,
    M = Math.round(Math.max(0, n * s.end - (_ - s.dockedContentTop))),
    Y = n * (s.gather + s.menuArrived * (s.end - s.gather)) - M,
    j = a(t).top + e - i - Math.max(s.headerHeight, r * s.journeyLands);
  return {
    header: h,
    pin: f,
    timing: g,
    lead: { page: p, px: k, gather: M, delay: Math.round(Math.max(0, Y - j)) },
  };
}
function gt() {
  return `(() => {
  if (!matchMedia(${JSON.stringify(`(min-width: ${z["global-lg"]})`)}).matches) return;
  const page = document.querySelector('[data-f26-page]');
  if (!page?.querySelector('.hero-graph-layer')) return;
  const section = page.querySelector('[data-f26-page-section]');
  const title = section && document.getElementById(section.id + '-title');
  if (!section || !title) return;
  const rects = new Map();
  const readBounds = element => {
    if (!rects.has(element)) rects.set(element, element.getBoundingClientRect());
    return rects.get(element);
  };
  const offset = window.scrollY;
  const height = window.innerHeight;
  const runway = parseFloat(getComputedStyle(page).getPropertyValue('--hero-runway')) || Math.max(1, height / ${W});
  const {lead} = (${tt.toString()})({section, title, offset, height, runway}, readBounds, ${JSON.stringify($)}, ${D.toString()});
  if (!lead) return;
  page.style.setProperty('--f26-first-lead', lead.px + 'px');
  page.style.setProperty('--f26-first-gather', lead.gather + 'px');
  page.style.setProperty('--f26-first-delay', lead.delay + 'px');
})();`;
}
const et = (t) => 1 - v(x(t, 0.8, H)),
  ot = (t) => 1 - v(x(t, 0.5, 1));
function mt(t, o, e = (r) => r.getBoundingClientRect()) {
  if (!t.classList.contains("product-card")) return;
  const r = t.querySelector("[data-card-marker]"),
    n = r && e(r);
  if (!r || !n || n.width < 1 || n.height < 1) return;
  const a = [...t.querySelectorAll(".product-card-media > img")].find((h) => {
    const { width: f, height: g } = e(h);
    return f >= 1 && g >= 1;
  });
  if (!a) return;
  const s = t.dataset.graphThumbnail;
  let d = a;
  return (
    s && ((d = new Image()), (d.src = s)),
    {
      card: t,
      artwork: d,
      marker: { left: n.left, top: n.top + o, width: n.width, height: n.height },
      markerColor: getComputedStyle(r).borderTopColor,
      top: e(t).top + o,
    }
  );
}
const rt = ({ artwork: t }) => t.complete && t.naturalWidth > 0;
function ut(t, o, e) {
  const r = t && o.get(t.journey ? t.journey.to : t.sectionId);
  if (!t || !r || !rt(r.card)) return t;
  const { marker: n, artwork: a, top: s } = r.card;
  return {
    ...t,
    hero: {
      id: r.id,
      target: { ...n, top: n.top - e, radius: 0 },
      cardTop: s - e,
      aspect: a.naturalWidth / a.naturalHeight,
    },
  };
}
class yt {
  #e;
  #t;
  follow(o, e) {
    const r = o && e.get(o.sectionId);
    this.#o(o, r?.id === o?.id ? r?.card : void 0);
  }
  #o(o, e) {
    if (!o || !e || o.menu >= H) return this.release();
    this.#e !== e && this.release(), (this.#e = e);
    const { frame: r, artwork: n } = this.#t ?? this.#r(e),
      { flight: a, shrink: s } = o,
      { style: d } = r;
    (d.width = `${a.width}px`),
      (d.height = `${a.height}px`),
      (d.translate = `${a.left}px ${a.top}px`),
      (d.opacity = String(o.alpha * et(o.menu))),
      (d.outlineOffset = `${T(1, -1, s)}px`),
      (d.outlineColor = `color-mix(in srgb, ${e.markerColor} ${s * 100}%, ${Q.imageStrokeColor})`),
      (n.style.opacity = String(ot(s)));
  }
  #r({ card: o, artwork: e }) {
    const r = document.createElement("span");
    (r.className = "product-card-flight"), r.setAttribute("aria-hidden", "true");
    const n = document.createElement("img");
    return (
      (n.alt = ""),
      (n.src = e.currentSrc || e.src),
      r.append(n),
      o.append(r),
      (this.#t = { frame: r, artwork: n }),
      this.#t
    );
  }
  release() {
    this.#t?.frame.remove(), (this.#t = void 0), (this.#e = void 0);
  }
}
export { yt as H, tt as a, D as b, gt as c, ht as f, mt as m, lt as p, ft as s, ut as w };
