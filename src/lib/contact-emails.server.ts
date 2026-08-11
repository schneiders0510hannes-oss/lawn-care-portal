// Versand der Bestätigungs- und Benachrichtigungs-E-Mails.
// Der eigentliche Versand wird aktiv, sobald eine eigene Absender-Domain
// eingerichtet und verifiziert ist. Bis dahin wird die Anfrage sicher
// gespeichert und der Status entsprechend vermerkt.

export const OWNER_EMAIL = "schneiders0510.hannes@web.de";

export interface ContactEmailInput {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
}

export interface ContactEmailResult {
  confirmation: string;
  notification: string;
  detail: string | null;
}

export async function sendContactEmails(
  _input: ContactEmailInput,
): Promise<ContactEmailResult> {
  return {
    confirmation: "skipped",
    notification: "skipped",
    detail: "Absender-Domain noch nicht eingerichtet – Anfrage wurde gespeichert.",
  };
}
