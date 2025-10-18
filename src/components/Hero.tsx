import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  const scrollToRegister = (type: "teacher" | "student") => {
    const element = document.getElementById(`register-${type}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    // Analytics tracking
    if (window.analytics) {
      window.analytics.track(
        type === "teacher" ? "cta_click_teacher" : "cta_click_student"
      );
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pb-32 gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight pt-6">
            Close math gaps faster with an{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              AI teaching copilot
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            FunJI blends real teachers with AI diagnostics and visual
            explanations so every lesson hits what matters.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button
              onClick={() => scrollToRegister("teacher")}
              size="lg"
              className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-custom-lg hover:shadow-glow transition-smooth group"
            >
              I'm a Teacher — Join the Early List
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToRegister("student")}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-5 md:py-6 border-2 border-primary/20 hover:border-primary hover:bg-accent transition-smooth group"
            >
              I'm a Student/Parent — Join the Early List
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Badges Row */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base text-foreground/60">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Early-bird discounts</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span>Limited free-trial spots</span>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowRight className="h-5 w-5 text-primary" />
              <span>Pilot launching soon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
