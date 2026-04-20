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
    <header className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 w-auto overflow-x-auto no-scrollbar max-w-[90vw]">
      <div className="flex items-center justify-end gap-2 p-1.5 sm:p-2">
        {/* Navigation Buttons */}
        <nav className="flex items-center gap-2 sm:gap-3">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-3 h-8 sm:h-9 sm:px-4 bg-background/60 backdrop-blur-xl border border-primary/10 text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 hover:scale-105 transition-all duration-300 shadow-lg font-medium flex items-center">
                
                <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5" />
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
          className="rounded-full w-8 h-8 sm:w-9 sm:h-9 bg-background/60 backdrop-blur-xl border border-primary/10 hover:bg-primary/10 hover:border-primary/30 hover:scale-105 transition-all duration-300 shadow-lg flex-shrink-0 flex items-center justify-center">
          
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