import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/bcc62e19-d635-4aaf-9230-bc51b2ecd7c3.png" 
            alt="Donnersberger Knospe e.V. Logo" 
            className="h-10 w-10"
          />
          <div>
            <h1 className="text-lg font-bold text-foreground">Donnersberger Knospe e.V.</h1>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#uber-uns" className="text-foreground hover:text-primary transition-colors">
            Über uns
          </a>
          <a href="#mitgliedschaft" className="text-foreground hover:text-primary transition-colors">
            Mitgliedschaft
          </a>
          <a href="#anbauprojekt" className="text-foreground hover:text-primary transition-colors">
            Anbauprojekt
          </a>
          <a href="#kontakt" className="text-foreground hover:text-primary transition-colors">
            Kontakt
          </a>
          <Button variant="leaf" className="ml-4">
            Mitglied werden
          </Button>
        </nav>
        
        <Button variant="ghost" className="md:hidden">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;