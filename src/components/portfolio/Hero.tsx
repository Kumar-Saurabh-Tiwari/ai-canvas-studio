import heroImg from "@/assets/hero-canvas.jpg";
import { useParallax, useMagnetic } from "@/hooks/use-parallax";
import { StaggerText, Reveal } from "./Reveal";

export function Hero() {
  const orbA = useParallax<HTMLDivElement>(0.35);
  const orbB = useParallax<HTMLDivElement>(-0.25);
  const canvas = useParallax<HTMLDivElement>(0.15);
  const chipL = useParallax<HTMLDivElement>(0.4);
  const chipR = useParallax<HTMLDivElement>(-0.3);
  const btnA = useMagnetic<HTMLAnchorElement>(0.25);
  const btnB = useMagnetic<HTMLAnchorElement>(0.25);
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* ambient orbs */}
      <div
        ref={orbA.ref}
        style={{ transform: `translate3d(0, ${orbA.y}px, 0)` }}
        className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-[var(--neon)] opacity-30 blur-[140px] animate-float will-change-transform"
      />
      <div
        ref={orbB.ref}
        style={{ transform: `translate3d(0, ${orbB.y}px, 0)` }}
        className="pointer-events-none absolute top-40 -right-40 h-[520px] w-[520px] rounded-full bg-[var(--neon-2)] opacity-25 blur-[140px] animate-float-slower will-change-transform"
      />
      <div className="pointer-events-none absolute inset-0 noise opacity-[0.08] mix-blend-overlay" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/40 backdrop-blur px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground animate-rise">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-3)]" /> Portfolio · 2026 Edition
          </div>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight font-medium">
            <StaggerText text="Where" className="block" />
            <StaggerText text="art direction meets" className="italic font-light block" startDelay={200} />
            <StaggerText
              text="generative AI."
              className="text-gradient font-semibold block"
              startDelay={500}
            />
          </h1>

          <Reveal delay={900}>
            <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Senior Graphic Designer leveraging artificial intelligence, motion design,
              and precision layout to craft high-impact brand identities.
            </p>
          </Reveal>

          <Reveal delay={1050}>
            <div className="mt-10 flex flex-wrap gap-4">
            <a
              ref={btnA}
              href="#work"
              className="group relative inline-flex items-center gap-3 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium overflow-hidden will-change-transform"
              style={{ transition: "transform 300ms cubic-bezier(0.22,1,0.36,1)" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--neon)] via-[var(--neon-2)] to-[var(--neon-3)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 blur-md bg-gradient-to-r from-[var(--neon)] via-[var(--neon-2)] to-[var(--neon-3)] -z-10 transition-opacity" />
              <span className="relative">View Selected Work</span>
              <svg className="relative h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a
              ref={btnB}
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-border px-6 py-3.5 text-sm font-medium hover:border-[var(--neon)] hover:text-[var(--neon)] will-change-transform"
              style={{ transition: "transform 300ms cubic-bezier(0.22,1,0.36,1), color 200ms, border-color 200ms" }}
            >
              Get in Touch
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-3)] group-hover:bg-[var(--neon)] transition-colors" />
            </a>
            </div>
          </Reveal>

          <Reveal delay={1200}>
            <div className="mt-14 grid grid-cols-3 max-w-lg gap-6">
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
          </Reveal>
        </div>

        {/* floating canvas */}
        <div ref={canvas.ref} style={{ transform: `translate3d(0, ${canvas.y}px, 0)` }} className="lg:col-span-5 relative will-change-transform">
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
            <div ref={chipL.ref} style={{ transform: `translate3d(0, ${chipL.y}px, 0)` }} className="absolute -left-6 top-14 rounded-2xl border border-border/60 bg-card/80 backdrop-blur px-4 py-3 shadow-xl animate-float-slower will-change-transform">
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Prompt</div>
              <div className="text-sm font-medium">chrome + botanica</div>
            </div>
            <div ref={chipR.ref} style={{ transform: `translate3d(0, ${chipR.y}px, 0)` }} className="absolute -right-4 bottom-16 rounded-2xl border border-border/60 bg-card/80 backdrop-blur px-4 py-3 shadow-xl animate-float will-change-transform">
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