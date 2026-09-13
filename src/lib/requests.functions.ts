import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const REQUEST_STATUSES = ["neu", "in_bearbeitung", "erledigt"] as const;
export type RequestStatus = (typeof REQUEST_STATUSES)[number];

export interface ContactRequestRow {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string | null;
  message: string | null;
  status: string;
  admin_note: string | null;
  created_at: string;
  updated_at: string;
}

export const listContactRequests = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("contact_requests")
      .select("id, name, email, phone, service, message, status, admin_note, created_at, updated_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("contact_requests select failed", error);
      throw new Error("Anfragen konnten nicht geladen werden.");
    }

    return (data ?? []) as ContactRequestRow[];
  });

const updateSchema = z.object({
  id: z.string().uuid(),
  status: z.enum(REQUEST_STATUSES).optional(),
  admin_note: z.string().max(4000).optional(),
});

export const updateContactRequest = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => updateSchema.parse(input))
  .handler(async ({ data, context }) => {
    const patch: { status?: string; admin_note?: string } = {};
    if (data.status !== undefined) patch.status = data.status;
    if (data.admin_note !== undefined) patch.admin_note = data.admin_note;

    const { data: row, error } = await context.supabase
      .from("contact_requests")
      .update(patch)
      .eq("id", data.id)
      .select("id, name, email, phone, service, message, status, admin_note, created_at, updated_at")
      .single();

    if (error) {
      console.error("contact_requests update failed", error);
      throw new Error("Änderung konnte nicht gespeichert werden.");
    }

    return row as ContactRequestRow;
  });
