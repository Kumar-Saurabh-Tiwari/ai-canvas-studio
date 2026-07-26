import { useState } from "react";
import { Reveal } from "./Reveal";

const groups = [
  {
    id: "core",
    label: "Core Competencies",
    accent: "var(--neon)",
    items: [
      "Typography & Composition",
      "Visual Hierarchy",
      "Layout Design",
      "Brand Strategy",
      "Art Direction",
    ],
  },
  {
    id: "design",
    label: "Design Tools",
    accent: "var(--neon-2)",
    items: ["Photoshop", "Illustrator", "After Effects", "InDesign", "Figma", "Framer", "WordPress"],
  },
  {
    id: "ai",
    label: "AI & Generative",
    accent: "var(--neon-3)",
    items: ["Midjourney", "Stable Diffusion", "Runway", "DALL·E", "ComfyUI"],
  },
  {
    id: "bonus",
    label: "Bonus Skills",
    accent: "var(--neon)",
    items: ["Motion Graphics", "Hand-Drawn Illustration", "Copywriting", "Agency & Brand Strategy"],
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "core", label: "Core Design" },
  { id: "ai", label: "AI Synthesis" },
  { id: "design", label: "Motion / Framer" },
  { id: "bonus", label: "Bonus" },
];

export function Skills() {
  const [active, setActive] = useState<string>("all");
  const visible = groups.filter((g) => active === "all" || g.id === active);

  return (
    <section id="skills" className="relative py-28 md:py-40 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <Reveal>
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--neon-2)]">§ 03 — Toolstack</div>
          </Reveal>
          <Reveal delay={80}>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-medium tracking-tight">
            A hybrid stack — <span className="italic font-light">analog craft</span> plus{" "}
            <span className="text-gradient">machine intelligence</span>.
          </h2>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((f) => {
              const isActive = f.id === active;
              return (
                <button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  className={`relative rounded-full border px-4 py-1.5 text-xs font-mono uppercase tracking-widest transition-all ${
                    isActive
                      ? "border-[var(--neon)] text-[var(--neon)] shadow-[0_0_24px_var(--neon)]"
                      : "border-border/70 text-muted-foreground hover:text-foreground hover:border-foreground/40"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {visible.map((g, gi) => (
            <Reveal key={g.id} delay={gi * 80}>
            <div
              className="group relative rounded-3xl border border-border/60 bg-card/50 p-7 overflow-hidden transition-colors hover:border-[color:var(--tile-accent)]"
              style={{ ["--tile-accent" as string]: g.accent } as React.CSSProperties}
            >
              <div
                className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl opacity-25 group-hover:opacity-60 transition-opacity"
                style={{ background: g.accent }}
              />
              <div className="flex items-center gap-3">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: g.accent, boxShadow: `0 0 20px ${g.accent}` }}
                />
                <div className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
                  {g.label}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {g.items.map((it, i) => (
                  <span
                    key={it}
                    className="rounded-full border border-border/70 bg-background/40 px-3.5 py-1.5 text-sm hover:border-[color:var(--tile-accent)] hover:text-foreground hover:-translate-y-0.5 hover:shadow-[0_6px_20px_-8px_var(--tile-accent)] transition-all cursor-default"
                    style={{ animation: "rise 0.6s cubic-bezier(0.22,1,0.36,1) both", animationDelay: `${i * 40}ms` }}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}