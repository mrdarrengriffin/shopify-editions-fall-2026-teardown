class L extends globalThis.Worker {
  constructor(s, a) {
    const l = new Blob([`import ${JSON.stringify(s.href)};`], { type: "text/javascript" });
    super(URL.createObjectURL(l), a);
  }
}
let n,
  v = 0;
const u = new Map(),
  m = () => {
    if (n) return n;
    (n = new L(
      new URL(
        "https://cdn.shopify.com/oxygen-v2/58886/167724/342939/4898937/assets/rive.worker-BJlIl3CJ.js",
        import.meta.url,
      ),
      { type: "module" },
    )),
      n.addEventListener("message", ({ data: s }) => u.get(s.id)?.(s));
    const e = n;
    return (
      e.addEventListener("error", (s) => {
        for (const [a, l] of u) l({ type: "error", id: a, message: s.message || "Rive worker failed" });
        e.terminate(), n === e && (n = void 0);
      }),
      n
    );
  },
  b = (e) => m().postMessage({ type: "prefetch", src: new URL(e, location.href).href }),
  E = ({ canvas: e, pixelRatio: s, onPainted: a, onContextLost: l, onError: M, ...c }) => {
    const r = ++v,
      y = m(),
      i = (t) => y.postMessage(t),
      w = new AbortController();
    let g = !1,
      o = s;
    u.set(r, (t) => {
      t.type === "painted" ? a(t.stateMachine) : t.type === "contextLost" ? l() : M(new Error(t.message));
    });
    const d = e.transferControlToOffscreen();
    (d.width = Math.round(e.clientWidth * o)),
      (d.height = Math.round(e.clientHeight * o)),
      y.postMessage(
        {
          ...c,
          src: new URL(c.src, location.href).href,
          assetsMap:
            c.assetsMap &&
            Object.fromEntries(
              Object.entries(c.assetsMap).map(([t, p]) => [t, new URL(p, location.href).href]),
            ),
          type: "mount",
          id: r,
          canvas: d,
        },
        [d],
      );
    const f = (t) => (p) =>
        i({ type: "pointer", id: r, kind: t, x: p.offsetX * o, y: p.offsetY * o, pointerId: p.pointerId }),
      h = { signal: w.signal, passive: !0 };
    return (
      e.addEventListener("pointerdown", f("pointerDown"), h),
      e.addEventListener("pointermove", f("pointerMove"), h),
      e.addEventListener("pointerup", f("pointerUp"), h),
      e.addEventListener("pointerleave", f("pointerExit"), h),
      {
        get isPlaying() {
          return g;
        },
        play() {
          (g = !0), i({ type: "play", id: r });
        },
        pause() {
          (g = !1), i({ type: "pause", id: r });
        },
        stateMachineInputs: () => [
          {
            name: "mouseOver",
            set value(t) {
              i({ type: "input", id: r, name: "mouseOver", value: t });
            },
          },
        ],
        viewModel: {
          boolean: (t) => ({
            set value(p) {
              i({ type: "viewModel", id: r, name: t, value: p });
            },
          }),
        },
        resizeDrawingSurfaceToCanvas(t = o) {
          (o = t),
            i({
              type: "resize",
              id: r,
              width: Math.round(e.clientWidth * o),
              height: Math.round(e.clientHeight * o),
            });
        },
        cleanup() {
          w.abort(), u.delete(r), i({ type: "unmount", id: r });
        },
      }
    );
  };
export { E as createWorkerRive, b as prefetchWorkerRive };
