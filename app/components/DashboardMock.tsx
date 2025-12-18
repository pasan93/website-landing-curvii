import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";

type DashboardMockProps = {
  density?: "compact" | "full";
};

export function DashboardMock({ density = "full" }: DashboardMockProps) {
  const isCompact = density === "compact";

  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-warm-grey/70 bg-natural-white/60 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-highlighter-pink/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-highlighter-orange/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-natural-sage/70" />
        </div>
        <Badge tone="blue">Connected to Xero</Badge>
      </div>

      <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Revenue", value: "$128,420", tone: "sage" as const },
          { label: "Expenses", value: "$74,110", tone: "grey" as const },
          { label: "Profit", value: "$54,310", tone: "sage" as const },
          { label: "Cash Flow", value: "+$9,820", tone: "sage" as const },
        ].map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border border-warm-grey/70 bg-natural-white px-4 py-3"
          >
            <div className="text-xs font-semibold text-warm-purple/70">
              {metric.label}
            </div>
            <div className="mt-2 text-2xl leading-heading tracking-tight text-warm-purple">
              {metric.value}
            </div>
            <div className="mt-2">
              <Badge tone={metric.tone}>
                {metric.label === "Expenses" ? "vs last month" : "+12% MoM"}
              </Badge>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 px-4 pb-4 lg:grid-cols-3">
        <div className="rounded-xl border border-warm-grey/70 bg-natural-white p-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">Revenue trend</div>
            <Badge tone="sage">Up and to the right</Badge>
          </div>
          <div className="mt-4 flex h-28 items-end gap-2">
            {[32, 42, 38, 55, 60, 74, 82].map((h, i) => (
              <div
                key={i}
                className="w-full rounded-md bg-natural-sage/30"
                style={{ height: `${h}%` }}
              >
                <div
                  className="h-full w-full rounded-md bg-natural-sage/70"
                  style={{ clipPath: "inset(0 0 0 0 round 6px)" }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-warm-grey/70 bg-natural-white p-4">
          <div className="text-sm font-semibold">AI weekly brief</div>
          <p className="mt-3 text-sm leading-body text-warm-purple/80">
            Revenue is tracking above last month, and overdue invoices are down.
            Cash flow looks sweet as — keep an eye on upcoming GST.
          </p>
          {!isCompact && (
            <div className="mt-4 rounded-xl bg-warm-grey/35 p-3 text-sm">
              <div className="font-semibold">Try asking:</div>
              <div className="mt-1 text-warm-purple/80">
                “Which customers owe me money?”
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

