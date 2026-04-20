import { Reveal } from "@/components/Reveal";
import { Github, Linkedin, Mail, Phone, MessageCircle, Globe } from "lucide-react";

const team = [
  {
    name: "Landa Juan Pablo",
    role: "Frontend • UI/UX",
    desc: "Diseño e implementación de interfaces, performance y accesibilidad.",
    skills: ["HTML", "CSS", "JavaScript", "Python", "Java", "C++", "SQL"],
    avatar: "https://avatars.githubusercontent.com/u/139655688?v=4",
    links: [
      { Icon: Github, href: "https://github.com/desarroyador0", label: "GitHub" },
      { Icon: Linkedin, href: "https://www.linkedin.com/in/juanpi-landa-b070541b9/", label: "LinkedIn" },
      { Icon: Mail, href: "mailto:juanpi9landa@gmail.com", label: "Email" },
      { Icon: MessageCircle, href: "https://wa.me/5492645300467", label: "WhatsApp" },
      { Icon: Phone, href: "tel:+5492645300467", label: "Llamar" },
    ],
  },
  {
    name: "Garcia Diego",
    role: "Backend • Datos",
    desc: "APIs, seguridad, bases de datos y automatizaciones.",
    skills: ["Func. Programming", "C", "Python", "Node", "Supabase", "SQL", "JavaScript"],
    avatar: "https://avatars.githubusercontent.com/u/168243435?v=4",
    links: [
      { Icon: Github, href: "https://github.com/dg203302", label: "GitHub" },
      { Icon: Linkedin, href: "https://www.linkedin.com/in/diego-jose-garc%C3%ADa-38222226b", label: "LinkedIn" },
      { Icon: Mail, href: "mailto:dg15828@gmail.com", label: "Email" },
      { Icon: Globe, href: "https://diegogarcia-dev.com.ar/", label: "Website" },
      { Icon: MessageCircle, href: "https://wa.me/5492644429758", label: "WhatsApp" },
      { Icon: Phone, href: "tel:+5492644429758", label: "Llamar" },
    ],
  },
];

export function Team() {
  return (
    <section id="equipo" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-accent font-medium">Equipo</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-bold">
            El equipo detrás del <span className="text-gradient">proyecto</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Somos un grupo de desarrolladores apasionados por crear experiencias web rápidas, seguras y fáciles de usar.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <div className="group relative rounded-3xl border border-white/10 bg-card/20 backdrop-blur-2xl backdrop-saturate-150 p-8 hover:border-accent/40 transition-all">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent to-primary opacity-60 blur-md group-hover:opacity-100 transition" />
                    <img
                      src={m.avatar}
                      alt={`Avatar de ${m.name}`}
                      loading="lazy"
                      width={80}
                      height={80}
                      className="relative h-20 w-20 rounded-full border-2 border-border"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{m.name}</h3>
                    <p className="text-sm text-accent">{m.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-muted-foreground">{m.desc}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {m.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {m.links.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      title={label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/40 text-muted-foreground hover:text-accent hover:border-accent/40 transition"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
