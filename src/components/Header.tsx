import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut, isAuthenticated } = useAuth();
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
          <a href="#about" className="text-foreground hover:text-primary transition-colors">Über uns</a>
          <a href="#membership" className="text-foreground hover:text-primary transition-colors">Mitgliedschaft</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Kontakt</a>
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Hallo, {user?.user_metadata?.display_name || user?.email}
              </span>
              <Button variant="outline" onClick={signOut}>Abmelden</Button>
            </div>
          ) : (
            <Link to="/auth">
              <Button variant="leaf">
                <User className="w-4 h-4 mr-2" />
                Anmelden
              </Button>
            </Link>
          )}
        </nav>
        
        <Button 
          variant="ghost" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#about" className="block text-foreground hover:text-primary transition-colors">Über uns</a>
            <a href="#membership" className="block text-foreground hover:text-primary transition-colors">Mitgliedschaft</a>
            <a href="#contact" className="block text-foreground hover:text-primary transition-colors">Kontakt</a>
            {isAuthenticated ? (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Hallo, {user?.user_metadata?.display_name || user?.email}
                </p>
                <Button variant="outline" onClick={signOut} className="w-full">Abmelden</Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button variant="leaf" className="w-full">
                  <User className="w-4 h-4 mr-2" />
                  Anmelden
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;