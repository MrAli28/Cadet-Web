import { Link } from "react-router-dom";
import { Sunrise, Sun, Moon, Calendar, FileText, Newspaper, Utensils, Shield, Flag, LayoutGrid } from "lucide-react";
import PageBanner from "@/components/PageBanner";

const routineSchedule = [
  {
    phase: "Morning",
    icon: <Sunrise className="w-8 h-8 text-bcs-gold" />,
    items: ["Fajr Prayers & Quranic Recitation", "Morning Physical Training (PT)", "Breakfast in the Mess", "Assembly and Roll Call"],
  },
  {
    phase: "Afternoon",
    icon: <Sun className="w-8 h-8 text-bcs-gold" />,
    items: ["Academic Classes (Block A & B)", "Zuhr Prayers & Lunch", "Rest / Quiet Hour", "Afternoon Prep / Tutorials"],
  },
  {
    phase: "Evening",
    icon: <Moon className="w-8 h-8 text-bcs-gold" />,
    items: ["Sports and Club Activities", "Maghrib Prayers", "Dinner & Isha Prayers", "Night Prep & Lights Out"],
  },
];

const lifeLinks = [
  { title: "Rules & Regulations", href: "/info/rules-regulations", icon: <Shield className="w-6 h-6" /> },
  { title: "BCS Newsletters", href: "/info/bcs-newsletters", icon: <Newspaper className="w-6 h-6" /> },
  { title: "Calendar of Events", href: "/info/calendar-of-events", icon: <Calendar className="w-6 h-6" /> },
  { title: "Mess Menu", href: "/info/mess-menu", icon: <Utensils className="w-6 h-6" /> },
  { title: "Digital Abdalian", href: "/info/digital-abdalian", icon: <LayoutGrid className="w-6 h-6" /> },
  { title: "Wing & Mascots", href: "/info/wing-mascots", icon: <Flag className="w-6 h-6" /> },
];

const CampusLife = () => {
  return (
    <div className="page-block">
      <PageBanner 
        title="Cadet Life" 
        subtitle="A highly structured, active, and disciplined environment that builds character and camaraderie." 
      />
      
      <section className="py-16 bg-bcs-light-gray">
        <div className="bcs-container space-y-16">
          
          {/* Daily Rhythm Section */}
          <div>
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-bcs-dark-text font-lufga mb-4">The Daily Rhythm</h2>
              <p className="text-bcs-body-text text-lg">
                Life at the college is meticulously planned to ensure a perfect balance between academics, physical fitness, and spiritual well-being.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {routineSchedule.map((schedule) => (
                <div key={schedule.phase} className="bg-white rounded-sm shadow-sm border border-black/5 overflow-hidden group">
                  <div className="bg-bcs-dark-navy p-6 flex flex-col items-center text-center">
                    <div className="mb-3 group-hover:scale-110 transition-transform">
                      {schedule.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white font-lufga tracking-wider">{schedule.phase}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {schedule.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-bcs-body-text text-sm font-semibold">
                          <div className="w-1.5 h-1.5 rounded-full bg-bcs-green mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Aspects Grid */}
          <div>
            <h2 className="text-2xl font-bold text-bcs-dark-text font-lufga mb-8 text-center border-b border-black/10 pb-4">
              Explore Cadet Life
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lifeLinks.map((link) => (
                <Link 
                  key={link.title}
                  to={link.href}
                  className="bg-white border border-black/5 p-6 rounded-sm shadow-sm hover:shadow-md hover:border-bcs-green transition-all flex items-center gap-4 group"
                >
                  <div className="bg-bcs-light-gray p-3 rounded-full text-bcs-dark-navy group-hover:bg-bcs-green group-hover:text-white transition-colors">
                    {link.icon}
                  </div>
                  <span className="font-bold text-bcs-dark-text group-hover:text-bcs-green transition-colors">
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CampusLife;
