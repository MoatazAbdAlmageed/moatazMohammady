# 🚀 Moataz Mohammady | Senior Backend Developer Portfolio

Welcome to the official repository for my modern, high-performance developer portfolio and interactive resume. Built using **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**, this portfolio highlights my engineering journey, technical skills, projects, and certifications.

Designed with rich aesthetics, smooth animations, dynamic gradient accents, and subtle micro-interactions to deliver a stunning experience across all device sizes.

---

## ✨ Features

* 🎨 **Rich Aesthetics & Dark Mode**: Sleek dark-themed design (`bg-slate-950`) featuring custom background gradient blobs, blurred overlays, and spinning gradient ring animations.
* 🚀 **Next.js & React 19 Engine**: Harnesses the speed of React 19 and Next.js 16, utilizing Turbopack for ultra-fast compilation and optimized client-server rendering.
* ⚙️ **Fully Dynamic & Config-Driven**: The entire portfolio's content—from projects and work history to certifications and social links—is managed dynamically via a single configuration file (`src/data/config.ts`).
* 📱 **100% Responsive Design**: Fluid layouts optimized perfectly for desktop, tablet, and mobile screens, featuring a responsive slide-out navbar menu.
* ⚡ **SEO & Performance Optimized**: Fully configured SEO metadata, semantic HTML structures, and Google Analytics tracking for maximized search engine compatibility.
* 💬 **Interactive Contact Form**: Integrated with Formspree for direct, secure, and reliable communication from visitors.

---

## 🛠️ Tech Stack & Architecture

This application is built with state-of-the-art modern web technologies:

| Category | Technologies Used |
| :--- | :--- |
| **Core Framework** | [Next.js 16.2.6](https://nextjs.org/) (App Router & Turbopack) |
| **View Library** | [React 19.2.4](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Modern CSS variables |
| **Time Handling** | [Day.js](https://day.js.org/) |
| **Icons** | [FontAwesome 6.4.0](https://fontawesome.com/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📂 Project Structure

A clean, modular directory structure keeping code and configuration separated:

```text
moatazAbdAlmageed/
├── public/                  # Static assets (images, manifest, icons)
├── src/
│   ├── app/                 # Next.js App Router entry points
│   │   ├── globals.css      # Core Tailwind styling & custom variables
│   │   ├── layout.tsx       # Root layout, HTML headers, analytics setup
│   │   └── page.tsx         # Main portfolio assembly page
│   ├── components/          # Reusable UI component sections
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   └── data/
│       └── config.ts        # Central database containing all developer profile data
├── next.config.ts           # Next.js configurations
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and build scripts
```

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18.x or later recommended) and `npm` installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MoatazAbdAlmageed/MoatazAbdAlmageed.github.io.git
   cd MoatazAbdAlmageed.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### Build for Production

To build the application for deployment or production testing:
```bash
npm run build
npm run start
```

---

## ⚙️ Customization Guide

One of the key features of this portfolio is that **you do not need to rewrite HTML or CSS to change your portfolio's content**. 

Everything is driven by the central config file located at `src/data/config.ts`. Simply open this file and update the exported structures:

* **Profile & Bio Details**: Customize `firstName`, `lastName`, `position`, `email`, `whatsapp`, `address`, and `description`.
* **Social Links**: Easily manage visible profiles (GitHub, LinkedIn, StackOverflow, Upwork, Behance) by adding links and toggling the `show` boolean.
* **Skills**: Group and list your skills under categories like *Front-end*, *Back-end*, *Database*, etc.
* **Work Experience**: Edit the `jobs` array with details on your occupation, company, dates, achievements, and technology lists.
* **Projects**: Update `projects` with your titles, repository/live URLs, descriptions, badges, and icons.
* **Certifications**: Log your achievements and URLs under the `certifications` array.

---

## 👨‍💻 About Me

I am **Moataz Mohammady**, a **Senior Backend Developer** specializing in **PHP**, **Laravel**, **WordPress**, and **Node.js**. I build highly secure, scalable backend architectures, construct reliable API ecosystems, and orchestrate smooth integration frameworks. I am passionate about learning, writing technical blogs, and spending time with my family in the Giza countryside.

### 🌐 Connect With Me

* **GitHub:** [@MoatazAbdAlmageed](https://github.com/MoatazAbdAlmageed)
* **LinkedIn:** [Moataz AbdAlmageed](https://www.linkedin.com/in/moatazabdelmageed)
* **Behance:** [Moataz Mohammady](https://www.behance.net/moatazmohammady)
* **Email:** [moataz.mohammady@gmail.com](mailto:moataz.mohammady@gmail.com)
* **WhatsApp:** [+201150064746](https://wa.me/201150064746)

---

## 📄 License

This project is licensed under the MIT License - feel free to customize and use it for your own portfolios!
