import { Code2, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-border/30 border-t py-8">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <a
            href="#inicio"
            className="font-display flex items-center gap-2 text-lg font-bold"
          >
            <Code2 className="text-primary h-6 w-6" />
            <span className="gradient-text">DevPortfolio</span>
          </a>

          <p className="text-muted-foreground flex items-center gap-1 text-sm">
            Hecho con <Heart className="text-primary fill-primary h-4 w-4" /> y
            mucho código
          </p>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
