import { W as b } from "./surface-Be90gCgo.js";
class y {
  canvasKey = 0;
  active;
  fallbackReason;
  error;
  #e;
  #t = "auto";
  #s;
  constructor(e) {
    this.#s = e;
  }
  get attempt() {
    return this.#t;
  }
  get status() {
    return {
      requested: this.#e,
      active: this.active,
      fallbackReason: this.fallbackReason,
      error: this.error,
    };
  }
  sync(e) {
    return e === this.#e
      ? !1
      : ((this.#e = this.#t = e),
        this.canvasKey++,
        (this.active = this.error = this.fallbackReason = void 0),
        !0);
  }
  mount(e, t) {
    const n = this.#e,
      i = this.#t,
      s = new AbortController();
    e.addEventListener("abort", () => s.abort(), { once: !0, signal: s.signal });
    const c = s.signal;
    let r,
      o = !1;
    const h = (a) => {
      try {
        a?.dispose();
      } catch (l) {
        t.onError?.(l, "BackendSlot.dispose");
      }
    };
    let d = !1;
    const u = () => {
        if (!d) {
          d = !0;
          try {
            t.detach?.();
          } catch (a) {
            t.onError?.(a, "BackendSlot.detach");
          }
          h(r);
        }
      },
      f = (a, l = "BackendSlot.initialize") => {
        if (e.aborted || o) return;
        (o = !0), a instanceof b || t.onError?.(a, l);
        const v = a instanceof Error ? a.message : String(a);
        s.abort(),
          u(),
          (this.active = void 0),
          n === "auto" && i !== "canvas2d"
            ? ((this.fallbackReason = v), (this.#t = "canvas2d"), this.canvasKey++)
            : (this.error = v),
          this.#s();
      },
      p = async () => {
        let a = "BackendSlot.create";
        try {
          if (((r = await t.create(i, c, f)), e.aborted || o)) {
            h(r);
            return;
          }
          (a = "BackendSlot.attach"),
            t.attach?.(r, c, f),
            (this.active = r.kind),
            (this.error = void 0),
            this.#s();
        } catch (l) {
          f(l, a);
        }
      };
    e.addEventListener("abort", u, { once: !0 }), p();
  }
}
class x {
  buffer;
  #e;
  #t = new Float32Array([0, 0, 1, 1, 1, 1, 1, 1]);
  #s = this.#t.subarray(4, 7);
  #a = !1;
  constructor(e) {
    (this.#e = e),
      (this.buffer = e.device.createBuffer({
        label: "graph-viewport",
        size: 32,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
      }));
  }
  get pixelRatio() {
    return this.#t[2];
  }
  resize(e, t, n) {
    const i = Math.max(1, e),
      s = Math.max(1, t),
      c = this.#e.device.limits.maxTextureDimension2D,
      r = Math.min(Math.max(n, 1), c / i, c / s),
      o = Math.max(1, Math.min(c, Math.round(i * r))),
      h = Math.max(1, Math.min(c, Math.round(s * r))),
      d = o / i,
      u = h / s;
    (this.#e.canvas.width = o),
      (this.#e.canvas.height = h),
      this.#e.context.configure({
        device: this.#e.device,
        format: this.#e.format,
        alphaMode: "premultiplied",
        colorSpace: "display-p3",
        toneMapping: { mode: this.#e.hdr ? "extended" : "standard" },
      }),
      (this.#t[0] = i),
      (this.#t[1] = s),
      (this.#t[2] = d),
      (this.#t[3] = u),
      this.#e.device.queue.writeBuffer(this.buffer, 0, this.#t);
  }
  setOutline(e = [1, 1, 1]) {
    e.every((t, n) => this.#s[n] === Math.fround(t)) ||
      (this.#s.set(e), this.#e.device.queue.writeBuffer(this.buffer, 16, this.#t, 4, 4));
  }
  draw(e, t, n) {
    const i = this.#e.device.createCommandEncoder({ label: "graph-render" });
    n?.(i);
    const s = i.beginRenderPass({
      label: "graph-pass",
      colorAttachments: [
        {
          view: this.#e.context.getCurrentTexture().createView(),
          clearValue: { r: e[0] * e[3], g: e[1] * e[3], b: e[2] * e[3], a: e[3] },
          loadOp: "clear",
          storeOp: "store",
        },
      ],
    });
    t(s), s.end(), this.#e.device.queue.submit([i.finish()]);
  }
  dispose() {
    this.#a || ((this.#a = !0), this.buffer.destroy(), this.#e.dispose());
  }
}
export { y as B, x as W };
