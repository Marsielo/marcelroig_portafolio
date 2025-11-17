import { GraduationCap, MapPin, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Sobre Mí
        </h2>
        <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12 rounded-full" />

        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="shadow-medium hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Formación Académica</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Actualmente cursando 4º año de Ingeniería Informática e Ingeniería de 
                  Sistemas de Telecomunicación con mención en Tecnologías de la Información. 
                  Mi formación combina conocimientos avanzados en desarrollo de software, 
                  sistemas de comunicación y arquitecturas tecnológicas modernas.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Logros Destacados</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Miembro de Mensa Internacional, la sociedad de alto coeficiente intelectual 
                  más antigua y grande del mundo. Esta membresía refleja mi pasión por el 
                  pensamiento crítico, la resolución de problemas complejos y el aprendizaje continuo.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-lg">
                <MapPin className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Ubicación</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Palau-solità i Plegamans, Barcelona, España
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
