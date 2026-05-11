const instructors = [
  {
    name: "Syed Alamdar Hussain Shah",
    role: "Founder, Bahar Cadet School (BCS)",
    img: "/images/principal.png",
    bio: "A distinguished Pakistan Army veteran who trained thousands of officers and received a United Nations performance medal for exemplary service.",
  },
  {
    name: "Syed Amjad Hussain Shah",
    role: "Director, Bahar Cadet School (BCS)",
    img: "/images/faculty-banner.jpg",
    bio: "Leads BCS with academic excellence and a multidimensional training model covering academics, psychology, physical fitness, and mental preparation.",
  },
];

const InstructorsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="bcs-container">
        <h2 className="bcs-section-title text-center mb-12">
          <span className="font-bold">Leadership at Bahar Cadet School</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {instructors.map((inst, i) => (
            <div key={i} className="group bg-white rounded-sm shadow-sm overflow-hidden border border-gray-100">
              <div className="overflow-hidden">
                <img
                  src={inst.img}
                  alt={inst.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-bcs-dark-text font-lufga">{inst.name}</h3>
                <p className="text-sm text-bcs-green mt-1 font-semibold">{inst.role}</p>
                <p className="text-sm text-bcs-body-text mt-3 leading-relaxed">{inst.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
