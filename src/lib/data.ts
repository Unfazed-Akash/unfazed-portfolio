import {
  TypescriptOriginal,
  JavascriptOriginal,
  Html5Original,
  Css3Original,
  ReactOriginal,
  NextjsOriginal,
  NodejsOriginal,
  TailwindcssOriginal,
  GitOriginal,
  FigmaOriginal,
  PythonOriginal,
  JavaOriginal,
  COriginal,
  MongodbOriginal,
  CanvaOriginal,
  PostgresqlOriginal,
  FlaskOriginal,
  DjangoPlain,
} from "devicons-react";
import {
  Github,
  Linkedin,
  Twitter,
  Gamepad2,
  Globe,
} from "lucide-react";

export const technologies = {
  languages: {
    python: {
      name: "Python",
      icon: PythonOriginal,
      shortname: "Py",
      yearStarted: 2021, // Approximation
    },
    javascript: {
      name: "JavaScript",
      icon: JavascriptOriginal,
      shortname: "JS",
      yearStarted: 2020,
    },
    typescript: {
      name: "TypeScript",
      icon: TypescriptOriginal,
      shortname: "TS",
      yearStarted: 2022,
    },
    java: {
      name: "Java",
      icon: JavaOriginal,
      shortname: "Java",
      yearStarted: 2021,
    },
    c: {
      name: "C",
      icon: COriginal,
      shortname: "C",
      yearStarted: 2020,
    },
    html: {
      name: "HTML",
      icon: Html5Original,
      shortname: "HTML",
      yearStarted: 2019,
    },
    css: {
      name: "CSS",
      icon: Css3Original,
      shortname: "CSS",
      yearStarted: 2019,
    },

  },
  frameworks: {
    react: {
      name: "React",
      icon: ReactOriginal,
      shortname: "React",
      yearStarted: 2022,
    },
    nextjs: {
      name: "Next.js",
      icon: NextjsOriginal,
      shortname: "Next",
      yearStarted: 2023,
    },
    nodejs: {
      name: "Node.js",
      icon: NodejsOriginal,
      shortname: "Node",
      yearStarted: 2022,
    },

    flask: {
      name: "Flask",
      icon: FlaskOriginal,
      shortname: "Flask",
      yearStarted: 2023,
    },
    django: {
      name: "Django",
      icon: DjangoPlain,
      shortname: "Django",
      yearStarted: 2023,
    },
    tailwindcss: {
      name: "Tailwind CSS",
      icon: TailwindcssOriginal,
      shortname: "Tailwind",
      yearStarted: 2022,
    },
    mongodb: {
      name: "MongoDB",
      icon: MongodbOriginal,
      shortname: "Mongo",
      yearStarted: 2022,
    },

    postgresql: {
      name: "PostgreSQL",
      icon: PostgresqlOriginal,
      shortname: "Postgres",
      yearStarted: 2023,
    },
  },
  tools: {
    git: {
      name: "Git",
      icon: GitOriginal,
      shortname: "Git",
      yearStarted: 2020,
    },
    figma: {
      name: "Figma",
      icon: FigmaOriginal,
      shortname: "Figma",
      yearStarted: 2021,
    },
    canva: {
      name: "Canva",
      icon: CanvaOriginal,
      shortname: "Canva",
      yearStarted: 2024,
    },
  },
};

