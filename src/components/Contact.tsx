import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: "marcelroiggil@gmail.com",
      href: "mailto:marcelroiggil@gmail.com",
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: "+34 608 16 13 20",
      href: "tel:+34608161320",
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: "08184 Palau-solità i Plegamans, Barcelona",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          {t('contact.title')}
        </h2>
        <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12 rounded-full" />

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="shadow-medium hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">{item.label}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-accent transition-colors break-words"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground break-words">{item.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
