import type { Locale } from "@/lib/i18n";

export function Mark({ locale, className = "" }: { locale: Locale; className?: string }) {
  return (
    <span className={`flex flex-col leading-none ${className}`}>
      <span className="font-display text-[17px] font-semibold uppercase tracking-[0.14em] rtl:text-xl rtl:tracking-normal">
        Priority <span className="text-brass">Care</span>
      </span>
      <span className="mt-1.5 text-[10px] font-light tracking-[0.08em] text-mist">
        {locale === "ar" ? "أولوية العناية · الرياض" : "Riyadh · Saudi Arabia"}
      </span>
    </span>
  );
}