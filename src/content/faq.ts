import type { L10n } from "@/lib/i18n";

export interface Faq {
  key: string;
  question: L10n;
  answer: L10n;
}

/**
 * FAQ content based strictly on verified business information.
 * No prices, warranties, or experience claims are asserted.
 */
export const faqs: Faq[] = [
  {
    key: "services-provided",
    question: {
      ar: "ما الخدمات التي يقدمها مركز أولوية العناية؟",
      en: "What services does Priority Care provide?",
    },
    answer: {
      ar: "وفق الملف التجاري الرسمي، يقدم المركز أفلام العزل الحراري والنانو سيراميك والحماية الكاملة لجميع أنواع السيارات، إلى جانب خدمات التلميع والعناية (الإصلاح والتلميع).",
      en: "According to the official business listing, the centre provides thermal insulation films, nano ceramic coating, complete protection for all vehicle types, in addition to polishing and detailing services.",
    },
  },
  {
    key: "all-cars",
    question: {
      ar: "هل تتعاملون مع جميع أنواع السيارات؟",
      en: "Do you work with all types of vehicles?",
    },
    answer: {
      ar: "نعم، يُذكر في الملف الرسمي أن الحماية الكاملة متاحة لجميع أنواع السيارات.",
      en: "Yes — the official listing states that full protection is available for all types of vehicles.",
    },
  },
  {
    key: "location",
    question: {
      ar: "أين يقع مركز أولوية العناية؟",
      en: "Where is Priority Care located?",
    },
    answer: {
      ar: "الموقع على شارع العروبة في حي السليمانية بمدينة الرياض، المملكة العربية السعودية.",
      en: "The centre is located on Al Urubah Road in As Sulaymaniyah district, Riyadh, Saudi Arabia.",
    },
  },
  {
    key: "hours",
    question: {
      ar: "ما هي أوقات العمل؟",
      en: "What are the working hours?",
    },
    answer: {
      ar: "ساعات العمل الرسمية من السبت إلى الخميس من ٩:٠٠ صباحًا حتى ١٠:٠٠ مساءً. قد تختلف الأوقات في المواسم والأعياد، لذا يُفضّل التواصل قبل الزيارة.",
      en: "Official opening hours are Saturday through Thursday, 9:00 AM to 10:00 PM. Hours may vary on holidays and seasonal periods, so we recommend contacting us before visiting.",
    },
  },
  {
    key: "booking",
    question: {
      ar: "كيف يمكنني حجز موعد أو طلب عرض سعر؟",
      en: "How can I book an appointment or request a quote?",
    },
    answer: {
      ar: "يمكنك التواصل عبر واتساب مباشرة أو الاتصال بالرقم +966 55 999 9937 وسيقوم فريقنا بتحديد الموعد والتفاصيل المناسبة لسيارتك.",
      en: "You can reach us directly on WhatsApp, or call +966 55 999 9937. Our team will confirm the appointment and the details suited to your vehicle.",
    },
  },
  {
    key: "pricing",
    question: {
      ar: "هل الأسعار متوفرة على الموقع؟",
      en: "Are prices available on the website?",
    },
    answer: {
      ar: "الأسعار تختلف حسب نوع السيارة والخدمة ومدى التغطية، لذا لا نعرض قوائم أسعار ثابتة. نرسل لك عرض سعر واضحًا عبر واتساب بعد معرفة تفاصيل سيارتك.",
      en: "Pricing depends on the vehicle type, service, and coverage level, so we don't publish fixed price lists. We'll send you a clear quote on WhatsApp once we know your vehicle's details.",
    },
  },
  {
    key: "payment",
    question: {
      ar: "ما وسائل الدفع المتاحة؟",
      en: "Which payment methods are accepted?",
    },
    answer: {
      ar: "وفق الملف الرسمي، يتم قبول الدفع بالبطاقة في المركز.",
      en: "According to the official listing, card payments are accepted at the centre.",
    },
  },
  {
    key: "parking",
    question: {
      ar: "هل توجد مواقف للسيارات؟",
      en: "Is parking available?",
    },
    answer: {
      ar: "نعم، تتوفر مواقف للسيارات للعملاء، كما توجد مواقف مخصصة للأشخاص ذوي الإعاقة.",
      en: "Yes — customer parking is available, and there are dedicated parking spaces for people with disabilities.",
    },
  },
  {
    key: "ppf-duration",
    question: {
      ar: "كم يستغرق تركيب فيلم حماية الطلاء؟",
      en: "How long does PPF installation take?",
    },
    answer: {
      ar: "تعتمد المدة على حجم السيارة ومدى التغطية المطلوبة. سيقوم فريق أولوية العناية بإخبارك بالمدة المتوقعة عند تأكيد الحجز.",
      en: "The duration depends on the vehicle size and the requested coverage. The Priority Care team will confirm an expected timeframe when your booking is confirmed.",
    },
  },
  {
    key: "ppf-used-cars",
    question: {
      ar: "هل يمكن تركيب فيلم الحماية والنانو سيراميك على سيارة مستعملة؟",
      en: "Can film protection and ceramic coating be installed on a used car?",
    },
    answer: {
      ar: "نعم، تُجهَّز السيارة أولًا بتحضير كامل للطلاء (تنظيف عميق وتلميع عند الحاجة) لضمان أعلى ترابط لطبقة الحماية، ثم يُركَّب الفيلم أو السيراميك فوق السطح المجهز.",
      en: "Yes. The car is first prepared with full paint preparation (deep cleaning and polishing when needed) to ensure optimal bonding, before the film or ceramic layer is applied.",
    },
  },
  {
    key: "ceramic-vs-ppf",
    question: {
      ar: "ما الفرق بين النانو سيراميك وفيلم الحماية PPF؟",
      en: "What's the difference between nano ceramic and PPF?",
    },
    answer: {
      ar: "النانو سيراميك طبقة كيميائية تحمي الطلاء من العوامل الجوية والأوساخ وتضفي لمعانًا طويل الأمد، بينما يوفر فيلم الطلاء PPF حماية ميكانيكية بسماكة مرئية تعمل كدرع ضد الخدوش والصدمات. ويمكن دمجهما معًا لمن يريد أقصى حماية.",
      en: "Nano ceramic is a chemical layer that shields paint from weather and contaminants while adding long-lasting gloss. PPF, in contrast, is a physical film applied as a shield against scratches and impacts. The two can be combined for maximum protection.",
    },
  },
  {
    key: "tinting-legal",
    question: {
      ar: "ما درجة التظليل المسموح بها في السعودية؟",
      en: "What tint levels are allowed in Saudi Arabia?",
    },
    answer: {
      ar: "تخضع نسبة التظليل للوائح المرورية الرسمية في المملكة، ويُفضّل مراجعة الجهات المختصة لمعرفة النسب المعتمدة. سنساعدك في اختيار النسبة المناسبة عند زيارة المركز.",
      en: "Tint levels are governed by the Kingdom's official traffic regulations. Please check with the relevant authority for approved percentages — we'll help you choose the right level when you visit.",
    },
  },
  {
    key: "polishing-frequency",
    question: {
      ar: "كم مرة أحتاج لتلميع السيارة؟",
      en: "How often does a car need polishing?",
    },
    answer: {
      ar: "يعتمد ذلك على حالة الطلاء ونمط الاستخدام. يوصى عادةً بالتلميع عند ظهور آثار الدوائر أو فقدان اللمعان، وفريقنا سيقيم حالتك ويقدّم التوصية المناسبة.",
      en: "It depends on paint condition and usage. Polishing is generally recommended when swirl marks or gloss loss become noticeable — our team will assess and recommend accordingly.",
    },
  },
];

export function getFaqsByKeys(keys: string[]): Faq[] {
  return faqs.filter((f) => keys.includes(f.key));
}

export function getFaqByKey(key: string): Faq | undefined {
  return faqs.find((f) => f.key === key);
}