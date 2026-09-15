import type { Metadata } from "next";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { editorialPhotos, unsplashUrl } from "@/content/images";
import { ui } from "@/content/ui";
import { business } from "@/content/business";
import { PageHero } from "@/components/page-hero";
import { ContactCta } from "@/components/sections/contact-cta";
import { Container, Reveal } from "@/components/ui";
import { ArrowIcon, InstagramIcon, TikTokIcon } from "@/components/icons";

const pageCopy = {
  ar: {
    title: "أعمالنا",
    statement:
      "نوثّق تفاصيل عملنا على إنستغرام وتيك توك — من تحضير الطلاء حتى التسليم. تابعنا لمشاهدة المشاريع الحقيقية عن قرب.",
    noteTitle: "ملاحظة",
    note:
      "الصور التالية صور فوتوغرافية تعبيرية لأغراض العرض فقط، ولا تمثل مشاريع فعلية من أعمال أولوية العناية. لمشاهدة أعمالنا الحقيقية تابع حساباتنا الرسمية.",
    viewPost: "شاهد المنشور",
  },
  en: {
    title: "Our work",
    statement:
      "We document the details of our work on Instagram and TikTok — from paint preparation to delivery. Follow us to see real projects up close.",
    noteTitle: "Note",
    note:
      "The images below are decorative editorial photography for presentation purposes only and do not represent actual Priority Care projects. To see our real work, follow our official accounts.",
    viewPost: "View post",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "ar";
  return buildMetadata({
    locale,
    path: "/work",
    title: { ar: "أعمالنا", en: "Our work" },
    description: pageCopy[locale].statement,
  });
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return null;
  const locale = raw as Locale;
  const copy = pageCopy[locale];
  const t = ui.sections.work;

  const platforms = [
    {
      name: "Instagram",
      handle: business.social.instagram.handle,
      url: business.social.instagram.url,
      icon: InstagramIcon,
    },
    {
      name: "TikTok",
      handle: business.social.tiktok.handle,
      url: business.social.tiktok.url,
      icon: TikTokIcon,
    },
  ];

  return (
    <>
      <PageHero
        kicker={<>{t.kicker[locale]}</>}
        title={copy.title}
        description={copy.statement}
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="mb-12 flex flex-col gap-3 rounded-2xl border border-brass/25 bg-brass/[0.06] p-6 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
                {copy.noteTitle}
              </span>
              <p className="max-w-2xl text-sm leading-relaxed text-mist" dir="auto">
                {copy.note}
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              {platforms.map((p) => {
                const Icon = p.icon;
                return (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={p.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-mist transition-colors hover:border-brass hover:text-brass"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          <ul className="columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3">
            {editorialPhotos.slice(0, 6).map((photo, i) => (
              <li key={photo.id} className="break-inside-avoid">
                <Reveal delay={(i % 3) * 60}>
                  <figure className="group relative overflow-hidden rounded-2xl border border-white/5">
                    <div className="aspect-[4/5] overflow-hidden">
                      <Image
                        src={unsplashUrl(photo.id, { w: 900 })}
                        alt={photo.alt[locale]}
                        width={900}
                        height={1125}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="h-full w-full object-cover opacity-85 transition-all duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-gradient-to-t from-ink/90 to-transparent p-5">
                      <span className="text-xs leading-relaxed text-cream/90">
                        {photo.alt[locale]}
                      </span>
                      <span className="shrink-0 text-[10px] text-fog">{photo.credit}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {platforms.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.name} delay={i * 60}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/5 bg-ink-soft p-6 transition-colors hover:border-white/10"
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brass/12 text-brass">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold text-cream">{p.name}</span>
                        <span className="text-xs text-mist">{p.handle}</span>
                      </span>
                    </span>
                    <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-brass">
                      {copy.viewPost}
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1" />
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
      <ContactCta locale={locale} />
    </>
  );
}