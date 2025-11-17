import enerseaPreview from "@/assets/enersea-preview.png";
import blackboxPreview from "@/assets/blackbox-preview.png";

const projects = [
  {
    name: "EnerSea Foods",
    description: "Empresa de alimentación saludable dedicada a ofrecer productos nutritivos y sostenibles. Especializada en alimentos marinos y opciones saludables para un estilo de vida equilibrado.",
    url: "https://enerseafoods.com/",
    image: enerseaPreview,
  },
  {
    name: "Black Box Informática",
    description: "Negocio de desarrollo web especializado en crear soluciones digitales para pequeñas y grandes empresas. Desde sitios web corporativos hasta aplicaciones web complejas y sistemas personalizados.",
    url: "https://blackboxinformatica.es/",
    image: blackboxPreview,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Proyectos y Empresas
        </h2>
        <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12 rounded-full" />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-lg border bg-card shadow-medium hover:shadow-glow transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={`Preview de ${project.name}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-semibold text-foreground">{project.name}</h3>
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
