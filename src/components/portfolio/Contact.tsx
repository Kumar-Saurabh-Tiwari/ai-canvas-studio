import { useState } from "react";

function Field({ id, label, type = "text", textarea }: { id: string; label: string; type?: string; textarea?: boolean }) {
  const [val, setVal] = useState("");
  const active = val.length > 0;
  const common =
    "peer w-full bg-transparent border-0 border-b border-border/60 py-3 px-0 text-base outline-none focus:border-[var(--neon)] transition-colors";
  return (
    <div className="relative">
      {textarea ? (
        <textarea id={id} rows={4} value={val} onChange={(e) => setVal(e.target.value)} className={common} />
      ) : (
        <input id={id} type={type} value={val} onChange={(e) => setVal(e.target.value)} className={common} />
      )}
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-0 font-mono uppercase tracking-widest text-xs text-muted-foreground transition-all ${
          active ? "-top-2 text-[var(--neon)]" : "top-3.5"
        } peer-focus:-top-2 peer-focus:text-[var(--neon)]`}
      >
        {label}
      </label>
    </div>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28 md:py-40 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--neon)]">§ 04 — Contact</div>
          <h2 className="mt-3 font-display text-5xl md:text-6xl font-medium tracking-tight leading-[0.95]">
            Let's make something<br />
            <span className="text-gradient">worth looking at.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            Studios, brand teams and founders — reach out for identity work, art
            direction, or AI-forward campaigns.
          </p>

          <div className="mt-10 space-y-3 font-mono text-sm">
            <a href="mailto:hello@adareyes.studio" className="block hover:text-[var(--neon)] transition-colors">
              hello@adareyes.studio →
            </a>
            <div className="text-muted-foreground">Lisbon · New York · Remote</div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "LinkedIn", href: "#" },
              { label: "Behance", href: "#" },
              { label: "Dribbble", href: "#" },
              { label: "Instagram", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="rounded-full border border-border/70 px-4 py-1.5 text-xs font-mono uppercase tracking-widest hover:border-[var(--neon)] hover:text-[var(--neon)] transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="lg:col-span-7 rounded-3xl border border-border/60 bg-card/50 p-8 md:p-10 space-y-8 backdrop-blur"
        >
          <div className="grid sm:grid-cols-2 gap-8">
            <Field id="name" label="Your name" />
            <Field id="email" label="Email" type="email" />
          </div>
          <Field id="company" label="Company / Studio" />
          <Field id="message" label="Tell me about the project" textarea />

          <div className="flex items-center justify-between pt-4">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {sent ? "Sent · thanks, I'll be in touch." : "Response in < 24h"}
            </div>
            <button
              type="submit"
              className="group relative inline-flex items-center gap-3 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium overflow-hidden hover:-translate-y-0.5 transition-transform"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--neon)] via-[var(--neon-2)] to-[var(--neon-3)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">{sent ? "Sent" : "Send message"}</span>
              <svg className="relative h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          </div>
        </form>
      </div>

      <footer className="mt-24 border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <div>© 2026 Ada Reyes · All rights reserved</div>
          <div className="flex items-center gap-2">
            <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[var(--neon-3)]">
              <span className="absolute inset-0 rounded-full bg-[var(--neon-3)] blur-sm animate-pulse-ring" />
            </span>
            Available for work — Q1 · 2026
          </div>
        </div>
      </footer>

      {/* floating badge */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-40 hidden md:inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 backdrop-blur-xl px-4 py-2 text-xs font-mono uppercase tracking-widest shadow-2xl hover:border-[var(--neon)] hover:text-[var(--neon)] transition-colors"
      >
        <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-[var(--neon-3)]">
          <span className="absolute inset-0 rounded-full bg-[var(--neon-3)] blur-sm animate-pulse-ring" />
        </span>
        Available for work
      </a>
    </section>
  );
}