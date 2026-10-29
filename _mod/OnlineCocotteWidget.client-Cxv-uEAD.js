import { w as Be, a as it, C as Mt } from "./canvas-RLtP6qLT.js";
import { w as We } from "./runtime-CljIenoa.js";
import { g as De, f as It } from "./formatCopy-Cs7MVtfe.js";
import "./constants-Dvx39Bnh.js";
import "./fontFamily-DUpol7iY.js";
import "./frameLoop-CeLX9Qef.js";
import "./residentSections-BEssGc_p.js";
import "./colorPalette-VQpnhwit.js";
import "./locale-DXEWuBc6.js";
const _e = {
  description:
    "Six minutes with Canvas, as a timelapse: a whole store, Home, Products, a collection and Mobile, side by side on the board. One prompt drafts every page; then the merchant and Sidekick try things, second-guess and change them back, across every page at once, until it’s published.",
  pageHome: "Home page",
  pageProducts: "Products",
  pageCollection: "Tableware",
  pageMobile: "Mobile",
  noTheme: "No theme",
  prompt: `Bold. Warm.
Kitchen-y.`,
  sidekick: "Sidekick",
  sidekickDrafting: "Sidekick · drafting {count} pages",
  sidekickPolishing: "Sidekick · polishing {count} pages",
  sayTooBig: "too big",
  sayBigger: "bigger!",
  sayBack: "no, back",
  sayMug: "a mug?",
  sayMills: "no. the mills.",
  sayPills: "pills?",
  saySquare: "nah, square",
  sayFourAcross: "4 across?",
  sayTooBusy: "too busy",
  sayShip: "ship it",
  lineStart: "SHOP THE COLLECTION",
  lineDraft: "OBJECTS FOR YOUR COUNTER.",
  lineFinal: `OBJECTS WORTH
LEAVING ON THE COUNTER.`,
  navAppliances: "APPLIANCES",
  navTableware: "TABLEWARE",
  navTextiles: "TEXTILES",
  collectionTitle: "TABLEWARE",
  productName: "The Mills",
  addToCart: "Add to cart",
  buyWithShop: "Buy with Shop",
  specs: "Specs",
  reviews: "Reviews ★5 (422)",
  editsOne: "{count} edit",
  editsOther: "{count} edits",
  published: "Published",
};
function $e(p, m = "en") {
  const a = { ..._e, ...p },
    A = De(m),
    S = new Intl.NumberFormat(A),
    P = new Intl.PluralRules(A),
    y = S.format(4),
    k = (t) => It(P.select(t) === "one" ? a.editsOne : a.editsOther, { count: S.format(t) }),
    I = a.lineFinal.split(`
`);
  return {
    description: a.description,
    pages: [a.pageHome, a.pageProducts, a.pageCollection, a.pageMobile],
    noTheme: a.noTheme,
    prompt: a.prompt.split(`
`),
    sidekick: a.sidekick,
    sidekickDrafting: It(a.sidekickDrafting, { count: y }),
    sidekickPolishing: It(a.sidekickPolishing, { count: y }),
    say: (t) => a[t],
    line: { start: a.lineStart, draft: a.lineDraft, final: I.join(" "), break: I.length > 1 ? I[0] : "" },
    nav: { appliances: a.navAppliances, tableware: a.navTableware, textiles: a.navTextiles },
    lower: (t) => t.toLocaleLowerCase(A),
    collectionTitle: a.collectionTitle,
    productName: a.productName,
    addToCart: a.addToCart,
    buyWithShop: a.buyWithShop,
    specs: a.specs,
    reviews: a.reviews,
    edits: k,
    published: a.published,
  };
}
const R = (p, m = 0, a = 1) => Math.min(a, Math.max(m, p)),
  H = (p, m, a) => p + (m - p) * a,
  J = (p) => (p < 0.5 ? 4 * p * p * p : 1 - (-2 * p + 2) ** 3 / 2),
  he = (p) => 1 - (1 - p) ** 3,
  X = (p) => 1 + 2.9 * (p - 1) ** 3 + 1.9 * (p - 1) ** 2,
  He = (p) => p * p * (3 - 2 * p),
  gt = 360,
  tt = 21,
  ct = [22, 22.35, 22.7, 23.05],
  kt = 352,
  ot = 0.12,
  Ct = 0.4,
  Xt = 0.5,
  Qt = 0.4,
  Tt = 38,
  ze = 12,
  Fe = 1.4,
  Ye = 1.1;
function v(p, m, a = 4, A = he) {
  let S = p[0][1];
  for (let P = 1; P < p.length; P++) {
    const [y, k] = p[P];
    if (m < y) break;
    S = H(S, k, A(R((m - y) / a)));
  }
  return S;
}
function Nt(p, m, a = 3) {
  let A = p[0][1],
    S = A,
    P = 1;
  for (let y = 1; y < p.length; y++) {
    const [k, I] = p[y];
    if (m < k) break;
    (A = S), (S = I), (P = R((m - k) / a));
  }
  return { a: A, b: S, u: P };
}
const wt = [
    [0, 0.46],
    [40, 0.46],
    [45, 1.16],
    [53, 0.74],
    [60, 1],
  ],
  St = [
    [0, 0.8],
    [44, 1.25],
    [53, 0.9],
    [60, 1],
  ],
  fe = [
    [0, 0],
    [72, 1],
    [88, 0],
  ],
  pe = [
    [0, 0],
    [110, 2],
    [121, 0],
  ],
  ge = [
    [0, 1],
    [137, 2],
    [140, 3],
  ],
  ue = [
    [0, 0],
    [150, 1],
    [160, 2],
  ],
  Zt = ["$45", "$52", "$49"],
  de = [
    [0, 0],
    [146, 1],
    [157, 0],
  ],
  me = [
    [0, 0],
    [163, 1],
  ],
  be = [
    [0, 3],
    [182, 4],
    [195, 3],
  ],
  xe = [
    [0, 0],
    [188, 1],
    [200, 0],
  ],
  ye = [
    [0, 1],
    [245, 0],
    [257, 1],
  ],
  Ae = [
    [0, 0],
    [268, 1],
    [276, 0],
  ],
  Bt = [
    [0, 0.62],
    [284, 1.3],
    [292, 0.94],
  ],
  we = [
    [207, 208.5],
    [209, 213],
    [216, 217.5],
    [219, 229],
  ];
