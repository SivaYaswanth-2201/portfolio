/**
 * PORTFOLIO DATA CONFIGURATION
 * All personal details, skills, projects, and education are centralized here.
 * You can edit any field here to update your portfolio website instantly.
 */

export const personalInfo = {
  name: "Jalla Siva Yaswanth",
  shortName: "Siva Yaswanth",
  brandName: "SIVA YASWANTH",
  title: "Python Full Stack Developer",
  roleTagline: "Aspiring Python Full Stack Developer | Problem Solver | Builder",
  status: "Available for Full-Time Roles & Opportunities",
  isAvailable: true,
  city: "Bengaluru / Kadapa",
  country: "India",
  locationDisplay: "Bengaluru / Kadapa, India",
  email: "yaswanthjalla5@gmail.com",
  phone: "+91 8886355283",
  whatsapp: "+91 8886355283",
  profileImage: "/profile.jpeg",
  resumeUrl: "/resume.pdf",
  resumeFileName: "Jalla_Siva_Yaswanth_Resume.pdf",
  github: "https://github.com/yaswanthjalla",
  linkedin: "https://www.linkedin.com/in/siva-yaswanth-6625b6277",
  
  careerObjective: 
    "I am an aspiring Python Full Stack Developer. I am passionate about programming, learning new technologies, solving problems and building practical applications. My goal is to start my career in the software industry and grow as a skilled developer.",
  
  aboutBio: [
    "I am a Computer Science Engineering graduate (B.Tech, 2026) currently undergoing intensive Python Full Stack placement training at TAP Academy, Bengaluru.",
    "My core technical passion lies in building reliable, scalable web applications that bridge intuitive frontend user experiences with robust backend logic and efficient database architectures.",
    "Through hands-on projects, I have developed expertise in Python, Django, REST APIs, MySQL, and modern frontend technologies (HTML5, CSS3, JavaScript, React.js). I approach every engineering challenge with curiosity, solid algorithmic problem-solving fundamentals, and an eagerness to write clean, maintainable code."
  ],

  highlights: [
    { label: "Training Program", value: "TAP Academy", subtext: "Python Full Stack Specialization" },
    { label: "Graduation", value: "B.Tech CSE", subtext: "Audisankara Inst. of Tech (7.25 CGPA)" },
    { label: "Core Stack", value: "Python + Django", subtext: "REST APIs & MySQL" },
    { label: "Frontend", value: "React + Tailwind", subtext: "Modern UI/UX Development" }
  ]
};

