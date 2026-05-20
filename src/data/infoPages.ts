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
    subtitle: "Ali Raza",
    overview:
      "Established in 1954 as the first institution of its kind in Pakistan, Basic Concept School has set the bar for high-quality boarding schools for boys.",
    sectionIntro:
      "Based on the British Public School pattern with a highly regimented and demanding atmosphere, BCS aims at training young men to join the armed forces of Pakistan as well as other disciplines. We focus on year-round, holistic, and balanced curricular and wider curriculum activities with emphasis on leadership training spanning the spectrum. The objectives of academic achievement, character development, personality shaping, inculcating universal values, and citizenship are kept foremost as core principles in shaping our students.\n\nThe outcome of this environment during these impactful years has brought our students to consistently rise to the top and exhibit excellence as second nature. It is for this reason that BCS claims to be \"shaping excellence\" as its creed.\n\nOver the past seven decades, our alumni have not only made impactful contributions to the national mainstream but have also crossed international boundaries and are now playing significant roles at the global level. Keeping pace with modern imperatives, BCS is well on its way to establishing itself as a globally-competitive international school.\n\nOur aim is to shape our cohorts towards becoming global leaders in their chosen fields of influence. Understanding the complexity of the global village, we encourage our students to venture beyond national boundaries and partake in the cosmopolitan, interconnected world. It is with much humility and pride that we claim the sobriquet of \"Second to None\".",
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
      "To cultivate intellectually robust, morally upright, and physically fit individuals who embody excellence in academics, character, discipline, and leadership. Basic Concept School aspires to shape its students into 21st century global leaders — university-ready, life-ready, and committed to serving Pakistan and humanity with integrity, courage and purpose.",
    sectionIntro:
      "The college pursues a values-driven education that balances academic rigour with character development, leadership training, physical fitness, and technological readiness. The following objectives guide our institutional programmes and student experiences.",
    highlights: ["Academic Programs", "Leadership Development", "Character Building"],
    points: [
      "Quality Education: Provide high-quality, globally-benchmarked education that fosters critical thinking, creativity, and problem-solving in line with national and international standards.",
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
      "To cultivate intellectually robust, morally upright, and physically fit individuals who embody excellence in academics, character, discipline, and leadership. Basic Concept School aspires to shape its students into 21st century global leaders, university-ready, life-ready, and committed to serving Pakistan and humanity with integrity, courage and purpose.",
    sectionIntro:
      "The college pursues a values-driven education that balances academic rigour with character development, leadership training, physical fitness, and technological readiness. The following objectives guide our institutional programmes and student experiences.",
    highlights: ["Academic Programs", "Leadership Development", "Character Building"],
    points: [
      "Quality Education: To provide high-quality, globally benchmarked education that fosters critical thinking, creativity, and problem-solving in line with national and international standards.",
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
      "Basic Concept School (BCS) was founded by Ali Raza, a distinguished veteran with an illustrious career in the Pakistan Army. With extensive experience in military service, Mr. Raza has trained thousands of army officers, imparting them with the skills and values essential for their roles.",
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
    title: "Mujahid Numan Jatoi – Director",
    subtitle: "The academic leader guiding Basic Concept School.",
    overview:
      "Mujahid Numan Jatoi is the esteemed Director of Basic Concept School (BCS), renowned for his academic vision and leadership. Driven by a mission to prepare students for the challenges of military colleges, Mr. Jatoi brings a multifaceted approach to education.",
    sectionIntro:
      "He ensures that students receive comprehensive training in academics, psychology, physical fitness, and mental preparation, essential for excelling in army college entrance exams.\n\nUnder his dynamic leadership, BCS has achieved outstanding results, with students consistently performing at the highest levels. Mr. Jatoi's passion and commitment to his role are evident in his tireless efforts and innovative methods, making him a pivotal figure in the success and growth of Basic Concept School.",
    highlights: ["Academic Brilliance", "Student Preparation", "Dynamic Leadership"],
    points: [
      "Esteemed Director of Basic Concept School with a strong academic vision.",
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
    subtitle: "Academic programmes and specialised preparatory courses.",
    overview:
      "We offer Matric classes (9th & 10th) with Computer and Biology options, alongside specialised preparatory programmes for entry into military and professional services.",
    highlights: [
      "Matric (9th & 10th) — Computer & Biology",
      "Military, Cadet & PAF College Preparation",
      "Professional entry and service preparation (AFNS, ISSB, Airmen/Airwoman)",
    ],
    points: [
      "Matric classes (9th & 10th) with Computer and Biology: Strong subject foundation supported by labs and experienced teachers.",
      "Preparation for entry tests and interviews for Military Colleges, Cadet Colleges, and PAF Colleges including written tests, intelligence testing, and interview coaching.",
      "AFNS Nursing preparation: focused biology/medical basics and interview/medical screening guidance.",
      "ISSB preparation: leadership tasks, psychological testing, group exercises, and interview simulations.",
      "Airmen & Airwoman entry preparation: aptitude and technical test coaching combined with physical readiness programmes and medical guidance.",
      "Comprehensive guidance and personality development support to help candidates succeed in competitive selection processes.",
    ],
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
    title: "Admission to Classes 2 to 10",
    subtitle: "Entry requirements, process and important dates for Classes 2–10 intake.",
    overview:
      "Admission to Classes 2 to 10 at Basic Concept School welcomes applicants who demonstrate academic readiness and suitability for our residential learning environment. Evaluation considers prior school records, age eligibility, and may include an assessment or interview for certain entry levels.",
    sectionIntro:
      "This page outlines eligibility criteria, application steps, assessment format (where applicable), the document checklist, and guidance for parents and applicants for entry into classes 2 through 10.",
    highlights: ["Age & eligibility guidance", "Assessment & interview (where applicable)", "Document checklist"],
    points: [
      "Applicants should provide prior school records or transfer certificates demonstrating appropriate academic progress for the target class.",
      "Age eligibility is specified per class; please refer to the intake notice for exact age brackets for each year.",
      "Shortlisting may include review of prior records and, for some classes, a short written assessment and/or interview.",
      "Submit certified copies of previous school records, identity documents, passport-size photographs, and any additional documents listed in the admission notice.",
      "Parents/guardians of successful candidates must confirm admission and complete required enrolment steps by the published deadlines.",
    ],
    ctaLabel: "Apply Online",
    ctaHref: "/admissions",
  },
  "admission-to-class-o-level": {
    title: "Preparation For Military Colleges",
    subtitle: "Overview of preparatory guidance and entry pathways for military college aspirants.",
    overview:
      "This section outlines academic and physical preparation recommendations for students aspiring to apply to military colleges. It covers curriculum alignment, recommended subjects, physical fitness guidance, and the typical selection process.",
    sectionIntro:
      "Find guidance on academic readiness, recommended extracurricular activities, assessment expectations, and documentation frequently required by military college admission boards.",
    highlights: ["Academic preparation", "Physical fitness & drills", "Application guidance"],
    points: [
      "Focus on core subjects relevant to the intended programme; maintain consistent academic performance.",
      "Engage in regular physical training and activities that develop endurance, discipline, and teamwork skills.",
      "Participate in leadership-focused extracurriculars and community programs to build an admissions profile.",
      "Prepare required documents such as academic transcripts, medical clearance (if requested), identity proofs, and recommendation letters.",
    ],
    ctaLabel: "Learn More",
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
  
  "position-holders": {
    title: "Position Holders",
    subtitle: "Honouring Top Cadets — recognising outstanding academic and co-curricular achievement across classes and streams.",
    overview: "This section recognises our highest achievers. Below are the latest position holders across classes and streams.",
    // previous detailed sections removed for restructuring; use `positionHolders` to render cards
    positionHolders: [
      { name: "Rehan Safder", position: "Prominent Alumnus", course: "PAF College Lower Topa Murree", image: "/images/position-holder-1.jpg" },
      { name: "Ali Hassan", position: "Prominent Alumnus", course: "Garrison Cadet College Kohat", image: "/images/position-holder-2.jpg" },
      { name: "Feroz Ahmad", position: "Prominent Alumnus", course: "Garrison Cadet College Kohat", image: "/images/position-holder-3.jpg" },
      { name: "Hasnain Afzal", position: "Prominent Alumnus", course: "Cadet College Wana", image: "/images/position-holder-4.jpg" },
    ],
    ctaLabel: "",
    ctaHref: "",
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
    ctaHref: "/contact",
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
  
  // 'group-photograph' and 'career-opportunities' removed as requested

  "career-counseling": {
    title: "Career Counseling",
    subtitle: "Building Future Leaders & Cadets",
    overview:
      "At Basic Concept School (BCS), we prepare students not only for academic success but also for disciplined leadership and national service. Our Career Counseling program guides cadets towards bright futures in military, professional, and modern career fields according to their abilities, interests, and ambitions.",
    sectionIntro:
      "We help students develop confidence, discipline, leadership qualities, and career direction so they can serve the nation with pride and achieve success in life.",
    highlights: [
      "Confidence, discipline and leadership development",
      "Subject and career choice guidance",
      "University & scholarship planning",
      "One-on-one mentoring and career planning",
    ],
    services: [
      {
        title: "Armed Forces Guidance",
        description:
          "We guide students who wish to join the Pakistan Army, Pakistan Air Force (PAF), Pakistan Navy, ISSB preparation programs, cadet colleges, and military academies.",
      },
      {
        title: "Academic & Subject Counseling",
        description:
          "Helping cadets choose the right academic stream and subject combinations that suit future military and professional careers.",
      },
      {
        title: "Personality Development",
        description:
          "Developing leadership skills, discipline, confidence, communication, and decision-making abilities through targeted workshops and mentoring.",
      },
      {
        title: "Career Planning",
        description:
          "Providing awareness and planning for modern and respected career opportunities in defence services, engineering, medicine, computer science & AI, cyber security, civil services, and business & management.",
      },
      {
        title: "One-on-One Guidance",
        description:
          "Individual counseling sessions to understand each cadet’s strengths, goals, and future ambitions and to build a personalised plan.",
      },
    ],
    futureCareers: [
      "Defence Services",
      "Engineering",
      "Medical Field",
      "Computer Science & AI",
      "Cyber Security",
      "Civil Services",
      "Business & Management",
    ],
    approach: [
      "Student interests and passion",
      "Skills and aptitude analysis",
      "Personality development",
      "Goal setting and planning",
      "Real-world career awareness",
    ],
    benefits: [
      "Military-focused guidance and mentorship",
      "Discipline-based learning environment",
      "Leadership and personality grooming",
      "Preparation for future challenges",
      "Focus on patriotism, character, and confidence",
      "Guidance for both military and civilian careers",
    ],
    parentsMessage:
      "Parents play an important role in shaping a child’s future. Our counseling sessions also help parents understand their child’s strengths, interests, and suitable career paths so they can provide better support and guidance.",
    mission:
      "Our mission is to produce disciplined, confident, and responsible individuals who are prepared to lead, serve, and succeed. Through career counseling and mentorship, we help cadets discover their true potential and build a successful future for themselves and the nation.",
    ctaLabel: "",
    ctaHref: "",
  },

  "cadet-life-in-our-campus": {
    title: "Cadet Life at Our Campus",
    subtitle: "Life at our cadet school is carefully structured to cultivate discipline, academic growth, spiritual growth, and physical fitness.",
    overview:
      "Life at our cadet school is carefully structured to cultivate discipline, academic growth, spiritual growth, and physical fitness. Each day follows a balanced routine that helps cadets develop the habits and character required to become confident, responsible, and well-rounded individuals.",
    sectionIntro:
      "The daily routine and activity programme are designed to support cadets academically, physically, spiritually, and socially, preparing them to excel in education and lead with integrity.",
    highlights: [
      "Strong moral and Islamic values",
      "Academic achievement",
      "Physical fitness",
      "Self-discipline",
      "Leadership qualities",
      "Time management skills",
    ],
    points: [
      "Early Morning Routine: The day begins before sunrise with Fajr Prayer followed by Nazra Quran, instilling punctuality and spiritual mindfulness. After prayer, cadets enjoy a nutritious breakfast and prepare for the academic day.",
      "Academic Schedule: Formal classes commence at 8:00 AM. Cadets break for Dhuhr Prayer and lunch from 12:00 PM to 1:00 PM, and academic classes continue until 3:00 PM.",
      "Sports and Physical Training: From 4:00 PM to 6:00 PM, cadets participate in cricket, football, volleyball, athletics, and physical training drills to promote teamwork, endurance, and leadership.",
      "Evening Study Sessions: Supervised tuition and study classes run from 6:00 PM to 9:00 PM for lesson revision, assignments, and instructor support.",
      "Night Routine: From 9:00 PM to 10:00 PM cadets perform night prayers and have dinner, providing time to relax and prepare for the next day.",
      "Character Building Through Routine: The structured schedule fosters moral values, academic focus, physical wellbeing, self-discipline, leadership, and effective time management.",
    ],
    adminNote:
      "Cadet Life at Our Campus section is maintained for official information flow, institutional clarity, and timely guidance for cadets, parents, alumni, and stakeholders.",
    ctaLabel: "View Daily Routine",
    ctaHref: "/campus-life",
  },

  "privacy-policy": {
    title: "Privacy Policy",
    subtitle: "How the college collects, uses, and protects visitor information.",
    overview:
      "Basic Concept School uses its website with a commitment to transparency, responsible data handling, and appropriate protection of user information.",
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
