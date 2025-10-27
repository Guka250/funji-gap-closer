import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FileText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - FunJI</title>
        <meta
          name="description"
          content="FunJI Terms of Service - Read our terms for using the AI-powered teaching copilot and academy platform."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-hero">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <div className="gradient-card rounded-2xl p-8 md:p-12 border border-primary/10 shadow-custom-lg">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shadow-custom-sm">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Terms of Service
                </h1>
                <p className="text-foreground/60 mt-1">
                  <strong>Effective Date:</strong> January 1, 2025 | <strong>Version:</strong> 1.0
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <nav className="bg-secondary/50 rounded-lg p-6 mb-8">
                <h2 className="text-lg font-semibold mb-4 text-foreground">Table of Contents</h2>
                <ol className="space-y-2 text-foreground/80">
                  <li><a href="#overview" className="hover:text-primary transition-smooth">1. Overview</a></li>
                  <li><a href="#eligibility" className="hover:text-primary transition-smooth">2. Eligibility & Accounts</a></li>
                  <li><a href="#user-roles" className="hover:text-primary transition-smooth">3. User Roles</a></li>
                  <li><a href="#ai-tools" className="hover:text-primary transition-smooth">4. Use of AI Tools</a></li>
                  <li><a href="#conduct" className="hover:text-primary transition-smooth">5. Content & Conduct</a></li>
                  <li><a href="#payments" className="hover:text-primary transition-smooth">6. Payments & Fees</a></li>
                  <li><a href="#ip-license" className="hover:text-primary transition-smooth">7. Intellectual Property & License</a></li>
                  <li><a href="#disclaimers" className="hover:text-primary transition-smooth">8. Disclaimers & Liability</a></li>
                  <li><a href="#termination" className="hover:text-primary transition-smooth">9. Termination</a></li>
                  <li><a href="#changes" className="hover:text-primary transition-smooth">10. Changes to Terms</a></li>
                  <li><a href="#contact" className="hover:text-primary transition-smooth">11. Contact & Jurisdiction</a></li>
                </ol>
              </nav>

              <section id="overview" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Overview</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Welcome to <strong>FunJI</strong>. FunJI provides a platform and AI-powered tools to facilitate teaching and learning, primarily focused on mathematics education. FunJI is <strong>not a school</strong> and does not directly provide instruction. Tutors on FunJI are <strong>independent contractors</strong>, not employees of FunJI.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  By accessing or using our platform, you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please do not use FunJI.
                </p>
              </section>

              <section id="eligibility" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Eligibility & Accounts</h2>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li><strong>Age Requirements:</strong> You must be at least 13 years old to use FunJI. If you are under 18, you must have parental or guardian consent.</li>
                  <li><strong>Accurate Information:</strong> You agree to provide accurate, current, and complete information during registration and to update such information as necessary.</li>
                  <li><strong>One Account Per User:</strong> Each user may maintain only one account. Creating multiple accounts may result in suspension or termination.</li>
                  <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</li>
                </ul>
              </section>

              <section id="user-roles" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. User Roles</h2>
                <div className="space-y-4">
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Teachers/Tutors (Supply Side)</h3>
                    <p className="text-foreground/80">
                      Teachers provide educational services as independent contractors. Teachers are responsible for lesson quality, content, and compliance with applicable regulations. FunJI provides tools and a platform to facilitate teaching but does not supervise instructional methods.
                    </p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Students/Parents (Demand Side)</h3>
                    <p className="text-foreground/80">
                      Students and parents use FunJI to find tutors, access diagnostic tools, and track learning progress. Parents are responsible for supervising minors' use of the platform and ensuring appropriate consent is obtained.
                    </p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">Schools (Future)</h3>
                    <p className="text-foreground/80">
                      Institutional partnerships may be added in the future with separate terms and agreements.
                    </p>
                  </div>
                </div>
              </section>

              <section id="ai-tools" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Use of AI Tools</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  FunJI employs artificial intelligence to assist with diagnostics, lesson planning, progress tracking, and other educational support features. However:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li><strong>AI is Assistive:</strong> AI suggestions are tools to assist teachers and learners. The teacher remains the instructional lead and is responsible for pedagogical decisions.</li>
                  <li><strong>No Guarantees:</strong> AI-generated content may contain errors or inaccuracies. FunJI does not guarantee specific learning outcomes, exam results, or academic performance.</li>
                  <li><strong>Human Oversight:</strong> Teachers should review and validate AI suggestions before relying on them for instruction.</li>
                  <li><strong>Continuous Improvement:</strong> AI models are continually refined. You acknowledge that AI performance may vary and improve over time.</li>
                </ul>
              </section>

              <section id="conduct" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Content & Conduct</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  You agree to use FunJI responsibly and in compliance with all applicable laws. Prohibited activities include:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li><strong>Academic Dishonesty:</strong> Using FunJI to cheat, plagiarize, or violate academic integrity policies.</li>
                  <li><strong>Harmful Content:</strong> Posting, sharing, or transmitting content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.</li>
                  <li><strong>IP Infringement:</strong> Uploading or sharing materials that infringe upon intellectual property rights of third parties.</li>
                  <li><strong>Disruption:</strong> Attempting to disrupt, hack, or interfere with FunJI's services, security, or other users' experiences.</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  <strong>Session Recording & Whiteboard Capture:</strong> FunJI may record tutoring sessions and capture whiteboard content for quality assurance, dispute resolution, and product improvement. By using FunJI, you consent to such recording and capture. Recordings are stored securely and are accessible only to authorized personnel and the participants of the session.
                </p>
              </section>

              <section id="payments" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Payments & Fees</h2>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li><strong>Commission on Lessons:</strong> FunJI charges a service fee (commission) on tutoring sessions booked through the platform. The commission structure is disclosed at registration and may be updated with notice.</li>
                  <li><strong>Payment Processing:</strong> Payments are processed by third-party payment service providers (e.g., Stripe). FunJI does not store credit card information on its servers.</li>
                  <li><strong>Bundles & Subscriptions:</strong> Users may purchase lesson bundles or subscriptions. Pricing, billing cycles, and renewal terms are disclosed at the time of purchase.</li>
                  <li><strong>Refunds & No-Shows:</strong> Refund policies are provided at the time of booking. In cases of teacher or student no-shows, FunJI's cancellation and refund policy applies. Repeated no-shows may result in account suspension.</li>
                  <li><strong>Payouts to Teachers:</strong> Teachers receive payouts according to the payout schedule disclosed in their teacher agreement. Payouts are subject to verification and compliance with tax and regulatory requirements.</li>
                </ul>
              </section>

              <section id="ip-license" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Intellectual Property & License</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  <strong>Your Content:</strong> You retain ownership of any educational materials, lesson plans, or content you upload to FunJI ("Your Content").
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  <strong>License to FunJI:</strong> By uploading Your Content, you grant FunJI a non-exclusive, worldwide, royalty-free license to:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li>Host, store, reproduce, and display Your Content on the platform.</li>
                  <li>Transform, adapt, or modify Your Content for delivery through FunJI's tools (e.g., AI-enhanced lesson plans).</li>
                  <li>Use Your Content for quality assurance, product improvement, and anonymized analytics.</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  <strong>FunJI's IP:</strong> All platform features, software, branding, and AI models are proprietary to FunJI or its licensors. You may not copy, reverse-engineer, or otherwise misappropriate FunJI's intellectual property.
                </p>
              </section>

              <section id="disclaimers" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Disclaimers & Liability</h2>
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-4">
                  <p className="text-foreground/80 leading-relaxed">
                    <strong>AS-IS BASIS:</strong> FunJI is provided "as-is" and "as available" without warranties of any kind, express or implied. FunJI does not warrant that the platform will be uninterrupted, error-free, or secure.
                  </p>
                </div>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li><strong>Educational Support:</strong> FunJI provides tools and a marketplace for education but is not responsible for the quality, accuracy, or outcomes of tutoring services provided by independent teachers.</li>
                  <li><strong>No Exam Guarantees:</strong> FunJI does not guarantee exam results, grade improvements, or admission to educational programs.</li>
                  <li><strong>Limitation of Liability:</strong> To the maximum extent permitted by law, FunJI's total liability to you for any claim arising from these Terms or your use of the platform shall not exceed the amount you paid to FunJI in the 12 months preceding the claim.</li>
                  <li><strong>Indemnification:</strong> You agree to indemnify and hold FunJI harmless from any claims, damages, or expenses arising from your use of the platform, your violation of these Terms, or your infringement of third-party rights.</li>
                </ul>
              </section>

              <section id="termination" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Termination</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  <strong>Termination by You:</strong> You may terminate your account at any time by contacting support or using the account closure feature in your settings.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  <strong>Termination by FunJI:</strong> FunJI may suspend or terminate your account if you violate these Terms, engage in prohibited conduct, or for other legitimate business reasons. We will provide notice when feasible.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  <strong>Effect of Termination:</strong> Upon termination, your access to FunJI will cease. FunJI may retain certain data as required by law or for legitimate business purposes (see Privacy Policy). Unpaid fees remain due.
                </p>
              </section>

              <section id="changes" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to Terms</h2>
                <p className="text-foreground/80 leading-relaxed">
                  FunJI may update these Terms from time to time. We will notify you of material changes via email or platform notification. Your continued use of FunJI after changes take effect constitutes acceptance of the updated Terms. If you do not agree, you must discontinue use of the platform.
                </p>
              </section>

              <section id="contact" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact & Jurisdiction</h2>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    <strong>Contact Information:</strong><br />
                    FunJI<br />
                    Email: <a href="mailto:contact@funji.app" className="text-primary hover:underline">contact@funji.app</a><br />
                    <span className="text-foreground/60">[[Company Legal Name]]</span><br />
                    <span className="text-foreground/60">[[Address]]</span>
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    <strong>Governing Law:</strong> These Terms are governed by the laws of <span className="text-foreground/60">[[Jurisdiction, e.g., State of Georgia, USA / European Union]]</span>, without regard to conflict of law principles.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mt-4">
                    <strong>Dispute Resolution:</strong> Any disputes arising from these Terms or your use of FunJI shall be resolved through binding arbitration or in the courts of <span className="text-foreground/60">[[Jurisdiction]]</span>, as applicable.
                  </p>
                </div>
              </section>

              <div className="border-t border-border pt-6 mt-8">
                <p className="text-foreground/60 text-sm">
                  © FunJI. Educational support, not a school. Tutors are independent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;