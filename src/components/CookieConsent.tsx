import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    localStorage.setItem("cookie-consent-timestamp", new Date().toISOString());
    setShowBanner(false);
    
    // Initialize analytics if needed
    if ((window as any).analytics) {
      (window as any).analytics.track("cookie_consent_accepted");
    }
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    localStorage.setItem("cookie-consent-timestamp", new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in-up">
      <div className="container mx-auto px-4 pb-4 sm:pb-6">
        <div className="gradient-card rounded-2xl p-4 sm:p-6 border border-primary/20 shadow-custom-lg max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shadow-custom-sm flex-shrink-0">
              <Cookie className="h-5 w-5 text-white" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Cookie Preferences
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                We use cookies for analytics and to improve FunJI. By clicking "Accept", you consent to our use of cookies. You can manage your preferences anytime in our{" "}
                <Link to="/privacy" className="text-primary hover:underline font-medium">
                  Privacy Policy
                </Link>
                .
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={handleAccept}
                  size="sm"
                  className="shadow-custom-sm"
                >
                  Accept All
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  size="sm"
                >
                  Decline Optional
                </Button>
                <Link to="/privacy">
                  <Button variant="ghost" size="sm">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <button
              onClick={handleDecline}
              className="flex-shrink-0 text-foreground/60 hover:text-foreground transition-smooth"
              aria-label="Close banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;