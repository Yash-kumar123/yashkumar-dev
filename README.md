# ⚡ Yash Kumar — Developer Portfolio

[![SIH 2025 National Finalist](https://img.shields.io/badge/SIH%202025-National%20Finalist-amber?style=for-the-badge&logo=trophy)](https://github.com/Yash-kumar123)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

> **"Final-year CS student building full-stack apps & AI systems that actually ship — from real-time collaborative IDEs to multi-tenant enterprise platforms."**

---

## 🌟 About Yash Kumar

I'm a final-year Computer Science student at **ABESIT (AKTU)** who'd rather ship something people can actually use than finish another tutorial. Over the last two years, I've engineered real-time collaborative AI tools, speech feature analysis backends, and multi-tenant enterprise platforms. In **2025**, my team competed in the **Smart India Hackathon (SIH)** and reached the national finals out of 500+ teams across India.

- 🎓 **Education**: B.Tech in Computer Science & Engineering (2023 – 2027)
- 📍 **Location**: Ghaziabad, Uttar Pradesh, India
- 🏆 **Milestones**: SIH 2025 National Finalist | Hacknovate 7.0 | Hacknoccino 4.0
- 💼 **Roles**: Full-Stack Developer | MERN Stack Developer | App Developer | Applied AI Builder
- 📬 **Contact**: [yash123450.yk@gmail.com](mailto:yash123450.yk@gmail.com) | [LinkedIn](https://linkedin.com/in/yash-kumar123) | [GitHub](https://github.com/Yash-kumar123)

---

## 🚀 Key Projects Showcase

### 1. ⚙️ [Performance Evaluation System](https://github.com/Yash-kumar123/performance-evaluation-system)
> **Enterprise Multi-Tenant Employee Review Platform** *(08/2026)*
- **Architecture**: Single universal login flow serving Employee, Manager, and HR roles across multiple client organizations with query-level database isolation.
- **Hierarchy Modeling**: Modeled both flat startup teams and multi-tier corporate hierarchies using a self-referencing `manager_id` field across 6 normalized (3NF) relational entities.
- **Features**: Standardized monthly reviews across 5 performance dimensions, JWT role-based access control (RBAC), live HR compliance dashboards, and automated OpenAPI 3.0 / Swagger docs.
- **Tech Stack**: `Flutter` · `Node.js` · `Express.js` · `PostgreSQL` · `JWT` · `Swagger`

### 2. ⚡ [DevSync AI](https://github.com/Yash-kumar123/DevSync_AI) | [Live Demo](https://dev-sync-ai-web.vercel.app)
> **Real-Time Collaborative AI-Powered Cloud IDE** *(07/2026)*
- **Turborepo Monorepo**: Decoupled React 19 frontend, Node/Express gateway, and FastAPI AI service to ensure heavy AI workloads never freeze the editor.
- **Multiplayer Sync**: Real-time collaborative editing via Yjs (CRDTs) over WebSockets with live presence and cursor synchronization.
- **3-Agent AI Pipeline**: Planner, Coder, and Auditor agents powered by OpenAI, Claude, Gemini, and local Ollama, grounded in the codebase via ChromaDB RAG.
- **In-Browser Terminal**: Wired to Docker containers with an automated Git commit message assistant and RBAC admin view.
- **Tech Stack**: `React 19` · `Node.js` · `FastAPI` · `Yjs` · `WebSockets` · `ChromaDB` · `Docker`

### 3. 🧠 AI Tool for Early-Stage Dementia Detection | [Live Demo](https://demdoctor.qzz.io)
> **Cognitive Audio & Speech Analysis Backend** *(11/2025)*
- **Audio Processing Engine**: Converts browser-recorded audio using FFmpeg and extracts acoustic speech features via Librosa and Praat-Parselmouth in **< 2 seconds**.
- **Resilience**: Robust exception handling across file uploads with zero data loss over 100+ test attempt records.
- **Tech Stack**: `FastAPI` · `PostgreSQL` · `SQLAlchemy` · `FFmpeg` · `Librosa` · `Praat`

### 4. 🏎️ [Rent-Vortex](https://github.com/Yash-kumar123/Rent-VORTEX) | [Live Demo](https://rent-vortex.vercel.app)
> **Full-Stack MERN Car Rental Platform** *(12/2024)*
- **Multi-Role Marketplace**: 3-tier user system (Host, Renter, Admin) with JWT auth and bcrypt security.
- **Map Interactive Booking**: Integrated React-Leaflet & OpenStreetMap for real-time car tracking and pin location selection.
- **Performance**: Optimized re-render bottlenecks using `React.memo` and Axios auth interceptors.
- **Tech Stack**: `MongoDB` · `Express.js` · `React.js` · `Node.js` · `React-Leaflet` · `JWT`

### 5. 🎮 [Pokédex Explorer](https://github.com/Yash-kumar123/pokemon-website) | [Live Demo](https://pokemon-website-chi-inky.vercel.app)
> **Responsive PokeAPI Client** *(05/2025)*
- **State Management**: Refactored to React Context API to eliminate prop-drilling across deep component trees.
- **Pagination**: Next/Previous paginated view fetching data for 1000+ Pokémon smoothly on mobile & desktop.
- **Tech Stack**: `React.js` · `Tailwind CSS` · `Context API` · `REST API`

---

## 🛠️ Tech Stack & Skills

| Domain | Technologies |
| :--- | :--- |
| **Languages** | Python, JavaScript/TypeScript, Dart, HTML5, CSS3, C |
| **Frontend & Mobile** | React.js, Flutter, Tailwind CSS |
| **Backend & APIs** | Node.js, Express.js, FastAPI, Prisma ORM, REST APIs, WebSockets |
| **AI & Machine Learning** | LangChain, RAG Pipelines, Multi-Agent Systems, Multi-LLM Integration, ChromaDB |
| **Databases** | PostgreSQL, MongoDB, MySQL, Redis, ChromaDB |
| **Tools & DevOps** | Git, GitHub, Docker, Postman, Swagger/OpenAPI 3.0, JWT, Vercel, Render |

---

## 🎨 UI/UX Highlights

- 💎 **Modern Dark Theme**: Customized HSL dark palette (`#0b1220` surface, `#16223a` cards, `#233047` borders).
- 🔄 **Dynamic Role Rotator**: Typewriter effect in Hero section cycling through Yash's core engineering specializations.
- 🪄 **Interactive Hover-to-Expand Project Cards**: Compact cards that automatically expand to full length on hover (`AnimatePresence` height animation).
- 📍 **Scroll-Spy Navigation**: Active navbar highlighting synchronized with section viewport intersections.
- 📱 **100% Mobile & Desktop Responsive**: Tailored grid breakpoints (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).

---

## 📂 Project Structure

```
yashkumar-dev/
├── public/
│   ├── profile.jpg           # Profile Headshot
│   ├── resume.pdf            # Downloadable Resume
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation with scroll-spy & resume download
│   │   ├── Hero.jsx          # Photo hero, role rotator, stat counters
│   │   ├── About.jsx         # Narrative bio, location & degree details
│   │   ├── Skills.jsx        # Category-filtered interactive skill grid
│   │   ├── Projects.jsx      # Expandable project cards with hover animations
│   │   ├── Achievements.jsx  # SIH & Hackathon milestone cards
│   │   ├── Contact.jsx       # Contact cards & pre-filled mailto form
│   │   └── Footer.jsx        # Social links & copyright footer
│   ├── data/
│   │   └── portfolioData.js  # Single-source-of-truth data configuration
│   ├── App.jsx               # Main layout container & scroll observer
│   ├── index.css             # Tailwind imports & custom design system tokens
│   └── main.jsx              # Application entry point
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 💻 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation & Local Run

```bash
# 1. Clone the repository
git clone https://github.com/Yash-kumar123/yashkumar-dev.git

# 2. Navigate to the project directory
cd yashkumar-dev

# 3. Install dependencies
npm install

# 4. Launch development server
npm run dev
```

Visit `http://localhost:5173` in your browser to view the application live.

### Production Build

```bash
# Generate optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

The production assets will be output to the `dist/` directory.

---

## 🤝 Connect & Hire Yash

- **Email**: [yash123450.yk@gmail.com](mailto:yash123450.yk@gmail.com)
- **LinkedIn**: [linkedin.com/in/yash-kumar123](https://linkedin.com/in/yash-kumar123)
- **GitHub**: [github.com/Yash-kumar123](https://github.com/Yash-kumar123)
- **Phone**: +91 9717785778

---

<div align="center">
  <sub>Built with ❤️ using React 19, Tailwind CSS, Vite, and Framer Motion by <b>Yash Kumar</b>.</sub>
</div>
