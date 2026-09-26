import { profilePhotoDataUri } from './profilePhoto'

export const profile = {
  name: 'Yash Kumar',
  role: 'Full Stack & Applied AI Engineer',
  roles: ['Full-Stack Developer', 'Applied AI Builder', 'System Architect', 'Distributed Systems'],
  tagline:
    'Final-year CS student building scalable applications, real-time systems, and AI-powered products that actually ship.',
  location: 'Ghaziabad, Uttar Pradesh, India',
  email: 'yash123450.yk@gmail.com',
  phone: '+91 9717785778',
  linkedin: 'https://linkedin.com/in/yash-kumar123',
  github: 'https://github.com/Yash-kumar123',
  badge: 'SIH 2025 National Finalist',
  photo: profilePhotoDataUri,
  resumeUrl: '/Resume.pdf',
}

export const about = `I am a final-year Computer Science student at ABESIT (AKTU) who engineers software systems from the ground up. Over the past two years, I've designed and shipped real-time collaborative cloud IDEs, high-throughput cognitive speech analysis pipelines, and multi-tenant enterprise platforms. In 2025, my team reached the national finals of the Smart India Hackathon (SIH) from 500+ nationwide contenders. I bridge modern product design with rigorous backend engineering — specializing in React 19, Node.js, FastAPI, Yjs CRDTs, and multi-agent AI architectures.`

export const stats = [
  { label: 'Years Engineering', value: '2+' },
  { label: 'Production Systems', value: '5+' },
  { label: 'Hackathon Finalist', value: 'SIH 2025' },
  { label: 'AI Quiz Competitors', value: '525K+' },
]

export const education = {
  school: 'ABES Institute of Technology (ABESIT), AKTU',
  degree: 'B.Tech in Computer Science & Engineering',
  years: '2023 – 2027',
  location: 'Ghaziabad, UP, India',
}

export const skillCategories = [
  {
    id: 'languages',
    name: 'Languages',
    description: 'Foundational programming languages used for high-concurrency backends, algorithms, and reactive UIs.',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Dart', 'C', 'HTML5', 'CSS3'],
  },
  {
    id: 'frontend',
    name: 'Frontend & Mobile',
    description: 'Component architecture, state synchronization, fluid motion design, and cross-platform clients.',
    skills: ['React 19', 'Next.js', 'Flutter', 'Tailwind CSS', 'Framer Motion', 'Three.js / WebGL'],
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    description: 'Distributed microservices, async worker architectures, RESTful APIs, and real-time sockets.',
    skills: ['Node.js', 'FastAPI', 'Express.js', 'Prisma ORM', 'WebSockets', 'Swagger / OpenAPI 3.0'],
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Applied LLM orchestration, agentic reasoning, vector retrieval, and acoustic feature extraction.',
    skills: ['LangChain', 'RAG Pipelines', 'Multi-Agent Systems', 'ChromaDB', 'Vector Embeddings', 'Librosa', 'Ollama'],
  },
  {
    id: 'databases',
    name: 'Databases & Storage',
    description: 'Relational 3NF schemas, document stores, in-memory caches, and vector index databases.',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'ChromaDB'],
  },
  {
    id: 'devops',
    name: 'DevOps & Tooling',
    description: 'Containerization, monorepo architectures, CI/CD deployment pipelines, and security protocols.',
    skills: ['Docker', 'Turborepo', 'Git / GitHub', 'JWT Auth & RBAC', 'Postman', 'Vercel', 'Render'],
  },
  {
    id: 'realtime',
    name: 'Real-Time & Collaboration',
    description: 'Conflict-free replicated data types, sub-50ms presence sync, and browser-sandboxed execution.',
    skills: ['Yjs CRDTs', 'WebSockets', 'In-Browser Terminals', 'Docker Containers', 'Event Emitters'],
  },
]

