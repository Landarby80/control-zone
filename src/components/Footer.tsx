import { Shield, Mail, FileText, HelpCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">FirmFence</span>
            </div>
            <p className="text-muted-foreground">
              Unbreakable website blocking for digital discipline and addiction recovery.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#download" className="hover:text-primary transition-colors">Download</a></li>
              <li><a href="#system-requirements" className="hover:text-primary transition-colors">System Requirements</a></li>
              <li><a href="#changelog" className="hover:text-primary transition-colors">Changelog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#faq" className="hover:text-primary transition-colors flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                FAQ
              </a></li>
              <li><a href="#documentation" className="hover:text-primary transition-colors flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Documentation
              </a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contact Support
              </a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#license" className="hover:text-primary transition-colors">License</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 FirmFence. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Version 1.0.0</span>
              <span>•</span>
              <span>Windows Compatible</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Shield className="h-3 w-3 text-primary" />
                Secure
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;