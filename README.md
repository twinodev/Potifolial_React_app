# Potifolial_React_app
## Overview

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-228AE6?style=for-the-badge&logo=fontawesome&logoColor=white)](https://fontawesome.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)

A modern, responsive React portfolio application built with Vite. Showcase your projects, skills, and contact information with a fast, accessible, and performant web app.



## Features

- Mobile-first responsive design
- Hero section with navigation
- Projects showcase page
- Skills and experience display
- About section
- Contact form
- Footer with social links
- Font Awesome icons integration
- Optimized with Vite for fast development and production builds

## Technologies

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Font Awesome** - Icon library
- **CSS** - Styling 

## Quick Start

### Prerequisites
- Node.js >= 16
- npm or yarn

### Installation & Development

```bash
git clone https://github.com/twinodev/Potifolial_React_app.git
cd Potifolial_React_app
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## Project Structure

```
src/
├── App.jsx          — Main app component
├── main.jsx         — React entry point
├── index.css        — Global styles
├── Header.jsx       — Navigation header
├── hero.jsx         — Hero section
├── projects.jsx     — Projects page
├── project.jsx      — Individual project component
├── skills.jsx       — Skills section
├── about.jsx        — About section
├── contact.jsx      — Contact form
├── Footer.jsx       — Footer component
└── assets/          — Images and media files

public/              — Static files
```

## Accessibility & Performance

- Semantic HTML structure
- Responsive mobile-first design
- Optimized images and assets
- Fast Vite build process
- Clean, maintainable code with ESLint

## Deployment

Deploy to Vercel, Netlify, or GitHub Pages:

### Netlify
- Push to GitHub
- Connect repo in Netlify Dashboard
- Build command: `npm run build`
- Publish directory: `dist`

### Vercel
- Push to GitHub
- Import project in Vercel
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Customization

- Update portfolio content in the JSX files (src/*.jsx)
- Add or modify projects in `src/project.jsx`
- Customize skills in `src/skills.jsx`
- Update contact information in `src/contact.jsx`
- Modify global styles in `src/index.css`
- Add your own images to `src/assets/`
- Update social links in `src/Footer.jsx`

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Contact

- Author: twinodev  
- GitHub: https://github.com/twinodev


