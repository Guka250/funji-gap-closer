-- Remove hourly_rate column from teachers table
ALTER TABLE public.teachers DROP COLUMN IF EXISTS hourly_rate;

-- Rename city to country in teachers table
ALTER TABLE public.teachers RENAME COLUMN city TO country;

-- Rename city to country in students table
ALTER TABLE public.students RENAME COLUMN city TO country;