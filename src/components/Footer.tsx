import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="group">
            <span className="font-heading text-xl tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
              ARCHI<span className="text-primary">TECT</span>
            </span>
          </Link>

          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Architect Studio. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link 
              to="/details" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Full Details
            </Link>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
