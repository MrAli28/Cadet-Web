import PageBanner from "@/components/PageBanner";

const Alumni = () => {
  return (
    <div className="page-block">
      <PageBanner title="Alumni" subtitle="Our distinguished alumni and their achievements." />
      <section className="py-14 bg-bcs-light-gray">
        <div className="bcs-container space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-bcs-dark-text mb-4">Our distinguished alumni</h2>
            <p className="text-bcs-body-text mb-6">Celebrating the achievements of our graduates — below are a few of our alumni and their contributions. Click any profile to learn more.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Alumni Name 2", position: "Position", achievement: "Achievement", batch: "Batch" },
                { name: "Alumni Name 3", position: "Position", achievement: "Achievement", batch: "Batch" },
                { name: "Alumni Name 4", position: "Position", achievement: "Achievement", batch: "Batch" },
              ].map((al, idx) => (
                <article key={idx} className="page-surface p-4 text-center">
                  <div className="w-36 h-36 mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img src="/images/placeholder.png" alt={al.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-bcs-dark-text">{al.name}</h3>
                  <div className="mt-2 text-sm text-bcs-body-text space-y-1 text-center">
                    <div className="font-medium">{al.position}</div>
                    <div>{al.achievement || "—"}</div>
                    <div className="text-xs text-bcs-dark-text/80">{al.batch}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-bcs-dark-text mb-4">Parents' Remarks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <blockquote key={i} className="page-surface p-6">
                  <p className="text-bcs-body-text">“Parent remark placeholder — a short testimonial about their child's progress, discipline, or experience at the school.”</p>
                  <footer className="mt-4 text-sm font-semibold text-bcs-dark-text">Parent Name {i} — Parent of Batch Year</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
