import { Button } from "@/components/ui/button";
import { Moon, Sun, Home, User, Briefcase, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail }];


  return (
    <header className="fixed top-0 right-0 z-50 p-6">
      <div className="flex items-center gap-2">
        {/* Navigation Buttons */}
        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="glow-hover bg-card/80 backdrop-blur-sm border-primary/20 text-foreground hover:text-primary transition-colors">
                
                <IconComponent className="h-4 w-4 mr-1" />
                {item.label}
              </Button>);

          })}
        </nav>
        
        {/* Theme Toggle */}
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="glow-hover bg-card/80 backdrop-blur-sm border-primary/20">
          
          {isDark ?
          <Sun className="h-[1.2rem] w-[1.2rem] text-primary" /> :

          <Moon className="h-[1.2rem] w-[1.2rem] text-primary" />
          }
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>);

};

export default Header;