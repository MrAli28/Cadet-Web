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
    stream: "Pre-Engineering",
    core: "Mathematics, Physics, Chemistry",
    support: "English Language, Urdu, Global Perspectives, Computer Science, Biology",
  },
  {
    stream: "A-Level - Computer Science & Information Technology",
    core: "Mathematics, Physics, Computer Science",
    support: "Chemistry, Biology, English Language, Urdu, Global Perspectives",
  },
  {
    stream: "Pre-Medical",
    core: "Biology, Physics, Chemistry",
    support: "Mathematics, English Language, Urdu, Global Perspectives, Computer Science",
  },
  {
    stream: "A-Level - Social Sciences & Humanities",
    core: "English Language, Urdu, Global Perspectives",
    support: "Mathematics, Physics, Chemistry, Computer Science, Biology",
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
                    <img src="/images/principal.png" alt="Syed Alamdar Hussain Shah" className="w-full h-44 md:h-[260px] object-cover object-[center_30%] rounded-sm" />
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs uppercase tracking-[0.22em] font-bold text-bcs-green mb-3">Founder Principal</p>
                    <h2 className="text-2xl md:text-4xl font-bold text-bcs-dark-text mb-3">Syed Alamdar Hussain Shah</h2>
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
                <h2 className="text-2xl md:text-4xl font-bold text-bcs-dark-text mb-3">Syed Amjad Hussain Shah</h2>
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
          {pageId !== "courses-offered" && pageId !== "foreword-by-principal" && pageId !== "aim-objective" && pageId !== "overview-of-bcs" && pageId !== "campus-at-a-glance" && pageId !== "facilities" && pageId !== "current-administration" ? (
            <PageQuickLinks links={relatedLinks} />
          ) : null}

          {pageId === "courses-offered" ? (
            <div className="page-surface p-6 md:p-8 space-y-6">
              <div className="max-w-4xl">
                <p className="text-xs uppercase tracking-[0.22em] font-bold text-bcs-green mb-3">Admission</p>
                <h2 className="text-2xl md:text-3xl font-bold text-bcs-dark-text mb-3">Academic streams and subject combinations</h2>
                <p className="text-bcs-body-text leading-relaxed">
                  Bahar Cadet School (BCS) offers subject combinations that allow cadets to move toward medicine,
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

              <div className="page-surface p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p className="text-bcs-body-text">Need help choosing the right stream for your background and goals?</p>
                <Link to={page.ctaHref} className="bcs-btn-primary whitespace-nowrap">
                  {page.ctaLabel}
                </Link>
              </div>
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
                    <h4 className="text-base md:text-lg font-semibold text-bcs-green mb-3">Syed Alamdar Hussain Shah</h4>
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
                    To cultivate intellectually robust, morally upright, and physically fit individuals who embody excellence in academics, character, discipline, and leadership. Bahar Cadet School aspires to shape its students into 21st century global leaders, university-ready, life-ready, and committed to serving Pakistan and humanity with integrity, courage and purpose.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-bcs-dark-text mb-4">Objectives:</h2>
                  <ul className="space-y-3 list-disc list-inside text-bcs-body-text">
                    <li><strong>Academic Excellence:</strong> To provide high-quality, globally benchmarked education that fosters critical thinking, creativity, and problem-solving in line with national and international standards.</li>
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
                      Bahar Cadet School is spread over more than 100 acres. It is bounded in the North by the Grand Trunk Road, presently called National Highway 5, which separates it from the historical city of Hassan Abdal which also covers its eastern area. To the South is the Haro River which is overlooked by a range of hills that provide a scenic background to the campus. The western fringe of the College, once vast open fields, are now rapidly being converted into housing schemes.
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
                <h2 className="text-2xl font-bold text-bcs-dark-text mb-6">World Class Teaching, Learning & Boarding Facilities</h2>
                
                <p className="text-bcs-body-text leading-relaxed mb-8">
                  The College is spread over an area of 86 acres. This includes a huge Academic Block that stands at a higher level, overlooking the six wings or hostels that are lying behind it, on a slanting slope, namely, Jinnah, Haider, Iqbal, Omar, Liaqat and Aurangzeb. On the far end of Academics Block, lies the swimming pool and just beside it is the College mess, which consists of two big halls. There is a College cafeteria and bakery just behind the mess. The College has big playing fields and games played on these grounds include cricket, hockey, football, basketball, volleyball. Furthermore, swimming is held seasonally, whereas horse riding is a convention in BCS that is held almost throughout the year.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Hostels</h3>
                  <p className="text-sm text-bcs-body-text">
                    The college comprises six hostels built around an oval. Each hostel hosts about 90 cadets. It is supervised by a House Master, an Assistant House Master, a House Tutor & an Assistant House Tutor. Evening preps enhance the effect of boarding and the House Staff render great services in guiding the boarding cadets. Each hostel will soon have ten latest computers with hi-speed internet WIFI connection. The facilities of washing, ironing & cleaning are available to all the cadets. Social evenings & dinner nights heighten the effect of boarding life.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Sports Fields</h3>
                  <p className="text-sm text-bcs-body-text">
                    Afternoon games, regular drill and physical training are compulsory for all the cadets. The college is well equipped with a number of playing fields including cricket, hockey and soccer fields. Moreover, six basketball and two volleyball courts cater to the cadets' needs. Besides these facilities, individual enrollments for games such as lawn tennis and squash are available for the staff and cadets.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Swimming</h3>
                  <p className="text-sm text-bcs-body-text">
                    The college swimming pool measures 100×200 meters allowing coaching of swimming in a more professional and confident way. The shallow section is 4 feet deep while the deep section is 13 feet deep. Inter-wing Swimming competitions are held annually. Organized swimming practice continues throughout the summer term. Expert staff along with an officer remain on duty during swimming practice to ensure maximum utility of this facility.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Riding</h3>
                  <p className="text-sm text-bcs-body-text">
                    Riding is a permanent feature of the life in Bahar Cadet School. Trained military staff is available for those who aspire to gallop. This club provides support and encouragement to young riders who not only learn the basics of riding but also show their talents in riding on various events taking place in college.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Gymnasium</h3>
                  <p className="text-sm text-bcs-body-text">
                    The health and fitness issues are our utmost priority which is met through a health and fitness centre. The college gymnasium is furnished with latest exercise equipment and our trained staff who guide the cadets to the right strength training techniques. Cadets can review their own strengths and utilize this facility as per need.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Mess</h3>
                  <p className="text-sm text-bcs-body-text">
                    Two dining halls meet the dining needs of the cadets each with a capacity of hosting 250 cadets each. Our highly trained staff and a variety of cuisine make life at college an entirely different experience.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Mosque</h3>
                  <p className="text-sm text-bcs-body-text">
                    The College Mosque is the center of all religious activities. It has the capacity to accommodate about 1000 Namazies at a time. Besides the daily 5 times prayers, Jumma Prayers, Tarawih Prayers in Ramadan and Eid Prayers are also offered in this beautiful mosque. Moreover, other religious functions like Eid-Milad-un-Nabi, Shab-e-Barat, 27 Ramadan-ul-Mubarak etc are also performed here. A regular Khateeb and Moazzan (both Hafiz e Quraan) have been appointed to fulfill these needs.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Hospital</h3>
                  <p className="text-sm text-bcs-body-text">
                    The College Hospital has eighteen beds ward for the Cadets. It is looked after by a College resident Medical Officer who is assisted by other medical staff. All minor ailments are treated at the hospital but for specialized treatment and in case of serious illness or injury the patients are referred to appropriate medical facilities according to the entitlement of the Cadet's parents.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Library</h3>
                  <p className="text-sm text-bcs-body-text">
                    Library is a resource centre for all types of learning and research purposes. The college library has a huge stock of books almost on all subjects. The librarian plays the role of a learning facilitator. Furthermore hi-speed internet helps learning far easier and faster. In addition, E-book bank in future will look after the individual needs of the cadets more precisely to broader spectrum.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Electricity Backup</h3>
                  <p className="text-sm text-bcs-body-text">
                    A heavy, automatic and efficient generator meets the needs of power crisis thus providing electricity to the whole college at need times.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Security System</h3>
                  <p className="text-sm text-bcs-body-text">
                    The college is completely secured and well guarded through an efficient security system. The safety and security of the cadets is our first rated priority. Every effort has been made to ensure foolproof security and further efforts are in the pipeline.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">High Speed Internet</h3>
                  <p className="text-sm text-bcs-body-text">
                    The College has got 100 MBPs Fiber Optic internet connection. The whole Education Block, all the 6 hostels and the houses of Faculty Members are connected through Fiber Optic/Cat 6 Cables to benefit from this high speed internet.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Language Lab</h3>
                  <p className="text-sm text-bcs-body-text">
                    A new Language Lab has been setup in the Academic Block. The lab is fully supported with the latest computers. It is equipped with high speed wi-fi internet and multimedia facilities. Licensed Berlitz software has been installed and the lab is fully functional.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Computer Lab</h3>
                  <p className="text-sm text-bcs-body-text">
                    The College has a spacious, well-equipped and Air-Conditioned Computer Lab situated in Ayub Block. The Lab is equipped with thirty five P-IV Dual Core computers for students and one for office work; all connected to the Main Server and provide full multimedia support. It also provides the facility of shared Printers and Scanners. Multimedia Projectors are also installed in the Lab to make the lectures more interesting and interactive.
                  </p>
                </div>

                <div className="page-surface p-6 space-y-3">
                  <h3 className="text-lg font-bold text-bcs-dark-text">Bio Lab</h3>
                  <p className="text-sm text-bcs-body-text">
                    Bio Lab is a facility that provides controlled conditions in which scientific research, experiments, and measurement may be performed. The Biology lab is a staple of most high school/Colleges curriculum. Students learn not only about nature and evolution, but also about the scientific process and proper procedure for conducting experiments.
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

              <div className="page-surface p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p className="text-bcs-body-text">Need more official information on this section?</p>
                <Link to={page.ctaHref} className="bcs-btn-primary whitespace-nowrap">
                  {page.ctaLabel}
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default InfoPage;