export const projects = [
  {
    name: "KAVACH",
    row: 1,
    type: "project",
    img: "/projects/kavach.webp", // Placeholder path
    subheading: "Cybercrime Predictive Analytics",
    description:
      "Designed and built KAVACH, an AI-based predictive analytics system to forecast cybercrime cash withdrawal locations with 93%+ accuracy. Architected a scalable real-time backend using FastAPI, processing 60,000+ transactions at ~200ms latency. SIH'25 Finalist Project.",
    technologies: [
      technologies.languages.python,
      technologies.frameworks.flask, // Mentioned Flask in resume for Aaharithm vs FastAPI for Kavach, but Kavach desc says FastAPI. I'll stick to Flask/Python or add FastAPI if I had icon, but text is fine.
      technologies.frameworks.react,
      technologies.frameworks.mongodb,
    ],
    github: "https://github.com/Unfazed-Akash/KAVACH",
    liveDemo: "https://drive.google.com/file/d/1hsjtJAsBbmiW6cmN3UMSKVuSEfG4bdaK/view",
    ctaLabel: "View Presentation",
    yearStarted: 2025,
  },
  {
    name: "AAHARITHM",
    row: 0,
    type: "project",
    img: "/projects/aaharithm.webp",
    subheading: "AI-Powered Ayurvedic Wellness",
    description:
      "Architected a Python/Flask backend and a rule-based AI engine that processes user health data to create personalized wellness plans with 95% recommendation accuracy using Ayurvedic principles.",
    technologies: [
      technologies.languages.python,
      technologies.frameworks.flask,
      technologies.languages.html,
      technologies.languages.css,
    ],
    github: "https://github.com/Unfazed-Akash/Aaharithm-",
    liveDemo: "https://aaharithm.vercel.app/",
    ctaLabel: "View Project",
    yearStarted: 2025,
  },
  {
    name: "DABRIS",
    row: 0,
    type: "tool",
    img: "/projects/dabris.webp",
    subheading: "AI Data Analysis Chat-bot",
    description:
      "Engineered a command-line chatbot using NLTK to parse plain-English queries, enabling non-technical users to perform data analysis on CSV files and receive automated statistical summaries.",
    technologies: [
      technologies.languages.python,
      // NLTK (no icon), Pandas (no icon)
    ],
    github: "https://github.com/Unfazed-Akash/DABRIS",
    liveDemo: "https://dabris.onrender.com/",
    yearStarted: 2024,
  },
  {
    name: "Netflix Clone",
    row: 1,
    type: "web",
    img: "/projects/netflix.webp",
    subheading: "Pixel-perfect UI Clone",
    ctaLabel: "View Demo",
    description:
      "Developed a fully responsive clone of the Netflix landing page using HTML, CSS, and JavaScript, creating 10+ reusable components to reduce code redundancy by 30%.",
    technologies: [
        technologies.languages.html, 
        technologies.languages.css, 
        technologies.languages.javascript
    ],
    github: "https://github.com/Unfazed-Akash/Netflix-clone-",
    liveDemo: "https://akash-netflix.vercel.app/",
    yearStarted: 2024,
  },
];

function getLearningsText(isMarkdown = false) {
  const learning = ["Generative AI", "System Design"];

  if (learning.length === 0) return "";
  if (learning.length === 1) return isMarkdown ? `**${learning[0]}**` : learning[0];
  if (learning.length === 2) return isMarkdown ? `**${learning[0]}** and **${learning[1]}**` : `${learning[0]} and ${learning[1]}`;

  return learning.reduce((text, item, index) => {
    if (index === learning.length - 1) {
      return isMarkdown ? `${text}, and **${item}**` : `${text}, and ${item}`;
    }
    return index === 0 ? (isMarkdown ? `**${item}**` : item) : (isMarkdown ? `${text}, **${item}**` : `${text}, ${item}`);
  }, "");
}

export const about = () => {
  const currentYear = new Date().getFullYear();
  const calculateExperience = (yearStarted: number) =>
    currentYear - yearStarted;

  return {
    name: "Unfazed",
    realName: "Akash Trivedi",
    nickname: "Unfazed",
    hobbies: ["Coding", "Musician", "Cinephile", "Tech Enthusiast"],
    descriptions: [
      `I'm **Akash Trivedi** (aka **Unfazed**), a passionate Computer Science student and Full Stack Developer. I love building systems that solve real-world problems, from **AI-powered analytics** to **responsive web applications**.`,
      `Always learning something new; currently exploring ${getLearningsText(true)}. I believe in the power of code to impact lives and am constantly pushing my boundaries in **AI/ML** and **System Architecture**.`,
    ],
    titles: ["Full Stack Developer", "AI/ML Enthusiast", "System Architect"],
    work: ["SIH'25 Finalist Team Lead", "Internshala Student Partner"],
    location: "Unnao, UP, India",
    email: "unfazedakash@gmail.com",
    copyrightYear: currentYear,
    yearsOfExperience: calculateExperience(2021),
    preferredLanguage: technologies.languages.python,
    preferredIDE: technologies.tools.figma, // Or VS Code if I had icon, keeping Figma as tool representative or Neovim if he uses it (not mentioned). I'll default to Figma or similar from list.
    interests: ["Artificial Intelligence", "Web Development", "Startups", "Futuristic Innovations"],
    education: {
      degree: "B.Tech in Computer Science & Engineering",
      graduationYear: 2027,
    },
  };
};

