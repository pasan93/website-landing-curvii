import { Container } from "./Container";
import { FadeIn } from "./ui/FadeIn";
import { DashboardMock } from "./DashboardMock";
import { Badge } from "./ui/Badge";

export function DashboardPreview() {
  return (
    <section className="bg-warm-grey/20">
      <Container className="py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <h2 className="text-3xl font-bold leading-heading tracking-tight">
              A dashboard built for real-life business
            </h2>
            <p className="mt-4 text-lg leading-body tracking-tight text-warm-purple/80">
              Check the essentials fast. Then go deeper with AI summaries and
              questions whenever you need.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge tone="sage">Cash flow</Badge>
              <Badge tone="grey">Invoices</Badge>
              <Badge tone="blue">Revenue</Badge>
              <Badge tone="pink">AI insights</Badge>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:pl-6">
            <div className="overflow-x-auto rounded-2xl bg-natural-white/60 p-4">
              <div className="min-w-[560px]">
                <DashboardMock />
              </div>
            </div>
            <p className="mt-3 text-sm text-warm-purple/70">
              Mobile? No worries — scroll to explore.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