export const skillsData = {
  categories: [
    {
      id: "languages",
      title: "Programming Languages",
      description: "Core languages and programming paradigms",
      skills: [
        { name: "Python", level: "Proficient", icon: "Code2", highlight: true, note: "Core syntax, data structures, algorithms" },
        { name: "Object-Oriented Programming (OOP)", level: "Strong Fundamentals", icon: "Boxes", highlight: true, note: "Inheritance, polymorphism, encapsulation, abstraction" },
        { name: "JavaScript", level: "Intermediate", icon: "FileCode", highlight: false, note: "ES6+, DOM manipulation, asynchronous programming" }
      ]
    },
    {
      id: "backend",
      title: "Backend Technologies",
      description: "Server architecture, web frameworks and API design",
      skills: [
        { name: "Django", level: "Proficient", icon: "Server", highlight: true, note: "MVT architecture, ORM, authentication, routing" },
        { name: "REST APIs", level: "Proficient", icon: "Network", highlight: true, note: "Endpoint design, JSON serialization, HTTP status handling" },
        { name: "Streamlit", level: "Hands-on Experience", icon: "Cpu", highlight: false, note: "Rapid AI & data application prototyping" }
      ]
    },
    {
      id: "frontend",
      title: "Frontend Technologies",
      description: "Modern, responsive and interactive interfaces",
      skills: [
        { name: "HTML5", level: "Proficient", icon: "Layout", highlight: false, note: "Semantic structure, web accessibility, forms" },
        { name: "CSS3 / Tailwind CSS", level: "Proficient", icon: "Palette", highlight: true, note: "Flexbox, Grid, animations, responsive design" },
        { name: "JavaScript (ES6+)", level: "Intermediate", icon: "Flame", highlight: false, note: "Modern syntax, promises, fetch API, event loop" },
        { name: "React.js", level: "Working Knowledge", icon: "Atom", highlight: true, note: "Functional components, hooks, props, state management" }
      ]
    },
    {
      id: "database",
      title: "Databases & Tools",
      description: "Data persistence, query optimization and developer workflow",
      skills: [
        { name: "MySQL", level: "Proficient", icon: "Database", highlight: true, note: "Relational schema design, complex JOINs, constraints, normalization" },
        { name: "SQL", level: "Proficient", icon: "Table", highlight: false, note: "DDL, DML, subqueries, indexing principles" },
        { name: "Git & GitHub", level: "Comfortable", icon: "GitBranch", highlight: false, note: "Version control, branching, PRs, repositories" },
        { name: "VS Code / Postman", level: "Daily Workflow", icon: "Terminal", highlight: false, note: "Debugging, API testing and code environment" }
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "ai-talent-matching",
    title: "Intelligent Recruitment & Talent Matching Platform Using AI",
    badge: "Featured AI Project",
    category: "AI & Full Stack",
    description: 
      "An automated intelligent candidate screening system that parses resumes, evaluates content using Natural Language Processing (NLP), and computes relevancy scores against specific job descriptions to streamline recruiter workflows.",
    keyPoints: [
      "Extracted raw text from uploaded resumes and applied NLP preprocessing: tokenization, lemmatization, and stopword removal.",
      "Engineered TF-IDF vectorization to convert textual resumes into high-dimensional numerical vectors for cosine similarity computation.",
      "Generated instant match scores and ranked candidates objectively, reducing manual screening time by over 70%.",
      "Designed an interactive Streamlit web dashboard for seamless resume upload, candidate evaluation, and automated shortlisting."
    ],
    techStack: ["Python", "Streamlit", "NLP", "TF-IDF", "Scikit-Learn"],
    githubUrl: "https://github.com/yaswanthjalla",
    liveUrl: "#",
    featured: true,
    accent: "signal"
  },
  {
    id: "django-ecommerce",
    title: "Full-Stack E-Commerce & Inventory Management Web Portal",
    badge: "Full-Stack Web App",
    category: "Full Stack Development",
    description: 
      "A complete Python Full Stack web application built with Django and MySQL featuring dynamic catalog browsing, user authentication, persistent shopping cart sessions, and an administrative inventory control dashboard.",
    keyPoints: [
      "Built with Django MVT architecture ensuring clean separation of business logic, models, and presentation templates.",
      "Implemented relational database schema in MySQL with optimized queries, relationship tables, and transaction security.",
      "Configured robust user authentication, session security, and role-based access control for customers and administrators.",
      "Designed responsive UI with HTML5, CSS3/Tailwind, and JavaScript for seamless shopping across all devices."
    ],
    techStack: ["Python", "Django", "MySQL", "JavaScript", "HTML5/CSS3"],
    githubUrl: "https://github.com/yaswanthjalla",
    liveUrl: "#",
    featured: true,
    accent: "blue"
  },
  {
    id: "task-workflow-api",
    title: "Smart Task & Team Workflow Management REST API",
    badge: "RESTful Service",
    category: "Backend & REST APIs",
    description: 
      "A scalable task and team collaboration management service built using Django REST Framework, featuring token-based authentication, CRUD operation endpoints, task prioritization, and structured JSON responses.",
    keyPoints: [
      "Developed comprehensive RESTful endpoints for user registration, task lifecycle tracking, status filtering, and deadlines.",
      "Integrated Django ORM query optimization to minimize database lookups and prevent N+1 query bottlenecks.",
      "Tested and verified all endpoints using Postman with automated tests for edge cases and input validation.",
      "Structured with clear API documentation, HTTP status codes, and error payloads for smooth frontend integration."
    ],
    techStack: ["Python", "Django REST Framework", "MySQL", "Postman", "JWT"],
    githubUrl: "https://github.com/yaswanthjalla",
    liveUrl: "#",
    featured: false,
    accent: "emerald"
  }
];

export const educationData = [
  {
    period: "Jul 2026 – Jan 2027",
    status: "Currently Pursuing",
    title: "Python Full Stack Placement Training Program",
    institution: "TAP Academy",
    location: "Bengaluru, India",
    description: 
      "Undergoing rigorous, industry-aligned training in end-to-end web application development. Focusing on Python, Django, REST APIs, MySQL, and modern frontend technologies with real-world project development, problem solving, and Software Development Life Cycle (SDLC) best practices.",
    badges: ["Full Stack Specialization", "SDLC Practices", "Project Development", "Problem Solving"]
  },
  {
    period: "2022 – 2026",
    status: "Completed",
    title: "B.Tech in Computer Science and Engineering",
    institution: "Audisankara Institute of Technology",
    location: "Gudur, Andhra Pradesh",
    score: "CGPA: 7.25",
    description: 
      "Completed comprehensive Bachelor's degree in Computer Science and Engineering. Built strong foundations in Object-Oriented Programming, Data Structures & Algorithms, Relational Database Management Systems, and Software Engineering principles.",
    badges: ["Computer Science", "Algorithms & OOP", "Database Systems", "Software Engineering"]
  },
  {
    period: "2020 – 2022",
    status: "Completed",
    title: "Intermediate (MPC — Maths, Physics, Chemistry)",
    institution: "BSR Junior College",
    location: "Tirupati, Andhra Pradesh",
    score: "CGPA: 7.16",
    description: 
      "Completed Senior Secondary Education with major coursework in Mathematics, Physics, and Chemistry, strengthening analytical reasoning and problem-solving fundamentals.",
    badges: ["Mathematics", "Physics", "Analytical Reasoning"]
  },
  {
    period: "2020",
    status: "Completed",
    title: "Secondary School Certificate (SSC)",
    institution: "Municipal Corporation High School",
    location: "Kadapa, Andhra Pradesh",
    score: "CGPA: 8.20",
    description: 
      "Completed secondary schooling with distinction and high academic standing across mathematics, science, and computer fundamentals.",
    badges: ["Academic Excellence", "Distinction"]
  }
];

export const certificationsData = [
  {
    name: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    icon: "Cpu",
    description: "Core concepts of AI, machine learning fundamentals, natural language processing, and neural networks."
  },
  {
    name: "Basics of Python",
    issuer: "Infosys Springboard",
    icon: "Code2",
    description: "Comprehensive foundational Python programming, functional constructs, collections, and modular programming."
  }
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];
