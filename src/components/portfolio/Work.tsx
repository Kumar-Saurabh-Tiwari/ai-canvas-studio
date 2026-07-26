import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import work1 from "@/assets/work-1-neura.jpg";
import work2 from "@/assets/work-2-campaign.jpg";
import work3 from "@/assets/work-3-kinetic.jpg";
import work4 from "@/assets/work-4-editorial.jpg";
import work5 from "@/assets/work-5-illustration.jpg";
import work6 from "@/assets/work-6-web.jpg";
import { Reveal } from "./Reveal";

type Piece = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  img: string;
  span?: string;
  body: string;
  brief: string;
  prompt: string;
  before: string;
  after: string;
  preview: string;
  deliverables: string[];
};

const CASE_META = {
  brief:
    "Reposition the brand for a new audience — clean, kinetic, and unmistakably intelligent. Ship identity, campaign, and motion in six weeks.",
  prompt:
    "editorial studio portrait, chromatic bloom lighting, glassy iridescence, matte black backdrop, high-fashion composition — mj v6 --ar 4:5 --style raw",
  before: "Raw generative plate — untuned composition, off-brand palette, competing focal points.",
  after: "Refined in Photoshop + Illustrator — grid, type system, and hand-tuned color grading applied.",
  preview: "Interactive prototype in Framer — hover the mark to trigger the kinetic sequence.",
  deliverables: ["Identity system", "Campaign key art", "Motion reel", "Guidelines PDF"],
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
    ...CASE_META,
  },
  {
    id: "campaign",
    title: "Iridescent Bloom",
    subtitle: "AI Campaign Visuals",
    tags: ["Generative", "Art Direction", "Photoshop"],
    year: "2025",
    img: work2,
    body: "Global campaign fusing Midjourney base plates with Photoshop synthesis and hand-retouched detail — a study in couture surrealism.",
    ...CASE_META,
  },
  {
    id: "kinetic",
    title: "KINETIC",
    subtitle: "Typography in Motion",
    tags: ["Motion", "After Effects", "Type"],
    year: "2024",
    img: work3,
    body: "Kinetic typography reel for a music festival. Letterforms bend, streak, and collide in tempo with the composition.",
    ...CASE_META,
  },
  {
    id: "editorial",
    title: "Divisse Quarterly",
    subtitle: "Editorial & Layout System",
    tags: ["Editorial", "Grid", "Print"],
    year: "2024",
    img: work4,
    body: "A quarterly magazine on the intersection of craft and technology. A 12-column grid tuned for pace, tension, and reading rhythm.",
    ...CASE_META,
  },
  {
    id: "illustration",
    title: "Sable Oracles",
    subtitle: "Concept Art & Illustration",
    tags: ["Illustration", "Concept", "AI Synthesis"],
    year: "2025",
    img: work5,
    body: "Character concept series merging hand-drawn linework with AI-generated lighting studies. Print run of 250 art books.",
    ...CASE_META,
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
    ...CASE_META,
  },
];

