import { GraduationCap, Music2, Dumbbell, Instagram, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Sobre Mí
        </h2>
        <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12 rounded-full" />

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Profile Card */}
          <Card className="shadow-medium hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={profilePhoto} 
                  alt="Marcel Roig Gil" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Marcel Roig Gil</h3>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a
                    href="https://www.instagram.com/marseelroig/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/marcel-roig-gil-490b51315"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

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
                <Music2 className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Música</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Pianista y vocalista desde pequeño, la música es mi mundo de belleza ordenada. 
                  Amante de todo tipo de estilos y compositor de mis propias obras.
                </p>
                <a
                  href="https://www.youtube.com/@seasky13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  🎵 Canal de YouTube: SeaSky
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-lg">
                <Dumbbell className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Deporte</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Practicante de múltiples deportes y disciplinas, tratando de mantener una salud 
                  física y mental con esfuerzo y rigor. De entre mis actividades más comunes están: 
                  gimnasio y calistenia, boxeo y artes marciales, tenis, parkour y acrobacias, 
                  resistencia (running, natación y ciclismo)...
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Fundador de la Asociación sin ánimo de lucro{" "}
                  <a
                    href="https://www.instagram.com/parkourpalau/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    "PARKOUR PALAU"
                  </a>
                  , dedicada a promover la filosofía saludable del arte del movimiento en jóvenes.
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
