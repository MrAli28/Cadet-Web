import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 134, label: "International University Acceptances 2025" },
  { value: 100, label: "Cambridge O-Level Results 2025", suffix: "%" },
  { value: 100, label: "Cambridge A-Level Results 2025", suffix: "%" },
  { value: 1560, label: "SAT Highest Individual Score" },
];

const CountUp = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const StatsSection = () => {
  return (
    <section
      className="relative py-36 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/group-picture.jpg')" }}
    >
      {/* Dark navy overlay */}
      <div className="absolute inset-0 bg-[#174604] opacity-90" />

      <div className="bcs-container relative z-10">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 px-6">
              <div className="text-white font-bold font-lufga text-7xl leading-none shrink-0">
                <CountUp end={stat.value} suffix={stat.suffix} />
                <div className="mt-2 w-full h-[3px] bg-bcs-gold" />
              </div>
              <div>
                <p className="text-white text-lg leading-snug">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-bcs-gold text-bcs-dark-text px-10 py-3 text-sm font-bold uppercase tracking-wider hover:brightness-95 transition-all duration-300"
          >
            School Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
