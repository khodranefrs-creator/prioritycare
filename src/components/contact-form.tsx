"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n";
import { whatsappHref } from "@/content/business";
import { services } from "@/content/services";
import { ui } from "@/content/ui";
import { WhatsAppIcon, SelectIcon } from "@/components/icons";

const copy = {
  ar: {
    errorName: "يرجى إدخال الاسم",
    errorService: "يرجى اختيار الخدمة",
  },
  en: {
    errorName: "Please enter your name",
    errorService: "Please select a service",
  },
} as const;

export function ContactForm({ locale }: { locale: Locale }) {
  const t = ui.contact.form;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceSlug, setServiceSlug] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; service?: string }>({});

  const buildMessage = () => {
    const service = services.find((s) => s.slug[locale] === serviceSlug);
    const serviceName = service?.title[locale] ?? "";
    const lines = [
      `${t.name[locale]}: ${name}`,
      serviceName ? `${t.service[locale]}: ${serviceName}` : null,
      vehicle ? `${t.vehicle[locale]}: ${vehicle}` : null,
      phone ? `${t.phoneLabel[locale]}: ${phone}` : null,
      message ? `${t.message[locale]}: ${message}` : null,
    ].filter(Boolean);

    return lines.join("\n");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = copy[locale].errorName;
    if (!serviceSlug) newErrors.service = copy[locale].errorService;
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const url = whatsappHref(buildMessage());
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xs font-medium uppercase tracking-[0.18em] text-mist">
          {t.name[locale]} *
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
          }}
          placeholder={t.namePlaceholder[locale]}
          className={`rounded-xl border bg-ink px-4 py-3.5 text-sm text-cream outline-none transition-colors placeholder:text-fog ${
            errors.name ? "border-alert" : "border-white/10 focus:border-brass"
          }`}
        />
        {errors.name ? (
          <span className="text-xs text-alert">{errors.name}</span>
        ) : null}
      </div>

      {/* Service */}
      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-xs font-medium uppercase tracking-[0.18em] text-mist">
          {t.service[locale]} *
        </label>
        <div className="relative">
          <select
            id="service"
            required
            value={serviceSlug}
            onChange={(e) => {
              setServiceSlug(e.target.value);
              if (errors.service) setErrors((p) => ({ ...p, service: undefined }));
            }}
            className={`appearance-none rounded-xl border bg-ink px-4 py-3.5 pr-10 text-sm text-cream outline-none transition-colors ${
              errors.service ? "border-alert" : "border-white/10 focus:border-brass"
            } ${!serviceSlug ? "text-fog" : ""}`}
          >
            <option value="" disabled>
              {t.servicePlaceholder[locale]}
            </option>
            {services.map((s) => (
              <option key={s.slug.en} value={s.slug[locale]}>
                {s.title[locale]}
              </option>
            ))}
          </select>
          <SelectIcon className="pointer-events-none absolute end-4 top-1/2 h-4 w-4 -translate-y-1/2 text-fog" />
        </div>
        {errors.service ? (
          <span className="text-xs text-alert">{errors.service}</span>
        ) : null}
      </div>

      {/* Vehicle */}
      <div className="flex flex-col gap-2">
        <label htmlFor="vehicle" className="text-xs font-medium uppercase tracking-[0.18em] text-mist">
          {t.vehicle[locale]}
        </label>
        <input
          id="vehicle"
          type="text"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
          placeholder={t.vehiclePlaceholder[locale]}
          className="rounded-xl border border-white/10 bg-ink px-4 py-3.5 text-sm text-cream outline-none transition-colors placeholder:text-fog focus:border-brass"
        />
      </div>

      {/* Phone (optional) */}
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-xs font-medium uppercase tracking-[0.18em] text-mist">
          {t.phoneLabel[locale]}
        </label>
        <input
          id="phone"
          type="tel"
          dir="ltr"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={t.phonePlaceholder[locale]}
          className="rounded-xl border border-white/10 bg-ink px-4 py-3.5 text-sm text-cream outline-none transition-colors placeholder:text-fog focus:border-brass"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.18em] text-mist">
          {t.message[locale]}
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.messagePlaceholder[locale]}
          className="resize-none rounded-xl border border-white/10 bg-ink px-4 py-3.5 text-sm text-cream outline-none transition-colors placeholder:text-fog focus:border-brass"
        />
      </div>

      <button
        type="submit"
        className="group mt-1 flex items-center justify-center gap-3 rounded-full bg-brass px-7 py-4 text-sm font-medium text-ink transition-colors hover:bg-brass-bright"
      >
        <WhatsAppIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
        {t.submit[locale]}
      </button>

      <p className="max-w-md text-xs leading-relaxed text-fog">{t.note[locale]}</p>
    </form>
  );
}