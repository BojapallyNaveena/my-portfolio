# Naveena Bojapally — Interactive Developer Portfolio 2026

A premium, interactive personal portfolio built with React 19, Vite, TailwindCSS 4, GSAP, and Framer Motion. Features cinematic entrance animations, scroll-triggered reveals, a functional contact form, and a downloadable resume.

## 🚀 Live Demo
> [Deploy on Vercel](https://vercel.com) or [Netlify](https://netlify.com) using the steps below.

## ✨ Features
- **Cinematic Loader** — typing loader screen entrance animation
- **GSAP Entrance Timeline** — staggered letter-by-letter name reveal, hero animations
- **ScrollTrigger Reveals** — sections, cards, and timelines animate on scroll
- **Projects Showcase** — filterable project cards with live previews
- **Skills Grid** — categorized tech stack with badges
- **Experience Timeline** — hackathons, internships, activities
- **Certifications Section** — verified badges and credentials
- **Coding Profiles** — LeetCode, HackerRank, CodeChef trackers
- **AI Chatbot** — local smart chatbot that knows Naveena's portfolio
- **Real Resume Download** — downloadable PDF resume
- **Contact Form** — EmailJS powered real contact form
- **Premium Hover Effects** — neon sky-cyan glow on all interactive elements

## 🛠️ Tech Stack
- **Framework**: React 19 + Vite 8
- **Styling**: TailwindCSS 4 + Vanilla CSS
- **Animations**: GSAP 3 + ScrollTrigger + Framer Motion
- **Icons**: Lucide React
- **Contact**: EmailJS
- **Deployment**: Vercel / Netlify

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 🌐 Deploy to Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"New Project"** → Import **`BojapallyNaveena/my-portfolio`**
3. Vercel will auto-detect Vite settings
4. Click **"Deploy"** — done! ✅

> The `vercel.json` config file is already included for proper SPA routing.

## 🌐 Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **`BojapallyNaveena/my-portfolio`**
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click **"Deploy site"** — done! ✅

> The `netlify.toml` and `public/_redirects` config files are already included.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── naveena_resume.pdf
│   └── _redirects           # Netlify SPA redirect
├── src/
│   ├── assets/              # Project images and photos
│   ├── components/
│   │   ├── Loader.jsx       # Cinematic entrance loader
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx         # GSAP animated hero section
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Achievements.jsx
│   │   ├── CodingProfiles.jsx
│   │   ├── Certifications.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   ├── AIChatbot.jsx
│   │   ├── Terminal.jsx
│   │   └── Footer.jsx
│   ├── App.jsx              # GSAP timeline orchestrator
│   ├── index.css            # Global styles + animations
│   └── main.jsx
├── vercel.json              # Vercel deployment config
├── netlify.toml             # Netlify deployment config
└── vite.config.js
```

## 👩‍💻 Author
**Naveena Bojapally** — CS (AI & ML) Student | Full Stack Developer
- GitHub: [@BojapallyNaveena](https://github.com/BojapallyNaveena)
- LinkedIn: [naveena-bojapally](https://linkedin.com/in/naveena-bojapally)
