import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "The diagnostic feature is a game-changer. I can finally see exactly where each student struggles and tailor my lessons accordingly.",
      author: "Sarah M.",
      role: "Math Teacher, 12 years experience",
      rating: 5,
    },
    {
      quote:
        "My daughter went from failing algebra to actually enjoying math. The weekly progress reports help me understand what she's learning.",
      author: "James L.",
      role: "Parent of 10th grader",
      rating: 5,
    },
    {
      quote:
        "Lesson prep used to take hours. Now with FunJI's AI assistant, I have more time to focus on actually teaching and connecting with students.",
      author: "Dr. Priya K.",
      role: "Former IMO medalist, now tutor",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What early testers{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              are saying
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real feedback from teachers and parents in our beta program
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-custom-md border border-border hover:shadow-custom-lg transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="h-10 w-10 text-primary/30 mb-4" />

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 text-sm text-foreground/60">
          <p>
            * Testimonials are from beta testers and early pilot participants
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
