import { Button } from "@/components/ui/button";
import { Download, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer & UI/UX Enthusiast";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Particle Background */}
      <div className="particles">
        {[...Array(50)].map((_, i) =>
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${Math.random() * 3 + 3}s`
          }} />

        )}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in-up">
          {/* Profile Logo */}
          <div className="hero-glow rounded-full w-32 h-32 mx-auto mb-8 flex items-center justify-center floating shadow-xl shadow-primary/30">
            <span className="text-4xl font-bold text-primary">JE</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-lg">
            JOTHISANKAR E
          </h1>

          {/* Typing Effect */}
          <div className="text-lg md:text-2xl text-muted-foreground mb-4 h-8 font-medium">
            <span className="typing">{typedText}</span>
          </div>

          {/* Tagline */}
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Looking for a challenging role in a reputable organization to utilize
            my technical, database, and management skills for organizational
            growth while enhancing my knowledge about new and emerging trends in
            the IT sector.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-6 mb-8">
            {/* Resume Button */}
            <div className="w-full sm:w-auto">
              <a
                href="https://drive.google.com/file/d/1lnEd-6ugmCHfoeGdDGAtlvDl3aswi4HN/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="block">
                
                <Button
                  size="lg"
                  className="glow-hover w-full sm:w-auto px-6 py-3 rounded-xl shadow-lg shadow-primary/30 hover:scale-105 transition-transform duration-300">
                  
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="glow-hover w-full sm:w-auto px-6 py-3 rounded-xl shadow-md hover:shadow-primary/40 hover:scale-105 transition-transform duration-300">
                
                <Mail className="mr-2 h-5 w-5" />
                jothisankar979@gmail.com
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glow-hover w-full sm:w-auto px-6 py-3 rounded-xl shadow-md hover:shadow-primary/40 hover:scale-105 transition-transform duration-300">
                
                <Phone className="mr-2 h-5 w-5" />
                +91 9994634216
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default Hero;