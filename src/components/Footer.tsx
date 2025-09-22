import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import apcLogo from "@/assets/apc-logo-new.png";
import sapAribaLogo from "@/assets/sap-ariba-logo.png";
import zakupivliLogo from "@/assets/zakupivli-logo.png";
import prozorroLogo from "@/assets/prozorro-logo.png";
const Footer = () => {
  return <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12 bg-blue-50">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={apcLogo} alt="APC Pharma Corporation" className="h-10 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Leading provider of high-quality, affordable healthcare solutions globally. 
              Enhancing quality of life through innovative pharmaceutical products since 2018.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <nav className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/quality" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Quality & Compliance
              </Link>
              <Link to="/careers" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Careers
              </Link>
              <Link to="/news" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                News & Press
              </Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <nav className="space-y-2">
              <Link to="/privacy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Use
              </Link>
              <Link to="/disclaimer" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Disclaimer
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>UAE Headquarters</p>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@aoepharma.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@aoepharma.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+971123456789" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +971 12 345 6789
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Find Us On Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="text-center space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Find Us On</h4>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <a 
                href="https://service.ariba.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <img src={sapAribaLogo} alt="SAP Ariba" className="h-12 w-auto" />
              </a>
              <a 
                href="https://zakupivli.pro/en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <img src={zakupivliLogo} alt="Zakupivli.pro" className="h-12 w-auto" />
              </a>
              <a 
                href="https://prozorro.gov.ua/en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <img src={prozorroLogo} alt="Prozorro" className="h-12 w-auto" />
              </a>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t bg-blue-50">
          <div className="text-center space-y-4">
            <h4 className="text-sm font-semibold text-muted-foreground">Certified & Compliant</h4>
            <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-muted-foreground">
              <span className="px-3 py-1 bg-accent rounded-full text-gray-950">WHO-GMP</span>
              <span className="px-3 py-1 bg-accent rounded-full text-gray-950">EU GMP</span>
              <span className="px-3 py-1 bg-accent rounded-full text-gray-950">USFDA</span>
              <span className="px-3 py-1 bg-accent rounded-full text-gray-950">ISO Certified</span>
              <span className="px-3 py-1 bg-accent rounded-full text-gray-950">GLP</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 AOE Pharma Corporation. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Established 2018 • Global Healthcare Solutions
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;