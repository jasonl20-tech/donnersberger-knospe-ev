import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-coral-500 via-coral-400 to-coral-600">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-24 h-24 bg-white/10 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-20 right-32 w-12 h-12 bg-white/10 rounded-full"></div>
      </div>
      
      {/* Cannabis Leaves */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-32 text-6xl opacity-30">🌿</div>
        <div className="absolute top-20 right-40 text-8xl opacity-25">🌿</div>
        <div className="absolute bottom-40 left-16 text-5xl opacity-35">🌿</div>
        <div className="absolute bottom-32 right-20 text-7xl opacity-20">🌿</div>
        <div className="absolute top-1/2 left-20 text-4xl opacity-40">🌿</div>
        <div className="absolute top-1/3 right-16 text-6xl opacity-30">🌿</div>
      </div>
      
      {/* Central Content Container */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* White Product Container */}
        <div className="relative mb-8">
          <div className="w-64 h-80 mx-auto bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute top-4 left-4 w-8 h-12 bg-gradient-to-b from-coral-400 to-coral-600 rounded-lg flex items-center justify-center">
              <div className="text-white text-xs font-bold transform -rotate-90">CSC</div>
            </div>
            <div className="text-8xl mb-4 opacity-20">🌿</div>
            <div className="text-coral-600 font-bold text-lg">KNOSPE</div>
          </div>
          
          {/* Floating Cannabis Leaves around container */}
          <div className="absolute -top-8 -left-8 text-6xl opacity-60">🌿</div>
          <div className="absolute -top-4 -right-4 text-5xl opacity-70">🌿</div>
          <div className="absolute top-1/3 -left-12 text-7xl opacity-50">🌿</div>
          <div className="absolute top-1/2 -right-8 text-6xl opacity-60">🌿</div>
          <div className="absolute -bottom-4 left-4 text-5xl opacity-65">🌿</div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
          Donnersberger<br />
          <span className="text-white/90">Knospe e.V.</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
          Ein Cannabis Social Club, der sich für den verantwortungsvollen und legalen Umgang 
          mit Cannabis in Deutschland einsetzt.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 font-semibold border-white text-white hover:bg-white hover:text-coral-600 shadow-xl hover:scale-105 transition-all duration-300"
          >
            Entdecke unseren Club
          </Button>
        </div>
        
        <div className="text-white/70 text-sm font-medium">
          Discover the community
        </div>
        
        <div className="mt-8 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;