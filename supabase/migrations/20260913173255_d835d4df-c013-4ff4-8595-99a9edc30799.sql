ALTER TABLE public.contact_requests
  ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'neu',
  ADD COLUMN IF NOT EXISTS admin_note text,
  ADD COLUMN IF NOT EXISTS updated_at timestamp with time zone NOT NULL DEFAULT now();

CREATE OR REPLACE FUNCTION public.is_owner()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT lower(coalesce(auth.jwt() ->> 'email', '')) = 'schneiders0510.hannes@web.de'
$$;

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS contact_requests_set_updated_at ON public.contact_requests;
CREATE TRIGGER contact_requests_set_updated_at
BEFORE UPDATE ON public.contact_requests
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

GRANT SELECT, UPDATE ON public.contact_requests TO authenticated;
GRANT ALL ON public.contact_requests TO service_role;

DROP POLICY IF EXISTS "Owner can read contact requests" ON public.contact_requests;
CREATE POLICY "Owner can read contact requests"
ON public.contact_requests FOR SELECT TO authenticated
USING (public.is_owner());

DROP POLICY IF EXISTS "Owner can update contact requests" ON public.contact_requests;
CREATE POLICY "Owner can update contact requests"
ON public.contact_requests FOR UPDATE TO authenticated
USING (public.is_owner()) WITH CHECK (public.is_owner());