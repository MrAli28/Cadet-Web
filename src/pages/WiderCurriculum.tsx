import { Link } from "react-router-dom";
import { HeartHandshake, Puzzle, Compass, Brain, Users, Globe, Target, ShieldPlus, ArrowRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";

const curriculumAreas = [
  {
    title: "Community Service",
    desc: "Instilling a sense of responsibility and empathy through active community engagement and volunteer work.",
    icon: <HeartHandshake className="w-8 h-8" />,
    href: "/info/community-service",
    span: "md:col-span-2 lg:col-span-1",
    bg: "bg-bcs-dark-navy text-white",
    iconColor: "text-bcs-gold"
  },
  {
    title: "Clubs & Societies",
    desc: "From debating to robotics, our diverse clubs provide a platform for cadets to discover and hone their unique talents.",
    icon: <Puzzle className="w-8 h-8" />,
    href: "/info/clubs-societies",
    span: "md:col-span-1 lg:col-span-2",
    bg: "bg-bcs-green text-white",
    iconColor: "text-white"
  },
  {
    title: "Duke of Edinburgh's Award",
    desc: "A globally recognized youth development framework focusing on physical challenges and expedition learning.",
    icon: <Compass className="w-8 h-8" />,
    href: "/info/duke-of-edinburgh-award",
    span: "md:col-span-1 lg:col-span-1",
    bg: "bg-white border border-black/5",
    iconColor: "text-bcs-green"
  },
  {
    title: "Mentorship",
    desc: "Structured guidance programs pairing cadets with experienced faculty for personal and academic growth.",
    icon: <Users className="w-8 h-8" />,
    href: "/info/mentorship",
    span: "md:col-span-2 lg:col-span-1",
    bg: "bg-bcs-light-gray",
    iconColor: "text-bcs-dark-navy"
  },
  {
    title: "Round Square",
    desc: "Fostering an international outlook through collaborative projects and global awareness initiatives.",
    icon: <Globe className="w-8 h-8" />,
    href: "/info/round-square",
    span: "md:col-span-1 lg:col-span-1",
    bg: "bg-white border border-black/5",
    iconColor: "text-bcs-gold"
  },
  {
    title: "Guidance & Placement Cell",
    desc: "Expert counseling for university placements, career choices, and standardized test preparation like the SAT.",
    icon: <Target className="w-8 h-8" />,
    href: "/info/guidance-placement-cell",
    span: "md:col-span-1 lg:col-span-2",
    bg: "bg-bcs-dark-navy text-white",
    iconColor: "text-bcs-gold"
  },
  {
    title: "Well Being & SEL",
    desc: "Comprehensive support for mental health, emotional intelligence, and social resilience.",
    icon: <ShieldPlus className="w-8 h-8" />,
    href: "/info/well-being",
    span: "md:col-span-1 lg:col-span-1",
    bg: "bg-white border border-black/5",
    iconColor: "text-bcs-green"
  }
];

const WiderCurriculum = () => {
  return (
    <div className="page-block">
      <PageBanner 
        title="Wider Curriculum" 
        subtitle="Cultivating leadership, character, and global awareness beyond the classroom." 
      />
      <section className="py-16 bg-background">
        <div className="bcs-container space-y-12">
          <div className="max-w-3xl text-center mx-auto">
            <h2 className="text-3xl font-bold text-bcs-dark-text mb-4 font-lufga">More Than Just Academics</h2>
            <p className="text-bcs-body-text leading-relaxed text-lg">
              Education at our institution extends far beyond textbooks. Our Wider Curriculum is designed to build character, instill discipline, and develop the holistic skills necessary for our cadets to become impactful global leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {curriculumAreas.map((area) => (
              <Link 
                key={area.title}
                to={area.href}
                className={`group rounded-sm p-6 flex flex-col justify-between transition-transform hover:-translate-y-1 shadow-sm hover:shadow-xl ${area.span} ${area.bg}`}
              >
                <div className={`mb-4 ${area.iconColor} group-hover:scale-110 transition-transform origin-left`}>
                  {area.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-lufga flex items-center justify-between">
                    {area.title}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className={`text-sm leading-relaxed ${area.bg.includes('text-white') ? 'text-white/80' : 'text-bcs-body-text'}`}>
                    {area.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WiderCurriculum;
