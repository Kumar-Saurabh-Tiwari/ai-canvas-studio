import heroImg from "@/assets/hero-canvas.jpg";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* ambient orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-[var(--neon)] opacity-30 blur-[140px] animate-float" />
      <div className="pointer-events-none absolute top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[var(--neon-2)] opacity-25 blur-[140px] animate-float-slower" />
      <div className="pointer-events-none absolute inset-0 noise opacity-[0.08] mix-blend-overlay" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/40 backdrop-blur px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground animate-rise">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-3)]" /> Portfolio · 2026 Edition
          </div>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight font-medium animate-rise" style={{ animationDelay: "80ms" }}>
            Where <span className="italic font-light">art direction</span>
            <br />
            meets <span className="text-gradient font-semibold">generative AI.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed animate-rise" style={{ animationDelay: "180ms" }}>
            Senior Graphic Designer leveraging artificial intelligence, motion design,
            and precision layout to craft high-impact brand identities.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-rise" style={{ animationDelay: "260ms" }}>
            <a
              href="#work"
              className="group relative inline-flex items-center gap-3 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium overflow-hidden transition-transform hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--neon)] via-[var(--neon-2)] to-[var(--neon-3)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">View Selected Work</span>
              <svg className="relative h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-border px-6 py-3.5 text-sm font-medium hover:border-[var(--neon)] hover:text-[var(--neon)] transition-colors"
            >
              Get in Touch
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-3)] group-hover:bg-[var(--neon)] transition-colors" />
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 max-w-lg gap-6 animate-rise" style={{ animationDelay: "360ms" }}>
            {[
              { k: "9+", v: "Years in agency" },
              { k: "120+", v: "Brands shipped" },
              { k: "40+", v: "AI systems" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl font-medium">{s.k}</div>
                <div className="mt-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* floating canvas */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-square w-full max-w-[520px] mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--neon)] via-[var(--neon-2)] to-[var(--neon-3)] blur-3xl opacity-40 animate-pulse-ring" />
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-border/60 bg-card/40 backdrop-blur-xl shadow-2xl animate-float">
              <img
                src={heroImg}
                alt="Generative AI canvas preview"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/80">
                <span className="rounded-full bg-black/40 backdrop-blur px-2 py-1 border border-white/10">Canvas · 01</span>
                <span className="rounded-full bg-black/40 backdrop-blur px-2 py-1 border border-white/10">Runway · MJ · SD</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 p-3 text-white/90">
                <div className="text-[10px] font-mono uppercase tracking-widest opacity-70">now rendering</div>
                <div className="mt-1 text-sm font-medium">Iridescent bloom — study #24</div>
              </div>
            </div>

            {/* floating chips */}
            <div className="absolute -left-6 top-14 rounded-2xl border border-border/60 bg-card/80 backdrop-blur px-4 py-3 shadow-xl animate-float-slower">
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Prompt</div>
              <div className="text-sm font-medium">chrome + botanica</div>
            </div>
            <div className="absolute -right-4 bottom-16 rounded-2xl border border-border/60 bg-card/80 backdrop-blur px-4 py-3 shadow-xl animate-float">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--neon-3)]">Render</div>
              <div className="text-sm font-medium">2m · 04s</div>
            </div>
          </div>
        </div>
      </div>

      {/* marquee */}
      <div className="relative mt-24 border-y border-border/40 py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee gap-14 font-display text-2xl md:text-3xl uppercase tracking-tight">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            [
              "Art Direction",
              "★",
              "Generative AI",
              "★",
              "Motion Design",
              "★",
              "Brand Identity",
              "★",
              "Editorial Systems",
              "★",
              "Concept Art",
              "★",
            ].map((w, j) => (
              <span key={`${i}-${j}`} className={j % 2 ? "text-[var(--neon)]" : "text-muted-foreground/80"}>
                {w}
              </span>
            )),
          )}
        </div>
      </div>
    </section>
  );
}