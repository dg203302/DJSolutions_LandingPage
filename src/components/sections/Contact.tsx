import { Reveal } from "@/components/Reveal";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

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
                Cuéntanos tu idea. Ya sea una web corporativa o una SaaS compleja, tenemos el stack para construirla.
              </p>

              <form onSubmit={handleSubmit} className="mt-10 grid gap-4">
                <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    required
                    type="text"
                    placeholder="Nombre"
                    className="rounded-xl border border-border bg-background/50 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent/60 transition"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="rounded-xl border border-border bg-background/50 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent/60 transition"
                  />
                </div>
                <textarea
                  required
                  placeholder="Mensaje"
                  rows={5}
                  className="rounded-xl border border-border bg-background/50 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent/60 transition resize-none"
                />

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground glow-blue hover:scale-[1.02] transition self-start"
                >
                  {sent ? "¡Enviado! Te respondemos pronto." : "Enviar Consulta"}
                </button>
              </form>
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
