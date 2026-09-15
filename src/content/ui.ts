import type { L10n } from "@/lib/i18n";

/** Shared UI strings used across components and pages. */
export const ui = {
  nav: {
    openMenu: { ar: "فتح القائمة", en: "Open menu" } satisfies L10n,
    closeMenu: { ar: "إغلاق القائمة", en: "Close menu" } satisfies L10n,
    menu: { ar: "القائمة", en: "Menu" } satisfies L10n,
  },
  hero: {
    scroll: { ar: "اكتشف أكثر", en: "Scroll to explore" } satisfies L10n,
  },
  actions: {
    call: { ar: "اتصل بنا", en: "Call us" } satisfies L10n,
    whatsapp: { ar: "واتساب", en: "WhatsApp" } satisfies L10n,
    directions: { ar: "الاتجاهات", en: "Directions" } satisfies L10n,
    openMaps: { ar: "افتح في خرائط جوجل", en: "Open in Google Maps" } satisfies L10n,
    viewAll: { ar: "عرض الكل", en: "View all" } satisfies L10n,
    learnMore: { ar: "اكتشف المزيد", en: "Learn more" } satisfies L10n,
    viewService: { ar: "تفاصيل الخدمة", en: "View service" } satisfies L10n,
    requestQuote: { ar: "اطلب عرض سعر", en: "Request a quote" } satisfies L10n,
    backHome: { ar: "العودة للرئيسية", en: "Back to home" } satisfies L10n,
    follow: { ar: "تابعنا", en: "Follow" } satisfies L10n,
  },
  sections: {
    services: {
      kicker: { ar: "خدماتنا", en: "Services" } satisfies L10n,
      title: {
        ar: "حماية وعناية بمعايير احترافية",
        en: "Protection and care at a professional standard",
      } satisfies L10n,
      note: {
        ar: "هذه الخدمات معتمدة من ملف أولوية العناية الرسمي — للحصول على عرض سعر دقيق تواصل معنا مباشرة.",
        en: "These services follow the official Priority Care listing — contact us directly for an accurate quote.",
      } satisfies L10n,
    },
    trust: {
      ratingLabel: { ar: "تقييم الخرائط", en: "Map rating" } satisfies L10n,
      reviewsSuffix: { ar: "تقييم", en: "reviews" } satisfies L10n,
      locationLabel: { ar: "الموقع", en: "Location" } satisfies L10n,
      hoursLabel: { ar: "ساعات العمل", en: "Hours" } satisfies L10n,
      paymentLabel: { ar: "الدفع بالبطاقة", en: "Card accepted" } satisfies L10n,
    },
    why: {
      kicker: { ar: "لماذا أولوية العناية", en: "Why Priority Care" } satisfies L10n,
      title: {
        ar: "منهجية دقيقة تُحافظ على قيمة السيارة",
        en: "A precise approach that protects your car's value",
      } satisfies L10n,
    },
    process: {
      kicker: { ar: "كيف نعمل", en: "How we work" } satisfies L10n,
      title: {
        ar: "من التقييم إلى التسليم",
        en: "From assessment to delivery",
      } satisfies L10n,
    },
    faq: {
      kicker: { ar: "الأسئلة الشائعة", en: "FAQ" } satisfies L10n,
      title: {
        ar: "إجابات واضحة لأسئلتكم",
        en: "Clear answers to your questions",
      } satisfies L10n,
    },
    work: {
      kicker: { ar: "تابع أعمالنا", en: "Follow our work" } satisfies L10n,
      title: {
        ar: "نتفاعل مع عملائنا عبر منصاتنا",
        en: "We share our work with our community",
      } satisfies L10n,
      instagramDesc: {
        ar: "لقطات دقيقة من داخل الاستوديو وتفاصيل التركيب",
        en: "Precise studio shots and installation detail",
      } satisfies L10n,
      tiktokDesc: {
        ar: "فيديوهات قصيرة توثّق مراحل الحماية والعناية",
        en: "Short videos documenting protection and care stages",
      } satisfies L10n,
    },
    location: {
      kicker: { ar: "موقعنا", en: "Our location" } satisfies L10n,
      title: {
        ar: "شارع العروبة · حي السليمانية",
        en: "Al Urubah Road · As Sulaymaniyah",
      } satisfies L10n,
    },
    contact: {
      kicker: { ar: "تواصل معنا", en: "Get in touch" } satisfies L10n,
      title: {
        ar: "جاهزون للعناية بسيارتك",
        en: "Ready to take care of your car",
      } satisfies L10n,
    },
  },
  servicePage: {
    overview: { ar: "عن الخدمة", en: "Overview" } as L10n,
    benefits: { ar: "لماذا تهمك هذه الخدمة", en: "Why it matters" } as L10n,
    provided: { ar: "ما الذي نوفره", en: "What we provide" } as L10n,
    processTitle: { ar: "خطوات العمل", en: "Our process" } as L10n,
    related: { ar: "خدمات أخرى", en: "Other services" } as L10n,
    ctaTitle: { ar: "اشرح لنا ما تحتاجه", en: "Tell us what you need" } as L10n,
    ctaSubtitle: {
      ar: "أرسل لنا رسالة عبر واتساب وسنعاود التواصل معك بأسرع وقت.",
      en: "Message us on WhatsApp and we'll get back to you quickly.",
    } as L10n,
  },
  about: {
    heroKicker: { ar: "عن أولوية العناية", en: "About Priority Care" } as L10n,
    introTitle: {
      ar: "استوديو متخصص يمنح سيارتك الحماية والعناية التي تستحقها",
      en: "A specialist studio that gives your car the protection and care it deserves",
    } as L10n,
  },
  work: {
    heroKicker: { ar: "أعمالنا", en: "Our work" } as L10n,
    statement: {
      ar: "نوثّق تفاصيل عملنا على إنستغرام وتيك توك — من تحضير الطلاء حتى التسليم.",
      en: "We document the details of our work on Instagram and TikTok — from paint preparation to delivery.",
    } as L10n,
    editorialNote: {
      ar: "الصور التالية صور فوتوغرافية تعبيرية لأغراض العرض، وليست صور مشاريع فعلية.",
      en: "The images below are decorative editorial photography for presentation purposes and do not represent actual projects.",
    } as L10n,
  },
  contact: {
    title: { ar: "تواصل معنا", en: "Contact us" } as L10n,
    subtitle: {
      ar: "راسلنا عبر واتساب، أو اتصل بنا، أو زرنا في حي السليمانية.",
      en: "Reach us on WhatsApp, by phone, or visit us in As Sulaymaniyah.",
    } as L10n,
    phone: { ar: "الهاتف", en: "Phone" } as L10n,
    whatsappTitle: { ar: "واتساب", en: "WhatsApp" } as L10n,
    addressTitle: { ar: "العنوان", en: "Address" } as L10n,
    hoursTitle: { ar: "أوقات العمل", en: "Opening hours" } as L10n,
    form: {
      title: { ar: "اطلب عرض سعر", en: "Request a quote" } as L10n,
      subtitle: {
        ar: "أجب عن الأسئلة التالية وسنرسل لك التفاصيل عبر واتساب مباشرة.",
        en: "Answer the questions below and we'll follow up with the details on WhatsApp.",
      } as L10n,
      name: { ar: "الاسم", en: "Your name" } as L10n,
      namePlaceholder: { ar: "اكتب اسمك", en: "Enter your name" } as L10n,
      phoneLabel: { ar: "رقم الهاتف (اختياري)", en: "Phone (optional)" } as L10n,
      phonePlaceholder: { ar: "05X XXX XXXX", en: "05X XXX XXXX" } as L10n,
      service: { ar: "الخدمة المطلوبة", en: "Required service" } as L10n,
      servicePlaceholder: { ar: "اختر الخدمة", en: "Select a service" } as L10n,
      vehicle: { ar: "نوع السيارة", en: "Vehicle" } as L10n,
      vehiclePlaceholder: {
        ar: "مثال: تويوتا كامري ٢٠٢٣",
        en: "e.g. Toyota Camry 2023",
      } as L10n,
      message: { ar: "تفاصيل إضافية (اختياري)", en: "Additional details (optional)" } as L10n,
      messagePlaceholder: {
        ar: "أخبرنا عن الطلاء أو الاحتياج...",
        en: "Tell us about your paint or requirements...",
      } as L10n,
      submit: { ar: "إرسال عبر واتساب", en: "Send via WhatsApp" } as L10n,
      note: {
        ar: "الضغط على الإرسال يفتح واتساب برسالة جاهزة لا تُخزّن بياناتك على هذا الموقع.",
        en: "Submitting opens WhatsApp with a prepared message; your data is not stored on this site.",
      } as L10n,
      errors: {
        name: { ar: "يرجى إدخال الاسم", en: "Please enter your name" } as L10n,
        service: { ar: "يرجى اختيار الخدمة", en: "Please select a service" } as L10n,
      },
    },
    mapTitle: { ar: "خريطة الموقع", en: "Map" } as L10n,
  },
  footer: {
    description: {
      ar: "استوديو حماية وعناية السيارات في الرياض — فيلم الحماية، النانو سيراميك، العزل الحراري، والتلميع لجميع أنواع السيارات.",
      en: "Car protection and care studio in Riyadh — PPF, nano ceramic, thermal insulation, and polishing for all types of vehicles.",
    } as L10n,
    nav: { ar: "روابط سريعة", en: "Quick links" } as L10n,
    servicesTitle: { ar: "الخدمات", en: "Services" } as L10n,
    contactTitle: { ar: "تواصل", en: "Contact" } as L10n,
    follow: { ar: "تابعنا", en: "Follow us" } as L10n,
    copyright: { ar: "© جميع الحقوق محفوظة لأولوية العناية", en: "© All rights reserved · Priority Care" } as L10n,
    editorial: {
      ar: "المحتوى الحاصل من الملف الرسمي للمركز. الصور التعبيرية من Unsplash.",
      en: "Content sourced from the centre's official listings. Editorial photography via Unsplash.",
    } as L10n,
  },
  rating: {
    source: {
      ar: "وفق ملف الخرائط الرسمي",
      en: "per the official map listing",
    } as L10n,
  },
  lang: {
    switchTo: { ar: "English", en: "العربية" } as L10n,
  },
} as const;

export type Ui = typeof ui;