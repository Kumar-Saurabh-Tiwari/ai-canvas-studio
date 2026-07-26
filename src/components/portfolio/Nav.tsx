import { Link } from "@tanstack/react-router";

const items = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Toolstack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/40 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-[var(--neon)]">
            <span className="absolute inset-0 rounded-full bg-[var(--neon)] blur-md opacity-70 animate-pulse-ring" />
          </span>
          <span className="font-mono text-sm tracking-widest uppercase">ADA/REYES</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="relative text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[var(--neon)] hover:after:w-full after:transition-all"
            >
              {it.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-1.5 text-xs font-mono uppercase tracking-widest hover:border-[var(--neon)] hover:text-[var(--neon)] transition-colors"
        >
          <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[var(--neon-3)]">
            <span className="absolute inset-0 rounded-full bg-[var(--neon-3)] blur-sm animate-pulse-ring" />
          </span>
          Available
        </a>
      </div>
    </header>
  );
}