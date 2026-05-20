import PageBanner from "@/components/PageBanner";

const facultyMembers = [
  {
    name: "Ali Raza",
    role: "Principal",
    summary: "Leads the school with a focus on discipline, academic standards, and student growth.",
  },
  {
    name: "Ghulam Abbas",
    role: "Vice Principal",
    summary: "Supports academic supervision, student coordination, and daily school operations.",
  },
  {
    name: "Mujahid Numan Jatoi",
    role: "Admin Officer",
    summary: "Manages administrative affairs and ensures smooth institutional coordination.",
  },
  {
    name: "Roha Imdad",
    role: "Science Teacher",
    summary: "Teaches science with a focus on concept building, curiosity, and practical understanding.",
  },
  {
    name: "Sobia Rasheed",
    role: "English Teacher",
    summary: "Guides students in English language skills, communication, and academic writing.",
  },
  {
    name: "Sobia Rasheed",
    role: "Exam In-Charge",
    summary: "Oversees examinations and helps maintain an organized and disciplined assessment process.",
  },
  {
    name: "Muhammad Akram",
    role: "Writing Teacher",
    summary: "Helps students improve writing skills, expression, and academic composition.",
  },
  {
    name: "Tehmina",
    role: "Urdu Teacher",
    summary: "Teaches Urdu with a focus on language understanding, grammar, and reading skills.",
  },
  {
    name: "Sonia",
    role: "Science Teacher",
    summary: "Supports science learning through clear concept delivery and practical understanding.",
  },
];

const Faculty = () => {
  return (
    <div className="page-block">
      <PageBanner title="Faculty" subtitle="Members of faculty who guide students in academics, discipline, and character building." />
      <section className="py-14 bg-background">
        <div className="bcs-container space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyMembers.map((member) => (
              <article key={member.name} className="page-surface p-6 md:p-8">
                <p className="text-xs uppercase tracking-wider text-bcs-green font-bold mb-2">{member.role}</p>
                <h2 className="text-2xl font-bold text-bcs-dark-text mb-3">{member.name}</h2>
                <p className="text-bcs-body-text">{member.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
