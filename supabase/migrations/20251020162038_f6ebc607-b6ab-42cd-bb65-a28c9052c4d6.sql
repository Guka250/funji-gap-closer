-- Fix 1: Add server-side input validation constraints
-- Add length and format constraints to teachers table
ALTER TABLE public.teachers
  ADD CONSTRAINT teachers_name_length CHECK (char_length(name) BETWEEN 2 AND 100),
  ADD CONSTRAINT teachers_email_length CHECK (char_length(email) BETWEEN 5 AND 255),
  ADD CONSTRAINT teachers_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  ADD CONSTRAINT teachers_city_length CHECK (char_length(city) BETWEEN 2 AND 100),
  ADD CONSTRAINT teachers_subjects_length CHECK (char_length(subjects) BETWEEN 2 AND 200),
  ADD CONSTRAINT teachers_years_teaching_length CHECK (char_length(years_teaching) BETWEEN 1 AND 50),
  ADD CONSTRAINT teachers_hourly_rate_length CHECK (char_length(hourly_rate) BETWEEN 1 AND 50),
  ADD CONSTRAINT teachers_phone_length CHECK (phone IS NULL OR char_length(phone) BETWEEN 5 AND 20);

-- Add length and format constraints to students table
ALTER TABLE public.students
  ADD CONSTRAINT students_name_length CHECK (char_length(name) BETWEEN 2 AND 100),
  ADD CONSTRAINT students_email_length CHECK (char_length(email) BETWEEN 5 AND 255),
  ADD CONSTRAINT students_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  ADD CONSTRAINT students_city_length CHECK (char_length(city) BETWEEN 2 AND 100),
  ADD CONSTRAINT students_grade_length CHECK (char_length(grade) BETWEEN 1 AND 50),
  ADD CONSTRAINT students_exam_date_length CHECK (exam_date IS NULL OR char_length(exam_date) BETWEEN 1 AND 100),
  ADD CONSTRAINT students_challenges_length CHECK (char_length(challenges) BETWEEN 10 AND 2000),
  ADD CONSTRAINT students_phone_length CHECK (phone IS NULL OR char_length(phone) BETWEEN 5 AND 20);

-- Fix 2: Implement admin role system and restrict data access
-- Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Only admins can view roles
CREATE POLICY "Only admins can view user roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles ur
    WHERE ur.user_id = auth.uid() AND ur.role = 'admin'
  )
);

-- Only admins can manage roles
CREATE POLICY "Only admins can manage user roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles ur
    WHERE ur.user_id = auth.uid() AND ur.role = 'admin'
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.user_roles ur
    WHERE ur.user_id = auth.uid() AND ur.role = 'admin'
  )
);

-- Create security definer function to check admin role
CREATE OR REPLACE FUNCTION public.is_admin(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = 'admin'
  )
$$;

-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Allow authenticated users to view teachers" ON public.teachers;
DROP POLICY IF EXISTS "Allow authenticated users to view students" ON public.students;

-- Create admin-only SELECT policies
CREATE POLICY "Only admins can view teachers"
ON public.teachers
FOR SELECT
TO authenticated
USING (public.is_admin(auth.uid()));

CREATE POLICY "Only admins can view students"
ON public.students
FOR SELECT
TO authenticated
USING (public.is_admin(auth.uid()));

-- Add UPDATE and DELETE policies for admins
CREATE POLICY "Only admins can update teachers"
ON public.teachers
FOR UPDATE
TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Only admins can delete teachers"
ON public.teachers
FOR DELETE
TO authenticated
USING (public.is_admin(auth.uid()));

CREATE POLICY "Only admins can update students"
ON public.students
FOR UPDATE
TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Only admins can delete students"
ON public.students
FOR DELETE
TO authenticated
USING (public.is_admin(auth.uid()));