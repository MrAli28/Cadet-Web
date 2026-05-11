

const tours = [
  { img: "/images/tour-01.png" },
  { img: "/images/tour-02.png" },
  { img: "/images/tour-03.png" },
  { img: "/images/tour-04.png" },
  { img: "/images/tour-05.png" },
  { img: "/images/tour-06.png" },
];

const VirtualTour = () => {
  return (
    <section className="py-20 bg-background">
      <div className="bcs-container">
        <h2 className="bcs-section-title text-center mb-12">
          <span className="font-bold">Campus Virtual Tour</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {tours.map((tour, i) => (
            <div key={i} className="relative group cursor-pointer overflow-hidden rounded-xl">
              <img
                src={tour.img}
                alt={`Campus tour ${i + 1}`}
                className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