function Ke(p, m, a) {
  let A = 0;
  for (; A < m.length && m[A] === a[A]; ) A++;
  const S = m.slice(0, m.lastIndexOf(" ", A - 1) + 1),
    P = ["", m, S, a];
  return [[0, 0, p], ...we.map(([y, k], I) => [y, k, P[I]])];
}
const te = [205, 236];
function ee(p, m) {
  let a = p[0][2],
    A = !1;
  for (let S = 1; S < p.length; S++) {
    const [P, y, k] = p[S];
    if (m < P) break;
    const I = R((m - P) / (y - P));
    let t = 0;
    for (; t < a.length && t < k.length && a[t] === k[t]; ) t++;
    const W = a.length - t,
      N = W + k.length - t,
      L = Math.round(I * N);
    (a = L <= W ? a.slice(0, a.length - L) : k.slice(0, t + L - W)), (A = I < 1 || m - y < 2);
  }
  return { text: a, caret: A };
}
const Ve = [22, 44, 53, 60, 72, 88, 245, 257, 318, kt],
  et = { w: 258, h: 140 },
  Ut = [
    [0, et.w / 2, et.h / 2, 1],
    [37, 40, 42, 2.05],
    [64, et.w / 2, et.h / 2, 1],
    [132, 118, 52, 2.5],
    [169, et.w / 2, et.h / 2, 1],
  ],
  ne = [
    [0, 40, 124],
    [3, 14, 92],
    [24, 40, 62],
    [38, 58, 36],
    [64, 62, 44],
    [70, 104, 72],
    [100, 70, 50],
    [104, 56, 44],
    [126, 60, 46],
    [133, 130, 64],
    [166, 124, 68],
    [175, 190, 80],
    [202, 190, 84],
    [205, 127, 93],
    [236, 129, 95],
    [241, 150, 24],
    [262, 170, 30],
    [274, 236, 70],
    [298, 240, 74],
    [304, 150, 104],
    [340, 130, 96],
    [358, 130, 96],
  ],
  Ge = [
    [47, "sayTooBig"],
    [55, "sayBigger"],
    [85, "sayBack"],
    [108, "sayMug"],
    [119, "sayMills"],
    [147, "sayPills"],
    [155, "saySquare"],
    [179, "sayFourAcross"],
    [193, "sayTooBusy"],
    [346, "sayShip"],
  ],
  yt = [5, 24],
  je = [
    [0, 22, 34],
    [14, 26, 30],
    [21, 30, 22],
    [22.5, 46, 60],
    [25, 46, 112],
    [36, 32, 26],
    [44, 64, 28],
    [52, 52, 28],
    [59, 60, 28],
    [70, 44, 54],
    [74, 110, 52],
    [81, 50, 54],
    [99, 52, 54],
    [104, 52, 40],
    [112, 48, 42],
    [120, 52, 40],
    [134, 114, 50],
    [145, 118, 57],
    [149, 132, 33],
    [156, 118, 57],
    [162, 128, 57],
    [176, 166, 50],
    [187, 176, 66],
    [194, 166, 50],
    [205, 16, 70],
    [244, 26, 20],
    [251, 100, 20],
    [264, 30, 92],
    [280, 224, 48],
    [289, 226, 48],
    [304, 40, 30],
    [308, 108, 64],
    [312, 170, 40],
    [316, 226, 70],
    [320, 30, 108],
    [324, 120, 100],
    [328, 176, 100],
    [332, 60, 40],
    [336, 228, 90],
    [344, 150, 80],
  ],
  le = [21.5, 29],
  oe = [302, 344],
  Se = [
    [38, 0, 2, 8, 56, 9],
    [70, 0, 0, 6, 60, 54],
    [104, 0, 24, 18, 32, 32],
    [134, 1, 37, 29, 10, 6],
    [144, 1, 37, 36.5, 21, 4],
    [149, 1, 50, 13, 8, 4],
    [161, 1, 37, 36.5, 21, 4],
    [176, 2, 2, 22, 56, 72],
    [205, 0, 2, 50, 54, 9],
    [241, 0, 0, 0, 60, 6],
    [266, 0, 0, 61, 60, 52],
    [280, 3, 1, 7, 38, 12],
    [304, 0, 2, 62, 27, 28],
    [308, 1, 37, 13, 21, 5],
    [312, 2, 2, 12, 40, 5],
    [316, 3, 2, 48, 36, 6],
    [320, 0, 2, 92, 56, 20],
    [324, 1, 0, 66, 60, 52],
    [328, 2, 2, 60, 56, 36],
    [332, 0, 2, 0, 30, 6],
    [336, 3, 2, 56, 36, 20],
  ],
  se = [
    ...new Set([
      ...ct,
      ...[wt, St, fe, pe, ge, ue, de, me, be, xe, ye, Ae, Bt].flatMap((p) => p.slice(1).map(([m]) => m)),
      ...we.flatMap(([p, m]) => [p, (p + m) / 2, m]),
      ...Se.map(([p]) => p),
      kt,
    ]),
  ].sort((p, m) => p - m),
  qe = (p) => {
    let m = 0;
    for (; m < se.length && se[m] <= p; ) m++;
    return m;
  },
  ae = 2,
  Je = [
    45, 47, 53, 55, 60, 72, 85, 88, 108, 110, 119, 121, 146, 147, 155, 157, 179, 182, 193, 195, 230, 346, 352,
  ],
  Xe = [
    [21, 29, 5],
    [205, 229, 12],
  ];
