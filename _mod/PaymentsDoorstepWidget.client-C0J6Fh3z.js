import { w as De, C as Fe } from "./canvas-RLtP6qLT.js";
import { w as Ne } from "./runtime-CljIenoa.js";
import { g as Be, f as Pe } from "./formatCopy-Cs7MVtfe.js";
import "./constants-Dvx39Bnh.js";
import "./fontFamily-DUpol7iY.js";
import "./frameLoop-CeLX9Qef.js";
import "./residentSections-BEssGc_p.js";
import "./colorPalette-VQpnhwit.js";
import "./locale-DXEWuBc6.js";
const We =
    "https://cdn.shopify.com/s/files/1/0762/1885/9705/files/courier-delivery.png?v=1792794334&width=2000",
  Se = { w: 2501, h: 506 },
  we = 0.39,
  Ue = 253,
  $e = 0.716,
  Ye = [
    { x: 4, y: 4, w: 102, h: 244, ax: 41.9, ay: 241.2 },
    { x: 114, y: 4, w: 98, h: 243, ax: 39.9, ay: 240.2 },
    { x: 220, y: 4, w: 99, h: 238, ax: 36.9, ay: 235.2 },
    { x: 327, y: 4, w: 117, h: 234, ax: 37.9, ay: 231.2 },
    { x: 452, y: 4, w: 111, h: 240, ax: 47.9, ay: 237.2 },
    { x: 571, y: 4, w: 99, h: 237, ax: 40.9, ay: 234.2 },
    { x: 678, y: 4, w: 98, h: 242, ax: 37.9, ay: 239.2 },
    { x: 784, y: 4, w: 98, h: 238, ax: 36.9, ay: 235.2 },
  ],
  ke = [
    { x: 890, y: 4, w: 109, h: 244, ax: 36.9, ay: 241.2 },
    { x: 1007, y: 4, w: 75, h: 243, ax: 18.9, ay: 240.2 },
    { x: 1090, y: 4, w: 84, h: 238, ax: 21.9, ay: 235.2 },
    { x: 1182, y: 4, w: 117, h: 234, ax: 37.9, ay: 231.2 },
    { x: 1307, y: 4, w: 91, h: 240, ax: 27.9, ay: 237.2 },
    { x: 1406, y: 4, w: 79, h: 237, ax: 20.9, ay: 234.2 },
    { x: 1493, y: 4, w: 107, h: 242, ax: 33.9, ay: 239.2 },
    { x: 1608, y: 4, w: 119, h: 238, ax: 38.9, ay: 235.2 },
  ],
  G = {
    hold: { x: 1735, y: 4, w: 96, h: 244, ax: 76, ay: 242 },
    bend: { x: 1839, y: 4, w: 119, h: 212, ax: 107, ay: 210 },
    place: { x: 1966, y: 4, w: 120, h: 168, ax: 102, ay: 166 },
    crouch: { x: 2094, y: 4, w: 107, h: 179, ax: 91, ay: 177 },
    stand: { x: 2209, y: 4, w: 78, h: 245, ax: 60, ay: 243 },
    photo: { x: 2295, y: 4, w: 91, h: 242, ax: 78, ay: 240 },
  },
  He = { x: 2394, y: 4, w: 99, h: 96, ax: 49.8, ay: 94 },
  be = {
    description:
      "A product-not-received dispute: the customer says it never arrived. Back at the delivery, the courier carries the parcel to the door, sets it on the mat and takes the photo. That proof of delivery attaches itself to the dispute, which is resolved in the merchant’s favor.",
    claimFirstLine: "“It never",
    claimSecondLine: " arrived.”",
    claim: "“It never arrived.”",
    when: "Tuesday, 2:04 PM",
    deliveredStamp: " · Delivered",
    dispute: "Dispute · Order #{order}",
    photo: "Photo at the door",
    photoTime: "Tue 2:04 PM",
    automatic: "Added automatically",
    needsResponse: "Needs response",
    resolved: "Resolved in your favor",
    replay: "Replay",
  },
  Ke = "1042",
  Xe = 1.4;
