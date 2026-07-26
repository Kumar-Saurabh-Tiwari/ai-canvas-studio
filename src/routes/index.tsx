import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Work } from "@/components/portfolio/Work";
import { Skills } from "@/components/portfolio/Skills";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}
