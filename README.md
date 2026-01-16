# Zuned Aalim - Portfolio Website

A stunning, full-screen portfolio website with smooth page transitions, built with React, Vite, and Framer Motion. Features a sleek black and red color scheme inspired by zunedaalim.com.

## 🎨 Design Features

- **Full-Screen Page Transitions**: Smooth slide-up page transitions with layered navigation effects
- **Black & Red Theme**: Minimalist color palette with pure black (#000000) background and red (#FF0000) accents
- **Framer Motion Animations**: Buttery smooth animations for page transitions, hover effects, and content reveals
- **Custom Cursor**: Interactive custom cursor that responds to hover states
- **Responsive Design**: Fully responsive with mobile-friendly hamburger menu and touch swipe support

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Space Grotesk** - Google Font

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎯 Navigation

The portfolio supports multiple navigation methods:

1. **Mouse Wheel**: Scroll up/down to navigate between sections
2. **Keyboard**: Use Arrow Up/Down or Page Up/Down keys
3. **Touch Swipe**: Swipe up/down on mobile devices
4. **Navigation Links**: Click on navigation menu items

## 🖼️ Adding Your Images

Replace the placeholder images:

```
public/samurai.jpg          # Hero and about images
assets/images/work-1.jpg    # Project 1 screenshot
assets/images/work-2.jpg    # Project 2 screenshot
```

## 🛠️ Customization

Update content in:
- `src/components/sections/HeroSection.jsx` - Name and intro
- `src/components/sections/ServicesSection.jsx` - Services
- `src/components/sections/WorksSection.jsx` - Projects
- `src/components/sections/AboutSection.jsx` - Skills and bio
- `src/components/sections/ContactSection.jsx` - Contact form

## 🚀 Deployment

```bash
npm run build
```

Deploy the `dist` folder to Netlify, Vercel, or any static hosting service.

---

Built with ❤️ using React + Vite + Framer Motion
