# ZoeCC - Cat Care Services Website

A professional website for **Zoe's Cat Care** services in Teddington, providing gentle and loving cat care while owners are away.

🌐 **Live Site**: [zoecc.co.uk](https://zoecc.co.uk)

## 📋 Project Overview

This is a client project - a responsive single-page application built for Zoe Forrest's cat care business in Teddington, UK. The website showcases her services, testimonials, and provides easy contact via WhatsApp integration.

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui component library
- **Icons**: Lucide React
- **Carousel**: Embla Carousel
- **Deployment**: Netlify
- **Package Manager**: npm

## 🚀 Features

- Responsive design optimized for mobile and desktop
- Interactive cat photo carousel with navigation
- WhatsApp integration for direct client contact
- SEO optimized with structured data
- Professional testimonials section
- Modern UI with elegant animations
- Custom favicon and branding

## 📁 Project Structure

```
zoe-cat-cinema-web/
├── public/
│   ├── photos/           # Cat photos for carousel
│   ├── favicon-96x96.png # Site favicon
│   └── ...               # Other static assets
├── src/
│   ├── components/
│   │   ├── ui/          # Shadcn/ui components
│   │   └── WhatsAppButton.tsx
│   ├── pages/
│   │   └── Index.tsx    # Main page component
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   └── hooks/           # Custom React hooks
├── index.html
├── package.json
└── README.md
```

## 🔧 Local Development

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zoe-cat-cinema-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🚀 Deployment

The site is deployed on Netlify with the following configuration:

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Branch**: `main`

### Build Settings

For Netlify deployment, ensure these settings:

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 📱 Key Components

### WhatsApp Integration
Direct messaging functionality allowing potential clients to contact Zoe instantly via WhatsApp with pre-filled messages.

### Photo Carousel
Interactive carousel showcasing cats that Zoe has cared for, with:
- Touch/swipe support on mobile
- Arrow navigation on desktop
- Dot indicators
- Cat names displayed

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface

## 🎨 Design Features

- **Color Scheme**: Warm brown tones reflecting a cozy, professional cat care aesthetic
- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body text
- **Animations**: Subtle hover effects and smooth transitions
- **Shadows**: Custom shadow system for depth and elegance

## 📞 Contact & Services

The website promotes Zoe's cat care services including:
- Feeding & fresh water
- Litter cleaning
- Play time
- Photo updates for owners
- Basic garden care

**Pricing**: £9 per visit
**Service Area**: Teddington and surrounding areas

## 👨‍💻 Developer

**Samuel Forrest**
- Portfolio: [samuelforrest.me](https://www.samuelforrest.me)
- This project was built as a professional client website

## 📄 License

This is a client project. All rights reserved to the business owner (Zoe Forrest) and developer (Samuel Forrest).

---

*Built with ❤️ for Zoe's Cat Care Services*
