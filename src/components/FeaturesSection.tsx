import { Shield, Globe, Lock, Clock, Eye, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import multiBrowserImage from "@/assets/multi-browser.jpg";

const features = [
  {
    icon: Globe,
    title: "Multi-Browser Protection",
    description: "Automatically detects and blocks websites across Chrome, Firefox, Edge, Safari, and all other installed browsers.",
  },
  {
    icon: Lock,
    title: "Password Fortified",
    description: "Military-grade password protection prevents tampering, uninstalling, or disabling without authorization.",
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "Set specific times when blocks are active. Perfect for work hours, study time, or family screen time.",
  },
  {
    icon: Eye,
    title: "Access Monitoring",
    description: "Track all blocked attempts with detailed logs. Know exactly when and where blocks were triggered.",
  },
  {
    icon: Settings,
    title: "Custom Block Lists",
    description: "Add unlimited websites to your block list. Target specific addictions or distractions with precision.",
  },
  {
    icon: Shield,
    title: "Tamper Resistant",
    description: "Advanced protection prevents bypassing through VPNs, incognito mode, or system-level modifications.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Unbreakable Digital <span className="text-primary">Discipline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            FirmFence doesn't just suggest—it enforces. Built for those serious about breaking digital addictions and regaining control.
          </p>
        </div>

        {/* Multi-browser highlight */}
        <div className="mb-20">
          <Card className="bg-gradient-card border-border/50 shadow-elegant overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 items-center">
                <div className="p-12 space-y-6">
                  <div className="flex items-center gap-3 text-primary mb-4">
                    <Globe className="h-8 w-8" />
                    <span className="text-lg font-semibold">Universal Browser Protection</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold leading-tight">
                    One App. Every Browser. Complete Control.
                  </h3>
                  
                  <p className="text-lg text-muted-foreground">
                    Unlike browser extensions that can be easily disabled, FirmFence operates at the system level, 
                    providing ironclad protection across every browser on your computer.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="space-y-2">
                      <div className="text-primary font-semibold">✓ Chrome</div>
                      <div className="text-primary font-semibold">✓ Firefox</div>
                      <div className="text-primary font-semibold">✓ Edge</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-primary font-semibold">✓ Safari</div>
                      <div className="text-primary font-semibold">✓ Opera</div>
                      <div className="text-primary font-semibold">✓ Any Browser</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative p-8">
                  <img 
                    src={multiBrowserImage} 
                    alt="Multi-browser blocking visualization"
                    className="w-full rounded-lg shadow-elegant"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
            >
              <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;