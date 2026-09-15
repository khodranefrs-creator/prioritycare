import Link from "next/link";
import { Container, Display1 } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center pt-[72px]">
      <Container className="flex flex-col items-center gap-6 py-16 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-brass" dir="ltr">
          404
        </p>
        <Display1 className="max-w-xl">
          <span className="text-cream">{"الصفحة غير موجودة"}</span>
          <span className="text-mist">{" / "}</span>
          <span className="text-cream">Page not found</span>
        </Display1>
        <p className="max-w-md text-sm leading-relaxed text-mist">
          {"ما تتطلع إليه ليس هنا، لكن خدمة أولوية العناية جاهزة لاستقبالك."}
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/ar"
            lang="ar"
            className="inline-flex items-center rounded-full bg-brass px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-brass-bright"
          >
            {"الرئيسية"}
          </Link>
          <Link
            href="/en"
            lang="en"
            className="inline-flex items-center rounded-full border border-white/10 px-7 py-3.5 text-sm text-cream transition-colors hover:border-brass hover:text-brass"
          >
            Home
          </Link>
        </div>
      </Container>
    </section>
  );
}