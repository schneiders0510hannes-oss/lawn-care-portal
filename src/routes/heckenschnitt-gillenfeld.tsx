import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { SITE_URL, localBusinessJsonLd } from "@/lib/seo";
import img from "../assets/service-hedge.jpg";

const TITLE = "Heckenschnitt in Gillenfeld, Daun & Umgebung | Gartenarbeiten Schneiders";
const DESC = "Heckenschnitt in Gillenfeld, Daun, Mehren, Manderscheid und Umgebung – Form- und Pflegeschnitt mit Entsorgung. Jetzt unverbindlich anfragen.";
const URL = `${SITE_URL}/heckenschnitt-gillenfeld`;

export const Route = createFileRoute("/heckenschnitt-gillenfeld")({
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
        name: "Heckenschnitt",
        serviceType: "Heckenschnitt",
        url: URL,
        provider: { "@id": localBusinessJsonLd["@id"], name: localBusinessJsonLd.name, telephone: localBusinessJsonLd.telephone },
        areaServed: localBusinessJsonLd.areaServed,
      }),
    }],
  }),
  component: () => (
    <ServicePage
      title="Heckenschnitt"
      image={img}
      intro="Sauberer Form- und Pflegeschnitt für Hecken und Sträucher in Gillenfeld und Umgebung."
      points={["Formschnitt und Rückschnitt", "Gerade, saubere Kanten", "Hecken und Sträucher aller Größen", "Fachgerechte Entsorgung des Schnittguts"]}
      text={["Eine ordentlich geschnittene Hecke wertet jedes Grundstück auf. Wir schneiden Hecken in Gillenfeld, Pantenburg, Mehren, Schalkenmehren und Daun – sauber und mit Blick für die richtige Form.", "Auch in Ulmen, Manderscheid, Eckfeld und Wallscheid sind wir für Sie im Einsatz. Rufen Sie an oder senden Sie uns eine Anfrage über das Formular."]}
    />
  ),
});
