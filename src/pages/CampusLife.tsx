import { Sunrise, Sun, Moon } from "lucide-react";
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

const CampusLife = () => {
  return (
    <div className="page-block">
      <PageBanner 
        title="Activities" 
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

        </div>
      </section>
    </div>
  );
};

export default CampusLife;
