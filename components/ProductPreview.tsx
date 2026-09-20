import Ledger, { type LedgerEntry } from "@/components/Ledger";
import { ContainerScroll } from "@/components/velora/container-scroll";

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
    <section className="page-section overflow-visible border-t border-rule py-18">
      <ContainerScroll
        header={
          <>
            <p className="mb-3 font-mono text-[13px] text-kraft">One dashboard</p>
            <h2 className="mx-auto max-w-[24ch] font-serif text-[26px] font-medium tracking-tight sm:text-[34px]">
              Everything you&apos;re owed, at a glance.
            </h2>
          </>
        }
      >
        <div className="p-6 sm:p-10">
          <Ledger entries={previewEntries} animated={false} />
        </div>
      </ContainerScroll>
    </section>
  );
}
