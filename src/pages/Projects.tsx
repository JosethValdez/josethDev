import { FC } from "react";
import sentinel from "../assets/sentinel.jpg";
import portfolio from "../assets/portfolio.jpg";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiElectron,
  SiVite,
  SiOllama,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import HoneypotShowcase from "../components/ui/HoneypotShowcase";
import ProjectCard from "../components/ui/ProjectCard";

const Projects: FC = () => {
  return (
    <section id="projects" className="w-full bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="section-heading">Projects</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="section-subheading">A few things I've been building</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <hr className="w-24 mx-auto border-sage/30" />
          </ScrollReveal>
        </div>

        {/* Honeypot — featured showcase */}
        <ScrollReveal delay={0.3}>
          <div className="max-w-4xl mx-auto mb-8">
            <HoneypotShowcase />
          </div>
        </ScrollReveal>

        {/* Other projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <ProjectCard
            title="Sentinel"
            description="AI-powered malware analysis desktop app. Scans folders for malicious files using behavioral context instead of static signatures — surfacing threats traditional AV misses. Inference layer is abstracted, so it runs on local Ollama models or cloud APIs interchangeably."
            image={sentinel}
            href="https://github.com/"
            tech={[
              { icon: <SiReact className="text-xs" />, label: "React" },
              { icon: <SiElectron className="text-xs" />, label: "Electron" },
              { icon: <SiVite className="text-xs" />, label: "Vite" },
              { icon: <SiOllama className="text-xs" />, label: "Ollama" },
              { icon: <SiTypescript className="text-xs" />, label: "TypeScript" },
            ]}
            delay={0.1}
          />

          <ProjectCard
            title="joseth.dev"
            description="This portfolio. Built from scratch with React, TypeScript, Vite, and Tailwind — animated section reveals, custom honeypot showcase, GitHub Pages deployment via Actions."
            image={portfolio}
            href="https://github.com/"
            tech={[
              { icon: <SiReact className="text-xs" />, label: "React" },
              { icon: <SiTypescript className="text-xs" />, label: "TypeScript" },
              { icon: <SiVite className="text-xs" />, label: "Vite" },
              { icon: <SiTailwindcss className="text-xs" />, label: "Tailwind" },
            ]}
            delay={0.2}
          />
        </div>

        <ScrollReveal delay={0.5}>
          <div className="flex justify-center mt-10">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              More Projects
              <FaGithub className="text-lg" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
