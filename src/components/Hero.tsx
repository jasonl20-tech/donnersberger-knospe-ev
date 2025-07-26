import { Button } from "@/components/ui/button";
import heroPlaceholder from "@/assets/hero-placeholder.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroPlaceholder}
          alt="Naturlandschaft mit Cannabis Pflanzen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/80 via-primary/60 to-leaf-green/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Donnersberger<br />
          <span className="text-vintage-cream">Knospe e.V.</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-vintage-cream/90 max-w-2xl mx-auto leading-relaxed">
          Ein Cannabis Social Club, der sich für den verantwortungsvollen und legalen Umgang 
          mit Cannabis in Deutschland einsetzt.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="leaf" 
            size="lg"
            className="text-lg px-8 py-4 font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Mehr erfahren
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 font-semibold border-white text-white hover:bg-white hover:text-primary shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Mitglied werden
          </Button>
        </div>
        
        <div className="mt-12 animate-bounce">
          <svg className="w-8 h-8 mx-auto text-vintage-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;