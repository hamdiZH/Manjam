# Manjam Capital Landing Page

A modern, high-performance landing page for Manjam Capital — a regulated digital asset investment platform built on Swiss standards with Shariah-aligned principles.

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.27-FF0050?logo=framer)

## ✨ Features

- **Modern UI/UX** — iOS-inspired liquid glass effects, smooth animations, and responsive design
- **Framer Motion Animations** — Scroll-linked animations, hover interactions, and staggered reveals
- **Fully Responsive** — Optimized for all screen sizes (mobile, tablet, 1440px, 1920px+)
- **Performance Optimized** — Built with Next.js 16 and React Compiler for optimal performance

## 📑 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Dynamic landing with animated gradient text and CTA buttons |
| **Why Manjam** | Interactive floating bubbles with hover-to-reveal content |
| **Our View** | Grid layout showcasing company perspectives |
| **Swiss Framework** | Regulatory framework details with partners marquee |
| **Digital Asset Journey** | Platform showcase with dashboard preview |
| **Manjam Academy** | Educational resources and learning platform |
| **Timeline** | Interactive horizontal timeline from 2019 to 2026 |
| **Newsletter** | Email subscription component |
| **Blog** | Featured articles with category filtering |

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/manjam/manjam-landing-page.git
   cd manjam-landing-page
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

## 🗂️ Project Structure

```
manjam-landing-page/
├── app/                    # Next.js App Router
│   ├── about/              # About page
│   ├── blogs/              # Blog pages
│   │   └── [slug]/         # Dynamic blog post pages
│   ├── globals.css         # Global styles
│   ├── layout.js           # Root layout
│   └── page.js             # Home page
├── components/             # React components
│   ├── Blog/               # Blog section components
│   ├── DigitalAssetJourney/# Platform showcase section
│   ├── Footer/             # Footer component
│   ├── ManjamAcademy/      # Academy section components
│   ├── Newsletter/         # Newsletter subscription
│   ├── OurView/            # Our View section
│   ├── SwissFramework/     # Swiss Framework section
│   ├── Timeline/           # Timeline section
│   ├── DisclaimerPopup.jsx # Legal disclaimer modal
│   ├── Hero.jsx            # Hero section
│   ├── Navbar.jsx          # Navigation bar
│   └── WhyManjam.jsx       # Why Manjam section
├── public/                 # Static assets
│   ├── *.png               # Images
│   └── *.svg               # Vector graphics
├── next.config.mjs         # Next.js configuration
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json            # Project dependencies
```

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **UI Library:** [React 19](https://react.dev/) with React Compiler
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion 12](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## 🎨 Design System

### Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Green | `#14352D` | Main brand color, dark accents |
| Accent Green | `#46B886` | CTAs, highlights, gradients |
| Light Mint | `#E6F4ED` | Backgrounds, cards |
| White | `#FFFFFF` | Text, backgrounds |

### Typography

- **Headlines:** Bold, gradient text effects
- **Body:** Clean, readable sans-serif
- **Accents:** Medium weight for emphasis

### Effects

- iOS-inspired liquid glass buttons with backdrop blur
- Smooth hover transitions and scale effects
- Scroll-linked parallax animations
- Staggered reveal animations on viewport entry

## 📱 Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Laptops (1440px optimization) |
| `2xl` | 1536px | Desktops (1920px+) |

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/manjam/manjam-landing-page)

### Other Platforms

Build and export for any Node.js hosting:

```bash
npm run build
npm run start
```

## 🔗 Links

- **Website:** [manjamcapital.com](https://manjamcapital.com)
- **Platform:** [platform.manjamcapital.com](https://platform.manjamcapital.com)
- **LinkedIn:** [@manjamcapital](https://www.linkedin.com/company/manjamcapital)
- **X (Twitter):** [@Manjamcapital](https://x.com/Manjamcapital)
- **YouTube:** [@manjamcapital](https://www.youtube.com/@manjamcapital)
- **Instagram:** [@manjamcapital](https://www.instagram.com/manjamcapital)
- **TikTok:** [@manjamcapital](https://www.tiktok.com/@manjamcapital)

## 📄 License

This project is proprietary software. All rights reserved by Manjam Capital.

---

<p align="center">
  <img src="public/manjam-logo.png" alt="Manjam Capital" width="120" />
  <br />
  <strong>Manjam Capital</strong>
  <br />
  <em>A Structured Swiss Framework for Qualified Participation</em>
</p>
