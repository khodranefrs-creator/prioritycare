export const locales = ["ar", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ar";

export const localeNames: Record<Locale, string> = {
  ar: "العربية",
  en: "English",
};

export const localeShort: Record<Locale, string> = {
  ar: "ع",
  en: "EN",
};

export type Direction = "rtl" | "ltr";

export const direction: Record<Locale, Direction> = {
  ar: "rtl",
  en: "ltr",
};

export const htmlLang: Record<Locale, string> = {
  ar: "ar-SA",
  en: "en",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDirection(locale: Locale): Direction {
  return direction[locale];
}

/** A bilingual string resolved per locale. */
export type L10n = Record<Locale, string>;

export function pick(value: L10n, locale: Locale): string {
  return value[locale];
}

/** Build a locale-prefixed path, e.g. localePath("ar", "/services/ppf"). */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

export const otherLocale: Record<Locale, Locale> = {
  ar: "en",
  en: "ar",
};
