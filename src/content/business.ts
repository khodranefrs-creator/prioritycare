import type { L10n } from "@/lib/i18n";

/**
 * Verified business information.
 *
 * Every value in this file is sourced from Priority Care's public listings:
 *  - Google / Yango Maps business listing (name, phone, address, hours, rating)
 *  - Cartea automotive directory (service categories, hours, amenities)
 *  - The official Instagram (@priority_care1) and TikTok (@prioritycare) profiles
 *
 * Nothing here is estimated or invented. If a value could not be verified it is
 * omitted rather than guessed.
 */

export const business = {
  name: {
    ar: "أولوية العناية",
    en: "Priority Care",
  } satisfies L10n,

  tagline: {
    ar: "استوديو حماية وعناية السيارات — الرياض",
    en: "Automotive protection & care studio — Riyadh",
  } satisfies L10n,

  /** Names as they appear on public business listings. */
  listingNames: {
    ar: "أولوية العناية",
    en: "Priority Care Autodetailing",
  } satisfies L10n,

  phone: {
    /** E.164 value used for links. */
    e164: "+966559999937",
    display: {
      ar: "+966 55 999 9937",
      en: "+966 55 999 9937",
    } satisfies L10n,
    /** WhatsApp uses the international number without the leading plus. */
    whatsapp: "966559999937",
  },

  address: {
    ar: "شارع العروبة، حي السليمانية، الرياض",
    en: "Al Urubah Road, As Sulaymaniyah District, Riyadh",
  } satisfies L10n,

  district: {
    ar: "حي السليمانية",
    en: "As Sulaymaniyah",
  } satisfies L10n,

  street: {
    ar: "شارع العروبة",
    en: "Al Urubah Road",
  } satisfies L10n,

  city: {
    ar: "الرياض",
    en: "Riyadh",
  } satisfies L10n,

  country: {
    ar: "المملكة العربية السعودية",
    en: "Saudi Arabia",
  } satisfies L10n,

  /** Verified map listing rating. */
  rating: {
    value: 5.0,
    count: 12,
  },

  openingHours: {
    /** Verified from the business listing: Saturday – Thursday, 9:00–22:00. */
    days: ["Sa", "Su", "Mo", "Tu", "We", "Th"] as const,
    opens: "09:00",
    closes: "22:00",
    display: {
      ar: "السبت – الخميس · ٩:٠٠ ص – ١٠:٠٠ م",
      en: "Saturday – Thursday · 9:00 AM – 10:00 PM",
    } satisfies L10n,
    note: {
      ar: "قد تختلف الأوقات في المواسم والأعياد، ويُفضّل التواصل قبل الزيارة.",
      en: "Hours may vary on holidays and seasonal periods — we recommend contacting us before visiting.",
    } satisfies L10n,
  },

  amenities: [
    { ar: "الدفع بالبطاقة", en: "Card payments accepted" },
    { ar: "مواقف للسيارات", en: "Customer parking" },
    { ar: "مواقف مخصصة لذوي الإعاقة", en: "Accessible parking" },
  ],

  social: {
    instagram: {
      handle: "@priority_care1",
      url: "https://www.instagram.com/priority_care1/",
    },
    tiktok: {
      handle: "@prioritycare",
      url: "https://www.tiktok.com/@prioritycare",
    },
  },

  maps: {
    /** Share link supplied by the business. */
    share: "https://share.google/hFP8JkIVPdqpQpvW8",
    /** Plain search query used for the embedded map and directions. */
    query:
      "Priority Care Autodetailing, Al Urubah Road, As Sulaymaniyah, Riyadh",
  },

  /** Service categories confirmed by public listings. */
  verifiedCategories: {
    ar: ["أفلام العزل الحراري", "النانو سيراميك", "الحماية الكاملة لجميع أنواع السيارات", "التلميع"],
    en: [
      "Thermal insulation films",
      "Nano ceramic",
      "Complete protection for all types of cars",
      "Polishing & care",
    ],
  },
} as const;

export const mapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  business.maps.query,
)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  business.maps.query,
)}&output=embed`;

export const telHref = `tel:${business.phone.e164}`;

export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${business.phone.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
