"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export default function LocaleNotFound() {
  const pathname = usePathname();
  const locale: Locale = pathname?.startsWith("/en") ? "en" : "ar";

  const copy = {
    ar: {
      code: "404",
      title: "الصفحة غير موجودة",
      text: "ما تتطلع إليه ليس هنا، لكن خدمة أولوية العناية جاهزة لاستقبالك.",
      home: "العودة للرئيسية",
    },
    en: {
      code: "404",
      title: "Page not found",
      text: "What you're looking for isn't here, but Priority Care is ready to welcome you.",
      home: "Back to home",
    },
  } as const;

  const t = copy[locale];

  return (
    <section className="flex min-h-[70svh] items-center pt-[72px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-6 px-6 py-16 text-center md:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-brass" dir="ltr">
          {t.code}
        </p>
        <h1 className="max-w-xl text-balance text-4xl font-semibold leading-[1.06] tracking-display text-cream md:text-6xl">
          {t.title}
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-mist">{t.text}</p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center rounded-full bg-brass px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-brass-bright"
          >
            {t.home}
          </Link>
          <Link
            href={`/${locale === "ar" ? "en" : "ar"}`}
            lang={locale === "ar" ? "en" : "ar"}
            className="inline-flex items-center rounded-full border border-white/10 px-7 py-3.5 text-sm text-cream transition-colors hover:border-brass hover:text-brass"
          >
            {locale === "ar" ? "English" : "العربية"}
          </Link>
        </div>
      </div>
    </section>
  );
}