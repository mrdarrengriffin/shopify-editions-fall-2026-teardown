// Lab shell: builds the feature nav and pages from feature modules.
import { tour } from './tools.js';

const FEATURES = [
  'overview', 'site3d', 'rail', 'hero', 'heroScroll', 'plaza', 'surfacing', 'checkpoint', 'sock', 'merchModal',
  'globe', 'doorstep', 'cocotte', 'inbox', 'pullback', 'campaign', 'ripple', 'retail', 'sidekick', 'storesBoard',
  'stackedVideo', 'rive', 'nav', 'titleSignal', 'crossfade', 'loading', 'smoothScroll', 'consoleArt', 'whole',
];
const mods = {};
const nav = document.getElementById('nav'), main = document.getElementById('main');

async function load(id) {
  if (!mods[id]) mods[id] = import(`./features/${id}.js`).then((m) => m.default).catch((e) => ({ id, title: id, group: 'Missing', error: e }));
  return mods[id];
}

const all = (await Promise.all(FEATURES.map(load))).filter((f) => !f.error);
const groups = {};
all.forEach((f) => (groups[f.group || 'Other'] ||= []).push(f));
nav.innerHTML = Object.entries(groups).map(([g, fs]) => `<h2>${g}</h2>${fs.map((f) => `<a href="#${f.id}" data-id="${f.id}">${f.title}${f.needs ? ` <small>${f.needs}</small>` : ''}</a>`).join('')}`).join('');

const pages = {};
async function show(id) {
  const f = all.find((x) => x.id === id) || all[0];
  nav.querySelectorAll('a').forEach((a) => a.toggleAttribute('aria-current', a.dataset.id === f.id));
  Object.values(pages).forEach((p) => (p.hidden = true));
  if (pages[f.id]) { pages[f.id].hidden = false; return; }
  const page = document.createElement('section'); page.className = 'page'; pages[f.id] = page; main.appendChild(page);
  page.innerHTML = `<header class="page-head"><p class="eyebrow">${f.group}</p><h2>${f.title}</h2><p class="blurb">${f.blurb || ''}</p>${f.needs ? `<p class="needs">${f.needsNote || ''}</p>` : ''}</header>
    ${f.mount ? '<div class="bench"><div class="stage-col"></div><div class="side-col"></div></div>' : ''}
    ${f.html || ''}
    ${f.tour ? '<h3 class="sub">Walkthrough</h3><div class="tour-host"></div>' : ''}`;
  if (f.error) { page.insertAdjacentHTML('beforeend', `<p class="bad">${f.error.message}</p>`); return; }
  let ctx = {};
  if (f.mount) {
    const status = document.createElement('p'); status.className = 'status'; status.textContent = 'mounting the real module…';
    page.querySelector('.stage-col').appendChild(status);
    try { ctx = (await f.mount(page.querySelector('.stage-col'), page.querySelector('.side-col'), page)) || {}; status.textContent = f.ready || 'running Shopify’s real code from the local mirror'; }
    catch (e) { status.textContent = 'Failed: ' + e.message; status.classList.add('bad'); console.error(e); }
  }
  if (f.after) await f.after(page, ctx);
  if (f.tour) tour(page.querySelector('.tour-host'), f.tour, ctx);
}
addEventListener('hashchange', () => show(location.hash.slice(1)));
show(location.hash.slice(1) || 'overview');
