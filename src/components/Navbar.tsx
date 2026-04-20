import { useEffect, useState } from "react";
import { Briefcase, Users, Smartphone, Mail, Send } from "lucide-react";

const links = [
  { href: "#servicios", label: "Servicios", Icon: Briefcase },
  { href: "#equipo", label: "Equipo", Icon: Users },
  { href: "#capturas", label: "Proyectos", Icon: Smartphone },
  { href: "#contacto", label: "Contacto", Icon: Mail },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-background/70 border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-xl font-bold tracking-tight">
            D&amp;J<span className="text-gradient">Solutions</span>.
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition glow-blue"
          >
            Cotizar Proyecto
          </a>
        </div>
      </header>

      {/* Mobile floating bottom bar */}
      <nav
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-full border border-border bg-background/80 backdrop-blur-xl px-2 py-2 shadow-card"
        aria-label="Navegación móvil"
      >
        {links.map(({ href, label, Icon }) => (
          <a
            key={href}
            href={href}
            aria-label={label}
            className="flex flex-col items-center justify-center px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-card/60 transition-colors"
          >
            <Icon className="h-5 w-5" />
            <span className="text-[10px] mt-0.5">{label}</span>
          </a>
        ))}
        <a
          href="#contacto"
          aria-label="Cotizar Proyecto"
          className="ml-1 flex items-center justify-center h-11 w-11 rounded-full bg-primary text-primary-foreground glow-blue hover:opacity-90 transition"
        >
          <Send className="h-5 w-5" />
        </a>
      </nav>
    </>
  );
}
