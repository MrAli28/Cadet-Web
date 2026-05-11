import { Link } from "react-router-dom";
import { GraduationCap, Award, Camera, Calendar, ArrowRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";

const alumniFeatures = [
  {
    title: "Prominent Abdalian",
    desc: "Discover the inspiring journeys of our alumni who have excelled in various fields globally.",
    icon: <Award className="w-6 h-6 text-bcs-green" />,
    href: "/info/prominent-abdalian",
  },
  {
    title: "Homecomings & Jubilees",
    desc: "Relive the golden moments and celebrate milestones with your batchmates.",
    icon: <Calendar className="w-6 h-6 text-bcs-green" />,
    href: "/info/homecomings-golden-jubilee",
  },
  {
    title: "ABDALIAN-Keepsake",
    desc: "Browse through our digital archive of memories, yearbooks, and college publications.",
    icon: <Camera className="w-6 h-6 text-bcs-green" />,
    href: "/info/abdalian-keepsake",
  },
];

const Alumni = () => {
  return (
    <div className="page-block">
      <PageBanner 
        title="Alumni Network" 
        subtitle="A lifelong bond. Connect, contribute, and celebrate the legacy of our great institution." 
      />
      
      <section className="py-16 bg-bcs-light-gray relative">
        <div className="bcs-container">
          
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-bcs-green/10 text-bcs-green px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
                <GraduationCap className="w-4 h-4" />
                <span>Our Pride</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-bcs-dark-text font-lufga leading-tight">
                Once a Cadet, <br /> Always a Cadet.
              </h2>
              <p className="text-bcs-body-text text-lg leading-relaxed">
                Our alumni form a vast and powerful network of leaders, innovators, and professionals spanning the globe. The bond forged within these college walls lasts a lifetime, providing mentorship, support, and a shared sense of pride.
              </p>
              <div className="pt-4">
                <a 
                  href="http://eepurl.com/bhgCcv" 
                  target="_blank" 
                  rel="noreferrer noopener"
                  className="bcs-btn-primary inline-flex items-center gap-2 group"
                >
                  Alumni Registration 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="bg-bcs-dark-navy rounded-sm p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                <h3 className="text-2xl font-bold mb-6 font-lufga">Get Involved</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-bcs-gold rounded-full mt-2" />
                    <div>
                      <h4 className="font-bold text-lg">Mentorship Program</h4>
                      <p className="text-white/70 text-sm">Guide the current cadets through career choices and life decisions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-bcs-gold rounded-full mt-2" />
                    <div>
                      <h4 className="font-bold text-lg">Guest Lectures</h4>
                      <p className="text-white/70 text-sm">Share your professional experiences during our career weeks.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-bcs-gold rounded-full mt-2" />
                    <div>
                      <h4 className="font-bold text-lg">Endowment Support</h4>
                      <p className="text-white/70 text-sm">Contribute to the college's development and scholarship funds.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alumniFeatures.map((feature) => (
              <Link 
                key={feature.title}
                to={feature.href}
                className="bg-white border border-black/5 rounded-sm p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 bg-bcs-light-gray rounded-full flex items-center justify-center mb-6 group-hover:bg-bcs-green/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-bcs-dark-text mb-3">{feature.title}</h3>
                <p className="text-bcs-body-text text-sm mb-6 leading-relaxed">
                  {feature.desc}
                </p>
                <span className="text-xs font-bold uppercase tracking-wider text-bcs-green flex items-center">
                  Explore <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Alumni;
