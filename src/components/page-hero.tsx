import Image from "next/image";
import type { ReactNode } from "react";
import { unsplashUrl, type Photo } from "@/content/images";
import { Container, Kicker, Display1 } from "@/components/ui";

export function PageHero({
  kicker,
  title,
  description,
  photo,
  alt,
  tall = false,
}: {
  kicker: ReactNode;
  title: string;
  description?: ReactNode;
  photo?: Photo;
  alt?: string;
  tall?: boolean;
}) {
  return (
    <section
      className={`relative flex items-end overflow-hidden pt-[72px] ${
        tall ? "min-h-[72vh]" : "min-h-[52vh]"
      }`}
    >
      {photo ? (
        <>
          <Image
            src={unsplashUrl(photo.id, { w: 1920 })}
            alt={alt ?? photo.alt.en}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-ink-soft to-ink" />
      )}
      <Container className="relative flex flex-col items-start gap-6 pb-14 pt-20">
        <Kicker mirror>{kicker}</Kicker>
        <Display1 className="max-w-4xl">{title}</Display1>
        {description ? (
          <p className="max-w-2xl text-balance text-base leading-relaxed text-mist">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}