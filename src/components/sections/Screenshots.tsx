import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import appClientesLote from "@/assets/app-clientes-lote.jpg";
import appAdmin from "@/assets/app-admin.jpg";
import debitu1 from "@/assets/debitu-1.png";
import debitu2 from "@/assets/debitu-2.png";
import debitu3 from "@/assets/debitu-3.png";
import debitu4 from "@/assets/debitu-4.png";

const shots = [
  {
    src: debitu1,
    title: "Debitú — Acceso Seguro",
    desc: "Pantalla de inicio con login mediante Google OAuth. Información encriptada de extremo a extremo y un panel de cristal pensado para dominar tus cobros con precisión.",
  },
  {
    src: debitu2,
    title: "Debitú — Administra tus Clientes",
    desc: "Control total de tu cartera: filtrá por clientes con deuda o sin deuda, registrá nuevos clientes con nombre y teléfono, y enviá saldos actualizados por WhatsApp en un toque.",
  },
  {
    src: debitu3,
    title: "Debitú — Registrá Operaciones",
    desc: "Cargá pagos o nuevas deudas desde la palma de tu mano. Búsqueda instantánea de clientes, calculadora nativa integrada y registro fluido para máxima claridad.",
  },
  {
    src: debitu4,
    title: "Debitú — Interfaz Moderna",
    desc: "Más que una herramienta, una experiencia: transparencias elegantes, bottom-sheets dinámicos y transiciones de alto rendimiento para una gestión sin fricciones.",
  },
  {
    src: appClientesLote,
    title: "El Lote — App Usuario",
    desc: "Listado de clientes con sincronización en tiempo real, ofertas y promos disponibles para los usuarios del local.",
  },
  {
    src: appAdmin,
    title: "El Lote — Panel Admin",
    desc: "Dashboard con métricas, gestión de promos y control completo desde tablet, sincronizado en tiempo real con la app de usuarios.",
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

        <div className="mt-20 space-y-10">
          {shots.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={s.title}>
                <motion.figure
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="group relative w-full overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur"
                >
                  <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

                  <div
                    className={`relative grid md:grid-cols-2 gap-0 ${
                      reverse ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="relative overflow-hidden bg-background/40 p-6 md:p-8 flex items-center justify-center min-h-[280px]">
                      <img
                        src={s.src}
                        alt={s.title}
                        loading="lazy"
                        className="w-full h-auto max-h-[480px] object-contain rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>

                    <figcaption className="flex flex-col justify-center p-8 md:p-12">
                      <p className="text-xs uppercase tracking-widest text-accent font-medium">
                        Captura {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold">
                        {s.title}
                      </h3>
                      <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                        {s.desc}
                      </p>
                    </figcaption>
                  </div>
                </motion.figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
