import { n as Ht } from "./frameLoop-CeLX9Qef.js";
import {
  A as So,
  S as vo,
  P as Qt,
  B as Mo,
  H as Ho,
  a as Po,
  b as To,
  c as ko,
  d as Co,
} from "./assets-CA9n78aZ.js";
import { ROOM_STRINGS as Gt } from "./strings-NDaVNPGZ.js";
import "./formatCopy-Cs7MVtfe.js";
import "./locale-DXEWuBc6.js";
const Yo = 2048,
  Lo = 1194,
  Vt = [
    {
      id: "cap",
      toward: [
        { x: 329, y: 495, w: 113, h: 238, anchorX: 37.5, anchorY: 238, refH: 240 },
        { x: 444, y: 495, w: 113, h: 238, anchorX: 37.5, anchorY: 238, refH: 240 },
        { x: 559, y: 495, w: 113, h: 238, anchorX: 37.5, anchorY: 238, refH: 240 },
        { x: 674, y: 495, w: 113, h: 238, anchorX: 37.5, anchorY: 238, refH: 240 },
        { x: 789, y: 495, w: 113, h: 238, anchorX: 37.5, anchorY: 238, refH: 240 },
        { x: 904, y: 495, w: 113, h: 238, anchorX: 37.5, anchorY: 238, refH: 240 },
        { x: 1019, y: 495, w: 113, h: 238, anchorX: 37.5, anchorY: 238, refH: 240 },
        { x: 1134, y: 495, w: 113, h: 238, anchorX: 37.5, anchorY: 238, refH: 240 },
      ],
      away: [
        { x: 1471, y: 250, w: 107, h: 239, anchorX: 69, anchorY: 239, refH: 240 },
        { x: 1580, y: 250, w: 107, h: 239, anchorX: 69, anchorY: 239, refH: 240 },
        { x: 1689, y: 250, w: 107, h: 239, anchorX: 69, anchorY: 239, refH: 240 },
        { x: 1798, y: 250, w: 107, h: 239, anchorX: 69, anchorY: 239, refH: 240 },
        { x: 1907, y: 250, w: 107, h: 239, anchorX: 69, anchorY: 239, refH: 240 },
        { x: 2, y: 495, w: 107, h: 239, anchorX: 69, anchorY: 239, refH: 240 },
        { x: 111, y: 495, w: 107, h: 239, anchorX: 69, anchorY: 239, refH: 240 },
        { x: 220, y: 495, w: 107, h: 239, anchorX: 69, anchorY: 239, refH: 240 },
      ],
      poses: {
        pockets: { x: 869, y: 250, w: 87, h: 240, anchorX: 43.2, anchorY: 240, refH: 240 },
        bag: { x: 958, y: 250, w: 87, h: 240, anchorX: 43.2, anchorY: 240, refH: 240 },
        folded: { x: 1047, y: 250, w: 87, h: 240, anchorX: 43.2, anchorY: 240, refH: 240 },
        back: { x: 1136, y: 250, w: 87, h: 240, anchorX: 43.1, anchorY: 240, refH: 240 },
        phone: { x: 674, y: 250, w: 84, h: 241, anchorX: 40.8, anchorY: 241, refH: 240 },
        wave: { x: 760, y: 250, w: 107, h: 241, anchorX: 41.9, anchorY: 241, refH: 240 },
        "sit-phone": { x: 1825, y: 736, w: 148, h: 221, anchorX: 91.5, anchorY: 221, refH: 240 },
        "sit-idle": { x: 2, y: 971, w: 140, h: 221, anchorX: 89.9, anchorY: 221, refH: 240 },
        tap: { x: 1355, y: 250, w: 114, h: 239, anchorX: 33.3, anchorY: 239, refH: 240 },
        paid: { x: 1225, y: 250, w: 128, h: 240, anchorX: 45.5, anchorY: 240, refH: 240 },
      },
    },
    {
      id: "ana",
      toward: [
        { x: 1249, y: 495, w: 104, h: 233, anchorX: 43.4, anchorY: 233, refH: 240 },
        { x: 1355, y: 495, w: 104, h: 233, anchorX: 43.4, anchorY: 233, refH: 240 },
        { x: 1461, y: 495, w: 104, h: 233, anchorX: 43.4, anchorY: 233, refH: 240 },
        { x: 1567, y: 495, w: 104, h: 233, anchorX: 43.4, anchorY: 233, refH: 240 },
        { x: 1673, y: 495, w: 104, h: 233, anchorX: 43.4, anchorY: 233, refH: 240 },
        { x: 1779, y: 495, w: 104, h: 233, anchorX: 43.4, anchorY: 233, refH: 240 },
        { x: 1885, y: 495, w: 104, h: 233, anchorX: 43.4, anchorY: 233, refH: 240 },
        { x: 2, y: 736, w: 104, h: 233, anchorX: 43.4, anchorY: 233, refH: 240 },
      ],
      away: [
        { x: 1073, y: 736, w: 92, h: 227, anchorX: 60.8, anchorY: 227, refH: 240 },
        { x: 1167, y: 736, w: 92, h: 227, anchorX: 60.8, anchorY: 227, refH: 240 },
        { x: 1261, y: 736, w: 92, h: 227, anchorX: 60.8, anchorY: 227, refH: 240 },
        { x: 1355, y: 736, w: 92, h: 227, anchorX: 60.8, anchorY: 227, refH: 240 },
        { x: 1449, y: 736, w: 92, h: 227, anchorX: 60.8, anchorY: 227, refH: 240 },
        { x: 1543, y: 736, w: 92, h: 227, anchorX: 60.8, anchorY: 227, refH: 240 },
        { x: 1637, y: 736, w: 92, h: 227, anchorX: 60.8, anchorY: 227, refH: 240 },
        { x: 1731, y: 736, w: 92, h: 227, anchorX: 60.8, anchorY: 227, refH: 240 },
      ],
      poses: {
        pockets: { x: 229, y: 736, w: 75, h: 230, anchorX: 36.6, anchorY: 230, refH: 240 },
        bag: { x: 306, y: 736, w: 75, h: 230, anchorX: 36.6, anchorY: 230, refH: 240 },
        folded: { x: 383, y: 736, w: 75, h: 230, anchorX: 36.6, anchorY: 230, refH: 240 },
        back: { x: 921, y: 736, w: 75, h: 228, anchorX: 37, anchorY: 228, refH: 240 },
        phone: { x: 998, y: 736, w: 73, h: 228, anchorX: 41, anchorY: 228, refH: 240 },
        wave: { x: 460, y: 736, w: 93, h: 230, anchorX: 54.8, anchorY: 230, refH: 240 },
        "sit-phone": { x: 144, y: 971, w: 154, h: 213, anchorX: 108.1, anchorY: 213, refH: 240 },
        "sit-idle": { x: 300, y: 971, w: 120, h: 213, anchorX: 93.4, anchorY: 213, refH: 240 },
        tap: { x: 794, y: 736, w: 125, h: 229, anchorX: 45.8, anchorY: 229, refH: 240 },
        paid: { x: 555, y: 736, w: 88, h: 230, anchorX: 38, anchorY: 230, refH: 240 },
      },
    },
    {
      id: "walt",
      toward: [
        { x: 1733, y: 2, w: 110, h: 243, anchorX: 43.5, anchorY: 243, refH: 240 },
        { x: 1845, y: 2, w: 110, h: 243, anchorX: 43.5, anchorY: 243, refH: 240 },
        { x: 2, y: 250, w: 110, h: 243, anchorX: 43.5, anchorY: 243, refH: 240 },
        { x: 114, y: 250, w: 110, h: 243, anchorX: 43.5, anchorY: 243, refH: 240 },
        { x: 226, y: 250, w: 110, h: 243, anchorX: 43.5, anchorY: 243, refH: 240 },
        { x: 338, y: 250, w: 110, h: 243, anchorX: 43.5, anchorY: 243, refH: 240 },
        { x: 450, y: 250, w: 110, h: 243, anchorX: 43.5, anchorY: 243, refH: 240 },
        { x: 562, y: 250, w: 110, h: 243, anchorX: 43.5, anchorY: 243, refH: 240 },
      ],
      away: [
        { x: 695, y: 2, w: 117, h: 244, anchorX: 69.6, anchorY: 244, refH: 240 },
        { x: 814, y: 2, w: 117, h: 244, anchorX: 69.6, anchorY: 244, refH: 240 },
        { x: 933, y: 2, w: 117, h: 244, anchorX: 69.6, anchorY: 244, refH: 240 },
        { x: 1052, y: 2, w: 117, h: 244, anchorX: 69.6, anchorY: 244, refH: 240 },
        { x: 1171, y: 2, w: 117, h: 244, anchorX: 69.6, anchorY: 244, refH: 240 },
        { x: 1290, y: 2, w: 117, h: 244, anchorX: 69.6, anchorY: 244, refH: 240 },
        { x: 1409, y: 2, w: 117, h: 244, anchorX: 69.6, anchorY: 244, refH: 240 },
        { x: 1528, y: 2, w: 117, h: 244, anchorX: 69.6, anchorY: 244, refH: 240 },
      ],
      poses: {
        pockets: { x: 113, y: 2, w: 84, h: 245, anchorX: 41.6, anchorY: 245, refH: 240 },
        bag: { x: 199, y: 2, w: 84, h: 245, anchorX: 41.6, anchorY: 245, refH: 240 },
        folded: { x: 285, y: 2, w: 84, h: 245, anchorX: 41.6, anchorY: 245, refH: 240 },
        back: { x: 1647, y: 2, w: 84, h: 243, anchorX: 41.7, anchorY: 243, refH: 240 },
        phone: { x: 612, y: 2, w: 81, h: 244, anchorX: 40.9, anchorY: 244, refH: 240 },
        wave: { x: 2, y: 2, w: 109, h: 246, anchorX: 66.5, anchorY: 246, refH: 240 },
        "sit-phone": { x: 645, y: 736, w: 147, h: 230, anchorX: 94.5, anchorY: 230, refH: 240 },
        "sit-idle": { x: 108, y: 736, w: 119, h: 233, anchorX: 76.2, anchorY: 233, refH: 240 },
        tap: { x: 371, y: 2, w: 97, h: 245, anchorX: 33.3, anchorY: 245, refH: 240 },
        paid: { x: 470, y: 2, w: 140, h: 245, anchorX: 56, anchorY: 245, refH: 240 },
      },
    },
  ],
  Eo =
    "M154.413 22.7473C151.116 22.0148 149.647 21.7281 149.647 20.4269C149.647 19.2031 150.641 18.5934 152.629 18.5934C154.377 18.5934 155.655 19.376 156.596 20.9092C156.667 21.0275 156.813 21.0684 156.933 21.0047L160.643 19.0848C160.776 19.0165 160.825 18.8436 160.749 18.7117C159.209 15.9773 156.365 14.4805 152.62 14.4805C147.699 14.4805 144.642 16.9646 144.642 20.9138C144.642 25.1086 148.365 26.1687 151.666 26.9012C154.967 27.6337 156.441 27.9203 156.441 29.2215C156.441 30.5227 155.367 31.1369 153.224 31.1369C151.245 31.1369 149.776 30.2088 148.888 28.4071C148.822 28.2752 148.667 28.2206 148.538 28.2888L144.837 30.1679C144.708 30.2361 144.655 30.3953 144.722 30.5318C146.191 33.5574 149.203 35.259 153.228 35.259C158.353 35.259 161.45 32.8158 161.45 28.7438C161.45 24.6718 157.71 23.4889 154.413 22.7564V22.7473Z M174.292 14.4806C172.188 14.4806 170.329 15.2449 168.994 16.6053C168.909 16.6872 168.772 16.628 168.772 16.5097V7.82434C168.772 7.6742 168.656 7.55591 168.51 7.55591H163.869C163.722 7.55591 163.607 7.6742 163.607 7.82434V34.7813C163.607 34.9315 163.722 35.0498 163.869 35.0498H168.51C168.656 35.0498 168.772 34.9315 168.772 34.7813V22.9567C168.772 20.6727 170.48 18.9211 172.783 18.9211C175.086 18.9211 176.754 20.6363 176.754 22.9567V34.7813C176.754 34.9315 176.87 35.0498 177.016 35.0498H181.657C181.804 35.0498 181.919 34.9315 181.919 34.7813V22.9567C181.919 17.9884 178.742 14.4806 174.292 14.4806Z M191.335 13.707C188.815 13.707 186.454 14.4987 184.759 15.6407C184.644 15.718 184.604 15.8772 184.675 16.0001L186.72 19.5807C186.796 19.7081 186.955 19.7536 187.08 19.6762C188.367 18.88 189.84 18.466 191.344 18.4751C195.395 18.4751 198.372 21.4051 198.372 25.2769C198.372 28.5755 195.99 31.0187 192.968 31.0187C190.505 31.0187 188.797 29.5491 188.797 27.4744C188.797 26.287 189.289 25.3133 190.572 24.6263C190.705 24.5535 190.754 24.3852 190.674 24.2532L188.744 20.9047C188.682 20.7955 188.548 20.7454 188.429 20.7909C185.842 21.7737 184.027 24.1395 184.027 27.3152C184.027 32.1197 187.759 35.7049 192.963 35.7049C199.043 35.7049 203.413 31.3872 203.413 25.195C203.413 18.557 198.328 13.707 191.335 13.707Z M216.991 14.4397C214.644 14.4397 212.545 15.3314 211.014 16.8965C210.93 16.983 210.792 16.9193 210.792 16.801V14.9174C210.792 14.7673 210.677 14.649 210.531 14.649H206.009C205.863 14.649 205.747 14.7673 205.747 14.9174V41.8335C205.747 41.9836 205.863 42.1019 206.009 42.1019H210.65C210.797 42.1019 210.912 41.9836 210.912 41.8335V33.007C210.912 32.8887 211.05 32.8296 211.134 32.907C212.66 34.3629 214.679 35.2137 216.991 35.2137C222.436 35.2137 226.682 30.6958 226.682 24.8267C226.682 18.9576 222.431 14.4397 216.991 14.4397ZM216.113 30.6548C213.015 30.6548 210.668 28.1298 210.668 24.7903C210.668 21.4508 213.011 18.9257 216.113 18.9257C219.214 18.9257 221.553 21.4098 221.553 24.7903C221.553 28.1707 219.245 30.6548 216.108 30.6548H216.113Z",
  ie = {
    height: 44,
    baseline: 34,
    gap: 10.482,
    paddingLeft: 3.568,
    paddingRight: 0.318,
    logoLeft: 144.642,
    logoWidth: 82.036,
    logoBottom: 35.05,
    logoTop: 7.56,
  },
  qt = '"GT Standard M Semibold", "Noto Sans JP", sans-serif',
  Ao = 600,
  Xo = 0.705,
  Io = -0.03,
  _o = /[\u3000-\u30ff\u4e00-\u9fff\uff00-\uffef]/,
  Ro = 400,
  Wo = 0.96,
  Oo = 0.38,
  zo = 0.04;
