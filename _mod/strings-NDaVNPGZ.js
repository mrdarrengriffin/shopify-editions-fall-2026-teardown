import { f as t, g as m } from "./formatCopy-Cs7MVtfe.js";
import "./locale-DXEWuBc6.js";
const s = {
  legend: "400M+ shoppers with personalized Shop profiles",
  description:
    "Shoppers in a plaza. Point to walk one about; rest on another to take them over. Click someone, or press Enter, to pay on their phone and see their Shop profile; then follow them home, and to a store. Escape returns.",
  next: "Next",
  loadingScene: "Loading the next scene.",
  sceneUnavailable: "Couldn't load the next scene. Try Next again.",
  followHome: "Follow {name} home",
  followTo: "Follow {name} to {store}",
  returnToPlaza: "Back to the plaza",
  plaza: "The plaza",
  homeOf: "{name}'s place",
  inStore: "{store} · in store",
  checkoutOnline: "Checkout · online",
  cardTerminal: "Card terminal",
  orderConfirmed: "Order confirmed",
  paidInStore: "Paid in store",
  total: "Total",
  tapToPay: "Tap to pay ↓",
  paidBadge: "Paid",
  buyWithShop: "Buy with Shop",
  phoneCheckout: "{name}: {channel} at {store}, {item}, {detail}, {price}. Press {buyWithShop}, or Enter.",
  paid: "Paid with Shop Pay. {name}'s Shop profile at {store}: {traits}. Illustrative.",
  backToBrowsing: "Back to the plaza.",
  headsHome: "{name} heads home.",
  headsTo: "{name} heads to {store}.",
  headsOut: "{name} heads back out.",
  atHome: "{name} is home, on the couch. Click them, or press Enter, to shop from their phone.",
  walksInto: "{name} walks into {store}.",
  backInPlaza: "Back in the plaza.",
  sameProfile: "same Shop profile",
  ready: "{value} ready",
  asStore: "as {store}",
  atStore: "at {store}",
  knowsThem: "knows them",
};
function h(n) {
  const r = n.split(/\bShop\b/);
  return r.length !== 2 ? h(s.buyWithShop) : { before: r[0].trim(), after: r[1].trim() };
}
const u = {
  de: { currency: "EUR", perDollar: 1 },
  es: { currency: "EUR", perDollar: 1 },
  fr: { currency: "EUR", perDollar: 1 },
  it: { currency: "EUR", perDollar: 1 },
  ja: { currency: "JPY", perDollar: 100 },
};
function d(n = "en") {
  const r = m(n),
    o = u[r.split("-")[0].toLowerCase()],
    e = o
      ? new Intl.NumberFormat(r, { style: "currency", currency: o.currency })
      : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }),
    a = o?.perDollar ?? 1;
  return (l) => e.format(l * a).replace("￥", "¥");
}
function S(n, r) {
  const o = { ...s, ...n };
  return {
    ...o,
    price: d(r),
    buyWithShopParts: h(o.buyWithShop),
    followHome: (e) => t(o.followHome, { name: e }),
    followTo: (e, a) => t(o.followTo, { name: e, store: a }),
    homeOf: (e) => t(o.homeOf, { name: e }),
    inStore: (e) => t(o.inStore, { store: e }),
    phoneCheckout: (e, a, l, i, p, c) =>
      t(o.phoneCheckout, {
        name: e,
        channel: a,
        store: l,
        item: i,
        detail: p,
        price: c,
        buyWithShop: o.buyWithShop,
      }),
    paid: (e, a, l) => t(o.paid, { name: e, store: a, traits: l }),
    headsHome: (e) => t(o.headsHome, { name: e }),
    headsTo: (e, a) => t(o.headsTo, { name: e, store: a }),
    headsOut: (e) => t(o.headsOut, { name: e }),
    atHome: (e) => t(o.atHome, { name: e }),
    walksInto: (e, a) => t(o.walksInto, { name: e, store: a }),
    ready: (e) => t(o.ready, { value: e }),
    asStore: (e) => t(o.asStore, { store: e }),
    atStore: (e) => t(o.atStore, { store: e }),
    profileValue: (e) => n?.[e] ?? e,
  };
}
const w = S();
export {
  s as ROOM_COPY,
  w as ROOM_STRINGS,
  d as getPriceFormatter,
  S as getRoomStrings,
  h as splitAroundShop,
};