function Qe(p) {
  for (const [a, A, S] of Xe) if (p >= a && p < A) return S * ae;
  let m = 1 / 0;
  for (const a of Je) m = Math.min(m, Math.abs(p - a));
  return ae * H(6.5, 130, He(R((m - 0.6) / 3)));
}
const M = "#fff",
  F = et.w,
  Ze = 163,
  st = et.h,
  Lt = 26,
  tn = 29,
  ie = 8,
  At = `300 7px ${Mt}`,
  en = `300 8px ${Mt}`,
  nn = 5.5,
  ln = `300 7.5px ${Mt}`,
  ce = `500 7.5px ${it}`,
  on = 12.9,
  $ = [
    { x: 8, y: 16, w: 60, h: 118 },
    { x: 75, y: 16, w: 60, h: 118 },
    { x: 142, y: 16, w: 60, h: 118 },
    { x: 209, y: 35, w: 40, h: 80 },
  ],
  sn = (p, m, a) => {
    const A = (y) => [1, 3, 5].map((k) => parseInt(y.slice(k, k + 2), 16)),
      S = A(p),
      P = A(m);
    return `rgb(${S.map((y, k) => Math.round(y + (P[k] - y) * a)).join(",")})`;
  },
  re = (p, m, a, A = 1 / 0) => {
    const S = [""];
    for (const P of p.split(" ")) {
      const y = S[S.length - 1],
        k = y ? `${y} ${P}` : P;
      y && P && S.length < A && a(k) > m + 0.01 ? S.push(P) : (S[S.length - 1] = k);
    }
    return S;
  };
