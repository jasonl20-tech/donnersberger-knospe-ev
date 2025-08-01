import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-vintage-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Über uns
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Wir sind ein Cannabis Social Club, der es Mitgliedern ermöglicht, 
            mit ihrem Mitgliedsbeitrag als Guthaben Cannabis legal bei uns abzuholen. 
            Unser Verein bietet eine sichere und transparente Alternative für erwachsene Cannabis-Konsumenten.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card border-earth-tone/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-leaf-green rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <CardTitle className="text-center text-foreground">Guthaben-System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Mitglieder zahlen einen monatlichen Beitrag, der als Guthaben 
                für den legalen Erwerb von qualitativ hochwertigem Cannabis verwendet werden kann.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-earth-tone/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-mountain-brown rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <CardTitle className="text-center text-foreground">Mitglieder-App</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Jedes Mitglied erhält Zugang zu unserer App, die aktuelle Bestände, 
                Verfügbarkeiten und Abholtermine in Echtzeit anzeigt.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-earth-tone/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <CardTitle className="text-center text-foreground">Transparenz</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Vollständige Transparenz bei Beständen, Preisen und Verfügbarkeiten 
                durch unsere digitale Plattform und App-Integration.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;