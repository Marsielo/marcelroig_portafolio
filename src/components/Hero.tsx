import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white dark:text-white">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90 dark:text-white/90 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg md:text-xl mb-2 text-white/80 dark:text-white/80 max-w-3xl mx-auto">
            {t('hero.tagline')}
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <button
              onClick={() => scrollToSection("about")}
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              {t('hero.cta.about')}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-card/20 backdrop-blur-sm text-white dark:text-white border-2 border-white/30 dark:border-white/30 rounded-lg font-semibold hover:bg-card/30 transition-all duration-300"
            >
              {t('hero.cta.contact')}
            </button>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="mt-12 animate-bounce"
            aria-label="Scroll to content"
          >
            <ArrowDown className="w-8 h-8 text-white/70 dark:text-white/70" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
