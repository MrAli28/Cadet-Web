import { Link } from "react-router-dom";

const JoinCTA = () => {
  const values = [
    "Responsibility",
    "Honesty",
    "Care",
    "Tolerance",
    "Unity",
    "Discipline",
    "Excellence",
    "Student centered",
    "Continuous learning",
  ];

  return (
    <section
      className="relative py-24 bg-[url('/images/hero2.JPG')] bg-cover bg-center bg-fixed"
    >
      <div className="bcs-overlay" />
      <div className="relative z-10 bcs-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-lufga mb-6">
          Contact <span className="text-bcs-gold">Bahar Cadet School</span>
        </h2>
        <p className="text-primary-foreground/85 max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-8">
          We are committed to developing future leaders through disciplined education, physical training, and character
          building. Connect with us to learn more about admissions and preparation pathways.
        </p>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
          {values.map((value) => (
            <span
              key={value}
              className="px-3 py-1.5 text-xs md:text-sm font-semibold border border-primary-foreground/50 text-primary-foreground rounded-sm bg-black/20"
            >
              {value}
            </span>
          ))}
        </div>
        <Link to="/contact" className="bcs-btn-outline">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default JoinCTA;
