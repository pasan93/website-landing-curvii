import Link from "next/link";
import { Container } from "../components/Container";

export default function TermsPage() {
  return (
    <main className="py-16">
      <Container>
        <h1 className="text-3xl font-bold leading-heading tracking-tight">
          Terms
        </h1>
        <p className="mt-4 text-lg leading-body tracking-tight text-warm-purple/80">
          This is a placeholder terms page for the Curvii landing site.
        </p>
        <p className="mt-6 text-sm text-warm-purple/70">
          If you’d like, I can replace this with your full terms and conditions.
        </p>
        <div className="mt-8">
          <Link href="/" className="text-sm font-semibold text-lavender-blue">
            ← Back to home
          </Link>
        </div>
      </Container>
    </main>
  );
}

