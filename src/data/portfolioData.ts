/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Centralized Portfolio Configuration
 * Easily update profile information, projects, skills, education, and links here.
 */

export interface SkillItem {
  name: string;
  category: 'dev' | 'db' | 'ops' | 'cloud' | 'data_ai';
  status: 'practical' | 'learning';
  iconName?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'IT Support & Operations' | 'Full Stack' | 'Data & AI';
  tagline: string;
  description: string;
  image: string;
  artworkConcept?: string;
  techStack: string[];
  keyFeatures: string[];
  competencies?: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  architectureHighlight?: string;
  technicalAccuracyNote?: string;
  experimentalResults?: { label: string; value: string }[];
  isFeatured: boolean;
  priorityTier: 'major' | 'supporting' | 'additional';
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl?: string;
  skills?: string[];
  bannerTheme: {
    bgGradient: string;
    accentColor: string;
    tagBg: string;
    borderAccent: string;
    brandText: string;
    issuerAbbr: string;
  };
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "Nishant Kumar",
    shortName: "Nishant",
    roleHeadline: "Application Support | IT Operations | Cloud & DevOps",
    mainHeadline: "Building Reliable Technology. Solving Real-World Problems.",
    summary:
      "I am a technology professional with an MCA background and a strong interest in application support, IT operations, troubleshooting, software development, and cloud technologies. I enjoy solving technical problems and building practical applications that deliver real value.",
    email: "nishantkumar27203@gmail.com",
    phone: "+91-8668808421",
    resumeUrl: "/assets/aistudio/Nishant_resume_09Nov2026_4b4329ef.pdf",
    resumeFilename: "Nishant_Kumar_Resume.pdf",
    githubUrl: "https://github.com/Nishant27203",
    githubUsername: "Nishant27203",
    linkedinUrl: "https://www.linkedin.com/in/nishant-kumar272/",
    linkedinUsername: "nishant-kumar272",
    leetcodeUrl: "https://leetcode.com/u/nishantkumar272/",
    leetcodeUsername: "nishantkumar272",
    location: "Punjab / Uttar Pradesh, India",
    statusBadge: "Available for Application Support & IT Ops roles",
    heroImage: "/src/assets/images/hero_abstract_tech_sphere_1794293607906.jpg",
  },

  about: {
    heading: "Beyond the Code, Focused on Solutions.",
    subheading:
      "A pragmatic approach combining rigorous academic computer science foundations with real-world operational problem-solving.",
    blocks: [
      {
        title: "Academic Background",
        category: "Education",
        description:
          "Pursuing Master of Computer Applications (MCA) at Lovely Professional University ('26) after graduating with a Bachelor of Computer Applications (BCA) from Chaudhary Charan Singh University.",
      },
      {
        title: "Technical Interests",
        category: "Exploration",
        description:
          "Deep curiosity across application support workflows, Linux systems administration, enterprise database architectures, and cloud deployment pipelines.",
      },
      {
        title: "Problem-Solving",
        category: "Methodology",
        description:
          "Systematic root cause analysis, methodical log diagnostics, and proactive incident response aimed at maintaining uptime and honoring SLA commitments.",
      },
      {
        title: "Professional Focus",
        category: "Direction",
        description:
          "Bridging software engineering discipline with enterprise IT operations to ensure applications remain stable, secure, performant, and maintainable.",
      },
    ],
  },

    // Career Focus Areas
    careerFocusAreas: [
      "IT Support",
      "Application Support",
      "Technical Support",
      "Service Desk",
      "IT Operations",
    ],

    // Primary Skills (Group A, B, C)
    primarySkillGroups: [
      {
        id: "it-ops",
        title: "GROUP A — IT SUPPORT & OPERATIONS",
        description: "Core operational troubleshooting, operating systems administration, and incident lifecycle management.",
        skills: [
          { name: "Windows Troubleshooting", status: "practical" as const, iconType: "windows" },
          { name: "Linux Administration", status: "practical" as const, iconType: "linux" },
          { name: "Networking Fundamentals", status: "practical" as const, iconType: "network" },
          { name: "Technical Troubleshooting", status: "practical" as const, iconType: "tool" },
          { name: "Incident Management", status: "practical" as const, iconType: "incident" },
          { name: "Ticket Management", status: "practical" as const, iconType: "ticket" },
          { name: "SLA Monitoring", status: "practical" as const, iconType: "sla" },
        ],
      },
      {
        id: "app-db",
        title: "GROUP B — APPLICATION & DATABASE SUPPORT",
        description: "Relational database querying, schema inspection, data validation, and backend service verification.",
        skills: [
          { name: "SQL", status: "practical" as const, iconType: "database" },
          { name: "PostgreSQL", status: "practical" as const, iconType: "database" },
          { name: "MySQL", status: "practical" as const, iconType: "database" },
        ],
      },
      {
        id: "scripting-auto",
        title: "GROUP C — SCRIPTING & AUTOMATION",
        description: "Operational scripting, system administration automation, and support utility tooling.",
        skills: [
          { name: "Python", status: "practical" as const, iconType: "code" },
          { name: "Bash / Shell Scripting", status: "practical" as const, iconType: "terminal" },
        ],
      },
    ],

    // Additional Skills & Technologies (Collapsible)
    additionalSkillCategories: [
      {
        category: "PROGRAMMING & WEB DEVELOPMENT",
        skills: [
          { name: "JavaScript", status: "practical" as const },
          { name: "TypeScript", status: "practical" as const },
          { name: "React.js", status: "practical" as const },
          { name: "Next.js", status: "practical" as const },
          { name: "Node.js", status: "practical" as const },
          { name: "Express.js", status: "practical" as const },
        ],
      },
      {
        category: "DATABASE & DATA",
        skills: [
          { name: "MongoDB", status: "practical" as const },
          { name: "Prisma ORM", status: "practical" as const },
          { name: "Pandas", status: "practical" as const },
          { name: "NumPy", status: "practical" as const },
        ],
      },
      {
        category: "CLOUD & DEVOPS",
        skills: [
          { name: "AWS", status: "learning" as const },
          { name: "Docker", status: "practical" as const },
          { name: "Git", status: "practical" as const },
          { name: "GitHub", status: "practical" as const },
          { name: "Jenkins", status: "learning" as const },
          { name: "CI/CD Fundamentals", status: "practical" as const },
          { name: "Cloud Computing", status: "practical" as const },
        ],
      },
      {
        category: "DATA & ARTIFICIAL INTELLIGENCE",
        skills: [
          { name: "Power BI", status: "practical" as const },
          { name: "Tableau", status: "practical" as const },
          { name: "Machine Learning Fundamentals", status: "practical" as const },
          { name: "Streamlit", status: "practical" as const },
          { name: "OpenAI API", status: "practical" as const },
          { name: "Prompt Engineering", status: "practical" as const },
        ],
      },
    ],

    // Flattened skills list for global reference
    skills: [
      { name: "Windows Troubleshooting", category: "ops", status: "practical" },
      { name: "Linux Administration", category: "ops", status: "practical" },
      { name: "Networking Fundamentals", category: "ops", status: "practical" },
      { name: "Technical Troubleshooting", category: "ops", status: "practical" },
      { name: "Incident Management", category: "ops", status: "practical" },
      { name: "Ticket Management", category: "ops", status: "practical" },
      { name: "SLA Monitoring", category: "ops", status: "practical" },
      { name: "SQL", category: "db", status: "practical" },
      { name: "PostgreSQL", category: "db", status: "practical" },
      { name: "MySQL", category: "db", status: "practical" },
      { name: "Python", category: "dev", status: "practical" },
      { name: "Bash / Shell Scripting", category: "ops", status: "practical" },
      { name: "JavaScript", category: "dev", status: "practical" },
      { name: "TypeScript", category: "dev", status: "practical" },
      { name: "React.js", category: "dev", status: "practical" },
      { name: "Next.js", category: "dev", status: "practical" },
      { name: "Node.js", category: "dev", status: "practical" },
      { name: "Express.js", category: "dev", status: "practical" },
      { name: "MongoDB", category: "db", status: "practical" },
      { name: "Prisma ORM", category: "db", status: "practical" },
      { name: "Pandas", category: "db", status: "practical" },
      { name: "NumPy", category: "db", status: "practical" },
      { name: "AWS", category: "cloud", status: "learning" },
      { name: "Docker", category: "cloud", status: "practical" },
      { name: "Git", category: "cloud", status: "practical" },
      { name: "GitHub", category: "cloud", status: "practical" },
      { name: "Jenkins", category: "cloud", status: "learning" },
      { name: "CI/CD Fundamentals", category: "cloud", status: "practical" },
      { name: "Cloud Computing", category: "cloud", status: "practical" },
      { name: "Power BI", category: "data_ai", status: "practical" },
      { name: "Tableau", category: "data_ai", status: "practical" },
      { name: "Machine Learning Fundamentals", category: "data_ai", status: "practical" },
      { name: "Streamlit", category: "data_ai", status: "practical" },
      { name: "OpenAI API", category: "data_ai", status: "practical" },
      { name: "Prompt Engineering", category: "data_ai", status: "practical" },
    ] as SkillItem[],

  projects: [
    {
      id: "enterprise-helpdesk",
      title: "Enterprise IT Help Desk & Ticket Management System",
      category: "IT Support & Operations",
      priorityTier: "major",
      tagline: "Full-stack enterprise IT support platform with SLA monitoring & L1/L2/L3 escalation",
      description:
        "A full-stack enterprise-style IT support and help desk platform designed to manage incidents, streamline technician workflows, monitor SLAs, and improve IT service operations.",
      image: "/assets/projects/helpdesk-3d-artwork.jpg",
      artworkConcept:
        "3D editorial conceptual illustration featuring a central floating digital support ticket, connected incident escalation nodes, SLA clock timer, and server infrastructure.",
      techStack: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "Prisma ORM",
        "PostgreSQL",
        "JWT Authentication",
        "Node Cron",
      ],
      competencies: [
        "Incident Management",
        "Ticket Management",
        "SLA Monitoring",
        "Technical Troubleshooting",
        "Application Support",
        "SQL",
        "Database Management",
      ],
      keyFeatures: [
        "Employee ticket creation and tracking",
        "IT technician dashboard",
        "Incident lifecycle management",
        "L1, L2, L3 escalation workflows",
        "SLA monitoring and breach detection",
        "Manager analytics dashboard",
        "Administrator user management",
        "Configurable SLA policies",
        "Knowledge base and troubleshooting articles",
        "Ticket history and activity tracking",
        "Role-Based Access Control",
      ],
      githubUrl: "https://github.com/Nishant27203/enterprise-it-helpdesk-system",
      architectureHighlight:
        "Built with strict PostgreSQL relational schemas via Prisma ORM and scheduled background cron jobs that continuously calculate elapsed response/resolution times against SLA policy windows.",
      isFeatured: true,
    },
    {
      id: "nexus-command-center",
      title: "NEXUS IT Command Center",
      category: "IT Support & Operations",
      priorityTier: "major",
      tagline: "Unified IT operations workspace for incident coordination, endpoint visibility & diagnostics",
      description:
        "A unified IT operations workspace for incident coordination, endpoint visibility, device inventory, application health monitoring, and guided troubleshooting.",
      image: "/assets/projects/nexus-command-artwork.jpg",
      artworkConcept:
        "3D conceptual visualization of a centralized IT command hub, radiating live telemetry pathways, and connected endpoint device nodes.",
      techStack: [
        "React",
        "Vite",
        "Node.js",
        "Express.js",
        "SQLite",
        "WebSocket",
        "Node.js Endpoint Agent",
        "System Information Monitoring",
      ],
      competencies: [
        "IT Operations",
        "Endpoint Monitoring",
        "Incident Management",
        "Application Health Monitoring",
        "Troubleshooting",
        "Network Diagnostics",
        "Device Management",
      ],
      keyFeatures: [
        "IT operations overview dashboard",
        "Incident management and SLA tracking",
        "Endpoint device inventory",
        "Live endpoint health monitoring for enrolled devices",
        "CPU, memory, disk, and network telemetry",
        "Guided troubleshooting workflows",
        "Network diagnostics and DNS checks",
        "Application health monitoring",
        "IT asset management",
        "Knowledge base",
        "Problem management",
        "Change management and access request workflows",
        "Audit activity history",
        "Role-based access",
      ],
      technicalAccuracyNote:
        "The project has both clearly labelled demo endpoints and real enrolled endpoints. Demo endpoint diagnostics are simulated. Real enrolled endpoints report live metrics. The diagnostic console uses an approved allow-list of read-only tasks; it is not an unrestricted remote shell or remote desktop solution.",
      githubUrl: "https://github.com/Nishant27203/nexus-it-command-center",
      architectureHighlight:
        "Full operational workspace coupling real-time WebSocket telemetry with an authorized Node.js agent polling system information via an approved allow-list of read-only diagnostic tasks.",
      isFeatured: true,
    },
    {
      id: "linux-monitoring",
      title: "Smart Linux Monitoring & Alert System",
      category: "IT Support & Operations",
      priorityTier: "supporting",
      tagline: "Bash-based Linux health monitor with threshold alerting & cron automation",
      description:
        "A Bash-based Linux monitoring tool that tracks CPU, memory, disk, and network health with threshold-based alerts and scheduled automation.",
      image: "/assets/projects/linux-monitoring-artwork.jpg",
      artworkConcept:
        "3D minimalist technical artwork featuring a stylized terminal console glyph, server rack blades, CPU/memory gauge rings, and automated alert pulse.",
      techStack: ["Linux", "Bash Scripting", "Cron", "Linux System Commands"],
      competencies: [
        "Linux Administration",
        "Bash Scripting",
        "System Telemetry",
        "Cron Automation",
        "IT Operations",
      ],
      keyFeatures: [
        "CPU monitoring",
        "Memory monitoring",
        "Disk usage monitoring",
        "Network connectivity checks",
        "Threshold-based alerts",
        "System metrics logging",
        "Scheduled monitoring using cron",
      ],
      githubUrl: "https://github.com/Nishant27203/linux-monitoring",
      architectureHighlight:
        "Modular POSIX-compliant shell scripts executing targeted OS inspection commands (free, df, top, ping) with automated alert thresholds and cron daemon integration.",
      isFeatured: false,
    },
    {
      id: "plant-disease-detector",
      title: "Plant Disease Detector",
      category: "Data & AI",
      priorityTier: "supporting",
      tagline: "Computer vision classification for foliar tomato crop pathology",
      description:
        "A machine-learning project focused on detecting tomato leaf diseases using image classification. Trained on diverse botanical imagery to diagnose foliar distress.",
      image: "/assets/projects/plant-ai-artwork.jpg",
      artworkConcept:
        "3D agritech technical illustration featuring a botanical leaf intersected by a holographic scanning grid and neural network classification nodes.",
      techStack: [
        "Python",
        "TensorFlow / Keras",
        "OpenCV",
        "NumPy",
        "Matplotlib",
        "Streamlit",
      ],
      keyFeatures: [
        "Multi-class tomato leaf pathology classification",
        "Automated image preprocessing and color-space normalization",
        "Probability distributions across healthy vs infected classes",
        "Interactive diagnostic reporting interface",
      ],
      experimentalResults: [
        { label: "RGB Model Accuracy", value: "94.54%" },
        { label: "Grayscale Model Accuracy", value: "86.98%" },
        { label: "Enhanced Model Accuracy", value: "94.49%" },
      ],
      githubUrl: "https://github.com/Nishant27203/plant-disease-detector",
      architectureHighlight:
        "Evaluated comparative color spaces to verify how chromatic versus structural features impact disease recognition under variable field illumination.",
      isFeatured: false,
    },
    {
      id: "groweasy-crm",
      title: "GrowEasy CRM — AI-Powered CSV Importer",
      category: "Full Stack",
      priorityTier: "additional",
      tagline: "Streamlined customer data ingestion & intelligent schema normalization",
      description:
        "A CRM-focused project designed around AI-assisted CSV data importing, intelligent schema matching, and structured data handling.",
      image: "/assets/projects/groweasy-crm-artwork.jpg",
      artworkConcept:
        "3D conceptual illustration featuring floating frosted-glass data sheets and CSV tables, customer nodes, and structured analytics ribbons.",
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "CSV Pipeline",
        "Schema Mapper",
      ],
      keyFeatures: [
        "Interactive CSV source-to-destination column mapper",
        "Real-time data sanitization and type-safety validation",
        "Customer records directory with live search and filter controls",
        "Pipeline ingestion monitor displaying success rates and row-level errors",
      ],
      githubUrl: "https://github.com/Nishant27203/WebApplicationCRM",
      architectureHighlight:
        "Eliminates repetitive data-entry friction by pairing automated field suggestions with instant browser-side schema verification.",
      isFeatured: false,
    },
    {
      id: "teampulse-workforce",
      title: "TeamPulse — Workforce Insights",
      category: "Data & AI",
      priorityTier: "additional",
      tagline: "Interactive operational intelligence & team capacity analytics",
      description:
        "A Streamlit-based workforce insights application providing leadership visibility into team capacity, engagement trends, and operational health.",
      image: "/assets/projects/teampulse-artwork.jpg",
      artworkConcept:
        "3D conceptual visualization of workforce intelligence, geometric figures, connected metric hubs, and capacity analytics.",
      techStack: ["Python", "Streamlit", "Pandas", "Plotly", "NumPy"],
      keyFeatures: [
        "Dynamic team capacity and workload utilization heatmaps",
        "Trend analysis for employee engagement and sentiment",
        "Real-time slice-and-dice data filtering across departments",
        "Exportable executive summary reports",
      ],
      githubUrl: "https://github.com/Nishant27203/TeamPulse-Workforce-Insights",
      architectureHighlight:
        "Leverages efficient vectorized Pandas computations to present instant interactive analytics over organizational datasets.",
      isFeatured: false,
    },
    {
      id: "movo-nextjs",
      title: "MOVO — Next.js Application",
      category: "Full Stack",
      priorityTier: "additional",
      tagline: "High-performance modular web application",
      description:
        "A modular, responsive web application engineered with modern Next.js patterns, focusing on streamlined user interaction and clean state transitions.",
      image: "/assets/projects/movo-artwork.jpg",
      artworkConcept:
        "3D abstract modern media and streaming technology visualization featuring sleek crystalline geometric prisms and fluid digital data streams.",
      techStack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
      keyFeatures: [
        "Modern component-driven architecture with server-rendering efficiency",
        "Responsive workspace layout with zero layout shifts",
        "Modular state management and clean routing",
      ],
      githubUrl: "https://github.com/Nishant27203",
      architectureHighlight:
        "Structured for effortless extension, ready for enterprise API endpoints and microservice integration.",
      isFeatured: false,
    },
  ] as ProjectItem[],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Lovely Professional University",
      period: "2024 – 2026",
      location: "Punjab, India",
      highlights: [
        "Core Focus: Advanced Database Management, Distributed Systems, Software Engineering, and Enterprise Architecture",
        "Hands-on lab work in Linux systems administration, cloud fundamentals, and practical software design patterns",
        "Active involvement in technical projects, open-source repositories, and developer workshops",
      ],
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Chaudhary Charan Singh University",
      period: "Completed",
      location: "Uttar Pradesh, India",
      highlights: [
        "Foundational coursework in Data Structures, Object-Oriented Programming, Computer Networks, and Operating Systems",
        "Built solid baseline in SQL database queries, relational normalization, and web fundamentals",
      ],
    },
  ] as EducationItem[],

  certifications: [
    {
      id: "agile-software-development",
      title: "Agile Software Development",
      issuer: "University of Minnesota",
      date: "February 2026",
      credentialId: "NNHYQS4G4Z65",
      verifyUrl: "https://www.coursera.org/account/accomplishments/records/NNHYQS4G4Z65",
      skills: ["Agile Methodology", "Scrum Framework", "Sprint Planning", "SDLC"],
      bannerTheme: {
        bgGradient: "from-[#4A0A17] via-[#2D060E] to-[#151D18]",
        accentColor: "#FFC72C",
        tagBg: "rgba(122, 0, 25, 0.35)",
        borderAccent: "rgba(255, 199, 44, 0.4)",
        brandText: "UMN",
        issuerAbbr: "University of Minnesota",
      },
    },
    {
      id: "lfs101-linux-foundation",
      title: "LFS101 — Introduction to Linux",
      issuer: "The Linux Foundation",
      date: "September 2026",
      credentialId: "b09ea2ee-e62a-4a82-a9ae-a87820f82b45",
      verifyUrl: "https://www.credly.com/earner/earned/badge/b09ea2ee-e62a-4a82-a9ae-a87820f82b45",
      skills: ["Linux Administration", "AWS CLI", "Shell Scripting", "SysAdmin Basics"],
      bannerTheme: {
        bgGradient: "from-[#08303B] via-[#0D2229] to-[#151D18]",
        accentColor: "#00C0F3",
        tagBg: "rgba(0, 192, 243, 0.15)",
        borderAccent: "rgba(0, 192, 243, 0.35)",
        brandText: "LF",
        issuerAbbr: "The Linux Foundation",
      },
    },
    {
      id: "operating-systems-cisco",
      title: "Operating Systems Basics",
      issuer: "Cisco Networking Academy",
      date: "October 2026",
      credentialId: "4c2d5d27-fe6c-4506-a165-ed7514be304f",
      verifyUrl: "https://www.netacad.com/profile?tab=badges",
      skills: ["Operating Systems", "Windows Administration", "Hardware/Kernel", "Troubleshooting"],
      bannerTheme: {
        bgGradient: "from-[#0A2540] via-[#0C1B2E] to-[#151D18]",
        accentColor: "#00BCEB",
        tagBg: "rgba(0, 188, 235, 0.15)",
        borderAccent: "rgba(0, 188, 235, 0.35)",
        brandText: "CISCO",
        issuerAbbr: "Cisco NetAcad",
      },
    },
    {
      id: "code-a-haunt-codingblocks",
      title: "Code-A-Haunt 2.0 — State-Level Hackathon",
      issuer: "CodingBlocks LPU",
      date: "January 2025",
      credentialId: "89975078-38aa-42eb-9b43-efc2aae7bac0",
      verifyUrl: "https://certificate.givemycertificate.com/c/89975078-38aa-42eb-9b43-efc2aae7bac0",
      skills: ["Competitive Engineering", "Rapid Prototyping", "Full-Stack Dev", "Team Leadership"],
      bannerTheme: {
        bgGradient: "from-[#3D1E0C] via-[#241308] to-[#151D18]",
        accentColor: "#FF6B35",
        tagBg: "rgba(255, 107, 53, 0.2)",
        borderAccent: "rgba(255, 107, 53, 0.35)",
        brandText: "CB",
        issuerAbbr: "CodingBlocks LPU",
      },
    },
    {
      id: "aws-apac-forage",
      title: "AWS APAC — Solutions Architecture Job Simulation",
      issuer: "Forage",
      date: "January 2025",
      credentialId: "L7bZLPi5pqQRHegSw",
      verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_J8FdRTP2oLcJwNJB4_1736871316041_completion_certificate.pdf",
      skills: ["AWS Solutions Architecture", "Cloud Infrastructure", "Cost Optimization", "Reliability"],
      bannerTheme: {
        bgGradient: "from-[#2A2312] via-[#1C180E] to-[#151D18]",
        accentColor: "#FF9900",
        tagBg: "rgba(255, 153, 0, 0.18)",
        borderAccent: "rgba(255, 153, 0, 0.35)",
        brandText: "AWS / FORAGE",
        issuerAbbr: "Forage Simulation",
      },
    },
    {
      id: "python-data-science-ibm",
      title: "Python for Data Science",
      issuer: "IBM",
      date: "August 2023",
      credentialId: "0b97c310f8ca42068a33af736230e43d",
      verifyUrl: undefined, // No verification URL supplied yet; Verify button is hidden
      skills: ["Python", "Data Science", "Pandas", "NumPy", "Data Analysis"],
      bannerTheme: {
        bgGradient: "from-[#082255] via-[#071536] to-[#151D18]",
        accentColor: "#4589FF",
        tagBg: "rgba(69, 137, 255, 0.18)",
        borderAccent: "rgba(69, 137, 255, 0.35)",
        brandText: "IBM",
        issuerAbbr: "IBM Skills Network",
      },
    },
  ] as CertificationItem[],

  codingProfiles: [
    {
      platform: "GitHub",
      username: "Nishant27203",
      url: "https://github.com/Nishant27203",
      headline: "Open-source projects, IT helpdesk platform & AI detectors",
      badge: "Repositories & Code",
    },
    {
      platform: "LeetCode",
      username: "nishantkumar272",
      url: "https://leetcode.com/u/nishantkumar272/",
      headline: "Data structures, algorithms & technical problem solving",
      badge: "Algorithm Practice",
    },
    {
      platform: "LinkedIn",
      username: "nishant-kumar272",
      url: "https://www.linkedin.com/in/nishant-kumar272/",
      headline: "Professional career milestones, industry network & updates",
      badge: "Professional Network",
    },
  ],

  systemOperationalMetrics: [
    { label: "Systems & Ops Focus", value: "Application Support & ITIL" },
    { label: "Relational Databases", value: "PostgreSQL · MySQL · Prisma" },
    { label: "Environment Comfort", value: "Linux CLI · Bash · Windows" },
    { label: "Core Mindset", value: "Root Cause Resolution" },
  ],
};