export const projects = [
  {
    id: 'devsync-ai',
    number: '01',
    name: 'DevSync AI',
    subtitle: 'Real-Time Collaborative AI-Powered Cloud IDE',
    date: '07/2026',
    liveUrl: 'https://dev-sync-ai-web.vercel.app',
    repoUrl: 'https://github.com/Yash-kumar123/DevSync_AI',
    accent: '#00E5FF',
    tagline: 'Collaborative cloud development environment with real-time editing, multi-agent AI workflows, and distributed state.',
    description:
      'Engineered a high-performance Turborepo monorepo separating React 19 frontend, Node/Express WebSocket gateway, and Python FastAPI AI microservice so compute-intensive AI operations never freeze the editor.',
    bullets: [
      'Multiplayer Code Sync: Real-time collaborative editing using Yjs CRDTs over WebSockets with live cursor tracking, user presence, and zero conflict resolution stalls.',
      '3-Agent AI Pipeline: Architected Planner, Coder, and Auditor agents orchestrating OpenAI, Claude, Gemini, and local Ollama, grounded in local codebase via ChromaDB RAG.',
      'In-Browser Docker Terminal: Integrated interactive terminal streaming directly from containerized development sandboxes with automated Git commit generation and RBAC admin panels.',
    ],
    stack: ['React 19', 'Node.js', 'FastAPI', 'Yjs CRDT', 'WebSockets', 'ChromaDB', 'Docker'],
    challenge: 'Preventing heavy AI inference streaming and vector chunk retrieval from causing UI jank or lagging concurrent multi-user keystrokes in Monaco Editor.',
    solution: 'Decoupled the AI service into a standalone FastAPI daemon with async generator streams and offloaded state convergence to client-side Yjs CRDTs synced over binary WebSocket frames.',
    metrics: ['< 45ms cursor sync latency', '3 coordinated AI agents', '100% monorepo isolation'],
    architecture: {
      client: 'React 19 + Monaco Editor + Yjs Binding',
      gateway: 'Node.js / Express WebSocket Sync Server',
      aiService: 'FastAPI Agentic Orchestrator (LangChain + ChromaDB)',
      runtime: 'Docker Container Sandboxes & Redis Pub/Sub',
      flow: ['Monaco Keystroke', 'Yjs Binary CRDT Sync', 'Node Gateway', 'ChromaDB RAG', 'Multi-Agent LLM (Planner/Coder/Auditor)', 'Docker Sandbox Terminal'],
    },
  },
  {
    id: 'performance-eval',
    number: '02',
    name: 'Performance Evaluation System',
    subtitle: 'Enterprise Multi-Tenant Employee Review Platform',
    date: '08/2026',
    liveUrl: null,
    repoUrl: 'https://github.com/Yash-kumar123/performance-evaluation-system',
    accent: '#38BDF8',
    tagline: 'Multi-tenant evaluation engine supporting dynamic organizational hierarchies and database query-level isolation.',
    description:
      'Architected a single universal authentication gateway serving Employee, Manager, and HR roles across multiple enterprise tenants with absolute tenant data isolation enforced at the PostgreSQL query layer.',
    bullets: [
      'Universal Hierarchy Model: Modeled both flat startup structures and deep multi-tier enterprise hierarchies using a self-referencing manager_id across 6 normalized (3NF) relational tables.',
      'Standardized Review Cycles: Automated monthly reviews evaluating 5 performance vectors with granular JWT role-based access control (RBAC) and real-time HR compliance metrics.',
      'Production Documentation: Complete OpenAPI 3.0 / Swagger schema specification with idempotent database seeding scripts initializing multi-company testing environments.',
    ],
    stack: ['Flutter', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT RBAC', 'Swagger'],
    challenge: 'Supporting wildly varying enterprise reporting hierarchies without altering relational database schemas per tenant.',
    solution: 'Devised a recursive self-referential manager relationship in 3NF PostgreSQL with query-level tenant_id scoping and automated role privilege enforcement.',
    metrics: ['6 Normalized 3NF Entities', '5 Evaluation Vectors', 'Zero Cross-Tenant Leakage'],
    architecture: {
      client: 'Flutter Cross-Platform Client',
      gateway: 'Express.js REST Gateway + JWT RBAC Middleware',
      database: 'PostgreSQL Relational DB with Row-Level Scoping',
      docs: 'OpenAPI 3.0 / Interactive Swagger',
      flow: ['Universal Login', 'JWT Claims Validation', 'Tenant-Scoped Query', 'Hierarchical Aggregation', 'HR Compliance Dashboard'],
    },
  },
  {
    id: 'dementia-detection',
    number: '03',
    name: 'AI Tool for Early-Stage Dementia Detection',
    subtitle: 'Cognitive Audio & Acoustic Speech Analysis Engine',
    date: '11/2025',
    liveUrl: 'https://demdoctor.qzz.io',
    repoUrl: null,
    accent: '#818CF8',
    tagline: 'High-throughput speech processing backend extracting acoustic biomarkers for early cognitive decline detection.',
    description:
      'Built the medical-grade backend infrastructure powering 5+ interactive cognitive tests, audio ingestion pipelines, biomarker extraction, and diagnostic authentication via FastAPI and PostgreSQL.',
    bullets: [
      'Sub-2s Acoustic Extraction: Transcoded browser-streamed audio with FFmpeg and extracted speech feature matrices (MFCCs, pitch jitter, shimmer) via Librosa and Praat-Parselmouth in < 2 seconds.',
      'Zero-Data-Loss Architecture: Hardened multi-part audio upload pipelines with atomic transaction rollbacks, achieving 100% data fidelity across 100+ diagnostic trials.',
      'Low-Latency Diagnostic Delivery: Engineered asynchronous REST endpoints synchronizing audio classification, test randomization, and real-time clinical reporting.',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'FFmpeg', 'Librosa', 'Praat-Parselmouth'],
    challenge: 'Extracting high-dimensional acoustic feature matrices from variable-quality browser microphone inputs within user-perceived real time (< 2s).',
    solution: 'Constructed an async streaming audio pipeline using FFmpeg in-memory buffers paired with optimized Librosa MFCC transforms and parallelized Praat acoustic analysis.',
    metrics: ['< 2.0s Feature Extraction', '5+ Cognitive Test Pipelines', '100+ Test Trials with Zero Data Loss'],
    architecture: {
      client: 'Browser Audio Recording Client',
      gateway: 'FastAPI Asynchronous Gateway',
      pipeline: 'FFmpeg Transcoder + Librosa & Praat Acoustic Core',
      storage: 'PostgreSQL Diagnostic Store with SQLAlchemy ORM',
      flow: ['Browser Audio Stream', 'FFmpeg In-Memory Format Normalization', 'MFCC & Jitter Feature Extraction', 'Cognitive Scoring Classifier', 'Clinical Diagnostic Output'],
    },
  },
  {
    id: 'rent-vortex',
    number: '04',
    name: 'Rent-Vortex',
    subtitle: 'Full-Stack MERN Car Rental Platform',
    date: '12/2024',
    liveUrl: 'https://rent-vortex.vercel.app',
    repoUrl: 'https://github.com/Yash-kumar123/Rent-VORTEX',
    accent: '#2DD4BF',
    tagline: 'Multi-role vehicle rental marketplace with interactive geographic mapping and fine-grained access control.',
    description:
      'Engineered a scalable 3-tier marketplace platform (Host, Renter, Admin) featuring secure JWT authentication, bcrypt encryption, and interactive map-based fleet booking.',
    bullets: [
      'Interactive Geospatial Booking: Integrated React-Leaflet and OpenStreetMap for real-time fleet geolocation, pin clustering, and pickup radius calculations.',
      'Render Pipeline Optimization: Eliminated frontend render bottlenecks using React.memo, memoized selectors, and Axios token interceptors for seamless authentication refresh cycles.',
      'Role Scoping: Distinct control panels and booking lifecycle state machines for vehicle owners, customers, and administrative auditors.',
    ],
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'React-Leaflet', 'JWT'],
    challenge: 'Preventing excessive map and listing re-renders when filtering vehicle availability and geographical coordinates.',
    solution: 'Implemented memoized component boundaries with spatial query filtering in MongoDB and Axios interceptors for frictionless token renewal.',
    metrics: ['3-Role Architecture', 'Interactive Leaflet Maps', 'Sub-100ms Query Responses'],
    architecture: {
      client: 'React.js Client + React-Leaflet Map Engine',
      gateway: 'Node / Express REST API with JWT Auth',
      database: 'MongoDB GeoJSON Spatial Index Store',
      flow: ['Client Location Query', 'GeoJSON Spatial Search', 'Listing Availability Filter', 'Booking State Machine', 'Confirmed Reservation'],
    },
  },
  {
    id: 'pokedex',
    number: '05',
    name: 'Pokédex Explorer',
    subtitle: 'High-Performance React & Context API PokéAPI Client',
    date: '05/2025',
    liveUrl: 'https://pokemon-website-chi-inky.vercel.app',
    repoUrl: 'https://github.com/Yash-kumar123/pokemon-website',
    accent: '#F59E0B',
    tagline: 'Dynamic Pokémon encyclopedia with paginated REST consumption, instant search indexing, and fluid mobile UX.',
    description:
      'Consumed and cached comprehensive REST data across 1,000+ creatures from PokeAPI, refactored into a centralized React Context state model to eradicate prop-drilling across deeply nested views.',
    bullets: [
      'Clean State Architecture: Centralized application state in React Context API, simplifying debuggability and eliminating multi-level prop drilling.',
      'Efficient Paginated Ingestion: Implemented smart paginated fetching and caching to deliver instant transitions across 1,000+ data records without memory bloat.',
      '100% Adaptive UI: Custom Tailwind CSS responsive design delivering native app fluidity on smartphones and ultrawide displays alike.',
    ],
    stack: ['React.js', 'Tailwind CSS', 'Context API', 'REST API'],
    challenge: 'Handling asynchronous multi-endpoint data cascades (sprites, stats, abilities) without cascading re-renders or dropped frames.',
    solution: 'Constructed an aggregated Context provider with local memoization and batch fetching strategies.',
    metrics: ['1,000+ Pokémon Catalog', 'Zero Prop-Drilling', '60 FPS Transitions'],
    architecture: {
      client: 'React 18 SPA + Tailwind CSS',
      state: 'Centralized Context State Manager',
      api: 'PokeAPI RESTful Endpoints',
      flow: ['Search / Filter Input', 'Context State Selector', 'PokeAPI Stream', 'Normalized Cache', 'Responsive Card Render'],
    },
  },
]

