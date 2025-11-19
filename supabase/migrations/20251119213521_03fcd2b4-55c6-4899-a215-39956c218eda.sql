-- Fix recursive RLS policies on user_roles table
-- The existing policies query user_roles within their own conditions, causing infinite recursion
-- Solution: Use the existing is_admin() SECURITY DEFINER function instead

-- Drop the recursive policies
DROP POLICY IF EXISTS "Only admins can view user roles" ON public.user_roles;
DROP POLICY IF EXISTS "Only admins can manage user roles" ON public.user_roles;

-- Create new non-recursive policies using the is_admin() function
CREATE POLICY "Only admins can view user roles"
  ON public.user_roles
  FOR SELECT
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Only admins can manage user roles"
  ON public.user_roles
  FOR ALL
  USING (public.is_admin(auth.uid()))
  WITH CHECK (public.is_admin(auth.uid()));