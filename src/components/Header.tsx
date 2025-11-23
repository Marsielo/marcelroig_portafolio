import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`rounded-full transition-colors duration-300 ${
                  !isScrolled ? 'text-white hover:text-white/80' : ''
                }`}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <nav className="flex flex-col gap-4 mt-8">
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                >
                  {t('nav.inicio')}
                </button>
                <button
                  onClick={() => {
                    scrollToSection('about');
                    setIsOpen(false);
                  }}
                  className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                >
                  {t('nav.about')}
                </button>
                <button
                  onClick={() => {
                    scrollToSection('projects');
                    setIsOpen(false);
                  }}
                  className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                >
                  {t('nav.projects')}
                </button>
                <button
                  onClick={() => {
                    scrollToSection('achievements');
                    setIsOpen(false);
                  }}
                  className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                >
                  {t('nav.achievements')}
                </button>
                <button
                  onClick={() => {
                    scrollToSection('contact');
                    setIsOpen(false);
                  }}
                  className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                >
                  {t('nav.contact')}
                </button>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop Navigation Links - Centered */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`transition-colors font-medium ${
                !isScrolled ? 'text-white hover:text-white/80' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t('nav.inicio')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors font-medium ${
                !isScrolled ? 'text-white hover:text-white/80' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`transition-colors font-medium ${
                !isScrolled ? 'text-white hover:text-white/80' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t('nav.projects')}
            </button>
            <button
              onClick={() => scrollToSection('achievements')}
              className={`transition-colors font-medium ${
                !isScrolled ? 'text-white hover:text-white/80' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t('nav.achievements')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors font-medium ${
                !isScrolled ? 'text-white hover:text-white/80' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`rounded-full transition-colors duration-300 ${
                !isScrolled ? 'text-white hover:text-white/80 hover:bg-white/10' : 'hover:bg-accent'
              }`}
            >
              <Moon className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
              <Sun className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  language === 'es'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
