import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/hero1.jpeg",
  "/images/hero2.JPG",
  "/images/hero3.JPG",
  "/images/hero4.JPG",
  "/images/hero5.jpeg",
  "/images/hero6.JPG",
  "/images/hero7.jpeg",
  "/images/hero8.JPG",
  "/images/hero9.JPG",
];

const slides = [images[images.length - 1], ...images, images[0]];
const total = slides.length;

const getImageClass = (src: string) =>
  src === "/images/hero1.jpeg"
    ? "object-[center_28%]"
    : src === "/images/hero7.jpeg"
      ? "object-[center_36%]"
      : "object-center";

const HeroSlider = () => {
  const [current, setCurrent] = useState(1);
  const [transitioning, setTransitioning] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(true);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (isVisibleRef.current) {
        setTransitioning(true);
        setCurrent((prev) => prev + 1);
      }
    }, 5000);
  };

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.width = `${total * 100}%`;
    }
    if (sectionRef.current) {
      sectionRef.current.style.setProperty("--slider-slide-width", `${100 / total}%`);
    }
  }, []);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${current * (100 / total)}%)`;
      trackRef.current.style.transition = transitioning ? "transform 700ms ease-in-out" : "none";
    }
  }, [current, transitioning]);

  useEffect(() => {
    startTimer();

    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setTransitioning(true);
        startTimer();
      } else {
        if (timerRef.current) clearInterval(timerRef.current);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleTransitionEnd = () => {
    if (current === 0) {
      setTransitioning(false);
      setCurrent(total - 2);
    } else if (current === total - 1) {
      setTransitioning(false);
      setCurrent(1);
    }
  };

  const prev = () => { setTransitioning(true); setCurrent(current - 1); startTimer(); };
  const next = () => { setTransitioning(true); setCurrent(current + 1); startTimer(); };

  return (
    <section ref={sectionRef} className="relative h-[500px] md:h-[600px] overflow-hidden">
      <div
        ref={trackRef}
        className="slider-track flex h-full"
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((src, i) => (
          <div key={i} className="slider-slide relative h-full">
            <img
              src={src}
              alt={`Slide ${i}`}
              className={`w-full h-full object-cover ${getImageClass(src)}`}
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        title="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors"
      >
        <ChevronLeft className="w-10 h-10" strokeWidth={1.5} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        title="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors"
      >
        <ChevronRight className="w-10 h-10" strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default HeroSlider;
