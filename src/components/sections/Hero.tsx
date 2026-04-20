import { motion } from "framer-motion";
import { Database, Cloud, Code2, Smartphone, Server } from "lucide-react";

const stack = [
  { name: "Supabase", Icon: Database },
  { name: "Netlify", Icon: Cloud },
  { name: "JavaScript", Icon: Code2 },
  { name: "Android", Icon: Smartphone },
  { name: "Node.js", Icon: Server },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          Disponibles para nuevos proyectos
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05]"
        >
          Apps que viven en la
          <br />
          <span className="text-gradient">Nube y en tu Bolsillo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 mx-auto max-w-2xl text-lg text-muted-foreground"
        >
          Somos dos desarrolladores transformando ideas en PWAs de alto impacto.
          Despliegues rápidos en Netlify, bases de datos potentes en Supabase y
          presencia nativa en Android.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground glow-blue hover:scale-105 transition"
          >
            Empezar Ahora
          </a>
          <a
            href="#capturas"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card/40 backdrop-blur px-7 py-3 text-sm font-semibold hover:bg-card transition"
          >
            Ver Proyectos
          </a>
          <a
            href="#equipo"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card/40 backdrop-blur px-7 py-3 text-sm font-semibold hover:bg-card transition"
          >
            Equipo Detrás
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-muted-foreground"
        >
          {stack.map(({ name, Icon }) => (
            <div key={name} className="flex items-center gap-2 text-sm">
              <Icon className="h-4 w-4 text-accent" />
              <span>{name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground tracking-widest uppercase"
      >
        Desliza para explorar ↓
      </motion.div>
    </section>
  );
}
