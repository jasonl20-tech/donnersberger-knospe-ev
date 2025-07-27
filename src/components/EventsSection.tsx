import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Informationsabend für neue Mitglieder",
      date: "15. Februar 2024",
      time: "19:00 Uhr",
      location: "Vereinsheim Donnersbergkreis",
      description: "Erfahren Sie mehr über unseren Verein und die Vorteile einer Mitgliedschaft.",
      type: "Information"
    },
    {
      id: 2,
      title: "Cannabis-Aufklärung Workshop",
      date: "28. Februar 2024",
      time: "18:30 Uhr",
      location: "Bildungsraum des Vereins",
      description: "Workshop über verantwortlichen Umgang und rechtliche Aspekte.",
      type: "Bildung"
    },
    {
      id: 3,
      title: "Mitgliederversammlung",
      date: "15. März 2024",
      time: "19:00 Uhr",
      location: "Vereinsheim",
      description: "Jahreshauptversammlung mit Wahlen und wichtigen Entscheidungen.",
      type: "Versammlung"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Information": return "bg-blue-100 text-blue-800";
      case "Bildung": return "bg-green-100 text-green-800";
      case "Versammlung": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-vintage-cream to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Kommende Veranstaltungen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bleiben Sie informiert über unsere Aktivitäten, Workshops und Versammlungen. 
            Gemeinsam schaffen wir eine verantwortungsvolle Cannabis-Gemeinschaft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getTypeColor(event.type)}>
                    {event.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-leaf-green" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-leaf-green" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-leaf-green" />
                    {event.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;