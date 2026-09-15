import type { L10n } from "@/lib/i18n";

export interface Service {
  slug: L10n;
  index: L10n;
  title: L10n;
  kicker: L10n;
  shortDescription: L10n;
  description: L10n;
  benefits: L10n[];
  whatWeProvide: L10n[];
  process: L10n[];
  whatsappMessage: L10n;
  faqKeys: string[];
}

export const services: Service[] = [
  {
    slug: { ar: "حماية-طلاء-السيارة-ppf", en: "paint-protection-ppf" },
    index: { ar: "٠١", en: "01" },
    title: { ar: "حماية الطلاء", en: "Paint Protection Film" },
    kicker: { ar: "فيلم الحماية PPF", en: "Paint Protection" },
    shortDescription: {
      ar: "فيلم شفاف يمتص الصدمات ويحمي الطلاء من الخدوش وشظايا الطريق مع الحفاظ على مظهره الأصلي.",
      en: "Transparent film that absorbs impacts, shielding paint from scratches and road debris while keeping its original finish.",
    },
    description: {
      ar: "فيلم حماية الطلاء (PPF) طبقة بوليمرية شفافة تُثبَّت مباشرة على سطح السيارة لتمتص الضربات وتقاوم الخدوش والشظايا، مع الحفاظ الكامل على مظهر الطلاء الأصلي. خيار مثالي لمن يضع حماية قيمة سيارته أولوية في ظل ظروف القيادة اليومية.",
      en: "Paint Protection Film is a transparent polymer layer applied directly to the vehicle's paintwork. It absorbs impacts, resists scratches and rock chips, and preserves the original paint finish — the right choice when protecting a car's value is the priority.",
    },
    benefits: [
      {
        ar: "حماية من الخدوش وشظايا الطريق والصدمات الميكانيكية",
        en: "Shields against scratches, road debris, and mechanical impacts",
      },
      {
        ar: "الحفاظ الكامل على مظهر الطلاء الأصلي",
        en: "Preserves the vehicle's original paint appearance",
      },
      {
        ar: "مقاومة تأثيرات البيئة والظروف الجوية",
        en: "Resists environmental and weather-related ageing",
      },
      {
        ar: "مناسب لجميع أنواع السيارات",
        en: "Suitable for all vehicle types",
      },
    ],
    whatWeProvide: [
      {
        ar: "فيلم حماية شفاف عالي الشفافية لا يغيّر لون الطلاء بمرور الوقت",
        en: "High-clarity protective film that keeps paint colour true over time",
      },
      {
        ar: "تركيب دقيق مع إزالة كاملة للهواء ومحيّد للأطراف",
        en: "Precise application with full air removal and clean edges",
      },
      {
        ar: "تغطية كاملة أو جزئية وفق احتياج العميل وحالته",
        en: "Full or partial coverage according to the customer's needs",
      },
    ],
    process: [
      {
        ar: "فحص شامل للطلاء وتحديد منطقة التركيب",
        en: "Full paint inspection and coverage mapping",
      },
      {
        ar: "تنظيف وتجهيز السطح وفق معايير عالية الدقة",
        en: "Surface preparation and decontamination to high standards",
      },
      {
        ar: "تركيب الفيلم بدقة مع إزالة كاملة للهواء",
        en: "Precise film installation with complete air removal",
      },
      {
        ar: "فحص نهائي وتسليم السيارة مع إرشادات الصيانة",
        en: "Final inspection, delivery, and maintenance guidance",
      },
    ],
    whatsappMessage: {
      ar: "مرحبًا، أرغب بالاستفسار عن خدمة حماية الطلاء PPF في أولوية العناية.",
      en: "Hello, I would like to enquire about the Paint Protection Film (PPF) service at Priority Care.",
    },
    faqKeys: ["ppf-duration", "ppf-used-cars", "pricing"],
  },
  {
    slug: { ar: "النانو-سيراميك", en: "nano-ceramic" },
    index: { ar: "٠٢", en: "02" },
    title: { ar: "النانو سيراميك", en: "Nano Ceramic Coating" },
    kicker: { ar: "الطلاء السيراميكي", en: "Nano Ceramic" },
    shortDescription: {
      ar: "طبقة حماية كيميائية متينة تمنح سيارتك لمعانًا طويل الأمد وتقاوم الأوساخ والماء.",
      en: "A durable chemical protection layer delivering lasting gloss that repels dirt and water.",
    },
    description: {
      ar: "النانو سيراميك طبقة حماية كيميائية ترتبط بجزيئات سطح الطلاء وتشكّل حاجزًا متجانسًا يمنع الأتربة والمواد الكيميائية والأشعة فوق البنفسجية من التأثير على الطلاء. يمنح اللون لمعانًا عميقًا ويُبسّط الصيانة اليومية للسيارة.",
      en: "Nano Ceramic is a chemical protection layer that bonds at a molecular level with the paint surface, forming a uniform barrier against dust, chemicals, and UV radiation. It delivers deep gloss and simplifies everyday maintenance.",
    },
    benefits: [
      {
        ar: "لمعان عميق يدوم طويلًا",
        en: "Deep, long-lasting gloss",
      },
      {
        ar: "حماية من الأشعة فوق البنفسجية والتلوث البيئي",
        en: "Protection against UV radiation and environmental contamination",
      },
      {
        ar: "مقاومة الترسبات الكيميائية والمواد العضوية",
        en: "Resists chemical etching and organic contamination",
      },
      {
        ar: "تسهيل الغسيل اليومي والحفاظ على نظافة السيارة",
        en: "Simplifies washing and keeps the car cleaner for longer",
      },
    ],
    whatWeProvide: [
      {
        ar: "تقنية النانو سيراميك لحماية متناهية للسطح",
        en: "Advanced nano ceramic technology for extreme surface protection",
      },
      {
        ar: "طبقات متعددة وفق حالة الطلاء وطلب العميل",
        en: "Multi-layer application calibrated to paint condition and preference",
      },
      {
        ar: "تجهيز تمهيدي للطلاء قبل التركيب لضمان أعلى ترابط",
        en: "Pre-application paint preparation to guarantee optimal bonding",
      },
    ],
    process: [
      {
        ar: "تجهيز تمهيدي وتنظيف عميق لسطح الطلاء",
        en: "Comprehensive pre-detail and deep paint surface preparation",
      },
      {
        ar: "تطبيق الطبقات السيراميكية بدقة وانتظام",
        en: "Meticulous, uniform application of ceramic layers",
      },
      {
        ar: "تنشيط حراري لضمان الالتصاق الجزيئي الكامل",
        en: "Heat activation ensuring complete molecular bonding",
      },
      {
        ar: "فحص النتيجة وتقديم إرشادات الصيانة الموصى بها",
        en: "Result verification and recommended maintenance guidance",
      },
    ],
    whatsappMessage: {
      ar: "مرحبًا، أرغب بالاستفسار عن خدمة النانو سيراميك في أولوية العناية.",
      en: "Hello, I would like to enquire about the Nano Ceramic Coating service at Priority Care.",
    },
    faqKeys: ["ceramic-vs-ppf", "pricing"],
  },
  {
    slug: { ar: "العزل-الحراري-والتظليل", en: "window-tinting" },
    index: { ar: "٠٣", en: "03" },
    title: { ar: "العزل الحراري والتظليل", en: "Window Tinting & Thermal Insulation" },
    kicker: { ar: "فيلم النوافذ", en: "Window Film" },
    shortDescription: {
      ar: "فيلم عازل يمنع الحرارة والأشعة فوق البنفسجية مع الحفاظ الكامل على وضوح الرؤية.",
      en: "Insulating film that blocks heat and UV rays while maintaining clear visibility.",
    },
    description: {
      ar: "يُركَّب فيلم العزل الحراري على زجاج السيارة لتقليل انتقال الحرارة إلى المقصورة وحمايتها من الأشعة فوق البنفسجية. يحافظ على درجة حرارة مريحة داخل السيارة ويخفف العبء على مكيف الهواء، مع بقاء الرؤية واضحة تمامًا للسائق.",
      en: "Thermal insulation film is installed on vehicle windows to reduce heat transfer into the cabin and block UV radiation. It keeps the interior comfortable and lightens the load on the air-conditioning system, all while keeping the driver's view completely clear.",
    },
    benefits: [
      {
        ar: "تقليل ملموس للحرارة داخل المقصورة",
        en: "Noticeable cabin temperature reduction",
      },
      {
        ar: "حماية المقصورة من الأشعة فوق البنفسجية",
        en: "Cabin protection from UV radiation",
      },
      {
        ar: "رؤية واضحة ليلًا ونهارًا",
        en: "Clear visibility day and night",
      },
      {
        ar: "تقليل استهلاك مكيف الهواء",
        en: "Reduces air-conditioning energy consumption",
      },
      {
        ar: "خيار مثالي لمناخ الرياض الحار",
        en: "Particularly suited to Riyadh's hot climate",
      },
    ],
    whatWeProvide: [
      {
        ar: "فيلم عازل عالي الجودة متعدد الطبقات",
        en: "High-quality multi-layer thermal film",
      },
      {
        ar: "تركيب دقيق خالٍ من الفقاعات والتطاير",
        en: "Precise, bubble-free installation with clean edges",
      },
      {
        ar: "خيارات شفافية متعددة تناسب تفضيل العميل",
        en: "Multiple transparency options to suit customer preference",
      },
    ],
    process: [
      {
        ar: "تقييم احتياج السيارة واختيار نسبة الشفافية",
        en: "Assess the vehicle and choose the target transparency level",
      },
      {
        ar: "تنظيف زجاج المقصورة وتجهيز السطح",
        en: "Clean and prepare the window surfaces",
      },
      {
        ar: "قص وتشكيل الفيلم بدقة على الشكل الحقيقي للزجاج",
        en: "Precision cutting and heat-forming to the window shape",
      },
      {
        ar: "التركيب النهائي والتحقق من الشفافية والالتصاق",
        en: "Final installation and verification of clarity and adhesion",
      },
    ],
    whatsappMessage: {
      ar: "مرحبًا، أرغب بالاستفسار عن خدمة العزل الحراري والتظليل في أولوية العناية.",
      en: "Hello, I would like to enquire about the Window Tinting & Thermal Insulation service at Priority Care.",
    },
    faqKeys: ["tinting-legal", "pricing"],
  },
  {
    slug: { ar: "التلميع-والعناية", en: "detailing-polishing" },
    index: { ar: "٠٤", en: "04" },
    title: { ar: "التلميع والعناية", en: "Detailing & Polishing" },
    kicker: { ar: "العناية والإتقان", en: "Detailing & Polish" },
    shortDescription: {
      ar: "عناية احترافية شاملة من الداخل والخارج تعيد لسيارتك لمعانها وتحمي سطحها.",
      en: "Complete professional interior and exterior care that restores shine and protects surfaces.",
    },
    description: {
      ar: "التلميع والعناية عملية شاملة تجمع بين التنظيف العميق والتلميع متعدد المراحل وإزالة الخدوش السطحية، تليها حماية تدوم طويلًا. تعيد للسيارة مظهر يوم الوكالة وتحافظ على قيمة الطلاء بمرور السنوات.",
      en: "Detailing and polishing is a comprehensive process combining deep cleaning, multi-stage polishing, and surface scratch removal, finished with durable protection. It restores the showroom finish and preserves the paint's long-term value.",
    },
    benefits: [
      {
        ar: "استعادة اللمعان الأصلي للطلاء الخارجي",
        en: "Restores the original gloss of exterior paintwork",
      },
      {
        ar: "إزالة الخدوش السطحية وآثار غسل الدوائر",
        en: "Removes surface scratches and swirling from washing",
      },
      {
        ar: "عناية داخلية شاملة للمقصورة",
        en: "Comprehensive interior cabin care",
      },
      {
        ar: "حماية طويلة الأمد بعد انتهاء التلميع",
        en: "Long-lasting protection applied after polishing",
      },
    ],
    whatWeProvide: [
      {
        ar: "عناية شاملة من الداخل والخارج",
        en: "Comprehensive interior and exterior detailing",
      },
      {
        ar: "مراحل تلميع متعددة لإزالة الخدوش والدوائر",
        en: "Multi-stage polishing to remove scratches and imperfections",
      },
      {
        ar: "العناية بالزجاج والجنوط والمقاعد",
        en: "Glass, wheel, and upholstery care included",
      },
    ],
    process: [
      {
        ar: "فحص الطلاء وتحديد مدى الخدوش وطرق معالجتها",
        en: "Inspect the paint and determine scratch treatment strategy",
      },
      {
        ar: "تنظيف عميق لجميع أجزاء السيارة داخليًا وخارجيًا",
        en: "Deep cleaning of the full interior and exterior",
      },
      {
        ar: "تلميع متعدد المراحل وإزالة الخدوش",
        en: "Multi-stage polishing and scratch correction",
      },
      {
        ar: "تطبيق الحماية الطويلة الأمد",
        en: "Apply long-lasting protective finishing",
      },
    ],
    whatsappMessage: {
      ar: "مرحبًا، أرغب بالاستفسار عن خدمة التلميع والعناية في أولوية العناية.",
      en: "Hello, I would like to enquire about the Detailing & Polishing service at Priority Care.",
    },
    faqKeys: ["pricing", "polishing-frequency"],
  },
];

export function getServiceBySlug(
  slug: string,
  locale: "ar" | "en",
): Service | undefined {
  try {
    const decoded = decodeURIComponent(slug);
    return services.find(
      (s) => s.slug[locale] === decoded || s.slug[locale] === slug,
    );
  } catch {
    return services.find((s) => s.slug[locale] === slug);
  }
}