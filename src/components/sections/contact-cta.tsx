import type { Locale } from "@/lib/i18n";
import { ui } from "@/content/ui";
import { whatsappHref } from "@/content/business";
import { Container, Reveal, Kicker } from "@/components/ui";
import { WhatsAppIcon } from "@/components/icons";

const copy: Record<Locale, { title: string; text: string; cta: string }> = {
  ar: {
    title: "سيارتك تستحق أفضل حماية متاحة.",
    text: "أرسل لنا تفاصيل سيارتك ولم نُماطل — نرد عليك بعرض سعر واضح عبر واتساب.",
    cta: "ابدأ المحادثة الآن",
  },
  en: {
    title: "Your car deserves the best protection available.",
    text: "Send us your vehicle's details and we'll reply with a clear quote on WhatsApp.",
    cta: "Start the conversation",
  },
};

export function ContactCta({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl bg-brass px-8 py-16 md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #0e0f11 1px, transparent 0)", backgroundSize: "22px 22px" }} aria-hidden />
          <div className="relative flex flex-col items-start gap-6">
            <Kicker tone="light">{ui.sections.contact.kicker[locale]}</Kicker>
            <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-[1.1] tracking-display text-ink md:text-5xl">
              {t.title}
            </h2>
            <p className="max-w-xl text-balance text-base leading-relaxed text-ink/75">{t.text}</p>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-medium text-cream transition-all duration-300 hover:bg-ink-raised"
            >
              <WhatsAppIcon className="h-4 w-4 text-brass transition-transform group-hover:scale-110" />
              {t.cta}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}