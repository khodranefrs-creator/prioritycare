import type { Metadata, Viewport } from "next";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getDirection, htmlLang, localePath, otherLocale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { whatsappHref } from "@/content/business";
import { localeParams } from "@/lib/params";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return localeParams();
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e0f11",
  colorScheme: "dark",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = locale === "en" ? "en" : "ar";
  return buildMetadata({
    locale: safeLocale,
    path: "/",
    title: {
      ar: "أولوية العناية | حماية وعناية السيارات في الرياض",
      en: "Priority Care | Car Protection & Detailing in Riyadh",
    },
    description: {
      ar: "استوديو متخصص في حماية وعناية السيارات بالرياض — فيلم حماية الطلاء PPF، النانو سيراميك، العزل الحراري والتظليل، والتلميع، بجودة عالية لجميع أنواع السيارات.",
      en: "A specialist car protection and detailing studio in Riyadh — Paint Protection Film, nano ceramic coating, window tinting, and polishing for all types of vehicles.",
    },
  });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "ar";
  const dir = getDirection(locale);
  const other = otherLocale[locale];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    name: "Priority Care Autodetailing",
    alternateName: "أولوية العناية",
    image: `${SITE_URL}/og.png`,
    telephone: "+966559999937",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Urubah Road",
      addressLocality: "Riyadh",
      addressRegion: "As Sulaymaniyah",
      addressCountry: "SA",
    },
    areaServed: "Riyadh",
    priceRange: "$$",
    openingHours: "Sa-Th 09:00-22:00",
    sameAs: [
      "https://www.instagram.com/priority_care1/",
      "https://www.tiktok.com/@prioritycare",
    ],
  };

  return (
    <html
      lang={htmlLang[locale]}
      dir={dir}
      className="h-full antialiased"
    >
      <body className="flex min-h-full flex-col bg-ink text-cream">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 end-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brass text-ink shadow-raise transition-all duration-300 hover:scale-105 hover:bg-brass-bright"
          aria-label={locale === "ar" ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
        >
          <WhatsAppGlyph />
        </a>
        <Link
          href={localePath(other, "/")}
          className="sr-only"
          lang={htmlLang[other]}
        >
          {locale === "ar" ? "English" : "العربية"}
        </Link>
      </body>
    </html>
  );
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-6 w-6">
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.13-2.9-7A9.85 9.85 0 0 0 12.04 2Zm0 18.13a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.17.25-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}