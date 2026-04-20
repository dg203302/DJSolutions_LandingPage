import { Reveal } from "@/components/Reveal";
import { Smartphone, Database, Server, Globe } from "lucide-react";

const services = [
  {
    Icon: Smartphone,
    title: "Progressive Web Apps",
    desc: "Convertimos tu web en una app instalable. Funciona offline, envía notificaciones push y se siente nativa.",
  },
  {
    Icon: Database,
    title: "Base de Datos con Supabase",
    desc: "Gestión de usuarios, datos en tiempo real y seguridad de nivel empresarial sin costos de servidores tradicionales.",
  },
  {
    Icon: Server,
    title: "Backend con NodeJS",
    desc: "APIs personalizadas y lógica de negocio robusta usando NodeJS y Edge Functions para apps escalables.",
  },
  {
    Icon: Globe,
    title: "Web & Android",
    desc: "Sitios responsivos y publicación de apps en Google Play Store listas para monetizar o gestionar clientes.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-accent font-medium">Servicios</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold">
            Lo que hacemos <span className="text-gradient">mejor</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Soluciones técnicas precisas sin la burocracia de las grandes agencias.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group relative h-full rounded-2xl border border-border bg-card/60 backdrop-blur p-6 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/15 text-accent mb-5">
                    <s.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