let $o;
const eo = (h = 16) => `${Ao} ${h}px ${qt}`;
function Bo(h, { before: i, after: M }, S, te) {
  const W = S / ie.height,
    L = (ie.baseline - ie.height / 2) * W,
    N = (ie.logoBottom - ie.logoTop) * W,
    A = N / Xo,
    _ = N / Wo;
  h.save(), (h.textAlign = "left"), (h.textBaseline = "alphabetic");
  const F = (H) => {
      const J = _o.test(H),
        Ce = J ? `${Ro} ${_}px ${qt}` : eo(A),
        T = J ? "0px" : `${Io * A}px`;
      (h.font = Ce), (h.letterSpacing = T);
      const X = H ? h.measureText(H) : void 0;
      return {
        text: H,
        japanese: J,
        font: Ce,
        letterSpacing: T,
        left: X?.actualBoundingBoxLeft ?? 0,
        width: X ? X.actualBoundingBoxLeft + X.actualBoundingBoxRight : 0,
        y: J ? L - N / 2 + Oo * _ : L,
      };
    },
    e = [F(i), F(M)],
    ae = ie.gap * W,
    we = ie.logoWidth * W,
    Ze =
      (ie.paddingLeft + ie.paddingRight) * W + we + e.reduce((H, J) => H + (J.width ? J.width + ae : 0), 0),
    Oe = Math.min(1, te / Ze);
  h.scale(Oe, Oe);
  const he = h.getTransform(),
    qe = (H) => (he.d ? (Math.round(he.d * H + he.f) - he.f) / he.d : H);
  let ke = -Ze / 2 + ie.paddingLeft * W;
  const xe = (H, J) => {
    if (!H.text) return;
    (h.font = H.font), (h.letterSpacing = H.letterSpacing);
    const Ce = qe(H.y);
    h.fillText(H.text, J + H.left, Ce),
      H.japanese &&
        ((h.lineWidth = zo * _),
        (h.lineJoin = "round"),
        (h.strokeStyle = h.fillStyle),
        h.strokeText(H.text, J + H.left, Ce));
  };
  xe(e[0], ke),
    e[0].width && (ke += e[0].width + ae),
    xe(e[1], ke + we + ae),
    h.translate(ke - ie.logoLeft * W, qe(L) - ie.logoBottom * W),
    h.scale(W, W),
    h.fill(($o ??= new Path2D(Eo))),
    h.restore();
}
const to = { plaza: { width: 1800, height: 1004 } },
  Uo = 2752,
  ne = to.plaza.width,
  I = ne / Uo,
  We = to.plaza.height,
  Yt = 400,
  ee = Yt * I,
  Pt = 0.86 * Yt * I,
  Do = Yt * I,
  Tt = ["plaza", "home", "store"],
  kt = (h) => Tt[(Tt.indexOf(h) + 1) % Tt.length],
  He = {
    plaza: {
      id: "sneakers",
      name: "Pace & Sole",
      kind: "sneakers",
      hue: "#051daa",
      channel: "checkoutOnline",
    },
    home: { id: "ceramics", name: "Kiln & Co.", kind: "ceramics", hue: "#b03400", channel: "checkoutOnline" },
    store: { id: "clothes", name: "Field Supply", kind: "clothing", hue: "#00632e", channel: "cardTerminal" },
  },
  ge = {
    floor: [
      [250, 800],
      [1150, 330],
      [1650, 330],
      [2550, 800],
      [2650, 1480],
      [150, 1480],
    ],
    stops: [
      { x: 960, y: 660, pose: "pockets", flip: !1 },
      { x: 1500, y: 880, pose: "phone", flip: !1 },
      { x: 1980, y: 640, pose: "phone", flip: !0 },
      { x: 1160, y: 1100, pose: "bag", flip: !1 },
      { x: 2060, y: 1180, pose: "pockets", flip: !0 },
      { x: 700, y: 1090, pose: "folded", flip: !1 },
      { x: 1700, y: 560, pose: "back", flip: !0 },
    ],
    exit: { x: 380, y: 1700 },
    trees: [
      {
        depth: 910,
        outline: [
          523, 467, 494, 477, 480, 489, 465, 521, 441, 533, 424, 550, 413, 585, 415, 615, 425, 636, 423, 688,
          435, 717, 468, 747, 519, 757, 381, 838, 377, 910, 544, 1010, 568, 1010, 734, 911, 731, 838, 575,
          749, 647, 739, 669, 725, 685, 704, 693, 679, 687, 626, 695, 598, 690, 544, 676, 521, 653, 503, 596,
          494, 578, 477, 549, 467,
        ],
        planter: [341, 910, 569, 791, 770, 911, 542, 1030],
      },
      {
        depth: 1414,
        outline: [
          1446, 972, 1425, 981, 1408, 1e3, 1375, 1007, 1351, 1028, 1343, 1050, 1349, 1098, 1334, 1116, 1322,
          1152, 1326, 1198, 1351, 1234, 1386, 1251, 1431, 1253, 1280, 1342, 1276, 1415, 1453, 1518, 1469,
          1518, 1641, 1414, 1636, 1341, 1477, 1251, 1530, 1246, 1557, 1236, 1582, 1211, 1594, 1176, 1592,
          1135, 1573, 1101, 1568, 1053, 1550, 1034, 1523, 1026, 1512, 992, 1479, 972,
        ],
        planter: [1240, 1415, 1465, 1290, 1678, 1414, 1678, 1700, 1240, 1700],
      },
      {
        depth: 410,
        outline: [
          1259, 11, 1225, 26, 1210, 45, 1204, 65, 1180, 84, 1176, 128, 1163, 159, 1163, 188, 1172, 213, 1190,
          232, 1212, 242, 1246, 244, 1260, 255, 1118, 339, 1114, 409, 1283, 505, 1299, 505, 1458, 411, 1460,
          394, 1456, 339, 1312, 254, 1327, 242, 1373, 237, 1397, 218, 1409, 190, 1409, 156, 1393, 125, 1396,
          88, 1385, 62, 1361, 45, 1334, 42, 1313, 20, 1287, 11,
        ],
        planter: [1080, 409, 1290, 296, 1492, 411, 1282, 524],
      },
    ],
  },
  No = { cap: { x: 997, y: 898 }, ana: { x: 740, y: 1065 }, walt: { x: 711, y: 1125 } },
  ct = { entry: { x: 1450, y: 1700 }, counter: { x: 1784, y: 850 } },
  Fo = { plaza: Co, store: ko, "home-cap": To, "home-ana": Po, "home-walt": Ho },
  jt = (h, i) => {
    const M = new URL(Fo[h]);
    return i || M.searchParams.set("width", String(Qt)), M.href;
  },
  w = (h, i) => ({ key: h, value: i }),
  Go = (h) => h.traits.map((i) => `${i.key} ${i.value}`).join(", "),
  Pe = w("Pays with", "Shop Pay"),
  ce = {
    cap: {
      name: "Sam",
      at: {
        clothes: {
          traits: [
            w("Size", "M"),
            w("Fit", "Relaxed"),
            w("Likes", "Linen, caps"),
            w("Last bought", "Trail runners"),
            Pe,
          ],
          values: [0.72, 0.58, 0.9, 0.66, 0.84],
          ready: "M",
          order: { item: "Linen tee", detail: "Size M", price: 38 },
          seed: 0,
        },
        sneakers: {
          traits: [
            w("Shoe size", "US 9"),
            w("Width", "Regular"),
            w("Wears", "Runners"),
            w("Last bought", "Trail runners"),
            Pe,
          ],
          values: [0.9, 0.55, 0.78, 0.7, 0.84],
          ready: "US 9",
          order: { item: "Trail runners", detail: "Size US 9", price: 140 },
          seed: 0,
        },
        ceramics: {
          traits: [
            w("Glaze", "Matte sage"),
            w("Prefers", "Stoneware"),
            w("Set", "For two"),
            w("Last bought", "Mug pair"),
            Pe,
          ],
          values: [0.62, 0.8, 0.5, 0.86, 0.84],
          ready: "Matte sage",
          order: { item: "Mug pair", detail: "Matte sage", price: 48 },
          seed: 0,
        },
      },
    },
    ana: {
      name: "Ana",
      at: {
        clothes: {
          traits: [
            w("Size", "S"),
            w("Fit", "Wide leg"),
            w("Likes", "Knitwear"),
            w("Last bought", "Pasta bowls"),
            Pe,
          ],
          values: [0.6, 0.86, 0.7, 0.92, 0.78],
          ready: "S",
          order: { item: "Wool cardigan", detail: "Size S", price: 120 },
          seed: 0,
        },
        sneakers: {
          traits: [
            w("Shoe size", "US 7"),
            w("Width", "Narrow"),
            w("Wears", "Court shoes"),
            w("Last bought", "White low-tops"),
            Pe,
          ],
          values: [0.84, 0.5, 0.72, 0.9, 0.78],
          ready: "US 7",
          order: { item: "White low-tops", detail: "Size US 7", price: 95 },
          seed: 0,
        },
        ceramics: {
          traits: [
            w("Glaze", "Speckled cream"),
            w("Prefers", "Porcelain"),
            w("Set", "For four"),
            w("Last bought", "Pasta bowls"),
            Pe,
          ],
          values: [0.78, 0.6, 0.86, 0.66, 0.78],
          ready: "Speckled cream",
          order: { item: "Pasta bowls ×4", detail: "Speckled cream", price: 112 },
          seed: 0,
        },
      },
    },
    walt: {
      name: "Walt",
      at: {
        clothes: {
          traits: [
            w("Size", "L"),
            w("Fit", "Regular"),
            w("Likes", "Workwear"),
            w("Last bought", "Serving bowl"),
            Pe,
          ],
          values: [0.84, 0.66, 0.62, 0.5, 0.9],
          ready: "L",
          order: { item: "Chore jacket", detail: "Size L", price: 165 },
          seed: 0,
        },
        sneakers: {
          traits: [
            w("Shoe size", "UK 10"),
            w("Width", "Wide"),
            w("Wears", "Leather"),
            w("Last bought", "Desert boots"),
            Pe,
          ],
          values: [0.7, 0.9, 0.6, 0.76, 0.9],
          ready: "UK 10",
          order: { item: "Desert boots", detail: "Size UK 10", price: 180 },
          seed: 0,
        },
        ceramics: {
          traits: [
            w("Glaze", "Glossy blue"),
            w("Prefers", "Stoneware"),
            w("Set", "For six"),
            w("Last bought", "Serving bowl"),
            Pe,
          ],
          values: [0.66, 0.74, 0.92, 0.58, 0.9],
          ready: "Glossy blue",
          order: { item: "Serving bowl", detail: "Glossy blue", price: 74 },
          seed: 0,
        },
      },
    },
  },
  $ = (h, i, M) => Math.max(i, Math.min(M, h)),
  je = (h) => (h < 0.5 ? 4 * h * h * h : 1 - (-2 * h + 2) ** 3 / 2),
  Te = (h, i = 300) => `${i} ${h}px "Sohne Mono", monospace`,
  j = { label: 7.5, value: 9, title: 9 },
  E = 8,
  Zt = 16,
  Ct = (h) => h.map(([i, M]) => [i * I, M * I]),
  Vo = Ct(ge.floor),
  Kt = (h) => Array.from({ length: h.length / 2 }, (i, M) => [h[M * 2], h[M * 2 + 1]]),
  oo = ge.trees
    .map((h) => ({ depth: h.depth * I, outline: Ct(Kt(h.outline)), planter: Ct(Kt(h.planter)) }))
    .sort((h, i) => h.depth - i.depth);
