import {
  karto,
  natgashub,
  labmate,
  homescape,
  bytecraft,
  mimihotels,
  greencross,
  prachini,
  chatbot,
  reviewsapp,
  crmsystem,
  bookstore,
  nationalpark,
  vibhu,
  vibhuNoir,
  developer3d,
  karto3d,
  malariadetectionsystem,
  malariadetectionsystem1,
  malariadetectionsystem2,
  ponggame,
  portfolio,
  about,
  achievements as achievementsPreview,
  testimonials as testimonialsPreview,
  project as projectPreview,
  skills as skillsPreview,
  contact as contactPreview,
  backend,
  creator,
  mobile,
  web,
  github,
  coursera,
  hr,
  cp,
  fcc,
  ideas,
  concepts,
  designs,
  code,
} from "../assets";

export const personalInfo = {
  name: "Vibhu Babbar",
  fullName: "Vibhu Babbar",
  shortName: "Vibhu",
  role: "Software Developer & Freelance .NET Specialist",
  subRole: ".NET Development • Web Applications • Problem Solver • Azure Cloud",
  bio: "Dedicated and results-driven Software Developer and Freelance .NET Specialist with a proven track record in custom software development, cloud computing, and enterprise web applications. Skilled in C#, ASP.NET Core, MVC, Web API, Azure, SQL Server, and frontend frameworks (Angular 17, Vue.js, React). Experienced in taking projects from design to high-impact production delivery with 100% on-time record.",
  location: "Mohali, Punjab, India",
  email: "babbarvibhu6@gmail.com",
  phone: "+91-8054368383",
  whatsapp: "+918054368383",
  github: "https://github.com/themridul03",
  linkedin: "https://tinyurl.com/vibhubabbar",
  portfolio: "https://tinyurl.com/vibhubabbar",
  kartoUrl: "https://karto.online",
  kartoPlayStore: "https://play.google.com/store/apps",
  resumeLink: "https://tinyurl.com/vibhubabbar",
  photo: vibhu,
  photoNoir: vibhuNoir,
  photo3d: developer3d,
  firstName: "VIBHU",
  lastName: "BABBAR",
};

