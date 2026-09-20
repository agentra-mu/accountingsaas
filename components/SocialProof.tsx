import { Marquee } from "@/components/velora/marquee";

const firms = [
  "Alvarez & Co.",
  "Rosen Family Trust",
  "Kettleworth LLC",
  "Nguyen & Partners",
  "Harlow Bookkeeping",
  "Prescott Realty Group",
  "Dunmore Associates",
  "Iversen Tax Group",
];

export default function SocialProof() {
  return (
    <section className="border-y border-rule py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="mb-8 text-center font-mono text-[13px] text-kraft">
          Built for accounting firms like
        </p>
        <Marquee pauseOnHover className="[--duration:32s]">
          {firms.map((firm) => (
            <span
              key={firm}
              className="whitespace-nowrap rounded-full border border-rule bg-paper-raised px-5 py-2.5 font-mono text-sm text-ink-soft"
            >
              {firm}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
