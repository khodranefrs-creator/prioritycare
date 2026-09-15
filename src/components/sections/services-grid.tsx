import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { services } from "@/content/services";
import { ui } from "@/content/ui";
import { serviceImages, unsplashUrl } from "@/content/images";
import { Container, Reveal, SectionHeading } from "@/components/ui";
import { ArrowIcon } from "@/components/icons";

export function ServicesGrid({ locale }: { locale: Locale }) {
  const t = ui.sections.services;
  return (
    <section className="py-24 md:py-32" id="services">
      <Container>
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            kicker={<>{t.kicker[locale]}</>}
            title={t.title[locale]}
            description={t.note[locale]}
          />
        </div>
        <ul className="grid gap-5 md:grid-cols-2">
          {services.map((service, i) => {
            const image = serviceImages[service.slug.en];
            return (
              <li key={service.slug.en} className={i === 0 || i === 3 ? "md:col-span-2" : ""}>
                <Reveal delay={i * 60}>
                  <Link
                    href={localePath(locale, `/services/${service.slug[locale]}`)}
                    className="group relative flex aspect-[16/9] flex-col justify-end overflow-hidden rounded-2xl border border-white/5 bg-ink-soft p-6 md:aspect-[21/9] md:p-9"
                  >
                    <Image
                      src={unsplashUrl(image.id, { w: 1400 })}
                      alt={image.alt[locale]}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-30 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-45"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                    <div className="relative flex flex-col gap-3">
                      <span className="font-display text-sm tabular-nums tracking-[0.2em] text-brass">
                        {service.index[locale]}
                      </span>
                      <h3 className="text-2xl font-semibold text-cream md:text-3xl">
                        {service.title[locale]}
                      </h3>
                      <p className="max-w-xl text-sm leading-relaxed text-mist">
                        {service.shortDescription[locale]}
                      </p>
                      <span className="mt-1 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-brass transition-colors group-hover:text-brass-bright">
                        {ui.actions.viewService[locale]}
                        <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1 rtl:group-hover:-translate-x-0" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}