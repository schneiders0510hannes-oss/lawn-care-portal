import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Leaf, Lock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Anmelden – Anfragen-Portal | Gartenarbeiten Schneiders" },
      {
        name: "description",
        content:
          "Interner Zugang zum Anfragen-Portal von Gartenarbeiten Schneiders in Gillenfeld.",
      },
      { property: "og:title", content: "Anmelden – Anfragen-Portal" },
      {
        property: "og:description",
        content: "Interner Zugang zum Anfragen-Portal von Gartenarbeiten Schneiders.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/anfragen" });
    });
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setBusy(true);
    try {
      if (mode === "login") {
        const { error: err } = await supabase.auth.signInWithPassword({ email, password });
        if (err) throw err;
        navigate({ to: "/anfragen" });
      } else {
        const { data, error: err } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/auth` },
        });
        if (err) throw err;
        if (data.session) {
          navigate({ to: "/anfragen" });
        } else {
          setInfo(
            "Fast geschafft: Bitte bestätigen Sie die E-Mail, die wir Ihnen gerade geschickt haben.",
          );
        }
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "";
      setError(
        message.toLowerCase().includes("invalid login")
          ? "E-Mail oder Passwort ist nicht korrekt."
          : message || "Anmeldung fehlgeschlagen. Bitte versuchen Sie es erneut.",
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-6 py-16">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2 text-primary">
          <Leaf className="h-6 w-6" />
          <span className="font-display text-lg font-bold">Gartenarbeiten Schneiders</span>
        </Link>

        <div className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-foreground">
                {mode === "login" ? "Anmelden" : "Konto anlegen"}
              </h1>
              <p className="text-sm text-muted-foreground">Interner Bereich – Anfragen-Portal</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-foreground">
                E-Mail
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-semibold text-foreground"
              >
                Passwort
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={8}
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>

            {error && (
              <p className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
                {error}
              </p>
            )}
            {info && (
              <p className="rounded-lg bg-primary/10 px-4 py-3 text-sm text-primary">{info}</p>
            )}

            <button type="submit" disabled={busy} className="btn-primary w-full disabled:opacity-60">
              {busy ? "Bitte warten..." : mode === "login" ? "Anmelden" : "Konto anlegen"}
            </button>
          </form>

          <button
            type="button"
            onClick={() => {
              setMode(mode === "login" ? "signup" : "login");
              setError(null);
              setInfo(null);
            }}
            className="mt-5 w-full text-center text-sm text-muted-foreground hover:text-primary"
          >
            {mode === "login"
              ? "Noch kein Konto? Jetzt anlegen"
              : "Ich habe bereits ein Konto – anmelden"}
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            Zurück zur Startseite
          </Link>
        </p>
      </div>
    </main>
  );
}