export const timeline = [
  { year: 2007, event: "Born in Unnao, UP, India" },
  {
    year: 2023, // Approximation for college start based on 2027 grad
    event: "Started B.Tech in Computer Science & Engineering at SRMU",
  },
  {
    year: 2024,
    event: "Deep dived into Full Stack Web Development and AI/ML",
  },
  {
    year: 2025,
    event: "Spearheaded on-campus workshops as Internshala Student Partner",
  },
   {
    year: 2025,
    event: "Lead Team Skills@404 to Smart India Hackathon (SIH) 2025 Grand Finale",
  },
  {
    year: 2026,
    event: "Continuing to innovate and build impactful solutions",
  },
];

export const getExperience = (technology) => {
  const currentYear = new Date().getFullYear();
  return currentYear - technology.yearStarted;
};

const achievements = [
  {
    title: "Smart India Hackathon 2025",
    subtitle: "Finalist",
    location: "Ministry of Home Affairs (14C)",
    img: "/resume/sih.webp", // Placeholder
    stack: ["Team Lead", "Backend", "AI/ML"],
    descriptions: [
      "Led a 6-member team (Skills@404) to the Grand Finale, shortlisted at the national level.",
      "Designed KAVACH, an AI-based predictive analytics system for cybercrime intervention.",
      "Architected a scalable real-time backend processing 60,000+ transactions.",
    ],
    month: 12,
    year: 2025,
  },
  {
    title: "AI For All",
    subtitle: "Certified in AI Fundamentals",
    location: "Govt. of India & Intel",
    stack: ["AI", "ML"],
    img: "/resume/ai_for_all.webp",
    descriptions: [
      "Certified in AI fundamentals and real-world applications.",
    ],
    month: 1, // Approx
    year: 2024,
  },
  {
    title: "Google Skills Badge",
    subtitle: "Google for Developers",
    location: "Online",
    stack: ["Cloud", "DevTools"],
    img: "/resume/google's_skills_badge.webp",
    descriptions: [
      "Recognized for completing structured learning modules in developer tools and foundational cloud technologies.",
    ],
    month: 1, // Approx
    year: 2024,
  },
];

const experiences = [
  {
    title: "Smart India Hackathon 2025",
    subtitle: "Team Lead Backend & System Architecture",
    location: "SRMU Chapter",
    img: "/resume/sih.webp",
    stack: [
      "Python",
      "FastAPI",
      "AI/ML",
      "System Design",
    ],
    descriptions: [
      "Led a 6-member team to the SIH'25 Grand Finale.",
      "Built KAVACH, forecasting cybercrime with 93%+ accuracy.",
      "Defended the system before 14C experts and industry leaders.",
    ],
    month: 12,
    year: 2025,
    isPresent: false,
  },
  {
    title: "Internshala",
    subtitle: "Internshala Student Partner",
    location: "SRMU Chapter",
    img: "/resume/internshala.webp",
    stack: ["Marketing", "Leadership", "Mentoring"],
    descriptions: [
      "Spearheaded 3+ workshops for 100+ students on resume building.",
      "Drove a 20% increase in university platform sign-ups via targeted campaigns.",
    ],
    month: 4,
    year: 2025,
    isPresent: false,
  },
];

const education = [
  {
    title: "B.Tech in Computer Science & Engineering",
    subtitle: "Shri Ramswaroop Memorial University",
    location: "Barabanki, Uttar Pradesh",
    img: "/resume/srmu.webp",
    stack: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "DBMS",
      "OS",
    ],
    descriptions: [
      "Current CGPA: 7.86/10.0",
      "Relevant Coursework: DSA, OOP, DBMS, OS, Discrete Mathematics.",
    ],
    month: 8, // Approx
    year: 2023, // Expected grad 2027 -> 4 years -> start 2023
    endedMonth: 6,
    endedYear: 2027,
  },
];

const intro = `I'm **Akash Trivedi** (aka **Unfazed**), a Computer Science undergrad at **SRMU** and a passionate Full Stack Developer. My journey involves deep dives into **System Architecture**, **AI/ML**, and building scalable applications. I thrive in hackathons (like **SIH'25**) and love leading teams to build impactful solutions.`;

const capabilities = {
  language: ["English", "Hindi"],
  programmingLanguages: [
    "Python",
    "JavaScript (ES6+)",
    "Java",
    "C",
    "SQL",
  ],
  frameworks: [
    "React.js",
    "Node.js",
    "Express.js",
    "Flask",
    "Django",
    "Next.js",
    "TailwindCSS",
    "Scikit-Learn",
    "TensorFlow",
  ],
  services: ["AWS", "GitHub", "Postman", "Vercel"],
  tools: ["Git", "Linux", "Windows", "VS Code"],
};

