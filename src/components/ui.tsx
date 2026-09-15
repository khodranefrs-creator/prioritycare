"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";

/* ------------------------------ Reveal ------------------------------ */

const revealVariants = {
  up: "translate-y-6",
  fade: "",
} as const;

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  variant?: keyof typeof revealVariants;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  const Element = Tag as React.ElementType;

  return (
    <Element
      ref={ref}
      className={[
        "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        visible
          ? "translate-y-0 opacity-100"
          : `opacity-0 ${revealVariants[variant]}`,
        className,
      ].join(" ")}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Element>
  );
}

/* ------------------------------ Buttons ------------------------------ */

export type ButtonVariant = "brass" | "outline" | "ghost" | "light" | "ink";

const buttonBase =
  "group inline-flex items-center justify-center gap-3 whitespace-nowrap " +
  "rounded-full px-7 py-4 text-[13px] font-medium tracking-[0.06em] " +
  "transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4";

const buttonVariants: Record<ButtonVariant, string> = {
  brass: "bg-brass text-ink hover:bg-brass-bright shadow-[0_16px_40px_-16px_rgba(201,169,106,0.55)]",
  outline:
    "border border-cream/25 text-cream hover:border-brass hover:text-brass",
  ghost: "text-mist hover:text-cream",
  light:
    "bg-bone-dust text-ink hover:bg-brass ",
  ink: "bg-ink text-cream hover:bg-ink-raised",
};

export function ButtonLink({
  href,
  variant = "brass",
  children,
  className = "",
  icon,
  target,
  rel,
}: {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  icon?: "arrow" | "whatsapp" | "phone" | "map" | "none";
  target?: string;
  rel?: string;
}) {
  const suffix =
    icon && icon !== "none" ? (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5 rtl:rotate-180 rtl:group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0"
        aria-hidden
      >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ) : null;

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
    >
      {children}
      {suffix}
    </Link>
  );
}

/* ------------------------------ Layout ------------------------------ */

export function Container({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return createElement(
    Tag,
    { className: `mx-auto w-full max-w-[1280px] px-6 md:px-10 ${className}` },
    children,
  );
}

export function Section({
  children,
  className = "",
  as: Tag = "section",
}: {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return createElement(Tag, { className: `relative ${className}` }, children);
}

/* --------------------------- Section heading -------------------------- */

export function Kicker({
  index,
  children,
  tone = "dark",
  className = "",
  mirror,
}: {
  index?: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
  mirror?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] ${
        tone === "dark" ? "text-brass" : "text-ink/60"
      } ${className}`}
    >
      {index ? (
        <span
          className={`tabular-nums ${mirror ? "rtl:tracking-[0.2em] rtl:-scale-x-100" : ""}`}
        >
          {index}
        </span>
      ) : null}
      <span className="h-px w-10 bg-current opacity-60" />
      {children}
    </p>
  );
}

export function SectionHeading({
  kicker,
  title,
  description,
  tone = "dark",
  align = "start",
  className = "",
}: {
  kicker?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  tone?: "dark" | "light";
  align?: "start" | "center";
  className?: string;
}) {
  const toneClasses =
    tone === "dark"
      ? {
          title: "text-cream",
          description: "text-fog",
        }
      : {
          title: "text-ink",
          description: "text-ink/60",
        };
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start"
      } ${className}`}
    >
      {kicker ? <Kicker tone={tone}>{kicker}</Kicker> : null}
      <h2
        className={`max-w-3xl text-balance text-3xl font-semibold leading-[1.12] tracking-display md:text-[2.75rem] ${toneClasses.title}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-2xl text-balance text-[15px] leading-relaxed md:text-base ${toneClasses.description}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------- Display ------------------------------ */

export function Display1({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`text-balance text-4xl font-semibold leading-[1.06] tracking-display md:text-6xl lg:text-7xl ${className}`}
    >
      {children}
    </h1>
  );
}

/* ------------------------------ List item ------------------------------ */

export function TickItem({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          tone === "dark" ? "bg-brass/15 text-brass" : "bg-ink/10 text-ink"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3 w-3"
          aria-hidden
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}