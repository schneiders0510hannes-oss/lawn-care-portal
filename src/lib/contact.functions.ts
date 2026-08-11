import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(150),
  phone: z.string().trim().max(50).optional().default(""),
  service: z.string().trim().max(50).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

export const submitContactRequest = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: row, error } = await supabaseAdmin
      .from("contact_requests")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        service: data.service || null,
        message: data.message || null,
      })
      .select("id")
      .single();

    if (error) {
      console.error("contact_requests insert failed", error);
      throw new Error("Anfrage konnte nicht gespeichert werden.");
    }

    const { sendContactEmails } = await import("./contact-emails.server");
    const result = await sendContactEmails({ ...data, id: row.id });

    await supabaseAdmin
      .from("contact_requests")
      .update({
        confirmation_status: result.confirmation,
        notification_status: result.notification,
        status_detail: result.detail,
      })
      .eq("id", row.id);

    return { id: row.id, ...result };
  });
