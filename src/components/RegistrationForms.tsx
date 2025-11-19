import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { GraduationCap, Users, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

const teacherFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  country: z.string().trim().min(2, "Country is required").max(100),
  subjects: z.string().trim().min(2, "Please specify subjects/grades").max(200),
  yearsTeaching: z.string().trim().min(1, "Please specify years of experience").max(50),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted",
  }),
  honeypot: z.string().max(0, "Invalid submission"), // Bot detection - must be empty
});

const studentFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  country: z.string().trim().min(2, "Country is required").max(100),
  grade: z.string().trim().min(1, "Grade is required").max(50),
  examDate: z.string().trim().max(100).optional(),
  challenges: z.string().trim().min(10, "Please describe current challenges").max(1000),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted",
  }),
  honeypot: z.string().max(0, "Invalid submission"), // Bot detection - must be empty
});

type TeacherFormData = z.infer<typeof teacherFormSchema>;
type StudentFormData = z.infer<typeof studentFormSchema>;

const RegistrationForms = () => {
  const [teacherSubmitted, setTeacherSubmitted] = useState(false);
  const [studentSubmitted, setStudentSubmitted] = useState(false);

  const teacherForm = useForm<TeacherFormData>({
    resolver: zodResolver(teacherFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      subjects: "",
      yearsTeaching: "",
      consent: false,
      honeypot: "",
    },
  });

  const studentForm = useForm<StudentFormData>({
    resolver: zodResolver(studentFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      grade: "",
      examDate: "",
      challenges: "",
      consent: false,
      honeypot: "",
    },
  });

  const onTeacherSubmit = async (data: TeacherFormData) => {
    try {
      // Bot detection - if honeypot is filled, reject silently
      if (data.honeypot) {
        setTeacherSubmitted(true);
        toast.success("Registration successful! We'll be in touch soon.");
        return;
      }
      
      // Save to database
      const { error } = await supabase.from("teachers").insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        country: data.country,
        subjects: data.subjects,
        years_teaching: data.yearsTeaching,
      });

      if (error) {
        throw error;
      }

      // Analytics tracking
      if ((window as any).analytics) {
        (window as any).analytics.track("form_submit_teacher", {
          country: data.country,
          subjects: data.subjects,
          yearsTeaching: data.yearsTeaching,
        });
      }

      setTeacherSubmitted(true);
      toast.success("Registration successful! We'll be in touch soon.");
    } catch (error) {
      toast.error("Registration failed. Please check your information and try again.");
      if (import.meta.env.DEV) {
        console.error("Teacher form error:", error);
      }
    }
  };

  const onStudentSubmit = async (data: StudentFormData) => {
    try {
      // Bot detection - if honeypot is filled, reject silently
      if (data.honeypot) {
        setStudentSubmitted(true);
        toast.success("Registration successful! We'll be in touch soon.");
        return;
      }
      
      // Save to database
      const { error } = await supabase.from("students").insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        country: data.country,
        grade: data.grade,
        exam_date: data.examDate || null,
        challenges: data.challenges,
      });

      if (error) {
        throw error;
      }

      // Analytics tracking
      if ((window as any).analytics) {
        (window as any).analytics.track("form_submit_student", {
          country: data.country,
          grade: data.grade,
        });
      }

      setStudentSubmitted(true);
      toast.success("Registration successful! We'll be in touch soon.");
    } catch (error) {
      toast.error("Registration failed. Please check your information and try again.");
      if (import.meta.env.DEV) {
        console.error("Student form error:", error);
      }
    }
  };

  return (
    <section id="register" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Apply for{" "}
            <span className="text-primary">
              early access
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Be among the first to experience FunJI and enjoy exclusive early-bird benefits
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Teacher Form */}
          <div
            id="register-teacher"
            className="gradient-card rounded-2xl p-6 md:p-8 border border-primary/10 shadow-custom-lg animate-fade-in"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shadow-custom-sm">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Teacher Registration
              </h3>
            </div>

            {teacherSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2">Thank you for applying!</h4>
                <p className="text-foreground/70">
                  We'll be in touch shortly with early-access details and exclusive offers.
                </p>
              </div>
            ) : (
              <Form {...teacherForm}>
                <form onSubmit={teacherForm.handleSubmit(onTeacherSubmit)} className="space-y-4">
                  <FormField
                    control={teacherForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Smith" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={teacherForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={teacherForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 234 567 8900" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={teacherForm.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country *</FormLabel>
                        <FormControl>
                          <Input placeholder="United States" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={teacherForm.control}
                    name="subjects"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subjects/Grades *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Algebra, Geometry, Grade 9-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid sm:grid-cols-1 gap-4">
                    <FormField
                      control={teacherForm.control}
                      name="yearsTeaching"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Years Teaching *</FormLabel>
                          <FormControl>
                            <Input placeholder="5 years" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={teacherForm.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 rounded-lg bg-secondary/50">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal text-foreground/80">
                            I agree to the{" "}
                            <Link to="/terms" className="text-primary hover:underline font-medium">
                              Terms of Service
                            </Link>
                            {" "}and{" "}
                            <Link to="/privacy" className="text-primary hover:underline font-medium">
                              Privacy Policy
                            </Link>
                            {" "}and consent to be contacted about FunJI's pre-launch.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Honeypot field - hidden from users, catches bots */}
                  <FormField
                    control={teacherForm.control}
                    name="honeypot"
                    render={({ field }) => (
                      <FormItem className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" aria-hidden="true">
                        <FormLabel>Leave this field empty</FormLabel>
                        <FormControl>
                          <Input {...field} tabIndex={-1} autoComplete="off" />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" size="lg">
                    Submit Teacher Application
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            )}
          </div>

          {/* Student Form */}
          <div
            id="register-student"
            className="gradient-card rounded-2xl p-6 md:p-8 border border-primary/10 shadow-custom-lg animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shadow-custom-sm">
                <Users className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Student/Parent Registration
              </h3>
            </div>

            {studentSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2">Thank you for applying!</h4>
                <p className="text-foreground/70">
                  We'll be in touch shortly with early-access details and exclusive offers.
                </p>
              </div>
            ) : (
              <Form {...studentForm}>
                <form onSubmit={studentForm.handleSubmit(onStudentSubmit)} className="space-y-4">
                  <FormField
                    control={studentForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={studentForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="jane@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={studentForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 234 567 8900" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={studentForm.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country *</FormLabel>
                        <FormControl>
                          <Input placeholder="United States" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={studentForm.control}
                      name="grade"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Grade *</FormLabel>
                          <FormControl>
                            <Input placeholder="Grade 10" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={studentForm.control}
                      name="examDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Upcoming Exam Date</FormLabel>
                          <FormControl>
                            <Input placeholder="May 2025" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={studentForm.control}
                    name="challenges"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Math Challenges *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe the areas where the student needs help..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={studentForm.control}
                    name="consent"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 rounded-lg bg-secondary/50">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal text-foreground/80">
                            I agree to the{" "}
                            <Link to="/terms" className="text-primary hover:underline font-medium">
                              Terms of Service
                            </Link>
                            {" "}and{" "}
                            <Link to="/privacy" className="text-primary hover:underline font-medium">
                              Privacy Policy
                            </Link>
                            {" "}and consent to be contacted about FunJI's pre-launch.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  {/* Honeypot field - hidden from users, catches bots */}
                  <FormField
                    control={studentForm.control}
                    name="honeypot"
                    render={({ field }) => (
                      <FormItem className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" aria-hidden="true">
                        <FormLabel>Leave this field empty</FormLabel>
                        <FormControl>
                          <Input {...field} tabIndex={-1} autoComplete="off" />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" size="lg">
                    Submit Student Application
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForms;
