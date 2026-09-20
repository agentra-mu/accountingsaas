import CtaButton from "@/components/CtaButton";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#why-finly", label: "Why Finly" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule/70 bg-paper/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <div className="font-serif text-[20px] font-semibold tracking-tight">
          Finly<span className="text-accent">.</span>
        </div>
        <nav className="hidden items-center gap-7 font-mono text-[13px] text-ink-soft md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
        <CtaButton size="sm">Get started</CtaButton>
      </div>
    </header>
  );
}
