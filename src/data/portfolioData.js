export const profile = {
  name: 'Yash Kumar',
  role: 'Full-Stack Developer',
  roles: ['Full-Stack Developer', 'MERN Stack Developer', 'App Developer', 'Applied AI Builder'],
  tagline:
    "Final-year CS student building full-stack apps & AI systems that actually ship — from real-time collaborative IDEs to multi-tenant enterprise platforms.",
  location: 'Ghaziabad, Uttar Pradesh, India',
  email: 'yash123450.yk@gmail.com',
  phone: '+91 9717785778',
  linkedin: 'linkedin.com/in/yash-kumar123',
  github: 'github.com/Yash-kumar123',
  badge: 'SIH 2025 National Finalist',
  photo: '/profile.jpg',
  resumeUrl: '/resume.pdf',
}

export const about = `I'm a final-year Computer Science student who'd rather ship something people can actually use than finish another tutorial. Over the last two years I've built a real-time collaborative AI code editor, a backend that analyzes speech to help flag early signs of dementia, and a multi-tenant employee review platform — each one taught me something the classroom didn't. In 2025 my team made the national finals of Smart India Hackathon, out of 500+ teams that entered. I work mostly in React, Node.js, and FastAPI, and I'm increasingly pulled toward the AI side of things — multi-agent systems, RAG, and getting LLMs to do something genuinely useful instead of just answering questions. Right now I'm looking for a full-time or internship role where I can keep building things that ship.`

export const stats = [
  { label: 'Years Coding', value: '2+' },
  { label: 'Projects Shipped', value: '5+' },
  { label: 'Hackathon Finalist', value: 'SIH 2025' },
]

export const education = {
  school: 'ABES Institute of Technology (ABESIT), AKTU',
  degree: 'B.Tech, CSE',
  years: '2023 – 2027',
}

export const skillCategories = [
  {
    name: 'Languages',
    color: 'amber',
    skills: ['Python', 'JavaScript/TypeScript', 'Dart', 'HTML5', 'CSS3', 'C'],
  },
  {
    name: 'Frontend & Mobile',
    color: 'violet',
    skills: ['React.js', 'Flutter', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    color: 'teal',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Prisma ORM', 'REST APIs'],
  },
  {
    name: 'AI / ML',
    color: 'rose',
    skills: ['LangChain', 'RAG Pipelines', 'Multi-Agent Systems', 'Multi-LLM Integration', 'Vector Embeddings'],
  },
  {
    name: 'Databases',
    color: 'amber',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'ChromaDB'],
  },
  {
    name: 'Tools & Practices',
    color: 'violet',
    skills: ['Git/GitHub', 'Docker', 'WebSockets', 'Swagger/OpenAPI 3.0', 'Postman', 'JWT Auth', 'Vercel', 'Render'],
  },
]

