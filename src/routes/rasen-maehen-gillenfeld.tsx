import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { SITE_URL, localBusinessJsonLd } from "@/lib/seo";
import img from "../assets/service-lawn.jpg";

const TITLE = "Rasen mähen in Gillenfeld, Daun & Umgebung | Gartenarbeiten Schneiders";
const DESC = "Rasen mähen in Gillenfeld, Daun, Strohn, Ulmen und Umgebung – regelmäßig, sauber und zuverlässig. Auch größere Flächen. Jetzt anfragen.";
const URL = `${SITE_URL}/rasen-maehen-gillenfeld`;

export const Route = createFileRoute("/rasen-maehen-gillenfeld")({
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
        name: "Rasen mähen",
        serviceType: "Rasen mähen",
        url: URL,
        provider: { "@id": localBusinessJsonLd["@id"], name: localBusinessJsonLd.name, telephone: localBusinessJsonLd.telephone },
        areaServed: localBusinessJsonLd.areaServed,
      }),
    }],
  }),
  component: () => (
    <ServicePage
      title="Rasen mähen"
      image={img}
      intro="Regelmäßiges Rasenmähen für Privatgärten und größere Grünflächen in Gillenfeld und der Vulkaneifel."
      points={["Einmalig oder regelmäßig", "Kantenschnitt inklusive", "Auch große Flächen und Wiesen", "Schnittgut auf Wunsch entsorgt"]}
      text={["Ein gepflegter Rasen braucht in der Saison regelmäßige Schnitte. Gartenarbeiten Schneiders übernimmt das Rasenmähen in Gillenfeld, Strohn, Saxler, Udler, Immerath und den umliegenden Orten – zuverlässig und zu fairen Preisen.", "Ob kleiner Hausgarten in Daun oder größere Grünfläche bei Ulmen oder Manderscheid: Melden Sie sich einfach mit Ihrer Anfrage, wir vereinbaren einen passenden Termin."]}
    />
  ),
});