export const achievements = [
  {
    year: '2025',
    badge: 'NATIONAL FINALIST',
    title: 'Smart India Hackathon (SIH 2025)',
    org: 'Government of India (MoE / AICTE)',
    detail: 'Ranked in the top national finalist teams out of 500+ competing engineering colleges across India. Engineered high-impact software under grueling national evaluation criteria.',
    tags: ['National Level', 'Top 500+ Teams', 'Full-Stack & Systems'],
  },
  {
    year: '2026',
    badge: 'VERIFIED CERTIFICATION',
    title: "QuizOff 2026: India's Biggest AI Quiz",
    org: 'CampusCrew (Hosted on Unstop)',
    detail: 'Selected among top competing minds nationwide in India\'s premier AI contest evaluating prompt engineering, deep learning architectures, LLM systems, and machine learning logic.',
    tags: ['5,25,000+ Students', '48,500+ Institutions', '35+ Countries'],
    certificateId: 'quizoff-2026',
  },
  {
    year: '2024',
    badge: 'HACKATHON RUNNER',
    title: 'Hacknovate 7.0',
    org: 'ABESIT Tech Council',
    detail: 'Rapidly architected and demonstrated an evaluation-based prototype with strict multi-role permission systems under high-pressure 24-hour hackathon constraints.',
    tags: ['24-Hour Sprint', 'Full-Stack Prototype', 'Enterprise Flow'],
  },
  {
    year: '2023',
    badge: 'INNOVATION',
    title: 'Hacknoccino 4.0',
    org: 'Technical Innovation Forum',
    detail: 'Designed and prototyped a hardware-software integrated solution under strict deadlines, demonstrating rapid systems problem solving.',
    tags: ['Hardware/Software', 'Rapid Prototyping', 'Hackathon'],
  },
]

export const certificates = [
  {
    id: 'quizoff-2026',
    title: "QuizOff 2026: India's Biggest AI Quiz",
    issuer: 'CampusCrew (Hosted on Unstop)',
    date: '19-JULY-2026',
    founder: 'Aaradhya Gupta (Founder, CampusCrew)',
    stats: '5,25,000+ Students · 48,500+ Institutions · 35+ Countries',
    description: "Selected among the top competing minds in India's biggest AI competition, testing advanced AI concepts, machine learning logic, and prompt engineering skills.",
    image: '/certificate.png',
  },
]
