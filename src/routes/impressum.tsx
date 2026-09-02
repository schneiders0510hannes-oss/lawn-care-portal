import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Phone, Mail, MapPin, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | Gartenarbeiten Schneiders" },
      {
        name: "description",
        content:
          "Impressum und Anbieterkennzeichnung von Gartenarbeiten Schneiders, Gillenfeld.",
      },
      { property: "og:title", content: "Impressum | Gartenarbeiten Schneiders" },
      {
        property: "og:description",
        content:
          "Impressum und Anbieterkennzeichnung von Gartenarbeiten Schneiders, Gillenfeld.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              Gartenarbeiten Schneiders
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="section-heading">Impressum</h1>
        <p className="section-subheading mt-3">
          Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)
        </p>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="font-display text-xl font-bold text-foreground">Anbieter</h2>
            <div className="mt-4 space-y-1 text-sm leading-relaxed text-muted-foreground">
              <p className="font-semibold text-foreground">Hannes Arthur Schneiders</p>
              <p>Gartenarbeiten Schneiders</p>
              <p>Im Rehwinkel 11</p>
              <p>54558 Gillenfeld</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">Kontaktaufnahme</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+4917655033897" className="hover:text-primary hover:underline">
                  Telefon: 0176 55033897
                </a>
              </li>
              <li className="flex items-start gap-3 break-all">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:schneiders0510.hannes@web.de"
                  className="hover:text-primary hover:underline"
                >
                  E-Mail: schneiders0510.hannes@web.de
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Einsatzgebiet: Gillenfeld und nahe Umgebung</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Es wird keine Umsatzsteuer ausgewiesen, da der Anbieter der
              Kleinunternehmerregelung gemäß § 19 UStG unterliegt.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              Verantwortlich für den Inhalt
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Hannes Arthur Schneiders (Anschrift wie oben)
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              Haftung für Inhalte
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG
              sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              Haftung für Links
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">Urheberrecht</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche
              gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link to="/" className="btn-secondary">
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </main>
    </div>
  );
}
