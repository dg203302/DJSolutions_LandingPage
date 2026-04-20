import { Reveal } from "@/components/Reveal";
import { Check } from "lucide-react";

const benefits = [
  "Hablas directamente con quienes escriben el código, no con vendedores.",
  "Especialización en Netlify para cargas instantáneas y despliegues continuos.",
  "Precios competitivos ideales para startups y pequeños negocios.",
];

const stack = [
  { label: "Backend", value: "NodeJS" },
  { label: "Base de Datos", value: "Supabase" },
  { label: "Hosting", value: "Netlify" },
  { label: "Mobile", value: "TWA / Android" },
];

export function Stack() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-center">
        <Reveal>
          <p className="text-sm uppercase tracking-widest text-accent font-medium">Por qué nosotros</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
            Trato directo,<br />
            <span className="text-gradient">código limpio.</span>
          </h2>
          <ul className="mt-10 space-y-5">
            {benefits.map((b, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative rounded-3xl border border-white/10 bg-card/20 backdrop-blur-2xl backdrop-saturate-150 p-8 glow-blue/30">
            <h3 className="font-display text-2xl font-semibold">Nuestro Stack Favorito</h3>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stack.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-background/40 p-5 hover:border-accent/40 transition"
                >
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
                  <p className="mt-2 font-display text-xl font-semibold text-gradient">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
