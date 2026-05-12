export type InfoPageContent = {
  title: string;
  subtitle: string;
  overview: string;
  sectionIntro?: string;
  highlights: string[];
  points: string[];
  adminNote?: string;
  ctaLabel: string;
  ctaHref: string;
};

export const infoPages: Record<string, InfoPageContent> = {
  "foreword-by-principal": {
    title: "Foreword by the Principal",
    subtitle: "Syed Alamdar Hussain Shah",
    overview:
      "Established in 1954 as the first institution of its kind in Pakistan, Bahar Cadet School has set the bar for high-quality boarding schools for boys.",
    sectionIntro:
      "Based on the British Public School pattern with a highly regimented and demanding atmosphere, BCS aims at training young men to join the armed forces of Pakistan as well as other disciplines. We focus on year-round, holistic, and balanced curricular and wider curriculum activities with emphasis on leadership training spanning the spectrum. The objectives of academic excellence, character development, personality shaping, inculcating universal values, and citizenship are kept foremost as core principles in shaping our students.\n\nThe outcome of this environment during these impactful years has brought our students to consistently rise to the top and exhibit excellence as second nature. It is for this reason that BCS claims to be \"shaping excellence\" as its creed.\n\nOver the past seven decades, our alumni have not only made impactful contributions to the national mainstream but have also crossed international boundaries and are now playing significant roles at the global level. Keeping pace with modern imperatives, BCS is well on its way to establishing itself as a globally-competitive international school.\n\nOur aim is to shape our cohorts towards becoming global leaders in their chosen fields of influence. Understanding the complexity of the global village, we encourage our students to venture beyond national boundaries and partake in the cosmopolitan, interconnected world. It is with much humility and pride that we claim the sobriquet of \"Second to None\".",
    highlights: ["Holistic Development", "Leadership Training", "Global Outlook"],
    points: [
      "Rigorous academics combined with structured character building and discipline.",
      "Continuous mentoring and wider-curriculum activities build confidence, integrity, and service-oriented citizenship.",
      "Preparation for leadership roles in both military and civilian life with an international outlook.",
    ],
    ctaLabel: "Overview of BCS",
    ctaHref: "/info/overview-of-bcs",
  },
  "aim-objective": {
    title: "Aim & Objective",
    subtitle: "Institutional aims and core objectives.",
    overview:
      "To cultivate intellectually robust, morally upright, and physically fit individuals who embody excellence in academics, character, discipline, and leadership. Bahar Cadet School aspires to shape its students into 21st century global leaders — university-ready, life-ready, and committed to serving Pakistan and humanity with integrity, courage and purpose.",
    sectionIntro:
      "The college pursues a values-driven education that balances academic rigour with character development, leadership training, physical fitness, and technological readiness. The following objectives guide our institutional programmes and student experiences.",
    highlights: ["Academic Excellence", "Leadership Development", "Character Building"],
    points: [
      "Academic Excellence: Provide high-quality, globally-benchmarked education that fosters critical thinking, creativity, and problem-solving in line with national and international standards.",
      "Leadership Development: Instill leadership qualities and a strong sense of responsibility through structured training, student governance, and co-curricular engagement.",
      "Character Building: Promote integrity, resilience, humility, and respect for diversity through a values-driven environment grounded in universal principles.",
      "Physical and Mental Wellbeing: Ensure physical fitness and mental resilience through sports, military drills, outdoor training, and wellness programmes.",
      "Discipline and Self-Management: Inculcate habits of discipline, time management, self-reliance and personal accountability essential for success.",
      "Technology and Innovation: Integrate modern tools, digital literacy, and innovation into teaching and learning to prepare cadets for a rapidly evolving world.",
      "Service to Nation: Inspire cadets to serve Pakistan and humanity through their chosen fields of influence, with unwavering loyalty and commitment.",
    ],
    ctaLabel: "Overview of BCS",
    ctaHref: "/info/overview-of-bcs",
  },
  history: {
    title: "History",
    subtitle: "A legacy institution shaping generations of cadets.",
    overview:
      "As one of the earliest premier residential institutions of its kind in Pakistan, BCS has maintained a long-standing tradition of excellence and service.",
    highlights: ["Historic institution", "Enduring legacy", "National contribution"],
    points: [
      "The college established standards that inspired many later institutions.",
      "Its alumni continue to serve across civil, military, and global sectors.",
      "Institutional values remain consistent across decades of development.",
    ],
    ctaLabel: "View Campus Life",
    ctaHref: "/campus-life",
  },
  "overview-of-bcs": {
    title: "Overview of BCS",
    subtitle: "Aims and Objectives",
    overview:
      "To cultivate intellectually robust, morally upright, and physically fit individuals who embody excellence in academics, character, discipline, and leadership. Bahar Cadet School aspires to shape its students into 21st century global leaders, university-ready, life-ready, and committed to serving Pakistan and humanity with integrity, courage and purpose.",
    sectionIntro:
      "The college pursues a values-driven education that balances academic rigour with character development, leadership training, physical fitness, and technological readiness. The following objectives guide our institutional programmes and student experiences.",
    highlights: ["Academic Excellence", "Leadership Development", "Character Building"],
    points: [
      "Academic Excellence: To provide high-quality, globally benchmarked education that fosters critical thinking, creativity, and problem-solving in line with national and international standards.",
      "Leadership Development: To instill leadership qualities and a strong sense of responsibility through structured training, student governance, and co-curricular engagement.",
      "Character Building: To promote integrity, resilience, humility, and respect for diversity through a values-driven environment grounded in universal principles.",
      "Physical and Mental Wellbeing: To ensure the physical fitness and mental resilience of cadets through a balanced regimen of sports, military drills, outdoor training, and wellness programmes.",
      "Discipline and Self-Management: To inculcate habits of discipline, time management, self-reliance and personal accountability essential for personal and professional success.",
      "Technology and Innovation: To integrate modern tools, digital literacy, and innovation into teaching and learning, preparing cadets for a rapidly evolving world.",
      "Service to Nation: To inspire cadets to serve Pakistan and humanity through their chosen fields of influence, with unwavering loyalty and commitment.",
    ],
    ctaLabel: "Aim & Objective",
    ctaHref: "/info/aim-objective",
  },
  "founder-principal": {
    title: "Founder Principal",
    subtitle: "BCS > Founder Principal",
    overview:
        "Bahar Cadet School (BCS) was founded by Syed Alamdar Hussain Shah, a distinguished veteran with an illustrious career in the Pakistan Army. With extensive experience in military service, Mr. Shah has trained thousands of army officers, imparting them with the skills and values essential for their roles.",
      sectionIntro:
        "His dedication and excellence were recognized on an international scale when he received a performance medal from the United Nations for his exemplary service. Throughout his career, Mr. Shah has garnered numerous accolades from various departments of the Pakistan Army, reflecting his commitment and contributions to the nation's defense.\n\nUnder his visionary leadership, BCS is dedicated to shaping the next generation of military leaders, ensuring they are well-prepared to uphold the highest standards of excellence and integrity.",
      highlights: ["Military Excellence", "Global Recognition", "Visionary Leadership"],
    points: [
        "Distinguished Pakistan Army veteran with extensive training and leadership experience.",
        "Trained thousands of army officers in military discipline, strategy, and values.",
        "Received a United Nations performance medal for exemplary international service.",
        "Garnered numerous accolades from various departments of the Pakistan Army.",
        "Established BCS on principles of merit, discipline, and service to the nation.",
        "Dedicated to shaping the next generation of military and civilian leaders.",
        "His legacy of service, discipline, and dedication is the cornerstone of BCS.",
    ],
    ctaLabel: "Read About College History",
    ctaHref: "/info/history",
  },
  "principals-of-bcs": {
    title: "Syed Amjad Hussain Shah – Director",
    subtitle: "The academic leader guiding Bahar Cadet School.",
    overview:
      "Syed Amjad Shah is the esteemed Director of Bahar Cadet School (BCS), renowned for his academic brilliance and boundless enthusiasm. Driven by a mission to prepare students for the challenges of military colleges, Mr. Shah brings a multifaceted approach to education.",
    sectionIntro:
      "He ensures that students receive comprehensive training in academics, psychology, physical fitness, and mental preparation, essential for excelling in army college entrance exams.\n\nUnder his dynamic leadership, BCS has achieved outstanding results, with students consistently performing at the highest levels. Mr. Shah's passion and commitment to his role are evident in his tireless efforts and innovative methods, making him a pivotal figure in the success and growth of Bahar Cadet School.",
    highlights: ["Academic Brilliance", "Student Preparation", "Dynamic Leadership"],
    points: [
      "Esteemed Director of Bahar Cadet School with a strong academic vision.",
      "Focuses on preparing students for the challenges of military colleges.",
      "Provides training in academics, psychology, physical fitness, and mental preparation.",
      "Ensures cadets are ready to excel in army college entrance exams.",
      "Leads BCS with innovative methods, discipline, and unwavering commitment.",
      "Has helped the school achieve outstanding results and high-level student performance.",
    ],
    ctaLabel: "See Current Administration",
    ctaHref: "/info/current-administration",
  },
  "campus-at-a-glance": {
    title: "Campus at a Glance",
    subtitle: "A quick view of facilities, hostels, and learning spaces.",
    overview:
      "BCS is designed as a complete residential learning ecosystem with academic blocks, boarding wings, sports grounds, and activity zones.",
    highlights: ["86-acre spread", "Residential wings", "Academic and sports blocks"],
    points: [
      "Academic, residential, and sports infrastructure is integrated for balanced growth.",
      "Boarding facilities support routine, discipline, and peer learning.",
      "The campus design promotes safety, structure, and active cadet life.",
    ],
    ctaLabel: "Virtual Campus Experience",
    ctaHref: "/campus-life",
  },
  facilities: {
    title: "Facilities",
    subtitle: "Academic, residential, and co-curricular infrastructure.",
    overview:
      "The college provides modern classrooms, labs, library resources, sports infrastructure, and well-managed boarding facilities.",
    highlights: ["Labs and library", "Sports grounds", "Boarding and mess systems"],
    points: [
      "Dedicated facilities support both classroom learning and skill development.",
      "Sports and activity spaces promote physical wellness and teamwork.",
      "Residential services are structured for comfort, discipline, and care.",
    ],
    ctaLabel: "Explore Wider Curriculum",
    ctaHref: "/",
  },
  "current-administration": {
    title: "Current Administration",
    subtitle: "Leadership team managing academic and campus operations.",
    overview:
      "The administration ensures policy execution, student welfare, and operational efficiency to sustain a high-performance learning environment.",
    highlights: ["Operational leadership", "Student welfare", "Academic oversight"],
    points: [
      "Administrative offices coordinate academics, cadet life, and support services.",
      "Routine quality checks maintain educational and residential standards.",
      "Leadership engagement strengthens communication across stakeholders.",
    ],
    ctaLabel: "Contact Office",
    ctaHref: "/contact",
  },
  "courses-offered": {
    title: "Courses Offered",
    subtitle: "",
    overview: "",
    highlights: [],
    points: [],
    ctaLabel: "",
    ctaHref: "",
  },
  "admission-intake": {
    title: "Admission Intake",
    subtitle: "",
    overview: "",
    highlights: [],
    points: [],
    ctaLabel: "",
    ctaHref: "",
  },
  "admission-to-class-a-level": {
    title: "Admission to Class A-Level",
    subtitle: "Entry requirements, process and important dates for A-Level intake.",
    overview:
      "Admission to Class A-Level seeks academically prepared candidates with a solid subject foundation and readiness for a residential advanced-study environment. Selection is based on prior academic record, a written assessment, and an interview.",
    sectionIntro:
      "This page provides eligibility criteria, application steps, assessment format, document checklist, and post-selection instructions for A-Level applicants.",
    highlights: ["Eligibility & age guidance", "Written assessment & interview", "Document checklist"],
    points: [
      "Applicants should have completed relevant secondary qualifications (O-Levels / SSC or equivalent) with strong results in core subjects.",
      "Typical age range for A-Level intake is the late-teen years; specific limits are published with each intake notice.",
      "Shortlisting is based on prior results followed by a written admissions test and an interview where applicable.",
      "Submit certified copies of academic transcripts, identity documents, passport-size photographs, and any other documents requested in the admission notice.",
      "Successful candidates are required to confirm their place by the published deadline and follow reporting instructions for orientation and fee payment.",
    ],
    ctaLabel: "Apply Online",
    ctaHref: "/admissions",
  },
  "admission-to-class-o-level": {
    title: "Admission to Class O-Level",
    subtitle: "Entry requirements and process for O-Level intake.",
    overview:
      "Admission to Class O-Level is designed for candidates ready to join the foundational secondary track; selection prioritizes academic aptitude, behavioural fit for residential life, and potential for steady progress.",
    sectionIntro:
      "This page outlines eligibility, application steps, the assessment format, document checklist, and guidance for parents and applicants for O-Level admissions.",
    highlights: ["Eligibility & age guidance", "Assessment & interview", "Onboarding guidance"],
    points: [
      "Applicants should present prior school records showing consistent academic performance in core subjects.",
      "Age limits for each intake are stated in the official notice; please consult the current intake announcement.",
      "Shortlisting may include a basic written assessment and an interview with college staff to evaluate readiness for boarding school routines.",
      "Required documents typically include academic transcripts, birth certificate/B-Form, guardian ID, and passport-size photographs.",
      "Selected cadets must complete admission formalities, fee payment, and medical checks before reporting on the scheduled orientation date.",
    ],
    ctaLabel: "Apply Online",
    ctaHref: "/admissions",
  },
  "fee-structure": {
    title: "Fee Structure",
    subtitle: "Fee schedule 2025-26",
    overview: "",
    highlights: [],
    points: [],
    ctaLabel: "",
    ctaHref: "",
  },
  "academic-excellence": {
    title: "Academic Excellence",
    subtitle: "Performance culture driven by quality teaching and mentoring.",
    overview:
      "The college maintains strong outcomes through rigorous instruction, continuous evaluation, and targeted support for individual learners.",
    highlights: ["Result consistency", "Instruction quality", "Targeted support"],
    points: [
      "Department plans are aligned with measurable learning outcomes.",
      "Faculty review performance trends and strengthen support mechanisms.",
      "High standards are reinforced through mentoring and accountability.",
    ],
    ctaLabel: "View Position Holders",
    ctaHref: "/info/position-holders",
  },
  "position-holders": {
    title: "Position Holders",
    subtitle: "Celebrating top-performing cadets and academic achievers.",
    overview:
      "This section recognizes merit through annual and term-based distinctions that reflect discipline, consistency, and hard work.",
    highlights: ["Merit recognition", "Annual distinctions", "Achievement culture"],
    points: [
      "Cadets are acknowledged for outstanding board and internal results.",
      "Recognition motivates healthy competition and goal-oriented effort.",
      "Academic honors reflect both performance and personal discipline.",
    ],
    ctaLabel: "Academics Overview",
    ctaHref: "/academics",
  },
  "learning-resources": {
    title: "Learning Resources",
    subtitle: "Classroom support systems and academic tools.",
    overview:
      "BCS provides curated learning resources, guided material support, and subject reinforcement modules to improve student outcomes.",
    highlights: ["Resource support", "Guided learning", "Subject reinforcement"],
    points: [
      "Students access structured notes and reference material by department.",
      "Resource planning supports regular revision and conceptual retention.",
      "Faculty-assisted sessions help close individual learning gaps.",
    ],
    ctaLabel: "",
    ctaHref: "",
  },
  "community-service": {
  
    title: "Clubs & Societies",
    subtitle: "Interest-based platforms for creativity and collaboration.",
    overview:
      "Student clubs offer cadets opportunities to develop communication, innovation, and teamwork beyond classroom settings.",
    highlights: ["Student initiatives", "Skill enrichment", "Peer collaboration"],
    points: [
      "Clubs support debate, science, literature, arts, and technology engagement.",
      "Cadets learn event planning, coordination, and responsible participation.",
      "Activities reinforce confidence and healthy competition.",
    ],
    ctaLabel: "Campus Activities",
    ctaHref: "/campus-life",
  },
  // Duke of Edinburgh's Award removed
  "guidance-placement-cell": {
    title: "Guidance & Placement Cell",
    subtitle: "Academic and career guidance for informed choices.",
    overview:
      "The cell supports cadets with pathway counseling, university planning, and future-focused mentoring.",
    highlights: ["Career counseling", "University planning", "Mentored choices"],
    points: [
      "Counseling sessions support subject and career decision-making.",
      "Cadets receive guidance for applications, interviews, and readiness.",
      "Placement advising aligns student strengths with long-term goals.",
    ],
    ctaLabel: "SAT Support",
    ctaHref: "/info/sat",
  },
  mentorship: {
    title: "Mentorship",
    subtitle: "Structured guidance for academic and personal growth.",
    overview:
      "The mentorship framework pairs cadets with faculty guidance to support discipline, confidence, and performance continuity.",
    highlights: ["One-to-one guidance", "Progress monitoring", "Confidence building"],
    points: [
      "Mentors track cadet progress and provide timely interventions.",
      "Cadets receive support on routine, goals, and study habits.",
      "The system strengthens trust and positive student outcomes.",
    ],
    ctaLabel: "Social Emotional Learning",
    ctaHref: "/info/social-emotional-learning",
  },
  "round-square": {
    title: "Round Square",
    subtitle: "International outlook through experiential education values.",
    overview:
      "Round Square activities expose cadets to global perspectives through service, adventure, and intercultural collaboration.",
    highlights: ["Global exposure", "Character education", "Collaborative learning"],
    points: [
      "Cadets engage in value-based projects and leadership opportunities.",
      "Programs build global awareness and practical communication skills.",
      "Participation enriches wider curriculum outcomes.",
    ],
    ctaLabel: "Other Activities",
    ctaHref: "/info/other-activities",
  },
  sat: {
    title: "SAT",
    subtitle: "Preparation support for standardized college readiness tests.",
    overview:
      "SAT preparation includes guided instruction, practice assessments, and strategic feedback to improve applicant readiness.",
    highlights: ["Test readiness", "Score improvement", "University pathway"],
    points: [
      "Cadets receive concept-focused preparation in key SAT domains.",
      "Practice sessions improve timing, strategy, and confidence.",
      "Guidance aligns SAT performance with university application planning.",
    ],
    ctaLabel: "Placement Guidance",
    ctaHref: "/info/guidance-placement-cell",
  },
  "well-being": {
    title: "Well Being",
    subtitle: "Balanced support for emotional, social, and physical wellness.",
    overview:
      "Well-being initiatives ensure cadets remain supported through preventive, educational, and mentoring interventions.",
    highlights: ["Student wellness", "Preventive support", "Healthy routines"],
    points: [
      "Programs focus on resilience, emotional regulation, and healthy behavior.",
      "Cadets receive age-appropriate awareness and support interventions.",
      "Staff collaboration helps maintain a safe and supportive environment.",
    ],
    ctaLabel: "View Policy Documents",
    ctaHref: "/info/policy-documents",
  },
  "policy-documents": {
    title: "Policy Documents",
    subtitle: "Institutional policies for student safety and conduct.",
    overview:
      "Policy documents define standards related to behavior, welfare, safeguarding, and institutional procedures.",
    highlights: ["Safeguarding policies", "Conduct framework", "Transparent procedures"],
    points: [
      "Policies support consistency in student welfare and campus discipline.",
      "Stakeholders can review procedures for clarity and compliance.",
      "Periodic updates ensure relevance to current educational needs.",
    ],
    ctaLabel: "Well Being",
    ctaHref: "/info/well-being",
  },
  "social-emotional-learning": {
    title: "Social and Emotional Learning",
    subtitle: "Developing emotional intelligence and interpersonal skills.",
    overview:
      "SEL modules help cadets strengthen self-awareness, empathy, communication, and decision-making in daily life.",
    highlights: ["Emotional intelligence", "Self-management", "Healthy relationships"],
    points: [
      "Cadets practice reflection and goal-setting through guided activities.",
      "Programs improve peer collaboration and conflict resolution skills.",
      "SEL supports stronger classroom engagement and personal resilience.",
    ],
    ctaLabel: "Mentorship Program",
    ctaHref: "/info/mentorship",
  },
  "other-activities": {
    title: "Other Activities",
    subtitle: "Extended opportunities beyond core curriculum pathways.",
    overview:
      "Additional co-curricular activities provide cadets with practical experiences in arts, sports, and leadership engagement.",
    highlights: ["Co-curricular depth", "Leadership practice", "Talent exploration"],
    points: [
      "Cadets participate in events that complement formal academics.",
      "Activity diversity supports balanced and confident personalities.",
      "Regular engagement improves discipline and collaborative spirit.",
    ],
    ctaLabel: "Campus Life",
    ctaHref: "/campus-life",
  },
  "homecomings-golden-jubilee": {
    title: "Homecomings & Golden Jubilee",
    subtitle: "Celebrating alumni connections and institutional milestones.",
    overview:
      "Homecoming and jubilee events strengthen alumni engagement while honoring tradition and collective achievement.",
    highlights: ["Alumni network", "Milestone celebrations", "Community continuity"],
    points: [
      "Events bring together alumni, faculty, and cadets across generations.",
      "Celebrations preserve college heritage and institutional memory.",
      "Engagement initiatives foster mentorship and support networks.",
    ],
    ctaLabel: "Alumni Registration",
    ctaHref: "/",
  },
  "prominent-abdalian": {
    title: "Prominent Abdalian",
    subtitle: "Recognizing distinguished alumni and their contributions.",
    overview:
      "This section highlights alumni serving with distinction in national and international spheres.",
    highlights: ["Notable alumni", "National service", "Global impact"],
    points: [
      "Profiles showcase excellence across diverse professional domains.",
      "Achievements inspire current cadets and reinforce institutional pride.",
      "Success stories demonstrate the long-term value of BCS training.",
    ],
    ctaLabel: "Read Alumni Stories",
    ctaHref: "/",
  },
  "abdalian-keepsake": {
    title: "ABDALIAN-Keepsake",
    subtitle: "Archival and commemorative records of alumni heritage.",
    overview:
      "Keepsake content preserves key memories, stories, and milestones from the Abdalian community.",
    highlights: ["Heritage archive", "Community memory", "Institutional record"],
    points: [
      "Collections document alumni journeys and historical moments.",
      "Curated records strengthen intergenerational identity.",
      "The archive supports heritage preservation and storytelling.",
    ],
    ctaLabel: "Digital Abdalian",
    ctaHref: "/info/digital-abdalian",
  },
  "appeal-by-principal": {
    title: "Appeal by the Principal",
    subtitle: "Support message for institutional development initiatives.",
    overview:
      "The principal's appeal outlines long-term priorities and invites stakeholders to contribute toward sustainable growth.",
    highlights: ["Development roadmap", "Stakeholder support", "Institutional sustainability"],
    points: [
      "The appeal focuses on future-ready academic and campus enhancements.",
      "Donor participation helps expand student opportunity and infrastructure.",
      "Support initiatives are aligned with transparent governance practices.",
    ],
    ctaLabel: "Endowment Fund",
    ctaHref: "/endowment-fund",
  },
  "board-of-trustees": {
    title: "Board of Trustees",
    subtitle: "Trustees overseeing fund stewardship and strategic impact.",
    overview:
      "The trustee board ensures donor contributions are managed responsibly and directed toward approved institutional priorities.",
    highlights: ["Fund governance", "Strategic oversight", "Accountable stewardship"],
    points: [
      "Trustees guide policy for fund utilization and program priorities.",
      "Oversight mechanisms maintain confidence and transparency.",
      "Governance structures support long-term educational benefit.",
    ],
    ctaLabel: "Audit Reports",
    ctaHref: "/info/audit-reports",
  },
  "trust-deed-certifications": {
    title: "Trust Deed & Certifications",
    subtitle: "Legal and compliance framework for endowment operations.",
    overview:
      "This section references legal documents and certifications supporting the endowment fund's compliant operation.",
    highlights: ["Legal framework", "Compliance documents", "Institutional credibility"],
    points: [
      "Trust documentation defines fund governance and operational boundaries.",
      "Certifications strengthen transparency and public confidence.",
      "Compliance updates are maintained according to applicable standards.",
    ],
    ctaLabel: "Board of Trustees",
    ctaHref: "/info/board-of-trustees",
  },
  "account-details": {
    title: "Account Details",
    subtitle: "Designated channels for fund contributions and support.",
    overview:
      "Official account channels are provided for secure contributions to the endowment and approved institutional initiatives.",
    highlights: ["Secure channels", "Contribution clarity", "Official processes"],
    points: [
      "Contributions should be made through verified institutional details.",
      "Donors can coordinate with the office for acknowledgment and records.",
      "Financial controls ensure accountable receipt and utilization.",
    ],
    ctaLabel: "Contact Endowment Office",
    ctaHref: "/contact",
  },
  "audit-reports": {
    title: "Audit Reports",
    subtitle: "Financial review summaries and accountability records.",
    overview:
      "Audit reporting reinforces transparent stewardship by documenting compliance and utilization trends for endowment resources.",
    highlights: ["Financial transparency", "Compliance review", "Stakeholder confidence"],
    points: [
      "Reports provide visibility into controls and governance practices.",
      "Regular audits support trust and policy adherence.",
      "Findings help improve long-term financial management.",
    ],
    ctaLabel: "Trust Documents",
    ctaHref: "/info/trust-deed-certifications",
  },
  "rules-regulations": {
    title: "Rules & Regulations",
    subtitle: "Cadet conduct and campus discipline framework.",
    overview:
      "Rules and regulations define behavioral standards and responsibilities that ensure a safe, orderly, and productive environment.",
    highlights: ["Code of conduct", "Discipline standards", "Campus order"],
    points: [
      "Guidelines support respect, responsibility, and institutional values.",
      "Cadets are briefed on rules during orientation and routine sessions.",
      "Policy consistency ensures fairness and accountability.",
    ],
    ctaLabel: "Cadet Activities",
    ctaHref: "/campus-life",
  },
  "bcs-newsletters": {
    title: "BCS Newsletters",
    subtitle: "Periodic highlights from academic and cadet life.",
    overview:
      "Newsletters capture key updates, achievements, and events from across departments and cadet activities.",
    highlights: ["Periodic updates", "Event highlights", "Achievement coverage"],
    points: [
      "Newsletter editions document college milestones and success stories.",
      "Cadets and faculty contributions strengthen institutional communication.",
      "Archives support community engagement and historical continuity.",
    ],
    ctaLabel: "Latest News",
    ctaHref: "/explore",
  },
  "calendar-of-events": {
    title: "Calendar of Events",
    subtitle: "Planned schedule of academic and co-curricular activities.",
    overview:
      "The event calendar supports structured planning of term activities, competitions, observances, and major campus milestones.",
    highlights: ["Term planning", "Activity schedule", "Institutional coordination"],
    points: [
      "Calendar planning helps cadets and families stay informed.",
      "Departments align timelines for assessments and activities.",
      "Published schedules improve operational readiness and participation.",
    ],
    ctaLabel: "Campus Notices",
    ctaHref: "/explore",
  },
  "mess-menu": {
    title: "Mess Menu",
    subtitle: "Nutrition planning and dining schedule for cadets.",
    overview:
      "The mess menu framework emphasizes balanced nutrition, hygiene standards, and routine meal planning for resident cadets.",
    highlights: ["Balanced meals", "Dining routines", "Health-focused planning"],
    points: [
      "Menus are designed to support physical and academic performance.",
      "Meal routines are integrated with cadet daily schedules.",
      "Quality and hygiene standards remain core service priorities.",
    ],
    ctaLabel: "Student Welfare",
    ctaHref: "/info/well-being",
  },
  "digital-abdalian": {
    title: "Digital Abdalian",
    subtitle: "Digital archive of Abdalian publications and editions.",
    overview:
      "The digital archive preserves newsletters and publications to maintain institutional memory and alumni connection.",
    highlights: ["Publication archive", "Digital access", "Heritage preservation"],
    points: [
      "Historical editions remain accessible for students and alumni.",
      "The archive reflects evolving institutional milestones.",
      "Digital preservation supports continuity and research use.",
    ],
    ctaLabel: "ABDALIAN-Keepsake",
    ctaHref: "/info/abdalian-keepsake",
  },
  "wing-mascots": {
    title: "Wing & Mascots",
    subtitle: "House identity, traditions, and cadet spirit.",
    overview:
      "Wing culture builds belonging, healthy competition, and leadership through house-based identity and activities.",
    highlights: ["House system", "Cadet spirit", "Competitive culture"],
    points: [
      "Each wing contributes to discipline and peer mentorship.",
      "Mascot and house traditions strengthen institutional pride.",
      "Inter-wing activities build confidence and teamwork.",
    ],
    ctaLabel: "Campus Life",
    ctaHref: "/campus-life",
  },
  "group-photograph": {
    title: "Group Photograph",
    subtitle: "Faculty and outgoing class photographs preserved as institutional memory.",
    overview:
      "Group photographs record faculty teams and outgoing cadet batches, providing a visual archive of each academic year and its people.",
    sectionIntro:
      "The page is intended as a heritage space where the college can preserve and revisit formal class photographs and milestone moments.",
    highlights: ["Faculty archive", "Outgoing class memories", "Heritage record"],
    points: [
      "Photographs capture the identity of each graduating or outgoing cohort.",
      "The archive supports alumni memory, college storytelling, and historical continuity.",
      "This type of record is often used for magazines, newsletters, and commemorative displays.",
    ],
    ctaLabel: "Digital Abdalian",
    ctaHref: "/info/digital-abdalian",
  },
  "career-opportunities": {
    title: "Career Opportunities",
    subtitle: "Useful pathways and resources for future study and professions.",
    overview:
      "The career opportunities page helps cadets think beyond school by pointing them toward higher study, scholarships, and profession-related research resources.",
    sectionIntro:
      "The reference site presents this as a curated list of external resources, and this version keeps the same intent with a cleaner institutional presentation.",
    highlights: ["Career planning", "Higher education", "Scholarship research"],
    points: [
      "Cadets can use the guidance cell to discuss subject choices and long-term plans.",
      "Higher education preparation includes university research, scholarship awareness, and test readiness.",
      "A useful career page should remain practical, updated, and easy to scan for students and families.",
    ],
    ctaLabel: "Guidance & Placement Cell",
    ctaHref: "/info/guidance-placement-cell",
  },
  
  "privacy-policy": {
    title: "Privacy Policy",
    subtitle: "How the college collects, uses, and protects visitor information.",
    overview:
      "Bahar Cadet School uses its website with a commitment to transparency, responsible data handling, and appropriate protection of user information.",
    sectionIntro:
      "This policy page mirrors the reference site's intent: explain what data is collected, how it is used, and what protections are in place.",
    highlights: ["Data collection", "Secure handling", "Policy updates"],
    points: [
      "The website may collect analytics such as IP address, browser information, visited pages, and form submissions.",
      "Cookies and web forms are used to support communication and service improvement, while sensitive information is not stored in cookies.",
      "Collected information is protected through access controls and secure transmission, and the policy may be updated from time to time.",
    ],
    ctaLabel: "Terms & Conditions",
    ctaHref: "/info/terms-conditions",
  },
  "terms-conditions": {
    title: "Terms & Conditions",
    subtitle: "Rules for using the website and its published content.",
    overview:
      "The terms describe acceptable use, user responsibilities, content rights, and the legal boundaries that apply to the college website.",
    sectionIntro:
      "The reference site presents this as a formal legal page, so the summary here keeps the same tone while remaining readable.",
    highlights: ["Acceptable use", "Content rights", "Legal safeguards"],
    points: [
      "Users agree to follow the published terms when they access or use the site.",
      "College content, marks, and design elements remain protected intellectual property unless permission is explicitly granted.",
      "The college reserves the right to manage, modify, suspend, or restrict site access according to its published policies.",
    ],
    ctaLabel: "Privacy Policy",
    ctaHref: "/info/privacy-policy",
  },
  "cancelation-policy": {
    title: "Cancelation Policy",
    subtitle: "Official guidance for cancellation, withdrawal, and related requests.",
    overview:
      "The cancelation policy explains how formal withdrawal, seat cancellation, or related administrative requests are handled through official channels.",
    sectionIntro:
      "This page gives parents and applicants a clear place to understand when a cancellation request is accepted and how records are processed.",
    highlights: ["Written requests", "Office review", "Record handling"],
    points: [
      "Cancellation or withdrawal requests should be submitted through the official admissions or administration office.",
      "Any financial adjustment or document handling must follow the college's approved procedures.",
      "Final decisions are made according to institutional policy and the current admission cycle status.",
    ],
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
  },
};
