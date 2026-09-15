import type { Locale } from "@/lib/i18n";
import { business, mapsEmbedUrl, mapsDirectionsUrl, telHref } from "@/content/business";
import { ui } from "@/content/ui";
import { Container, Reveal, SectionHeading } from "@/components/ui";
import { ClockIcon, MapPinIcon, PhoneIcon, StarIcon } from "@/components/icons";

export function Location({ locale }: { locale: Locale }) {
  const t = ui.sections.location;
  return (
    <section className="border-t border-white/5 py-24 md:py-32" id="location">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeading
              kicker={<>{t.kicker[locale]}</>}
              title={t.title[locale]}
              description={`${business.address[locale]} — ${business.openingHours.note[locale]}`}
            />
            <div className="flex flex-col gap-4">
              <Reveal className="flex items-start gap-4 rounded-2xl border border-white/5 bg-ink-soft p-5">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-cream" dir="auto">
                    {business.address[locale]}
                  </span>
                  <span className="text-xs text-fog">{business.country[locale]}</span>
                </div>
              </Reveal>
              <Reveal className="flex items-start gap-4 rounded-2xl border border-white/5 bg-ink-soft p-5" delay={60}>
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-cream">
                    {business.openingHours.display[locale]}
                  </span>
                  <span className="text-xs text-fog">{business.country[locale]}</span>
                </div>
              </Reveal>
              <Reveal className="flex items-start gap-4 rounded-2xl border border-white/5 bg-ink-soft p-5" delay={120}>
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
                <a
                  href={telHref}
                  className="flex flex-col gap-0.5 transition-colors hover:text-brass"
                >
                  <span className="text-sm font-semibold text-cream" dir="ltr">
                    {business.phone.display[locale]}
                  </span>
                  <span className="text-xs text-fog">{ui.actions.call[locale]}</span>
                </a>
              </Reveal>
              <Reveal className="flex items-start gap-4 rounded-2xl border border-white/5 bg-ink-soft p-5" delay={180}>
                <StarIcon className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-cream">
                    {business.rating.value.toFixed(1)} / 5
                  </span>
                  <span className="text-xs text-fog">
                    {business.rating.count} {ui.sections.trust.reviewsSuffix[locale]}
                  </span>
                </div>
              </Reveal>
            </div>
            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-brass px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-brass-bright"
            >
              {ui.actions.directions[locale]}
            </a>
          </div>

          <Reveal variant="fade" className="relative min-h-[380px] overflow-hidden rounded-3xl border border-white/5">
            <iframe
              src={mapsEmbedUrl}
              title={t.title[locale]}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[1.05]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}