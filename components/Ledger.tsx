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

export default function Ledger({ entries = defaultEntries }: { entries?: LedgerEntry[] }) {
  return (
    <div className="ledger">
      <div className="ledger-head">
        <span>Client</span>
        <span>Requested</span>
        <span>Status</span>
      </div>
      {entries.map((entry) => (
        <div className="ledger-row" key={entry.client}>
          <span className="client">{entry.client}</span>
          <span className="date">{entry.date}</span>
          <span className={`status${entry.status === "complete" || entry.status === "overdue" ? ` ${entry.status}` : ""}`}>
            <span className={`dot ${entry.status}`}></span>
            {entry.statusLabel}
          </span>
        </div>
      ))}
    </div>
  );
}
