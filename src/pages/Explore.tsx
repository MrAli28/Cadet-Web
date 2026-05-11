import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Compass, Award, Building2, Users } from "lucide-react";
import PageBanner from "@/components/PageBanner";

const exploreCards = [
  {
    title: "Foreword by the Principal",
    description: "Read the guiding vision and leadership message from the Principal.",
    icon: <BookOpen className="w-6 h-6 text-bcs-green" />,
    href: "/info/foreword-by-principal",
  },
  {
    title: "Aim & Objective",
    description: "Discover our mission to shape future leaders through holistic development.",
    icon: <Compass className="w-6 h-6 text-bcs-green" />,
    href: "/info/aim-objective",
  },
  {
    title: "Institutional History",
    description: "Explore the legacy and milestones of our prestigious institution.",
    icon: <Award className="w-6 h-6 text-bcs-green" />,
    href: "/info/history",
  },
  {
    title: "Campus at a Glance",
    description: "Take a quick virtual tour of our 86-acre lush green campus.",
    icon: <Building2 className="w-6 h-6 text-bcs-green" />,
    href: "/info/campus-at-a-glance",
  },
  {
    title: "World-Class Facilities",
    description: "Learn about our academic blocks, hostels, sports fields, and more.",
    icon: <Building2 className="w-6 h-6 text-bcs-green" />,
    href: "/info/facilities",
  },
  {
    title: "Current Administration",
    description: "Meet the dedicated team managing the college's daily operations.",
    icon: <Users className="w-6 h-6 text-bcs-green" />,
    href: "/info/current-administration",
  },
];

const Explore = () => {
  return (
    <div className="page-block">
      <PageBanner
        title="Explore"
        subtitle="Discover the rich history, core values, and world-class infrastructure of our college."
      />

      <section className="py-16 bg-bcs-light-gray relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/5 to-transparent pointer-events-none" />
        
        <div className="bcs-container relative z-10 space-y-12">
          {/* Welcome Intro */}
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-bcs-dark-text mb-4 font-lufga">
              Welcome to Excellence & Heritage
            </h2>
            <p className="text-bcs-body-text leading-relaxed text-lg">
              Being the first institution of its kind in Pakistan, we have been a trend-setter in the field of quality boarding schools. In our history of over sixty years, our graduates have not only contributed tremendously in the national mainstream, but many have also moved across frontiers, playing significant roles at the global level.
            </p>
          </div>

          {/* Staggered Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreCards.map((card, idx) => (
              <Link 
                key={card.title} 
                to={card.href}
                className={`block group bg-white border border-black/5 rounded-sm p-6 shadow-sm hover:shadow-xl transition-all duration-300 ${
                  idx === 1 || idx === 4 ? "md:translate-y-4" : ""
                }`}
              >
                <div className="mb-4 bg-bcs-light-gray w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-bcs-green/10 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-bcs-dark-text mb-2 group-hover:text-bcs-green transition-colors">
                  {card.title}
                </h3>
                <p className="text-bcs-body-text text-sm mb-4">
                  {card.description}
                </p>
                <div className="flex items-center text-xs font-bold uppercase tracking-wider text-bcs-green">
                  Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* Quick CTA */}
          <div className="mt-12 bg-bcs-dark-navy rounded-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 font-lufga">Ready to join the ranks?</h3>
              <p className="text-white/80">
                Learn about our admission criteria and start your journey toward excellence today.
              </p>
            </div>
            <Link to="/admissions" className="bcs-btn-primary bg-bcs-gold text-bcs-dark-text hover:bg-white whitespace-nowrap">
              View Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
