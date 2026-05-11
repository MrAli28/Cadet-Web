import PageBanner from "@/components/PageBanner";
import PageQuickLinks from "@/components/PageQuickLinks";

const values = [
  "Responsibility",
  "Honesty",
  "Care",
  "Tolerance",
  "Unity",
  "Discipline",
  "Excellence",
  "Student Centered",
  "Continuous Learning",
];

const About = () => {
  return (
    <div className="page-block">
      <PageBanner title="About BCS" subtitle="Institution profile, history, vision, mission, and leadership overview." />
      <section className="py-14 bg-bcs-light-gray">
        <div className="bcs-container space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 page-surface p-6 md:p-8">
              <h2 className="text-2xl font-bold text-bcs-dark-text mb-4">About Bahar Cadet School</h2>
              <p className="text-bcs-body-text mb-4">
                Bahar Cadet School is focused on preparing students for highly competitive military college admissions
                through a disciplined and supportive learning environment.
              </p>
              <p className="text-bcs-body-text">
                The institution combines academic excellence, character development, and physical readiness to build
                confident and capable future leaders.
              </p>
            </div>
            <PageQuickLinks
              links={[
                { label: "Leadership", href: "/faculty" },
                { label: "Admissions", href: "/admissions" },
                { label: "Academics", href: "/academics" },
                { label: "Contact", href: "/contact" },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="page-surface p-6 md:p-8">
              <h3 className="text-xl font-bold text-bcs-dark-text mb-3">Vision</h3>
              <p className="text-bcs-body-text">
                To cultivate a vibrant and dynamic young generation prepared to become the leaders of tomorrow.
              </p>
            </article>

            <article className="page-surface p-6 md:p-8">
              <h3 className="text-xl font-bold text-bcs-dark-text mb-3">Mission</h3>
              <p className="text-bcs-body-text">
                To provide comprehensive and effective guidance for army college preparation through academics,
                psychological readiness, and physical training.
              </p>
            </article>
          </div>

          <div className="page-surface p-6 md:p-8">
            <h3 className="text-xl font-bold text-bcs-dark-text mb-4">Core Values</h3>
            <div className="flex flex-wrap gap-2">
              {values.map((value) => (
                <span key={value} className="px-3 py-2 text-xs md:text-sm font-semibold bg-bcs-light-gray rounded-sm border">
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
