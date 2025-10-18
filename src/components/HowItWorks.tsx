import { Search, BookOpen, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Diagnose",
      description: "Short quiz finds real gaps in 10 minutes",
      detail:
        "AI-powered assessment identifies specific knowledge gaps and learning patterns",
    },
    {
      icon: BookOpen,
      number: "02",
      title: "Teach",
      description: "AI-assisted lesson with visual tools",
      detail:
        "Smart board with LaTeX, GeoGebra integration, and 1-click lesson plans",
    },
    {
      icon: TrendingUp,
      number: "03",
      title: "Prove Progress",
      description: "Weekly report with skills mastered",
      detail:
        "Transparent feedback showing exactly what students learned and next steps",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Three simple steps to{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              close gaps
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            From diagnosis to measurable progress in minutes, not months
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connector Line (hidden on mobile, shown between cards on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-12 lg:w-24 h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}

              <div className="relative bg-card rounded-2xl p-6 md:p-8 shadow-custom-md hover:shadow-custom-lg transition-smooth border border-border group-hover:border-primary/30 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-custom-md">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 shadow-custom-sm group-hover:shadow-glow transition-smooth">
                  <step.icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg font-medium text-foreground/80 mb-3">
                  {step.description}
                </p>
                <p className="text-sm text-foreground/60">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
