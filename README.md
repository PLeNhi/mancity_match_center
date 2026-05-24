<div align="center">
  <img src="https://raw.githubusercontent.com/PLeNhi/mancity_match_center/main/assets/logo/mcfc_logo.png" alt="Manchester City Match Center" width="160" />

  <h1>Manchester City Match Center</h1>
  
  <p>
    <strong>A modern, beautiful, and high-performance football dashboard dedicated to Manchester City fans.</strong>
  </p>

  <p>
    <a href="https://mancity-match-center-wxck.vercel.app" target="_blank">
      <strong>🌐 Live Demo</strong>
    </a>
    •
    <a href="#features">Features</a>
    •
    <a href="#tech-stack">Tech Stack</a>
    •
    <a href="#project-structure">Structure</a>
  </p>

  <img src="https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Shadcn%2FUI-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="Shadcn" />
</div>

<br>

## About the Project

**Manchester City Match Center** is a feature-rich web application that provides real-time and detailed information about Manchester City Football Club. Built with modern web technologies, it delivers a smooth, responsive, and visually appealing experience for fans to follow matches, explore the squad, and view club achievements.

The project demonstrates strong frontend architecture, clean code practices, and excellent user experience design.

### ✨ Key Features

- **Live Dashboard** — Upcoming matches and latest results
- **Fixtures** — Complete match schedule with competition filters
- **Squad** — Full player roster with search, filter, and detailed information
- **Achievements** — Club trophies and historical accomplishments
- **Responsive Design** — Optimized for desktop, tablet, and mobile
- **Fallback Data** — Works offline using mock data when API is unavailable
- **Modern Animations** — Powered by Framer Motion
- **Multi-language Support** — Ready for internationalization (Next-intl)

---

## Tech Stack

| Technology            | Purpose                                  |
| --------------------- | ---------------------------------------- |
| **Next.js 14**        | React Framework (App Router)             |
| **TypeScript**        | Type safety                              |
| **Tailwind CSS**      | Styling                                  |
| **Shadcn/ui**         | High-quality UI components               |
| **TanStack Query v5** | Data fetching, caching & synchronization |
| **Zustand**           | Lightweight state management             |
| **Framer Motion**     | Smooth animations                        |
| **Axios**             | HTTP client                              |
| **Next-intl**         | Internationalization                     |
| **Day.js**            | Date & time handling                     |
| **API-Football**      | Football data source                     |

---

## Project Structure

```bash
mancity_match_center/
├── app/                    # Next.js App Router pages & layouts
├── components/             # Reusable UI components
├── services/               # API services & data transformation
├── store/                  # Zustand global state
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
├── utils/                  # Helper functions
├── data/                   # Mock data for fallback
├── lib/                    # Configuration & API client
├── i18n/                   # Internationalization setup
├── assets/                 # Images and logos
├── constants/              # App constants
└── public/                 # Static assets
```

---

## Installation & Setup

**1. Clone the Repository**

```bash
git clone https://github.com/PLeNhi/mancity_match_center.git
cd mancity_match_center
```

**2. Install Dependencies**

```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

**3. Environment Variables**

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

Then add your API key:

```bash
NEXT_PUBLIC_API_FOOTBALL_KEY=your_api_key_here
```

**4. Run the Application**

```bash
# Development
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

**4. Live Demo**

https://mancity-match-center.vercel.app

## Author

**Nhi Le**

---

<div align="center">
  <p>Made with ❤️ for Manchester City fans</p>
  <strong>⭐ If you like this project, please give it a star on GitHub!</strong>
</div>
