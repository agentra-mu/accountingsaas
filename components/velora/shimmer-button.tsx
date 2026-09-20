import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

// Adapted from Velora UI (MIT) — https://github.com/ColorlibHQ/velora-ui
export function ShimmerButton({ className, children, ...props }: ShimmerButtonProps) {
  return (
    <button
      data-slot="shimmer-button"
      className={cn(
        "group relative inline-flex h-11 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-ink px-6 font-sans text-sm font-semibold text-paper shadow-lg shadow-ink/20 transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-ink/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kraft active:scale-[0.98]",
        className
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      <span
        aria-hidden
        className="animate-shimmer absolute inset-0 bg-[linear-gradient(110deg,transparent_30%,rgba(247,245,240,0.35)_50%,transparent_70%)] bg-[length:250%_100%]"
      />
    </button>
  );
}
