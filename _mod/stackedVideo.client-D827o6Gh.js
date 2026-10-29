import { n as w } from "./frameLoop-CeLX9Qef.js";
const _ = `#version 300 es
out vec2 uv;
void main() {
  vec2 position = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));
  uv = vec2(position.x, 1.0 - position.y);
  gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
}`,
  x = `#version 300 es
precision highp float;
in vec2 uv;
uniform sampler2D videoTexture;
out vec4 color;
void main() {
  vec3 rgb = texture(videoTexture, vec2(uv.x, uv.y * 0.5)).rgb;
  float alpha = texture(videoTexture, vec2(uv.x, 0.5 + uv.y * 0.5)).r;
  color = vec4(rgb * alpha, alpha);
}`;
class R {
  constructor(e) {
    this.webkit = e;
    const s = this.canvas.getContext("webgl2", {
      alpha: !0,
      premultipliedAlpha: !0,
      preserveDrawingBuffer: e,
    });
    if (!s) throw new Error("Stacked video requires WebGL2");
    this.gl = s;
    try {
      this.initialize();
    } catch (t) {
      throw (this.destroy(), t);
    }
    this.canvas.addEventListener(
      "webglcontextlost",
      (t) => {
        t.preventDefault();
      },
      { signal: this.lifetime.signal },
    ),
      this.canvas.addEventListener(
        "webglcontextrestored",
        () => {
          try {
            this.initialize(), (this.failed = !1);
          } catch {
            this.failed = !0;
          }
        },
        { signal: this.lifetime.signal },
      );
  }
  webkit;
  canvas = document.createElement("canvas");
  gl;
  program = null;
  texture = null;
  lifetime = new AbortController();
  failed = !1;
  consumers = 0;
  initialize() {
    const e = this.gl;
    if (((this.program = e.createProgram()), !this.program))
      throw new Error("Unable to create stacked video program");
    for (const [s, t] of [
      [e.VERTEX_SHADER, _],
      [e.FRAGMENT_SHADER, x],
    ]) {
      const a = e.createShader(s);
      if (!a) throw new Error("Unable to create stacked video shader");
      e.shaderSource(a, t), e.compileShader(a);
      const i = e.getShaderParameter(a, e.COMPILE_STATUS);
      if ((i && e.attachShader(this.program, a), e.deleteShader(a), !i))
        throw new Error("Unable to compile stacked video shader");
    }
    if ((e.linkProgram(this.program), !e.getProgramParameter(this.program, e.LINK_STATUS)))
      throw new Error("Unable to link stacked video program");
    if ((e.useProgram(this.program), (this.texture = e.createTexture()), !this.texture))
      throw new Error("Unable to create stacked video texture");
    e.bindTexture(e.TEXTURE_2D, this.texture),
      e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
      e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
      e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
      e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST),
      e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1),
      e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1);
  }
  draw(e, s) {
    const t = this.gl;
    if (this.failed) throw new Error("Unable to restore stacked video context");
    if (t.isContextLost()) return !1;
    const a = e.videoWidth,
      i = Math.floor(e.videoHeight / 2);
    return !a || !i
      ? !1
      : (this.canvas.width < a && (this.canvas.width = a),
        this.canvas.height < i && (this.canvas.height = i),
        s.canvas.width !== a && (s.canvas.width = a),
        s.canvas.height !== i && (s.canvas.height = i),
        t.viewport(0, 0, a, i),
        t.bindTexture(t.TEXTURE_2D, this.texture),
        t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e),
        t.clearColor(0, 0, 0, 0),
        t.clear(t.COLOR_BUFFER_BIT),
        t.drawArrays(t.TRIANGLE_STRIP, 0, 4),
        this.webkit && t.flush(),
        s.clearRect(0, 0, a, i),
        s.drawImage(this.canvas, 0, this.canvas.height - i, a, i, 0, 0, a, i),
        !0);
  }
  destroy() {
    this.lifetime.abort(),
      this.gl.deleteTexture(this.texture),
      this.gl.deleteProgram(this.program),
      this.gl.getExtension("WEBGL_lose_context")?.loseContext(),
      (this.canvas.width = this.canvas.height = 0);
  }
}
let f;
const A = (r, e, s) => {
  const { signal: t, onFrame: a, onError: i } = s;
  if (t.aborted) return;
  const g = e.getContext("2d", { alpha: !0, desynchronized: !0 });
  if (!g) throw new Error("Stacked video requires a 2D output");
  const l = (f ??= new R(s.webkit));
  l.consumers++;
  let n = !1,
    o,
    m = -1;
  const E =
      typeof r.requestVideoFrameCallback == "function" && typeof r.cancelVideoFrameCallback == "function",
    T = new AbortController(),
    c = () => {
      typeof o == "number" ? r.cancelVideoFrameCallback(o) : o?.(), (o = void 0);
    },
    v = () => {
      n ||
        ((n = !0),
        c(),
        T.abort(),
        (e.width = e.height = 0),
        --l.consumers === 0 && (l.destroy(), f === l && (f = void 0)));
    };
  t.addEventListener("abort", v, { once: !0 });
  const p = () => {
      if (!(n || r.readyState < 2))
        try {
          a(l.draw(r, g));
        } catch {
          v(), i();
        }
    },
    h = () => {
      (o = void 0),
        !(n || r.paused || r.ended) &&
          ((E || r.currentTime !== m) && ((m = r.currentTime), p()),
          n || (o = E ? r.requestVideoFrameCallback(h) : w(h)));
    },
    u = () => {
      c(), p(), !n && !r.paused && !r.ended && (o = E ? r.requestVideoFrameCallback(h) : w(h));
    },
    d = { signal: T.signal };
  r.addEventListener("playing", u, d),
    r.addEventListener("seeked", u, d),
    r.addEventListener("pause", c, d),
    r.addEventListener("ended", c, d),
    u();
};
export { A as renderStackedVideo };
