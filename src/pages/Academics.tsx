import { Link } from "react-router-dom";
import { BookOpen, Users, Trophy, Laptop } from "lucide-react";
import PageBanner from "@/components/PageBanner";

const academicLinks = [
  { label: "Members of Faculty", href: "/faculty", icon: <Users className="w-5 h-5" /> },
  { label: "Position Holders", href: "/info/position-holders", icon: <Trophy className="w-5 h-5" /> },
  
];

const pillars = [
  {
    title: "Curriculum Excellence",
    description: "Our curriculum aligns with leading national and international boards, ensuring our cadets are well-prepared for any global academic challenge.",
    icon: <BookOpen className="w-8 h-8 text-bcs-gold" />
  },
  {
    title: "Interactive Learning",
    description: "Modern classrooms equipped with multimedia and digital resources foster an engaging and interactive learning environment.",
    icon: <Laptop className="w-8 h-8 text-bcs-gold" />
  },
  {
    title: "Continuous Evaluation",
    description: "A robust evaluation framework including weekly tests and monthly mock exams tracks progress and identifies areas for improvement.",
    icon: <Trophy className="w-8 h-8 text-bcs-gold" />
  }
];

const Academics = () => {
  return (
    <div className="page-block">
      <PageBanner 
        title="Academics" 
        subtitle="Fostering intellectual growth through a rigorous, globally benchmarked curriculum." 
      />
      
      <section className="py-14 bg-bcs-light-gray">
        <div className="bcs-container">
          
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-sm shadow-sm border border-black/5 overflow-hidden sticky top-24">
                <div className="bg-bcs-dark-navy p-4">
                  <h3 className="text-white font-bold font-lufga">Academic Resources</h3>
                </div>
                <div className="divide-y divide-black/5">
                  {academicLinks.map((link) => (
                    <Link 
                      key={link.label}
                      to={link.href}
                      className="flex items-center gap-3 p-4 hover:bg-bcs-light-gray text-bcs-dark-text hover:text-bcs-green transition-colors group"
                    >
                      <div className="text-bcs-gray group-hover:text-bcs-green transition-colors">
                        {link.icon}
                      </div>
                      <span className="font-semibold text-sm">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:w-3/4 space-y-10">
              
              {/* Intro Block */}
              <div className="bg-white p-8 rounded-sm shadow-sm border border-black/5">
                <h2 className="text-2xl font-bold text-bcs-dark-text mb-4 font-lufga">Academic Philosophy</h2>
                <p className="text-bcs-body-text leading-relaxed">
                  At the heart of our institution lies a commitment to academic brilliance. We believe in nurturing critical thinking, fostering creativity, and building problem-solving skills that prepare our cadets for higher education and beyond. Our highly qualified faculty ensures that every student receives personalized attention and guidance.
                </p>
              </div>

              {/* Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="bg-bcs-dark-navy text-white p-6 rounded-sm shadow-lg text-center group hover:-translate-y-1 transition-transform">
                    <div className="mb-4 inline-flex items-center justify-center bg-white/10 p-4 rounded-full group-hover:bg-bcs-gold/20 transition-colors">
                      {pillar.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3">{pillar.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>

              {/* Programs Table */}
              <div className="bg-white p-8 rounded-sm shadow-sm border border-black/5">
                <h2 className="text-2xl font-bold text-bcs-dark-text mb-6 font-lufga">Evaluation Framework</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-bcs-light-gray text-bcs-dark-text">
                        <th className="p-4 font-bold border-b border-black/10">Assessment Type</th>
                        <th className="p-4 font-bold border-b border-black/10">Frequency</th>
                        <th className="p-4 font-bold border-b border-black/10">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-bcs-body-text">
                      <tr className="border-b border-black/5 hover:bg-gray-50">
                        <td className="p-4 font-semibold text-bcs-dark-text">Class Quizzes</td>
                        <td className="p-4">Weekly</td>
                        <td className="p-4">To ensure continuous retention and understanding of ongoing topics.</td>
                      </tr>
                      <tr className="border-b border-black/5 hover:bg-gray-50">
                        <td className="p-4 font-semibold text-bcs-dark-text">Monthly Mocks</td>
                        <td className="p-4">Monthly</td>
                        <td className="p-4">To simulate board exams and manage time effectively under pressure.</td>
                      </tr>
                      <tr className="border-b border-black/5 hover:bg-gray-50">
                        <td className="p-4 font-semibold text-bcs-dark-text">Term Examinations</td>
                        <td className="p-4">Bi-Annually</td>
                        <td className="p-4">Comprehensive evaluation of the term's syllabus before final boards.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Academics;
