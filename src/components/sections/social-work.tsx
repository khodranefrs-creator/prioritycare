import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { ui } from "@/content/ui";
import { business } from "@/content/business";
import { editorialPhotos, unsplashUrl } from "@/content/images";
import { Container, Reveal, SectionHeading } from "@/components/ui";
import { ArrowIcon, InstagramIcon, TikTokIcon } from "@/components/icons";

export function SocialWork({ locale }: { locale: Locale }) {
  const t = ui.sections.work;
  const platforms = [
    {
      name: "Instagram",
      handle: business.social.instagram.handle,
      url: business.social.instagram.url,
      icon: InstagramIcon,
      photo: editorialPhotos[6],
      description: t.instagramDesc[locale],
    },
    {
      name: "TikTok",
      handle: business.social.tiktok.handle,
      url: business.social.tiktok.url,
      icon: TikTokIcon,
      photo: editorialPhotos[7],
      description: t.tiktokDesc[locale],
    },
  ];

  return (
    <section className="border-t border-white/5 py-24 md:py-32">
      <Container>
        <SectionHeading
          kicker={<>{t.kicker[locale]}</>}
          title={t.title[locale]}
          description={
            locale === "ar"
              ? "تابع حساباتنا الرسمية لمشاهدة أعمالنا ولقطات من الاستوديو."
              : "Follow our official accounts to see our work and studio moments."
          }
          className="mb-14"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {platforms.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.name} delay={i * 80}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-2xl border border-white/5 p-7 md:p-9"
                >
                  <Image
                    src={unsplashUrl(p.photo.id, { w: 1000 })}
                    alt={p.photo.alt[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-40 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  <div className="relative flex items-center justify-between">
                    <span className="flex items-center gap-2.5 text-cream">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cream backdrop-blur transition-colors group-hover:bg-brass group-hover:text-ink">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <span className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold">{p.name}</span>
                        <span className="text-xs text-mist">{p.handle}</span>
                      </span>
                    </span>
                    <ArrowIcon className="h-5 w-5 text-brass transition-transform duration-300 group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1" />
                  </div>
                  <p className="relative max-w-sm text-sm leading-relaxed text-cream/85">
                    {p.description}
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}