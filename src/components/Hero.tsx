import { Link } from "react-router-dom";
import pfp from "../assets/pfp.jpg";
import { MultiPhraseTypewriter } from "./ui/MultiPhraseTypewriter";

import {
  FaPython,
  FaJava,
  FaLinux,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiReact,
  SiVite,
  SiElectron,
  SiC,
  SiGnubash,
  SiWireshark,
  SiOllama,
  SiPandas,
  SiNumpy,
  SiMysql,
} from "react-icons/si";

import Joseth_Valdez_Resume from "../assets/Joseth_Valdez_Resume.pdf";
import { motion } from "framer-motion";

const techStack = [
  { icon: FaPython, title: "Python" },
  { icon: FaJava, title: "Java" },
  { icon: SiC, title: "C" },
  { icon: SiMysql, title: "SQL" },
  { icon: SiPandas, title: "Pandas" },
  { icon: SiNumpy, title: "NumPy" },
  { icon: SiOllama, title: "Ollama" },
  { icon: SiReact, title: "React" },
  { icon: SiElectron, title: "Electron" },
  { icon: SiVite, title: "Vite" },
  { icon: FaLinux, title: "Linux" },
  { icon: FaDocker, title: "Docker" },
  { icon: SiGnubash, title: "Bash" },
  { icon: SiWireshark, title: "Wireshark" },
  { icon: FaGitAlt, title: "Git" },
];

function Hero() {
  const phrases = [
    {
      text: "Cybersecurity Researcher",
      className: "text-4xl md:text-5xl lg:text-6xl font-serif",
    },
    {
      text: "Software Engineer",
      className: "text-4xl md:text-5xl lg:text-6xl font-serif",
    },
    {
      text: "Honeynet Builder",
      className: "text-4xl md:text-5xl lg:text-6xl font-serif",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start max-w-2xl flex-grow"
        >
          <div className="relative flex flex-col h-[120px] md:h-[150px] mb-6">
            <div className="absolute inset-0 flex items-center">
              <MultiPhraseTypewriter
                phrases={phrases}
                className="text-4xl md:text-5xl lg:text-6xl font-serif"
                cursorClassName="my-cursor-class"
              />
            </div>
          </div>

          <h2 className="font-sans font-semibold text-lg md:text-xl mb-2 max-w-lg text-primary">
            Hey,{" "}
            <span className="text-sage">I'm Joseth Valdez!</span>
          </h2>

          <p className="text-sm md:text-base mb-4 max-w-lg text-muted leading-relaxed">
            <span className="text-primary">
              CS undergraduate at UTEP and cybersecurity researcher at CyberRIG.
              I build defenses that adapt — honeynets, deception systems, and
              AI-driven security tooling.
            </span>
          </p>
          <p className="text-sm md:text-base mb-8 max-w-lg text-muted leading-relaxed">
            undergraduate researcher @cyberrig | cs @utep '27 | honors program |
            google cybersecurity certified
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-card font-medium hover:bg-primary/85 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              Hire Me
            </Link>

            <a
              href={Joseth_Valdez_Resume}
              download="Joseth_Valdez_Resume"
            >
              <button
                type="button"
                className="btn-outline text-sm rounded-card inline-flex items-center justify-center px-8 py-3 font-medium hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Resume
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex-shrink-0"
        >
          <img
            src={pfp}
            alt="Joseth Valdez portrait"
            className="rounded-full w-56 h-56 md:w-80 md:h-80 object-cover shadow-card object-[center_25%]"
          />
          <div className="absolute inset-0 rounded-full border-4 border-sage/30"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex md:flex-col gap-4"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/60 transition-colors duration-300 hover:text-sage"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/60 transition-colors duration-300 hover:text-accent-hover"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="mt-16"
      >
        <p className="text-sm font-medium text-muted mb-4 tracking-wider uppercase">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-3 max-w-xl">
          {techStack.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="bg-white/80 p-3 rounded-lg shadow-subtle text-primary/60 hover:text-sage hover:shadow-card transition-all duration-300"
              title={title}
            >
              <Icon className="text-xl" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
