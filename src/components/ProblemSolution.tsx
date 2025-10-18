import { AlertCircle, Check, Sparkles, Zap, LineChart } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Hidden knowledge gaps",
      description: "Students fall behind without clear diagnosis of what they don't understand",
    },
    {
      icon: Zap,
      title: "Teacher prep overload",
      description: "Hours spent creating lesson plans for diverse student needs",
    },
    {
      icon: LineChart,
      title: "Slow, opaque feedback",
      description: "Weeks pass before parents see meaningful progress reports",
    },
  ];

  const solutions = [
    {
      icon: Sparkles,
      title: "10-minute diagnostics",
      description: "Pinpoint exact knowledge gaps with AI-powered assessments",
    },
    {
      icon: Check,
      title: "1-click lesson plans",
      description: "Auto-generated materials with LaTeX, GeoGebra, and visual tools",
    },
    {
      icon: LineChart,
      title: "Weekly progress reports",
      description: "Transparent feedback showing skills mastered and next steps",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Side */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Math education is{" "}
              <span className="text-destructive">failing students</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              50% of students score below 25% on national math exams. Teachers
              are overwhelmed, and families lack transparency.
            </p>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-secondary/50 border border-border transition-smooth hover:shadow-custom-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <problem.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-foreground/70">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Side */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              AI + human expertise ={" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                measurable progress
              </span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              FunJI empowers teachers with AI tools and gives families weekly,
              transparent updates on real learning outcomes.
            </p>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl gradient-card border border-primary/10 transition-smooth hover:shadow-custom-md hover:border-primary/30"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shadow-custom-sm">
                    <solution.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-foreground/70">
                      {solution.description}
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

export default ProblemSolution;
