import { Mail, Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
    contact: [
      { label: "Contact Us", href: "mailto:hello@funji.com" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "mailto:hello@funji.com", label: "Email" },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3>
              FunJI
            </h3>
            <p className="text-foreground/70 mb-4 max-w-md">
              AI-powered teaching copilot and academy that closes math knowledge
              gaps fast. Human expertise + AI precision.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-smooth"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-foreground/70 hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-foreground/60 text-sm">
            © {currentYear} FunJI. Educational support, not a school. Tutors are independent.
          </p>
          <p className="text-foreground/60 text-sm">
            Built with ❤️ for teachers and students worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