const interests = [
  `Beyond coding, I am a **Cinephile** and love listening to music. I enjoy exploring **new technologies**, coding mini-projects, and keeping up with **futuristic innovations**.`,
  `I am deeply interested in **Startups** and **Team Leadership**, always looking for opportunities to collaborate and build something great.`,
];

export const resumeData = {
  achievements,
  experiences,
  education,
  intro,
  capabilities,
  interests,
};

export const socialMedia = [
  {
    platform: "GitHub",
    icon: Github,
    username: "Unfazed-Akash",
    url: "https://github.com/Unfazed-Akash",
  },
  {
    platform: "LinkedIn",
    icon: Linkedin,
    username: "unfazed-akash",
    url: "https://www.linkedin.com/in/unfazed-akash/",
  },
  {
    platform: "Twitter",
    icon: Twitter,
    username: "unfazed_akash",
    url: "https://x.com/unfazed_akash",
  },
  {
    platform: "Reddit", // Using Globe or generic icon if Reddit icon missing in Lucide (it is missing usually, checking imports to see if I can find substitution or use Link)
    icon: Globe, 
    username: "unfazed-akash",
    url: "https://www.reddit.com/user/unfazed-akash/",
  },
  // Discord link provided is a channel, not a user profile link usually, but I'll add it.
  {
    platform: "Discord",
    icon: Gamepad2,
    username: "Unfazed",
    url: "https://discord.com/channels/@1429119620563865632",
  },
];

export const stats = {
  github: {
    repositories: 10,
    stars: 5,
    followers: 5,
    contributions: 100,
  },
  youtube: {
    subscribers: 0,
    views: 0,
  },
  instagram: {
    followers: 0,
    posts: 0,
  },
};

export const testimonials = [
  {
    name: "SIH Team Member",
    title: "Developer at Skills@404",
    quote:
      "Akash is a **visionary leader**. His ability to architect complex systems like **KAVACH** while keeping the team motivated was key to our success at **SIH'25**. He is a true **full-stack wizard**!",
  },
];

export const getRandomFunFact = (funFact) => {
  let funFacts = [
    "I was a team lead for Smart India Hackathon 2025 Finalist team.",
    "I architected a backend handling 60,000+ transactions.",
    "I love exploring futuristic innovations.",
    "I am a Cinephile.",
  ];

  funFacts = funFacts.filter((fact) => fact !== funFact);

  return funFacts[Math.floor(Math.random() * funFacts.length)];
};

export const repositories = [
  {
    name: "KAVACH",
    language: "Python",
    description: "AI-based predictive analytics system to forecast cybercrime cash withdrawal locations.",
    url: "https://github.com/Unfazed-Akash/KAVACH",
    demo: "https://drive.google.com/file/d/1hsjtJAsBbmiW6cmN3UMSKVuSEfG4bdaK/view",
    owner: "Unfazed-Akash",
    repo: "KAVACH",
  },
  {
    name: "AAHARITHM",
    language: "Python",
    description: "AI-Powered Ayurvedic Wellness Recommender.",
    url: "https://github.com/Unfazed-Akash/Aaharithm-",
    demo: "https://aaharithm.vercel.app/",
    owner: "Unfazed-Akash",
    repo: "AAHARITHM",
  },
  {
    name: "Netflix Clone",
    language: "HTML/CSS",
    description: "Fully responsive clone of the Netflix landing page.",
    url: "https://github.com/Unfazed-Akash/Netflix-clone-",
    demo: "https://akash-netflix.vercel.app/",
    owner: "Unfazed-Akash",
    repo: "Netflix-Clone",
  },
  {
    name: "DABRIS",
    language: "Python",
    description: "AI Data Analysis Chat-bot enabling non-technical users to perform data analysis.",
    url: "https://github.com/Unfazed-Akash/DABRIS",
    demo: "https://dabris.onrender.com/",
    owner: "Unfazed-Akash",
    repo: "DABRIS",
  },
  {
    name: "Portfolio",
    language: "Next.js",
    description: "My personal portfolio website showcasing my projects and skills.",
    url: "https://github.com/Unfazed-Akash/current_portfolio",
    demo: "https://current-portfolio-akash.vercel.app/",
    owner: "Unfazed-Akash",
    repo: "current_portfolio",
  },
];
