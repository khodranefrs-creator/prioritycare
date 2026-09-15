import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { services } from "@/content/services";

const staticPaths = ["", "/services", "/work", "/about", "/faq", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");

  const entries: MetadataRoute.Sitemap = [];

  for (const path of staticPaths) {
    for (const locale of locales) {
      const url = `${base}/${locale}${path}`;
      const languages: Record<string, string> = {};
      for (const l of locales) {
        languages[l] = `${base}/${l}${path}`;
      }
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.8,
        alternates: { languages },
      });
    }
  }

  for (const service of services) {
    for (const locale of locales) {
      const url = `${base}/${locale}/services/${service.slug[locale]}`;
      const languages: Record<string, string> = {};
      for (const l of locales) {
        languages[l] = `${base}/${l}/services/${service.slug[l]}`;
      }
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages },
      });
    }
  }

  return entries;
}