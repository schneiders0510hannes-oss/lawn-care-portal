import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Leaf, LogOut, Mail, Phone, RefreshCw, Check, Clock, Inbox } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  listContactRequests,
  updateContactRequest,
  type ContactRequestRow,
  type RequestStatus,
} from "@/lib/requests.functions";

export const Route = createFileRoute("/_authenticated/anfragen")({
  head: () => ({
    meta: [
      { title: "Anfragen-Portal | Gartenarbeiten Schneiders" },
      {
        name: "description",
        content: "Interne Übersicht aller Kundenanfragen von Gartenarbeiten Schneiders.",
      },
      { property: "og:title", content: "Anfragen-Portal" },
      { property: "og:description", content: "Interne Übersicht aller Kundenanfragen." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: RequestsPortal,
});

const STATUS_LABEL: Record<string, string> = {
  neu: "Neu",
  in_bearbeitung: "In Bearbeitung",
  erledigt: "Erledigt",
};

const FILTERS: { key: "alle" | RequestStatus; label: string }[] = [
  { key: "alle", label: "Alle" },
  { key: "neu", label: "Neu" },
  { key: "in_bearbeitung", label: "In Bearbeitung" },
  { key: "erledigt", label: "Erledigt" },
];

function formatDate(value: string) {
  return new Date(value).toLocaleString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function RequestsPortal() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchRequests = useServerFn(listContactRequests);
  const [filter, setFilter] = useState<"alle" | RequestStatus>("alle");

  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["contact-requests"],
    queryFn: () => fetchRequests(),
  });

  const requests = data ?? [];
  const visible = filter === "alle" ? requests : requests.filter((r) => r.status === filter);
  const openCount = requests.filter((r) => r.status !== "erledigt").length;

  const signOut = async () => {
    await supabase.auth.signOut();
    queryClient.clear();
    navigate({ to: "/auth" });
  };

  return (
    <main className="min-h-screen bg-cream">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <Link to="/" className="flex items-center gap-2 text-primary">
            <Leaf className="h-5 w-5" />
            <span className="font-display text-base font-bold">Gartenarbeiten Schneiders</span>
          </Link>
          <button onClick={signOut} className="btn-secondary text-sm">
            <LogOut className="h-4 w-4" />
            Abmelden
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">Anfragen-Portal</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {openCount === 0
                ? "Aktuell sind keine offenen Anfragen vorhanden."
                : `${openCount} offene ${openCount === 1 ? "Anfrage" : "Anfragen"} von insgesamt ${requests.length}.`}
            </p>
          </div>
          <button
            onClick={() => refetch()}
            className="btn-secondary text-sm"
            disabled={isFetching}
          >
            <RefreshCw className={`h-4 w-4 ${isFetching ? "animate-spin" : ""}`} />
            Aktualisieren
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                filter === f.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground ring-1 ring-border hover:text-primary"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          {isLoading && <p className="text-sm text-muted-foreground">Anfragen werden geladen...</p>}

          {error && (
            <p className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
              Die Anfragen konnten nicht geladen werden. Bitte melden Sie sich mit dem Konto an, das
              zu Ihrer Geschäfts-E-Mail gehört.
            </p>
          )}

          {!isLoading && !error && visible.length === 0 && (
            <div className="rounded-2xl bg-card p-10 text-center ring-1 ring-border">
              <Inbox className="mx-auto h-8 w-8 text-muted-foreground" />
              <p className="mt-3 text-sm text-muted-foreground">
                Hier erscheinen neue Anfragen aus dem Kontaktformular.
              </p>
            </div>
          )}

          {visible.map((request) => (
            <RequestCard key={request.id} request={request} />
          ))}
        </div>
      </div>
    </main>
  );
}

function RequestCard({ request }: { request: ContactRequestRow }) {
  const queryClient = useQueryClient();
  const update = useServerFn(updateContactRequest);
  const [note, setNote] = useState(request.admin_note ?? "");
  const [saved, setSaved] = useState(false);

  const mutation = useMutation({
    mutationFn: (input: { status?: RequestStatus; admin_note?: string }) =>
      update({ data: { id: request.id, ...input } }),
    onSuccess: () => {
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
      queryClient.invalidateQueries({ queryKey: ["contact-requests"] });
    },
  });

  const statusStyle =
    request.status === "erledigt"
      ? "bg-primary/10 text-primary"
      : request.status === "in_bearbeitung"
        ? "bg-accent/20 text-foreground"
        : "bg-destructive/10 text-destructive";

  const subject = `Ihre Anfrage bei Gartenarbeiten Schneiders`;
  const body = `Hallo ${request.name},\n\nvielen Dank für Ihre Anfrage.\n\n`;

  return (
    <article className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-lg font-bold text-foreground">{request.name}</h2>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {formatDate(request.created_at)}
            {request.service ? ` · ${request.service}` : ""}
          </p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle}`}>
          {STATUS_LABEL[request.status] ?? request.status}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <a
          href={`mailto:${request.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
          className="flex items-center gap-1.5 break-all text-primary hover:underline"
        >
          <Mail className="h-4 w-4" />
          {request.email}
        </a>
        {request.phone && (
          <a
            href={`tel:${request.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 text-primary hover:underline"
          >
            <Phone className="h-4 w-4" />
            {request.phone}
          </a>
        )}
      </div>

      {request.message && (
        <p className="mt-4 rounded-lg bg-cream px-4 py-3 text-sm whitespace-pre-wrap text-foreground">
          {request.message}
        </p>
      )}

      <div className="mt-5">
        <label
          htmlFor={`note-${request.id}`}
          className="mb-1.5 block text-sm font-semibold text-foreground"
        >
          Interne Notiz
        </label>
        <textarea
          id={`note-${request.id}`}
          rows={2}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="z. B. Termin vereinbart für Samstag, Angebot: 80 €"
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          onClick={() => mutation.mutate({ admin_note: note })}
          disabled={mutation.isPending}
          className="btn-secondary text-sm disabled:opacity-60"
        >
          Notiz speichern
        </button>
        {request.status !== "in_bearbeitung" && (
          <button
            onClick={() => mutation.mutate({ status: "in_bearbeitung", admin_note: note })}
            disabled={mutation.isPending}
            className="btn-secondary text-sm disabled:opacity-60"
          >
            In Bearbeitung
          </button>
        )}
        {request.status !== "erledigt" ? (
          <button
            onClick={() => mutation.mutate({ status: "erledigt", admin_note: note })}
            disabled={mutation.isPending}
            className="btn-primary text-sm disabled:opacity-60"
          >
            <Check className="h-4 w-4" />
            Abschließen
          </button>
        ) : (
          <button
            onClick={() => mutation.mutate({ status: "neu", admin_note: note })}
            disabled={mutation.isPending}
            className="btn-secondary text-sm disabled:opacity-60"
          >
            Wieder öffnen
          </button>
        )}
        {saved && <span className="text-sm text-primary">Gespeichert</span>}
        {mutation.isError && (
          <span className="text-sm text-destructive">Speichern fehlgeschlagen</span>
        )}
      </div>
    </article>
  );
}
