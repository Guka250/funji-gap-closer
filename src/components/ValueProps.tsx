import { GraduationCap, Users, Clock, FileText, Target, BarChart } from "lucide-react";

const ValueProps = () => {
  const teacherBenefits = [
    {
      icon: Clock,
      title: "1-click lesson plans",
      description: "Auto-generated materials save hours of prep time",
    },
    {
      icon: FileText,
      title: "Auto notes & summaries",
      description: "AI captures key points and generates student reports",
    },
    {
      icon: Users,
      title: "New students delivered",
      description: "FunJI connects you with students who need your expertise",
    },
  ];

  const studentBenefits = [
    {
      icon: Target,
      title: "Personal roadmap",
      description: "Clear path showing exactly what to learn next",
    },
    {
      icon: BarChart,
      title: "Weekly feedback",
      description: "Transparent progress reports for students and parents",
    },
    {
      icon: GraduationCap,
      title: "Visuals that click",
      description: "LaTeX equations and GeoGebra graphs make concepts clear",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* For Teachers Card */}
          <div
            id="for-teachers"
            className="gradient-card rounded-2xl p-8 md:p-10 border border-primary/10 shadow-custom-lg animate-fade-in"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-custom-md">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-primary">
                  For Teachers
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Teach more, prep less
                </h3>
              </div>
            </div>

            <p className="text-foreground/70 mb-8 text-lg">
              Focus on what matters — teaching. Let AI handle the busywork.
            </p>

            <div className="space-y-4">
              {teacherBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-background/50 border border-border/50 transition-smooth hover:bg-background hover:shadow-custom-sm"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-foreground/70">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Students/Parents Card */}
          <div
            id="for-students"
            className="gradient-card rounded-2xl p-8 md:p-10 border border-primary/10 shadow-custom-lg animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-custom-md">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-primary">
                  For Students/Parents
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Clarity and confidence
                </h3>
              </div>
            </div>

            <p className="text-foreground/70 mb-8 text-lg">
              See exactly what's being learned and celebrate every milestone.
            </p>

            <div className="space-y-4">
              {studentBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-background/50 border border-border/50 transition-smooth hover:bg-background hover:shadow-custom-sm"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-foreground/70">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
