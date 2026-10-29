function e() {
  return (
    "requestPaint" in HTMLCanvasElement.prototype &&
    WebGL2RenderingContext.prototype.texElementImage2D?.length !== 6 &&
    "gpu" in navigator &&
    typeof GPUQueue < "u" &&
    ("drawElementImageToTexture" in GPUQueue.prototype || "copyElementImageToTexture" in GPUQueue.prototype)
  );
}
export { e as s };
