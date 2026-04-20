import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import debituLogo from "@/assets/debitu-logo.png";
import debitu1 from "@/assets/debitu-1.png";
import debitu2 from "@/assets/debitu-2.png";
import debitu3 from "@/assets/debitu-3.png";
import debitu4 from "@/assets/debitu-4.png";

const shots = [
  {
    src: debitu1,
    title: "Domina tus cobros con precisión",
    desc: "Acceso seguro con Google OAuth y panel principal de Debitú.",
  },
  {
    src: debitu2,
    title: "Administra tus clientes",
    desc: "Control de cartera, búsqueda rápida y envío de saldos por WhatsApp.",
  },
  {
    src: debitu3,
    title: "Registra operaciones al instante",
    desc: "Pagos y deudas con calculadora nativa integrada.",
  },
  {
    src: debitu4,
    title: "Interfaz moderna e intuitiva",
    desc: "Bottom-sheets, transparencias y transiciones de alto rendimiento.",
  },
];

function StackedCard({
  shot,
  index,
  total,
  progress,
}: {
  shot: (typeof shots)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Cada tarjeta entra en su tramo del scroll
  const start = index / total;
  const end = (index + 1) / total;

  const y = useTransform(progress, [start, end], ["100%", "0%"]);
  const scale = useTransform(
    progress,
    [start, end, 1],
    [0.95, 1, 1 - (total - 1 - index) * 0.04],
  );
  const opacity = useTransform(progress, [start, Math.min(start + 0.05, 1)], [0, 1]);

  return (
    <motion.article
      style={{
        y: index === 0 ? "0%" : y,
        scale,
        opacity: index === 0 ? 1 : opacity,
        zIndex: index + 1,
        top: `${index * 24}px`,
      }}
      className="absolute inset-x-0 mx-auto w-full max-w-3xl rounded-3xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl shadow-accent/10 overflow-hidden"
    >
      <div className="flex items-center gap-3 px-5 py-3 border-b border-border/60 bg-background/40">
        <img src={debituLogo} alt="Debitú" className="h-7 w-7 object-contain" />
        <span className="font-display font-semibold tracking-tight">
          Debi<span className="text-accent">Tú</span>
        </span>
        <span className="ml-auto text-xs text-muted-foreground">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
      <div className="bg-background/40">
        <img
          src={shot.src}
          alt={shot.title}
          loading="lazy"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="px-6 py-5">
        <h3 className="font-display text-xl md:text-2xl font-semibold">{shot.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{shot.desc}</p>
      </div>
    </motion.article>
  );
}

export function Screenshots() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="capturas" className="relative px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl pt-24">
        <Reveal>
          <div className="flex items-center gap-3">
            <img src={debituLogo} alt="Logo Debitú" className="h-12 w-12 object-contain" />
            <p className="text-sm uppercase tracking-widest text-accent font-medium">
              Capturas · Debitú
            </p>
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold">
            Debi<span className="text-accent">Tú</span> en <span className="text-gradient">acción</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Desplazate y mirá la app pantalla por pantalla. Las tarjetas se apilan mientras el scroll
            se mantiene fijo.
          </p>
        </Reveal>
      </div>

      {/* Scroll-driven stack */}
      <div
        ref={containerRef}
        className="relative mt-16"
        style={{ height: `${shots.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center px-4">
          <div className="relative w-full max-w-3xl h-[80vh]">
            {shots.map((s, i) => (
              <StackedCard
                key={s.title}
                shot={s}
                index={i}
                total={shots.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
