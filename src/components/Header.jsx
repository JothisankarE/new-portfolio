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
    <header className="fixed top-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 z-50 w-[95%] sm:w-auto overflow-hidden">
      <div className="flex items-center justify-center sm:justify-end gap-1 sm:gap-3 p-1 sm:p-2 bg-background/60 backdrop-blur-xl border border-primary/10 rounded-full shadow-lg">
        {/* Navigation Buttons */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-2 sm:px-4 h-8 sm:h-9 bg-transparent text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 font-medium flex items-center">
                
                <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline text-xs">{item.label}</span>
                <span className="sm:hidden text-[10px]">{item.label}</span>
              </Button>
            );
          })}
        </nav>
        
        {/* Theme Toggle */}
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full w-8 h-8 sm:w-9 sm:h-9 bg-transparent border-transparent hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 flex-shrink-0 flex items-center justify-center">
          
          {isDark ?
            <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" /> :
            <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
          }
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );

};

export default Header;