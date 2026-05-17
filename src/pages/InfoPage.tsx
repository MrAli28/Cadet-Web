import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import PageBanner from "@/components/PageBanner";
import PageQuickLinks from "@/components/PageQuickLinks";
import { infoPages } from "@/data/infoPages";
import { navMegaMenus } from "@/data/siteContent";

const buildAdminNote = (title: string) =>
  `${title} section is maintained for official information flow, institutional clarity, and timely guidance for cadets, parents, alumni, and stakeholders.`;

const courseOfferings = [
  {
    stream: "Matric (9th & 10th) — Computer & Biology",
    core: "Mathematics, Computer (ICT), Biology / Science",
    support: "English, Urdu, Islamiat",
  },
  {
    stream: "Military & Cadet College Preparation",
    core: "Written test practice, Intelligence tests",
    support: "Interview coaching, Physical training, Personality development",
  },
  {
    stream: "PAF Colleges Preparation",
    core: "Aptitude & technical test training",
    support: "Physical preparedness, Interview practice",
  },
  {
    stream: "AFNS Nursing Preparation",
    core: "Biology, Basic medical knowledge",
    support: "English, Interview & medical screening guidance",
  },
  {
    stream: "ISSB Preparation",
    core: "Leadership tasks, Psychological testing",
    support: "Group exercises, Interview simulations",
  },
  {
    stream: "Airmen Entry Preparation",
    core: "Aptitude & technical test coaching",
    support: "Physical training & medical guidance",
  },
  {
    stream: "Airwoman Entry Preparation",
    core: "Aptitude & role-specific test coaching",
    support: "Physical training & medical guidance",
  },
];

const feeStructureRows = [
  { label: "PG to Prep", fee: "4,000/-" },
  { label: "1st to 4th", fee: "5,000/-" },
  { label: "5th", fee: "6,000/-" },
  { label: "Pre 7th to 10th", fee: "7,000/-" },
  { label: "Military Class", fee: "10,000/-" },
  { label: "Hostel Fee", fee: "30,000/-" },
];

const buildRelatedLinks = (pageId?: string) => {
  const activeMenu = navMegaMenus.find((menu) =>
    menu.links.some(
      (link) =>
        link.href === `/info/${pageId}` ||
        link.children?.some((child) => child.href === `/info/${pageId}`),
    ),
  );

  if (!activeMenu) {
    return Object.entries(infoPages)
      .filter(([slug]) => slug !== pageId)
      .slice(0, 6)
      .map(([slug, content]) => ({ label: content.title, href: `/info/${slug}` }));
  }

  return activeMenu.links.flatMap((link) => {
    const links = [{ label: link.label, href: link.href }];

    if (link.children) {
      links.push(...link.children.map((child) => ({ label: child.label, href: child.href })));
    }

    return links;
  });
};

