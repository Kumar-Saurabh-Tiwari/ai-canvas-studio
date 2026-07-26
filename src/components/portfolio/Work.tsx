import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import work1 from "@/assets/work-1-neura.jpg";
import work2 from "@/assets/work-2-campaign.jpg";
import work3 from "@/assets/work-3-kinetic.jpg";
import work4 from "@/assets/work-4-editorial.jpg";
import work5 from "@/assets/work-5-illustration.jpg";
import work6 from "@/assets/work-6-web.jpg";

type Piece = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  img: string;
  span?: string;
  body: string;
};

const pieces: Piece[] = [
  {
    id: "neura",
    title: "Neura",
    subtitle: "Brand Identity System",
    tags: ["Branding", "Visual Hierarchy", "Systems"],
    year: "2025",
    img: work1,
    span: "md:col-span-2 md:row-span-2",
    body: "A complete visual language for an AI research lab. Type, mark, motion, and color rebuilt from a modular grammar that adapts across product, print and social with millimeter precision.",
  },
  {
    id: "campaign",
    title: "Iridescent Bloom",
    subtitle: "AI Campaign Visuals",
    tags: ["Generative", "Art Direction", "Photoshop"],
    year: "2025",
    img: work2,
    body: "Global campaign fusing Midjourney base plates with Photoshop synthesis and hand-retouched detail — a study in couture surrealism.",
  },
  {
    id: "kinetic",
    title: "KINETIC",
    subtitle: "Typography in Motion",
    tags: ["Motion", "After Effects", "Type"],
    year: "2024",
    img: work3,
    body: "Kinetic typography reel for a music festival. Letterforms bend, streak, and collide in tempo with the composition.",
  },
  {
    id: "editorial",
    title: "Divisse Quarterly",
    subtitle: "Editorial & Layout System",
    tags: ["Editorial", "Grid", "Print"],
    year: "2024",
    img: work4,
    body: "A quarterly magazine on the intersection of craft and technology. A 12-column grid tuned for pace, tension, and reading rhythm.",
  },
  {
    id: "illustration",
    title: "Sable Oracles",
    subtitle: "Concept Art & Illustration",
    tags: ["Illustration", "Concept", "AI Synthesis"],
    year: "2025",
    img: work5,
    body: "Character concept series merging hand-drawn linework with AI-generated lighting studies. Print run of 250 art books.",
  },
  {
    id: "web",
    title: "Prism OS",
    subtitle: "Interactive Web Experience",
    tags: ["Framer", "Figma", "Design System"],
    year: "2026",
    img: work6,
    span: "md:col-span-2",
    body: "Marketing site and design system for a spatial computing OS. Built in Figma, prototyped in Framer, shipped in 6 weeks.",
  },
];

function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        setStyle({
          transform: `perspective(1000px) rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 10}deg) translateY(-4px)`,
          "--mx": `${x * 100}%`,
          "--my": `${y * 100}%`,
        } as React.CSSProperties);
      }}
      onMouseLeave={() => setStyle({})}
      style={{ ...style, transition: "transform 300ms cubic-bezier(0.22,1,0.36,1)" }}
      className={className}
    >
      {children}
    </div>
  );
}

export function Work() {
  const [open, setOpen] = useState<Piece | null>(null);

  return (
    <section id="work" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-8 mb-14">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--neon)]">§ 01 — Selected Work</div>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-medium tracking-tight">
              Case studies from the <span className="text-gradient">edge</span> of design + AI.
            </h2>
          </div>
          <div className="hidden md:block text-sm text-muted-foreground max-w-xs">
            Six pieces from the last 24 months. Hover to inspect, click to open the full study.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(280px,auto)] gap-5">
          {pieces.map((p, i) => (
            <Tilt
              key={p.id}
              className={`${p.span ?? ""} relative group rounded-3xl overflow-hidden border border-border/60 bg-card/60 cursor-pointer will-change-transform`}
            >
              <button
                onClick={() => setOpen(p)}
                className="absolute inset-0 z-20"
                aria-label={`Open ${p.title}`}
              />
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* glow follower */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(320px circle at var(--mx,50%) var(--my,50%), oklch(0.78 0.25 330 / 0.35), transparent 60%)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/80">
                <span className="rounded-full bg-black/40 backdrop-blur px-2 py-1 border border-white/10">
                  0{i + 1} / 06
                </span>
                <span className="rounded-full bg-black/40 backdrop-blur px-2 py-1 border border-white/10">
                  {p.year}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/70">{p.subtitle}</div>
                <div className="mt-1 font-display text-2xl md:text-3xl font-medium leading-tight">{p.title}</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono uppercase tracking-widest rounded-full border border-white/25 px-2 py-0.5 backdrop-blur">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--neon)] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  Open case study
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8"/></svg>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-3xl bg-card border-border/60">
          {open && (
            <>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border/60">
                <img src={open.img} alt={open.title} className="h-full w-full object-cover" />
              </div>
              <DialogHeader className="mt-4">
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--neon)]">
                  {open.subtitle} · {open.year}
                </div>
                <DialogTitle className="font-display text-3xl md:text-4xl">{open.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground pt-2 leading-relaxed">
                  {open.body}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {open.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono uppercase tracking-widest rounded-full border border-border px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}