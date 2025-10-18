import { Sparkles, Gift, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const EarlyBirdBanner = () => {
  const scrollToRegister = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-16 gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <Sparkles className="h-5 w-5 text-white" />
            <span className="text-white font-semibold">Limited Time Offer</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pre-launch incentives for early applicants
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Apply now for <strong>discounted first bundles</strong> or a{" "}
            <strong>free trial week</strong>. Limited spots available — secure
            your place in the pilot program.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={scrollToRegister}
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-base md:text-lg px-8 py-6 shadow-custom-lg hover:shadow-xl transition-smooth group"
            >
              Claim Your Early Access
              <Gift className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span className="text-sm md:text-base">Priority access</span>
            </div>
            <div className="flex items-center space-x-2">
              <Gift className="h-5 w-5" />
              <span className="text-sm md:text-base">Exclusive discounts</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm md:text-base">Free trial week</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyBirdBanner;