function an(p, m) {
  const A = "COCOTTE",
    S = (k) => (k === "E" ? 0.74 : 0.9),
    P = [...A].reduce((k, I) => k + S(I), 0) + 0.05 * (A.length - 1),
    y = (k) => {
      const I = p.createElement("canvas");
      (I.width = Math.ceil(P * 140) + 4), (I.height = 144);
      const t = I.getContext("2d");
      t.translate(2, 2);
      let W = 0;
      for (const N of A) {
        const L = S(N);
        (t.globalCompositeOperation = "source-over"),
          (t.fillStyle = k),
          t.beginPath(),
          N === "C" || N === "O"
            ? (t.roundRect(W * 140, 0, L * 140, 140, 0.4 * 140),
              t.fill(),
              (t.globalCompositeOperation = "destination-out"),
              t.beginPath(),
              t.roundRect((W + L / 2 - 0.05) * 140, 0.27 * 140, 0.1 * 140, 0.46 * 140, 0.05 * 140),
              t.fill(),
              N === "C" && t.fillRect((W + L / 2) * 140, 0.41 * 140, (L / 2 + 0.02) * 140, 0.18 * 140))
            : N === "T"
              ? (t.fillRect(W * 140, 0, L * 140, 0.33 * 140),
                t.fillRect((W + L / 2 - 0.19) * 140, 0, 0.38 * 140, 140))
              : (t.fillRect(W * 140, 0, L * 140, 140),
                (t.globalCompositeOperation = "destination-out"),
                t.fillRect((W + 0.33) * 140, 0.29 * 140, L * 140, 0.075 * 140),
                t.fillRect((W + 0.33) * 140, 0.635 * 140, L * 140, 0.075 * 140)),
          (W += L + 0.05);
      }
      return I;
    };
  return { white: y("#fff"), ink: y(m), aspect: (P * 140 + 4) / 144 };
}
const yn = (p, m) => {
  const a = $e(m?.strings, m?.locale),
    A = We(p),
    { signal: S } = A,
    P = p.ownerDocument,
    y = A.surface,
    k = P.createElement("div");
  (k.className = "sr-only"),
    k.setAttribute("role", "img"),
    k.setAttribute("aria-label", a.description),
    p.append(k);
  const I = () => jt.wake(),
    { ctx: t, size: W } = Be(p, { signal: S, invalidate: I, fonts: [At, ce] }),
    N = an(P, y),
    L = Ke(a.line.start, a.line.draft, a.line.final),
    Wt = a.prompt.join(`
`);
  let C = { x: F / 2, y: st / 2, z: 1 },
    q = 0,
    Y = 1;
  const D = (n) => (n - C.x) * C.z + F / 2,
    _ = (n) => (n - C.y) * C.z + st / 2,
    ke = () => {
      t.setTransform(
        Y * q * C.z,
        0,
        0,
        Y * q * C.z,
        Y * q * (F / 2 - C.x * C.z),
        Y * q * (Lt + st / 2 - C.y * C.z),
      );
    },
    ut = () => {
      t.setTransform(Y * q, 0, 0, Y * q, 0, Y * q * Lt);
    },
    Me = () => {
      t.setTransform(Y * q, 0, 0, Y * q, 0, 0);
    },
    Q = (n = 0.75) => n / C.z,
    Re = (n, l) => {
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), (t.font = `${l === it ? 500 : 300} 100px ${l}`);
      const e = t.measureText(n).width / 100;
      return t.restore(), e;
    },
    Pe = (n, l) => {
      t.font = At;
      const e = Math.min(1, ...n.map((i, d) => l[d] / t.measureText(i).width)),
        o = `300 ${Math.max(nn, 7 * e)}px ${Mt}`;
      t.font = o;
      const c = (i, d) => t.measureText(i).width <= l[d] + 0.5,
        g = n.map((i, d) => {
          if (c(i, d)) return i;
          let r = i;
          for (; r && !c(`${r}…`, d); ) r = r.slice(0, -1);
          return `${r.trimEnd()}…`;
        });
      return { font: o, texts: g };
    },
    K = (n, l, e, o, c = {}) => {
      const g = o * C.z,
        i = c.font ?? it,
        d = i === it ? 500 : 300;
      t.save(),
        ut(),
        (t.fillStyle = c.colour ?? M),
        (t.font = `${d} ${g}px ${i}`),
        (t.textAlign = c.align ?? "left"),
        (t.textBaseline = "alphabetic");
      const r = R((g - 3.3) / 1.2),
        h = D(l),
        w = _(e);
      if ((r > 0 && ((t.globalAlpha = (c.alpha ?? 1) * r), t.fillText(n, h, w)), r < 1)) {
        const s = n.length * g * (i === it ? 0.58 : 0.6),
          f = c.align === "right" ? h - s : c.align === "center" ? h - s / 2 : h;
        (t.globalAlpha = (c.alpha ?? 1) * 0.7 * (1 - r)),
          t.fillRect(f, w - g * 0.68, s, Math.max(0.6, g * 0.62));
      }
      t.restore();
    },
    rt = (n, l, e, o) => {
      const c = e / N.aspect;
      (t.globalAlpha = 1 - o),
        o < 1 && t.drawImage(N.white, n, l, e, c),
        (t.globalAlpha = o),
        o > 0 && t.drawImage(N.ink, n, l, e, c),
        (t.globalAlpha = 1);
    },
    G = (n, l, e, o, c, g = 1) => {
      t.fillStyle = c;
      const i = e * 0.34;
      (t.globalAlpha = g * 0.55),
        t.beginPath(),
        t.roundRect(n - i / 2, l - e * 0.62, i, e * 0.62, i * 0.2),
        t.fill(),
        (t.globalAlpha = g * g),
        t.beginPath(),
        o
          ? t.arc(n, l - e * 0.62 - i * 0.48, i * 0.56, 0, Math.PI * 2)
          : t.roundRect(n - i * 0.56, l - e * 0.92, i * 1.12, e * 0.3, i * 0.12),
        t.fill(),
        t.fillRect(n - i * 0.12, l - e * (o ? 0.62 : 0.92) - i * (o ? 1.1 : 0.3), i * 0.24, i * 0.3);
    },
    Rt = (n, l, e, o, c = 1) => {
      (t.fillStyle = o),
        (t.globalAlpha = c),
        t.beginPath(),
        t.ellipse(n, l - e * 0.42, e * 0.62, e * 0.42, 0, 0, Math.PI),
        t.fill(),
        (t.globalAlpha = c * 0.5),
        t.beginPath(),
        t.ellipse(n, l - e * 0.42, e * 0.62, e * 0.12, 0, 0, Math.PI * 2),
        t.fill(),
        (t.globalAlpha = c);
    },
    Dt = (n, l, e, o, c = 1) => {
      (t.fillStyle = o),
        (t.strokeStyle = o),
        (t.globalAlpha = c),
        t.beginPath(),
        t.roundRect(n - e * 0.3, l - e * 0.7, e * 0.6, e * 0.7, e * 0.08),
        t.fill(),
        (t.lineWidth = e * 0.1),
        t.beginPath(),
        t.arc(n + e * 0.32, l - e * 0.38, e * 0.16, -Math.PI / 2, Math.PI / 2),
        t.stroke();
    },
    _t = (n, l, e, o, c = 1) => {
      (t.fillStyle = o), (t.globalAlpha = c);
      for (let g = 0; g < 3; g++)
        t.beginPath(),
          t.ellipse(n, l - e * 0.12 - g * e * 0.16, e * 0.6, e * 0.12, 0, 0, Math.PI * 2),
          (t.globalAlpha = c * (0.45 + g * 0.25)),
          t.fill();
      t.globalAlpha = c;
    },
    dt = [
      (n, l, e, o, c) => G(n, l, e, !1, o, c),
      (n, l, e, o, c) => Rt(n, l, e * 0.7, o, c),
      (n, l, e, o, c) => Dt(n, l, e * 0.6, o, c),
      (n, l, e, o, c) => _t(n, l, e * 0.7, o, c),
      (n, l, e, o, c) => G(n, l, e, !0, o, c),
    ],
    T = (n, l, e, o, c) => {
      (t.fillStyle = M), (t.globalAlpha = c), t.fillRect(n, l, e, o), (t.globalAlpha = 1);
    },
    ht = (n, l, e, o, c = 0.4) => {
      (t.strokeStyle = M),
        (t.globalAlpha = c),
        (t.lineWidth = Q(0.6)),
        t.setLineDash([Q(2), Q(2)]),
        t.strokeRect(n, l, e, o),
        t.setLineDash([]),
        (t.globalAlpha = 1);
    },
    Pt = (n, l, e, o) => {
      const c = Nt(ye, e - l * ot);
      for (const [g, i] of o)
        c.u < 1 && K(c.a ? i : a.lower(i), n.x + g, n.y + 4, 1.5, { alpha: 0.9 * (1 - c.u) }),
          K(c.b ? i : a.lower(i), n.x + g, n.y + 4, 1.5, { alpha: 0.9 * c.u });
    },
    $t = (n, l) => re(n, on * l, (e) => Re(e, it) * l),
    Ee = (n, l) => {
      const { x: e, y: o, w: c } = n;
      ht(e + 2, o + 1.5, l ? 14 : 20, 3),
        ht(e + 2, o + 7, c - 4, l ? 38 : 50),
        l ||
          (t.save(),
          ut(),
          (t.font = At),
          (t.fillStyle = M),
          (t.globalAlpha = 0.6),
          (t.textAlign = "center"),
          (t.textBaseline = "middle"),
          t.fillText(a.noTheme, D(e + c / 2), _(o + 32)),
          t.restore());
      const g = l ? 2 : 3;
      for (let i = 0; i < g; i++)
        for (let d = 0; d < (l ? 2 : 3); d++) {
          const r = (c - 4 - (l ? 2 : 4)) / (l ? 2 : 3);
          ht(e + 2 + d * (r + 2), o + (l ? 48 : 61) + i * 19, r, 13),
            T(e + 2 + d * (r + 2), o + (l ? 48 : 61) + i * 19 + 14.5, r * 0.6, 1.2, 0.14);
        }
    },
    Et = (n, l) => {
      const e = v(fe, n - l * ot, 3);
      return { inv: e, fg: sn("#ffffff", y, e) };
    },
    Oe = (n, l) => {
      const { x: e, y: o } = n;
      Pt(n, 0, l, [
        [2, a.nav.appliances],
        [13, a.nav.tableware],
        [23.5, a.nav.textiles],
      ]),
        (t.fillStyle = M),
        (t.strokeStyle = M),
        (t.lineWidth = Q(0.6)),
        t.beginPath(),
        t.arc(e + 50, o + 3, 0.9, 0, Math.PI * 2),
        t.stroke(),
        t.fillRect(e + 53, o + 2.2, 1.6, 1.8),
        t.fillRect(e + 56, o + 2, 1.8, 2);
      const { inv: c, fg: g } = Et(l, 0);
      T(e, o + 6, 60, 54, H(0.16, 0.94, c));
      const i = v(wt, l, 4, X);
      for (const f of [2.5, 5]) {
        const u = v(wt, l - f, 4, X),
          x = Math.abs(u - i);
        x > 0.04 && ht(e + 2, o + 8, 56 * u, (56 * u) / N.aspect, Math.min(0.7, x * 2.2) * (f > 3 ? 0.5 : 1));
      }
      rt(e + 2, o + 8, 56 * i, c);
      const d = Nt(pe, l, 3),
        r = (f, u) => {
          f === 0
            ? (G(e + 34, o + 47, 24, !0, g, u), G(e + 45, o + 47, 30, !1, g, u))
            : f === 1
              ? Rt(e + 40, o + 47, 14, g, u)
              : Dt(e + 40, o + 47, 15, g, u);
        };
      d.u < 1 && r(d.a, 1 - d.u),
        r(d.b, d.u),
        (t.globalAlpha = 0.6),
        (t.fillStyle = g),
        t.fillRect(e + 2, o + 47, 56, Q(0.6)),
        (t.globalAlpha = 1),
        $t(ee(L, l).text, 2.5).forEach((f, u) => K(f, e + 3, o + 53 + u * 3.1, 2.5, { colour: g }));
      const h = v(Ae, l, 5, J),
        w = o + H(62, 84, h),
        s = o + H(92, 62, h);
      T(e + 2, w, 27, 26, 0.12),
        T(e + 31, w, 27, 26, 0.2),
        Rt(e + 15.5, w + 20, 11, M, 0.85),
        _t(e + 44.5, w + 20, 12, M, 0.85);
      for (let f = 0; f < 3; f++) {
        const u = e + 2 + f * 19;
        T(u, s, 18, 15, 0.12),
          dt[[0, 4, 2][f]](u + 9, s + 13, 10, M, 0.9),
          T(u, s + 16.5, 10, 1, 0.75),
          T(u, s + 18.5, 5, 1, 0.45);
      }
      T(e, o + 114, 60, 4, 0.08);
    },
    ve = (n, l) => {
      const { x: e, y: o } = n;
      rt(e + 2, o + 1.6, 15 * v(St, l - ot, 4, X), 0),
        Pt(n, 1, l, [
          [31, a.nav.appliances],
          [42, a.nav.tableware],
        ]);
      const { inv: c, fg: g } = Et(l, 1);
      T(e, o + 6, 34, 58, H(0.16, 0.94, c)),
        G(e + 11, o + 58, 26, !0, g),
        G(e + 23, o + 58, 34, !1, g),
        K(a.productName, e + 37, o + 16, 2.6);
      const i = Nt(ue, l, 2);
      i.u < 1 && K(Zt[i.a], e + 58, o + 16, 2.6, { align: "right", alpha: 1 - i.u }),
        K(Zt[i.b], e + 58, o + 16, 2.6, { align: "right", alpha: i.u }),
        (t.fillStyle = M),
        t.fillRect(e + 37, o + 17.3, 21, Q(0.6));
      for (let s = 0; s < 5; s++) T(e + 37, o + 19.5 + s * 1.7, s === 4 ? 9 : 21, 0.8, 0.5);
      const d = v(ge, l, 2, X);
      for (let s = 0; s < 3; s++) {
        const f = R(d - s);
        if (f <= 0) continue;
        const u = e + 37 + s * 3.2,
          x = o + 29.5,
          b = 0.6 + 0.4 * f;
        t.save(),
          t.translate(u + 1.1, x + 1.9),
          t.scale(b, b),
          t.beginPath(),
          t.roundRect(-1.1, -1.9, 2.2, 3.8, 1.1),
          (t.fillStyle = M),
          (t.globalAlpha = f * 0.45),
          t.fill(),
          t.beginPath(),
          t.roundRect(-1.1, -1.9, 2.2, 2.1, [1.1, 1.1, 0, 0]),
          (t.globalAlpha = f),
          t.fill(),
          t.restore();
      }
      t.globalAlpha = 1;
      const r = v(de, l, 2.5) * 1.5 + 0.15,
        h = v(me, l, 2.5, X),
        w = H(21, 10.2, R(h));
      (t.fillStyle = M),
        t.beginPath(),
        t.roundRect(e + 37, o + 36.5, w, 3.2, r),
        t.fill(),
        K(a.addToCart, e + 37 + w / 2, o + 38.7, 1.45, { align: "center", colour: y }),
        h > 0.02 &&
          ((t.globalAlpha = R(h)),
          t.beginPath(),
          t.roundRect(e + 48.2, o + 36.5, 9.8 * R(h), 3.2, r),
          t.fill(),
          (t.globalAlpha = 1),
          h > 0.7 &&
            K(a.buyWithShop, e + 53.1, o + 38.7, 1.45, {
              align: "center",
              colour: y,
              alpha: R((h - 0.7) / 0.3),
            })),
        (t.strokeStyle = M),
        (t.lineWidth = Q(0.6)),
        (t.globalAlpha = 0.7),
        t.strokeRect(e + 37, o + 43, 21, 3.4),
        t.strokeRect(e + 37, o + 46.4, 21, 3.4),
        (t.globalAlpha = 1),
        K(a.specs, e + 38, o + 45.3, 1.2, { alpha: 0.85 }),
        K(a.reviews, e + 38, o + 48.7, 1.2, { alpha: 0.85 }),
        T(e, o + 66, 60, 52, 0.22),
        G(e + 20, o + 112, 30, !1, M, 0.9),
        G(e + 34, o + 112, 22, !0, M, 0.9),
        G(e + 45, o + 112, 26, !1, M, 0.9);
    },
    Ht = [
      [0, 1, 2, 3, 4, 5, 6, 7],
      [3, 0, 5, 1, 7, 2, 4, 6],
    ],
    Ie = [
      Oe,
      ve,
      (n, l) => {
        const { x: e, y: o } = n;
        rt(e + 2, o + 1.6, 15 * v(St, l - 2 * ot, 4, X), 0),
          Pt(n, 2, l, [
            [31, a.nav.appliances],
            [42, a.nav.textiles],
          ]),
          K(a.collectionTitle, e + 2, o + 15, 4.4);
        for (let h = 0; h < 4; h++) T(e + 2 + h * 8, o + 18, 6, 1, 0.4);
        const g = v(be, l, 4, J) - 3,
          i = v(xe, l, 4, J),
          d = (h, w) => {
            const s = (56 - (w - 1) * 2) / w,
              f = s * 1.15;
            return [e + 2 + (h % w) * (s + 2), o + 22 + Math.floor(h / w) * (f + 5), s];
          },
          r = (h) => {
            const w = d(h, 3),
              s = d(h, 4);
            return [H(w[0], s[0], g), H(w[1], s[1], g), H(w[2], s[2], g)];
          };
        for (let h = 0; h < 8; h++) {
          const w = r(Ht[0].indexOf(h)),
            s = r(Ht[1].indexOf(h)),
            f = H(w[0], s[0], i),
            u = H(w[1], s[1], i),
            x = H(w[2], s[2], i),
            b = x * 1.15;
          T(f, u, x, b, 0.13),
            dt[h % dt.length](f + x / 2, u + b - 2, x * 0.62, M, 0.9),
            T(f, u + b + 1.2, x * 0.6, 0.9, 0.7),
            T(f, u + b + 2.8, x * 0.3, 0.9, 0.4);
        }
        T(e, o + 114, 60, 4, 0.08);
      },
      (n, l) => {
        const { x: e, y: o } = n;
        t.fillStyle = M;
        for (let r = 0; r < 3; r++) t.fillRect(e + 2, o + 1.8 + r * 0.9, 2.4, 0.45);
        rt(e + 14, o + 1.5, 12 * v(St, l - 3 * ot, 4, X), 0), t.fillRect(e + 35.5, o + 1.8, 1.8, 2);
        const { inv: c, fg: g } = Et(l, 3);
        T(e, o + 6, 40, 40, H(0.16, 0.94, c));
        const i = v(Bt, l, 4, X),
          d = v(Bt, l - 3, 4, X);
        Math.abs(d - i) > 0.04 &&
          ht(e + 2, o + 8, 36 * d, (36 * d) / N.aspect, Math.min(0.7, Math.abs(d - i) * 2.2)),
          rt(e + 2, o + 8, 36 * i, c),
          G(e + 15, o + 40, 16, !0, g),
          G(e + 25, o + 40, 21, !1, g),
          $t(a.line.final, 1.7).forEach((r, h) => K(r, e + 2, o + 50 + h * 2.4, 1.7));
        for (let r = 0; r < 2; r++)
          T(e + 2 + r * 19, o + 56, 17, 16, 0.13),
            dt[r === 0 ? 0 : 1](e + 10.5 + r * 19, o + 70, 10, M, 0.9),
            T(e + 2 + r * 19, o + 73.5, 9, 0.9, 0.7);
      },
    ],
    B = [];
  let Z = 0;
  const Ot = (n, l) => [
      v(
        n.map(([e, o]) => [e, o]),
        l,
        5,
        J,
      ),
      v(
        n.map(([e, , o]) => [e, o]),
        l,
        5,
        J,
      ),
    ],
    Ce = (n, l) => {
      if (!(l <= n)) {
        for (const [e, o] of Ge)
          if (e > n && e <= l) {
            for (let i = B.length - 1; i >= 0; i--) B[i].kind === "say" && B.splice(i, 1);
            const [c, g] = Ot(ne, e);
            B.push({ kind: "say", at: Z, text: a.say(o), x: c, y: g });
          }
        for (const e of Ve) e > n && e <= l && B.push({ kind: "flash", at: Z });
        for (const e of Se)
          if (e[0] > n && e[0] <= l) {
            for (let o = B.length - 1; o >= 0; o--) B[o].kind === "select" && B.splice(o, 1);
            B.push({ kind: "select", at: Z, sel: e });
          }
      }
    },
    Te = () => {
      for (let n = B.length - 1; n >= 0; n--) {
        const l = B[n],
          e = Z - l.at,
          o = l.kind === "say" ? Xt + l.text.length / Tt + 0.25 : l.kind === "flash" ? ot * 3 + Ct : Qt + 0.2;
        e > o && B.splice(n, 1);
      }
    },
    Ne = (n, l) => n[0] < l[0] + l[2] && n[0] + n[2] > l[0] && n[1] < l[1] + l[3] && n[1] + n[3] > l[1],
    Ue = (n, l) =>
      Math.max(0, Math.min(n[0] + n[2], l[0] + l[2]) - Math.max(n[0], l[0])) *
      Math.max(0, Math.min(n[1] + n[3], l[1] + l[3]) - Math.max(n[1], l[1])),
    zt = (n, l, e, o) => {
      const g = [
          ...n,
          ...n.flatMap(([r, h]) => [
            [r, h - 14],
            [r, h + 14],
          ]),
        ].map(([r, h]) => [R(r, 2, F - l - 2), R(h, 2, st - e - 2), l, e]),
        i = g.find((r) => !o.some((h) => Ne(h, r)));
      if (i) return i;
      const d = (r) => o.reduce((h, w) => h + Ue(w, r), 0);
      return g.reduce((r, h) => (d(h) < d(r) ? h : r));
    },
    Le = (n, l, e, o) => {
      t.font = At;
      const g = t.measureText(e).width + 7,
        i = 9.5,
        d = [
          [n + 7, l + 8],
          [n + 7, l - i - 2],
        ],
        r = [
          [n - g - 2, l + 8],
          [n - g - 2, l - i - 2],
        ],
        h = zt(n + 7 + g > F - 6 ? [...r, ...d] : [d[0], r[0], d[1], r[1]], g, i, o);
      return (
        t.beginPath(),
        t.roundRect(h[0], h[1], g, i, 1.5),
        (t.fillStyle = M),
        t.fill(),
        (t.fillStyle = y),
        (t.textBaseline = "middle"),
        (t.textAlign = "left"),
        t.fillText(e, h[0] + 3.5, h[1] + i / 2 + 0.4),
        h
      );
    },
    vt = (n, l, e) => {
      t.beginPath(),
        t.moveTo(n, l),
        t.lineTo(n, l + 8.5),
        t.lineTo(n + 2.3, l + 6.3),
        t.lineTo(n + 3.9, l + 9.9),
        t.lineTo(n + 5.3, l + 9.3),
        t.lineTo(n + 3.7, l + 5.8),
        t.lineTo(n + 6.9, l + 5.8),
        t.closePath(),
        (t.fillStyle = e ? M : y),
        t.fill(),
        (t.strokeStyle = e ? y : M),
        (t.lineWidth = e ? 0.6 : 0.9),
        t.stroke();
    },
    Ft = (n, l) => {
      const [e, o] = Ot(n, l),
        [c, g] = Ot(n, l - 2.5),
        i = D(e),
        d = _(o);
      let r = D(c) - i,
        h = _(g) - d;
      const w = Math.hypot(r, h);
      return w > 10 && ((r *= 10 / w), (h *= 10 / w)), [i, d, i + r, d + h];
    },
    Yt = ([n, l, e, o], c) => {
      Math.hypot(n - e, l - o) < 2 ||
        ((t.strokeStyle = M),
        (t.globalAlpha = c * 0.4),
        (t.lineWidth = 1),
        t.beginPath(),
        t.moveTo(e, o),
        t.lineTo(n, l),
        t.stroke(),
        (t.globalAlpha = c));
    },
    Kt = (n, l, e, o, c, g) => {
      t.font = ln;
      const d = Math.max(...o.map((s) => t.measureText(s).width)) + 8,
        r = o.length * 9 + 4,
        h = zt(
          [
            [n + 8, l - r - 2],
            [n - d - 3, l - r - 2],
            [n + 8, l + 13],
            [n - d - 3, l + 13],
          ],
          d,
          r,
          g,
        ),
        w = Math.max(...e.map((s) => t.measureText(s).width));
      return (
        w <= 0 ||
          ((t.globalAlpha = c),
          t.beginPath(),
          t.roundRect(h[0], h[1], Math.min(d, w + 9), r, 2),
          (t.fillStyle = M),
          t.fill(),
          (t.fillStyle = y),
          (t.textBaseline = "alphabetic"),
          (t.textAlign = "left"),
          e.forEach((s, f) => t.fillText(s, h[0] + 4, h[1] + 9 + f * 9))),
        h
      );
    },
    Vt = (n) => {
      const l = (o) => t.measureText(o).width,
        e = a.line.break ? l(a.line.break) : F - 14;
      return re(n, e, l, 2);
    },
    Gt = (n, l, e) => {
      const o = (s) => !e || Math.floor(Z * s) % 2 === 0,
        c = W();
      (Y = c.dpr),
        (q = Math.min(c.w / F, c.h / Ze)),
        (C = {
          x: v(
            Ut.map(([s, f]) => [s, f]),
            n,
            6,
            J,
          ),
          y: v(
            Ut.map(([s, , f]) => [s, f]),
            n,
            6,
            J,
          ),
          z: v(
            Ut.map(([s, , , f]) => [s, f]),
            n,
            6,
            J,
          ),
        }),
        t.setTransform(Y, 0, 0, Y, 0, 0),
        t.clearRect(0, 0, c.w, c.h),
        ut(),
        t.save(),
        t.beginPath(),
        t.rect(0, tn - Lt, F, st),
        t.clip();
      {
        const s = 7 * C.z,
          f = ((D(0) % s) + s) % s,
          u = ((_(0) % s) + s) % s;
        (t.fillStyle = M), (t.globalAlpha = 0.22);
        const x = Math.min(1, 0.5 * Math.sqrt(C.z));
        for (let b = f; b < F; b += s) for (let E = u; E < st; E += s) t.fillRect(b - x / 2, E - x / 2, x, x);
        t.globalAlpha = 1;
      }
      const g = R((n - kt) / 2);
      $.forEach((s, f) => {
        const u = f === 3,
          x = R((n - ct[f]) / 5);
        ke(), t.save(), t.beginPath(), t.rect(s.x, s.y, s.w, s.h), t.clip();
        const b = s.y + s.h * J(x);
        x < 1 && (t.save(), t.beginPath(), t.rect(s.x, b, s.w, s.h), t.clip(), Ee(s, u), t.restore()),
          x > 0 &&
            (t.save(),
            t.beginPath(),
            t.rect(s.x, s.y, s.w, b - s.y),
            t.clip(),
            Ie[f](s, n),
            t.restore(),
            x < 1 && ((t.fillStyle = M), t.fillRect(s.x, b, s.w, Q(1)))),
          t.restore();
        let E = 0;
        for (const O of B)
          if (O.kind === "flash") {
            const j = Z - O.at - f * ot;
            j >= 0 && j < Ct && (E = Math.max(E, 1 - j / Ct));
          }
        (t.strokeStyle = M),
          (t.globalAlpha = 0.45 + 0.55 * E),
          (t.lineWidth = Q(0.75 + 0.9 * E)),
          t.strokeRect(s.x, s.y, s.w, s.h),
          (t.globalAlpha = 1);
      }),
        ut();
      const i = [];
      if (
        ($.forEach((s, f) => {
          f < 3 && n < ct[f] + 3 && i.push([D(s.x + s.w / 2) - 18, _(s.y + 32) - 6, 36, 12]);
        }),
        n > ct[0] + 2)
      ) {
        const s = 56 * v(wt, n, 4, X);
        i.push([D($[0].x + 2), _($[0].y + 8), s * C.z, (s / N.aspect) * C.z]);
      }
      n > ct[2] + 2 &&
        i.push([D($[2].x + 2), _($[2].y + 10), (a.collectionTitle.length * 4.4 * 0.58 + 7) * C.z, 6 * C.z]);
      for (const s of B) {
        if (s.kind !== "select") continue;
        const [, f, u, x, b, E] = s.sel,
          O = $[f],
          j = Z - s.at,
          nt = R(j / 0.08) * R((Qt + 0.2 - j) / 0.2),
          z = D(O.x + u),
          V = _(O.y + x),
          lt = D(O.x + u + b),
          xt = _(O.y + x + E);
        (t.globalAlpha = nt), (t.strokeStyle = M), (t.lineWidth = 1), t.strokeRect(z, V, lt - z, xt - V);
        for (const [qt, Jt] of [
          [z, V],
          [lt, V],
          [z, xt],
          [lt, xt],
        ])
          (t.fillStyle = y),
            t.fillRect(qt - 1.6, Jt - 1.6, 3.2, 3.2),
            t.strokeRect(qt - 1.6, Jt - 1.6, 3.2, 3.2);
        (t.globalAlpha = 1), lt - z < 150 && i.push([z - 2, V - 2, lt - z + 4, xt - V + 4]);
      }
      const d = R((n - te[0]) / 1.5) * R((te[1] - n) / 1.5);
      if (d > 0) {
        const { text: s, caret: f } = ee(L, n);
        t.font = ce;
        const u = Vt(s),
          x = D($[0].x + 6),
          b = _($[0].y + 56),
          E = Math.max(...Vt(a.line.final).map((V) => t.measureText(V).width)),
          O = Math.min(F - 4, E + 12),
          j = 26,
          nt = R(x - 2, 2, F - O - 2),
          z = b + 12;
        if (
          ((t.globalAlpha = d),
          (t.fillStyle = y),
          t.beginPath(),
          t.roundRect(nt, z, O, j, 2),
          t.fill(),
          (t.strokeStyle = M),
          (t.lineWidth = 0.9),
          t.stroke(),
          (t.lineWidth = 0.75),
          t.beginPath(),
          t.moveTo(nt + 10, z),
          t.lineTo(x + 2, b + 1),
          t.stroke(),
          (t.fillStyle = M),
          (t.textAlign = "left"),
          (t.textBaseline = "alphabetic"),
          u.forEach((V, lt) => t.fillText(V, nt + 5, z + 11 + lt * 9)),
          f && o(2.5))
        ) {
          const V = u[u.length - 1] ?? "";
          t.fillRect(nt + 5 + t.measureText(V).width + 0.8, z + 4 + (u.length - 1) * 9, 0.9, 8.5);
        }
        (t.globalAlpha = 1), i.push([nt, z, O, j]);
      }
      const r = Pe(
        a.pages,
        $.map((s, f) => {
          const u = $[f + 1];
          return (u ? u.x - 3 : F - 2) - (s.x + 7);
        }),
      );
      $.forEach((s, f) => {
        const u = D(s.x),
          x = _(s.y) - 4;
        if (u > F || u + 20 < 0 || x < 6 || x > st) return;
        const b = r.texts[f];
        (t.strokeStyle = M),
          (t.fillStyle = M),
          (t.lineWidth = 0.75),
          (t.globalAlpha = 0.75),
          t.strokeRect(u + 0.5, x - 5, 4, 4),
          g > 0 && ((t.globalAlpha = 0.75 * g), t.fillRect(u + 0.5, x - 5, 4, 4), (t.globalAlpha = 0.75)),
          (t.font = r.font),
          (t.textAlign = "left"),
          (t.textBaseline = "alphabetic"),
          t.fillText(b, u + 7, x - 0.6),
          i.push([u, x - 6.5, 8 + t.measureText(b).width, 8]),
          (t.globalAlpha = 1);
      });
      const h = R((n - kt - 2) / 3);
      if (h < 1) {
        const s = 1 - h,
          f = Ft(je, n),
          u = Ft(ne, n);
        (t.globalAlpha = s), Yt(u, s), Yt(f, s), vt(u[0], u[1], !1);
        for (let b = 1; b < $.length; b++) {
          const E = $[b],
            O = (n - ct[b]) / 5;
          O < -0.3 ||
            O > 1.2 ||
            ((t.globalAlpha = s * R((O + 0.3) / 0.25) * R((1.2 - O) / 0.2)),
            vt(D(E.x + E.w * 0.66), _(E.y + E.h * J(R(O))) - 1, !0));
        }
        (t.globalAlpha = s), vt(f[0], f[1], !0);
        const x = Le(
          f[0],
          f[1],
          n >= le[0] && n < le[1]
            ? a.sidekickDrafting
            : n >= oe[0] && n < oe[1]
              ? a.sidekickPolishing
              : a.sidekick,
          i,
        );
        if ((i.push(x, [f[0] - 1, f[1] - 1, 9, 12]), n >= yt[0] && n < yt[1])) {
          const b = Math.round(R((n - yt[0]) / 3) * Wt.length),
            E = Wt.slice(0, b).split(`
`);
          l && o(2) && (E[E.length - 1] += "▍"),
            Kt(
              u[0],
              u[1],
              E,
              a.prompt.map((O) => `${O}▍`),
              s * R((yt[1] - n) / 1.5),
              i,
            );
        }
        for (const b of B) {
          if (b.kind !== "say" || d > 0) continue;
          const E = Z - b.at,
            O = Math.round(R((E * Tt) / b.text.length) * b.text.length),
            j = R((Xt + b.text.length / Tt + 0.25 - E) / 0.25);
          Kt(D(b.x), _(b.y), [b.text.slice(0, O)], [b.text], s * j * R(E / 0.06), i);
        }
      }
      (t.globalAlpha = 1),
        t.restore(),
        Me(),
        (t.fillStyle = M),
        (t.textBaseline = "alphabetic"),
        (t.textAlign = "left"),
        (t.font = en),
        (t.globalAlpha = n > tt + 0.5 ? 0.85 : 0);
      const w = a.edits(qe(n));
      if ((t.fillText(w, ie, 11), g > 0)) {
        const s = a.published,
          f = t.measureText(s).width,
          u = ie + t.measureText(w).width + 8,
          x = 3.5 + (1 - he(g)) * 2;
        (t.globalAlpha = g),
          t.beginPath(),
          t.roundRect(u, x, f + 8, 10, 2),
          t.fill(),
          t.save(),
          (t.globalCompositeOperation = "destination-out"),
          t.fillText(s, u + 4, x + 7.4),
          t.restore();
      }
      t.globalAlpha = 1;
    };
  let ft = A.state.reducedMotion,
    mt = !1,
    U = ft ? gt : 0,
    bt = !ft,
    pt = !1,
    at = 0;
  const jt = A.loop((n) => {
    if (ft) return Gt(U, !1, !1), !1;
    Z += n;
    const l = U;
    let e = !0;
    mt
      ? ((pt = !1), (at = 0), (bt = !1), (U = Math.min(gt, U + n * Qe(U))), Ce(l, U), U >= gt && (e = !1))
      : bt || U < tt
        ? ((U = Math.min(tt, U + n * ze)), U >= tt && (bt = !1))
        : U > tt
          ? ((at += n),
            at > Fe && (pt = !0),
            pt && ((U = Math.max(tt, U - n * (gt / Ye))), U <= tt && ((pt = !1), (at = 0))))
          : (e = !1),
      Te();
    const o = !mt && U <= tt;
    return Gt(U, o, e), e || B.length > 0;
  });
  return (
    A.watch((n) => {
      n.reducedMotion !== ft && ((ft = n.reducedMotion), (U = gt), (bt = pt = !1), (at = 0), (B.length = 0)),
        n.revealed !== mt && ((mt = n.revealed), (at = 0)),
        jt.wake();
    }),
    S.addEventListener(
      "abort",
      () => {
        (N.white.width = N.white.height = 0), (N.ink.width = N.ink.height = 0);
      },
      { once: !0 },
    ),
    () => {
      A.dispose(), k.remove();
    }
  );
};
export { yn as mount };