function Tilt({ children, className = "", parallax = 0 }: { children: React.ReactNode; className?: string; parallax?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!parallax) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        setScrollY(progress * parallax * 60);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [parallax]);

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
          "--py": `${scrollY}px`,
        } as React.CSSProperties);
      }}
      onMouseLeave={() => setStyle({ ["--py" as string]: `${scrollY}px` } as React.CSSProperties)}
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
            <Reveal>
              <div className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--neon)]">§ 01 — Selected Work</div>
            </Reveal>
            <Reveal delay={80}>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-medium tracking-tight">
              Case studies from the <span className="text-gradient">edge</span> of design + AI.
            </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <div className="hidden md:block text-sm text-muted-foreground max-w-xs">
              Six pieces from the last 24 months. Hover to inspect, click to open the full study.
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(280px,auto)] gap-5">
          {pieces.map((p, i) => (
            <Reveal key={p.id} delay={i * 80} className={p.span ?? ""}>
            <Tilt
              parallax={i % 2 === 0 ? 0.5 : -0.4}
              className="relative h-full group rounded-3xl overflow-hidden border border-border/60 bg-card/60 cursor-pointer will-change-transform"
            >
              <button
                onClick={() => setOpen(p)}
                className="absolute inset-0 z-20"
                aria-label={`Open ${p.title}`}
              />
              <div
                className="absolute inset-0 will-change-transform"
                style={{ transform: "translate3d(0, var(--py, 0), 0)" }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 h-[115%] w-full object-cover -top-[7%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* glow follower */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(320px circle at var(--mx,50%) var(--my,50%), oklch(0.78 0.25 330 / 0.35), transparent 60%)",
                }}
              />
              {/* gloss sweep */}
              <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:translate-x-[400%] transition-transform duration-1000" />
              </div>
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
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-5xl max-h-[92vh] overflow-y-auto bg-card border-border/60 p-0">
          {open && (
            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/60">
                <img src={open.img} alt={open.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--neon)]">
                    {open.subtitle} · {open.year}
                  </div>
                  <DialogHeader className="p-0 mt-2">
                    <DialogTitle className="font-display text-4xl md:text-6xl font-medium tracking-tight text-left">
                      {open.title}
                    </DialogTitle>
                    <DialogDescription className="sr-only">{open.body}</DialogDescription>
                  </DialogHeader>
                </div>
              </div>

              <div className="p-8 md:p-10 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">The brief</div>
                    <p className="mt-2 text-foreground/90 leading-relaxed">{open.brief}</p>
                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{open.body}</p>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--neon-2)]">Prompt engineering</div>
                    <div className="mt-2 rounded-xl border border-border/60 bg-background/60 p-4 font-mono text-xs leading-relaxed text-muted-foreground">
                      <span className="text-[var(--neon)]">$</span> {open.prompt}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--neon-3)]">Before / after · AI synthesis → refinement</div>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-border/60">
                        <img src={open.img} alt="before" className="h-full w-full object-cover grayscale contrast-125 brightness-90" />
                        <div className="absolute top-2 left-2 rounded-full bg-black/60 px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest text-white">Before · AI plate</div>
                        <div className="absolute bottom-2 left-2 right-2 text-[10px] text-white/90 leading-tight">{open.before}</div>
                      </div>
                      <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[var(--neon)]/50 shadow-[0_0_40px_-10px_var(--neon)]">
                        <img src={open.img} alt="after" className="h-full w-full object-cover" />
                        <div className="absolute top-2 left-2 rounded-full bg-[var(--neon)]/90 px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest text-background">After · refined</div>
                        <div className="absolute bottom-2 left-2 right-2 text-[10px] text-white/90 leading-tight">{open.after}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--neon)]">Live prototype</div>
                    <div className="mt-3 relative aspect-video rounded-xl overflow-hidden border border-border/60 bg-background/60 flex items-center justify-center">
                      <img src={open.img} alt="prototype" className="absolute inset-0 h-full w-full object-cover opacity-40" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                      <button className="relative z-10 inline-flex items-center gap-3 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:-translate-y-0.5 transition-transform">
                        <span className="relative inline-block h-2 w-2 rounded-full bg-[var(--neon-3)]">
                          <span className="absolute inset-0 rounded-full bg-[var(--neon-3)] blur-sm animate-pulse-ring" />
                        </span>
                        Play prototype
                      </button>
                      <div className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-widest text-white/80">
                        {open.preview}
                      </div>
                    </div>
                  </div>
                </div>

                <aside className="space-y-6">
                  <div className="rounded-2xl border border-border/60 bg-background/40 p-5">
                    <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Tags</div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {open.tags.map((t) => (
                        <span key={t} className="text-[10px] font-mono uppercase tracking-widest rounded-full border border-border px-2 py-0.5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-background/40 p-5">
                    <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Deliverables</div>
                    <ul className="mt-3 space-y-2 text-sm">
                      {open.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)]" /> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-background/40 p-5">
                    <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Year</div>
                    <div className="mt-2 font-display text-3xl">{open.year}</div>
                  </div>
                </aside>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}