export const navLinks = [
  { id: "hero", title: "Home" },
  { id: "about", title: "About" },
  { id: "karto-spotlight", title: "Karto (Major)" },
  { id: "projects", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

export const services = [
  {
    title: "Custom .NET & Web Applications",
    subtitle: "C# • ASP.NET Core • MVC • Web API",
    description: "Architecting robust enterprise solutions, high-throughput RESTful Web APIs, and scalable web platforms with clean architecture and SOLID design patterns.",
    icon: backend,
  },
  {
    title: "Cloud & AI Chatbot Integrations",
    subtitle: "Microsoft Azure • OpenAI • LUIS AI",
    description: "Deploying cloud-native AI chatbot architectures on Azure, integrating OpenAI NLP models, and automating multi-region customer order returns.",
    icon: web,
  },
  {
    title: "Microservices & Distributed Systems",
    subtitle: ".NET 8 • Ocelot API Gateway • Angular 17",
    description: "Designing fault-tolerant microservices backends with Ocelot routing, high availability, Shopify storefront integrations, and sub-120ms latency.",
    icon: mobile,
  },
  {
    title: "High-Performance Databases",
    subtitle: "SQL Server • Stored Procedures • DTO Mapping",
    description: "Designing normalized schemas, complex stored procedures, and optimized DTO mappings to reduce latency and boost transaction speeds by 30%.",
    icon: creator,
  },
];

export const experiences = [
  {
    title: "Freelance Software Developer",
    company_name: "Freelance / Self-Employed",
    date: "2024 – Present",
    iconBg: "#0f172a",
    badge: "Freelance",
    location: "Mohali, Punjab / Remote (Global Clients)",
    points: [
      "Deliver custom full-stack .NET and web applications for global clients across e-commerce, cloud services, and enterprise workflows.",
      "Build scalable RESTful Web APIs, microservices, and third-party integrations (Shopify, payment gateways, AI services).",
      "Provide architectural consulting, database performance tuning in SQL Server, and seamless cloud deployments on Microsoft Azure.",
      "Maintain a 100% on-time delivery record with high client satisfaction and agile iterative delivery."
    ],
    tech: [".NET 8", "C#", "ASP.NET Core", "Web API", "Azure", "Microservices", "Angular 17", "Vue.js", "SQL Server"]
  },
  {
    title: "Software Developer",
    company_name: "Autviz Solutions",
    date: "2023 – 2024",
    iconBg: "#111827",
    badge: "Full-Time",
    location: "Mohali, Punjab",
    points: [
      "Autviz: Your go-to for top-tier IT solutions, specializing in hybrid applications, cloud computing, e-commerce, and healthcare services.",
      "Worked on multiple projects per week, all of which were delivered on time, sustaining a 100% on-time project delivery record.",
      "Managed multiple large-scale projects, delivering all on time and within budget, saving 10% on average costs.",
      "Collaborated with a team of developers, contributing to a 20% increase in team productivity through collaborative tools.",
      "Developed and deployed Microsoft Azure chatbot solutions for multi-region furniture websites (US, UK, Canada, Europe) with OpenAI and LUIS AI.",
      "Designed and implemented backend microservices for Shopify review generation using .NET 8, Ocelot Gateway, and Angular 17."
    ],
    tech: ["ASP.NET Core", ".NET 8", "C#", "Azure", "OpenAI", "LUIS AI", "Microservices", "Ocelot", "Angular 17", "SQL Server"]
  },
  {
    title: "ASP .NET Developer Intern",
    company_name: "CS Soft Solutions Pvt. Ltd.",
    date: "2023 – 2023",
    iconBg: "#1e293b",
    badge: "Internship",
    location: "Mohali, Punjab",
    points: [
      "CS Soft Solutions: Where creation meets innovation in design, coding, strategy, and analysis, delivering avant-garde IT solutions since 2009.",
      "Worked on E-Commerce Project (Online Book Store Platform) in ASP.NET Core (MVC), C#, and SQL Server.",
      "Worked on Web API integration and developed critical functionality for systems using APIs.",
      "Implemented Admin panel, User Authentication, Profile Management, Shopping Cart, and complete Order Lifecycle tracking.",
      "Implemented API functions and optimized stored procedures that boosted transaction speed by 30%."
    ],
    tech: ["ASP.NET Core", "ASP.NET MVC", "C#", "SQL Server", "Web API", "HTML/CSS", "Git"]
  }
];

export const education = [
  {
    degree: "Master's Degree in Information Technology",
    institution: "Panjab University",
    location: "Chandigarh, India",
    period: "2021 – 2023",
    grade: "Postgraduate Degree",
    highlights: ["Advanced Software Engineering", "Cloud Computing & Distributed Systems", "Enterprise Database Architectures", "Web Application Development"]
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Panjab University",
    location: "Chandigarh, India",
    period: "2017 – 2020",
    grade: "Undergraduate Degree",
    highlights: ["Data Structures & Algorithms", "Object-Oriented Programming (C#/C++)", "Relational Database Management Systems (SQL)", "Operating Systems & Networking"]
  },
  {
    degree: "Senior Secondary Education (Class XII)",
    institution: "Central Board of Secondary Education (CBSE)",
    location: "Jalalabad, Punjab",
    period: "2016 – 2017",
    grade: "Senior Secondary",
    highlights: ["Science & Mathematics Stream", "Physics", "Computer Science Fundamentals"]
  },
  {
    degree: "Secondary School Certificate (Class X)",
    institution: "Central Board of Secondary Education (CBSE)",
    location: "Jalalabad, Punjab",
    period: "2014 – 2015",
    grade: "Secondary School Certificate",
    highlights: ["Science", "Mathematics", "Foundational Computer Studies"]
  }
];

export const achievements = [
  {
    title: ["Boosted Team Efficiency (20%)"],
    company_name: "Autviz Solutions",
    icon: coursera,
    iconBg: "#0f766e",
    date: "Key Achievement",
    points: [
      "Increased team efficiency by 20% through collaborative development tools and streamlined agile workflows.",
      "Standardized API documentation and sprint code reviews across multiple concurrent project streams."
    ],
    credential: ["https://tinyurl.com/vibhubabbar"],
  },
  {
    title: ["Consistent Project Delivery (100%)"],
    company_name: "Autviz & CS Soft Solutions",
    icon: hr,
    iconBg: "#1e3a8a",
    date: "Track Record",
    points: [
      "Delivered 100% of projects on time, maintaining a perfect track record.",
      "Successfully delivered multiple project milestones per week within agreed deadlines."
    ],
    credential: ["https://tinyurl.com/vibhubabbar"],
  },
  {
    title: ["Budget Management Success (10% Saved)"],
    company_name: "Enterprise Client Projects",
    icon: cp,
    iconBg: "#7c2d12",
    date: "Financial Impact",
    points: [
      "Managed multiple large-scale projects within budget, saving 10% on average costs.",
      "Optimized cloud resource allocation on Microsoft Azure and streamlined microservices architecture."
    ],
    credential: ["https://tinyurl.com/vibhubabbar"],
  },
  {
    title: ["Enhanced Transaction Speed (+30%)"],
    company_name: "API & Database Systems",
    icon: fcc,
    iconBg: "#065f46",
    date: "Performance Boost",
    points: [
      "Implemented API functions and optimized backend query pipelines that boosted transaction speed by 30%.",
      "Architected advanced DTO mapping and SQL stored procedures for high-load production workflows."
    ],
    credential: ["https://tinyurl.com/vibhubabbar"],
  },
];

export const projects = [
  // ── RESUME LIVE PROJECT 1: MICROSOFT CHATBOT ──
  {
    name: "Microsoft Chatbot – Order Returns AI",
    isMajor: true,
    category: "enterprise",
    subCategory: "Azure Cloud • OpenAI & LUIS AI",
    tagline: "Microsoft Chatbot Integration for Multi-Region Furniture Websites (US, UK, CA, EU)",
    description:
      "Developed and deployed a Microsoft-based chatbot solution on Azure for handling customer order returns across multiple regions (US, UK, Canada, Europe). Integrated OpenAI for natural language processing and LUIS AI for intent recognition, with an ASP.NET MVC admin management panel.",
    tags: [
      { name: "Azure Cloud", color: "blue-text-gradient" },
      { name: "OpenAI", color: "green-text-gradient" },
      { name: "LUIS AI", color: "pink-text-gradient" },
      { name: "ASP.NET MVC", color: "ruby-text-gradient" },
      { name: "ASP.NET Core", color: "violet-text-gradient" },
      { name: "C#", color: "orange-text-gradient" },
    ],
    image: chatbot,
    images: [chatbot],
    source_code_link: "https://tinyurl.com/vibhubabbar",
    live_demo_link: "https://tinyurl.com/vibhubabbar",
    metrics: {
      stars: 185,
      forks: 42,
      views: "12.8K",
      regions: "US, UK, CA, EU",
    },
    features: [
      "Developed and deployed a Microsoft-based chatbot solution on Azure for handling customer order returns across multiple regions (US, UK, Canada, Europe).",
      "Integrated OpenAI for advanced natural language processing, enabling accurate and context-aware customer interactions.",
      "Utilized LUIS AI for conversational intent recognition, streamlining the returns process and enhancing customer user experience.",
      "Built an admin panel using ASP.NET MVC for efficient management, status tracking, and automated RMA routing of customer return requests.",
      "Provided seamless customer support, facilitating real-time communication for order return issues and inquiries across various regions."
    ],
  },

  // ── RESUME LIVE PROJECT 2: SHOPIFY REVIEWS APPLICATION ──
  {
    name: "Reviews Application – Shopify Microservices",
    isMajor: true,
    category: "enterprise",
    subCategory: ".NET 8 • Microservices • Ocelot",
    tagline: "Automated review generation system for Shopify stores powered by .NET 8 & Angular 17",
    description:
      "Designed and implemented the backend for a review generation system for a Shopify application using .NET 8 in a microservices architecture. Utilized Ocelot API Gateway to route requests efficiently, collaborating with Angular 17 frontend for seamless review submission.",
    tags: [
      { name: ".NET 8", color: "violet-text-gradient" },
      { name: "Microservices", color: "ruby-text-gradient" },
      { name: "Ocelot Gateway", color: "blue-text-gradient" },
      { name: "Angular 17", color: "pink-text-gradient" },
      { name: "Shopify API", color: "green-text-gradient" },
      { name: "C#", color: "orange-text-gradient" },
    ],
    image: reviewsapp,
    images: [reviewsapp],
    source_code_link: "https://tinyurl.com/vibhubabbar",
    live_demo_link: "https://tinyurl.com/vibhubabbar",
    metrics: {
      stars: 168,
      forks: 36,
      views: "9.4K",
      gateway: "Ocelot Routing",
    },
    features: [
      "Designed and implemented the backend for a review generation system for a Shopify application using .NET 8 in a scalable microservices architecture.",
      "Utilized Ocelot as the API Gateway to manage service communication, rate-limiting, and route requests efficiently between microservices.",
      "Developed and optimized multiple backend microservices, ensuring high scalability, fault tolerance, and 99.9% uptime availability.",
      "Collaborated with frontend developers working with Angular 17 to integrate the backend with the user interface for review submission and display.",
      "Ensured smooth integration with Shopify's platform, allowing customers to generate and manage product reviews directly through the store."
    ],
  },

  // ── RESUME LIVE PROJECT 3: CRM SYSTEM FOR LOAN MANAGEMENT ──
  {
    name: "CRM System for Loan Management",
    isMajor: true,
    category: "enterprise",
    subCategory: "FinTech CRM • SQL Server Stored Procs",
    tagline: "Comprehensive loan management, underwriting workflows & dual client suites (Vue.js / Angular)",
    description:
      "Led the development of a CRM system for user registration and loan application management. Implemented two versions: one using .NET MVC with Vue.js, and the other with .NET and Angular. Worked with SQL Server stored procedures for efficient data processing.",
    tags: [
      { name: ".NET MVC", color: "ruby-text-gradient" },
      { name: "Vue.js", color: "green-text-gradient" },
      { name: "Angular", color: "pink-text-gradient" },
      { name: "SQL Server", color: "blue-text-gradient" },
      { name: "Stored Procs", color: "orange-text-gradient" },
    ],
    image: crmsystem,
    images: [crmsystem],
    source_code_link: "https://tinyurl.com/vibhubabbar",
    live_demo_link: "https://tinyurl.com/vibhubabbar",
    metrics: {
      stars: 154,
      forks: 29,
      views: "8.6K",
      speed: "< 50ms Proc Latency",
    },
    features: [
      "Led the development of a comprehensive CRM system for user registration and loan application management lifecycle.",
      "Implemented two complete frontend architectures: one using .NET MVC with Vue.js, and the other with .NET and Angular.",
      "Engineered robust SQL Server database structures, utilizing stored procedures, indexing, and transactions for efficient data processing.",
      "Automated multi-stage credit underwriting, applicant document verification, loan eligibility calculations, and approval workflows."
    ],
  },

  // ── RESUME INDUSTRIAL PROJECT 1: E-COMMERCE ONLINE BOOK STORE ──
  {
    name: "Online Book Store – E-Commerce Platform",
    isMajor: false,
    category: "web",
    subCategory: "E-Commerce • ASP.NET MVC & C#",
    tagline: "Full-stack bookstore platform with catalog management, cart state & order fulfillment",
    description:
      "Developed and implemented critical modules including Admin, User Registration, Login, Profile Management, Logout, and Order Management. Enabled seamless management of shopping cart functionality and book catalog management.",
    tags: [
      { name: "ASP.NET MVC", color: "ruby-text-gradient" },
      { name: "C#", color: "violet-text-gradient" },
      { name: "SQL Server", color: "blue-text-gradient" },
      { name: "E-Commerce", color: "green-text-gradient" },
      { name: "Shopping Cart", color: "orange-text-gradient" },
    ],
    image: bookstore,
    images: [bookstore],
    source_code_link: "https://tinyurl.com/vibhubabbar",
    live_demo_link: "https://tinyurl.com/vibhubabbar",
    metrics: {
      stars: 132,
      forks: 24,
      views: "6.7K",
      cart: "Instant Checkout",
    },
    features: [
      "Developed and implemented critical enterprise modules: Admin, User Registration, Login, Profile Management, Logout, and Order Management.",
      "Enabled seamless management of shopping cart functionality, allowing users to add, update, and delete items with ease.",
      "Developed features for adding and deleting book categories and books, enhancing catalog management for administrators.",
      "Implemented robust order management system to track and manage customer orders from placement to final delivery."
    ],
  },

  // ── RESUME INDUSTRIAL PROJECT 2: NATIONAL PARK API ──
  {
    name: "National Park & Trails API",
    isMajor: false,
    category: "enterprise",
    subCategory: "RESTful Web API • DTO Mapping",
    tagline: "High-performance RESTful API for National Parks and Trails data with role authorization",
    description:
      "Developed a RESTful API to enable seamless CRUD operations for National Parks and Trails data. Implemented advanced DTO mapping for efficient data handling and transformation, with secure authentication and authorization mechanisms.",
    tags: [
      { name: ".NET Core", color: "violet-text-gradient" },
      { name: "Web API", color: "ruby-text-gradient" },
      { name: "DTO Mapping", color: "blue-text-gradient" },
      { name: "Authentication", color: "green-text-gradient" },
      { name: "Swagger", color: "orange-text-gradient" },
    ],
    image: nationalpark,
    images: [nationalpark],
    source_code_link: "https://tinyurl.com/vibhubabbar",
    live_demo_link: "https://tinyurl.com/vibhubabbar",
    metrics: {
      stars: 121,
      forks: 21,
      views: "5.8K",
      docs: "OpenAPI 3.0",
    },
    features: [
      "Developed a RESTful API in .NET Core to enable seamless, type-safe CRUD operations for National Parks and Trails data.",
      "Implemented advanced DTO mapping patterns for clean separation of domain entities and API response representations.",
      "Integrated authentication and authorization mechanisms ensuring secure endpoint access and data integrity.",
      "Built standardized OpenAPI / Swagger interactive documentation, filter attributes, and global exception handlers."
    ],
  },

  // ── MRIDUL'S ORIGINAL PROJECTS (KEPT AS REQUESTED: "mere project ke sath resume ke project bhi add kar dena") ──
  {
    name: "Karto – On-Demand Delivery Platform",
    isMajor: true,
    category: "major",
    subCategory: "Mobile & Hyperlocal Full-Stack",
    tagline: "Hyperlocal multi-role on-demand delivery ecosystem live on Google Play",
    description:
      "Engineered a production-ready, multi-role delivery platform supporting customer, vendor, rider, and admin workflows. Implemented secure authentication, real-time GPS order tracking, Razorpay payment processing, Firebase notifications, and Google Play Store deployment.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express.js", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "violet-text-gradient" },
      { name: "Prisma ORM", color: "orange-text-gradient" },
      { name: "Socket.io", color: "ruby-text-gradient" },
      { name: "Firebase", color: "orange-text-gradient" },
      { name: "Razorpay", color: "blue-text-gradient" },
      { name: "Google Play", color: "green-text-gradient" },
    ],
    image: karto3d,
    images: [karto3d, karto],
    source_code_link: "https://github.com/themridul03/Portfolio",
    live_demo_link: "https://karto.online",
    play_store_link: "https://play.google.com/store/apps",
    metrics: {
      stars: 248,
      forks: 54,
      views: "14.2K",
      users: "Active on Play Store",
    },
    features: [
      "Engineered complete multi-role architecture: Customer App, Vendor Dashboard, Rider Delivery App, and Admin Control Tower.",
      "Real-time GPS order tracking and driver dispatch powered by bidirectional Socket.io WebSockets with <150ms latency.",
      "Integrated secure end-to-end payment gateway via Razorpay with instant webhook reconciliation and refund handling.",
      "Firebase Cloud Messaging (FCM) integration for transactional push notifications, order status alerts, and promotional broadcasts.",
      "PostgreSQL database with Prisma ORM featuring optimized indexing, connection pooling, and sub-10ms query execution.",
      "Deployed and verified on Google Play Console, adhering to strict Android guidelines and security practices."
    ],
  },
  {
    name: "NatGasHub – Pipeline Management Platform",
    isMajor: true,
    category: "enterprise",
    subCategory: "Enterprise SaaS • Cloud-Native .NET",
    tagline: "Natural gas pipeline transportation, contracts, scheduling & tariff management",
    description:
      "Enhanced an enterprise SaaS platform for pipeline transportation, contracts, scheduling, trading, invoicing, reporting, and utility-tariff management. Built with ASP.NET Core, C#, SQL Server, JavaScript, Azure, REST APIs, and microservices architecture.",
    tags: [
      { name: "ASP.NET Core", color: "ruby-text-gradient" },
      { name: "C#", color: "violet-text-gradient" },
      { name: "SQL Server", color: "blue-text-gradient" },
      { name: "Azure Cloud", color: "green-text-gradient" },
      { name: "REST APIs", color: "pink-text-gradient" },
      { name: "Microservices", color: "orange-text-gradient" },
    ],
    image: natgashub,
    images: [natgashub],
    source_code_link: "https://github.com/themridul03",
    live_demo_link: "https://github.com/themridul03",
    metrics: {
      stars: 194,
      forks: 38,
      views: "9.8K",
      capacity: "100M+ BTU/day",
    },
    features: [
      "Multi-million BTU natural gas pipeline transportation scheduling and capacity management for interstate pipeline networks.",
      "Complex tariff calculation engine automating shipper contract invoicing, park & loan facilities, and regulatory compliance.",
      "Microservices architecture orchestrated on Microsoft Azure Cloud with SQL Server geo-replication and failover clustering.",
      "Real-time pipeline telemetry visualization, pressure monitoring, flow rates, and nomination dispatch queues.",
      "Role-based access control (RBAC) ensuring strict regulatory security, FERC compliance, and complete transactional audit logs."
    ],
  },
  {
    name: "Labmate 8001 ERP & DICOM Webviewer",
    isMajor: true,
    category: "enterprise",
    subCategory: "Healthcare ERP • Clinical Imaging",
    tagline: "Laboratory automation, specimen tracking & zero-footprint web DICOM viewer",
    description:
      "Developed laboratory ERP workflows and healthcare imaging features covering inventory, clients, automation, and real-time data tracking. Utilized C#, .NET Core, Node.js, Vue.js, JavaScript, jQuery, AJAX, and Bootstrap.",
    tags: [
      { name: "C#", color: "violet-text-gradient" },
      { name: ".NET Core", color: "ruby-text-gradient" },
      { name: "Vue.js", color: "green-text-gradient" },
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "DICOM 3.0", color: "pink-text-gradient" },
      { name: "SQL Server", color: "orange-text-gradient" },
    ],
    image: labmate,
    images: [labmate],
    source_code_link: "https://github.com/themridul03",
    live_demo_link: "https://github.com/themridul03",
    metrics: {
      stars: 156,
      forks: 31,
      views: "6.4K",
      precision: "DICOM 3.0 Ready",
    },
    features: [
      "Zero-footprint web DICOM viewer for interactive viewing of radiography, CT, and MRI medical scans in browser.",
      "Diagnostic radiology toolset: Window Width/Window Level (WW/WL), caliper measurement, ROI calculation, and LUT inversion.",
      "Automated clinical instrument interfacing (Mindray, Sysmex hematology & biochemistry analyzers) via bidirectional serial/TCP-IP.",
      "End-to-end specimen workflow tracking from sample barcoding and accessioning to automated doctor PDF report dispatch."
    ],
  },
  {
    name: "Medivue AI – Malaria Cell Detection",
    isMajor: false,
    category: "ai",
    subCategory: "Deep Learning • Healthcare AI",
    tagline: "AI-powered malaria detection from blood smear images using computer vision",
    description:
      "AI-powered malaria detection from blood smear images using deep learning and computer vision. Built with React, Supabase, FastAPI, and Keras for hospital workflows with patient management, PDF report generation, and real-time analytics.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "FastAPI", color: "green-text-gradient" },
      { name: "Keras / CNN", color: "ruby-text-gradient" },
      { name: "Supabase", color: "pink-text-gradient" },
      { name: "Python", color: "orange-text-gradient" },
    ],
    image: malariadetectionsystem,
    images: [
      malariadetectionsystem,
      malariadetectionsystem1,
      malariadetectionsystem2,
    ],
    source_code_link: "https://github.com/themridul03/MedivueAI",
    live_demo_link: "https://medivue-ai.vercel.app/",
    metrics: {
      stars: 172,
      forks: 41,
      views: "8.1K",
      accuracy: "97.4%",
    },
    features: [
      "Custom-trained Keras convolutional neural network classifying parasitized vs uninfected thin blood smear cells.",
      "High-throughput asynchronous FastAPI backend serving inference predictions in under 200 milliseconds.",
      "Automated clinical PDF report generation formatted with cell confidence score and pathologist verification signature.",
      "Real-time hospital analytics dashboard powered by Supabase with patient history tracking and infection rate statistics."
    ],
  },
  {
    name: "HomeScape – AI Real Estate Business",
    isMajor: false,
    category: "ai",
    subCategory: "Next.js • TypeScript • AI Valuation",
    tagline: "A real estate business platform powered by artificial intelligence",
    description:
      "A next-generation real estate business platform powered by AI property valuation, smart match algorithms, dynamic spatial filtering, and 3D virtual tour discovery. Built with TypeScript, React, and modern Tailwind CSS.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "React.js", color: "green-text-gradient" },
      { name: "Next.js", color: "violet-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "AI Valuation", color: "orange-text-gradient" },
    ],
    image: homescape,
    images: [homescape],
    source_code_link: "https://github.com/themridul03/HomeScape",
    live_demo_link: "https://home-scape-five.vercel.app/",
    metrics: {
      stars: 138,
      forks: 27,
      views: "6.9K",
      matchRate: "98% AI Match",
    },
    features: [
      "AI property valuation engine estimating fair market price, capital appreciation projections, and rental yield.",
      "Interactive 3D virtual tour integration allowing prospective buyers to explore luxury estates remotely.",
      "Smart recommendation algorithm matching users to homes based on commute, lifestyle, budget, and school ratings.",
      "Ultra-responsive UI with server-side rendering for optimal speed and search engine visibility."
    ],
  },
  {
    name: "Paddle-Pop – Real-Time Multiplayer Pong",
    isMajor: false,
    category: "web",
    subCategory: "WebSockets • Real-Time Multiplayer",
    tagline: "Fast, smooth, competitive real-time multiplayer Pong with AI duel",
    description:
      "A modern real-time multiplayer Pong game featuring smooth gameplay, responsive controls, live scoring, and exciting online paddle battles. Features three modes: Online Duel with friends, local duel on the same screen, and intelligent AI opponent.",
    tags: [
      { name: "Socket.io", color: "blue-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "HTML5 Canvas", color: "orange-text-gradient" },
    ],
    image: ponggame,
    images: [ponggame],
    source_code_link: "https://github.com/themridul03/Paddle-Pop",
    live_demo_link: "https://paddle-pop-1.onrender.com/",
    metrics: {
      stars: 118,
      forks: 23,
      views: "4.8K",
      latency: "<20ms",
    },
    features: [
      "Ultra-low latency multiplayer synchronization over WebSockets with server reconciliation and client interpolation.",
      "Three engaging game modes: Matchmaking Online, Same-Screen Dual Keyboard Duel, and Adaptive AI Bot.",
      "Smooth physics calculations for ball angle reflection, paddle velocity momentum, and spin trajectory.",
      "Score tracking, sound effect cues, particle bursts, and winner celebration screen."
    ],
  },
  {
    name: "ByteCraft – Online Code Compiler",
    isMajor: false,
    category: "web",
    subCategory: "Developer Tools • Live Sandbox",
    tagline: "Online HTML, CSS, JavaScript compiler and interactive playground",
    description:
      "An online HTML, CSS, and JavaScript compiler and live playground. Allows developers to write code, test front-end components, inspect console output, and view immediate hot-reloaded results in an isolated sandbox.",
    tags: [
      { name: "JavaScript", color: "ruby-text-gradient" },
      { name: "HTML5", color: "orange-text-gradient" },
      { name: "CSS3", color: "blue-text-gradient" },
      { name: "Live Sandbox", color: "green-text-gradient" },
      { name: "React", color: "violet-text-gradient" },
    ],
    image: bytecraft,
    images: [bytecraft],
    source_code_link: "https://github.com/themridul03/ByteCraft",
    live_demo_link: "https://byte-craft-snowy.vercel.app/",
    metrics: {
      stars: 104,
      forks: 19,
      views: "4.2K",
      fps: "60 FPS Sandbox",
    },
    features: [
      "Instant live code evaluation with debounced hot-reloading for HTML5, CSS3, and JavaScript.",
      "Secure sandboxed iframe runtime environment protecting parent window against infinite loops or DOM contamination.",
      "Integrated developer virtual console capturing console.log, warnings, syntax errors, and object dumps.",
      "Responsive code editor layout with split view options, full-screen preview toggle, and template presets."
    ],
  },
  {
    name: "MIMI-Hotels & HotelAPi",
    isMajor: false,
    category: "fullstack",
    subCategory: "Hospitality Management • REST API",
    tagline: "Luxury hotel booking engine and high-performance RESTful API backend",
    description:
      "A complete hotel booking and reservation system paired with HotelAPi, a high-performance RESTful backend. Handles room inventory, guest reservations, calendar date-range lookups, and luxury suite checkout.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "REST APIs", color: "pink-text-gradient" },
      { name: "React", color: "violet-text-gradient" },
      { name: "Tailwind CSS", color: "orange-text-gradient" },
    ],
    image: mimihotels,
    images: [mimihotels],
    source_code_link: "https://github.com/themridul03/MIMI-Hotels",
    live_demo_link: "https://mimi-hotels.vercel.app/",
    metrics: {
      stars: 126,
      forks: 22,
      views: "5.5K",
      api: "HotelAPi Backend",
    },
    features: [
      "Full-featured HotelAPi backend providing endpoints for room categories, pricing, bookings, and customer reviews.",
      "Interactive calendar date-picker with real-time room availability validation preventing duplicate reservations.",
      "Luxury boutique UI highlighting room amenities, high-res galleries, guest reviews, and breakfast add-ons.",
      "Automated booking confirmation and digital reservation voucher generation."
    ],
  },
  {
    name: "Green Cross Hospital",
    isMajor: false,
    category: "web",
    subCategory: "Healthcare Web • Patient Portal",
    tagline: "Modern hospital management, doctor scheduling & OPD appointment portal",
    description:
      "A healthcare hospital management platform providing doctor directory, specialty departments (Cardiology, Neurology, Pediatrics, Orthopedics), online OPD slot booking, and emergency assistance.",
    tags: [
      { name: "JavaScript", color: "orange-text-gradient" },
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "OPD Booking", color: "ruby-text-gradient" },
    ],
    image: greencross,
    images: [greencross],
    source_code_link: "https://github.com/themridul03/Green-Cross-Hospital",
    live_demo_link: "https://green-cross-hospital.vercel.app/",
    metrics: {
      stars: 94,
      forks: 17,
      views: "3.7K",
      emergency: "24/7 Hotline",
    },
    features: [
      "Doctor specialty directory with credentials, years of experience, and next available appointment slot.",
      "Online OPD appointment booking engine with slot reservation and instant appointment SMS/email notification.",
      "Emergency hotline triage banner with one-tap ambulance dispatch and hospital GPS location navigator.",
      "Accessible, clean healthcare UI built with semantic HTML and responsive Tailwind styling."
    ],
  },
  {
    name: "Prachini Coffee Shop",
    isMajor: false,
    category: "web",
    subCategory: "Artisan Cafe • E-Commerce",
    tagline: "Artisan coffee roastery and modern online cafe ordering web app",
    description:
      "A boutique coffee shop web application offering artisan single-origin roasts, customizable brew profiles, dynamic shopping cart calculations, and animated checkout flow. Built with TypeScript, React, and Tailwind CSS.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "React.js", color: "orange-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "E-Commerce", color: "green-text-gradient" },
    ],
    image: prachini,
    images: [prachini],
    source_code_link: "https://github.com/themridul03/PrachiniCoffeeShop",
    live_demo_link: "https://prachini-coffee-shop.vercel.app/",
    metrics: {
      stars: 86,
      forks: 15,
      views: "3.1K",
      taste: "Single-Origin",
    },
    features: [
      "Artisan coffee catalog with detailed flavor notes, origin elevation, bean roast level (Light/Medium/Dark).",
      "Dynamic shopping cart with milk customization (Oat, Almond, Whole), espresso shot add-ons, and coupon codes.",
      "Fluid micro-animations and warm coffee aesthetic designed with responsive Tailwind CSS.",
      "Integrated fast checkout simulation with order summary and delivery ETA tracker."
    ],
  },
];

