import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Leaf,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Check,
  CalendarDays,
  Scissors,
  Flower2,
  TreeDeciduous,
} from "lucide-react";

import heroImage from "../assets/hero-garden.jpg";
import lawnImage from "../assets/service-lawn.jpg";
import hedgeImage from "../assets/service-hedge.jpg";
import careImage from "../assets/service-care.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gartenarbeiten Schneiders | Rasen mähen & Hecken schneiden in Gillenfeld" },
      { name: "description", content: "Professionelle Gartenarbeiten in Gillenfeld und naher Umgebung: Rasen mähen, Hecken schneiden, Gartenpflege. Jetzt unverbindlich anfragen." },
      { property: "og:title", content: "Gartenarbeiten Schneiders | Rasen mähen & Hecken schneiden in Gillenfeld" },
      { property: "og:description", content: "Professionelle Gartenarbeiten in Gillenfeld und naher Umgebung. Jetzt unverbindlich anfragen." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
        <ServiceAreaSection />
      </main>

      <Footer />
    </div>
  );
}

function Header({
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
}) {
  const navClasses = "text-sm font-medium text-foreground/80 hover:text-primary transition-colors";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Gartenarbeiten Schneiders
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#leistungen" className={navClasses}>
            Leistungen
          </a>
          <a href="#ablauf" className={navClasses}>
            Ablauf
          </a>
          <a href="#kontakt" className={navClasses}>
            Kontakt
          </a>
        </nav>

        <div className="hidden md:block">
          <a href="#kontakt" className="btn-primary">
            Termin anfragen
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <a href="#leistungen" className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>
              Leistungen
            </a>
            <a href="#ablauf" className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>
              Ablauf
            </a>
            <a href="#kontakt" className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>
              Kontakt
            </a>
            <a href="#kontakt" className="btn-primary mt-2 w-full" onClick={() => setMobileMenuOpen(false)}>
              Termin anfragen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-moss/20 px-4 py-1.5 text-sm font-semibold text-forest-700">
            <Leaf className="h-4 w-4" />
            Garten-Service in Gillenfeld
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Ihr Garten in besten Händen
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Professionelle Gartenarbeiten von Schneiders: Rasen mähen, Hecken schneiden und
            saisonale Gartenpflege – zuverlässig und ordentlich in Gillenfeld und naher Umgebung.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#kontakt" className="btn-primary">
              <CalendarDays className="h-4 w-4" />
              Jetzt anfragen
            </a>
            <a href="#leistungen" className="btn-secondary">
              Leistungen entdecken
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-leaf" />
              <span>Zuverlässig</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-leaf" />
              <span>Professionell</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-leaf" />
              <span>Fair</span>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl lg:aspect-[4/3]">
            <img
              src={heroImage}
              alt="Gepflegter Garten mit Rasenmäher und Hecken"
              width={1344}
              height={768}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "Rasen mähen",
      description:
        "Regelmäßiger und sauberer Schnitt für einen gesunden, dichten Rasen. Inklusive Kantenschnitt und Abhängen des Schnittguts.",
      image: lawnImage,
      icon: <Scissors className="h-5 w-5" />,
    },
    {
      title: "Hecken schneiden",
      description:
        "Form- und Erhaltungsschnitt für Hecken und Sträucher. Saubere Kanten und fachgerechte Entsorgung des Schnittguts.",
      image: hedgeImage,
      icon: <TreeDeciduous className="h-5 w-5" />,
    },
    {
      title: "Gartenpflege",
      description:
        "Saisonale Pflegearbeiten wie Unkraut entfernen, Beete säubern, Düngen und Pflanzen schneiden – damit Ihr Garten das ganze Jahr über strahlt.",
      image: careImage,
      icon: <Flower2 className="h-5 w-5" />,
    },
  ];

  return (
    <section id="leistungen" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="section-heading">Unsere Dienstleistungen</h2>
          <p className="section-subheading mt-4">
            Von der klassischen Rasenpflege bis zur fachgerechten Heckengestaltung – wir kümmern
            uns mit Sorgfalt um Ihren Garten.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card-service flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href="#kontakt"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  Anfragen stellen <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Kontakt aufnehmen",
      description:
        "Rufen Sie an, schreiben Sie eine E-Mail oder nutzen Sie das Kontaktformular – wir melden uns zeitnah bei Ihnen.",
    },
    {
      number: "02",
      title: "Termin vereinbaren",
      description:
        "Wir besprechen Ihre Wünsche, vereinbaren einen passenden Termin und erstellen Ihnen ein faires Angebot.",
    },
    {
      number: "03",
      title: "Gartenpflege erleben",
      description:
        "Wir erledigen die Arbeiten zuverlässig und ordentlich, damit Sie sich entspannt zurücklehnen können.",
    },
  ];

  return (
    <section id="ablauf" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="section-heading">So läuft es ab</h2>
          <p className="section-subheading mx-auto mt-4">
            In drei einfachen Schritten von der Anfrage bis zum gepflegten Garten.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border">
              <span className="font-display text-4xl font-extrabold text-moss/60">{step.number}</span>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="bg-cream py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="section-heading">Kostenlos anfragen</h2>
          <p className="section-subheading mt-4">
            Schildern Sie uns Ihr Vorhaben – wir antworten schnell und unverbindlich. Oder rufen Sie
            uns direkt an.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Telefon</p>
                <a href="tel:+4917655033897" className="text-sm text-muted-foreground hover:text-primary">
                  0176 55033897
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">E-Mail</p>
                <a
                  href="mailto:schneiders0510.hannes@web.de"
                  className="text-sm break-all text-muted-foreground hover:text-primary"
                >
                  schneiders0510.hannes@web.de
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Einsatzgebiet</p>
                <p className="text-sm text-muted-foreground">Gillenfeld und nahe Umgebung</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border md:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Vielen Dank!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Wir haben Ihre Anfrage erhalten und melden uns so schnell wie möglich bei Ihnen.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                }}
                className="btn-secondary mt-6"
              >
                Neue Anfrage
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field"
                  placeholder="Ihr vollständiger Name"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-foreground">
                    E-Mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-foreground">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-field"
                    placeholder="Ihre Telefonnummer"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-foreground">
                  Gewünschte Leistung
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="input-field"
                >
                  <option value="">Bitte wählen</option>
                  <option value="rasen">Rasen mähen</option>
                  <option value="hecke">Hecken schneiden</option>
                  <option value="pflege">Gartenpflege</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-foreground">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-field resize-none"
                  placeholder="Beschreiben Sie kurz Ihr Vorhaben oder Ihren Garten..."
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                <Mail className="h-4 w-4" />
                Anfrage absenden
              </button>
              <p className="text-xs text-muted-foreground">
                Mit dem Absenden stimmen Sie einer telefonischen oder schriftlichen Kontaktaufnahme zu.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function ServiceAreaSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="section-heading">Einsatzgebiet</h2>
        <p className="section-subheading mx-auto mt-4">
          Gartenarbeiten Schneiders ist Ihr Ansprechpartner für gepflegte Grünflächen in{" "}
          <strong className="text-foreground">Gillenfeld</strong> und der nahen Umgebung.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary">
          <MapPin className="h-4 w-4" />
          Aktueller Schwerpunkt: Gillenfeld und Umgebung
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cream text-forest">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">Gartenarbeiten Schneiders</span>
            </div>
            <p className="mt-3 text-sm text-cream/80">
              Professionelle Gartenpflege mit Sorgfalt und Zuverlässigkeit.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-cream">Kontakt</h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li>
                <a href="tel:+4917655033897" className="hover:text-cream hover:underline">
                  Telefon: 0176 55033897
                </a>
              </li>
              <li className="break-all">
                <a href="mailto:schneiders0510.hannes@web.de" className="hover:text-cream hover:underline">
                  schneiders0510.hannes@web.de
                </a>
              </li>
              <li>Standort: Gillenfeld</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-cream">Rechtliches</h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li>
                <a href="#" className="hover:text-cream hover:underline">Impressum</a>
              </li>
              <li>
                <a href="#" className="hover:text-cream hover:underline">Datenschutz</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-cream/10 pt-6 text-center text-xs text-cream/60">
          © {new Date().getFullYear()} Gartenarbeiten Schneiders. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
