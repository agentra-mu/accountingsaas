import { cn } from "@/lib/utils";

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

// Adapted from Velora UI (MIT) — https://github.com/ColorlibHQ/velora-ui
export function BentoGrid({ className, children, ...props }: BentoGridProps) {
  return (
    <div
      data-slot="bento-grid"
      className={cn("grid w-full auto-rows-[20rem] grid-cols-1 gap-4 md:grid-cols-3", className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string;
  background?: React.ReactNode;
  icon?: React.ReactNode;
}

export function BentoCard({ name, description, background, icon, className, ...props }: BentoCardProps) {
  return (
    <div
      data-slot="bento-card"
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-rule bg-paper-raised transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5",
        className
      )}
      {...props}
    >
      {background && (
        <div className="absolute inset-0 overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none">
          {background}
        </div>
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-paper-raised via-paper-raised/70 to-transparent"
      />
      <div className="pointer-events-none relative z-10 flex flex-col gap-1 p-6">
        {icon && <div className="mb-2 w-fit text-accent [&_svg]:size-7">{icon}</div>}
        <h3 className="font-sans text-lg font-semibold text-ink">{name}</h3>
        <p className="text-sm text-ink-soft">{description}</p>
      </div>
    </div>
  );
}
