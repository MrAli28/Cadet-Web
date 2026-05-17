const instructors = [
  {
    name: "Syed Alamdar Hussain Shah",
    role: "Founder, Basic Concept School (BCS)",
    img: "/images/principal.png",
    bio: `Basic Concept School (BCS) was founded by Alamdar Hussain Shah Tk2, a distinguished veteran with an illustrious career in the Pakistan Army. With extensive experience in military service, Mr. Shah has trained thousands of army officers, imparting them with the skills and values essential for their roles. His dedication and excellence were recognized on an international scale when he received a performance medal from the United Nations for his exemplary service.

Throughout his career, Mr. Shah has garnered numerous accolades from various departments of the Pakistan Army, reflecting his commitment and contributions to the nation's defense. Under his visionary leadership, BCS is dedicated to shaping the next generation of military leaders, ensuring they are well-prepared to uphold the highest standards of excellence and integrity.

Alamdar Hussain Shah Tk2's legacy of service, discipline, and dedication is the cornerstone of Basic Concept School, inspiring both faculty and students to strive for greatness`,
  },
];

const InstructorsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="bcs-container">
        <h2 className="bcs-section-title text-center mb-12">
          <span className="font-bold">Leadership at Basic Concept School</span>
        </h2>
        {(() => {
          const single = instructors.length === 1;
          return (
            <div className={single ? "flex justify-center" : "grid grid-cols-1 md:grid-cols-2 gap-8"}>
              {instructors.map((inst, i) => (
                <div key={i} className={`group ${single ? 'w-full max-w-6xl' : ''}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="overflow-hidden h-80 md:h-[520px]">
                      <img
                        src={inst.img}
                        alt={inst.name}
                        className={`w-full h-full ${inst.img === "/images/principal.png" ? "object-cover object-[center_30%]" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
                      />
                    </div>
                    {/* Text */}
                    <div className="p-10 md:p-16 flex flex-col justify-center transform -translate-y-10 md:-translate-y-16 bg-transparent">
                      <h3 className="text-xl md:text-2xl font-bold text-bcs-dark-text font-lufga">{inst.name}</h3>
                      <p className="text-sm md:text-base text-bcs-green mt-2 font-semibold">{inst.role}</p>
                      <p className="text-sm md:text-base text-bcs-body-text mt-4 leading-relaxed">{inst.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default InstructorsSection;
