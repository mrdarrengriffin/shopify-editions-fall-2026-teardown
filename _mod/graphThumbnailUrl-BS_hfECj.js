function s(r) {
  if (!URL.canParse(r)) return r;
  const e = new URL(r);
  return e.hostname !== "cdn.shopify.com"
    ? r
    : (e.searchParams.set("width", "128"),
      e.searchParams.set("height", "128"),
      e.searchParams.delete("crop"),
      e.href);
}
export { s as g };
