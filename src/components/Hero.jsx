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

      <div className="container-responsive text-center relative z-10 pt-20 sm:pt-0">
        <div className="fade-in-up">
          {/* Profile Photo */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 md:mb-8 group fade-in-up">
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-60 blur-lg group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background/80 shadow-2xl z-10 bg-muted/10 flex items-center justify-center floating">
              {/* Fallback initials */}
              <span className="text-4xl md:text-5xl font-bold text-primary absolute z-0">JE</span>
              
              <img 
                src="/profile.jpg" 
                alt="Jothisankar E" 
                className={`w-full h-full object-cover object-top relative z-10 transition-all duration-700 group-hover:scale-110 ${typedText ? 'opacity-100' : 'opacity-0'}`}
                onLoad={(e) => {
                  e.currentTarget.classList.add('opacity-100');
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(var(--primary),0.2)] tracking-tight">
            JOTHISANKAR E
          </h1>

          {/* Typing Effect */}
          <div className="text-lg md:text-2xl text-muted-foreground mb-6 h-8 font-medium flex items-center justify-center">
            <span className="typing border-r-2 border-primary pr-1">{typedText}</span>
          </div>

          {/* Tagline */}
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Looking for a challenging role in a reputable organization to utilize
            my technical, database, and management skills for organizational
            growth while enhancing my knowledge about new and emerging trends in
            the IT sector.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 mb-8 px-4">
            {/* Resume Button */}
            <div className="w-full sm:w-auto">
              <a
                href="https://drive.google.com/file/d/1lnEd-6ugmCHfoeGdDGAtlvDl3aswi4HN/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="block">
                
                <Button
                  size="lg"
                  className="glow-hover w-full sm:w-auto px-6 py-5 sm:py-3 rounded-xl shadow-lg shadow-primary/30 hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
                  
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="glow-hover w-full sm:w-auto px-4 py-5 sm:py-3 rounded-xl shadow-md hover:shadow-primary/40 hover:scale-105 transition-transform duration-300 text-xs sm:text-sm">
                
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                jothisankar979@gmail.com
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glow-hover w-full sm:w-auto px-4 py-5 sm:py-3 rounded-xl shadow-md hover:shadow-primary/40 hover:scale-105 transition-transform duration-300 text-xs sm:text-sm">
                
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                +91 9994634216
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default Hero;