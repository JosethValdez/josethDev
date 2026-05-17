import { FC } from "react";
import interests from "../assets/interests.jpg";
import interests2 from "../assets/interests2.jpg";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { ImageCarousel } from "../components/ui/ImageCarousel";
import { Shield, Terminal, BookOpen, Gamepad2, Code2 } from "lucide-react";

const interestImages = [
  { src: interests, alt: "Late-night terminal session" },
  { src: interests2, alt: "Reading and gaming setup" },
];

const interestList = [
  {
    icon: Shield,
    title: "Cybersecurity",
    body: "Adversarial systems, deception, network defense. I like the corner of the field where you have to think like an attacker to design something that holds.",
  },
  {
    icon: Terminal,
    title: "Hacking",
    body: "CTFs, lab experiments, and rabbit holes into how things actually break. Most of what I learn about security I learn by trying to bypass it first.",
  },
  {
    icon: Code2,
    title: "Coding",
    body: "Side projects in Python and TypeScript, mostly tooling around security or things I'd want to use myself. I enjoy small, sharp programs more than sprawling ones.",
  },
  {
    icon: BookOpen,
    title: "Reading",
    body: "Technical and otherwise. Sci-fi, security writing, and the occasional deep-dive paper. Helps me think more clearly than scrolling does.",
  },
  {
    icon: Gamepad2,
    title: "RPGs",
    body: "I'm drawn to RPGs with real choices and good worldbuilding. Same reason I like research — long arcs, lots of state, decisions that compound.",
  },
];

const Interests: FC = () => {
  return (
    <section id="interests" className="w-full bg-bone">
      <div className="section-container">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="section-heading">Beyond the Code</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="section-subheading">
              What I'm into outside of class and the lab
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <hr className="w-24 mx-auto border-sage/30" />
          </ScrollReveal>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-10 max-w-5xl mx-auto">
          <ScrollReveal direction="left" delay={0.2} className="md:w-1/2 md:sticky md:top-28">
            <ImageCarousel
              images={interestImages}
              className="w-full aspect-square shadow-card"
              interval={7000}
            />
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            delay={0.3}
            className="flex flex-col gap-5 md:w-3/5"
          >
            {interestList.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="earthy-card p-5 flex gap-4 items-start"
              >
                <div className="bg-sage/10 rounded-full p-3 text-sage shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-primary/80 leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Interests;
