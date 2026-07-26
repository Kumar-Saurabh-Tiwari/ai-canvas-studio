import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--neon-3)]">§ 04 — About</div>
          </Reveal>
          <Reveal delay={80}>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium tracking-tight">
            Bridging the studio and the model.
          </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-8 space-y-8">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            I'm <span className="text-gradient font-semibold">Saurabh Kumar</span> — a senior
            graphic designer with nearly a decade of agency work behind me. My practice
            sits between the fine-arts studio and the generative model, translating the
            discipline of type, grid and hierarchy into workflows that use AI as a
            collaborator, not a shortcut.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            I've led identity, campaign, and motion for brands across culture, tech and
            fashion — and I write about the craft when I'm not shipping it. Currently
            based in Bengaluru, working with studios worldwide.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-6">
            <div className="rounded-2xl border border-border/60 bg-card/50 p-6">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">Education</div>
              <div className="mt-2 font-display text-xl">BFA in Design</div>
              <div className="text-sm text-muted-foreground">Fine Arts — Sir J. J. Institute of Applied Art</div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/50 p-6">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">Recognition</div>
              <div className="mt-2 font-display text-xl">D&AD · ADC · TDC</div>
              <div className="text-sm text-muted-foreground">Merit awards, 2022 — 2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}