import PageBanner from "@/components/PageBanner";

const admissionCycles = [
  {
    title: "Spring Intake",
    window: "January - March",
    note: "Best suited for students targeting annual competitive test preparation.",
  },
  {
    title: "Summer Intensive",
    window: "May - July",
    note: "Focused short-track revision and physical readiness support.",
  },
  {
    title: "Autumn Intake",
    window: "August - October",
    note: "Full academic onboarding with long-term mentoring plan.",
  },
];

const processTimeline = [
  {
    stage: "01. Registration",
    detail: "Submit student profile and basic eligibility details.",
  },
  {
    stage: "02. Document Review",
    detail: "Initial screening of academic and identity documents.",
  },
  {
    stage: "03. Written Test",
    detail: "Subject aptitude assessment and analytical performance check.",
  },
  {
    stage: "04. Interview + Fitness",
    detail: "Panel interview with physical readiness observation.",
  },
  {
    stage: "05. Merit Decision",
    detail: "Final evaluation, seat confirmation, and onboarding instructions.",
  },
];

const eligibilityTracks = [
  {
    level: "Junior Track",
    classes: "Class 6 - 8",
    focus: "Foundation in core subjects, discipline routines, and confidence building.",
  },
  {
    level: "Middle Track",
    classes: "Class 9 - 10",
    focus: "Academic rigor, test strategy, and structured interview preparation.",
  },
  {
    level: "Senior Track",
    classes: "Class 11 - 12",
    focus: "Advanced exam readiness, mentoring, and leadership conditioning.",
  },
];

const documents = [
  "Student B-Form or Birth Certificate copy",
  "Parent or Guardian CNIC copy",
  "Recent passport-size photographs",
  "Latest academic result card copy",
  "Medical fitness details (as required)",
];

const faqs = [
  {
    q: "Can I apply online?",
    a: "Yes. You can keep this block connected to your final web form workflow.",
  },
  {
    q: "Do all applicants go through testing?",
    a: "Yes. Written and interview stages are maintained for merit-based screening.",
  },
  {
    q: "Is physical assessment included?",
    a: "Yes. Fitness readiness is assessed according to admission policy requirements.",
  },
];

const Admissions = () => {
  return (
    <div className="page-block">
      <PageBanner title="Admissions" subtitle="Admission pathway, requirements, and process details." />
      <section className="py-14 bg-background">
        <div className="bcs-container space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {admissionCycles.map((cycle) => (
              <article key={cycle.title} className="page-surface p-6">
                <p className="text-xs uppercase tracking-wider font-bold text-bcs-green mb-2">{cycle.window}</p>
                <h2 className="text-xl font-bold text-bcs-dark-text mb-2">{cycle.title}</h2>
                <p className="text-sm text-bcs-body-text">{cycle.note}</p>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="page-surface p-6 md:p-8">
              <h2 className="text-2xl font-bold text-bcs-dark-text mb-4">Eligibility Tracks</h2>
              <div className="space-y-3">
                {eligibilityTracks.map((track) => (
                  <div key={track.level} className="bg-bcs-light-gray border rounded-sm p-4">
                    <p className="text-xs uppercase tracking-wider font-bold text-bcs-green mb-1">{track.classes}</p>
                    <h3 className="font-bold text-bcs-dark-text mb-1">{track.level}</h3>
                    <p className="text-sm text-bcs-body-text">{track.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="page-surface p-6 md:p-8">
              <h3 className="text-xl font-bold text-bcs-dark-text mb-3">Required Documents</h3>
              <ul className="space-y-2 text-bcs-body-text text-sm md:text-base list-disc list-inside">
                {documents.map((doc) => (
                  <li key={doc}>{doc}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="page-surface p-6 md:p-8">
            <h3 className="text-xl font-bold text-bcs-dark-text mb-4">Admission Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {processTimeline.map((item) => (
                <article key={item.stage} className="bg-bcs-light-gray border rounded-sm p-4">
                  <h4 className="font-bold text-bcs-dark-text mb-2 text-sm">{item.stage}</h4>
                  <p className="text-xs text-bcs-body-text leading-relaxed">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="page-surface p-6 md:p-8">
            <h3 className="text-xl font-bold text-bcs-dark-text mb-4">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {faqs.map((faq) => (
                <article key={faq.q} className="bg-bcs-light-gray rounded-sm border p-4">
                  <h4 className="font-bold text-bcs-dark-text mb-2">{faq.q}</h4>
                  <p className="text-sm text-bcs-body-text">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="page-surface p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-bcs-body-text font-semibold">Need help with admission eligibility or form guidance?</p>
              <p className="text-bcs-body-text text-sm">Our admissions office can guide you on track selection and timeline planning.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/contact" className="bcs-btn-primary whitespace-nowrap">
                Get Admission Help
              </a>
              <a href="/academics" className="bcs-btn-primary whitespace-nowrap bg-bcs-gold text-bcs-dark-text hover:brightness-95">
                View Academics
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
