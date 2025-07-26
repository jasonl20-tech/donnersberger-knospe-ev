const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/b5c22379-7fb3-44e3-a2d1-b82366ab8ee0.png" 
                alt="Donnersberger Knospe e.V. Logo" 
                className="h-10 w-10"
              />
              <h3 className="text-xl font-bold">Donnersberger Knospe e.V.</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Ein Cannabis Social Club für den verantwortungsvollen und legalen 
              Umgang mit Cannabis in Deutschland.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Vereinsregister: VR 12345<br />
              Amtsgericht Kaiserslautern
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#uber-uns" className="hover:text-primary-foreground transition-colors">Über uns</a></li>
              <li><a href="#mitgliedschaft" className="hover:text-primary-foreground transition-colors">Mitgliedschaft</a></li>
              <li><a href="#anbauprojekt" className="hover:text-primary-foreground transition-colors">Anbauprojekt</a></li>
              <li><a href="#kontakt" className="hover:text-primary-foreground transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">AGB</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Vereinssatzung</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Donnersberger Knospe e.V. - Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;