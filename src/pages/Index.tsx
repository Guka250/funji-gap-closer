import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import ValueProps from "@/components/ValueProps";
import EarlyBirdBanner from "@/components/EarlyBirdBanner";
import RegistrationForms from "@/components/RegistrationForms";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Initialize analytics (placeholder implementation)
    window.analytics = window.analytics || {
      track: (event: string, properties?: Record<string, unknown>) => {
        console.log("Analytics Event:", event, properties);
      },
    };

    // Track page view
    window.analytics.track("page_view", { page: "landing_funji" });
  }, []);

  return (
    <>
      <Helmet>
        <title>FunJI — AI Teaching Copilot & Academy (Pre-Launch)</title>
        <meta
          name="description"
          content="Join the early list for FunJI — AI-powered diagnostics, lesson plans, and weekly progress to close math gaps."
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <ProblemSolution />
          <HowItWorks />
          <ValueProps />
          <EarlyBirdBanner />
          <RegistrationForms />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