const InfoPage = () => {
  const { pageId } = useParams();
  const page = pageId ? infoPages[pageId] : undefined;

  const relatedLinks = useMemo(() => buildRelatedLinks(pageId), [pageId]);

  

  if (!page) {
    return (
      <div className="page-block">
        <PageBanner title="Page Not Available" subtitle="The requested section is not published yet." />
        <section className="py-14 bg-bcs-light-gray">
          <div className="bcs-container">
            <div className="page-surface p-8 text-center space-y-4">
              <p className="text-bcs-body-text">
                This page could not be found. Please continue from the main information sections.
              </p>
              <div className="flex justify-center gap-3">
                <Link to="/" className="bcs-btn-primary">
                  Back to Home
                </Link>
                <Link to="/explore" className="bcs-btn-primary bg-bcs-gold text-bcs-dark-text hover:brightness-95">
                  Explore Sections
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (pageId === "career-counseling") {
    return (
      <div className="page-block">
        <PageBanner title={page.title} subtitle={page.subtitle} />
        <section className="py-14 bg-bcs-light-gray">
          <div className="bcs-container">
            <article className="page-surface p-6 md:p-8 space-y-6 max-w-4xl">
              {page.overview && <p className="text-bcs-body-text leading-relaxed">{page.overview}</p>}

              {page.sectionIntro && (
                <div>
                  <h3 className="text-xl font-bold text-bcs-dark-text">Why Career Counseling Matters</h3>
                  {page.sectionIntro.split("\n\n").map((p: string, idx: number) => (
                    <p key={idx} className="text-bcs-body-text leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {page.highlights && page.highlights.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-bcs-dark-text">Career Counseling Helps Students:</h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-bcs-body-text">
                    {page.highlights.map((h: string) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              {page.services && page.services.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-bcs-dark-text">Our Career Counseling Services</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {page.services.map((s: any) => (
                      <article key={s.title} className="bg-background border border-black/5 rounded-sm p-4">
                        <h5 className="font-bold text-bcs-dark-text">{s.title}</h5>
                        <p className="text-bcs-body-text mt-2">{s.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {page.futureCareers && page.futureCareers.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-bcs-dark-text">Future Career Planning</h4>
                  <p className="text-bcs-body-text mt-2">We help students explore modern and high-demand careers including:</p>
                  <ul className="flex flex-wrap gap-2 mt-3">
                    {page.futureCareers.map((c: string) => (
                      <li key={c} className="px-3 py-1 bg-white border rounded-sm text-sm text-bcs-body-text">{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {page.approach && (
                <div>
                  <h4 className="text-lg font-semibold text-bcs-dark-text">Our Approach</h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-bcs-body-text">
                    {page.approach.map((a: string) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              )}

              {page.benefits && (
                <div>
                  <h4 className="text-lg font-semibold text-bcs-dark-text">Benefits for Students</h4>
                  <ul className="list-none pl-0 mt-2 space-y-2 text-bcs-body-text">
                    {page.benefits.map((b: string) => (
                      <li key={b} className="flex items-center gap-3">
                        <span className="text-bcs-green">✔</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

                {page.mission && (
                  <div className="page-surface p-4">
                    <h4 className="text-lg font-semibold text-bcs-dark-text">Our Mission</h4>
                    <p className="text-bcs-body-text mt-2">{page.mission}</p>
                  </div>
                )}

              {page.parentsMessage && (
                <div className="page-surface p-4">
                  <h4 className="text-lg font-semibold text-bcs-dark-text">Message for Parents</h4>
                  <p className="text-bcs-body-text mt-2">{page.parentsMessage}</p>
                </div>
              )}

              {page.ctaLabel && (
                <div className="mt-4">
                  <Link to={page.ctaHref || "/contact"} className="bcs-btn-primary">
                    {page.ctaLabel}
                  </Link>
                </div>
              )}
            </article>
          </div>
        </section>
      </div>
    );
  }

  if (pageId === "position-holders") {
    return (
      <div className="page-block">
        <PageBanner title={page.title} subtitle={page.subtitle} />
        <section className="py-14 bg-bcs-light-gray">
          <div className="bcs-container">
            <article className="page-surface p-6 md:p-8">
              {page.overview && <p className="text-bcs-body-text leading-relaxed mb-6">{page.overview}</p>}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {(page.positionHolders || []).map((ph: any, idx: number) => (
                  <article key={idx} className="text-center bg-white border rounded-sm p-4">
                    <div className="h-44 w-full mb-3 overflow-hidden rounded-sm bg-gray-50">
                      <img src={ph.image} alt={ph.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-lg font-bold text-bcs-dark-text">{ph.name}</h3>
                    <p className="text-sm text-bcs-body-text">{ph.position}</p>
                    <p className="text-xs text-bcs-body-text/80 mt-1">{ph.course}</p>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }

  if (pageId === "founder-principal") {
    return (
      <div className="page-block">
        <PageBanner title={page.title} subtitle={page.subtitle} />
        <section className="py-14 bg-bcs-light-gray">
          <div className="bcs-container">
            <article className="page-surface p-6 md:p-8 space-y-6">
              <div className="max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-1">
                    <img src="/images/principal.png" alt="Ali Raza" className="w-full h-44 md:h-[260px] object-cover object-[center_30%] rounded-sm" />
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs uppercase tracking-[0.22em] font-bold text-bcs-green mb-3">Founder Principal</p>
                    <h2 className="text-2xl md:text-4xl font-bold text-bcs-dark-text mb-3">Ali Raza</h2>
                    <p className="text-sm md:text-base text-bcs-body-text leading-relaxed">
                      {page.overview}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 max-w-4xl">
                {page.sectionIntro?.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="text-bcs-body-text leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {page.highlights.map((highlight) => (
                  <article key={highlight} className="bg-background border border-black/10 rounded-sm p-5">
                    <p className="text-xs uppercase tracking-wider font-bold text-bcs-green mb-2">Focus Area</p>
                    <h3 className="text-lg font-bold text-bcs-dark-text">{highlight}</h3>
                  </article>
                ))}
              </div>

              <div className="page-surface p-6 md:p-8">
                <h3 className="text-xl font-bold text-bcs-dark-text mb-4">Operational Details</h3>
                <ul className="space-y-3 list-disc list-inside text-bcs-body-text leading-relaxed">
                  {page.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }

  if (pageId === "principals-of-bcs") {
    return (
      <div className="page-block">
        <PageBanner title={page.title} subtitle={page.subtitle} />
        <section className="py-14 bg-bcs-light-gray">
          <div className="bcs-container">
            <article className="page-surface p-6 md:p-8 space-y-6">
              <div className="max-w-4xl">
                <p className="text-xs uppercase tracking-[0.22em] font-bold text-bcs-green mb-3">Director</p>
                    <h2 className="text-2xl md:text-4xl font-bold text-bcs-dark-text mb-3">Mujahid Numan Jatoi</h2>
                <p className="text-sm md:text-base text-bcs-body-text leading-relaxed">
                  {page.overview}
                </p>
              </div>

              <div className="space-y-4 max-w-4xl">
                {page.sectionIntro?.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="text-bcs-body-text leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {page.highlights.map((highlight) => (
                  <article key={highlight} className="bg-background border border-black/10 rounded-sm p-5">
                    <p className="text-xs uppercase tracking-wider font-bold text-bcs-green mb-2">Focus Area</p>
                    <h3 className="text-lg font-bold text-bcs-dark-text">{highlight}</h3>
                  </article>
                ))}
              </div>

              <div className="page-surface p-6 md:p-8">
                <h3 className="text-xl font-bold text-bcs-dark-text mb-4">Operational Details</h3>
                <ul className="space-y-3 list-disc list-inside text-bcs-body-text leading-relaxed">
                  {page.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }

  if (pageId === "fee-structure") {
    return (
      <div className="page-block">
        <PageBanner title={page.title} subtitle={page.subtitle || "Fee schedule 2025-26"} />
        <section className="relative overflow-hidden bg-bcs-light-gray py-14">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bcs-dark-navy/10 to-transparent" />
          <div className="bcs-container relative space-y-8">
            <div className="grid grid-cols-1 xl:grid-cols-[360px_minmax(0,1fr)] gap-8 items-start">
              <aside className="space-y-6">
                <div className="page-surface p-6 text-center space-y-5">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-bcs-green/15 bg-white shadow-sm">
                    <img src="/images/logo1.png" alt="BCS logo" className="h-16 w-16 object-contain" />
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.24em] font-bold text-bcs-green">Fee Schedule</p>
                    <h2 className="text-3xl font-bold text-bcs-dark-text">2025-26</h2>
                    <p className="text-sm text-bcs-body-text">Admission free</p>
                  </div>

                  <div className="rounded-sm bg-bcs-dark-navy text-white p-4">
                    <p className="text-xs uppercase tracking-wider font-bold text-white/75">Facilitation Fee</p>
                    <p className="mt-2 text-3xl font-extrabold">Rs. 15000/-</p>
                  </div>

                  <div className="rounded-sm border border-bcs-green/20 bg-white p-4">
                    <p className="text-xs uppercase tracking-wider font-bold text-bcs-green">Security Fee</p>
                    <p className="mt-1 text-sm text-bcs-body-text">(Refundable)</p>
                    <p className="mt-2 text-3xl font-extrabold text-bcs-dark-text">Rs. 5000/-</p>
                  </div>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <p className="text-xs uppercase tracking-wider font-bold text-bcs-green">Quick Notes</p>
                  <ul className="space-y-2 text-sm text-bcs-body-text list-disc list-inside leading-relaxed">
                    <li>Fee details are presented for the 2025-26 admission cycle.</li>
                    <li>The hostel fee applies separately from the regular tuition categories.</li>
                    <li>Please confirm final payment instructions from the school office.</li>
                  </ul>
                </div>
              </aside>

              <article className="page-surface p-6 md:p-8 space-y-6">
                <div className="max-w-4xl">
                  <p className="text-xs uppercase tracking-[0.22em] font-bold text-bcs-green mb-3">Admission Fee Details</p>
                  <h2 className="text-2xl md:text-4xl font-bold text-bcs-dark-text mb-3">Fee Structure Breakdown</h2>
                  <p className="text-bcs-body-text leading-relaxed">
                    The schedule below lists the current charges for admission and regular academic categories.
                  </p>
                </div>

                <div className="overflow-hidden rounded-sm border border-black/10 bg-white">
                  <table className="w-full text-sm md:text-base">
                    <thead className="bg-bcs-dark-navy text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Class / Section</th>
                        <th className="px-4 py-3 text-left font-semibold">Fee</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/10 bg-white">
                      {feeStructureRows.map((row, index) => (
                        <tr key={row.label} className={index % 2 === 0 ? "bg-white" : "bg-bcs-light-gray/50"}>
                          <td className="px-4 py-4 font-semibold text-bcs-dark-text">{row.label}</td>
                          <td className="px-4 py-4 text-bcs-body-text">{row.fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <article className="bg-background border border-black/10 rounded-sm p-5">
                    <p className="text-xs uppercase tracking-wider font-bold text-bcs-green mb-2">Admission Free</p>
                    <h3 className="text-lg font-bold text-bcs-dark-text">No admission charges</h3>
                  </article>
                  <article className="bg-background border border-black/10 rounded-sm p-5">
                    <p className="text-xs uppercase tracking-wider font-bold text-bcs-green mb-2">Facilitation Fee</p>
                    <h3 className="text-lg font-bold text-bcs-dark-text">Rs. 15,000/-</h3>
                  </article>
                  <article className="bg-background border border-black/10 rounded-sm p-5">
                    <p className="text-xs uppercase tracking-wider font-bold text-bcs-green mb-2">Security Fee</p>
                    <h3 className="text-lg font-bold text-bcs-dark-text">Rs. 5,000/- refundable</h3>
                  </article>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-block">
      <PageBanner title={page.title} subtitle={page.subtitle} />
      <section className="py-14 bg-bcs-light-gray">
        <div className="bcs-container space-y-8">
          {pageId !== "courses-offered" && pageId !== "foreword-by-principal" && pageId !== "aim-objective" && pageId !== "overview-of-bcs" && pageId !== "campus-at-a-glance" && pageId !== "facilities" && pageId !== "current-administration" && pageId !== "cadet-life-in-our-campus" ? (
            <PageQuickLinks links={relatedLinks} />
          ) : null}

          {pageId === "courses-offered" ? (
            <div className="page-surface p-6 md:p-8 space-y-6">
              <div className="max-w-4xl">
                <p className="text-xs uppercase tracking-[0.22em] font-bold text-bcs-green mb-3">Admission</p>
                <h2 className="text-2xl md:text-3xl font-bold text-bcs-dark-text mb-3">Academic streams and subject combinations</h2>
                <p className="text-bcs-body-text leading-relaxed">
                  Basic Concept School (BCS) offers subject combinations that allow cadets to move toward medicine,
                  engineering, computer science, and humanities pathways with the right academic balance.
                </p>
              </div>

              <div className="overflow-hidden rounded-sm border border-black/10">
                <table className="w-full text-sm md:text-base">
                  <thead className="bg-bcs-dark-navy text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Programme</th>
                      <th className="px-4 py-3 text-left font-semibold">Core Subjects</th>
                      <th className="px-4 py-3 text-left font-semibold">Supporting Subjects</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-black/10">
                    {courseOfferings.map((row) => (
                      <tr key={row.stream} className="align-top">
                        <td className="px-4 py-4 font-semibold text-bcs-dark-text">{row.stream}</td>
                        <td className="px-4 py-4 text-bcs-body-text">{row.core}</td>
                        <td className="px-4 py-4 text-bcs-body-text">{row.support}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {page.highlights.map((highlight) => (
                  <article key={highlight} className="page-surface p-6 bg-background">
                    <p className="text-xs uppercase tracking-wider font-bold text-bcs-green mb-2">Focus Area</p>
                    <h3 className="text-lg font-bold text-bcs-dark-text">{highlight}</h3>
                  </article>
                ))}
              </div>

              <div className="page-surface p-6 md:p-8">
                <h2 className="text-2xl font-bold text-bcs-dark-text mb-4">Guidance Notes</h2>
                <ul className="space-y-2 list-disc list-inside text-bcs-body-text">
                  {page.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              {page.ctaLabel ? (
                <div className="page-surface p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <p className="text-bcs-body-text">Need help choosing the right stream for your background and goals?</p>
                  <Link to={page.ctaHref} className="bcs-btn-primary whitespace-nowrap">
                    {page.ctaLabel}
                  </Link>
                </div>
              ) : null}
            </div>
          ) : pageId === "foreword-by-principal" ? (
            <div className="page-surface p-6 md:p-8 space-y-6">
              <div className="max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-1">
                    <img src="/images/principal.png" alt="Principal" className="w-full h-44 md:h-[260px] object-cover object-[center_30%] rounded-sm" />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-lg md:text-xl font-bold text-bcs-dark-text mb-2">Principal's Message</h3>
                    <h4 className="text-base md:text-lg font-semibold text-bcs-green mb-3">Ali Raza</h4>
                    <div className="space-y-4">
                      {page.sectionIntro?.split("\n\n").map((paragraph, idx) => (
                        <p key={idx} className="text-bcs-body-text leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
                {page.highlights.map((highlight) => (
                  <article key={highlight} className="page-surface p-6">
                    <p className="text-xs uppercase tracking-wider font-bold text-bcs-green mb-2">Key Focus</p>
                    <h3 className="text-lg font-bold text-bcs-dark-text">{highlight}</h3>
                  </article>
                ))}
              </div>

              <div className="page-surface p-6 md:p-8 mt-6">
                <h2 className="text-2xl font-bold text-bcs-dark-text mb-4">Institutional Pillars</h2>
                <ul className="space-y-3 list-disc list-inside text-bcs-body-text">
                  {page.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="page-surface p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
                <p className="text-bcs-body-text">Explore our academic programs and institutional structure.</p>
                <Link to={page.ctaHref} className="bcs-btn-primary whitespace-nowrap">
                  {page.ctaLabel}
                </Link>
              </div>
              {/* Quick links intentionally removed for this page */}
            </div>
          ) : pageId === "aim-objective" ? (
            <div className="page-surface p-6 md:p-8 space-y-8">
              <div className="max-w-4xl space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-bcs-dark-text mb-3">Aims:</h2>
                  <p className="text-bcs-body-text leading-relaxed">
                    To cultivate intellectually robust, morally upright, and physically fit individuals who embody excellence in academics, character, discipline, and leadership. Basic Concept School aspires to shape its students into 21st century global leaders, university-ready, life-ready, and committed to serving Pakistan and humanity with integrity, courage and purpose.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bcs-dark-text mb-4">Objectives:</h2>
                  <ul className="space-y-3 list-disc list-inside text-bcs-body-text">
                    <li><strong>Quality Education:</strong> To provide high-quality, globally benchmarked education that fosters critical thinking, creativity, and problem-solving in line with national and international standards.</li>
                    <li><strong>Leadership Development:</strong> To instill leadership qualities and a strong sense of responsibility through structured training, student governance, and co-curricular engagement.</li>
                    <li><strong>Character Building:</strong> To promote integrity, resilience, humility, and respect for diversity through a values-driven environment grounded in universal principles.</li>
                    <li><strong>Physical and Mental Wellbeing:</strong> To ensure the physical fitness and mental resilience of cadets through a balanced regimen of sports, military drills, outdoor training, and wellness programs.</li>
                    <li><strong>Discipline and Self-Management:</strong> To inculcate habits of discipline, time management, self-management, and self-reliance essential for personal and professional success.</li>
                    <li><strong>Technology and Innovation:</strong> To integrate modern tools, digital literacy, and innovation into teaching and learning, preparing cadets for a rapidly evolving world.</li>
                    <li><strong>Service to Nation:</strong> To inspire cadets to serve Pakistan and humanity through their chosen fields of influence, with unwavering loyalty and commitment.</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : pageId === "campus-at-a-glance" ? (
            <div className="page-surface p-6 md:p-8 space-y-6">
              <div className="max-w-4xl space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-bcs-dark-text mb-4">Campus Virtual Tour</h2>
                  <div className="space-y-4 text-bcs-body-text leading-relaxed">
                    <p>
                      Basic Concept School is spread over more than 100 acres. It is bounded in the North by the Grand Trunk Road, presently called National Highway 5, which separates it from the historical city of Hassan Abdal which also covers its eastern area. To the South is the Haro River which is overlooked by a range of hills that provide a scenic background to the campus. The western fringe of the College, once vast open fields, are now rapidly being converted into housing schemes.
                    </p>
                    
                    <p>
                      The Campus itself is an optimum mix of open spaces and clusters of buildings and can be divided into three parts. The central part of the campus is organized around the Oval; the main Cricket ground which serves multiple purposes. The Oval is surrounded in the North by majestic Ayub Block in which all academic facilities are located. To the East and West of the Oval are the Wings; the nomenclature used in BCS for Cadets' hostels. To the South of the Oval are the Squash Courts, the Gym, the Swimming Pool, the Café and the Mess Halls.
                    </p>
                    
                    <p>
                      To the North-west of Ayub Block is the Administration Block housing the offices of the Principal and his staff. To the West of the Administration Block is the Main College Mosque. The Ayub Block has vast lawns in front of it which separate it from the building housing the Center for Wider Curriculum, the Staff Room, the Stationery Store, and the Hobbies Block. To the East of the Academics Block is the Faculty Residential area comprising of three multi-storied apartments. Between the residential complex and Ayub Block is the Staff Club which has Guest Rooms and Tennis Courts. In front of the Academic Block lies N. D. Hassan Square, which once featured a central fountain and was one of the proposed sites for the Shuhada Monument before its construction near the main gate in 2003.
                    </p>
                    
                    <p>
                      The Western area of the campus comprises the 16-beds College Hospital with assorted medical amenities, Bungalows for senior faculty members and lush sports grounds. To the south of the sports grounds is located the Staff Colony. The area further West of this is earmarked as land for expansion which aims to replicate the area around the Oval and, once completed, will double the strength of the students. Currently it houses the Riding Club.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : pageId === "facilities" ? (
            <div className="page-surface p-6 md:p-8 space-y-8">
              <div className="max-w-4xl">
                <h2 className="text-2xl font-bold text-bcs-dark-text mb-6">Facilities</h2>

                <p className="text-bcs-body-text leading-relaxed mb-6">
                  Our institution provides a complete learning ecosystem — modern classrooms and labs, a well-stocked library, sports infrastructure, secure boarding, and specialised preparation facilities for military and cadet college entry.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Academic Programs</h3>
                  <p className="text-sm text-bcs-body-text">
                    We provide a strong academic foundation from an early age to prepare students for future success in military and cadet institutions. Our qualified and experienced teachers focus on concept-based learning, discipline, and continuous academic improvement.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Cadet &amp; Military College Preparation</h3>
                  <p className="text-sm text-bcs-body-text">
                    Special preparation classes are conducted for admission tests and interviews of Military Colleges, Cadet Colleges, and PAF Colleges. Students receive complete guidance for written tests, intelligence tests, interviews, and personality development.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Admissions from Class 2</h3>
                  <p className="text-sm text-bcs-body-text">
                    Admissions are offered from Class 2 onward, where students are trained step-by-step to build confidence, discipline, leadership qualities, and academic strength.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Experienced Faculty</h3>
                  <p className="text-sm text-bcs-body-text">
                    Our highly experienced and dedicated teachers ensure quality education, individual attention, and proper mentoring for every student.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Hostel Facility</h3>
                  <p className="text-sm text-bcs-body-text">
                    A secure and comfortable hostel facility is available for students with a clean and disciplined environment, healthy meals, proper supervision, study support, and 24/7 care and security.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Personality Development</h3>
                  <p className="text-sm text-bcs-body-text">
                    We focus on developing leadership skills, confidence, communication skills, discipline, and moral values to help students succeed in both academic and professional life.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Physical Training &amp; Discipline</h3>
                  <p className="text-sm text-bcs-body-text">
                    Students are trained in a disciplined environment inspired by military values, including physical fitness activities and character-building programs.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Regular Testing &amp; Progress Monitoring</h3>
                  <p className="text-sm text-bcs-body-text">
                    Regular class tests, assessments, and performance reports help parents stay informed about their child’s progress and improvement.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Spoken English &amp; Communication Skills</h3>
                  <p className="text-sm text-bcs-body-text">
                    Special attention is given to spoken English, presentation skills, and communication development to build student confidence.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Safe &amp; Supportive Environment</h3>
                  <p className="text-sm text-bcs-body-text">
                    We provide a safe, caring, and motivating environment where students can learn, grow, and prepare for a bright future.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Career-Oriented Guidance</h3>
                  <p className="text-sm text-bcs-body-text">
                    Our institution guides students toward successful careers in military and professional fields through proper planning, preparation, and mentorship.
                  </p>
                </div>
              </div>
            </div>
          ) : pageId === "current-administration" ? (
            <div className="page-surface p-6 md:p-8 space-y-8">
              <div className="max-w-4xl">
                <h2 className="text-2xl font-bold text-bcs-dark-text mb-4">Leadership Team</h2>
                <p className="text-bcs-body-text leading-relaxed">
                  The administration ensures policy execution, student welfare, and operational efficiency to sustain a high-performance learning environment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="page-surface p-6 space-y-4 text-center">
                  <div className="w-full aspect-square rounded-sm overflow-hidden">
                    <img src="/images/thumbnail.png" alt="Staff Photo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-bcs-dark-text mb-1">Staff Name</h3>
                    <p className="text-sm text-bcs-green font-semibold mb-2">Position/Title</p>
                    <p className="text-xs text-bcs-body-text mb-3">Office Location</p>
                    <div className="space-y-1 text-xs">
                      <p className="text-bcs-body-text">
                        <a href="tel:+923195551000" className="hover:text-bcs-green">
                          0319-555-1000
                        </a>
                      </p>
                      <p className="text-bcs-body-text">
                        <a href="mailto:staff@bcs.edu.pk" className="hover:text-bcs-green">
                          staff@bcs.edu.pk
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="page-surface p-6 space-y-4 text-center">
                  <div className="w-full aspect-square rounded-sm overflow-hidden">
                    <img src="/images/thumbnail.png" alt="Staff Photo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-bcs-dark-text mb-1">Staff Name</h3>
                    <p className="text-sm text-bcs-green font-semibold mb-2">Position/Title</p>
                    <p className="text-xs text-bcs-body-text mb-3">Office Location</p>
                    <div className="space-y-1 text-xs">
                      <p className="text-bcs-body-text">
                        <a href="tel:+923195551000" className="hover:text-bcs-green">
                          0319-555-1000
                        </a>
                      </p>
                      <p className="text-bcs-body-text">
                        <a href="mailto:staff@bcs.edu.pk" className="hover:text-bcs-green">
                          staff@bcs.edu.pk
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="page-surface p-6 space-y-4 text-center">
                  <div className="w-full aspect-square rounded-sm overflow-hidden">
                    <img src="/images/thumbnail.png" alt="Staff Photo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-bcs-dark-text mb-1">Staff Name</h3>
                    <p className="text-sm text-bcs-green font-semibold mb-2">Position/Title</p>
                    <p className="text-xs text-bcs-body-text mb-3">Office Location</p>
                    <div className="space-y-1 text-xs">
                      <p className="text-bcs-body-text">
                        <a href="tel:+923195551000" className="hover:text-bcs-green">
                          0319-555-1000
                        </a>
                      </p>
                      <p className="text-bcs-body-text">
                        <a href="mailto:staff@bcs.edu.pk" className="hover:text-bcs-green">
                          staff@bcs.edu.pk
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="page-surface p-6 space-y-4 text-center">
                  <div className="w-full aspect-square rounded-sm overflow-hidden">
                    <img src="/images/thumbnail.png" alt="Staff Photo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-bcs-dark-text mb-1">Staff Name</h3>
                    <p className="text-sm text-bcs-green font-semibold mb-2">Position/Title</p>
                    <p className="text-xs text-bcs-body-text mb-3">Office Location</p>
                    <div className="space-y-1 text-xs">
                      <p className="text-bcs-body-text">
                        <a href="tel:+923195551000" className="hover:text-bcs-green">
                          0319-555-1000
                        </a>
                      </p>
                      <p className="text-bcs-body-text">
                        <a href="mailto:staff@bcs.edu.pk" className="hover:text-bcs-green">
                          staff@bcs.edu.pk
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="page-surface p-6 space-y-4 text-center">
                  <div className="w-full aspect-square rounded-sm overflow-hidden">
                    <img src="/images/thumbnail.png" alt="Staff Photo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-bcs-dark-text mb-1">Staff Name</h3>
                    <p className="text-sm text-bcs-green font-semibold mb-2">Position/Title</p>
                    <p className="text-xs text-bcs-body-text mb-3">Office Location</p>
                    <div className="space-y-1 text-xs">
                      <p className="text-bcs-body-text">
                        <a href="tel:+923195551000" className="hover:text-bcs-green">
                          0319-555-1000
                        </a>
                      </p>
                      <p className="text-bcs-body-text">
                        <a href="mailto:staff@bcs.edu.pk" className="hover:text-bcs-green">
                          staff@bcs.edu.pk
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="page-surface p-6 space-y-4 text-center">
                  <div className="w-full aspect-square bg-gradient-to-br from-bcs-light-gray to-gray-200 rounded-sm flex items-center justify-center">
                    <span className="text-bcs-body-text text-sm">Staff Photo</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-bcs-dark-text mb-1">Staff Name</h3>
                    <p className="text-sm text-bcs-green font-semibold mb-2">Position/Title</p>
                    <p className="text-xs text-bcs-body-text mb-3">Office Location</p>
                    <div className="space-y-1 text-xs">
                      <p className="text-bcs-body-text">
                        <a href="tel:+923195551000" className="hover:text-bcs-green">
                          0319-555-1000
                        </a>
                      </p>
                      <p className="text-bcs-body-text">
                        <a href="mailto:staff@bcs.edu.pk" className="hover:text-bcs-green">
                          staff@bcs.edu.pk
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-bcs-body-text">
                  More staff information can be added by updating the staff data in the admin section.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="page-surface p-6 md:p-8">
                <h2 className="text-2xl font-bold text-bcs-dark-text mb-3">Institutional Overview</h2>
                <p className="text-bcs-body-text">{page.overview}</p>
              </div>

              <div className="page-surface p-6 md:p-8">
                <h2 className="text-2xl font-bold text-bcs-dark-text mb-3">Section Context</h2>
                <p className="text-bcs-body-text">
                  {page.sectionIntro ??
                    `This page presents curated information for ${page.title.toLowerCase()} with the same institutional flow used across core sections of the website.`}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {page.highlights.map((highlight) => (
                  <article key={highlight} className="page-surface p-6">
                    <p className="text-xs uppercase tracking-wider font-bold text-bcs-green mb-2">Focus Area</p>
                    <h3 className="text-lg font-bold text-bcs-dark-text">{highlight}</h3>
                  </article>
                ))}
              </div>

              <div className="page-surface p-6 md:p-8">
                <h2 className="text-2xl font-bold text-bcs-dark-text mb-4">Operational Details</h2>
                <ul className="space-y-2 list-disc list-inside text-bcs-body-text">
                  {page.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="page-surface p-6 md:p-8">
                <h2 className="text-2xl font-bold text-bcs-dark-text mb-3">Administrative Note</h2>
                <p className="text-bcs-body-text">{page.adminNote ?? buildAdminNote(page.title)}</p>
              </div>

              {pageId !== "cadet-life-in-our-campus" ? (
                <div className="page-surface p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <p className="text-bcs-body-text">Need more official information on this section?</p>
                  <Link to={page.ctaHref} className="bcs-btn-primary whitespace-nowrap">
                    {page.ctaLabel}
                  </Link>
                </div>
              ) : null}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default InfoPage;
