# O'MARS Radio - Official Website

A modern, static-first radio platform website for O'MARS Radio, serving African and diaspora audiences with news, education, culture, and music content.

**Tagline:** Voices. Identity. Perspective.

## 🎙️ Overview

O'MARS Radio is a 24-hour digital radio platform built with a focus on:
- Live streaming capabilities
- Responsive design (mobile-first)
- Static content delivery
- Fast load times
- Accessibility (WCAG AA)

This website is built with **Next.js 16** and **Tailwind CSS**, designed for deployment on any static host (Vercel, Netlify, GitHub Pages, etc.).

## 📋 Pages & Features

### Main Pages
- **Home** - Hero section, quick access links, audio player, featured content
- **Listen Live** - Embedded audio player with live stream
- **Now Playing** - Current programme display with details
- **Top Shows** - Filterable programme catalogue by category
- **Programme Schedule** - Weekly grid view with timezone support
- **Top Music Chart** - Trending songs and listener favourites
- **Listen Again** - On-demand archive with filters
- **OAPs & Presenters** - Team profiles with photos and bios
- **About Us** - Mission, vision, editorial values, institutional context
- **Education** - Educational programming and learning focus
- **Rate Card** - Advertising and partnership opportunities
- **Contact Us** - Contact information and inquiry forms

### Key Components
- **AudioPlayer** - Reusable audio player with play/pause and volume control
- **Header** - Navigation with mobile menu and social links
- **Footer** - Company info, links, contact details, socials
- **ShowCard** - Reusable card component for programme display
- **OAPCard** - Presenter profile cards with images and details
- **ScheduleGrid** - Dynamic weekly schedule with timezone toggle
- **CTAButton** - Reusable call-to-action button component

## 📁 Project Structure

```
/omars-radio
├── /app                          # Next.js app directory
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout with Header & Footer
│   ├── globals.css               # Global styles & design tokens
│   ├── /about                    # About page
│   ├── /listen-live              # Listen Live page
│   ├── /now-playing              # Now Playing page
│   ├── /top-shows                # Top Shows page
│   ├── /schedule                 # Schedule page
│   ├── /top-music                # Music Chart page
│   ├── /listen-again             # Listen Again page
│   ├── /oaps                     # Presenters page
│   ├── /education                # Education page
│   ├── /rate-card                # Rate Card page
│   └── /contact                  # Contact page
├── /components                   # Reusable React components
│   ├── Header.tsx                # Navigation header
│   ├── Footer.tsx                # Footer
│   ├── AudioPlayer.tsx           # Audio player component
│   ├── ShowCard.tsx              # Show card component
│   ├── OAPCard.tsx               # OAP profile card
│   ├── ProgramCard.tsx           # Programme card
│   ├── CTAButton.tsx             # Call-to-action button
│   ├── ScheduleGrid.tsx          # Schedule grid display
│   └── /ui                       # shadcn/ui components (auto-generated)
├── /public                       # Static assets
│   ├── /data                     # Static JSON data files
│   │   ├── programs.json         # Programme database
│   │   ├── shows.json            # Shows directory
│   │   ├── oaps.json             # Presenters info
│   │   ├── schedule.json         # Weekly schedule
│   │   └── music-chart.json      # Music chart
│   ├── /images                   # Images
│   │   └── /oaps                 # Presenter photos
│   ├── favicon.ico
│   ├── icon.svg
│   └── ...
├── /lib
│   ├── types.ts                  # TypeScript type definitions
│   └── utils.ts                  # Utility functions
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── next.config.mjs               # Next.js configuration
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (or compatible)
- npm, yarn, or pnpm

### Installation

#### Option 1: Using shadcn CLI (Recommended)
```bash
npx shadcn-cli@latest init -d
```
Follow the prompts and select this repository when asked.

#### Option 2: Manual Setup
```bash
# Clone or download the project
git clone <repository-url>
cd omars-radio

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📊 Data Management

All content is stored as static JSON files in `/public/data/`.

### Updating Content

#### Programs (`/public/data/programs.json`)
```json
{
  "id": "unique-id",
  "title": "Programme Title",
  "description": "Description",
  "category": "News",
  "language": "English",
  "broadcastTime": "08:00 - 09:00",
  "isLive": true,
  "hostIds": ["presenter-id"]
}
```

#### Shows (`/public/data/shows.json`)
```json
{
  "id": "unique-id",
  "title": "Show Title",
  "description": "Description",
  "category": "News",
  "day": "Monday",
  "time": "08:00",
  "language": "English",
  "hostIds": ["presenter-id"]
}
```

#### Presenters (`/public/data/oaps.json`)
```json
{
  "id": "unique-id",
  "name": "Presenter Name",
  "photo": "/images/oaps/photo.jpg",
  "bio": "Bio text",
  "shows": ["show-id"],
  "focusAreas": ["Area1", "Area2"]
}
```

#### Schedule (`/public/data/schedule.json`)
Array of days with slots for each day of the week.

#### Music Chart (`/public/data/music-chart.json`)
```json
{
  "rank": 1,
  "title": "Song Title",
  "artist": "Artist Name",
  "trend": "up"
}
```

### Adding Images
1. Add presenter photos to `/public/images/oaps/`
2. Reference in `oaps.json` with path: `/images/oaps/filename.jpg`

## 🎨 Design System

### Colors
The site uses a cohesive teal/blue color palette:
- **Primary**: Vibrant teal (brand color) - `#3d82f6` equivalent
- **Secondary**: Light neutral tones
- **Accent**: Lighter teal shade for highlights
- **Neutrals**: Dark text on light backgrounds, light text on dark

### Typography
- **Heading Font**: Geist (system font)
- **Body Font**: Geist (system font)
- **Mono Font**: Geist Mono (for code/technical content)

### Components
- Uses shadcn/ui components
- Tailwind CSS for styling
- Responsive design with mobile-first approach

## 📱 Responsive Design

The site is fully responsive:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Screen reader friendly

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

### GitHub Pages
```bash
# Build static export
npm run build
# Push .next folder to gh-pages branch
```

### Any Static Host
1. Run `npm run build`
2. Deploy the `.next` folder to your host
3. Configure 404 handling to serve `404.html` for non-existent routes

## 📝 Environment Variables

No environment variables required for static content. For future integrations (analytics, CMS, etc.), add to `.env.local`:

```env
# Example for future use
NEXT_PUBLIC_RADIO_STREAM_URL=https://stream.example.com
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
```

## 🔧 Configuration

### Next.js Config
- Located in `next.config.mjs`
- Optimized for static export
- Image optimization enabled

### Tailwind Config
- Uses Tailwind CSS v4 with inline theme configuration
- Design tokens in `globals.css`
- No `tailwind.config.js` needed (v4 feature)

## 🚦 SEO

- Meta tags optimized for each page
- Open Graph tags for social sharing
- Mobile viewport configuration
- Semantic HTML structure
- Fast load times for better rankings

## 📞 Contact & Support

For questions about content management or deployment:
- Email: omarscomandedultd@gmail.com
- Phone: +234 (see contact page)
- Social: TikTok (@whispersnwords_), Instagram (@oarsradio)

## 📄 License

O'MARS Communication and Education Promotion Ltd. © 2024

---

**Built with ❤️ for African audiences** | Voices. Identity. Perspective.
