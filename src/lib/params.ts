import { locales } from "@/lib/i18n";

export type Locale = "ar" | "en";

/** Params for the `[locale]` segment. */
export function localeParams() {
  return locales.map((locale) => ({ locale }));
}

export type LocaleParams = { locale: Locale };