import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stack } from "@/components/sections/Stack";
import { Team } from "@/components/sections/Team";
import { Screenshots } from "@/components/sections/Screenshots";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "D&J Solutions — PWAs, Supabase y Apps Android" },
      {
        name: "description",
        content:
          "Dos desarrolladores creando PWAs de alto impacto. Despliegues rápidos en Netlify, datos en tiempo real con Supabase y apps nativas para Android.",
      },
      { property: "og:title", content: "D&J Solutions — Apps que viven en la Nube y en tu Bolsillo" },
      { property: "og:description", content: "PWAs, backend Node y Supabase, hosting en Netlify y publicación en Google Play." },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Stack />
      <Team />
      <Screenshots />
      <Contact />
    </main>
  );
}
