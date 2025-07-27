import { Leaf, Shield, Users, BookOpen, Heart, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Leaf className="w-12 h-12 text-leaf-green" />,
      title: "Qualitätskontrolle",
      description: "Strenge Qualitätsstandards und regelmäßige Kontrollen unserer Cannabis-Produkte für maximale Sicherheit."
    },
    {
      icon: <Shield className="w-12 h-12 text-leaf-green" />,
      title: "Rechtliche Sicherheit",
      description: "Vollständige Einhaltung der deutschen Cannabis-Gesetze und transparente Vereinsführung."
    },
    {
      icon: <Users className="w-12 h-12 text-leaf-green" />,
      title: "Gemeinschaft",
      description: "Eine starke Gemeinschaft von verantwortungsbewussten Cannabis-Enthusiasten und Experten."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-leaf-green" />,
      title: "Aufklärung & Bildung",
      description: "Regelmäßige Workshops und Informationsveranstaltungen über verantwortlichen Cannabis-Konsum."
    },
    {
      icon: <Heart className="w-12 h-12 text-leaf-green" />,
      title: "Gesundheit & Wohlbefinden",
      description: "Fokus auf medizinische Anwendungen und gesundheitsfördernde Eigenschaften von Cannabis."
    },
    {
      icon: <Scale className="w-12 h-12 text-leaf-green" />,
      title: "Faire Preise",
      description: "Transparente, kostendeckende Preisgestaltung ohne kommerzielle Gewinnabsichten."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Als Cannabis Social Club bieten wir unseren Mitgliedern ein umfassendes Angebot 
            für den verantwortungsvollen Umgang mit Cannabis in einer sicheren Umgebung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;