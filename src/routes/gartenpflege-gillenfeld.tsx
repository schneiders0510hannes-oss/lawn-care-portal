import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { SITE_URL, localBusinessJsonLd } from "@/lib/seo";
import img from "../assets/service-care.jpg";

const TITLE = "Gartenpflege in Gillenfeld, Daun & Umgebung | Gartenarbeiten Schneiders";
const DESC = "Gartenpflege in Gillenfeld und der Vulkaneifel: Unkraut entfernen, Beete säubern, Grünflächen pflegen. Zuverlässig und fair – jetzt anfragen.";
const URL = `${SITE_URL}/gartenpflege-gillenfeld`;

export const Route = createFileRoute("/gartenpflege-gillenfeld")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Gartenpflege",
        serviceType: "Gartenpflege",
        url: URL,
        provider: { "@id": localBusinessJsonLd["@id"], name: localBusinessJsonLd.name, telephone: localBusinessJsonLd.telephone },
        areaServed: localBusinessJsonLd.areaServed,
      }),
    }],
  }),
  component: () => (
    <ServicePage
      title="Gartenpflege"
      image={img}
      intro="Saisonale Gartenpflege und Grünflächenpflege für Ihr Grundstück in Gillenfeld und Umgebung."
      points={["Unkraut entfernen und Beete säubern", "Pflege von Grünflächen", "Saisonale Pflegearbeiten", "Für Privat und Gewerbe"]}
      text={["Damit Ihr Garten das ganze Jahr ordentlich aussieht, übernehmen wir die laufende Gartenpflege in Gillenfeld, Strohn, Immerath, Steiningen und den Nachbarorten.", "Von der Grünfläche in Daun bis zum Grundstück in Ulmen: Wir kümmern uns zuverlässig darum, dass alles gepflegt bleibt."]}
    />
  ),
});
