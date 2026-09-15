import type { Metadata } from "next";
import type { L10n } from "@/lib/i18n";
import { defaultLocale, localePath } from "@/lib/i18n";
import { SITE_NAME, SITE_URL, OG_IMAGE } from "@/lib/site";

export interface LocalizedMetaParams {
  locale: "ar" | "en";
  path?: string;
  title?: L10n;
  description?: L10n | string;
}

function buildAlternates(locale: "ar" | "en", path: string) {
  const base = SITE_URL.replace(/\/$/, "");
  const url = (l: "ar" | "en") => `${base}${localePath(l as "ar" | "en", path)}`;
  return {
    canonical: url(locale),
    languages: {
      ar: url("ar"),
      en: url("en"),
      "x-default": url(defaultLocale),
    },
  };
}

function resolve(value: L10n | string | undefined, locale: "ar" | "en") {
  if (typeof value === "string") return value;
  return value?.[locale];
}

export function buildMetadata({ locale, path = "/", title, description }: LocalizedMetaParams): Metadata {
  const displayedTitle = (title?.[locale] ?? SITE_NAME).trim();
  const desc = resolve(description, locale);

  return {
    title: displayedTitle,
    description: desc,
    metadataBase: new URL(SITE_URL),
    alternates: buildAlternates(locale, path),
    openGraph: {
      title: displayedTitle,
      description: desc,
      siteName: SITE_NAME,
      url: `${SITE_URL}${localePath(locale, path)}`,
      locale: locale === "ar" ? "ar_SA" : "en",
      alternateLocale: locale === "ar" ? "en" : "ar_SA",
      type: "website",
      images: [{ url: `${SITE_URL}${OG_IMAGE}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: displayedTitle,
      description: desc,
      images: [`${SITE_URL}${OG_IMAGE}`],
    },
  };
}