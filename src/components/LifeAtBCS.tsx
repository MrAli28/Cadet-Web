import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["ALL", "ACADEMICS", "CADET LIFE"];

const academicsImages = [
  "/images/academics/BK437888.JPG",
  "/images/academics/BK437953.JPG",
  "/images/academics/BK438043.JPG",
  "/images/academics/BK438067.JPG",
  "/images/academics/BK438077.JPG",
  "/images/academics/BK438086.JPG",
  "/images/academics/BK438190.JPG",
  "/images/academics/BK438227.JPG",
  "/images/academics/DSC03004.JPG",
  "/images/academics/DSC03034.JPG",
  "/images/academics/DSC03072.JPG",
  "/images/academics/DSC03084.JPG",
  "/images/academics/DSC03114.JPG",
  "/images/academics/DSC03162.JPG",
  "/images/academics/DSC03207.JPG",
  "/images/academics/DSC03250.JPG",
  "/images/academics/DSC03603.JPG",
  "/images/academics/DSC03634.JPG",
  "/images/academics/DSC03695.JPG",
  "/images/academics/DSC03743.JPG",
  "/images/academics/DSC03911.JPG",
  "/images/academics/DSC03918.JPG",
  "/images/academics/DSC03923.JPG",
  "/images/academics/DSC03949.JPG",
  "/images/academics/DSC03960.JPG",
  "/images/academics/DSC03977.JPG",
];

const cadetLifeImages = [
  "/images/cadet-life/DSC03275.JPG",
  "/images/cadet-life/DSC03289.JPG",
  "/images/cadet-life/DSC03294.JPG",
  "/images/cadet-life/DSC03312.JPG",
  "/images/cadet-life/DSC03342.JPG",
  "/images/cadet-life/DSC03381.JPG",
  "/images/cadet-life/DSC03385.JPG",
  "/images/cadet-life/DSC03439.JPG",
  "/images/cadet-life/DSC03453.JPG",
  "/images/cadet-life/DSC03456.JPG",
  "/images/cadet-life/DSC03460.JPG",
  "/images/cadet-life/DSC03480.JPG",
  "/images/cadet-life/DSC03496.JPG",
  "/images/cadet-life/DSC03506.JPG",
  "/images/cadet-life/DSC03535.JPG",
  "/images/cadet-life/DSC03760.JPG",
  "/images/cadet-life/DSC03768.JPG",
  "/images/cadet-life/DSC03785.JPG",
  "/images/cadet-life/DSC03793.JPG",
  "/images/cadet-life/DSC04047.JPG",
  "/images/cadet-life/DSC04086.JPG",
  "/images/cadet-life/DSC04141.JPG",
  "/images/cadet-life/DSC04215.JPG",
  "/images/cadet-life/DSC04232.JPG",
];

const PAGE_SIZE = 8; // 4 columns x 2 rows

const LifeAtBCS = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [page, setPage] = useState(0);

  const allImages = [...academicsImages, ...cadetLifeImages];

  const imagesByCategory = () => {
    if (activeCategory === "ACADEMICS") return academicsImages;
    if (activeCategory === "CADET LIFE") return cadetLifeImages;
    return allImages;
  };

  const images = imagesByCategory();
  const pageCount = Math.max(1, Math.ceil(images.length / PAGE_SIZE));
  const start = page * PAGE_SIZE;
  const visible = images.slice(start, start + PAGE_SIZE);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(pageCount - 1, p + 1));

  return (
    <section className="py-20 bg-background">
      <div className="bcs-container">
        <div className="flex items-start gap-8 mb-6">
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

        <div className="flex flex-wrap gap-3 mb-6">
          <span className="text-sm text-bcs-body-text font-semibold mr-2">Filter Categories</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setPage(0); }}
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

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {visible.map((img, i) => (
              <div key={start + i} className="overflow-hidden rounded-sm group cursor-pointer">
                <img
                  src={img}
                  alt={`Campus life ${start + i + 1}`}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
            disabled={page === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
            disabled={page >= pageCount - 1}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LifeAtBCS;
