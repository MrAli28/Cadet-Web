export type NavLinkItem = {
  label: string;
  href: string;
  children?: NavLinkItem[];
};

export type NavGroup = {
  title: string;
  links: NavLinkItem[];
};

export type MegaMenu = {
  label: string;
  links: NavLinkItem[];
};

export const navPrimaryLinks: NavLinkItem[] = [];

export const navMegaMenus: MegaMenu[] = [
  {
    label: "EXPLORE",
    links: [
      { 
        label: "Foreword by Principal", 
        href: "/info/foreword-by-principal" 
      },
      { 
        label: "Aim & Objective", 
        href: "/info/aim-objective" 
      },
      { 
        label: "History", 
        href: "/info/history",
        children: [
          { label: "Overview of BCS", href: "/info/overview-of-bcs" },
          { label: "Founder Principal", href: "/info/founder-principal" },
          { label: "Principals of BCS", href: "/info/principals-of-bcs" },
        ]
      },
      { 
        label: "Campus at a Glance", 
        href: "/info/campus-at-a-glance" 
      },
      { 
        label: "Facilities", 
        href: "/info/facilities" 
      },
      { 
        label: "Current Administration", 
        href: "/info/current-administration" 
      },
    ],
  },
  {
    label: "ADMISSION",
    links: [
      { 
        label: "Online Admissions", 
        href: "/admissions" 
      },
      { 
        label: "Courses Offered", 
        href: "/info/courses-offered" 
      },
      { 
        label: "Admission Intake", 
        href: "/info/admission-intake",
        children: [
          { label: "Admission to Class A-Level", href: "/info/admission-to-class-a-level" },
          { label: "Admission to Class O-Level", href: "/info/admission-to-class-o-level" },
        ]
      },
      { 
        label: "Fee Structure", 
        href: "/info/fee-structure" 
      },
    ],
  },
  {
    label: "ACADEMICS",
    links: [
      { 
        label: "Members of Faculty", 
        href: "/faculty" 
      },
      { 
        label: "Academic Excellence", 
        href: "/info/academic-excellence" 
      },
      { 
        label: "Group Photograph", 
        href: "/info/group-photograph" 
      },
      { 
        label: "Career Opportunities", 
        href: "/info/career-opportunities" 
      },
      { 
        label: "Position Holders", 
        href: "/info/position-holders" 
      },
      
      
    ],
  },
  {
    label: "WIDER CURRICULUM",
    links: [
      { 
        label: "Community Service", 
        href: "/info/community-service" 
      },
      { 
        label: "Clubs & Societies", 
        href: "/info/clubs-societies" 
      },
      { 
        label: "Duke of Edinburgh's Award", 
        href: "/info/duke-of-edinburgh-award" 
      },
      { 
        label: "Guidance & Placement Cell", 
        href: "/info/guidance-placement-cell" 
      },
      { 
        label: "Mentorship", 
        href: "/info/mentorship" 
      },
      { 
        label: "Round Square", 
        href: "/info/round-square" 
      },
      { 
        label: "SAT", 
        href: "/info/sat" 
      },
      { 
        label: "Well Being", 
        href: "/info/well-being",
        children: [
          { label: "Policy Documents", href: "/info/policy-documents" },
          { label: "Social and Emotional Learning", href: "/info/social-emotional-learning" },
          { label: "Other Activities", href: "/info/other-activities" },
        ]
      },
    ],
  },
  // Alumni menu removed
  {
    label: "CADET LIFE",
    links: [
      { 
        label: "Activities", 
        href: "/campus-life" 
      },
      { 
        label: "Rules & Regulations", 
        href: "/info/rules-regulations" 
      },
      { 
        label: "BCS Newsletters", 
        href: "/info/bcs-newsletters" 
      },
      { 
        label: "Calendar of Events", 
        href: "/info/calendar-of-events" 
      },
      { 
        label: "Mess Menu", 
        href: "/info/mess-menu" 
      },
      { 
        label: "Digital Abdalian", 
        href: "/info/digital-abdalian" 
      },
      { 
        label: "Wing & Mascots", 
        href: "/info/wing-mascots" 
      },
    ],
  },
  {
    label: "CAREER",
    links: [
      { 
        label: "Advertisements", 
        href: "/career" 
      },
      { 
        label: "Contact Us", 
        href: "/contact" 
      },
    ],
  },
];

export const navDropdownGroups: NavGroup[] = [
  {
    title: "Academics & Admissions",
    links: [
      { label: "Admissions", href: "/admissions" },
      { label: "Academics", href: "/academics" },
      { label: "Faculty", href: "/faculty" },
    ],
  },
  {
    title: "Campus & Community",
    links: [
      { label: "Campus Life", href: "/campus-life" },
      { label: "Career", href: "/career" },
    ],
  },
];
