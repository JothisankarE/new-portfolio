import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/JothisankarE",
    color: "hover:text-foreground"
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://www.linkedin.com/in/jothi-sankar-8a272b359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    color: "hover:text-blue-400"
  },
  {
    name: "Gmail",
    icon: <Mail className="h-5 w-5" />,
    href: "mailto:jothisankar979@gmail.com",
    color: "hover:text-red-400"
  }];


  return (
    <footer id="contact" className="section-padding border-t border-primary/20 bg-card/30 backdrop-blur-sm">
      <div className="container-responsive">
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((link, index) =>
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={`glow-hover bg-card/50 backdrop-blur-sm border-primary/20 text-muted-foreground ${link.color} transition-colors`}
            asChild>
            
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                {link.icon}
              </a>
            </Button>
          )}
        </div>

        {/* Contact Info */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">Let's Connect</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:jothisankar979@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors">
              
              jothisankar979@gmail.com
            </a>
            <span className="hidden sm:block text-muted-foreground">•</span>
            <span className="text-muted-foreground">+919994634216</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-primary/10">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
           © 2026 Jothisankar E – Code. Design.Inspire.
          </p>
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -bottom-1/2 -right-1/2 w-96 h-96 bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-t from-accent/5 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>
    </footer>);

};

export default Footer;