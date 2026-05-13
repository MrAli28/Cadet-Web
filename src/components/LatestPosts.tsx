import { PlayCircle } from "lucide-react";

const posts = [];

const LatestPosts = () => {
  return (
    <section className="py-16 bg-bcs-light-gray">
      <div className="bcs-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: Student Development at BCS */}
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

          {/* Right: Latest Posts */}
          <div>
            <h2 className="text-2xl font-bold text-bcs-dark-text font-lufga mb-6">Latest Posts</h2>
            <div className="bg-white rounded-sm shadow-sm p-6 space-y-6">
              {posts.map((post, i) => (
                <div key={i} className={`flex gap-4 group cursor-pointer ${i < posts.length - 1 ? "pb-6 border-b border-gray-100" : ""}`}>
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-24 h-20 object-cover rounded-sm flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-base font-bold text-bcs-dark-text group-hover:text-bcs-green transition-colors font-lufga">
                      {post.title}
                    </h3>
                    <p className="text-xs text-bcs-gold font-semibold mt-1 italic">{post.date}</p>
                    <p className="text-sm text-bcs-body-text mt-1 line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="mt-6 inline-block bg-[#174606] text-white px-10 py-3 text-sm font-bold uppercase tracking-wider hover:bg-bcs-green transition-colors duration-300">
              VIEW ALL
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
