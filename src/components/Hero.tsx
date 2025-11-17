import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Marcel Roig Gil
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 max-w-3xl mx-auto">
            Estudiante de Ingeniería Informática y Sistemas de Telecomunicación
          </p>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Emprendedor • Desarrollador Web • Miembro de Mensa Internacional
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:marcelroiggil@gmail.com"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Contacto
            </a>
            <a
              href="tel:+34608161320"
              className="px-8 py-3 bg-card/20 backdrop-blur-sm text-primary-foreground border-2 border-primary-foreground/30 rounded-lg font-semibold hover:bg-card/30 transition-all duration-300"
            >
              Teléfono
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to content"
        >
          <ArrowDown className="w-8 h-8 text-primary-foreground/70" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
