import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - FunJI</title>
        <meta
          name="description"
          content="FunJI Privacy Policy - Learn how we collect, use, and protect your personal information on our AI-powered teaching platform."
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
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Privacy Policy
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
                  <li><a href="#introduction" className="hover:text-primary transition-smooth">1. Introduction</a></li>
                  <li><a href="#what-we-collect" className="hover:text-primary transition-smooth">2. What We Collect</a></li>
                  <li><a href="#why-we-process" className="hover:text-primary transition-smooth">3. Why We Process Your Data</a></li>
                  <li><a href="#legal-bases" className="hover:text-primary transition-smooth">4. Legal Bases</a></li>
                  <li><a href="#ai-decisions" className="hover:text-primary transition-smooth">5. AI & Automated Decisions</a></li>
                  <li><a href="#minors" className="hover:text-primary transition-smooth">6. Minors & Parental Rights</a></li>
                  <li><a href="#data-sharing" className="hover:text-primary transition-smooth">7. Data Sharing</a></li>
                  <li><a href="#retention" className="hover:text-primary transition-smooth">8. Data Retention</a></li>
                  <li><a href="#security" className="hover:text-primary transition-smooth">9. Security</a></li>
                  <li><a href="#your-rights" className="hover:text-primary transition-smooth">10. Your Rights</a></li>
                  <li><a href="#international" className="hover:text-primary transition-smooth">11. International Transfers</a></li>
                  <li><a href="#cookies" className="hover:text-primary transition-smooth">12. Cookies & Analytics</a></li>
                  <li><a href="#updates" className="hover:text-primary transition-smooth">13. Updates & Contact</a></li>
                </ol>
              </nav>

              <section id="introduction" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Welcome to <strong>FunJI's Privacy Policy</strong>. This policy explains how we collect, use, share, and protect your personal information when you use our AI-powered teaching copilot and academy platform. This policy is written for teachers, students, and parents in clear, accessible language.
                </p>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  FunJI is committed to protecting your privacy and complying with applicable data protection laws, including the General Data Protection Regulation (GDPR) and other regional privacy regulations.
                </p>
              </section>

              <section id="what-we-collect" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. What We Collect</h2>
                <div className="space-y-6">
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Account Data</h3>
                    <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                      <li>Name, email address, phone number (optional)</li>
                      <li>City/location</li>
                      <li>User role (teacher, student, parent)</li>
                      <li>Account creation and last login timestamps</li>
                    </ul>
                  </div>

                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Student Data</h3>
                    <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                      <li>Current grade level and upcoming exam dates</li>
                      <li>Diagnostic test results and learning gap analysis</li>
                      <li>Homework submissions and progress reports</li>
                      <li>Session summaries and whiteboard artifacts</li>
                      <li>Learning challenges and support needs</li>
                    </ul>
                  </div>

                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Teacher Data</h3>
                    <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                      <li>Subjects taught and grade levels</li>
                      <li>Years of teaching experience</li>
                      <li>Availability and preferred hourly rates</li>
                      <li>Uploaded lesson plans and educational materials</li>
                      <li>Performance metrics and student feedback</li>
                    </ul>
                  </div>

                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Usage Data</h3>
                    <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                      <li>Pages visited, features used, and session duration</li>
                      <li>Device type, browser, operating system</li>
                      <li>IP address (for security and analytics)</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>

                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Payment Data</h3>
                    <p className="text-foreground/80">
                      Payment information (credit card, billing address) is collected and processed by our third-party payment processor (e.g., Stripe). FunJI does not store full credit card numbers on its servers. We receive transaction confirmation and limited payment metadata (e.g., last 4 digits, transaction IDs).
                    </p>
                  </div>
                </div>
              </section>

              <section id="why-we-process" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Why We Process Your Data</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li><strong>Provide Core Services:</strong> Deliver diagnostics, AI-generated lesson plans, progress reports, and facilitate connections between students and teachers.</li>
                  <li><strong>Matching & Scheduling:</strong> Match students with appropriate teachers based on subject, grade level, and availability.</li>
                  <li><strong>Payments & Billing:</strong> Process payments, issue invoices, and manage teacher payouts.</li>
                  <li><strong>Product Improvement:</strong> Analyze usage patterns to improve our AI models, user experience, and platform features.</li>
                  <li><strong>Safety & Quality Assurance:</strong> Sample session recordings and content to ensure safety, compliance, and quality standards.</li>
                  <li><strong>Communication:</strong> Send account notifications, lesson reminders, updates, and marketing communications (with consent).</li>
                  <li><strong>Legal Compliance:</strong> Comply with legal obligations, respond to legal requests, and protect our rights.</li>
                </ul>
              </section>

              <section id="legal-bases" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Legal Bases for Processing</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Under data protection law (e.g., GDPR), we rely on the following legal bases:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li><strong>Contract:</strong> Processing necessary to provide FunJI services you've requested (e.g., creating an account, booking lessons).</li>
                  <li><strong>Legitimate Interests:</strong> Processing for fraud prevention, security, product improvement, and analytics, where our interests do not override your rights.</li>
                  <li><strong>Consent:</strong> Processing for marketing communications, analytics cookies, and optional features (you can withdraw consent anytime).</li>
                  <li><strong>Parental Consent:</strong> For minors under 13 (or applicable age in your jurisdiction), we obtain parental/guardian consent before collecting personal data.</li>
                  <li><strong>Legal Obligation:</strong> Processing necessary to comply with laws (e.g., tax reporting, responding to court orders).</li>
                </ul>
              </section>

              <section id="ai-decisions" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. AI & Automated Decisions</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  FunJI uses AI to support educational outcomes. Here's how AI works and your protections:
                </p>
                <div className="space-y-4">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Assistive AI</h3>
                    <p className="text-foreground/80">
                      Our AI provides suggestions for lesson plans, identifies learning gaps (gap vs. slip detection), and generates progress reports. AI recommendations are assistive tools—teachers make final instructional decisions.
                    </p>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Confidence Thresholds</h3>
                    <p className="text-foreground/80">
                      AI outputs include confidence scores. Low-confidence suggestions are flagged for human review. Teachers can always override AI recommendations.
                    </p>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Human-in-the-Loop</h3>
                    <p className="text-foreground/80">
                      No solely automated decisions are made that significantly affect students or teachers. All critical decisions (e.g., teacher assignments, content moderation) involve human oversight.
                    </p>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Right to Contest</h3>
                    <p className="text-foreground/80">
                      You have the right to contest AI-driven recommendations and request human review. Contact us at <a href="mailto:contact@funji.app" className="text-primary hover:underline">contact@funji.app</a>.
                    </p>
                  </div>
                </div>
              </section>

              <section id="minors" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Minors & Parental Rights</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  FunJI is designed to be used by minors under the supervision of parents or guardians. We take special care with children's data:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li><strong>Parental Consent:</strong> For users under 13 (or applicable age), we require verifiable parental consent before collecting personal data.</li>
                  <li><strong>Parental Access:</strong> Parents can access, review, and request deletion of their child's data at any time.</li>
                  <li><strong>Limited Data Collection:</strong> We collect only the minimum data necessary to provide educational services.</li>
                  <li><strong>No Behavioral Advertising:</strong> We do not use student data for targeted advertising.</li>
                  <li><strong>How to Exercise Parental Rights:</strong> Contact us at <a href="mailto:contact@funji.app" className="text-primary hover:underline">contact@funji.app</a> with your child's account information and proof of guardianship.</li>
                </ul>
              </section>

              <section id="data-sharing" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Sharing</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We share your data only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li><strong>Service Providers:</strong> We share data with trusted processors (e.g., payment processors like Stripe, email/SMS providers, analytics services) under strict contractual protections.</li>
                  <li><strong>Teachers & Students:</strong> To facilitate lessons, we share necessary information between matched teachers and students (e.g., names, lesson topics, schedules).</li>
                  <li><strong>Schools (If Applicable):</strong> If you are enrolled through a school partnership, we may share progress reports with the school as agreed in the partnership terms.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose data to comply with laws, court orders, or protect rights and safety.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale, your data may be transferred to the successor entity.</li>
                  <li><strong>No Sale of Personal Data:</strong> We do not sell your personal data to third parties for their marketing purposes.</li>
                </ul>
              </section>

              <section id="retention" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Data Retention</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We retain your data as follows:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li><strong>Account Data:</strong> Retained for the life of your account plus a reasonable period after closure (e.g., to handle disputes or legal obligations).</li>
                  <li><strong>Educational Artifacts:</strong> Student progress reports, diagnostic results, and session recordings are retained for up to 24 months (configurable) after the last activity, then anonymized or deleted.</li>
                  <li><strong>Logs & Analytics:</strong> Usage logs and anonymized analytics data may be retained for shorter periods (e.g., 12 months) for product improvement.</li>
                  <li><strong>Payment Records:</strong> Retained as required by tax and financial regulations (typically 7 years).</li>
                  <li><strong>Deletion Requests:</strong> You can request deletion at any time. We will comply unless retention is required by law.</li>
                </ul>
              </section>

              <section id="security" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Security</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li><strong>Encryption in Transit:</strong> All data transmitted to and from FunJI is encrypted using TLS/SSL.</li>
                  <li><strong>Encryption at Rest:</strong> Sensitive data is encrypted when stored on our servers.</li>
                  <li><strong>Access Controls:</strong> Data access is restricted to authorized personnel on a need-to-know basis using least-privilege principles.</li>
                  <li><strong>Regular Audits:</strong> We conduct security audits and vulnerability assessments to identify and remediate risks.</li>
                  <li><strong>Incident Response:</strong> In the event of a data breach, we will notify affected users and authorities as required by law.</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  While we strive to protect your data, no system is 100% secure. You are responsible for maintaining the confidentiality of your account credentials.
                </p>
              </section>

              <section id="your-rights" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Your Rights</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Under applicable data protection laws, you have the following rights:
                </p>
                <div className="space-y-3">
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-1">Right to Access</h3>
                    <p className="text-foreground/80 text-sm">Request a copy of the personal data we hold about you.</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-1">Right to Rectification</h3>
                    <p className="text-foreground/80 text-sm">Correct inaccurate or incomplete data.</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-1">Right to Erasure ("Right to be Forgotten")</h3>
                    <p className="text-foreground/80 text-sm">Request deletion of your data (subject to legal retention requirements).</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-1">Right to Restrict Processing</h3>
                    <p className="text-foreground/80 text-sm">Limit how we process your data under certain circumstances.</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-1">Right to Data Portability</h3>
                    <p className="text-foreground/80 text-sm">Receive your data in a structured, machine-readable format to transfer to another service.</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-1">Right to Object</h3>
                    <p className="text-foreground/80 text-sm">Object to processing based on legitimate interests or for direct marketing.</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-1">Right to Withdraw Consent</h3>
                    <p className="text-foreground/80 text-sm">Withdraw consent for processing based on consent (e.g., marketing, cookies) at any time.</p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  <strong>How to Exercise Your Rights:</strong> Contact us at <a href="mailto:contact@funji.app" className="text-primary hover:underline">contact@funji.app</a>. We will respond within the time required by law (typically 30 days). You also have the right to lodge a complaint with your local data protection authority.
                </p>
              </section>

              <section id="international" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">11. International Transfers</h2>
                <p className="text-foreground/80 leading-relaxed">
                  FunJI may store and process data in multiple countries. If your data is transferred outside your region (e.g., from the EU to the US), we ensure adequate protection through:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2 mt-4">
                  <li><strong>Standard Contractual Clauses (SCCs):</strong> EU-approved data transfer mechanisms.</li>
                  <li><strong>Adequacy Decisions:</strong> Transfers to countries deemed adequate by the European Commission or equivalent authorities.</li>
                  <li><strong>Other Safeguards:</strong> As approved by applicable data protection laws.</li>
                </ul>
              </section>

              <section id="cookies" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Cookies & Analytics</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  We use cookies and similar technologies to enhance your experience and analyze usage:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for authentication, security, and core functionality.</li>
                  <li><strong>Analytics Cookies:</strong> Track usage patterns to improve FunJI (requires your consent).</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
                </ul>
                <p className="text-foreground/80 leading-relaxed mt-4">
                  <strong>Managing Cookies:</strong> You can manage cookie preferences through our cookie consent banner or your browser settings. Note that disabling essential cookies may affect platform functionality.
                </p>
              </section>

              <section id="updates" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Updates & Contact</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  <strong>Policy Updates:</strong> We may update this Privacy Policy from time to time. We will notify you of material changes via email or platform notification. The "Effective Date" at the top of this policy indicates the last update.
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Contact Us</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:
                  </p>
                  <p className="text-foreground/80 leading-relaxed mt-4">
                    <strong>FunJI Data Protection</strong><br />
                    Email: <a href="mailto:contact@funji.app" className="text-primary hover:underline">contact@funji.app</a><br />
                    <span className="text-foreground/60">[[Company Legal Name]]</span><br />
                    <span className="text-foreground/60">[[Address]]</span>
                  </p>
                </div>
              </section>

              <div className="border-t border-border pt-6 mt-8">
                <p className="text-foreground/60 text-sm">
                  © FunJI. We respect your privacy and are committed to protecting your personal data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;