export const projects = [
  {
    id: 'performance-eval',
    name: 'Performance Evaluation System',
    subtitle: 'Multi-Tenant Employee Review Platform',
    date: '08/2026',
    liveUrl: null,
    repoUrl: 'https://github.com/Yash-kumar123/performance-evaluation-system',
    accent: 'teal',
    description:
      'Designed one login flow that serves Employee, Manager, and HR roles across multiple companies, with full data isolation enforced at the database query level.',
    bullets: [
      'Modeled both flat startup teams and multi-tier corporate hierarchies using a single self-referencing manager_id field — no schema changes needed per company.',
      'Standardized monthly reviews across 5 fixed performance dimensions, with JWT auth, role-based access, and an HR dashboard showing live compliance and completion rates.',
      'Documented the entire REST API with interactive Swagger docs and shipped an automated seed script provisioning two pilot companies end to end.',
    ],
    stack: ['Flutter', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Swagger'],
  },
  {
    id: 'devsync-ai',
    name: 'DevSync AI',
    subtitle: 'Real-Time Collaborative AI-Powered Cloud IDE',
    date: '07/2026',
    liveUrl: 'https://dev-sync-ai-web.vercel.app',
    repoUrl: 'https://github.com/Yash-kumar123/DevSync_AI',
    accent: 'amber',
    description:
      'Split the app into a Turborepo monorepo (React 19 + Node/Express + Python FastAPI) so AI processing never blocks the editor itself.',
    bullets: [
      'Built real-time multiplayer editing with Yjs (CRDTs) over WebSockets — live cursors and presence sync even when two people edit the same line.',
      'Designed a 3-agent AI pipeline (Planner, Coder, Auditor) across OpenAI, Claude, Gemini, and local Ollama, grounded in the actual codebase via a RAG layer (ChromaDB).',
      'Added a live in-browser terminal wired to real Docker containers, plus a Git panel that auto-writes commit messages and an admin view for RBAC and system health.',
    ],
    stack: ['React 19', 'Node.js', 'FastAPI', 'Yjs', 'WebSockets', 'ChromaDB', 'Docker'],
  },
  {
    id: 'dementia-detection',
    name: 'AI Tool for Early-Stage Dementia Detection',
    subtitle: 'Backend Developer',
    date: '11/2025',
    liveUrl: 'https://demdoctor.qzz.io',
    repoUrl: null,
    accent: 'violet',
    description:
      'Built the backend for a platform running 5+ cognitive tests, handling attempts, scoring, and auth via FastAPI, PostgreSQL, and SQLAlchemy.',
    bullets: [
      'Processed browser-recorded audio with FFmpeg and extracted speech features with Librosa and Praat-Parselmouth — in under 2 seconds per recording.',
      'Handled edge cases in file uploads with proper exception handling; system has tracked 100+ test attempts since with zero data loss.',
      'Connected frontend and backend via REST APIs so transcription and randomized tests feel instant, not laggy.',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'FFmpeg', 'Librosa', 'Praat'],
  },
  {
    id: 'rent-vortex',
    name: 'Rent-Vortex',
    subtitle: 'Full-Stack MERN Car Rental Platform',
    date: '12/2024',
    liveUrl: 'https://rent-vortex.vercel.app',
    repoUrl: 'https://github.com/Yash-kumar123/Rent-VORTEX',
    accent: 'rose',
    description:
      'Built a 3-role marketplace (Host, Renter, Admin) with JWT auth and bcrypt password hashing, each role scoped to its own permissions.',
    bullets: [
      'Built the booking flow with React-Leaflet and OpenStreetMap so users see real car locations and availability on an actual map.',
      'Diagnosed and fixed excessive re-renders with React.memo and cleaned-up useEffect hooks, plus Axios interceptors for auth token handling.',
    ],
    stack: ['MERN', 'React-Leaflet', 'JWT', 'bcrypt', 'Axios'],
  },
  {
    id: 'pokedex',
    name: 'Pokédex Explorer',
    subtitle: 'React.js, Tailwind CSS, Context API',
    date: '05/2025',
    liveUrl: 'https://pokemon-website-chi-inky.vercel.app',
    repoUrl: 'https://github.com/Yash-kumar123/pokemon-website',
    accent: 'amber',
    description:
      'Pulled live data on 1000+ Pokémon from the PokeAPI into a responsive UI that works properly on mobile, not just desktop.',
    bullets: [
      'Refactored from prop-drilling to Context API mid-build once the component tree got messy — made state significantly easier to debug.',
      'Added Next/Previous pagination so users browse in manageable chunks instead of one long scroll.',
    ],
    stack: ['React.js', 'Tailwind CSS', 'Context API', 'REST API'],
  },
]

export const achievements = [
  {
    title: 'SIH 2025 National Finalist',
    detail: 'One of the top finalist teams out of 500+ entries in the Smart India Hackathon.',
    color: 'amber',
  },
  {
    title: 'Hacknovate 7.0',
    detail: 'Built an evaluation-based platform prototype under tight hackathon deadlines.',
    color: 'teal',
  },
  {
    title: 'Hacknoccino 4.0',
    detail: 'Designed and built a hardware project prototype under a fast-paced hackathon clock.',
    color: 'violet',
  },
]

