import Image from "next/image";
import { Container } from "./Container";
import { FadeIn } from "./ui/FadeIn";

export function TrustBar() {
  return (
    <section className="bg-natural-white">
      <Container className="py-8">
        <FadeIn className="flex flex-col items-center justify-center gap-6 text-center">
          <div className="text-sm font-semibold tracking-tight text-warm-purple/80">
            Trusted by New Zealand businesses who want clarity — not spreadsheets.
          </div>
          <div className="flex items-center gap-2 rounded-full border border-warm-grey/70 bg-warm-grey/30 px-4 py-2">
            <Image
              src="/images/Xero Wordmark__Blue.svg"
              alt="Xero"
              width={60}
              height={24}
            />
            <span className="text-xs font-semibold text-warm-purple/70">
              Seamless integration
            </span>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