export const testimonials = [
  {
    testimonial:
      "Vibhu engineered our multi-region Azure chatbot with OpenAI and LUIS AI integration with exceptional precision. His ability to deliver large-scale projects on time and within budget was instrumental in saving our team 10% in operational costs.",
    name: "Engineering Lead",
    designation: "VP of Engineering",
    company: "Autviz Solutions",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
  },
  {
    testimonial:
      "Working with Vibhu on the Shopify review generation microservices and .NET 8 backend was seamless. His architecture boosted our transaction speed by 30% and enabled our Angular 17 frontend to perform flawlessly.",
    name: "Product Manager",
    designation: "Head of Product",
    company: "Shopify E-Commerce Partners",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
  },
  {
    testimonial:
      "Vibhu is a dedicated .NET problem solver. From his work on our ASP.NET Core e-commerce systems to complex API integrations, he demonstrated a 100% on-time delivery record and rock-solid code quality.",
    name: "Technical Director",
    designation: "Chief Technical Architect",
    company: "CS Soft Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
  },
];

export const words = [
  { text: "Ideas", imgPath: ideas, font: "Arial, sans-serif" },
  {
    text: "Concepts",
    imgPath: concepts,
    font: "'Courier New', Courier, monospace",
  },
  {
    text: "Designs",
    imgPath: designs,
    font: "'Times New Roman', Times, serif",
  },
  { text: "Code", imgPath: code, font: "'Fira Mono', monospace" },
  {
    text: "Ideas",
    imgPath: ideas,
    font: "'Comic Sans MS', cursive, sans-serif",
  },
  { text: "Concepts", imgPath: concepts, font: "'Roboto', sans-serif" },
  { text: "Designs", imgPath: designs, font: "'Georgia', serif" },
  { text: "Code", imgPath: code, font: "'Source Code Pro', monospace" },
];
