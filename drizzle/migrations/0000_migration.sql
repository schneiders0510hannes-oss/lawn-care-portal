DROP POLICY IF EXISTS "Anyone can submit a contact request" ON public.contact_requests;
REVOKE INSERT ON public.contact_requests FROM anon, authenticated;