import { Reveal } from "@/components/Reveal";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, ExternalLink, Play, type LucideIcon } from "lucide-react";
import logoDebitu from "@/assets/logo-debitu.png";
import logoEllote from "@/assets/logo-ellote.png";
import logoZondamov from "@/assets/logo-zondamov.png";
import debitu1 from "@/assets/debitu-1.png";
import debitu2 from "@/assets/debitu-2.png";
import debitu3 from "@/assets/debitu-3.png";
import debitu4 from "@/assets/debitu-4.png";
import zondamov1 from "@/assets/zondamov-1.png";
import zondamov2 from "@/assets/zondamov-2.png";
import zondamov3 from "@/assets/zondamov-3.png";
import zondamov4 from "@/assets/zondamov-4.png";
import zondamov5 from "@/assets/zondamov-5.png";
import lote1 from "@/assets/lote-1.png";
import lote2 from "@/assets/lote-2.png";
import lote3 from "@/assets/lote-3.png";
import lote4 from "@/assets/lote-4.png";
import lote5 from "@/assets/lote-5.png";

type AppLink = { Icon: LucideIcon; label: string; href: string };

type App = {
  logo: string;
  title: string;
  tag: string;
  desc: string;
  shots: string[];
  links: AppLink[];
};

const apps: App[] = [
  {
    logo: logoDebitu,
    title: "Debitú",
    tag: "Cuentas corrientes",
    desc: "App para gestionar cuentas corrientes en negocios de barrio. Registrá clientes, anotá deudas y pagos, enviá saldos por WhatsApp y usá la calculadora integrada. Interfaz moderna con bottom-sheets, transparencias elegantes y login seguro con Google.",
    shots: [debitu1, debitu2, debitu3, debitu4],
    links: [
      { Icon: Github, label: "Repositorio", href: "https://github.com/dg203302/SistemaClientesC" },
      { Icon: ExternalLink, label: "Landing", href: "https://debitu.lovable.app" },
    ],
  },
  {
    logo: logoZondamov,
    title: "ZondaMov",
    tag: "Transporte en tiempo real",
    desc: "App de transporte público con estética Liquid Glass: mapa con OpenStreetMap, búsqueda multimodal de líneas, paradas y ubicaciones, planificador de recorridos con control de trasbordos y horarios en tiempo real. Compatible con teléfonos, tablets y navegador, con modo oscuro y control de rendimiento.",
    shots: [zondamov1, zondamov2, zondamov3, zondamov4, zondamov5],
    links: [
      { Icon: Github, label: "Repositorio", href: "https://github.com/dg203302/ZondaMov" },
    ],
  },
  {
    logo: logoEllote,
    title: "Clientes El Lote",
    tag: "Fidelización en tiempo real",
    desc: "Ecosistema basado en Supabase con sincronización en tiempo real entre el negocio y el cliente. App con sistema de puntos por compras presenciales, canje por promociones exclusivas, catálogo dinámico de ofertas, avisos, horarios y mapa integrado. Incluye panel admin interno para gestionar usuarios, cargar promos y enviar comunicados masivos. Ya disponible en Google Play.",
    shots: [lote1, lote2, lote3, lote4, lote5],
    links: [
      { Icon: Github, label: "Repo Usuarios", href: "https://github.com/dg203302/SistemaClientes" },
      { Icon: Github, label: "Repo Admin", href: "https://github.com/dg203302/SistemaAdmin" },
      { Icon: Play, label: "Google Play", href: "https://play.google.com/store/apps/details?id=app.netlify.loteclientes.twa&hl=es_AR" },
    ],
  },
];

function ShotCarousel({ shots, alt }: { shots: string[]; alt: string }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % shots.length);
    }, 3500);
    return () => clearInterval(id);
  }, [shots.length]);

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="sync">
        <motion.img
          key={idx}
          src={shots[idx]}
          alt={`${alt} captura ${idx + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30 md:from-background md:via-background/70 md:to-background/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />

      {/* Indicadores */}
      <div className="absolute bottom-5 right-5 z-10 flex gap-1.5">
        {shots.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === idx ? "w-6 bg-accent" : "w-1.5 bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function Screenshots() {
  return (
    <section id="capturas" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Las apps en <span className="text-gradient">acción</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Mirá las interfaces alternarse mientras conocés cada producto.
          </p>
        </Reveal>

        <div className="mt-16 space-y-10">
          {apps.map((app) => (
            <Reveal key={app.title}>
              <article className="group relative w-full min-h-[420px] md:min-h-[460px] overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur">
                <ShotCarousel shots={app.shots} alt={app.title} />

                {/* Contenido encima */}
                <div className="relative z-10 flex h-full min-h-[420px] md:min-h-[460px] flex-col justify-end p-8 md:p-12 md:max-w-[58%]">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-background/70 border border-border overflow-hidden flex items-center justify-center p-1.5 backdrop-blur">
                      <img
                        src={app.logo}
                        alt={`${app.title} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent backdrop-blur">
                      {app.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-3xl md:text-4xl font-bold">
                    {app.title}
                  </h3>
                  <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                    {app.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {app.links.map(({ Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-2 text-sm hover:border-accent/40 hover:text-accent transition"
                      >
                        <Icon className="h-4 w-4" />
                        {label}
                        <ExternalLink className="h-3 w-3 opacity-50" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Glow hover */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
