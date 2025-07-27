import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MembershipSection = () => {
  return (
    <section id="mitgliedschaft" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Mitgliedschaft
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Werden Sie Teil unserer Gemeinschaft und profitieren Sie von 
            den Vorteilen einer Cannabis Social Club Mitgliedschaft.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Wie funktioniert die Mitgliedschaft?
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-leaf-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Guthaben-System</h4>
                  <p className="text-muted-foreground">
                    Ihr monatlicher Mitgliedsbeitrag wird als Guthaben verwaltet, 
                    mit dem Sie legal Cannabis bei uns abholen können.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-leaf-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Exklusive Mitglieder-App</h4>
                  <p className="text-muted-foreground">
                    Zugang zu unserer App mit Echtzeit-Beständen, Verfügbarkeiten 
                    und der Möglichkeit, Abholtermine bequem zu buchen.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-leaf-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Transparenz & Kontrolle</h4>
                  <p className="text-muted-foreground">
                    Vollständige Transparenz über Ihr Guthaben, verfügbare Mengen 
                    und alle Transaktionen über die Mitglieder-App.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-vintage-cream border-earth-tone/30 shadow-xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-foreground">
                Mitglied werden
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  So funktioniert die Mitgliedschaft:
                </p>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• Monatlicher Beitrag wird als Guthaben verwaltet</li>
                  <li>• App-Zugang für Bestände und Termine</li>
                  <li>• Legale Abholung in unseren Räumen</li>
                  <li>• Transparente Guthaben-Verwaltung</li>
                </ul>
              </div>
              
              <div className="text-center">
                <Button variant="leaf" size="lg" className="w-full text-lg py-4">
                  Jetzt bewerben
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Die Aufnahme erfolgt nach Prüfung Ihrer Bewerbung
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;