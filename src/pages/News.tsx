import PageBanner from "@/components/PageBanner";

const posts = [
  {
    title: "Entry Test Schedule Update",
    date: "April 2026",
    text: "Updated timeline for written assessment and interview rounds.",
  },
  {
    title: "Merit List Notification",
    date: "March 2026",
    text: "Provisional merit list published for review and final confirmation.",
  },
  {
    title: "Training Camp Orientation",
    date: "February 2026",
    text: "Orientation briefing for new intake and parent information session.",
  },
];

const News = () => {
  return (
    <div className="page-block">
      <PageBanner title="News & Updates" subtitle="Announcements, notices, test schedules, and institutional updates." />
      <section className="py-14 bg-background">
        <div className="bcs-container space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {posts.map((post) => (
              <article key={post.title} className="page-surface p-6">
                <p className="text-xs uppercase tracking-wider text-bcs-green font-bold mb-2">{post.date}</p>
                <h2 className="text-lg font-bold text-bcs-dark-text mb-2">{post.title}</h2>
                <p className="text-sm text-bcs-body-text">{post.text}</p>
              </article>
            ))}
          </div>

          <div className="page-surface p-6 md:p-8">
            <h3 className="text-xl font-bold text-bcs-dark-text mb-3">Official Notice</h3>
            <p className="text-bcs-body-text">
              This page structure supports static posts now and can be connected to API or CMS later without layout
              changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
