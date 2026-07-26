import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? h.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  const pct = Math.round(p * 100);
  return (
    <>
      {/* top bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent">
        <div
          className="h-full origin-left bg-gradient-to-r from-[var(--neon)] via-[var(--neon-2)] to-[var(--neon-3)] shadow-[0_0_18px_var(--neon)]"
          style={{ transform: `scaleX(${p})`, transition: "transform 120ms linear" }}
        />
      </div>
      {/* side rail */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[60] hidden md:flex flex-col items-center gap-3">
        <div className="relative h-48 w-[2px] rounded-full bg-border/70 overflow-hidden">
          <div
            className="absolute inset-x-0 top-0 bg-gradient-to-b from-[var(--neon)] via-[var(--neon-2)] to-[var(--neon-3)]"
            style={{ height: `${pct}%`, transition: "height 120ms linear" }}
          />
        </div>
        <div className="font-mono text-[10px] tracking-widest text-muted-foreground tabular-nums">
          {String(pct).padStart(2, "0")}
        </div>
      </div>
    </>
  );
}