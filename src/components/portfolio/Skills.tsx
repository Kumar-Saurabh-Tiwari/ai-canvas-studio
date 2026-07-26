const groups = [
  {
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
    label: "Design Tools",
    accent: "var(--neon-2)",
    items: ["Photoshop", "Illustrator", "After Effects", "InDesign", "Figma", "Framer", "WordPress"],
  },
  {
    label: "AI & Generative",
    accent: "var(--neon-3)",
    items: ["Midjourney", "Stable Diffusion", "Runway", "DALL·E", "ComfyUI"],
  },
  {
    label: "Bonus Skills",
    accent: "var(--neon)",
    items: ["Motion Graphics", "Hand-Drawn Illustration", "Copywriting", "Agency & Brand Strategy"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-40 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--neon-2)]">§ 02 — Toolstack</div>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-medium tracking-tight">
            A hybrid stack — <span className="italic font-light">analog craft</span> plus{" "}
            <span className="text-gradient">machine intelligence</span>.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {groups.map((g) => (
            <div
              key={g.label}
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
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-border/70 bg-background/40 px-3.5 py-1.5 text-sm hover:border-[color:var(--tile-accent)] hover:text-foreground transition-colors cursor-default"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}