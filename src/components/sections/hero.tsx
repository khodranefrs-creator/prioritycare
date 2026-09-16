import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { getDirection, localePath } from "@/lib/i18n";
import { homepageHero } from "@/content/images";
import { bookingCta, secondaryCta } from "@/content/navigation";
import { ui } from "@/content/ui";
import { business, whatsappHref } from "@/content/business";
import { ButtonLink, Container, Display1, Kicker } from "@/components/ui";
import { StarIcon } from "@/components/icons";

const heroCopy = {
  ar: {
    kicker: "استوديو حماية وعناية السيارات · الرياض",
    highlight: "حمايةٌ تليق بسيارتك",
    rest: "، وعنايةٌ تحافظ على أناقتها أطول فترة ممكنة.",
    note: "فيلم حماية الطلاء PPF · النانو سيراميك · العزل الحراري · التلميع",
    rating: `${business.rating.value.toFixed(1)} · ${ui.sections.trust.reviewsSuffix.ar}`,
  },
  en: {
    kicker: "Automotive protection & care studio · Riyadh",
    highlight: "Protection worthy of your car",
    rest: ", and care that keeps it looking its best for longer.",
    note: "Paint protection film · Nano ceramic · Window tinting · Polishing",
    rating: `${business.rating.value.toFixed(1)} · ${ui.sections.trust.reviewsSuffix.en}`,
  },
} as const;

export function Hero({ locale }: { locale: Locale }) {
  const copy = heroCopy[locale];
  const dir = getDirection(locale);
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pt-[72px]">
      <div className="absolute inset-0">
        <Image
          src={homepageHero.id}
          alt={homepageHero.alt[locale]}
          fill
          priority
          quality={82}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        <div
          className={`absolute inset-0 ${
            dir === "rtl"
              ? "bg-gradient-to-l from-ink/70 via-ink/25 to-transparent"
              : "bg-gradient-to-r from-ink/70 via-ink/25 to-transparent"
          }`}
        />
      </div>

      <Container className="relative flex min-h-[calc(100svh-72px)] flex-col justify-end pb-20 pt-16 md:pb-24">
        <div className="flex flex-col items-start gap-6">
          <Kicker mirror>{copy.kicker}</Kicker>

          <Display1 className="max-w-4xl">
            <span className="text-brass">{copy.highlight}</span>
            {copy.rest}
          </Display1>

          <p className="max-w-xl text-balance text-base leading-relaxed text-mist">
            {copy.note}
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink href={whatsappHref()} variant="brass">
              {bookingCta[locale]}
            </ButtonLink>
            <ButtonLink href={localePath(locale, "/services")} variant="outline">
              {secondaryCta[locale]}
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center gap-0.5 text-brass" dir="ltr">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </span>
              <span className="text-sm text-cream">{copy.rating}</span>
              <span className="text-xs text-fog">{ui.rating.source[locale]}</span>
            </div>
            <span className="hidden h-4 w-px bg-white/10 sm:block" />
            <p className="text-sm leading-relaxed text-mist" dir="auto">
              {business.verifiedCategories[locale].join(" · ")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}