import { Button } from "@/components/ui/button";
import { Shield, Download, Lock } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Shield className="h-6 w-6" />
                <span className="text-sm font-medium tracking-wide uppercase">
                  Digital Discipline
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Block Websites.
                <br />
                <span className="text-primary">Break Addictions.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                FirmFence is the most powerful website blocking software for Windows. 
                Enforce discipline across all browsers with military-grade password protection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl"
                className="group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download for Windows
              </Button>
              
              <Button variant="authority" size="xl">
                <Lock className="mr-2 h-5 w-5" />
                View Features
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Password Protected
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                All Browsers
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Tamper Resistant
              </div>
            </div>
          </div>

          {/* Mockup */}
          <div className="relative lg:ml-8">
            <div className="relative">
              <img 
                src={heroMockup} 
                alt="FirmFence Desktop Application Interface"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-elegant border border-border/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary/90 backdrop-blur-sm rounded-lg p-3 shadow-glow">
              <Lock className="h-6 w-6 text-primary-foreground" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-elegant">
              <div className="text-sm font-medium text-foreground">
                Blocked Today
              </div>
              <div className="text-2xl font-bold text-primary">
                247 attempts
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;