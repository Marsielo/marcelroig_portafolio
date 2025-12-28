import { Laptop, Signal, Music2, Dumbbell, Instagram, Linkedin, Youtube, Download, Languages, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          {t('about.title')}
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
                      alt={t('about.name')}
                      className="w-full h-full object-cover scale-150"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2 text-foreground">{t('about.name')}</h3>
                    <p className="text-base text-muted-foreground">{t('about.age')}</p>
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
                    <a
                      href="/CV_MarcelRoig.pdf"
                      download="CV_MarcelRoig.pdf"
                      className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/60 dark:border-primary rounded-lg hover:bg-primary/20 hover:border-primary/80 dark:hover:border-primary/80 transition-all duration-300 hover:scale-105"
                    >
                      <Download className="w-5 h-5 text-primary dark:text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-foreground">{t('about.download.cv')}</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <p className="text-muted-foreground leading-relaxed text-center md:text-left">
                  {t('about.intro')}
                </p>
                <p className="text-muted-foreground leading-relaxed text-center md:text-left italic">
                  {t('about.quote')}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Academic Formation Card */}
          <Card className="shadow-medium hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-2 text-foreground">{t('about.formation.title')}</h3>
              <p className="text-sm text-muted-foreground mb-8">{t('about.formation.university')}</p>
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Grado en Ingeniería Informática */}
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-6">
                    <div className="p-3 bg-primary rounded-lg flex-shrink-0">
                      <Laptop className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{t('about.formation.cs')}</h4>
                      <p className="text-sm text-muted-foreground">{t('about.formation.cs.subtitle')}</p>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="informatica-skills" className="border-none">
                      <AccordionTrigger className="text-sm font-medium hover:no-underline py-3 px-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                        {t('about.formation.skills')}
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 space-y-4">
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">{t('about.formation.cs.skill1.title')}</h5>
                          <p className="text-sm text-muted-foreground">{t('about.formation.cs.skill1.desc')}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">{t('about.formation.cs.skill2.title')}</h5>
                          <p className="text-sm text-muted-foreground">{t('about.formation.cs.skill2.desc')}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">{t('about.formation.cs.skill3.title')}</h5>
                          <p className="text-sm text-muted-foreground">{t('about.formation.cs.skill3.desc')}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">{t('about.formation.cs.skill4.title')}</h5>
                          <p className="text-sm text-muted-foreground">{t('about.formation.cs.skill4.desc')}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                  </div>
                </div>
                
                {/* Grado en Ingeniería de Sistemas de Telecomunicación */}
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-6">
                    <div className="p-3 bg-accent rounded-lg flex-shrink-0">
                      <Signal className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{t('about.formation.telecom')}</h4>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="telecos-skills" className="border-none">
                      <AccordionTrigger className="text-sm font-medium hover:no-underline py-3 px-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                        {t('about.formation.skills')}
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 space-y-4">
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">{t('about.formation.telecom.skill1.title')}</h5>
                          <p className="text-sm text-muted-foreground">{t('about.formation.telecom.skill1.desc')}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">{t('about.formation.telecom.skill2.title')}</h5>
                          <p className="text-sm text-muted-foreground">{t('about.formation.telecom.skill2.desc')}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">{t('about.formation.telecom.skill3.title')}</h5>
                          <p className="text-sm text-muted-foreground">{t('about.formation.telecom.skill3.desc')}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">{t('about.formation.telecom.skill4.title')}</h5>
                          <p className="text-sm text-muted-foreground">{t('about.formation.telecom.skill4.desc')}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                  </div>
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
                <h3 className="text-xl font-semibold mb-2 text-foreground">{t('about.music.title')}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('about.music.desc')}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('about.music.desc2.before')}
                  <a
                    href="https://www.youtube.com/@seasky13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    SeaSky
                  </a>
                  {t('about.music.desc2.after')}
                </p>
                <a
                  href="https://www.youtube.com/@seasky13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2.5 bg-muted/50 hover:bg-muted border border-border rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                >
                  <Youtube className="w-5 h-5 text-red-600" />
                  <span className="text-foreground">{t('about.music.youtube')}</span>
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
                <h3 className="text-xl font-semibold mb-2 text-foreground">{t('about.sports.title')}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('about.sports.desc1')}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('about.sports.desc2')}{" "}
                  <a
                    href="https://www.parkourpalau.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    {t('about.sports.parkour')}
                  </a>
                  {t('about.sports.desc3')}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.instagram.com/parkourpalau/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-4 py-2.5 bg-muted/50 hover:bg-muted border border-border rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                  >
                    <Instagram className="w-5 h-5 text-pink-600" />
                    <span className="text-foreground">{t('about.sports.instagram')}</span>
                  </a>
                  <a
                    href="https://www.parkourpalau.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-4 py-2.5 bg-muted/50 hover:bg-muted border border-border rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                  >
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{t('about.sports.website')}</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Others Card */}
          <Card className="shadow-medium hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Languages className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mt-2">{t('about.others.title')}</h3>
              </div>
              
              <div className="space-y-8">
                {/* Languages Subsection */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">{t('about.others.languages.title')}</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 px-4 bg-muted/30 rounded-lg">
                      <span className="font-medium text-foreground">{t('about.others.languages.spanish')}</span>
                      <span className="text-sm text-muted-foreground font-medium">{t('about.others.languages.native')}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 px-4 bg-muted/30 rounded-lg">
                      <span className="font-medium text-foreground">{t('about.others.languages.catalan')}</span>
                      <span className="text-sm text-muted-foreground font-medium">{t('about.others.languages.native')}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 px-4 bg-muted/30 rounded-lg">
                      <span className="font-medium text-foreground">{t('about.others.languages.english')}</span>
                      <span className="text-sm text-muted-foreground font-medium">{t('about.others.languages.intermediate')}</span>
                    </div>
                  </div>
                </div>

                {/* Driver's Licenses Subsection */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">{t('about.others.licenses.title')}</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 px-4 bg-muted/30 rounded-lg">
                      <span className="font-medium text-foreground">{t('about.others.licenses.car')}</span>
                      <span className="text-sm text-muted-foreground font-medium">{t('about.others.licenses.carLevel')}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 px-4 bg-muted/30 rounded-lg">
                      <span className="font-medium text-foreground">{t('about.others.licenses.motorcycle')}</span>
                      <span className="text-sm text-muted-foreground font-medium">{t('about.others.licenses.motorcycleLevel')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
