// Mount Shopify's real modules from the local mirror, using the page's own hydration props.
export const MOD = {
  mountWidget: './_mod/mountWidget.client-BVGwFRGg.js',
  sock: './_mod/sockScene.client-cCVHhDpv.js',
  roomAssets: './_mod/assets-CA9n78aZ.js',
};

let islandsP;
export function islands() {
  return (islandsP ??= fetch('./shop/').then((r) => r.text()).then((html) => {
    const m = html.match(/<script[^>]*id="rmx-data"[^>]*>([\s\S]*?)<\/script>/);
    return Object.values(JSON.parse(m[1]).h);
  }));
}
export async function stageProps(widget) {
  return (await islands()).find((i) => i.exportName === 'PrototypeStage' && i.props?.visual?.widget === widget)?.props ?? {};
}
export async function islandProps(exportName) {
  return (await islands()).find((i) => i.exportName === exportName)?.props ?? {};
}
export async function fragmentProps(key) {
  try {
    const html = await (await fetch(`https://www.shopify.com/editions/fall2026/widgets/${key}?handle=${key}`)).text();
    const m = html.match(/<script[^>]*id="rmx-data"[^>]*>([\s\S]*?)<\/script>/);
    if (!m) return {};
    const found = Object.values(JSON.parse(m[1]).h).find((i) => i.props?.strings);
    return found?.props ?? {};
  } catch { return {}; }
}
export async function mountReal(key, host, props) {
  const { default: mount } = await import(MOD.mountWidget);
  const ac = new AbortController();
  await mount(key, host, ac.signal, props);
  return ac;
}
