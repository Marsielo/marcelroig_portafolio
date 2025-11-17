import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "marcelroiggil@gmail.com",
    href: "mailto:marcelroiggil@gmail.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+34 608 16 13 20",
    href: "tel:+34608161320",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "08184 Palau-solità i Plegamans, Barcelona",
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Contacto
        </h2>
        <div className="w-20 h-1 bg-gradient-accent mx-auto mb-12 rounded-full" />

        <div className="max-w-3xl mx-auto">
          <p className="text-center text-lg text-muted-foreground mb-12">
            ¿Tienes algún proyecto en mente o quieres colaborar? No dudes en ponerte en contacto.
          </p>

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
