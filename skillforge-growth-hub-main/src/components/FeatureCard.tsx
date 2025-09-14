import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: "primary" | "secondary" | "accent";
}

const FeatureCard = ({ icon: Icon, title, description, gradient = "primary" }: FeatureCardProps) => {
  const gradientClasses = {
    primary: "from-primary/20 to-primary-soft/30",
    secondary: "from-secondary/20 to-secondary-soft/30",
    accent: "from-accent/20 to-accent-soft/30"
  };

  return (
    <div className="group relative p-6 rounded-xl glass-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradientClasses[gradient]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradientClasses[gradient]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-foreground" />
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;