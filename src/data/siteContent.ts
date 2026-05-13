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

export const navPrimaryLinks: NavLinkItem[] = [
  { label: "Alumni", href: "/alumni" },
  { label: "Contact", href: "/contact" },
];

export const navMegaMenus: MegaMenu[] = [
  {
    label: "EXPLORE",
    links: [
      {
        label: "Foreword by Principal",
        href: "/info/foreword-by-principal",
      },
      {
        label: "Aim & Objective",
        href: "/info/aim-objective",
      },
      {
        label: "History",
        href: "/info/history",
        children: [
          { label: "Overview of BCS", href: "/info/overview-of-bcs" },
          { label: "Founder Principal", href: "/info/founder-principal" },
          { label: "Principals of BCS", href: "/info/principals-of-bcs" },
        ],
      },
      {
        label: "Campus at a Glance",
        href: "/info/campus-at-a-glance",
      },
      {
        label: "Facilities",
        href: "/info/facilities",
      },
      {
        label: "Current Administration",
        href: "/info/current-administration",
      },
    ],
  },
  {
    label: "ADMISSION",
    links: [
      {
        label: "Online Admissions",
        href: "/admissions",
      },
      {
        label: "Courses Offered",
        href: "/info/courses-offered",
      },
      {
        label: "Admission Intake",
        href: "/info/admission-intake",
        children: [
          { label: "Admission to Class 2 to 10", href: "/info/admission-to-class-a-level" },
          { label: "Preparation For Military colleges", href: "/info/admission-to-class-o-level" },
        ],
      },
      {
        label: "Fee Structure",
        href: "/info/fee-structure",
      },
    ],
  },
      {
        label: "ACADEMICS",
        links: [
          {
            label: "Members of Faculty",
            href: "/faculty",
          },
          {
            label: "Academic Excellence",
            href: "/info/academic-excellence",
          },
          {
            label: "Career Counseling",
            href: "/info/career-counseling",
          },
          {
            label: "Position Holders",
            href: "/info/position-holders",
          },
        ],
      },
  {
    label: "CADET LIFE",
    links: [
      {
        label: "Activities",
        href: "/campus-life",
      },
      {
        label: "Cadet Life in Our Campus",
        href: "/info/cadet-life-in-our-campus",
      },
    ],
  },
  // CAREER section removed — top-level Contact link added
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
      { label: "Contact", href: "/contact" },
    ],
  },
];
