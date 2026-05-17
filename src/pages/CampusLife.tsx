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
        <div className="bcs-container space-y-12">
          <div className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-bcs-dark-text font-lufga mb-4">Activities at Our Cadet School</h2>
            <p className="text-bcs-body-text text-lg">At our cadet school, activities play a vital role in the overall development of each student. Beyond academics, we provide a wide range of co-curricular and extracurricular activities designed to build leadership, confidence, discipline, and teamwork.</p>
          </div>

          {/* Academic Activities */}
          <div className="bg-white rounded-sm shadow-sm p-6">
            <h3 className="text-xl font-bold text-bcs-dark-text mb-3">Academic Activities</h3>
            <p className="mb-3 text-bcs-body-text">Cadets participate in:</p>
            <ul className="list-disc list-inside space-y-2 text-bcs-body-text">
              <li>Science exhibitions</li>
              <li>Debates and speech competitions</li>
              <li>Quiz contests</li>
              <li>Essay writing competitions</li>
              <li>Computer and STEM projects</li>
            </ul>
            <p className="mt-3 text-bcs-body-text">These activities encourage critical thinking, creativity, and effective communication.</p>
          </div>

          {/* Sports and Physical Activities */}
          <div className="bg-white rounded-sm shadow-sm p-6">
            <h3 className="text-xl font-bold text-bcs-dark-text mb-3">Sports and Physical Activities</h3>
            <p className="mb-3 text-bcs-body-text">Physical fitness is an essential part of cadet life. Our cadets take part in:</p>
            <ul className="list-disc list-inside space-y-2 text-bcs-body-text">
              <li>Cricket</li>
              <li>Football</li>
              <li>Volleyball</li>
              <li>Athletics</li>
              <li>Physical training and drills</li>
            </ul>
            <p className="mt-3 text-bcs-body-text">Sports help develop endurance, teamwork, and a competitive spirit.</p>
          </div>

          {/* Religious and Character-Building Activities */}
          <div className="bg-white rounded-sm shadow-sm p-6">
            <h3 className="text-xl font-bold text-bcs-dark-text mb-3">Religious and Character-Building Activities</h3>
            <p className="mb-3 text-bcs-body-text">To nurture strong moral values, cadets regularly participate in:</p>
            <ul className="list-disc list-inside space-y-2 text-bcs-body-text">
              <li>Daily congregational prayers</li>
              <li>Nazra Quran</li>
              <li>Islamic studies sessions</li>
              <li>Character-building lectures</li>
            </ul>
            <p className="mt-3 text-bcs-body-text">These activities strengthen spiritual growth and ethical conduct.</p>
          </div>

          {/* Leadership and Discipline Programs */}
          <div className="bg-white rounded-sm shadow-sm p-6">
            <h3 className="text-xl font-bold text-bcs-dark-text mb-3">Leadership and Discipline Programs</h3>
            <p className="mb-3 text-bcs-body-text">Cadets are trained through:</p>
            <ul className="list-disc list-inside space-y-2 text-bcs-body-text">
              <li>Parade and drill practice</li>
              <li>House competitions</li>
              <li>Leadership workshops</li>
              <li>Community service projects</li>
            </ul>
            <p className="mt-3 text-bcs-body-text">Such programs prepare students to take responsibility and lead with confidence.</p>
          </div>

          {/* Cultural and Recreational Activities */}
          <div className="bg-white rounded-sm shadow-sm p-6">
            <h3 className="text-xl font-bold text-bcs-dark-text mb-3">Cultural and Recreational Activities</h3>
            <p className="mb-3 text-bcs-body-text">To promote creativity and self-expression, we organize:</p>
            <ul className="list-disc list-inside space-y-2 text-bcs-body-text">
              <li>Annual functions</li>
              <li>Art and drawing competitions</li>
              <li>National day celebrations</li>
              <li>Educational tours and excursions</li>
            </ul>
          </div>

          {/* Balanced Development Conclusion */}
          <div className="bg-white rounded-sm shadow-sm p-6">
            <h3 className="text-xl font-bold text-bcs-dark-text mb-3">A Balanced Development Approach</h3>
            <p className="text-bcs-body-text">Our activity program ensures that cadets grow intellectually, physically, spiritually, and socially. Through these diverse experiences, students develop into disciplined, confident, and well-rounded individuals ready to meet future challenges.</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CampusLife;
