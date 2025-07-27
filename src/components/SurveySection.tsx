import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const SurveySection = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOption) {
      toast({
        title: "Bitte wählen Sie eine Option",
        description: "Sie müssen eine Antwort auswählen, um fortzufahren.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Vielen Dank!",
      description: "Ihre Antwort wurde erfolgreich übermittelt.",
    });
    setSelectedOption("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-elegant border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Ihre Meinung ist uns wichtig
              </CardTitle>
              <CardDescription className="text-lg">
                Helfen Sie uns dabei, unser Angebot zu verbessern. Welcher Bereich interessiert Sie am meisten?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="events" id="events" />
                      <Label htmlFor="events" className="flex-1 cursor-pointer">
                        <div className="font-medium">Veranstaltungen & Events</div>
                        <div className="text-sm text-muted-foreground">Workshops, Seminare und Community-Events</div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="services" id="services" />
                      <Label htmlFor="services" className="flex-1 cursor-pointer">
                        <div className="font-medium">Beratung & Services</div>
                        <div className="text-sm text-muted-foreground">Individuelle Beratung und Dienstleistungen</div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="networking" id="networking" />
                      <Label htmlFor="networking" className="flex-1 cursor-pointer">
                        <div className="font-medium">Networking</div>
                        <div className="text-sm text-muted-foreground">Kontakte knüpfen und Erfahrungen austauschen</div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="resources" id="resources" />
                      <Label htmlFor="resources" className="flex-1 cursor-pointer">
                        <div className="font-medium">Ressourcen & Tools</div>
                        <div className="text-sm text-muted-foreground">Nützliche Tools und Materialien</div>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
                
                <div className="flex justify-center pt-4">
                  <Button type="submit" size="lg" className="px-8">
                    Antwort senden
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SurveySection;