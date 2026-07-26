import { useReveal } from "@/hooks/use-reveal";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: React.ElementType;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.15);
  return (
    <Tag
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 800ms cubic-bezier(0.22,1,0.36,1), transform 800ms cubic-bezier(0.22,1,0.36,1)",
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}

export function StaggerText({
  text,
  className = "",
  step = 40,
  startDelay = 0,
}: {
  text: string;
  className?: string;
  step?: number;
  startDelay?: number;
}) {
  const { ref, shown } = useReveal<HTMLSpanElement>(0.2);
  const words = text.split(" ");
  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-baseline"
          style={{ marginRight: "0.25em" }}
        >
          <span
            className="inline-block"
            style={{
              transform: shown ? "translateY(0)" : "translateY(110%)",
              opacity: shown ? 1 : 0,
              transition: "transform 900ms cubic-bezier(0.22,1,0.36,1), opacity 900ms",
              transitionDelay: `${startDelay + i * step}ms`,
            }}
          >
            {w}
          </span>
        </span>
      ))}
    </span>
  );
}