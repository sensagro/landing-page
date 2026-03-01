const Footer = () => {
  return (
    <footer className="section-padding pb-10 pt-16 border-t border-border/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#" className="font-display font-bold text-xl tracking-tight">
            <span className="text-primary">Aqua</span>Sat
          </a>
          <p className="text-muted-foreground text-sm mt-1">
            Satellite water monitoring for modern farms.
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} AquaSat. Buenos Aires, Argentina.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
