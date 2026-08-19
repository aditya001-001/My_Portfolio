# Aditya Sarapure — AI & Data Science Graduate Portfolio

A premium, Apple-inspired personal portfolio website for **Aditya Chidanand Sarapure**, designed for showcasing machine learning engineering, data science, and AI roles. 

Built using **React + Vite + Tailwind CSS + Framer Motion**, configured for easy deployment on **GitHub Pages**.

## 🚀 Features

- **Apple-Inspired Design:** Soft shadows, large typography, immersive spacing, premium white & light-gray aesthetic with Apple-blue accents (`#0071e3`).
- **Subtle Micro-Animations:** Clean transition effects (stagger, slide-ins, scales) utilizing Framer Motion.
- **Dynamic Case Studies:** Expandable featured project modules showing the Problem, Solution, Workflow, Tech Stack, Features, Challenges, and Future Roadmap.
- **Embedded Document Previews:** Fully responsive modal overlays to view certificate PDFs (like the OCI Data Science Professional certificate) directly in the browser.
- **Continuous Learning Timeline:** A vertical repository timeline highlighting learning history (Python, Machine Learning, PySpark, Web Scraping).
- **SEO & Performance Tuned:** Built with proper heading hierarchies, description tags, OpenGraph tags, sitemap, sitemap configurations, and lightweight SVGs.

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite 8
- **Styling:** Tailwind CSS v3 + Custom PostCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Hosting:** GitHub Pages

---

## 💻 Local Development

### 1. Installation
Clone the repository, navigate into the directory, and install dependencies:
```bash
npm install
```

### 2. Run Locally
Start the development server:
```bash
npm run dev
```

### 3. Build & Production Preview
To generate the static bundle and preview the build locally:
```bash
npm run build
npm run preview
```

### 4. Deploy to GitHub Pages
To compile the site and push it directly to your `gh-pages` branch:
```bash
npm run deploy
```

---

## 📁 Project Structure

```text
My_Portfolio/
│
├── public/                 # Static assets
│   ├── 01_Aditya_Sarapure.pdf
│   ├── oracle_data_science_certificate.pdf
│   ├── Udemy_AI.pdf
│   ├── Pyspider_DS.pdf
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── assets/             # Profile photos & static images
│   │   └── profile.png
│   │
│   ├── components/         # Reusable layouts & modals
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Timeline.jsx
│   │   └── PdfModal.jsx
│   │
│   ├── data/               # Centralized data file (JSON)
│   │   └── portfolioData.json
│   │
│   ├── sections/           # Individual page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── LearningJourney.jsx
│   │   ├── Certificates.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx             # Main App layout & PDF modal state
│   ├── index.css           # Custom Tailwind styles & fonts
│   └── main.jsx            # DOM entry mount point
│
├── tailwind.config.js      # Custom theme settings
├── vite.config.js          # Deployment base path
└── package.json            # Scripts & dependencies
```

---

## 📄 License & Attribution

Designed and developed by **Aditya Sarapure**.
Built with React + Tailwind CSS.
