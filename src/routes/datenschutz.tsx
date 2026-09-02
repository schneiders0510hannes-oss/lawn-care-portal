import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, ArrowLeft, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung | Gartenarbeiten Schneiders" },
      {
        name: "description",
        content:
          "Datenschutzerklärung von Gartenarbeiten Schneiders, Gillenfeld – Umgang mit Ihren personenbezogenen Daten.",
      },
      { property: "og:title", content: "Datenschutzerklärung | Gartenarbeiten Schneiders" },
      {
        property: "og:description",
        content:
          "Datenschutzerklärung von Gartenarbeiten Schneiders, Gillenfeld.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
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
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <h1 className="section-heading">Datenschutzerklärung</h1>
        </div>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="font-display text-xl font-bold text-foreground">1. Datenschutz auf einen Blick</h2>
            <h3 className="mt-5 font-semibold text-foreground">Allgemeine Hinweise</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besutzen oder uns über das
              Kontaktformular, telefonisch oder per E-Mail erreichen. Personenbezogene Daten sind alle
              Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              2. Verantwortliche Stelle
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="mt-4 space-y-1 text-sm leading-relaxed text-muted-foreground">
              <p className="font-semibold text-foreground">Hannes Arthur Schneiders</p>
              <p>Gartenarbeiten Schneiders</p>
              <p>Im Rehwinkel 11</p>
              <p>54558 Gillenfeld</p>
              <p>
                Telefon: <a href="tel:+4917655033897" className="hover:text-primary hover:underline">0176 55033897</a>
              </p>
              <p className="break-all">
                E-Mail:{" "}
                <a href="mailto:schneiders0510.hannes@web.de" className="hover:text-primary hover:underline">
                  schneiders0510.hannes@web.de
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">3. Hosting</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Diese Website wird bei einem externen Dienstleister gehostet (Lovable). Die
              personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern
              des Hosters gespeichert. Hierbei kann es sich auch um Server eines Drittanbieters handeln.
              Die Inanspruchnahme erfolgt im Rahmen einer Datenverarbeitung gemäß Art. 28 DSGVO.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              4. Erhebung und Verarbeitung beim Besuch dieser Website
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Beim Aufrufen dieser Website werden durch den Host automatisch Informationen erfasst, die
              Ihr Browser automatisch übermittelt und als technisch notwendig für die Darstellung der
              Seite verarbeitet werden (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, Referrer-URL,
              abgerufene Dateien). Diese Daten werden erhoben, um einen reibungslosen Verbindungsaufbau
              und eine komfortable Nutzung der Website zu gewährleisten.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              5. Kontaktformular & Anfragen
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Wenn Sie uns über das Kontaktformular, per E-Mail oder telefonisch kontaktieren, werden
              Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
              gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher
              Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung
              Ihrer Anfrage). Die Daten werden gelöscht, sobald sie für die Erreichung des Zwecks nicht
              mehr erforderlich sind, es sei denn, gesetzliche Aufbewahrungspflichten stehen entgegen.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">6. Ihre Rechte</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
              unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung. Ebenso haben Sie ein Recht auf Berichtigung,
              Einschränkung der Verarbeitung sowie Löschung dieser Daten. Weiterhin steht Ihnen ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              7. Widerruf Ihrer Einwilligung
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
              Sie können eine bereits erteilte Einwilligung jederzeit mit Wirkung für die Zukunft
              widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt
              unberührt.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              8. Widerspruch gegen die Datenerhebung
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
              Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird
              hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
              Schritte im Fall der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails,
              vor.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              9. Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Website
              oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden,
              diese Datenschutzerklärung anzupassen.
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
