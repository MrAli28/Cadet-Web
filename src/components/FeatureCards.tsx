import { GraduationCap, UserCheck, Book } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Unbeatable Results",
    description: "Success rate exceeds 90% in competitive prep.",
  },
  {
    icon: UserCheck,
    title: "Professional Team",
    description: "Dedicated experts providing personalized guidance.",
  },
  {
    icon: Book,
    title: "ISO 9001 Certified",
    description: "High-quality standards with international education focus.",
  },
];

const FeatureCards = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20">
      <div className="bcs-container">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-[#174606]/85 rounded-sm overflow-hidden shadow-xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bcs-feature-card text-primary-foreground group ${
                index < features.length - 1 ? "md:border-r border-primary-foreground/10" : ""
              }`}
            >
              <div>
                <h3 className="text-lg font-bold font-lufga mb-1 text-bcs-gold">{feature.title}</h3>
                <p className="text-sm text-primary-foreground/70">{feature.description}</p>
              </div>
              <feature.icon className="w-10 h-10 text-bcs-gold group-hover:text-primary-foreground transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
