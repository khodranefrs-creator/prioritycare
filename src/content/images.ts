import type { L10n } from "@/lib/i18n";

/**
 * Verified editorial / stock automotive imagery.
 *
 * All images are sourced from Unsplash (free commercial use under the Unsplash
 * License) and are clearly marked as editorial — they are NOT presented as
 * Priority Care customer work.  The photo IDs below were confirmed to return
 * HTTP 200 during the build preparation phase.
 */

export const unsplashBase = "https://images.unsplash.com";

export interface Photo {
  /** Unsplash CDN path (e.g. "photo-1552519507-da3b142c6e3d"). */
  id: string;
  alt: L10n;
  /** Unsplash photographer / credit shown in captions. */
  credit: string;
  /** Width of the source image (used for aspect-ratio / layout hints). */
  w: number;
  h: number;
}

export const heroImage: Photo = {
  id: "photo-1552519507-da3b142c6e3d",
  alt: {
    ar: "سيارة رياضية فاخرة في بيئة مظلمة",
    en: "Premium sports car in a dark environment",
  },
  credit: "Unsplash",
  w: 1600,
  h: 1067,
};

/** Atmospheric car photos used across service pages and editorial sections. */
export const editorialPhotos: Photo[] = [
  {
    id: "photo-1552519507-da3b142c6e3d",
    alt: {
      ar: "لقطة منخفضة لسيارة فاخرة داكنة",
      en: "Dark premium sports car close-up",
    },
    credit: "Unsplash",
    w: 1600,
    h: 1067,
  },
  {
    id: "photo-1494976388531-d1058494cdd8",
    alt: {
      ar: "سيارة رياضية بأحمر ناصع على خلفية غامقة",
      en: "Red sports car against a dark backdrop",
    },
    credit: "Unsplash",
    w: 1600,
    h: 1067,
  },
  {
    id: "photo-1503376780353-7e6692767b70",
    alt: {
      ar: "بورش ٩١١ كلاسيكية على طريق مفتوح",
      en: "Porsche 911 on an open road",
    },
    credit: "Unsplash",
    w: 1600,
    h: 1067,
  },
  {
    id: "photo-1511919884226-fd3cad34687c",
    alt: {
      ar: "منظر خلفي لسيارة بورش ٩١١ حمراء",
      en: "Rear view of a red Porsche 911",
    },
    credit: "Unsplash",
    w: 1600,
    h: 1067,
  },
  {
    id: "photo-1555215695-3004980ad54e",
    alt: {
      ar: "بي إم دبليو رياضية فضية",
      en: "Silver BMW sports car",
    },
    credit: "Unsplash",
    w: 1600,
    h: 1067,
  },
  {
    id: "photo-1542362567-b07e54358753",
    alt: {
      ar: "سيارة رياضية على طريق يمتد في الأفق",
      en: "Sports car on a road stretching to the horizon",
    },
    credit: "Unsplash",
    w: 1600,
    h: 1067,
  },
  {
    id: "photo-1605559424843-9e4c228bf1c2",
    alt: {
      ar: "لقطة قريبة لسيارة فاخرة تحت الإضاءة",
      en: "Close-up of a premium car under studio lighting",
    },
    credit: "Unsplash",
    w: 1600,
    h: 1067,
  },
  {
    id: "photo-1519641471654-76ce0107ad1b",
    alt: {
      ar: "سيارة داكنة تحت إضاءة درامية",
      en: "Dark car under dramatic lighting",
    },
    credit: "Unsplash",
    w: 1600,
    h: 1067,
  },
];

/**
 * Service-specific decorative imagery.
 * Each service uses a different photo as atmospheric background; none
 * represent actual Priority Care work.
 */
export const serviceImages: Record<string, Photo> = {
  "paint-protection-ppf": {
    id: "photo-1555215695-3004980ad54e",
    alt: {
      ar: "سيارة مُحمّية بفيلم شفاف",
      en: "Car protected with transparent film",
    },
    credit: "Unsplash",
    w: 1600,
    h: 1067,
  },
  "nano-ceramic": {
    id: "photo-1511919884226-fd3cad34687c",
    alt: {
      ar: "طلاء مُلمّع بتأثير سيراميكي",
      en: "Polished paintwork with ceramic finish",
    },
    credit: "Unsplash",
    w: 1600,
    h: 1067,
  },
  "window-tinting": {
    id: "photo-1503376780353-7e6692767b70",
    alt: {
      ar: "زجاج سيارة فاخرة بالظلال",
      en: "Tinted premium car windows",
    },
    credit: "Unsplash",
    w: 1600,
    h: 1067,
  },
  "detailing-polishing": {
    id: "photo-1605559424843-9e4c228bf1c2",
    alt: {
      ar: "عملية تلميع احترافية للسيارة",
      en: "Professional car detailing process",
    },
    credit: "Unsplash",
    w: 1600,
    h: 1067,
  },
};

export function unsplashUrl(
  id: string,
  opts?: { w?: number; q?: number },
): string {
  const w = opts?.w ?? 1600;
  const q = opts?.q ?? 80;
  return `${unsplashBase}/${id}?auto=format&fit=crop&w=${w}&q=${q}&fm=webp`;
}