function qe(s, T = "en") {
  const x = { ...be, ...s },
    P = new Intl.NumberFormat(Be(T), { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(Xe),
    D = s?.deliveredStamp ?? (s?.delivered ? ` · ${s.delivered.split(" · ")[0]}` : x.deliveredStamp);
  return {
    ...x,
    description: Pe(x.description, { rate: P }),
    deliveredStamp: D,
    dispute: Pe(x.dispute, { order: Ke }),
  };
}
const E = "#fff",
  B = (s) => `300 ${s}px ${Fe}`,
  Ee = 5.5,
  b = 153,
  c = { x: 26, y: 42, w: 44, h: b - 42 },
  C = 86,
  ge = { x: C - 25.5, y: b },
  le = { x: c.x - 5, w: c.w + 16, h: 2.5 },
  v = { x: 16, y: 32, w: 72, h: b + 4 - 32 },
  ye = { x: ge.x - 29, y: b - 48, w: 56 },
  H = { x: 100, y: 8, w: 152, h: b - 8 },
  M = { x: 8, y: 4, w: 63, h: 29, pad: 6, px: 9 },
  ze = 77,
  Ge = ze - 1 - M.x,
  ve = (b - H.y) / (b - c.y),
  Me = 10 - c.x * ve,
  S = { x: H.x + 8, y: H.y + 48, w: 52, h: 52 },
  ie = { x: S.x + S.w + 7, wrap: 45, end: H.x + H.w - 6 },
  Je = 240 * we,
  J = { x0: 290, x1: C - 16.7, t: [0.42, 1.85] },
  j = { x0: C + 2, x1: C + 39, t: [2.84, 3.24] },
  je = C + 38,
  q = { x0: C + 40, x1: 300, t: [3.86, 4.95] },
  a = {
    claimOut: 0.35,
    hold: 1.85,
    bend: 2.02,
    place: 2.24,
    crouch: 2.52,
    stand: 2.7,
    photo: 3.24,
    scan: 3.36,
    card: 4.48,
    fly: [4.68, 5.28],
    proof: 5.32,
    resolved: 5.92,
    end: 6.7,
  },
  Ve = 1.5,
  Qe = (s, T = 0, x = 1) => Math.min(x, Math.max(T, s)),
  k = (s, T, x) => s + (T - s) * x,
  V = (s) => 1 - (1 - s) ** 3,
  ue = (s) => (s < 0.5 ? 4 * s ** 3 : 1 - (-2 * s + 2) ** 3 / 2),
  O = (s, T, x) => Qe((s - T) / (x - T)),
  fe = (s) => {
    const P = 1.2987012987012987;
    if (s < 0.18) return (P * s * s) / (2 * 0.18);
    if (s < 1 - 0.28) return P * (0.18 / 2 + (s - 0.18));
    const D = 1 - s;
    return 1 - (P * D * D) / (2 * 0.28);
  },
  me = (s, T) => s[Math.floor((T / Je) * s.length) % s.length],
  rt = (s, T) => {
    const x = qe(T?.strings, T?.locale),
      P = Ne(s),
      { signal: D } = P,
      Ae = s.ownerDocument,
      Ce = () => se.wake(),
      { ctx: e, size: Le } = De(s, { signal: D, invalidate: Ce, fonts: [B(9)] });
    e.canvas.removeAttribute("aria-hidden"),
      e.canvas.setAttribute("role", "img"),
      e.canvas.setAttribute("aria-label", x.description);
    const W = Ae.createElement("button");
    (W.type = "button"),
      (W.className =
        "group absolute inset-0 block cursor-pointer bg-transparent focus-visible:outline focus-visible:-outline-offset-2 focus-visible:outline-current aria-disabled:cursor-default"),
      W.setAttribute("aria-disabled", "true");
    const re = Ae.createElement("span");
    (re.className =
      "absolute right-6 bottom-4 font-mono text-mono-sm opacity-0 group-focus-visible:opacity-100 group-focus-visible:group-aria-disabled:opacity-40"),
      (re.textContent = x.replay),
      W.append(re),
      s.append(W);
    let L;
    const U = new Image();
    (U.crossOrigin = "anonymous"),
      (U.src = We),
      U.decode().then(
        () => {
          D.aborted || ((L = { x: U.naturalWidth / Se.w, y: U.naturalHeight / Se.h }), se.wake());
        },
        () => {},
      ),
      D.addEventListener("abort", () => U.removeAttribute("src"), { once: !0 });
    let n = P.state.reducedMotion ? a.end : 0,
      Q = !1,
      $ = -1,
      ce = !1;
    const Y = (t, l, h, y, o = 1, d = "left") => {
        (e.font = B(y)), (e.textAlign = d), (e.textBaseline = "alphabetic");
        const p = e.measureText(t).width;
        return (
          o <= 0 || ((e.globalAlpha = o), (e.fillStyle = E), e.fillText(t, l, h), (e.globalAlpha = 1)), p
        );
      },
      ne = (t, l, h) => {
        const y = (d) => e.measureText(d).width <= h + 0.5;
        let o = l;
        e.font = B(o);
        for (let d = 0; d < 3 && o > Ee && !t.every(y); d++) {
          const p = Math.min(...t.map((F) => h / e.measureText(F).width));
          (o = Math.max(Ee, o * Math.min(p, 0.99))), (e.font = B(o));
        }
        return {
          px: o,
          lines: t.map((d) => {
            if (y(d)) return d;
            let p = d;
            for (; p && !y(`${p}…`); ) p = p.slice(0, -1);
            return `${p.trimEnd()}…`;
          }),
        };
      },
      Te = (t, l, h, y, o, d = 1) => {
        const p = ne([t], y, o);
        return Y(p.lines[0], l, h, p.px, d);
      },
      Ie = (t, l, h, y, o = 1) => {
        e.save(), (e.globalCompositeOperation = "destination-out"), Y(t, l, h, y, o), e.restore();
      },
      he = (t, l = 1) => {
        e.save(),
          (e.globalCompositeOperation = "destination-out"),
          (e.globalAlpha = l),
          e.beginPath(),
          t(),
          e.fill(),
          e.restore();
      },
      de = (t, l, h, y, o = !0) => {
        e.font = B(7.5);
        const d = t.split(" ");
        let p = d.shift() ?? "";
        for (; d.length && (!o || e.measureText(`${p} ${d[0]}`).width <= ie.wrap); ) p += ` ${d.shift()}`;
        (d.length ? [p, d.join(" ")] : [p]).forEach((Z, K) => {
          Te(Z, ie.x, l + K * h, 7.5, ie.end - ie.x, y);
        });
      },
      I = (t, l, h, y, o = !1, d = we) => {
        !L ||
          y <= 0 ||
          (e.save(),
          (e.globalAlpha = y),
          e.translate(l, h),
          e.scale((o ? -1 : 1) * d, d),
          (e.globalCompositeOperation = "destination-out"),
          e.drawImage(U, t.x * L.x, (t.y + Ue) * L.y, t.w * L.x, t.h * L.y, -t.ax, -t.ay, t.w, t.h),
          (e.globalCompositeOperation = "source-over"),
          e.drawImage(U, t.x * L.x, t.y * L.y, t.w * L.x, t.h * L.y, -t.ax, -t.ay, t.w, t.h),
          e.restore());
      },
      Re = (t, l, h, y, o = 1, d = 252) => {
        e.save(),
          e.translate(t, l),
          e.scale(h, h),
          (e.strokeStyle = E),
          (e.fillStyle = E),
          (e.lineWidth = 0.75 / h),
          (e.lineJoin = "round"),
          (e.globalAlpha = o * 0.4),
          e.beginPath(),
          e.moveTo(4, b + 0.5),
          e.lineTo(d, b + 0.5),
          e.stroke(),
          (e.globalAlpha = o * 0.85),
          e.beginPath(),
          e.roundRect(c.x + 0.5, c.y + 0.5, c.w, c.h, [2.5, 2.5, 0, 0]),
          e.stroke(),
          (e.globalAlpha = o * 0.12),
          e.beginPath(),
          e.roundRect(c.x + 3, c.y + 3, c.w - 5, c.h - 3, [1.5, 1.5, 0, 0]),
          e.fill(),
          (e.globalAlpha = o * 0.5),
          e.beginPath(),
          e.roundRect(c.x + 8.5, c.y + 10.5, c.w - 16, 32, 1.5),
          e.roundRect(c.x + 8.5, c.y + 50.5, c.w - 16, c.h - 64, 1.5),
          e.stroke(),
          (e.globalAlpha = o * 0.9),
          e.beginPath(),
          e.arc(c.x + c.w - 6, c.y + c.h * 0.55, 1.2, 0, Math.PI * 2),
          e.fill(),
          (e.globalAlpha = o * 0.75),
          (e.font = B(7)),
          (e.textAlign = "center"),
          e.fillText("14", c.x + c.w + 8.5, c.y + 38),
          (e.globalAlpha = o * 0.6),
          e.beginPath(),
          e.roundRect(c.x + c.w + 6.5, c.y + 22.5, 4, 6, 1),
          e.stroke(),
          (e.globalAlpha = o * 0.35),
          e.beginPath(),
          e.roundRect(le.x, b - le.h + 0.5, le.w, le.h, 1),
          e.fill(),
          e.restore(),
          y && (e.save(), e.translate(t, l), e.scale(h, h), I(He, ge.x, ge.y, o, !1, we * $e), e.restore());
      },
      Oe = (t, l, h, y, o, d = 6) => {
        (e.globalAlpha = o), (e.strokeStyle = E), (e.lineWidth = 1), e.beginPath();
        for (const [p, F, Z, K] of [
          [t, l, 1, 1],
          [t + h, l, -1, 1],
          [t, l + y, 1, -1],
          [t + h, l + y, -1, -1],
        ])
          e.moveTo(p + Z * d, F), e.lineTo(p, F), e.lineTo(p, F + K * d);
        e.stroke(), (e.globalAlpha = 1);
      },
      _e = (t) => {
        const l = Le(),
          h = Math.min(l.w / 258, l.h / 163);
        e.setTransform(l.dpr * h, 0, 0, l.dpr * h, 0, 0),
          e.clearRect(0, 0, l.w / h, l.h / h),
          (e.lineCap = "round");
        const y = O(n, a.scan, a.scan + 0.3),
          o = ue(O(n, a.fly[0], a.fly[1])),
          d = n >= a.crouch,
          p = ue(O(n, a.fly[1], a.fly[1] + 0.7)),
          F = k(1, ve, p),
          Z = n < a.card ? 252 : k(H.x - 6, (H.x - 8 - Me) / ve, p);
        if ((Re(k(0, Me, p), b * (1 - F), F, d, 1 - 0.42 * p, Z), n > J.t[0] && n < q.t[1]))
          if (n < a.hold) {
            const r = O(n, J.t[0], J.t[1]),
              i = fe(r) * (J.x0 - J.x1);
            I(me(Ye, i), J.x0 - i, b, 1);
          } else if (n < a.bend) I(G.hold, C, b, 1);
          else if (n < a.place) I(G.bend, C, b, 1);
          else if (n < a.crouch) I(G.place, C, b, 1);
          else if (n < a.stand) I(G.crouch, C, b, 1);
          else if (n < j.t[0]) I(G.stand, C, b, 1);
          else if (n < a.photo) {
            const r = O(n, j.t[0], j.t[1]),
              i = fe(r) * (j.x1 - j.x0);
            I(me(ke, i), j.x0 + i, b, 1, !0);
          } else if (n < q.t[0]) I(G.photo, je, b, 1);
          else {
            const r = O(n, q.t[0], q.t[1]),
              i = fe(r) * (q.x1 - q.x0);
            I(me(ke, i), q.x0 + i, b, 1, !0);
          }
        if (y > 0 && o < 1) {
          const r = 1 + (1 - V(y)) * 0.18,
            i = v.x + v.w / 2 - (v.w * r) / 2,
            u = v.y + v.h / 2 - (v.h * r) / 2,
            g = Math.max(0, 1 - (n - a.scan) / 0.35);
          g > 0 &&
            ((e.globalAlpha = 0.22 * g),
            (e.fillStyle = E),
            e.fillRect(v.x, v.y, v.w, v.h),
            (e.globalAlpha = 1)),
            o <= 0 && Oe(i, u, v.w * r, v.h * r, V(y));
        }
        const K = O(n, a.claimOut + 0.3, a.claimOut + 0.6) * (1 - O(n, a.card, a.card + 0.3));
        if (K > 0) {
          const r = Y(x.when, 6, 12, 8, 0.85 * K),
            i = O(n, a.scan + 0.2, a.scan + 0.45);
          i > 0 && Y(x.deliveredStamp, 6 + r, 12 - (1 - V(i)) * 3, 8, 0.85 * K * i);
        }
        const ee = 1 - O(n, a.claimOut, a.claimOut + 0.3);
        if (ee > 0) {
          e.font = B(M.px);
          const r = (oe) => Math.max(...oe.map((X) => e.measureText(X).width)),
            i = M.w - M.pad - r([be.claimFirstLine, be.claimSecondLine]),
            u = ne([x.claimFirstLine, x.claimSecondLine], M.px, Ge - M.pad - i);
          e.font = B(u.px);
          const g = Math.max(M.w, M.pad + r(u.lines) + i),
            { x: m, y: f, h: R } = M,
            w = 3,
            _ = c.x + c.w / 2,
            te = () => {
              e.moveTo(m + w, f),
                e.lineTo(m + g - w, f),
                e.arcTo(m + g, f, m + g, f + w, w),
                e.lineTo(m + g, f + R - w),
                e.arcTo(m + g, f + R, m + g - w, f + R, w),
                e.lineTo(_ + 4, f + R),
                e.lineTo(_, f + R + 5),
                e.lineTo(_ - 4, f + R),
                e.lineTo(m + w, f + R),
                e.arcTo(m, f + R, m, f + R - w, w),
                e.lineTo(m, f + w),
                e.arcTo(m, f, m + w, f, w),
                e.closePath();
            };
          he(te, ee),
            e.save(),
            e.translate(0.5, 0.5),
            (e.globalAlpha = 0.85 * ee),
            (e.strokeStyle = E),
            (e.lineWidth = 0.75),
            (e.lineJoin = "round"),
            e.beginPath(),
            te(),
            e.stroke(),
            e.restore(),
            (e.globalAlpha = 1),
            Y(u.lines[0], m + M.pad, f + 12.5, u.px, ee),
            Y(u.lines[1], m + M.pad, f + 23.5, u.px, ee);
        }
        const A = V(O(n, a.card, a.card + 0.4)),
          z = O(n, a.resolved, a.resolved + 0.3);
        if (A > 0) {
          const { x: r, y: i, w: u, h: g } = H;
          e.save(),
            e.translate(0, (1 - A) * 5),
            he(() => e.roundRect(r, i, u, g, 3), A),
            (e.globalAlpha = 0.07 * A),
            (e.fillStyle = E),
            e.beginPath(),
            e.roundRect(r, i, u, g, 3),
            e.fill(),
            (e.globalAlpha = 0.45 * A),
            (e.strokeStyle = E),
            (e.lineWidth = 0.75),
            e.beginPath(),
            e.roundRect(r + 0.5, i + 0.5, u - 1, g - 1, 3),
            e.stroke(),
            (e.globalAlpha = 1),
            Te(x.dispute, r + 8, i + 14, 7, u - 16, 0.65 * A);
          const m = ne([x.claim], 11, u - 14),
            f = Y(m.lines[0], r + 7, i + 32, m.px, A * (1 - 0.5 * z)),
            R = V(O(n, a.resolved - 0.15, a.resolved + 0.2));
          if (R > 0) {
            const N = i + 32 - 3.5 * (m.px / 11);
            (e.globalAlpha = 0.9 * A),
              e.beginPath(),
              e.moveTo(r + 7, N),
              e.lineTo(r + 7 + f * R, N),
              e.stroke(),
              (e.globalAlpha = 1);
          }
          (e.globalAlpha = 0.3 * A),
            e.beginPath(),
            e.moveTo(r + 8, i + 40.5),
            e.lineTo(r + u - 8, i + 40.5),
            e.stroke(),
            (e.globalAlpha = 1),
            (e.globalAlpha = 0.3 * A * (1 - o)),
            e.setLineDash([1.5, 2]),
            e.beginPath(),
            e.roundRect(S.x + 0.5, S.y + 0.5, S.w, S.h, 1.5),
            e.stroke(),
            e.setLineDash([]),
            (e.globalAlpha = 1);
          const w = O(n, a.proof, a.proof + 0.35);
          de(x.photo, S.y + 9, 10, A * w),
            de(x.photoTime, S.y + 31, 10, 0.75 * A * w, !1),
            de(x.automatic, S.y + 43, 9, 0.6 * A * w);
          const _ = ne([x.needsResponse, x.resolved], 7, u - 26),
            te = _.lines[z > 0.5 ? 1 : 0];
          e.font = B(_.px);
          const oe = k(e.measureText(_.lines[0]).width, e.measureText(_.lines[1]).width, ue(z)) + 10,
            X = r + 8,
            ae = i + g - 22;
          (e.globalAlpha = A),
            e.beginPath(),
            e.roundRect(X + 0.5, ae + 0.5, oe - 1, 10, 2),
            e.stroke(),
            z > 0 &&
              ((e.globalAlpha = A * z),
              (e.fillStyle = E),
              e.beginPath(),
              e.roundRect(X, ae, oe, 11, 2),
              e.fill()),
            (e.globalAlpha = 1),
            z > 0.5 ? Ie(te, X + 5, ae + 7.8, _.px, A) : Y(te, X + 5, ae + 7.8, _.px, 0.85 * A);
          const xe = n - a.resolved;
          if (xe > 0 && xe < 0.8 && !t) {
            const N = V(xe / 0.8);
            (e.globalAlpha = 0.6 * (1 - N) ** 1.5),
              (e.strokeStyle = E),
              e.beginPath(),
              e.roundRect(X - N * 7, ae - N * 5, oe + N * 14, 11 + N * 10, 2 + N * 2),
              e.stroke(),
              (e.globalAlpha = 1);
          }
          e.restore();
        }
        if (o > 0) {
          const r = k(v.x, S.x, o),
            i = k(v.y, S.y, o),
            u = k(v.w, S.w, o),
            g = k(v.h, S.h, o),
            m = k(v.x, ye.x, o),
            f = k(v.y, ye.y, o),
            R = k(v.w, ye.w, o),
            w = u / R;
          e.save(),
            e.beginPath(),
            e.roundRect(r, i, u, g, 1.5 * o),
            e.clip(),
            he(() => e.rect(r, i, u, g)),
            Re(r - m * w, i - f * w, w, !0),
            e.restore(),
            (e.globalAlpha = 0.85),
            (e.strokeStyle = E),
            (e.lineWidth = 0.75),
            e.beginPath(),
            e.roundRect(r + 0.5, i + 0.5, u, g, 1.5 * o),
            e.stroke(),
            o < 1 && Oe(r, i, u, g, 1 - o, k(6, 3, o)),
            (e.globalAlpha = 1);
        }
      },
      se = P.loop((t) => {
        const l = P.state.reducedMotion;
        l
          ? (n = a.end)
          : Q
            ? (n = Math.min(a.end, n + t))
            : $ >= 0 && (($ += t), $ > Ve && ((n = 0), ($ = -1))),
          _e(l);
        const h = !l && n >= a.end;
        return (
          h !== ce && ((ce = h), W.setAttribute("aria-disabled", String(!h))), l ? !1 : Q ? n < a.end : $ >= 0
        );
      });
    let pe = P.state.reducedMotion;
    return (
      P.watch((t) => {
        t.reducedMotion !== pe && ((pe = t.reducedMotion), pe || ((n = 0), ($ = -1))),
          t.revealed !== Q && ((Q = t.revealed), ($ = !Q && n >= a.end ? 0 : -1)),
          se.wake();
      }),
      W.addEventListener(
        "click",
        () => {
          ce && ((n = 0), ($ = -1), se.wake());
        },
        { signal: D },
      ),
      () => {
        P.dispose(), W.remove();
      }
    );
  };
export { rt as mount };
