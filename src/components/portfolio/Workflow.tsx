import { useState } from "react";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Concept & Prompting",
    tag: "Strategy",
    body: "Start with the brief. Distill it into a mood, a metaphor, a chromatic direction, and a language of shape. Prompts are engineered like briefs — voice, subject, lighting, medium, and negatives.",
    tools: ["Notion", "Figjam", "Prompt DB"],
    accent: "var(--neon)",
  },
  {
    n: "02",
    title: "AI Generation",
    tag: "Synthesis",
    body: "Base plates rendered in Midjourney, ComfyUI, and Stable Diffusion. Multiple candidates per beat — evaluated against the reference board for composition, tension, and narrative fit.",
    tools: ["Midjourney", "ComfyUI", "Stable Diffusion", "Runway"],
    accent: "var(--neon-2)",
  },
  {
    n: "03",
    title: "Vector & Layout Precision",
    tag: "Craft",
    body: "AI output meets fine-arts discipline. Typography, grid, and hierarchy are rebuilt in Illustrator, Figma and InDesign — every hair space, kern, and optical alignment tuned by hand.",
    tools: ["Illustrator", "Figma", "InDesign", "Photoshop"],
    accent: "var(--neon-3)",
  },
  {
    n: "04",
    title: "Motion & Polish",
    tag: "Delivery",
    body: "Motion, micro-interactions, and shipping. After Effects for kinetic sequences, Framer for interactive prototypes, and a final QA pass across every deliverable in every ratio.",
    tools: ["After Effects", "Framer", "Rive"],
    accent: "var(--neon)",
  },
];

export function Workflow() {
  const [active, setActive] = useState(0);
  const s = steps[active];

  return (
    <section id="workflow" className="relative py-28 md:py-40 border-t border-border/40 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full blur-[140px] opacity-30 transition-colors duration-700"
        style={{ background: s.accent }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--neon-2)]">
            § 02 — Workflow
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-medium tracking-tight max-w-4xl">
            Four steps from <span className="italic font-light">blank canvas</span> to{" "}
            <span className="text-gradient">shipped campaign</span>.
          </h2>
        </Reveal>

        {/* timeline nav */}
        <div className="mt-16 grid md:grid-cols-4 gap-3">
          {steps.map((step, i) => {
            const isActive = i === active;
            return (
              <button
                key={step.n}
                onClick={() => setActive(i)}
                className="group relative text-left rounded-2xl border border-border/60 bg-card/50 p-5 hover:border-[color:var(--step-accent)] transition-colors overflow-hidden"
                style={{ ["--step-accent" as string]: step.accent } as React.CSSProperties}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="font-mono text-xs tracking-widest transition-colors"
                    style={{ color: isActive ? step.accent : undefined }}
                  >
                    {step.n}
                  </div>
                  <span
                    className="h-1.5 w-1.5 rounded-full transition-all"
                    style={{
                      background: step.accent,
                      boxShadow: isActive ? `0 0 16px ${step.accent}` : "none",
                      opacity: isActive ? 1 : 0.35,
                    }}
                  />
                </div>
                <div className="mt-4 font-display text-lg leading-tight">{step.title}</div>
                <div className="mt-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {step.tag}
                </div>
                {/* progress bar */}
                <div className="mt-4 h-[2px] bg-border/60 rounded overflow-hidden">
                  <div
                    className="h-full origin-left transition-transform duration-700"
                    style={{
                      background: step.accent,
                      transform: isActive ? "scaleX(1)" : "scaleX(0.15)",
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* active detail */}
        <div className="mt-10 grid md:grid-cols-12 gap-8 rounded-3xl border border-border/60 bg-card/40 backdrop-blur p-8 md:p-12">
          <div className="md:col-span-4">
            <div
              className="font-display text-8xl md:text-9xl leading-none"
              style={{ color: s.accent, textShadow: `0 0 40px ${s.accent}` }}
            >
              {s.n}
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em]" style={{ color: s.accent }}>
              {s.tag}
            </div>
            <h3 className="mt-2 font-display text-3xl md:text-4xl font-medium">{s.title}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">{s.body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {s.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-3 py-1 text-xs font-mono uppercase tracking-widest transition-colors"
                  style={{ borderColor: `${s.accent}`, color: s.accent }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}