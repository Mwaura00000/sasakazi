export const mockTalents = [
  {
    id: "1",
    name: "John Doe",
    headline: "Senior React & Node.js Engineer",
    experience: "Senior",
    availability: "Available",
    workStatus: "Full Time",
    location: "Nairobi",
    bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. Specializes in Next.js, Express, and PostgreSQL databases. Committed to writing clean, maintainable code and mentoring junior developers.",
    skills: ["React", "Next.js", "Node.js", "PostgreSQL", "REST APIs"],
    rating: 4.9,
    reviewCount: 24,
    verified: true,
    workforceReputation: 95,
    readinessStage: "Ready for Placement",
    activeTime: "Active today",
    capabilities: [
      { name: "Frontend Development", score: 95 },
      { name: "Backend APIs", score: 90 },
      { name: "Database Design", score: 85 }
    ]
  },
  {
    id: "2",
    name: "Jane Wambui",
    headline: "UI/UX Designer",
    experience: "Senior",
    availability: "Available",
    workStatus: "Remote",
    location: "Mombasa",
    bio: "User-centric product designer focused on creating intuitive, accessible, and delightful digital experiences. Experience conducting user research, wireframing, high-fidelity prototyping, and developer handoff using Figma.",
    skills: ["Figma", "User Research", "Wireframing", "Prototyping", "UI Design"],
    rating: 4.8,
    reviewCount: 18,
    verified: true,
    workforceReputation: 92,
    readinessStage: "Ready for Placement",
    activeTime: "Active 2 hours ago",
    capabilities: [
      { name: "Visual Design", score: 92 },
      { name: "User Research", score: 88 },
      { name: "Prototyping", score: 95 }
    ]
  },
  {
    id: "3",
    name: "David Omondi",
    headline: "Junior Fullstack Developer",
    experience: "Junior",
    availability: "Available",
    workStatus: "Full Time",
    location: "Eldoret",
    bio: "Recent computer science graduate with a strong foundation in modern web technologies. Eager to contribute to dynamic software projects, with hands-on training in JavaScript, React, and databases. Quick learner and team player.",
    skills: ["JavaScript", "React", "HTML5", "CSS3", "Git"],
    rating: 4.6,
    reviewCount: 5,
    verified: false,
    workforceReputation: 78,
    readinessStage: "Assessment Stage",
    activeTime: "Active yesterday",
    capabilities: [
      { name: "HTML/CSS Syntax", score: 85 },
      { name: "JS Framework basics", score: 75 },
      { name: "Version Control", score: 80 }
    ]
  },
  {
    id: "4",
    name: "Mercy Chepngetich",
    headline: "Mobile Application Developer",
    experience: "Mid",
    availability: "Busy",
    workStatus: "Part Time",
    location: "Nakuru",
    bio: "Mid-level mobile engineer with 3 years of experience in cross-platform development using Flutter and React Native. Experienced in integrating payment gateways like M-Pesa, push notifications, and local offline database storage.",
    skills: ["Flutter", "Dart", "React Native", "Firebase", "M-Pesa API"],
    rating: 4.7,
    reviewCount: 14,
    verified: true,
    workforceReputation: 88,
    readinessStage: "Ready for Placement",
    activeTime: "Active 1 day ago",
    capabilities: [
      { name: "Flutter Widget Tree", score: 90 },
      { name: "API Integration", score: 85 },
      { name: "State Management", score: 88 }
    ]
  },
  {
    id: "5",
    name: "Alex Mwangi",
    headline: "Backend Engineer & DevOps",
    experience: "Senior",
    availability: "Available",
    workStatus: "Remote",
    location: "Nairobi",
    bio: "Robust system builder focused on server infrastructure, REST and GraphQL APIs, and CI/CD pipelines. Extensive experience with Docker, Node.js, Express, AWS cloud hosting, and relational database query optimization.",
    skills: ["Node.js", "Docker", "AWS", "SQL", "CI/CD"],
    rating: 5.0,
    reviewCount: 31,
    verified: true,
    workforceReputation: 98,
    readinessStage: "Ready for Placement",
    activeTime: "Active 15 minutes ago",
    capabilities: [
      { name: "Cloud Infrastructure", score: 95 },
      { name: "API Performance", score: 98 },
      { name: "Containerization", score: 92 }
    ]
  },
  {
    id: "6",
    name: "Sarah Nekesa",
    headline: "Frontend React Developer",
    experience: "Mid",
    availability: "Available",
    workStatus: "Full Time",
    location: "Kisumu",
    bio: "Frontend engineer dedicated to crafting responsive, performance-optimized, and pixel-perfect web interfaces. Deep understanding of React component lifecycle, custom hooks, and Tailwind CSS. Enthusiastic collaborator.",
    skills: ["React", "JavaScript", "Redux Toolkit", "CSS Grid", "Tailwind CSS"],
    rating: 4.5,
    reviewCount: 9,
    verified: false,
    workforceReputation: 82,
    readinessStage: "Profile Stage",
    activeTime: "Active 3 days ago",
    capabilities: [
      { name: "React State Flow", score: 84 },
      { name: "Responsive Layouts", score: 88 },
      { name: "CSS Styling Systems", score: 80 }
    ]
  }
];
export const mockOpportunities = [
  {
    id: "1",
    title: "Senior Fullstack Next.js Engineer",
    company: "Kenya Retailers Association",
    type: "Job",
    location: "Nairobi",
    duration: "Full-Time",
    pay: "KES 150,000 / mo",
    deadlineDays: 4,
    description: "Build scalable member directories, automated inventory tracking, and M-Pesa billing APIs under senior mentor supervision.",
    skills: ["Next.js", "Prisma", "PostgreSQL", "M-Pesa API"]
  },
  {
    id: "2",
    title: "Mobile Flutter Developer Internship",
    company: "FarmGate AgriTech Solutions",
    type: "Internship",
    location: "Remote",
    duration: "6 Months",
    pay: "KES 45,000 / mo",
    deadlineDays: 12,
    description: "Build offline-first mobile POS inventory and sales tracking applications for smallholder farming collectives.",
    skills: ["Flutter", "Dart", "SQLite", "Firebase"]
  },
  {
    id: "3",
    title: "UI/UX Product Design Sprint",
    company: "Safari Mobility",
    type: "Gig",
    location: "Nairobi",
    duration: "3 Weeks",
    pay: "KES 75,000 total",
    deadlineDays: 1,
    description: "Redesign the passenger checkout journey and wireframe high-fidelity responsive mobile prototypes in Figma.",
    skills: ["Figma", "UI Systems", "Prototyping", "User Testing"]
  },
  {
    id: "4",
    title: "Software Engineering Apprenticeship",
    company: "Sasakazi Tech Lab",
    type: "Apprenticeship",
    location: "Mombasa",
    duration: "4 Months",
    pay: "KES 50,000 / mo",
    deadlineDays: 7,
    description: "Participate in real client milestone sprints with 1-on-1 code reviews from experienced tech architects.",
    skills: ["React", "Node.js", "REST APIs", "Git Workflow"]
  },
  {
    id: "5",
    title: "Digital Product Innovation Fellowship",
    company: "Sarafina Innovation Hub",
    type: "Fellowship",
    location: "Remote",
    duration: "1 Year",
    pay: "KES 90,000 / mo stipend",
    deadlineDays: 3,
    description: "Year-long intensive fellowship program receiving direct mentorship, technical labs, and job placement matching.",
    skills: ["Product Strategy", "Fullstack Engineering", "Leadership"]
  }
];
