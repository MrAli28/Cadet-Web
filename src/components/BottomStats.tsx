import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 550, label: "Registered Students" },
  { value: 120, label: "Graduates every Year" },
  { value: 40, label: "Professional Instructors" },
  { value: 6, label: "House Wings" },
];

const CountUp = ({ end }: { end: number }) => {
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
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [started, end]);

  return <div ref={ref} className="text-4xl md:text-5xl font-bold font-lufga text-primary-foreground">{count}</div>;
};

const BottomStats = () => {
  return (
    <section className="py-16 bg-bcs-navy">
      <div className="bcs-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <CountUp end={stat.value} />
              <p className="text-primary-foreground/70 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomStats;
