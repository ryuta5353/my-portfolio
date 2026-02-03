# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Next.js 16, React 19, and TypeScript. Uses Tailwind CSS 4 for styling with a dark purple theme, Framer Motion for animations, and Lucide React for icons.

## Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Run production server
npm run lint     # Run ESLint
```

## Architecture

- **Framework**: Next.js App Router (not Pages Router)
- **Styling**: Tailwind CSS with PostCSS, dark purple color scheme
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Path alias**: `@/*` maps to project root

### Directory Structure

- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with fonts (Geist Sans/Mono)
  - `page.tsx` - Home page that composes all section components
  - `globals.css` - Global styles with custom purple theme variables
- `components/ui/` - Reusable UI components
  - `Hero.tsx` - Main hero section with animated intro
  - `About.tsx` - About me section with interests
  - `Skills.tsx` - Skills display with progress bars
  - `Projects.tsx` - Project cards with glow effects
  - `Contact.tsx` - Social links section
  - `Footer.tsx` - Footer component
- `constants/` - Static data (profile, skills, projects, social links)
- `types/` - TypeScript type definitions
- `public/` - Static assets
