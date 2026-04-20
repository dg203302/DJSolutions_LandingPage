import { Reveal } from "@/components/Reveal";
import { Mail, Linkedin } from "lucide-react";

const EMAIL = "djsolutions287@gmail.com";
const SUBJECT = "Consulta de proyecto - D&J Solutions";
const BODY = `Hola equipo de D&J Solutions,

Me gustaría contarles sobre un proyecto que tengo en mente.

• Tipo de proyecto: 
• Objetivos principales: 
• Plazo estimado: 
• Presupuesto aproximado: 

Quedo atento a su respuesta.

Saludos.`;

const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

const linkedins = [
  {
    name: "Landa Juan Pablo",
    role: "Frontend • UI/UX",
    href: "https://www.linkedin.com/in/juanpi-landa-b070541b9/",
  },
  {
    name: "Garcia Diego",
    role: "Backend • Datos",
    href: "https://www.linkedin.com/in/diego-jose-garc%C3%ADa-38222226b",
  },
];

export function Contact() {
  return (
    <section id="contacto" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="relative rounded-3xl border border-white/10 bg-card/20 backdrop-blur-2xl backdrop-saturate-150 p-10 md:p-14 overflow-hidden">
            <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

            <div className="relative">
              <p className="text-sm uppercase tracking-widest text-accent font-medium">Contacto</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
                ¿Listo para lanzar <span className="text-gradient">tu proyecto?</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Podés enviarnos un mail tocando el botón de abajo o escribirnos directamente
                por LinkedIn a cualquiera de los miembros del equipo. Te respondemos a la brevedad.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground glow-blue hover:scale-[1.02] transition"
                >
                  <Mail className="h-4 w-4" />
                  Enviar mail a {EMAIL}
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-sm uppercase tracking-widest text-accent font-medium">
                  O contactanos por LinkedIn
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {linkedins.map((m) => (
                    <li key={m.name}>
                      <a
                        href={m.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-background/30 backdrop-blur-xl px-4 py-3 hover:border-accent/40 hover:bg-background/50 transition"
                      >
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/40 text-muted-foreground group-hover:text-accent group-hover:border-accent/40 transition">
                          <Linkedin className="h-4 w-4" />
                        </span>
                        <span className="flex flex-col">
                          <span className="text-sm font-semibold">{m.name}</span>
                          <span className="text-xs text-muted-foreground">{m.role}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} D&amp;J Solutions. Hecho con código limpio.
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
