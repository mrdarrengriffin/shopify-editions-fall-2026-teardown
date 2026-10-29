const n = (t) =>
  Promise.all(
    [...t.querySelectorAll("img")].map((e) => {
      if (((e.loading = "eager"), !e.complete))
        return new Promise((r) => {
          e.addEventListener("load", () => r(), { once: !0 }),
            e.addEventListener("error", () => r(), { once: !0 });
        });
    }),
  );
export { n as s };
