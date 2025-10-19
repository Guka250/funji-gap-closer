-- Create teachers table
CREATE TABLE public.teachers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  city TEXT NOT NULL,
  subjects TEXT NOT NULL,
  years_teaching TEXT NOT NULL,
  hourly_rate TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create students table
CREATE TABLE public.students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  city TEXT NOT NULL,
  grade TEXT NOT NULL,
  exam_date TEXT,
  challenges TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (for registration forms)
CREATE POLICY "Allow public teacher registration"
ON public.teachers
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow public student registration"
ON public.students
FOR INSERT
TO anon
WITH CHECK (true);

-- Allow authenticated users to view all registrations
CREATE POLICY "Allow authenticated users to view teachers"
ON public.teachers
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Allow authenticated users to view students"
ON public.students
FOR SELECT
TO authenticated
USING (true);

-- Create indexes for email lookups
CREATE INDEX idx_teachers_email ON public.teachers(email);
CREATE INDEX idx_students_email ON public.students(email);
CREATE INDEX idx_teachers_created ON public.teachers(created_at DESC);
CREATE INDEX idx_students_created ON public.students(created_at DESC);