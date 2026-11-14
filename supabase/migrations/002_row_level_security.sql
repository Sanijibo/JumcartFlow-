CREATE OR REPLACE FUNCTION public.is_business_member(business_id_param UUID)
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.business_members bm
    WHERE bm.business_id = business_id_param
      AND bm.user_id = auth.uid()
  );
$$;

CREATE OR REPLACE FUNCTION public.user_business_role(business_id_param UUID)
RETURNS TEXT
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT bm.role
  FROM public.business_members bm
  WHERE bm.business_id = business_id_param
    AND bm.user_id = auth.uid()
  LIMIT 1;
$$;

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.delivery_verifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.risk_alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Profiles are viewable and editable by their owner"
ON public.profiles
FOR ALL
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

CREATE POLICY "Businesses visible to authorized members"
ON public.businesses
FOR SELECT
USING (public.is_business_member(id));

CREATE POLICY "Business owners/admins can update businesses"
ON public.businesses
FOR UPDATE
USING (
  auth.uid() = owner_user_id
  OR public.user_business_role(id) IN ('owner', 'admin')
)
WITH CHECK (
  auth.uid() = owner_user_id
  OR public.user_business_role(id) IN ('owner', 'admin')
);

CREATE POLICY "Authenticated users can create businesses"
ON public.businesses
FOR INSERT
WITH CHECK (auth.uid() = owner_user_id);

CREATE POLICY "Business members can view memberships"
ON public.business_members
FOR SELECT
USING (public.is_business_member(business_id));

CREATE POLICY "Business owners/admins manage memberships"
ON public.business_members
FOR INSERT
WITH CHECK (
  public.user_business_role(business_id) IN ('owner', 'admin')
);

CREATE POLICY "Business owners/admins update memberships"
ON public.business_members
FOR UPDATE
USING (
  public.user_business_role(business_id) IN ('owner', 'admin')
)
WITH CHECK (
  public.user_business_role(business_id) IN ('owner', 'admin')
);

CREATE POLICY "Business owners/admins delete memberships"
ON public.business_members
FOR DELETE
USING (
  public.user_business_role(business_id) IN ('owner', 'admin')
);

CREATE POLICY "Business members can view orders"
ON public.orders
FOR SELECT
USING (public.is_business_member(business_id));

CREATE POLICY "Business owners/admins manage orders"
ON public.orders
FOR INSERT
WITH CHECK (public.user_business_role(business_id) IN ('owner', 'admin', 'staff'));

CREATE POLICY "Business owners/admins update orders"
ON public.orders
FOR UPDATE
USING (public.user_business_role(business_id) IN ('owner', 'admin', 'staff'))
WITH CHECK (public.user_business_role(business_id) IN ('owner', 'admin', 'staff'));

CREATE POLICY "Business members can view payments"
ON public.payments
FOR SELECT
USING (public.is_business_member(business_id));

CREATE POLICY "Business owners/admins manage payments"
ON public.payments
FOR INSERT
WITH CHECK (public.user_business_role(business_id) IN ('owner', 'admin', 'staff'));

CREATE POLICY "Business owners/admins update payments"
ON public.payments
FOR UPDATE
USING (public.user_business_role(business_id) IN ('owner', 'admin', 'staff'))
WITH CHECK (public.user_business_role(business_id) IN ('owner', 'admin', 'staff'));

CREATE POLICY "Business members can view delivery verifications"
ON public.delivery_verifications
FOR SELECT
USING (public.is_business_member(business_id));

CREATE POLICY "Business owners/admins manage delivery verifications"
ON public.delivery_verifications
FOR INSERT
WITH CHECK (public.user_business_role(business_id) IN ('owner', 'admin', 'staff'));

CREATE POLICY "Business owners/admins update delivery verifications"
ON public.delivery_verifications
FOR UPDATE
USING (public.user_business_role(business_id) IN ('owner', 'admin', 'staff'))
WITH CHECK (public.user_business_role(business_id) IN ('owner', 'admin', 'staff'));

CREATE POLICY "Business members can view risk alerts"
ON public.risk_alerts
FOR SELECT
USING (public.is_business_member(business_id));

CREATE POLICY "Business owners/admins manage risk alerts"
ON public.risk_alerts
FOR INSERT
WITH CHECK (public.user_business_role(business_id) IN ('owner', 'admin', 'staff'));

CREATE POLICY "Business owners/admins update risk alerts"
ON public.risk_alerts
FOR UPDATE
USING (public.user_business_role(business_id) IN ('owner', 'admin', 'staff'))
WITH CHECK (public.user_business_role(business_id) IN ('owner', 'admin', 'staff'));

CREATE POLICY "Business members can view audit logs"
ON public.audit_logs
FOR SELECT
USING (public.is_business_member(business_id));

CREATE POLICY "Business owners/admins create audit logs"
ON public.audit_logs
FOR INSERT
WITH CHECK (
  public.user_business_role(business_id) IN ('owner', 'admin', 'staff')
);

CREATE POLICY "Business owners/admins update audit logs"
ON public.audit_logs
FOR UPDATE
USING (public.user_business_role(business_id) IN ('owner', 'admin'))
WITH CHECK (public.user_business_role(business_id) IN ('owner', 'admin'));
