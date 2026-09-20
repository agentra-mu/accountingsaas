import { NumberTicker } from "@/components/velora/number-ticker";
import { SpotlightCard } from "@/components/velora/spotlight-card";

const values = [
  { value: 0, label: "Client logins to manage or reset" },
  { value: 3, label: "Automatic reminders per outstanding item" },
  { value: 1, label: "Dashboard instead of scattered email threads" },
];

export default function ValueStrip() {
  return (
    <section className="border-t border-rule py-18">
      <p className="mb-3 font-mono text-[13px] text-kraft">Why firms switch</p>
      <h2 className="mb-10 max-w-[22ch] font-serif text-[26px] font-medium tracking-tight sm:text-[34px]">
        The part of the job nobody bills for, finally off your plate.
      </h2>
      <div className="grid grid-cols-1 overflow-hidden rounded-[4px] border border-rule bg-paper-raised sm:grid-cols-3">
        {values.map((v, i) => (
          <SpotlightCard
            key={v.label}
            className={
              i < values.length - 1
                ? "border-b border-rule px-6 py-7 sm:border-b-0 sm:border-r"
                : "px-6 py-7"
            }
          >
            <div className="mb-1.5 font-serif text-[30px] font-medium">
              <NumberTicker value={v.value} />
            </div>
            <div className="text-sm text-ink-soft">{v.label}</div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
