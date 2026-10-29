// Landing page: every feature as a card, plus how to use the tools.
export default {
  id: 'overview', group: 'Start', title: 'Overview',
  blurb: 'Everything in this lab is Shopify’s production code running from your local mirror. Pick a feature: each page mounts the real module, attaches a debugger to it, and walks you through how it works with the exact source lines.',
  html: `
    <div class="cards" id="ov-cards"></div>
    <h3 class="sub">Using the tools</h3>
    <div class="cards">
      <div class="card"><span class="g">Canvas debugger</span><h4>Layers, overlays, frame scrubber</h4><p>Every 2D draw call is recorded per frame and sorted into layers. Click a layer to hide it in the live widget, alt-click to solo it. Overlays outline clip paths, transforms and sprite rects. <b>Freeze</b> captures a frame; drag the scrubber to rebuild it one draw call at a time.</p></div>
      <div class="card"><span class="g">WebGPU inspector</span><h4>Pipelines, uniforms, shaders</h4><p>Every pipeline, shader module, uniform write and draw call is intercepted. Click a pipeline to skip its draws. Uniforms are decoded with the layouts read from the source. Shader debug views patch the WGSL in memory as it compiles.</p></div>
      <div class="card"><span class="g">Walkthrough</span><h4>Steps with real source</h4><p>Each step sets the debugger to show the relevant layer and opens the exact lines in <code>src-pretty/</code> that do it. Use the arrows or click any step.</p></div>
    </div>`,
  async after(page) {
    const ids = ['site3d', 'rail', 'hero', 'heroScroll', 'plaza', 'surfacing', 'checkpoint', 'sock', 'merchModal', 'globe', 'doorstep', 'cocotte', 'inbox', 'pullback', 'campaign', 'ripple', 'retail', 'sidekick', 'storesBoard', 'stackedVideo', 'rive', 'nav', 'titleSignal', 'crossfade', 'loading', 'smoothScroll', 'consoleArt', 'whole'];
    const box = page.querySelector('#ov-cards');
    for (const id of ids) {
      try { const f = (await import(`./${id}.js`)).default; box.insertAdjacentHTML('beforeend', `<a class="card" href="#${f.id}"><span class="g">${f.group}</span><h4>${f.title}</h4><p>${f.blurb || ''}</p></a>`); } catch { /* not built */ }
    }
  },
};
