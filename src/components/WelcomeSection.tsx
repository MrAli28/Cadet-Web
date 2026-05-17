import { Link } from "react-router-dom";

const WelcomeSection = () => {
  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      <div className="bcs-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-lufga text-bcs-dark-text mb-6">
              Introduction to Basic Concept School (BCS)
            </h2>
            <p className="text-bcs-body-text leading-relaxed text-[15px] mb-6">
              Welcome to Basic Concept School (BCS), where excellence meets discipline. At BCS, we are committed to
              preparing our students for the prestigious military colleges of Pakistan through focused academics,
              structured mentoring, and character development.
            </p>
            <p className="text-bcs-body-text leading-relaxed text-[15px] mb-6">
              BCS is more than just a school; it is a nurturing ground for future leaders. A rigorous academic
              curriculum, physical training, and character development work together to instill integrity, discipline,
              and patriotism in every cadet.
            </p>
            <p className="text-bcs-dark-text font-bold text-sm mb-1">Basic Concept School (BCS)</p>
            <p className="text-bcs-body-text text-sm mb-8">Excellence, Discipline, and Leadership</p>
            <Link
              to="/info/foreword-by-principal"
              className="inline-block bg-bcs-gold text-bcs-dark-text px-8 py-3 text-sm font-bold uppercase tracking-wider hover:brightness-95 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Image with decorative corners */}
          <div className="relative">
            {/* Red top-right accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-600 z-0" />
            {/* Blue bottom-right accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#174606] z-0" />
            <img
              src="/images/principal.png"
              alt="Basic Concept School leadership"
              className="relative z-10 w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
