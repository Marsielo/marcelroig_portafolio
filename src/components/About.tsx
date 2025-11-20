import { Laptop, Signal, Music2, Dumbbell, Instagram, Linkedin, Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
          <Card className="shadow-medium hover:shadow-glow transition-all duration-300 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl" />
                  <div className="relative overflow-hidden rounded-full w-40 h-40 border-4 border-primary/30 shadow-lg">
                    <img 
                      src={profilePhoto} 
                      alt="Marcel Roig Gil" 
                      className="w-full h-full object-cover scale-150"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2 text-foreground">Marcel Roig Gil</h3>
                    <p className="text-base text-muted-foreground">21 años</p>
                  </div>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <a
                      href="https://www.instagram.com/marseelroig/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                    >
                      <Instagram className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-foreground">Instagram</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/marcel-roig-gil-490b51315"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-lg hover:bg-accent/20 hover:border-accent/30 transition-all duration-300 hover:scale-105"
                    >
                      <Linkedin className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-foreground">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Formation Card */}
          <Card className="shadow-medium hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-2 text-foreground">Formación Académica</h3>
              <p className="text-sm text-muted-foreground mb-8">Universidad Autónoma de Barcelona</p>
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Grado en Ingeniería Informática */}
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-primary rounded-lg flex-shrink-0">
                      <Laptop className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">Grado en Ingeniería Informática</h4>
                      <p className="text-sm text-muted-foreground">Mención en Tecnologías de la Información</p>
                    </div>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="informatica-skills" className="border-none">
                      <AccordionTrigger className="text-sm font-medium hover:no-underline py-3 px-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                        Competencias y habilidades
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 space-y-4">
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">Lenguajes de desarrollo de software</h5>
                          <p className="text-sm text-muted-foreground">Python, C++, Java, lenguajes web (HTML/JavaScript/CSS)...</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">Arquitectura de sistemas</h5>
                          <p className="text-sm text-muted-foreground">Diseño de soluciones escalables y mantenibles, especialidad en TI</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">Bases de datos</h5>
                          <p className="text-sm text-muted-foreground">Implementación y gestión de bases de datos relacionales y no relacionales (SQL)</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">Web, redes sociales y empresa</h5>
                          <p className="text-sm text-muted-foreground">Experiencia en la digitalización y el marketing empresarial</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                
                {/* Grado en Ingeniería de Sistemas de Telecomunicación */}
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-accent rounded-lg flex-shrink-0">
                      <Signal className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">Grado en Ingeniería de Sistemas de Telecomunicación</h4>
                    </div>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="telecos-skills" className="border-none">
                      <AccordionTrigger className="text-sm font-medium hover:no-underline py-3 px-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                        Competencias y habilidades
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 space-y-4">
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">Circuitos eléctricos y Computadores</h5>
                          <p className="text-sm text-muted-foreground">Diseño de circuitos, ensamblaje, puertas lógicas y arquitectura del computador (microprocesador)</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">Redes avanzadas</h5>
                          <p className="text-sm text-muted-foreground">Protocolos TCP/IP y OSI, tráfico (Wireshark) y servicios de red (DNS, DHCP...)</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">Señales y sistemas</h5>
                          <p className="text-sm text-muted-foreground">Análisis de señales en dominio temporal y frecuencial (Octave, MATLAB)</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">Ondas y radiación</h5>
                          <p className="text-sm text-muted-foreground">Electromagnetismo, óptica, radio y antenas</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Music Card */}
          <Card className="shadow-medium hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Music2 className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Música</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pianista y vocalista desde pequeño, la música es mi mundo de belleza ordenada. 
                  Amante de todo tipo de estilos y compositor de mis propias obras.
                </p>
                <a
                  href="https://www.youtube.com/@seasky13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                >
                  <Youtube className="w-5 h-5" />
                  <span>Canal de YouTube: SeaSky</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Sports Card */}
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
