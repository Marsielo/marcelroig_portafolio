import { useLanguage } from "@/contexts/LanguageContext";
import mensaCard from "@/assets/mensa-card.png";
import conferencePreview from "@/assets/conference-preview.jpg";

const Achievements = () => {
  const { t } = useLanguage();
  
  const achievements = [
    {
      name: t('achievements.mensa.name'),
      subtitle: t('achievements.mensa.subtitle'),
      description: t('achievements.mensa.desc'),
      url: "https://www.mensa.es/qr.php?_GaMhLe-9_thCvVO92BfB-hbwvqBQYtN5mbR3eoXb6z0vLxEsCNDxSXP7y0wqy0cFf-WVBrSmoGRbfGq80X9SXL1s_gOZNkHkCjd_qxyUZdAmkWnJ-O43qhqbUCUYengI-HA-b-AWA4tq-sbk_00ng==",
      image: mensaCard,
    },
    {
      name: t('achievements.conferences.name'),
      subtitle: t('achievements.conferences.subtitle'),
      description: t('achievements.conferences.desc'),
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7387424323676057600/?originTrackingId=aS4OYScx01hiHXDRk602%2Fg%3D%3D",
      image: conferencePreview,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          {t('achievements.title')}
        </h2>
        <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12 rounded-full" />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <a
              key={index}
              href={achievement.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-lg border bg-card shadow-medium hover:shadow-glow transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-video bg-muted flex items-center justify-center">
                <img
                  src={achievement.image}
                  alt={`Preview de ${achievement.name}`}
                  className={`w-full h-full object-contain object-center transition-all duration-500 group-hover:rotate-2 ${
                    index === 1 ? 'scale-150 group-hover:scale-[1.75]' : 'scale-110 group-hover:scale-125'
                  }`}
                />
              </div>
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">{achievement.name}</h3>
                  <p className="text-xs font-semibold text-primary tracking-wider mt-1">{achievement.subtitle}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
