import { Briefcase, Users, Smartphone, Mail, Send } from "lucide-react";

const links = [
  { href: "#servicios", label: "Servicios", Icon: Briefcase },
  { href: "#equipo", label: "Equipo", Icon: Users },
  { href: "#capturas", label: "Proyectos", Icon: Smartphone },
  { href: "#contacto", label: "Contacto", Icon: Mail },
];

export function Navbar() {

  return (
    <>
      {/* Desktop floating liquid-glass header */}
      <header className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div className="relative flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-2xl backdrop-saturate-150 pl-5 pr-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(255,255,255,0.05)] overflow-hidden">
          <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/15 via-transparent to-transparent" />
          <span className="pointer-events-none absolute -top-1 left-4 right-4 h-1/2 rounded-full bg-gradient-to-b from-white/25 to-transparent blur-[2px]" />

          <a
            href="#top"
            className="relative font-display text-base font-bold tracking-tight pr-2"
          >
            D&amp;J<span className="text-gradient">Solutions</span>.
          </a>

          <span className="relative h-6 w-px bg-white/15" />

          <nav className="relative flex items-center gap-1 text-sm text-muted-foreground">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 rounded-full hover:text-foreground hover:bg-white/10 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

        </div>
      </header>

      {/* Mobile floating brand pill - liquid glass */}
      <a
        href="#top"
        className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full border border-white/15 bg-white/5 backdrop-blur-2xl backdrop-saturate-150 px-5 py-2 font-display text-sm font-bold tracking-tight shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(255,255,255,0.05)] overflow-hidden"
      >
        <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-transparent to-transparent" />
        <span className="pointer-events-none absolute -top-1 left-2 right-2 h-1/2 rounded-full bg-gradient-to-b from-white/30 to-transparent blur-[2px]" />
        <span className="relative">D&amp;J<span className="text-gradient">Solutions</span>.</span>
      </a>

      {/* Mobile floating bottom bar - liquid glass */}
      <nav
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-full border border-white/15 bg-white/5 backdrop-blur-2xl backdrop-saturate-150 px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(255,255,255,0.05)] overflow-hidden"
        aria-label="Navegación móvil"
      >
        <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/15 via-transparent to-transparent" />
        <span className="pointer-events-none absolute -top-1 left-3 right-3 h-1/2 rounded-full bg-gradient-to-b from-white/25 to-transparent blur-[2px]" />
        {links.map(({ href, label, Icon }) => (
          <a
            key={href}
            href={href}
            aria-label={label}
            className="relative flex flex-col items-center justify-center px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
          >
            <Icon className="h-5 w-5" />
            <span className="text-[10px] mt-0.5">{label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
