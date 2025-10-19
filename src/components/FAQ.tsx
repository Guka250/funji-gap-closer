import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "When will FunJI launch?",
      answer:
        "We're currently in pre-launch and preparing for our pilot program. Early applicants will be among the first to access the platform, with invitations rolling out in waves over the coming months. Apply now to secure your spot!",
    },
    {
      question: "What are the pricing ranges for teachers and students?",
      answer:
        "Pricing varies based on location, expertise, and student needs. Teachers set their preferred hourly rates, and we help connect them with students. Early applicants receive significant discounts on their first bundles or a free trial week. Final pricing details will be shared during the pilot phase.",
    },
    {
      question: "Which subjects does FunJI support?",
      answer:
        "We're starting with mathematics — from elementary arithmetic through advanced calculus and exam preparation. Math is where knowledge gaps have the biggest impact, and our AI tools (LaTeX, GeoGebra integration) are optimized for mathematical concepts. We plan to expand to other STEM subjects based on user feedback.",
    },
    {
      question: "How do the free trials and early-bird discounts work?",
      answer:
        "Early applicants are eligible for either a free trial week (for students/parents) or discounted first lesson bundles (for teachers). These incentives are limited and awarded on a first-come, first-served basis. By joining the early list, you'll receive priority access and detailed information about these offers before the public launch.",
    },
    {
      question: "How is my data protected?",
      answer:
        "Your privacy and security are our top priorities. We use industry-standard encryption for all data transmission and storage. Student progress data is only shared with authorized teachers and parents. We never sell your information to third parties, and you can request data deletion at any time. Full privacy policy details will be available before the pilot launch.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-foreground/70">
              Everything you need to know about FunJI
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card shadow-custom-sm hover:shadow-custom-md transition-smooth"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary transition-smooth py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-5 pt-2 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
