-- Clean up outdated constraints from removed columns (city, hourly_rate)
-- and add proper constraints for the country column

-- Drop old constraints if they exist
ALTER TABLE public.teachers 
  DROP CONSTRAINT IF EXISTS teachers_city_length,
  DROP CONSTRAINT IF EXISTS teachers_hourly_rate_length;

ALTER TABLE public.students 
  DROP CONSTRAINT IF EXISTS students_city_length;

-- Add constraints for the country column
ALTER TABLE public.teachers
  ADD CONSTRAINT teachers_country_length 
  CHECK (char_length(country) >= 2 AND char_length(country) <= 100);

ALTER TABLE public.students
  ADD CONSTRAINT students_country_length 
  CHECK (char_length(country) >= 2 AND char_length(country) <= 100);