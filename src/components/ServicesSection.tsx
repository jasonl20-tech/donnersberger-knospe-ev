import { Leaf, Shield, Users, BookOpen, Heart, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <Leaf className="w-12 h-12 text-leaf-green" />,
      title: "Mitglieder-App",
      description: "Exklusive App für alle Mitglieder mit Echtzeit-Anzeige von Beständen, Verfügbarkeiten und Abholzeiten."
    },
    {
      icon: <Shield className="w-12 h-12 text-leaf-green" />,
      title: "Guthaben-System",
      description: "Ihr Mitgliedsbeitrag wird als Guthaben verwaltet, mit dem Sie legal Cannabis bei uns abholen können."
    },
    {
      icon: <Users className="w-12 h-12 text-leaf-green" />,
      title: "Bestands-Tracking",
      description: "Transparente Übersicht über alle verfügbaren Sorten, Mengen und aktuelle Preise in der App."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-leaf-green" />,
      title: "Terminbuchung",
      description: "Bequeme Buchung von Abholterminen direkt über die App - keine Wartezeiten, kein Stress."
    },
    {
      icon: <Heart className="w-12 h-12 text-leaf-green" />,
      title: "Qualitätsgarantie",
      description: "Laborgeprüfte Cannabis-Produkte höchster Qualität aus kontrolliertem, legalem Anbau."
    },
    {
      icon: <Scale className="w-12 h-12 text-leaf-green" />,
      title: "Sichere Abholung",
      description: "Diskrete und sichere Abholung in unseren Vereinsräumen zu Ihrem gebuchten Termin."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Unsere Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Als Mitglied profitieren Sie von unserem innovativen Guthaben-System 
            und der benutzerfreundlichen App für eine nahtlose Cannabis-Erfahrung.
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