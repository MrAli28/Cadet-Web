const alumniImages = [
  "https://bcs.edu.pk/wp-content/uploads/2021/04/Alunmni-05-1.png",
  "https://bcs.edu.pk/wp-content/uploads/2021/04/Alunmni-06-1.png",
  "https://bcs.edu.pk/wp-content/uploads/2021/04/Alunmni-07-1.png",
  "https://bcs.edu.pk/wp-content/uploads/2021/04/Alunmni-08-1.png",
  "https://bcs.edu.pk/wp-content/uploads/2021/04/Alunmni-09-1.png",
  "https://bcs.edu.pk/wp-content/uploads/2021/04/Alunmni-10-1.png",
  "https://bcs.edu.pk/wp-content/uploads/2021/04/Alunmni-12-1.png",
  "https://bcs.edu.pk/wp-content/uploads/2021/04/Alunmni-13-1.png",
  "https://bcs.edu.pk/wp-content/uploads/2021/04/Alunmni-03-1.png",
  "https://bcs.edu.pk/wp-content/uploads/2021/04/Alunmni-04-1.png",
  "https://bcs.edu.pk/wp-content/uploads/2021/04/Alunmni-01-1.png",
  "https://bcs.edu.pk/wp-content/uploads/2021/04/Alunmni-02-1.png",
];

const AlumniSection = () => {
  return (
    <section className="py-20 bg-bcs-light-gray">
      <div className="bcs-container">
        <h2 className="bcs-section-title text-center mb-12">
          <span className="font-bold">Prominent Alumnus</span>
        </h2>
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left" style={{ width: "fit-content" }}>
            {[...alumniImages, ...alumniImages].map((img, i) => (
              <div key={i} className="flex-shrink-0 w-40 h-48 mx-2">
                <img
                  src={img}
                  alt={`Alumni ${i + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="#" className="bcs-btn-primary">
            View All Alumni
          </a>
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
