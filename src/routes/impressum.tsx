import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | Gartenarbeiten Schneiders" },
      { name: "description", content: "Impressum von Gartenarbeiten Schneiders – Kontakt, Verantwortlicher und Angaben gemäß § 5 DDG." },
      { property: "og:title", content: "Impressum | Gartenarbeiten Schneiders" },
      { property: "og:description", content: "Impressum von Gartenarbeiten Schneiders." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              Gartenarbeiten Schneiders
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="mt-8 font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
          Impressum
        </h1>

        <section className="mt-10 space-y-8">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Angaben gemäß § 5 DDG</h2>
            <div className="mt-4 space-y-1 text-muted-foreground">
              <p className="font-semibold text-foreground">Gartenarbeiten Schneiders</p>
              <p>Hannes Arthur Schneiders</p>
              <p>Im Rehwinkel 11</p>
              <p>54558 Gillenfeld</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Kontakt</h2>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Telefon: </span>
                <a href="tel:+4917655033897" className="hover:text-primary hover:underline">
                  0176 55033897
                </a>
              </p>
              <p>
                <span className="font-semibold text-foreground">E-Mail: </span>
                <a href="mailto:schneiders0510.hannes@web.de" className="hover:text-primary hover:underline">
                  schneiders0510.hannes@web.de
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Haftungsausschluss</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Die Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Als Diensteanbieter
              sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf dieser Seite nach den allgemeinen Gesetzen
              verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground">Streitbeilegung</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie
              unter{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ec.europa.eu/consumers/odr
              </a>{" "}
              finden. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Gartenarbeiten Schneiders. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
}
