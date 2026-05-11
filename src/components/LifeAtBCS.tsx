import { useState } from "react";

const categories = ["ALL", "ACADEMICS", "CADET LIFE", "CAMPUS", "COMMUNITY", "LABS"];

const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
];

const LifeAtBCS = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  return (
    <section className="py-20 bg-background">
      <div className="bcs-container">
        <div className="flex items-start gap-8 mb-10">
          <img src="/images/our-mission.png" alt="" className="w-16 h-16 hidden md:block" />
          <div>
            <h2 className="bcs-section-title mb-4">Life at BCS Cadet School</h2>
            <p className="text-bcs-body-text text-sm leading-relaxed max-w-3xl">
              Life at BCS combines academic focus, physical training, and character building in a disciplined environment.
              Students are guided to grow with confidence, patriotism, teamwork, and leadership so they are ready for
              the challenges of military college entrance and future service.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <span className="text-sm text-bcs-body-text font-semibold mr-2">Filter Categories</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-sm transition-colors ${
                activeCategory === cat
                  ? "bg-bcs-green text-primary-foreground"
                  : "bg-bcs-light-gray text-bcs-body-text hover:bg-bcs-green hover:text-primary-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryImages.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-sm group cursor-pointer">
              <img
                src={img}
                alt={`Campus life ${i + 1}`}
                className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeAtBCS;
