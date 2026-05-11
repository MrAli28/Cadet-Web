import { Mountain, Award } from "lucide-react";

const MissionMotto = () => {
  return (
    <section className="py-16 bg-[linear-gradient(90deg,#FFCC00_0%,#F5D161_100%)]">
      <div className="bcs-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-10">

          {/* Our Vision */}
          <div className="flex items-center gap-6">
            <Mountain className="w-16 h-16 text-black shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="text-2xl font-black font-lufga text-black uppercase tracking-wide mb-1">
                Our Vision
              </h3>
              <p className="text-black text-base font-medium leading-relaxed">
                To cultivate a vibrant and dynamic young generation, preparing them to become the leaders of tomorrow
                through holistic education and comprehensive training.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="flex items-center gap-6">
            <Award className="w-16 h-16 text-black shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="text-2xl font-black font-lufga text-black uppercase tracking-wide mb-1">
                Our Mission
              </h3>
              <p className="text-black text-base font-medium leading-relaxed">
                To provide comprehensive and effective guidelines to students preparing for army college exams by
                equipping them with the knowledge, skills, and strategies needed for success.
              </p>
            </div>
          </div>

        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-black font-lufga text-black uppercase tracking-wide mb-3">
            Why Choose Bahar Cadet School (BCS)?
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-black text-sm md:text-base font-medium">
            <li>Unbeatable Results: Our success rate exceeds 90%.</li>
            <li>Professional Team: Personalized guidance and dedicated support.</li>
            <li>Pioneers in the Region: First cadet institution in the region.</li>
            <li>ISO 9001 Certified: High-quality standards in all operations.</li>
            <li>International Quality Education: Preparation aligned with global standards.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MissionMotto;
