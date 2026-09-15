"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Faq } from "@/content/faq";
import { ChevronIcon } from "@/components/icons";

export function FaqAccordion({
  items,
  locale,
  defaultOpen = 0,
}: {
  items: Faq[];
  locale: Locale;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="flex flex-col gap-3">
      {items.map((faq, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div
            key={faq.key}
            className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
              isOpen ? "border-brass/30 bg-ink-soft" : "border-white/5 bg-ink-soft/50"
            }`}
          >
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-start"
            >
              <span
                className={`text-[15px] font-medium leading-snug transition-colors ${
                  isOpen ? "text-brass" : "text-cream"
                }`}
              >
                {faq.question[locale]}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "rotate-180 border-brass text-brass"
                    : "border-white/10 text-mist"
                }`}
              >
                <ChevronIcon className="h-4 w-4" />
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-mist" dir="auto">
                  {faq.answer[locale]}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}