import { PlayCircle } from "lucide-react";

const LatestPosts = () => {
  return (
    <section className="py-16 bg-bcs-light-gray">
      <div className="bcs-container">
        <div className="max-w-2xl">
          {/* Student Development at BCS */}
          <div>
            <h2 className="text-2xl font-bold text-bcs-dark-text font-lufga mb-6">Balanced Student Life at BCS</h2>
            <div className="relative group cursor-pointer overflow-hidden rounded-sm">
              <img
                src="/images/tour-07.png"
                alt="Balanced student life at BCS"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-bcs-dark-navy/50 flex items-center justify-center">
                <PlayCircle className="w-16 h-16 text-bcs-gold opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
