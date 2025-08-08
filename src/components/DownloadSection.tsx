import { Download, Shield, CheckCircle, Monitor, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const systemRequirements = [
  "Windows 10 or 11 (64-bit)",
  "50 MB free disk space", 
  "Administrator privileges required",
  "Internet connection for initial setup"
];

const securityFeatures = [
  "Digitally signed executable",
  "No telemetry or data collection", 
  "Fully offline operation",
  "Open source security audits"
];

const DownloadSection = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Shield className="h-6 w-6" />
              <span className="text-sm font-medium tracking-wide uppercase">
                Secure Download
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Take <span className="text-primary">Control</span>?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Download FirmFence now and start your journey toward digital discipline. 
              Free trial, no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="xl" className="group">
                <Download className="mr-2 h-6 w-6 group-hover:animate-bounce" />
                Download FirmFence v1.0
              </Button>
              
              <Button variant="authority" size="xl">
                <Monitor className="mr-2 h-5 w-5" />
                Windows Only
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-12">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Virus-free
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                30-day trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                No registration
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* System Requirements */}
            <Card className="bg-gradient-card border-border/50 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-primary" />
                  System Requirements
                </h3>
                
                <ul className="space-y-3">
                  {systemRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Security Features */}
            <Card className="bg-gradient-card border-border/50 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Security & Privacy
                </h3>
                
                <ul className="space-y-3">
                  {securityFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Warning */}
          <Card className="mt-8 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-primary mb-2">Important Notice</h4>
                  <p className="text-sm text-muted-foreground">
                    FirmFence requires administrator privileges and will make system-level changes to enforce website blocking. 
                    Once activated with a password, you will need that password to modify settings or uninstall the application.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;