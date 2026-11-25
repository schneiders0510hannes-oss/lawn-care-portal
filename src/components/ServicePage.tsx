import { Link } from "@tanstack/react-router";
import { Leaf, Check, Phone, MapPin, CalendarDays } from "lucide-react";
import { NEARBY_TOWNS } from "@/lib/seo";

export function ServicePage(props: {
  title: string;
  intro: string;
  image: string;
  points: string[];
  text: string[];
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold text-foreground">Gartenarbeiten Schneiders</span>
          </Link>
          <a href="/#kontakt" className="btn-primary hidden sm:inline-flex">Termin anfragen</a>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <nav className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Startseite</Link> / {props.title}
        </nav>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
              {props.title} in Gillenfeld & Umgebung
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{props.intro}</p>
            <ul className="mt-6 space-y-2">
              {props.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-foreground">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-leaf" /> {p}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/#kontakt" className="btn-primary"><CalendarDays className="h-4 w-4" /> Jetzt anfragen</a>
              <a href="tel:+4917655033897" className="btn-secondary"><Phone className="h-4 w-4" /> 0176 55033897</a>
            </div>
          </div>
          <img src={props.image} alt={`${props.title} in Gillenfeld`} width={800} height={600} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl" />
        </div>
        <section className="mt-16 max-w-3xl space-y-4 text-muted-foreground">
          {props.text.map((t) => <p key={t}>{t}</p>)}
        </section>
        <section className="mt-12 rounded-2xl bg-cream p-6 md:p-8">
          <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-foreground">
            <MapPin className="h-5 w-5 text-primary" /> {props.title} – unser Einsatzgebiet
          </h2>
          <p className="mt-3 text-muted-foreground">
            Wir sind von Gillenfeld aus in der Vulkaneifel unterwegs, unter anderem in:
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {NEARBY_TOWNS.map((t) => (
              <li key={t} className="rounded-full bg-background px-3 py-1 text-sm text-foreground ring-1 ring-border">{t}</li>
            ))}
          </ul>
        </section>
        <nav className="mt-12 flex flex-wrap gap-4 text-sm font-semibold text-primary">
          <Link to="/rasen-maehen-gillenfeld" className="hover:underline">Rasen mähen</Link>
          <Link to="/heckenschnitt-gillenfeld" className="hover:underline">Heckenschnitt</Link>
          <Link to="/gartenpflege-gillenfeld" className="hover:underline">Gartenpflege</Link>
          <Link to="/impressum" className="hover:underline">Impressum</Link>
        </nav>
      </main>
    </div>
  );
}
