import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/velora/blur-fade";

export type LedgerStatus = "complete" | "waiting" | "overdue";

export type LedgerEntry = {
  client: string;
  date: string;
  status: LedgerStatus;
  statusLabel: string;
};

const defaultEntries: LedgerEntry[] = [
  { client: "Alvarez & Co.", date: "Sept 1", status: "complete", statusLabel: "Complete" },
  { client: "Rosen Family Trust", date: "Sept 1", status: "waiting", statusLabel: "Waiting — reminder sent" },
  { client: "Kettleworth LLC", date: "Sept 1", status: "overdue", statusLabel: "Overdue, day 8" },
  { client: "Nguyen & Partners", date: "Sept 3", status: "complete", statusLabel: "Complete" },
];

const dotColor: Record<LedgerStatus, string> = {
  complete: "bg-stamp-green",
  waiting: "bg-kraft",
  overdue: "bg-stamp-red",
};

const textColor: Record<LedgerStatus, string> = {
  complete: "text-stamp-green",
  waiting: "text-ink-soft",
  overdue: "text-stamp-red",
};

export default function Ledger({
  entries = defaultEntries,
  animated = true,
}: {
  entries?: LedgerEntry[];
  animated?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-[4px] border border-rule bg-paper-raised">
      <div className="grid grid-cols-[1.6fr_1fr_1.4fr] border-b border-rule px-5 py-3.5 font-mono text-xs text-ink-soft sm:grid-cols-[1.6fr_1fr_1.4fr]">
        <span>Client</span>
        <span className="hidden sm:block">Requested</span>
        <span>Status</span>
      </div>
      {entries.map((entry, i) => {
        const row = (
          <div
            key={entry.client}
            className="grid grid-cols-[1.4fr_1fr] items-center border-b border-rule px-5 py-4.5 text-[15px] last:border-b-0 sm:grid-cols-[1.6fr_1fr_1.4fr]"
          >
            <span className="font-medium">{entry.client}</span>
            <span className="hidden font-mono text-[13px] text-ink-soft sm:block">{entry.date}</span>
            <span className={cn("flex items-center gap-2 font-mono text-[13px]", textColor[entry.status])}>
              <span className={cn("inline-block size-[7px] rounded-full", dotColor[entry.status])} />
              {entry.statusLabel}
            </span>
          </div>
        );

        if (!animated) return row;

        return (
          <BlurFade key={entry.client} delay={i * 0.08} offset={4} duration={0.4}>
            {row}
          </BlurFade>
        );
      })}
    </div>
  );
}
