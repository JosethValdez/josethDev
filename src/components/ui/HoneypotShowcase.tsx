import { FC, useRef, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaPython, FaLinux } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { Shield } from "lucide-react";

interface TechItem {
  label: string;
  icon?: ReactNode;
  highlight?: boolean;
}

const techStack: TechItem[] = [
  { label: "Adaptive Defense", highlight: true },
  { label: "Python", icon: <FaPython /> },
  { label: "Bash", icon: <SiGnubash /> },
  { label: "Linux", icon: <FaLinux /> },
  { label: "CORE Emulator" },
  { label: "Nmap" },
];

const HoneypotShowcase: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = wrapper.offsetWidth;
      canvas.height = wrapper.offsetHeight;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(wrapper);

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.3,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      isSage: Math.random() < 0.15,
    });

    const particles = Array.from({ length: 60 }, createParticle);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        if (
          p.x < 0 ||
          p.x > canvas.width ||
          p.y < 0 ||
          p.y > canvas.height
        ) {
          Object.assign(p, createParticle());
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.isSage
          ? `rgba(129, 178, 154, ${p.opacity * 0.25})`
          : `rgba(61, 64, 91, ${p.opacity * 0.1})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(129, 178, 154, ${0.05 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  const nodeVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const arrowVariant = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <style>{`
        @keyframes hp-typing{from{width:0}to{width:100%;border-right-color:transparent}}
        @keyframes hp-blink{50%{border-color:transparent}}
        @keyframes hp-pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}
        @keyframes hp-dot{0%{left:0;opacity:0}10%{opacity:1}90%{opacity:1}100%{left:calc(100% - 4px);opacity:0}}
        @keyframes hp-drift{0%,100%{transform:translate(0,0)}50%{transform:translate(40px,-30px)}}
        .hp-typing-text{overflow:hidden;white-space:nowrap;border-right:2px solid transparent;width:0;display:inline-block;max-width:100%}
        .hp-type{border-right-color:#81B29A;animation:hp-typing 2.2s steps(36) .6s forwards,hp-blink .6s step-end infinite}
      `}</style>

      <div
        ref={wrapperRef}
        className="relative bg-white rounded-2xl overflow-hidden flex items-center justify-center"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-0"
        />

        {/* Ambient glows */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[150px] opacity-[0.04] pointer-events-none z-0 -top-[150px] -right-[80px] bg-sage"
          style={{ animation: "hp-drift 15s ease-in-out infinite" }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[150px] opacity-[0.04] pointer-events-none z-0 -bottom-[150px] -left-[80px] bg-accent-hover"
          style={{ animation: "hp-drift 18s ease-in-out infinite reverse" }}
        />

        <div
          ref={ref}
          className="relative z-[1] w-full px-5 py-10 md:px-8 flex flex-col items-center gap-6 md:gap-9"
        >
          {/* Header */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-1.5 bg-sage/10 text-sage px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-[1.2px] uppercase mb-2">
              Featured Research
            </div>
            <div className="flex items-center justify-center gap-3.5 mb-3">
              <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-sage to-sage-dark flex items-center justify-center text-white shadow-[0_0_30px_rgba(129,178,154,0.15)]">
                <Shield size={20} />
              </div>
              <h3 className="font-serif text-[34px] md:text-5xl tracking-tight bg-gradient-to-br from-primary to-sage bg-clip-text text-transparent">
                Dynamic Honeypot
              </h3>
            </div>
            <p className="text-sm text-muted font-light tracking-wide leading-relaxed max-w-[520px] mx-auto">
              An{" "}
              <em className="text-sage not-italic font-medium">adaptive defense</em>{" "}
              system that watches attacker behavior and reshapes its
              fingerprint in real time — turning decoy infrastructure into{" "}
              <em className="text-sage not-italic font-medium">
                threat intelligence
              </em>
              .
            </p>
          </motion.div>

          {/* Flow */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-2 md:gap-0">
            {/* Input node — attacker */}
            <motion.div
              className="relative p-5 rounded-[14px] bg-bone border border-border/50 w-full max-w-[280px] md:w-auto md:max-w-none md:min-w-[200px] shrink-0"
              variants={nodeVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="text-[10px] uppercase tracking-[2px] text-muted mb-2.5 font-medium">
                Attacker probe
              </div>
              <div className="font-mono text-xs leading-[1.7] font-light text-primary">
                <span
                  className={`hp-typing-text ${inView ? "hp-type" : ""}`}
                >
                  nmap -sV 10.0.0.42 --top-ports 100
                </span>
              </div>
            </motion.div>

            {/* Arrow 1 */}
            <motion.div
              className="flex items-center px-1.5 shrink-0 rotate-90 md:rotate-0"
              variants={arrowVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <div className="relative w-9 h-0.5 bg-gradient-to-r from-border to-sage">
                <div
                  className="absolute w-1 h-1 bg-sage rounded-full -top-[1px] shadow-[0_0_8px_#81B29A]"
                  style={{ animation: "hp-dot 1.5s ease-in-out infinite" }}
                />
              </div>
              <div className="w-0 h-0 border-l-[8px] border-l-sage border-y-[5px] border-y-transparent -ml-px" />
            </motion.div>

            {/* Honeypot core */}
            <motion.div
              className="relative p-5 rounded-[14px] bg-gradient-to-br from-sage/[0.06] to-accent-hover/[0.04] border border-sage/20 w-full max-w-[280px] md:w-auto md:max-w-none md:min-w-[200px] text-center shrink-0"
              variants={nodeVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{
                delay: 1.3,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="inline-flex items-center gap-1.5 bg-sage/10 border border-sage/15 px-2.5 py-1 rounded-md font-mono text-[11px] text-sage mb-2.5">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full bg-sage"
                  style={{ animation: "hp-pulse 2s ease infinite" }}
                />
                Honeynet Core
              </div>
              <div className="text-[10px] uppercase tracking-[2px] text-sage-dark mb-2.5 font-medium">
                Adaptive Decoy
              </div>
              <div className="font-mono text-xs leading-[1.7] font-light text-primary text-left">
                <span className="text-accent-hover">action:</span>{" "}
                <span className="text-sage-dark">reshape_fingerprint</span>
                <br />
                <span className="text-accent-hover">service:</span>{" "}
                <span className="text-[#b5724a]">ssh-2.0-openssh</span>
                <br />
                <span className="text-accent-hover">log:</span>{" "}
                <span className="text-[#b5724a]">captured</span>
              </div>
            </motion.div>

            {/* Arrow 2 */}
            <motion.div
              className="flex items-center px-1.5 shrink-0 rotate-90 md:rotate-0"
              variants={arrowVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 1.7, duration: 0.6 }}
            >
              <div className="relative w-9 h-0.5 bg-gradient-to-r from-border to-sage">
                <div
                  className="absolute w-1 h-1 bg-sage rounded-full -top-[1px] shadow-[0_0_8px_#81B29A]"
                  style={{ animation: "hp-dot 1.5s ease-in-out infinite" }}
                />
              </div>
              <div className="w-0 h-0 border-l-[8px] border-l-sage border-y-[5px] border-y-transparent -ml-px" />
            </motion.div>

            {/* Output node — analysis */}
            <motion.div
              className="relative p-5 rounded-[14px] bg-bone border border-border/50 w-full max-w-[280px] md:w-auto md:max-w-none md:min-w-[200px] shrink-0"
              variants={nodeVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{
                delay: 2.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="text-[10px] uppercase tracking-[2px] text-muted mb-2.5 font-medium">
                Behavioral pattern
              </div>
              <div className="font-mono text-xs leading-[1.7] font-light text-primary">
                <span className="text-accent-hover">tactic:</span>{" "}
                <span className="text-sage-dark">lateral_movement</span>
                <br />
                <span className="text-accent-hover">confidence:</span>{" "}
                <span className="text-[#b5724a]">0.91</span>
                <br />
                <span className="text-accent-hover">ttp:</span>{" "}
                <span className="text-[#b5724a]">T1021</span>
              </div>
            </motion.div>
          </div>

          {/* Tech stack */}
          <motion.div
            className="flex gap-2 justify-center flex-wrap"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            {techStack.map(({ label, icon, highlight }) => (
              <span
                key={label}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border transition-all duration-300 hover:border-sage-dark hover:text-sage hover:shadow-[0_0_20px_rgba(129,178,154,0.1)] ${
                  highlight
                    ? "border-sage/25 text-sage bg-sage/5"
                    : "border-border bg-white text-muted"
                }`}
              >
                {icon}
                {label}
              </span>
            ))}
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-2.5 md:gap-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 2.8, duration: 0.8 }}
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-[13px] font-medium no-underline transition-all duration-300 bg-sage text-white shadow-[0_4px_20px_rgba(129,178,154,0.15)] hover:shadow-[0_4px_30px_rgba(129,178,154,0.25)] hover:-translate-y-px"
            >
              <FaGithub />
              View Repository
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-[13px] font-medium no-underline transition-all duration-300 text-muted border border-border hover:border-muted hover:text-primary hover:-translate-y-px"
            >
              <Shield size={14} />
              Discuss the research
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HoneypotShowcase;
