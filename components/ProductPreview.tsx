import Ledger, { type LedgerEntry } from "@/components/Ledger";
import { ContainerScroll } from "@/components/velora/container-scroll";
import { BlurFade } from "@/components/velora/blur-fade";

const previewEntries: LedgerEntry[] = [
  { client: "Alvarez & Co.", date: "Sept 1", status: "complete", statusLabel: "Complete" },
  { client: "Rosen Family Trust", date: "Sept 1", status: "waiting", statusLabel: "Waiting — reminder sent" },
  { client: "Kettleworth LLC", date: "Sept 1", status: "overdue", statusLabel: "Overdue, day 8" },
  { client: "Nguyen & Partners", date: "Sept 3", status: "complete", statusLabel: "Complete" },
  { client: "Harlow Bookkeeping", date: "Sept 4", status: "waiting", statusLabel: "Waiting — reminder sent" },
  { client: "Prescott Realty Group", date: "Sept 5", status: "complete", statusLabel: "Complete" },
];

export default function ProductPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
      <ContainerScroll
        header={
          <BlurFade>
            <p className="font-mono text-[13px] text-kraft">One dashboard</p>
            <h2 className="mx-auto mt-3 max-w-xl font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              Everything you&apos;re owed, at a glance.
            </h2>
          </BlurFade>
        }
      >
        <div className="p-6 sm:p-10">
          <Ledger entries={previewEntries} animated={false} />
        </div>
      </ContainerScroll>
    </section>
  );
}
