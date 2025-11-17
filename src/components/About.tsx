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
                  Sistemas de Telecomunicación con mención en Tecnologías de la Información 
                  en la Universidad Autónoma de Barcelona. Mi formación combina conocimientos 
                  avanzados en desarrollo de software, sistemas de comunicación y arquitecturas 
                  tecnológicas modernas.
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
                <h3 className="text-xl font-semibold mb-2 text-foreground">Música</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pianista y vocalista desde pequeño, la música es mi mundo de belleza ordenada. 
                  Amante de todo tipo de estilos y compositor de mis propias obras.
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
                <h3 className="text-xl font-semibold mb-2 text-foreground">Deporte</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Practicante de múltiples deportes y disciplinas, tratando de mantener una salud 
                  física y mental con esfuerzo y rigor. De entre mis actividades más comunes están: 
                  gimnasio y calistenia, boxeo y artes marciales, tenis, parkour y acrobacias, 
                  resistencia (running, natación y ciclismo)...
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
