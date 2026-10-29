import { d as s } from "./reportError-C6Wenmm6.js";
import "./breadcrumbs-D6XkVKYD.js";
import "./preload-helper-CZudbPKK.js";
var c = 1;
function n(e) {
  try {
    const t = e();
    return t === void 0 ? null : t;
  } catch {
    return null;
  }
}
function a(e) {
  return n(() => window.matchMedia(e).matches);
}
var u = [
  ["tz", () => n(() => Intl.DateTimeFormat().resolvedOptions().timeZone)],
  ["tzo", () => n(() => new Date().getTimezoneOffset())],
  ["langs", () => n(() => JSON.stringify(Array.from(navigator.languages)))],
  ["plat", () => n(() => navigator.platform)],
  ["vnd", () => n(() => navigator.vendor)],
  ["ck", () => n(() => navigator.cookieEnabled)],
  ["pdf", () => n(() => navigator.pdfViewerEnabled ?? null)],
  [
    "uad",
    () =>
      n(() => {
        const e = navigator.userAgentData;
        return e ? JSON.stringify({ brands: e.brands, mobile: e.mobile, platform: e.platform }) : null;
      }),
  ],
  [
    "intl",
    () =>
      n(() => {
        const e = new Intl.NumberFormat().resolvedOptions();
        return JSON.stringify({ locale: e.locale, numberingSystem: e.numberingSystem });
      }),
  ],
  ["mtp", () => n(() => navigator.maxTouchPoints)],
  ["ts", () => n(() => "ontouchstart" in window)],
  ["pf", () => a("(pointer: fine)")],
  ["hov", () => a("(hover: hover)")],
  ["hdr", () => a("(dynamic-range: high)")],
  ["p3", () => a("(color-gamut: p3)")],
];
function g() {
  const e = {};
  for (const [t, i] of u)
    try {
      e[t] = i();
    } catch {
      e[t] = null;
    }
  return { v: c, ts: Date.now(), signals: e };
}
function d(e, t) {
  return {
    schemaId: "dux_website_events/1.8",
    payload: { eventType: "device_signal", pageViewToken: e, extraMetadata: JSON.stringify(t.signals) },
  };
}
var p = (e, t) => {
  if (!e.deviceSignal) return;
  let i = !1;
  const o = g(),
    r = () => {
      if (i || !t.pageViewToken || !e.deviceSignal) return;
      const l = d(t.pageViewToken, o);
      e.deviceSignal(l, { flush: !0 }), (i = !0);
    };
  s([
    ["beforeunload", r, window, !0],
    ["pagehide", r, window, !0],
    ["visibilitychange", r, document, !0],
  ]);
};
export { p as initDeviceSignalTracking };