function no(h, i, M) {
  let S = !1;
  for (let te = 0, W = h.length - 1; te < h.length; W = te++) {
    const [L, N] = h[te],
      [A, _] = h[W];
    N > M != _ > M && i < ((A - L) * (M - N)) / (_ - N) + L && (S = !S);
  }
  return S;
}
function jo(h, i, M) {
  return no(h, i, M) ? { x: i, y: M } : ao(h, i, M);
}
function Jt(h, i) {
  for (const M of oo) if (no(M.planter, h, i)) return ao(M.planter, h, i);
  return { x: h, y: i };
}
function ao(h, i, M) {
  let S = { x: i, y: M, d: 1 / 0 };
  for (let te = 0, W = h.length - 1; te < h.length; W = te++) {
    const [L, N] = h[W],
      [A, _] = h[te],
      F = $(((i - L) * (A - L) + (M - N) * (_ - N)) / ((A - L) ** 2 + (_ - N) ** 2), 0, 1),
      e = L + (A - L) * F,
      ae = N + (_ - N) * F,
      we = Math.hypot(i - e, M - ae);
    we < S.d && (S = { x: e, y: ae, d: we });
  }
  return { x: S.x, y: S.y };
}
function en(h, i = Gt) {
  const M = new AbortController(),
    { signal: S } = M,
    te = matchMedia("(prefers-reduced-motion: reduce)"),
    W = i.buyWithShop === Gt.buyWithShop,
    L = document.createElement("section");
  (L.className = "crowd crowd--mono room"),
    (L.innerHTML = `
    <div class="crowd__stage"><canvas class="crowd__canvas" tabindex="0"
      role="application"></canvas>
      <button class="room__go" type="button" hidden></button></div>
    <span class="crowd__status" aria-live="polite"></span>`),
    h.append(L);
  const N = L.querySelector(".crowd__stage"),
    A = L.querySelector(".crowd__canvas");
  A.setAttribute("aria-label", i.description);
  const _ = L.querySelector(".room__go"),
    F = L.querySelector(".crowd__status"),
    e = A.getContext("2d");
  let ae = !1,
    we = !1,
    Ze = !1;
  const Oe = {},
    he = new Map(),
    qe = new Set();
  function ke(t, o = !1) {
    o && qe.delete(t) && he.delete(t);
    let a = he.get(t);
    if (!a) {
      const n = new Image();
      (n.crossOrigin = "anonymous"),
        (Oe[t] = n),
        (n.src = jt(t, Ze)),
        (a = n.decode().then(() => (S.aborted || oe(), n))),
        he.set(t, a),
        a.catch(() => qe.add(t));
    }
    return a;
  }
  ke("plaza");
  const xe = new Image();
  xe.crossOrigin = "anonymous";
  let H = xe,
    J;
  function Ce(t) {
    const o = document.createElement("canvas");
    (o.width = t.naturalWidth), (o.height = t.naturalHeight);
    const a = o.getContext("2d");
    a.drawImage(t, 0, 0),
      (a.globalCompositeOperation = "source-in"),
      (a.fillStyle = "rgb(8, 14, 60)"),
      a.fillRect(0, 0, o.width, o.height),
      (H = t),
      (J = o),
      oe();
  }
  xe.addEventListener(
    "load",
    () => {
      H === xe && Ce(xe);
    },
    { signal: S },
  ),
    (xe.src = So);
  let T = 243,
    X = 188,
    K = 1;
  function Lt() {
    if (
      ((T = Math.max(1, N.clientWidth)),
      (X = Math.max(1, N.clientHeight)),
      (K = Math.min(window.devicePixelRatio || 1, 2)),
      (A.width = Math.round(T * K)),
      (A.height = Math.round(X * K)),
      we && pt(),
      !ae || !Ke)
    )
      return oe();
    ze?.(), yt(ht);
  }
  function pt() {
    if (!we) {
      if (((we = !0), !W)) {
        const { before: a, after: n } = i.buyWithShopParts;
        document.fonts.load(eo(), a + n).then(
          () => {
            S.aborted || oe();
          },
          () => {},
        );
      }
      const o = new Image();
      (o.crossOrigin = "anonymous"),
        (o.src = vo),
        o.decode().then(
          () => {
            S.aborted || Ce(o);
          },
          () => {},
        );
    }
    const t = ne * Math.max(T / ne, X / We) * K;
    if (!(Ze || t <= Qt)) {
      Ze = !0;
      for (const o of he.keys()) {
        const a = new Image();
        (a.crossOrigin = "anonymous"),
          (a.src = jt(o, !0)),
          a.decode().then(
            () => {
              S.aborted || ((Oe[o] = a), oe());
            },
            () => {},
          );
      }
    }
  }
  const Ye = Vt.map((t, o) => {
    const a = [0, 2, 3][o % 3],
      n = ge.stops[a];
    return {
      i: o,
      id: t.id,
      x: n.x * I,
      y: n.y * I,
      vx: 0,
      vy: -1,
      stop: a,
      from: a,
      walking: !1,
      flip: n.flip,
      phase: Math.random(),
      until: 0.8 + o * 1.3,
      pose: n.pose,
      mode: "browse",
      alpha: 1,
      greetAt: -99,
      speed: 0,
      faceDown: !0,
      faceRight: n.flip,
    };
  });
  let x = "plaza",
    re,
    P,
    k = 0,
    ht = performance.now(),
    ze,
    Ke = !0,
    gt = 0,
    u,
    fe = 0,
    be = 0,
    Le = 0,
    $e = !1,
    de = -99,
    Ee;
  const ro = 0.9;
  let G;
  const Et = (t, o) => {
      if (!G) return;
      const a = Math.cos(-G.rot),
        n = Math.sin(-G.rot),
        r = ((t - G.cx) * a - (o - G.cy) * n) / G.k + G.w / 2,
        l = ((t - G.cx) * n + (o - G.cy) * a) / G.k + G.h / 2,
        c = G.button;
      return c && r >= c.x - 3 && r <= c.x + c.w + 3 && l >= c.y - 3 && l <= c.y + c.h + 5
        ? "button"
        : r >= 0 && r <= G.w && l >= 0 && l <= G.h
          ? "phone"
          : void 0;
    },
    Be = new Image();
  (Be.crossOrigin = "anonymous"), Be.addEventListener("load", oe, { signal: S });
  const At = new Map(),
    et = (t) => {
      const o = ce[t.id].at[He[x].id];
      let a = At.get(o);
      return (
        a ||
          ((a = {
            ...o,
            traits: o.traits.map(({ key: n, value: r }) => ({
              key: i.profileValue(n),
              value: i.profileValue(r),
            })),
            ready: i.profileValue(o.ready),
            order: {
              ...o.order,
              item: i.profileValue(o.order.item),
              detail: i.profileValue(o.order.detail),
              price: i.price(o.order.price),
            },
          }),
          At.set(o, a)),
        a
      );
    },
    wt = () => x === "store" || (x === "plaza" && !!u && u.x > ne / 2);
  let Se, B, le, ue, Z;
  const Xt = 0.5,
    Ue = { x: ne * 0.5, y: We * 0.56, z: 1 };
  let xt = 0;
  const ft = () => (x === "plaza" ? Ye.filter((t) => t.alpha > 0.01) : re ? [re] : []),
    It = () => ft().sort((t, o) => Math.abs(t.x - ne / 2) - Math.abs(o.x - ne / 2))[0],
    _t = (t) => Oe[t === "home" ? `home-${re?.id ?? "cap"}` : t],
    dt = () => _t(x),
    so = (t, o) => (t === "plaza" ? i.plaza : t === "home" ? i.homeOf(o) : i.inStore(He.store.name)),
    Rt = () => H.complete && H.naturalWidth > 0 && dt().complete && dt().naturalWidth > 0,
    tt = () => {
      const o = Math.max(T / ne, X / We) * Ue.z,
        a = T / 2 / o,
        n = X / 2 / o,
        r = $(Ue.x, a, ne - a),
        l = $(Ue.y, n, We - n);
      return { s: o, ox: T / 2 - r * o, oy: X / 2 - l * o };
    };
  function io(t) {
    const o = ge.stops,
      a = new Set(Ye.filter((l) => l !== t).map((l) => l.stop));
    let n = t.stop,
      r = 0;
    for (; (n === t.stop || n === t.from || a.has(n)) && r++ < 40; ) n = Math.floor(Math.random() * o.length);
    (t.from = t.stop), (t.stop = n), (t.walking = !0);
  }
  function lo(t) {
    const o = Vt[t.i];
    if (u === t && be > 0.05) {
      const a = k - fe,
        n = a >= Le,
        r =
          x === "home"
            ? n
              ? "sit-idle"
              : "sit-phone"
            : x === "store"
              ? n
                ? "paid"
                : "tap"
              : a < Le
                ? "phone"
                : a < Le + 1.4
                  ? "wave"
                  : "pockets";
      return { f: o.poses[r] ?? o.poses.pockets, flip: !1 };
    }
    if (t.walking) {
      const a = t.faceDown ? o.toward : o.away;
      return { f: a[Math.floor(t.phase * a.length) % a.length], flip: t.faceRight };
    }
    return { f: o.poses[t.pose] ?? o.poses.pockets, flip: t.flip };
  }
  function bt(t, o, a, n, r, l, c = !1) {
    const s = o - t.x,
      m = a - t.y,
      p = Math.hypot(s, m);
    if (c ? p < l * 3 : p < l && t.speed < r * 0.15) return c || (t.speed = 0), !0;
    if (p > 0.001) {
      const Y = 1 - Math.exp(-n * 7);
      (t.vx += (s / p - t.vx) * Y), (t.vy += (m / p - t.vy) * Y);
    }
    const d = c ? r : p < l ? 0 : Math.min(r, Math.max(r * 0.3, p * 2.6));
    t.speed += (d - t.speed) * (1 - Math.exp(-n * (d > t.speed ? 4.5 : 8)));
    const g = Math.hypot(t.vx, t.vy) || 1,
      v = Math.min(p, t.speed * n);
    (t.x += (t.vx / g) * v), (t.y += (t.vy / g) * v), (t.phase = (t.phase + v / Do) % 1);
    const R = t.vx / g,
      C = t.vy / g;
    return (
      C > 0.35 ? (t.faceDown = !0) : C < -0.35 && (t.faceDown = !1),
      R > 0.3 ? (t.faceRight = !0) : R < -0.3 && (t.faceRight = !1),
      (t.walking = !0),
      !1
    );
  }
  function co(t, o, a) {
    if (u === t) {
      t.walking = !1;
      return;
    }
    const n = a ? 0 : 1;
    if (t.mode === "seated" || t.mode === "counter") {
      t.walking = !1;
      return;
    }
    if (t.mode === "exit") {
      const s = x === "store" ? ct.entry : ge.exit;
      bt(t, s.x * I, s.y * I, o * n, Pt * 1.15, 4, !0),
        !P && Math.hypot(s.x * I - t.x, s.y * I - t.y) < ee * 0.9 && (P = { to: kt(x), t: 0 });
      return;
    }
    if (t.mode === "enter") {
      (t.alpha = Math.min(1, t.alpha + o * 2.2)),
        bt(t, ct.counter.x * I, ct.counter.y * I, o * n, Pt, 4) &&
          ((t.mode = "counter"),
          (t.walking = !1),
          (t.pose = "tap"),
          (t.flip = !1),
          (t.greetAt = k),
          window.setTimeout(() => {
            !S.aborted && x === "store" && re === t && !u && De(t);
          }, 1400));
      return;
    }
    if (Se === t && B !== t) {
      t.walking && ((t.walking = !1), (t.pose = "pockets"), (t.flip = t.faceRight)),
        (t.until = Math.max(t.until, k + 0.8));
      return;
    }
    const r = B === t && !!ue,
      l = r ? ue : { x: ge.stops[t.stop].x * I, y: ge.stops[t.stop].y * I },
      c = t.walking || !r || Math.hypot(l.x - t.x, l.y - t.y) > ee * 0.12;
    if ((r || t.walking) && c) {
      if (bt(t, l.x, l.y, o * n, Pt * (r ? 1.35 : 1), r ? 6 : 2)) {
        t.walking = !1;
        const s = ge.stops[t.stop];
        (t.pose = r ? "pockets" : s.pose),
          (t.flip = r ? t.faceRight : s.flip),
          (t.until = k + (r ? 1.2 : 2.2 + Math.random() * 2.4));
      }
    } else k >= t.until && !a && io(t);
  }
  function ho() {
    const t = ee * 0.26,
      o = ee * 0.12;
    for (const a of Ye)
      for (const n of Ye) {
        if (a.i >= n.i || x !== "plaza" || a.mode !== "browse" || n.mode !== "browse") continue;
        const r = (n.x - a.x) / t,
          l = (n.y - a.y) / o,
          c = Math.hypot(r, l);
        if (c >= 1 || c < 1e-4) continue;
        const s = (1 - c) * 0.5,
          m = r / c,
          p = l / c;
        u !== a && ((a.x -= m * s * t * 0.5), (a.y -= p * s * o * 0.5)),
          u !== n && ((n.x += m * s * t * 0.5), (n.y += p * s * o * 0.5));
      }
  }
  function Wt(t, o, a, n, r, l, c) {
    e.save(),
      c
        ? e.setTransform(K * l, 0, K * l * c.c, K * l * c.d, K * n, K * r)
        : e.setTransform(K * l * (a ? -1 : 1), 0, 0, K * l, K * n, K * r),
      c && a && e.transform(-1, 0, 0, 1, 0, 0);
    const s = H.naturalWidth / Yo,
      m = H.naturalHeight / Lo;
    e.drawImage(t, o.x * s, o.y * m, o.w * s, o.h * m, -o.anchorX, -o.anchorY, o.w, o.h), e.restore();
  }
  function Ot(t, o, a, n) {
    const r = a + t.x * o,
      l = n + t.y * o,
      { f: c, flip: s } = lo(t),
      m = (ee * o) / c.refH,
      p = x === "home";
    (e.globalAlpha = t.alpha),
      J &&
        !p &&
        ((e.globalAlpha = 0.28 * t.alpha),
        Wt(J, c, s, r, l, m, { c: 0.62, d: 0.32 }),
        (e.globalAlpha = t.alpha)),
      !u && !P && ot(t) && (Se === t || (B === t && le)) && yo(t, r, l, o, p),
      ut.set(t, { x: r + (c.w / 2 - c.anchorX) * m * (s ? -1 : 1) * (p ? 0.75 : 0), y: l - c.anchorY * m }),
      Wt(H, c, s, r, l, m),
      (e.globalAlpha = 1);
  }
  function fo(t, o, a, n) {
    e.save(), e.beginPath();
    for (const [r, l] of t.outline) e.lineTo(a + r * o, n + l * o);
    e.closePath(), e.clip(), e.drawImage(dt(), a, n, ne * o, We * o), e.restore();
  }
  const ut = new Map();
  function uo(t, o, a) {
    const n = Se === t,
      r = Math.max(E, a - 10);
    if (
      (e.save(),
      (e.globalAlpha = t.alpha),
      (e.strokeStyle = e.fillStyle = "#fff"),
      (e.lineWidth = 0.75),
      e.beginPath(),
      e.arc(o, r, n ? 2.1 : 1.6, 0, Math.PI * 2),
      e.fill(),
      n)
    ) {
      e.beginPath(),
        e.arc(o, r, 4.5, 0, Math.PI * 2),
        e.stroke(),
        (e.font = Te(j.label)),
        (e.textBaseline = "middle");
      const l = ce[t.id].name,
        c = e.measureText(l).width,
        s = o + 8 + c < T - E;
      (e.textAlign = s ? "left" : "right"),
        (e.shadowColor = "rgba(1, 4, 25, 0.55)"),
        (e.shadowBlur = 3),
        e.fillText(l, s ? o + 8 : o - 8, r + 0.5);
    } else {
      const c = te.matches ? 0.4 : ((k + t.i * 0.87) % 2.6) / 2.6;
      (e.globalAlpha = t.alpha * 0.9 * (1 - c) ** 1.6),
        e.beginPath(),
        e.arc(o, r, 1.6 + 6 * je(c), 0, Math.PI * 2),
        e.stroke();
    }
    e.restore();
  }
  const ot = (t) => t.mode === "browse" || t.mode === "seated" || t.mode === "counter";
  function yo(t, o, a, n, r) {
    const l = ee * n * (r ? 0.26 : 0.2),
      c = ee * n * (r ? 0.085 : 0.07),
      s = a - 1 - (r ? ee * n * 0.02 : 0),
      m = B === t && !!le;
    if ((e.save(), (e.globalAlpha = t.alpha), (e.strokeStyle = "#fff"), (e.lineWidth = 1), Se === t || m))
      if (
        ((e.fillStyle = "#fff"),
        e.beginPath(),
        e.ellipse(o, s, l, c, 0, 0, Math.PI * 2),
        Se === t && ((e.globalAlpha = t.alpha * 0.28), e.fill()),
        (e.globalAlpha = t.alpha),
        (e.lineWidth = 1.25),
        Z?.p === t)
      ) {
        const p = je($((k - Z.at) / Xt, 0, 1)),
          d = Math.PI / 2,
          g = d + p * Math.PI * 2;
        e.beginPath(),
          e.ellipse(o, s, l, c, 0, d, g),
          e.stroke(),
          e.beginPath(),
          e.arc(o + Math.cos(g) * l, s + Math.sin(g) * c, 1.6, 0, Math.PI * 2),
          e.fill();
      } else {
        e.stroke();
        for (const p of [-1, 1]) e.beginPath(), e.arc(o + p * l, s, 1.6, 0, Math.PI * 2), e.fill();
      }
    e.restore();
  }
  function zt(t, o, a, n, r, l = j.label) {
    if (r <= 0.01) return;
    e.save(), (e.globalAlpha = r), (e.font = Te(l)), (e.textBaseline = "middle");
    const c = e.measureText(t).width + 14,
      s = Zt,
      m = $(n === "center" ? o - c / 2 : n === "right" ? o - c : o, E, T - E - c);
    (e.fillStyle = "#cecece"),
      e.beginPath(),
      e.roundRect(m, a - s / 2, c, s, s / 2),
      e.fill(),
      (e.fillStyle = "#000"),
      (e.textAlign = "left"),
      e.fillText(t, m + 7, a + 0.5),
      e.restore();
  }
  const mo = () => (x === "home" ? 0.34 : 0.55);
  function yt(t) {
    if (((ze = void 0), !ae && !Rt())) return;
    const o = ae ? Math.min(0.05, Math.max(0, (t - ht) / 1e3)) : 0;
    ht = t;
    const a = te.matches;
    if (
      ((k += o),
      Ee && !u && !P && (Se = St(Ee.x, Ee.y)),
      Z && (Se !== Z.p || u || Z.p.mode !== "browse") && (Z = void 0),
      Z &&
        k - Z.at >= Xt &&
        (B && B !== Z.p && (B.until = k + 0.8),
        (B = Z.p),
        (le = { x: B.x, y: B.y }),
        (ue = { ...le }),
        (Z = void 0)),
      le)
    ) {
      ue || (ue = { ...le });
      const f = a ? 1 : 1 - Math.exp(-o * 6);
      (ue.x += (le.x - ue.x) * f), (ue.y += (le.y - ue.y) * f);
    } else ue = void 0;
    for (const f of x === "plaza" ? Ye : re ? [re] : []) co(f, o, a);
    if ((ho(), x === "plaza"))
      for (const f of Ye) (f.mode === "browse" || f.mode === "exit") && Object.assign(f, Jt(f.x, f.y));
    if (P) {
      const f = P.t;
      (P.t = Math.min(1, P.t + o * (a ? 6 : 1.4))),
        f < 0.5 && P.t >= 0.5 && (_t(P.to).complete ? po(P.to) : (P.t = f)),
        P.t >= 1 && (P = void 0);
    }
    be = $(be + (u ? o : -o) * (a ? 8 : 1.6), 0, 1);
    const n = je(be),
      r = u,
      l = r ? r.y - ee * mo() : 0,
      c = ne * 0.5,
      s = We * 0.56,
      m = $e && (de < 0 || k - de < 0.6);
    xt += ((m ? T * 0.19 * (wt() ? -1 : 1) : 0) - xt) * (1 - Math.exp(-o * (a ? 60 : 5)));
    const p = Math.max(T / ne, X / We) * Ue.z;
    if (
      ((Ue.x = c + ((r ? r.x + xt / p : c) - c) * n),
      (Ue.y = s + ((r ? l : s) - s) * n),
      (Ue.z = 1 + 0.75 * n),
      e.setTransform(K, 0, 0, K, 0, 0),
      e.clearRect(0, 0, T, X),
      !Rt())
    ) {
      Ke && (ze = Ht(yt));
      return;
    }
    const { s: d, ox: g, oy: v } = tt();
    (e.imageSmoothingQuality = "high"),
      n > 0.001 && (e.filter = `blur(${(1.4 * n).toFixed(2)}px)`),
      e.drawImage(dt(), g, v, ne * d, We * d);
    const R = ft().sort((f, z) => f.y - z.y),
      C = x === "plaza" ? oo : [],
      Y = R[0]?.y ?? 1 / 0;
    let O = 0;
    const Xe = (f) => {
      for (; O < C.length && C[O].depth <= f; O++) C[O].depth > Y && fo(C[O], d, g, v);
    };
    for (const f of R) Xe(f.y), f !== u && Ot(f, d, g, v);
    if ((Xe(1 / 0), (e.filter = "none"), n > 0.001)) {
      e.save(),
        (e.globalCompositeOperation = "saturation"),
        (e.fillStyle = `rgba(128, 128, 128, ${0.7 * n})`),
        e.fillRect(0, 0, T, X),
        (e.globalCompositeOperation = "source-over");
      const f = "1, 4, 25";
      (e.fillStyle = `rgba(${f}, ${0.58 * n})`), e.fillRect(0, 0, T, X);
      const z = e.createLinearGradient(0, 0, T, 0);
      z.addColorStop(0, `rgba(${f}, ${0.5 * n})`),
        z.addColorStop(0.34, `rgba(${f}, 0)`),
        z.addColorStop(0.66, `rgba(${f}, 0)`),
        z.addColorStop(1, `rgba(${f}, ${0.5 * n})`),
        (e.fillStyle = z),
        e.fillRect(0, 0, T, X),
        e.restore();
    }
    if (u) {
      const f = g + u.x * d,
        se = v + u.y * d - ee * d * (x === "home" ? 0.32 : 0.52),
        U = Math.min(T, X) * 0.3;
      xo(u, f, se, U, n),
        $t(u, f, se, U, n, "graph"),
        Ot(u, d, g, v),
        $t(u, f, se, U, n, "text"),
        $e && wo(u, f, se, n);
    }
    for (const f of R) {
      const z = k - f.greetAt;
      z > 0 &&
        z < 2.6 &&
        u !== f &&
        zt(
          `Welcome back, ${ce[f.id].name}`,
          g + f.x * d,
          v + (f.y - ee * 1.12) * d,
          "center",
          Math.min(1, z * 4, (2.6 - z) * 3),
        );
    }
    if (!u && !P) for (const f of R) ot(f) && ut.has(f) && uo(f, ut.get(f).x, ut.get(f).y);
    (P || k - gt < 2.2) &&
      zt(so(x, ce[re?.id ?? "cap"].name), E, E + 8, "left", P ? 0 : Math.min(1, (2.2 - (k - gt)) * 2)),
      P && ((e.fillStyle = `rgba(1, 4, 25, ${Math.sin(P.t * Math.PI)})`), e.fillRect(0, 0, T, X)),
      ae || ((ae = !0), L.classList.add("is-ready"));
    const Ie = u && be > 0.9 && k - fe > Le + 1.4 && !P;
    if (((_.hidden = !Ie), Ie && _.dataset.for !== `${u.id}:${x}`)) {
      (_.dataset.for = `${u.id}:${x}`), (_.textContent = i.next);
      const f = ce[u.id].name;
      _.setAttribute(
        "aria-label",
        x === "plaza" ? i.followHome(f) : x === "home" ? i.followTo(f, He.store.name) : i.returnToPlaza,
      );
    }
    const Je =
      !a ||
      (be > 0 && be < 1) ||
      !!P ||
      !!Z ||
      Ye.some((f) => f.walking || f.mode === "exit" || f.mode === "enter");
    Ke && Je && (ze = Ht(yt));
  }
  function po(t) {
    const o = re;
    if (((x = t), (gt = k), (u = void 0), ($e = !1), (G = void 0), !!o))
      if (t === "home") {
        const a = No[o.id];
        Object.assign(o, {
          x: a.x * I,
          y: a.y * I,
          mode: "seated",
          pose: "sit-phone",
          flip: !1,
          walking: !1,
          alpha: 1,
        }),
          (F.textContent = i.atHome(ce[o.id].name));
      } else if (t === "store")
        Object.assign(o, {
          x: ct.entry.x * I,
          y: ct.entry.y * I,
          vx: 0.3,
          vy: -1,
          faceDown: !1,
          faceRight: !0,
          speed: 0,
          mode: "enter",
          alpha: 0,
          walking: !0,
        }),
          (F.textContent = i.walksInto(ce[o.id].name, He.store.name));
      else {
        const a = ge.stops.findIndex((r, l) => !Ye.some((c) => c !== o && c.stop === l)),
          n = ge.stops[Math.max(0, a)];
        Object.assign(o, {
          x: n.x * I,
          y: n.y * I,
          stop: Math.max(0, a),
          mode: "browse",
          pose: n.pose,
          flip: n.flip,
          walking: !1,
          alpha: 1,
          until: k + 1.5,
        }),
          (re = void 0),
          (F.textContent = i.backInPlaza);
      }
  }
  const nt = new Map(),
    go = new Intl.Segmenter(void 0, { granularity: "word" });
  document.fonts.addEventListener("loadingdone", () => nt.clear(), { signal: S });
  function at(t, o, a, n = 1) {
    const r = `${n}|${o}|${a}|${t}`;
    let l = nt.get(r);
    if (l) return l;
    e.font = Te(o);
    const c = e.measureText(t).width * 0.9 > a ? n : 1,
      s = [];
    let m = "",
      p = !1;
    for (const { segment: v, isWordLike: R } of go.segment(t))
      (/\s$/.test(m) || (p && R)) &&
      m.trim() &&
      s.length < c - 1 &&
      e.measureText((m + v).trimEnd()).width > a
        ? (s.push(m.trimEnd()), (m = v.trimStart()))
        : (m += v),
        (p = !!R);
    s.push(m.trimEnd());
    const d = Math.max(...s.map((v) => e.measureText(v).width)),
      g = Math.max(o * 0.85, Math.min(o, (o * a) / d));
    return (
      (l = { lines: s, size: g, width: Math.min(a, (d * g) / o) }),
      nt.size > 64 && nt.clear(),
      nt.set(r, l),
      l
    );
  }
  function wo(t, o, a, n) {
    const r = k - fe,
      l = He[x],
      c = et(t).order,
      s = de > 0 ? k - de : -1,
      m = je($((r - 0.35) / 0.4, 0, 1)),
      p = s > 0 ? je($((s - 0.9) / 0.4, 0, 1)) : 0,
      d = m * (1 - p) * n;
    if (d <= 0.01) {
      G = void 0;
      return;
    }
    const g = "#0f0f0f",
      v = "rgba(15, 15, 15, 0.55)",
      R = "rgba(15, 15, 15, 0.12)",
      C = Math.min(118, T * 0.46),
      Y = 8,
      O = C - Y * 2,
      Xe = 9,
      Ie = at(i[l.channel], j.label, O, 2),
      Je = s > 0 ? at(x === "store" ? i.paidInStore : i.orderConfirmed, j.label, O, Ie.lines.length) : Ie,
      f = at(c.item, j.label + 0.5, O, 2),
      z = (Ie.lines.length - 1) * Xe,
      se = z + (f.lines.length - 1) * Xe,
      U = 122 + se,
      V = Math.min(1, (X - E * 2) / U),
      Q = wt() ? E : T - E - C * V,
      ye = $(a - (U * V) / 2 + (1 - m) * 6, E, X - E - U * V),
      q = 20,
      me = U - Y - q;
    G = {
      cx: Q + (C * V) / 2,
      cy: ye + (U * V) / 2,
      rot: 0,
      k: V,
      w: C,
      h: U,
      button: s < 0 ? { x: Y, y: me, w: C - Y * 2, h: q } : void 0,
    };
    const mt = s < 0 && Ee ? Et(Ee.x, Ee.y) : void 0,
      _e = o + ee * tt().s * (x === "store" ? 0.13 : 0.035),
      Ne = a - ee * tt().s * (x === "home" ? -0.02 : 0.05),
      Re = wt() ? Q + C * V : Q,
      Fe = ye + 30 * V,
      rt = (Re - _e) * 0.55,
      Ge = (y) => {
        const b = 1 - y;
        return [
          b * b * b * _e + 3 * b * b * y * (_e + rt) + 3 * b * y * y * (Re - rt) + y * y * y * Re,
          b * b * b * Ne + 3 * b * b * y * Ne + 3 * b * y * y * Fe + y * y * y * Fe,
        ];
      },
      Qe = $((r - 0.2) / 0.45, 0, 1);
    e.save(),
      (e.globalAlpha = (1 - p) * n),
      (e.strokeStyle = s > 0 ? "#fff" : "rgba(255, 255, 255, 0.85)"),
      (e.lineWidth = 0.75),
      e.beginPath(),
      e.moveTo(_e, Ne);
    for (let y = 1; y <= Math.round(32 * Qe); y++) {
      const [b, Ve] = Ge(y / 32);
      e.lineTo(b, Ve);
    }
    e.stroke(),
      (e.fillStyle = "#fff"),
      e.beginPath(),
      e.arc(_e, Ne, 1.6, 0, Math.PI * 2),
      e.fill(),
      Qe >= 1 && (e.beginPath(), e.arc(Re, Fe, 1.6, 0, Math.PI * 2), e.fill());
    const st = s > 0 ? $((s - 0.15) / 0.75, 0, 1) : 0;
    if (st > 0 && st < 1)
      for (let y = 0; y < 3; y++) {
        const b = je($(st * 1.25 - y * 0.09, 0, 1));
        if (b <= 0 || b >= 1) continue;
        const [Ve, lt] = Ge(1 - b);
        e.beginPath(), e.arc(Ve, lt, y ? 1.1 : 1.6, 0, Math.PI * 2), e.fill();
      }
    e.restore(),
      e.save(),
      (e.globalAlpha = d),
      e.translate(Q, ye),
      e.scale(V, V),
      (e.fillStyle = "rgba(255, 255, 255, 0.94)"),
      e.beginPath(),
      e.roundRect(0, 0, C, U, 3),
      e.fill(),
      (e.textBaseline = "middle");
    const ve = (y, b, Ve, lt, Mt, bo = "left", Ft = O) => {
        (e.font = Te(at(y, lt, Ft).size)), (e.fillStyle = Mt), (e.textAlign = bo), e.fillText(y, b, Ve, Ft);
      },
      it = (y, b, Ve) => {
        (e.font = Te(y.size)),
          (e.fillStyle = Ve),
          (e.textAlign = "left"),
          y.lines.forEach((lt, Mt) => e.fillText(lt, Y, b + Mt * Xe, O));
      },
      D = (y) => {
        (e.fillStyle = R), e.fillRect(Y, y, C - Y * 2, 0.75);
      };
    (e.fillStyle = l.hue),
      e.fillRect(Y, 10, 6, 6),
      ve(l.name, Y + 11, 13.5, j.title, g, "left", O - 11),
      it(Je, 26, v),
      D(34 + z),
      it(f, 44 + z, g),
      ve(c.detail, Y, 54 + se, j.label, v),
      D(62 + se),
      ve(c.price, C - Y, 72 + se, j.label + 0.5, g, "right");
    const pe = at(c.price, j.label + 0.5, O).width;
    ve(i.total, Y, 72 + se, j.label, v, "left", O - pe - 6),
      s < 0 && ve(i.tapToPay, C / 2, me - 8 + Math.sin(r * 4.5) * 1, j.label, "#5a31f4", "center");
    const Me = s > 0 ? 1 - Math.sin($(s / 0.18, 0, 1) * Math.PI) * 0.05 : 1;
    if (
      (e.save(),
      e.translate(C / 2, me + q / 2),
      e.scale(Me, Me),
      (e.fillStyle = mt === "button" ? "#4a24d9" : "#5a31f4"),
      e.beginPath(),
      e.roundRect(-(C - Y * 2) / 2, -q / 2, C - Y * 2, q, 4),
      e.fill(),
      s > 0)
    ) {
      const y = $(s / 0.3, 0, 1);
      (e.strokeStyle = "#fff"),
        (e.lineWidth = 1.4),
        (e.lineCap = "round"),
        (e.lineJoin = "round"),
        e.beginPath(),
        e.moveTo(-15, 0),
        e.lineTo(-15 + 3 * Math.min(1, y * 2), 3 * Math.min(1, y * 2)),
        y > 0.5 && e.lineTo(-12 + 6 * (y - 0.5) * 2, 3 - 6 * (y - 0.5) * 2),
        e.stroke(),
        ve(i.paidBadge, -3, 0.5, j.value, "#fff", "left", O / 2 - 7);
    } else if (!W) e.translate(0, 0.5), (e.fillStyle = "#fff"), Bo(e, i.buyWithShopParts, 9, O - 12);
    else if (Be.complete && Be.naturalWidth) {
      const b = 46.43181818181818;
      e.drawImage(Be, -b / 2, -9 / 2 + 0.5, b, 9);
    } else ve(i.buyWithShop, 0, 0.5, j.value, "#fff", "center", O - 12);
    if ((e.restore(), s < 0)) {
      const y = (r % 1.6) / 1.6,
        b = y * 5;
      (e.strokeStyle = `rgba(90, 49, 244, ${0.55 * (1 - y)})`),
        (e.lineWidth = 1),
        e.beginPath(),
        e.roundRect(Y - b, me - b, C - Y * 2 + b * 2, q + b * 2, 4 + b),
        e.stroke();
    }
    e.restore();
  }
  const Ae = (t) => -Math.PI / 2 + (t * Math.PI * 2) / 5;
  function xo(t, o, a, n, r) {
    const l = k - fe - Le,
      c = et(t).values,
      s = $((l - 0.15) / 0.5, 0, 1) * r;
    if (s <= 0) return;
    const m = (d) => {
      e.beginPath();
      for (let g = 0; g < 5; g++) {
        const v = o + Math.cos(Ae(g)) * d,
          R = a + Math.sin(Ae(g)) * d;
        g ? e.lineTo(v, R) : e.moveTo(v, R);
      }
      e.closePath();
    };
    e.save(),
      (e.lineWidth = 0.75),
      e.setLineDash([1.5, 2.5]),
      (e.strokeStyle = `rgba(255, 255, 255, ${0.55 * s})`),
      m(n * s),
      e.stroke(),
      (e.strokeStyle = `rgba(255, 255, 255, ${0.35 * s})`),
      m(n * 0.55 * s),
      e.stroke();
    for (let d = 0; d < 5; d++)
      e.beginPath(),
        e.moveTo(o, a),
        e.lineTo(o + Math.cos(Ae(d)) * n * s, a + Math.sin(Ae(d)) * n * s),
        e.stroke();
    e.setLineDash([]);
    const p = $((l - 0.4) / 0.5, 0, 1) * r;
    e.beginPath();
    for (let d = 0; d < 5; d++) {
      const g = c[d] * n * p,
        v = o + Math.cos(Ae(d)) * g,
        R = a + Math.sin(Ae(d)) * g;
      d ? e.lineTo(v, R) : e.moveTo(v, R);
    }
    e.closePath(),
      (e.fillStyle = `rgba(255, 255, 255, ${0.14 * p})`),
      e.fill(),
      (e.strokeStyle = `rgba(255, 255, 255, ${0.9 * p})`),
      e.stroke(),
      e.restore();
  }
  function $t(t, o, a, n, r, l) {
    const c = l === "text",
      s = et(t),
      m = ce[t.id].name,
      p = He[x],
      d = k - fe - Le,
      g = (s.seed + Math.floor(Math.max(0, d - 1.2) / 0.95)) % 5,
      v = (Math.max(0, d - 1.2) % 0.95) / 0.95,
      R = "rgba(255, 255, 255, 0.7)",
      C = (U, V, Q, ye, q) => {
        (e.textAlign = q), (e.font = Te(j.label)), (e.fillStyle = R), c && e.fillText(U, Q, ye);
        const me = e.measureText(U).width;
        return (
          (e.font = Te(j.value)),
          (e.fillStyle = "#fff"),
          c && e.fillText(V, Q, ye + 11),
          Math.max(me, e.measureText(V).width)
        );
      };
    e.save(),
      (e.textBaseline = "middle"),
      (e.shadowColor = "rgba(0, 0, 0, 0.45)"),
      (e.shadowBlur = 3),
      (e.globalAlpha = $((d - 0.3) / 0.4, 0, 1) * r);
    const Y = x === "store";
    (e.textAlign = "left"),
      (e.font = Te(j.value)),
      (e.fillStyle = "#fff"),
      c && e.fillText(m, E, E + 4),
      (e.font = Te(j.label)),
      (e.fillStyle = R);
    const O = X < 135,
      Xe = Y ? [i.sameProfile, i.ready(s.ready)] : [i.asStore(p.name), i.knowsThem];
    c &&
      (O ? [Y ? i.ready(s.ready) : i.atStore(p.name)] : Xe).forEach((U, V) =>
        e.fillText(U, E, E + 15 + V * 9),
      );
    const Ie = E + 15 + (O ? 0 : 9) + 6,
      Je = E + 4,
      f = X - E - Zt - 8 - 17,
      z = Math.min(f - 22, Math.max(Math.round((Je + f) / 2 + 2), Ie + 8)),
      se = [
        [T - E, Je, "right"],
        [T - E, z, "right"],
        [T - E, f, "right"],
        [E, f, "left"],
        [E, z, "left"],
      ];
    s.traits.forEach(({ key: U, value: V }, Q) => {
      const ye = $((d - 0.45 - Q * 0.09) / 0.45, 0, 1) * r;
      if (ye <= 0.01) return;
      const q = d > 1.2 && Q === g;
      e.globalAlpha = ye;
      const [me, mt, _e] = se[Q],
        Ne = C(U, V, me, mt, _e);
      if (c) return;
      const Re = _e === "right" ? me - Ne - 6 : me + Ne + 6,
        Fe = mt + 5.5;
      e.shadowBlur = 0;
      const rt = s.values[Q] * n * $((d - 0.4) / 0.5, 0, 1),
        Ge = o + Math.cos(Ae(Q)) * rt,
        Qe = a + Math.sin(Ae(Q)) * rt,
        st = (Re + Ge) / 2,
        ve = Fe,
        it = (D) => {
          const pe = (1 - D) * (1 - D),
            Me = 2 * (1 - D) * D,
            y = D * D;
          return [pe * Re + Me * st + y * Ge, pe * Fe + Me * ve + y * Qe];
        };
      (e.strokeStyle = q ? "#fff" : "rgba(255, 255, 255, 0.55)"),
        (e.lineWidth = q ? 1 : 0.75),
        e.setLineDash(q ? [] : [1.5, 2.5]),
        e.beginPath(),
        e.moveTo(Ge, Qe);
      for (let D = 1; D <= Math.round(24 * ye); D++) {
        const [pe, Me] = it(1 - D / 24);
        e.lineTo(pe, Me);
      }
      if (
        (e.stroke(),
        e.setLineDash([]),
        (e.fillStyle = "#fff"),
        e.beginPath(),
        e.arc(Ge, Qe, 1.6, 0, Math.PI * 2),
        e.fill(),
        e.beginPath(),
        e.arc(Re, Fe, 1.6 + (q && v > 0.75 ? (1 - (v - 0.75) / 0.25) * 1.4 : 0), 0, Math.PI * 2),
        e.fill(),
        q)
      )
        for (let D = 0; D < 3; D++) {
          const pe = je($(v / 0.75 - D * 0.09, 0, 1));
          if (pe <= 0 || pe >= 1) continue;
          const [Me, y] = it(1 - pe);
          e.beginPath(), e.arc(Me, y, D ? 1.1 : 1.6, 0, Math.PI * 2), e.fill();
        }
      e.shadowBlur = 3;
    }),
      e.restore();
  }
  const Bt = (t) => {
      const o = A.getBoundingClientRect();
      return { x: t.clientX - o.left, y: t.clientY - o.top };
    },
    St = (t, o) => {
      const { s: a, ox: n, oy: r } = tt();
      let l,
        c = 1 / 0;
      for (const s of ft()) {
        const m = n + s.x * a,
          p = r + s.y * a,
          d = ee * a;
        if (t > m - d * 0.22 && t < m + d * 0.22 && o > p - d && o < p + 4) {
          const g = Math.abs(t - m) + Math.abs(o - (p - d / 2)) * 0.5;
          g < c && ((c = g), (l = s));
        }
      }
      return l;
    };
  function vt(t) {
    if (!t) return;
    W && !Be.src && (Be.src = Mo);
    const o = kt(x);
    ke(o === "home" ? `home-${t.id}` : o);
  }
  function De(t) {
    if (!(t && (P || !ot(t) || (re && !ot(re))))) {
      if (((u = t), t)) {
        vt(t), (fe = k), (t.walking = !1), ($e = !0), (de = -99), (Le = 1 / 0);
        const o = et(t),
          a = He[x];
        F.textContent = i.phoneCheckout(
          ce[t.id].name,
          i[a.channel],
          a.name,
          o.order.item,
          o.order.detail,
          o.order.price,
        );
      } else F.textContent = x === "plaza" ? i.backToBrowsing : "";
      oe();
    }
  }
  function Ut() {
    if (!u || !$e || de > 0) return;
    (de = k), (Le = de - fe + ro);
    const t = et(u),
      o = He[x];
    (F.textContent = i.paid(ce[u.id].name, o.name, Go(t))), oe();
  }
  A.addEventListener(
    "pointermove",
    (t) => {
      const { x: o, y: a } = Bt(t);
      Ee = { x: o, y: a };
      const n = St(o, a);
      if (
        ((Se = n),
        n && ot(n) && !u && !P && vt(n),
        x === "plaza" && n && n !== B && n.mode === "browse" && !u && t.pointerType === "mouse"
          ? Z?.p !== n && (Z = { p: n, at: k })
          : (Z = void 0),
        x === "plaza" && !n && !u && t.pointerType === "mouse" && !P)
      ) {
        const { s: r, ox: l, oy: c } = tt(),
          s = (o - l) / r,
          m = (a - c) / r;
        (!B || B.mode !== "browse") &&
          (B = ft()
            .filter((d) => d.mode === "browse")
            .sort((d, g) => Math.hypot(d.x - s, d.y - m) - Math.hypot(g.x - s, g.y - m))[0]);
        const p = jo(Vo, s, m);
        le = Jt(p.x, p.y);
      }
      oe();
    },
    { signal: S },
  ),
    A.addEventListener(
      "pointerleave",
      () => {
        (Se = void 0),
          (Ee = void 0),
          (Z = void 0),
          B && le && (B.until = k + 1.4),
          (B = void 0),
          (le = void 0),
          oe();
      },
      { signal: S },
    ),
    A.addEventListener(
      "pointerdown",
      (t) => {
        const { x: o, y: a } = Bt(t);
        if (u && $e && de < 0) {
          const r = Et(o, a);
          if (r === "button") {
            Ut();
            return;
          }
          if (r === "phone") return;
        }
        if (u) {
          De(void 0);
          return;
        }
        const n = St(o, a);
        n && (n.mode === "browse" || n.mode === "seated" || n.mode === "counter") && De(n);
      },
      { signal: S },
    ),
    A.addEventListener("pointerenter", pt, { signal: S }),
    A.addEventListener(
      "focus",
      () => {
        pt(), A.matches(":focus-visible") && vt(u ?? It());
      },
      { signal: S },
    ),
    A.addEventListener(
      "keydown",
      (t) => {
        t.key === "Escape" && u
          ? (t.preventDefault(), De(void 0))
          : (t.key === "Enter" || t.key === " ") &&
            (t.preventDefault(), u && $e && de < 0 ? Ut() : u ? De(void 0) : u || De(It()));
      },
      { signal: S },
    ),
    _.addEventListener(
      "click",
      async () => {
        const t = u;
        if (!t || P || _.disabled) return;
        document.activeElement === _ && A.focus({ preventScroll: !0 });
        const o = x,
          a = fe,
          n = kt(o),
          r = n === "home" ? `home-${t.id}` : n;
        (_.disabled = !0), Oe[r]?.naturalWidth || (F.textContent = i.loadingScene);
        try {
          if ((await ke(r, !0), S.aborted || u !== t || fe !== a)) return;
          De(void 0), (be = Math.min(be, 0.9));
          const l = ce[t.id].name;
          o === "plaza"
            ? ((re = t), (t.mode = "exit"), B === t && (B = void 0), (F.textContent = i.headsHome(l)))
            : o === "home"
              ? ((P = { to: "store", t: 0 }), (F.textContent = i.headsTo(l, He.store.name)))
              : ((t.mode = "exit"), (t.greetAt = -99), (F.textContent = i.headsOut(l))),
            oe();
        } catch {
          !S.aborted && u === t && fe === a && (F.textContent = i.sceneUnavailable);
        } finally {
          S.aborted || (_.disabled = !1);
        }
      },
      { signal: S },
    );
  function oe() {
    ze || !Ke || ((ht = performance.now()), (ze = Ht(yt)));
  }
  const Dt = new ResizeObserver(Lt);
  Dt.observe(N);
  const Nt = new IntersectionObserver(([t]) => {
    (Ke = !!t?.isIntersecting && document.visibilityState === "visible"), Ke && oe();
  });
  return (
    Nt.observe(L),
    te.addEventListener("change", oe, { signal: S }),
    Lt(),
    () => {
      M.abort(), ze?.(), Dt.disconnect(), Nt.disconnect(), L.remove();
    }
  );
}
export { en as mountRoom };
