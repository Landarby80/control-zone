import { Users, User, Heart, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: Users,
    title: "Parents & Families",
    subtitle: "Protect Your Children",
    description: "Create a safe digital environment for your family. Block harmful content, limit screen time, and ensure your children develop healthy online habits.",
    features: [
      "Child-safe internet browsing",
      "Homework hour enforcement",
      "Bedtime screen restrictions",
      "Inappropriate content blocking"
    ],
    cta: "Protect My Family"
  },
  {
    icon: User,
    title: "Individuals",
    subtitle: "Break Digital Addictions",
    description: "Regain control over your digital life. Whether it's social media, gaming, or compulsive browsing, FirmFence helps you build discipline and focus.",
    features: [
      "Social media addiction recovery",
      "Productivity during work hours",
      "Focus for studying or projects",
      "Breaking procrastination cycles"
    ],
    cta: "Start My Recovery"
  }
];

const stats = [
  { value: "73%", label: "Report improved productivity", icon: Target },
  { value: "89%", label: "Successfully break habits", icon: Heart },
  { value: "94%", label: "Recommend to others", icon: Users },
];

const AudienceSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Built for Those Who <span className="text-primary">Need Change</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're protecting your family or fighting personal battles with digital addiction, 
            FirmFence provides the discipline and control you need.
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {audiences.map((audience, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 group"
            >
              <CardContent className="p-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <audience.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{audience.title}</h3>
                    <p className="text-primary font-medium">{audience.subtitle}</p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Perfect for:</h4>
                  <ul className="space-y-2">
                    {audience.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="hero" className="w-full">
                  {audience.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;