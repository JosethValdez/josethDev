import { FC } from "react";
import cyberrig from "../assets/cyberrig.png";
import utep from "../assets/utep.png";
import experience from "../assets/experience.jpg";
import experience2 from "../assets/experience2.jpg";
import experience3 from "../assets/experience3.jpg";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { ImageCarousel } from "../components/ui/ImageCarousel";
import ProjectCard from "../components/ui/ProjectCard";

const experienceImages = [
  { src: experience, alt: "Joseth at the CyberRIG lab" },
  { src: experience2, alt: "Network emulation in CORE" },
  { src: experience3, alt: "Research session at UTEP" },
];

const Experience: FC = () => {
  return (
    <section id="experience" className="w-full bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="section-heading">Experience</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="section-subheading">Where I've been learning and shipping</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <hr className="w-24 mx-auto border-sage/30" />
          </ScrollReveal>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
          <ScrollReveal direction="left" delay={0.2} className="md:w-1/2">
            <ImageCarousel
              images={experienceImages}
              className="w-full aspect-square shadow-card"
              interval={7000}
            />
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            delay={0.3}
            className="flex flex-col gap-4 md:w-3/5"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-primary">
              Cybersecurity Researcher
            </h2>
            <p className="text-sm md:text-base text-primary/80 leading-relaxed">
              I do undergraduate research at the Cyber Rapid Innovation Group
              (CyberRIG) at UTEP, focused on honeynet design and adaptive
              defense. I've led research initiatives across 8+ design and
              testing cycles, written Python pipelines for connection-log
              analysis, and simulated 10+ network environments in CORE to
              evaluate attacker behavior under controlled conditions.
            </p>
            <p className="text-sm md:text-base text-primary/80 leading-relaxed">
              Before that I supported the UTEP Computer Science department as
              an IT specialist — diagnosing recurring issues across faculty
              and student workstations and keeping the lab infrastructure
              healthy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <ProjectCard
                title="Undergraduate Researcher"
                description="CyberRIG · Aug 2025 – Present"
                image={cyberrig}
                delay={0.1}
              />
              <ProjectCard
                title="CS IT Support Specialist"
                description="UTEP Computer Science Dept. · Jan – Feb 2025"
                image={utep}
                delay={0.2}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Experience;
