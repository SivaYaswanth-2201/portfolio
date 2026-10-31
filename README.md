# Jalla Siva Yaswanth — Python Full Stack Developer Portfolio

A modern, high-performance developer portfolio website inspired by high-tech cyber HUD aesthetics, built for **Jalla Siva Yaswanth** — Aspiring Python Full Stack Developer trained at **TAP Academy**.

Live Demo Reference Style: Inspired by modern cyber/HUD developer portfolios.

---

## 🚀 Live Features

- **Cyber HUD Design Language:** Custom corner bracket frames (`hud-frame`), grid overlays (`hud-grid`), neon signal accents (`#ff5b1f`), and sleek typography (`Space Grotesk` & `JetBrains Mono`).
- **Hero Section:** Prominent name display, professional title, active TAP Academy status badge, authentic portrait photograph in a cyber HUD card, and direct download/preview CTAs.
- **Developer Dossier (About Me):** Authentic background highlighting B.Tech in CSE (Audisankara Institute of Technology, Gudur) and placement training at TAP Academy (BTM Layout, Bengaluru), plus career objectives and engineering philosophy.
- **Technical Skills Showcase:** Categorized into Programming Languages, Backend, Frontend, and Databases & Tools with realistic proficiency levels and detailed tech notes.
- **Production Project Showcase:**
  1. *Intelligent Recruitment & Talent Matching Platform Using AI* (Python, Streamlit, NLP, TF-IDF, Scikit-Learn)
  2. *Full-Stack E-Commerce & Inventory Management Web Portal* (Python, Django, MySQL, REST, HTML5/CSS3/JS)
  3. *Smart Task & Team Workflow Management REST API* (Django REST Framework, MySQL, JWT, Postman)
- **Education & Milestones Timeline:** Interactive vertical timeline documenting TAP Academy Training, B.Tech CSE (7.25 CGPA), Intermediate MPC (7.16 CGPA), and SSC (8.20 CGPA), plus verified IBM & Infosys Springboard certifications.
- **Interactive Contact Terminal:** Form with real-time validation, status toast alerts, direct clipboard copy for email, and instant mailto client triggering.
- **Responsive Layout:** 100% responsive across mobile, tablet, laptop, and ultra-wide desktop screens with smooth scrolling navigation.

---

## 🛠️ Tech Stack

- **Frontend:** [React 18](https://react.dev/), [Vite 5](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), Custom Cyber HUD CSS
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/) ready (`vercel.json` included)

---

## 📁 Project Folder Structure

```text
my-portfolio/
├── dist/                  # Production build output
├── public/                # Static assets (profile image, resume PDF)
│   ├── profile.jpeg       # High-res authentic portrait photograph
│   └── resume.pdf         # Downloadable CV / resume
├── src/
│   ├── components/        # Reusable React components
│   │   ├── About.jsx
│   │   ├── BackgroundGrid.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolioData.js # Centralized editable portfolio data
│   ├── App.jsx            # Main app composition
│   ├── index.css          # Tailwind base & cyber HUD utilities
│   └── main.jsx           # React DOM root
├── index.html             # Document shell with SEO & fonts
├── package.json           # Dependencies and scripts
├── postcss.config.js      # PostCSS config
├── tailwind.config.js     # Tailwind theme extensions
├── vercel.json            # Vercel deployment rewrite rules
└── vite.config.js         # Vite configuration
```

---

## ⚙️ Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📝 Customizing Your Information

All details (name, email, phone, skills, projects, education, social links) are centrally located in:
👉 `src/data/portfolioData.js`

To update any text or add new projects, simply edit this single file and the entire website will update automatically!

---

## 🌐 Deploy to Vercel

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Jalla Siva Yaswanth portfolio"
   git branch -M main
   git remote add origin https://github.com/SivaYaswanth-2201/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New"** > **"Project"**.
4. Import your GitHub repository.
5. Vercel will automatically detect **Vite** and configure the build command (`npm run build`) and output directory (`dist`).
6. Click **Deploy**!

---

## 👤 Author

**Jalla Siva Yaswanth**
- **Title:** Python Full Stack Developer
- **Email:** yaswanthjalla5@gmail.com
- **LinkedIn:** [linkedin.com/in/siva-yaswanth-6625b6277](https://www.linkedin.com/in/siva-yaswanth-6625b6277)
- **Training:** TAP Academy, Bengaluru
