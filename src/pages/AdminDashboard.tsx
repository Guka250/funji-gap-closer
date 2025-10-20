import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Users, LogOut, Shield, Calendar, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Teacher {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  city: string;
  subjects: string;
  years_teaching: string;
  hourly_rate: string;
  created_at: string;
}

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  city: string;
  grade: string;
  exam_date: string | null;
  challenges: string;
  created_at: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthAndFetchData();
  }, []);

  const checkAuthAndFetchData = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session?.user) {
        toast.error("Please log in");
        navigate('/admin');
        return;
      }

      // Verify admin role
      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin')
        .maybeSingle();

      if (!roleData) {
        toast.error("Unauthorized: Admin access required");
        await supabase.auth.signOut();
        navigate('/admin');
        return;
      }

      // Fetch registration data
      const [teacherResult, studentResult] = await Promise.all([
        supabase
          .from('teachers')
          .select('*')
          .order('created_at', { ascending: false }),
        supabase
          .from('students')
          .select('*')
          .order('created_at', { ascending: false })
      ]);

      if (teacherResult.data) setTeachers(teacherResult.data);
      if (studentResult.data) setStudents(studentResult.data);
    } catch (error) {
      toast.error("Failed to load data");
      if (import.meta.env.DEV) {
        console.error("Dashboard error:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    navigate('/admin');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
          <p className="text-foreground/70">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">FunJI Admin</h1>
              <p className="text-sm text-foreground/70">Registration Management</p>
            </div>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                Teacher Registrations
              </CardTitle>
              <CardDescription>Total applications received</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{teachers.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Student Registrations
              </CardTitle>
              <CardDescription>Total applications received</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{students.length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Teachers Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Teacher Applications</CardTitle>
            <CardDescription>
              Manage and review teacher registration submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            {teachers.length === 0 ? (
              <div className="text-center py-8 text-foreground/70">
                No teacher applications yet
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Details</TableHead>
                      <TableHead>Registered</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teachers.map((teacher) => (
                      <TableRow key={teacher.id}>
                        <TableCell className="font-medium">{teacher.name}</TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1 text-sm">
                            <span className="flex items-center">
                              <Mail className="mr-1 h-3 w-3" />
                              {teacher.email}
                            </span>
                            {teacher.phone && (
                              <span className="flex items-center text-foreground/70">
                                <Phone className="mr-1 h-3 w-3" />
                                {teacher.phone}
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="flex items-center">
                            <MapPin className="mr-1 h-4 w-4 text-foreground/70" />
                            {teacher.city}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1 text-sm">
                            <Badge variant="secondary">{teacher.subjects}</Badge>
                            <span className="text-foreground/70">
                              {teacher.years_teaching} exp • {teacher.hourly_rate}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="flex items-center text-sm text-foreground/70">
                            <Calendar className="mr-1 h-3 w-3" />
                            {formatDate(teacher.created_at)}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Students Table */}
        <Card>
          <CardHeader>
            <CardTitle>Student Applications</CardTitle>
            <CardDescription>
              Manage and review student/parent registration submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            {students.length === 0 ? (
              <div className="text-center py-8 text-foreground/70">
                No student applications yet
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Grade & Exam</TableHead>
                      <TableHead>Challenges</TableHead>
                      <TableHead>Registered</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium">{student.name}</TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1 text-sm">
                            <span className="flex items-center">
                              <Mail className="mr-1 h-3 w-3" />
                              {student.email}
                            </span>
                            {student.phone && (
                              <span className="flex items-center text-foreground/70">
                                <Phone className="mr-1 h-3 w-3" />
                                {student.phone}
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="flex items-center">
                            <MapPin className="mr-1 h-4 w-4 text-foreground/70" />
                            {student.city}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1 text-sm">
                            <Badge variant="secondary">{student.grade}</Badge>
                            {student.exam_date && (
                              <span className="text-foreground/70">
                                Exam: {student.exam_date}
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <p className="text-sm text-foreground/70 line-clamp-2">
                            {student.challenges}
                          </p>
                        </TableCell>
                        <TableCell>
                          <span className="flex items-center text-sm text-foreground/70">
                            <Calendar className="mr-1 h-3 w-3" />
                            {formatDate(student.created_at)}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
