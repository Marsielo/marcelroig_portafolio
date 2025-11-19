import { GraduationCap, Music2, Dumbbell, Instagram, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
              <div className="flex-shrink-0 overflow-hidden rounded-full w-32 h-32 border-4 border-primary/20">
                <img 
                  src={profilePhoto} 
                  alt="Marcel Roig Gil" 
                  className="w-full h-full object-cover scale-150"
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
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Formación Académica</h3>
                  <p className="text-sm text-muted-foreground">Universidad Autónoma de Barcelona</p>
                </div>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="informatica">
                  <AccordionTrigger className="text-left">
                    <span className="font-medium">Grado en Ingeniería Informática<br />
                    <span className="text-sm text-muted-foreground">(Mención en Tecnologías de la Información)</span></span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 pl-4">
                      <h4 className="font-semibold text-sm text-primary mb-2">Competencias y Habilidades:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Desarrollo de software y aplicaciones web</li>
                        <li>• Arquitectura de sistemas y diseño de soluciones</li>
                        <li>• Bases de datos y gestión de información</li>
                        <li>• Algoritmos y estructuras de datos</li>
                        <li>• Inteligencia artificial y machine learning</li>
                        <li>• Seguridad informática y ciberseguridad</li>
                        <li>• Sistemas operativos y redes de computadores</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="telecomunicacion">
                  <AccordionTrigger className="text-left">
                    <span className="font-medium">Grado en Ingeniería de Sistemas de Telecomunicación</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 pl-4">
                      <h4 className="font-semibold text-sm text-primary mb-2">Competencias y Habilidades:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Sistemas de comunicaciones digitales y analógicas</li>
                        <li>• Redes de telecomunicación y protocolos</li>
                        <li>• Procesamiento digital de señales</li>
                        <li>• Tecnologías inalámbricas y redes móviles</li>
                        <li>• Internet de las cosas (IoT)</li>
                        <li>• Sistemas electrónicos y microcontroladores</li>
                        <li>• Gestión de proyectos tecnológicos</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
