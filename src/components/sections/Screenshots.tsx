import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import appClientesLote from "@/assets/app-clientes-lote.jpg";
import appGestion from "@/assets/app-gestion.jpg";
import appAdmin from "@/assets/app-admin.jpg";

const shots = [
  {
    src: appClientesLote,
    title: "Clientes — App Usuario",
    desc: "Listado de clientes con sincronización en tiempo real.",
    w: 800,
    h: 1024,
  },
  {
    src: appAdmin,
    title: "Panel Admin — Dashboard",
    desc: "Métricas, promos y gestión desde tablet.",
    w: 1280,
    h: 800,
    wide: true,
  },
  {
    src: appGestion,
    title: "Gestión de Deudas",
    desc: "Pagos, calculadora y búsqueda integrada.",
    w: 800,
    h: 1024,
  },
];

export function Screenshots() {
  return (
    <section id="capturas" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-accent font-medium">Capturas</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold">
            Las apps en <span className="text-gradient">acción</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Vistazo a las interfaces que construimos: limpias, rápidas y pensadas para uso real.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {shots.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <motion.figure
                whileHover={{ y: -6, rotate: -0.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className={`group relative rounded-3xl border border-border bg-card/60 backdrop-blur p-4 ${
                  s.wide ? "lg:col-span-2 md:col-span-2" : ""
                }`}
              >
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
                <div className="overflow-hidden rounded-2xl bg-background/40">
                  <img
                    src={s.src}
                    alt={s.title}
                    loading="lazy"
                    width={s.w}
                    height={s.h}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="px-2 pt-5 pb-2">
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
