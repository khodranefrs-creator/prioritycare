import type { L10n } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";

export interface NavLink {
  label: L10n;
  href: string;
  children?: { label: L10n; href: string; description?: L10n; index?: L10n }[];
}

/**
 * Global navigation structure. All labels are bilingual; hrefs are resolved
 * per locale via `resolveNav`.
 */
export const navigationLinks: NavLink[] = [
  {
    label: { ar: "خدماتنا", en: "Services" },
    href: "/services",
    children: [
      {
        label: { ar: "حماية الطلاء PPF", en: "Paint Protection Film" },
        href: "/services/paint-protection-ppf",
        index: { ar: "٠١", en: "01" },
        description: {
          ar: "درع شفاف ضد الخدوش والشظايا",
          en: "A clear shield against scratches and debris",
        },
      },
      {
        label: { ar: "النانو سيراميك", en: "Nano Ceramic" },
        href: "/services/nano-ceramic",
        index: { ar: "٠٢", en: "02" },
        description: {
          ar: "لمعان وحماية طويلة الأمد",
          en: "Long-lasting gloss and protection",
        },
      },
      {
        label: { ar: "العزل الحراري والتظليل", en: "Window Tinting" },
        href: "/services/window-tinting",
        index: { ar: "٠٣", en: "03" },
        description: {
          ar: "عزل الحرارة وحماية المقصورة",
          en: "Heat insulation and cabin protection",
        },
      },
      {
        label: { ar: "التلميع والعناية", en: "Detailing & Polishing" },
        href: "/services/detailing-polishing",
        index: { ar: "٠٤", en: "04" },
        description: {
          ar: "عناية شاملة وإعادة اللمعان",
          en: "Complete care and gloss restoration",
        },
      },
    ],
  },
  {
    label: { ar: "أعمالنا", en: "Our Work" },
    href: "/work",
  },
  {
    label: { ar: "عن أولوية العناية", en: "About" },
    href: "/about",
  },
  {
    label: { ar: "الأسئلة الشائعة", en: "FAQ" },
    href: "/faq",
  },
  {
    label: { ar: "تواصل معنا", en: "Contact" },
    href: "/contact",
  },
];

export const bookingCta: L10n = {
  ar: "احجز موعدك",
  en: "Book an appointment",
};

export const secondaryCta: L10n = {
  ar: "اكتشف خدماتنا",
  en: "Explore our services",
};

export function resolveNavLinks(locale: "ar" | "en"): NavLink[] {
  return navigationLinks.map((link) => ({
    label: link.label,
    href: localePath(locale, link.href),
    children: link.children?.map((child) => ({
      ...child,
      href: localePath(locale, child.href),
    })),
  }));
}