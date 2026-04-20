import { Reveal } from "@/components/Reveal";
import { Github, ExternalLink, Play } from "lucide-react";

const projects = [
  {
    title: "Sistema Clientes El Lote",
    tag: "Tiempo real",
    desc: "Sistema de administración con dos apps sincronizadas: una para clientes en el local y otra para gerentes/administradores. Gestión de clientes, promos, ofertas y avisos sincronizada en tiempo real con Supabase.",
    techs: ["JavaScript", "Supabase", "PWA Builder"],
    links: [
      { Icon: Github, label: "Repo Usuarios", href: "https://github.com/dg203302/SistemaClientes" },
      { Icon: Github, label: "Repo Admin", href: "https://github.com/dg203302/SistemaAdmin" },
      { Icon: Play, label: "Google Play", href: "https://play.google.com/store/apps/details?id=app.netlify.loteclientes.twa&hl=es_AR" },
    ],
  },
  {
    title: "Debitú",
    tag: "Cuentas corrientes",
    desc: "App para gestionar cuentas corrientes de clientes, diseñada para negocios chicos y de barrio donde se fía. Simple, directa y pensada para personas que no tienen tiempo para complicaciones: registrá clientes con nombre y teléfono, anotá deudas y pagos con historial detallado, mandá un WhatsApp automático con el saldo de cada cliente y usá la calculadora integrada sin salir de la app. Todo en tu celular, siempre disponible, nunca se pierde. No es para grandes empresas: es para el almacén, la verdulería, la panadería, el pequeño negocio que mueve la economía del barrio.",
    techs: ["JavaScript", "Supabase", "Edge Functions", "Google OAuth"],
    links: [
      { Icon: Github, label: "Repositorio", href: "https://github.com/dg203302/SistemaClientesC" },
    ],
  },
  {
    title: "ZondaMov",
    tag: "Transporte · PWA",
    desc: "PWA de planificación de transporte público pensada para la red de Red Tulum. Sin instalación, desde el navegador: ver qué líneas pasan por una parada, tiempos de arribo en tiempo real (alimentados por un proxy propio sobre la API de Red Tulum / Moovit), planificación de trayectos con opción de trasbordo, búsqueda integrada de líneas, paradas y lugares, guardado rápido de hasta 5 favoritos e interfaz moderna estilo Liquid Glass con opciones de accesibilidad para dispositivos modestos.",
    techs: ["Feed GTFS", "OpenStreetMap", "GPS", "PWA"],
    links: [
      { Icon: Github, label: "Repositorio", href: "https://github.com/dg203302/ZondaMov" },
    ],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-accent font-medium">Portfolio</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold">
            Productos <span className="text-gradient">reales</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            PWAs, paneles de administración y sistemas conectados en tiempo real.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <article className="group relative h-full rounded-3xl border border-border bg-card/60 backdrop-blur p-8 hover:border-accent/40 transition">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                  <span className="flex-shrink-0 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.techs.map((t) => (
                    <span key={t} className="rounded-md bg-background/50 border border-border px-2.5 py-1 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {p.links.map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-2 text-sm hover:border-accent/40 hover:text-accent transition"
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                      <ExternalLink className="h-3 w-3 opacity-50" />
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
