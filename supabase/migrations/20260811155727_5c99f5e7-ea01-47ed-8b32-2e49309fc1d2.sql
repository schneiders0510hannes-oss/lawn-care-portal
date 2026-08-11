CREATE TABLE public.contact_requests (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text,
  message text,
  confirmation_status text NOT NULL DEFAULT 'pending',
  notification_status text NOT NULL DEFAULT 'pending',
  status_detail text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_requests TO anon, authenticated;
GRANT ALL ON public.contact_requests TO service_role;

ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact request"
  ON public.contact_requests FOR INSERT TO anon, authenticated
  WITH CHECK (true);