const n = {
    default: { language: "EN", country: "US", locale: "en-US", localeSignUp: "en" },
    au: { language: "EN", country: "AU", locale: "en-AU", localeSignUp: "en-AU" },
    ca: { language: "EN", country: "CA", locale: "en-CA", localeSignUp: "en-CA" },
    ie: { language: "EN", country: "IE", locale: "en-IE", localeSignUp: "en-IE" },
    nz: { language: "EN", country: "NZ", locale: "en-NZ", localeSignUp: "en-NZ" },
    uk: { language: "EN", country: "GB", locale: "en-GB", localeSignUp: "en-GB" },
    de: { language: "DE", country: "DE", locale: "de-DE", localeSignUp: "de" },
    "es-es": { language: "ES", country: "ES", locale: "es-ES", localeSignUp: "es-ES" },
    "ca-fr": { language: "FR", country: "CA", locale: "fr-CA", localeSignUp: "fr-CA" },
    fr: { language: "FR", country: "FR", locale: "fr-FR", localeSignUp: "fr" },
    it: { language: "IT", country: "IT", locale: "it-IT", localeSignUp: "it" },
    jp: { language: "JA", country: "JP", locale: "ja-JP", localeSignUp: "ja" },
    br: { language: "PT_BR", country: "BR", locale: "pt-BR", localeSignUp: "pt-BR" },
  },
  o = (a) => {
    const e = a?.toLowerCase();
    if (!(!e || e === "default" || !Object.hasOwn(n, e))) return e;
  },
  g = (a) => o(a) !== void 0,
  u = (a) => {
    const e = o(a);
    return { ...n[e ?? "default"], pathPrefix: e ?? "" };
  },
  r = ({ baseUrl: a, locale: e, path: l, defaultLocale: c = "en" }) => {
    const t = e && e !== c ? `${e}/` : "";
    return `${a}/${t}${l}`;
  };
export { r as a, u as g, g as i };
