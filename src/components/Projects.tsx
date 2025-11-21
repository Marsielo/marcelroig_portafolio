import { useLanguage } from "@/contexts/LanguageContext";
import enerseaLogo from "@/assets/enersea-logo.png";
import blackboxLogo from "@/assets/blackbox-logo.png";
import parkourLogo from "@/assets/parkour-logo.png";

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      name: t('projects.enersea.name'),
      description: t('projects.enersea.desc'),
      url: "https://enerseafoods.com/",
      image: enerseaLogo,
    },
    {
      name: t('projects.blackbox.name'),
      description: t('projects.blackbox.desc'),
      url: "https://blackboxinformatica.es/",
      image: blackboxLogo,
    },
    {
      name: t('projects.parkour.name'),
      description: t('projects.parkour.desc'),
      url: "https://www.instagram.com/parkourpalau/",
      image: parkourLogo,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          {t('projects.title')}
        </h2>
        <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12 rounded-full" />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-lg border bg-card shadow-medium hover:shadow-glow transition-all duration-500"
            >
              <div className="relative overflow-hidden flex items-center justify-center p-8 bg-gradient-to-br from-muted to-muted/50">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-background/80 flex items-center justify-center p-6 shadow-lg">
                  <img
                    src={project.image}
                    alt={`Logo de ${project.name}`}
                    className={`w-full h-full object-contain transition-all duration-700 group-hover:rotate-[360deg] ${
                      index === 1 || index === 2 ? 'scale-150' : ''
                    }`}
                  />
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">{project.name}</h3>
                  <p className="text-xs font-semibold text-primary tracking-wider mt-1">{t('projects.founder')}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
