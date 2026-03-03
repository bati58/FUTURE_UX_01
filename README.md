
# SmileCare Dental Clinic - UI/UX Frontend

A modern, responsive dental clinic website focused on lead generation and appointment booking.

This project is the **frontend UI/UX implementation** (React + Vite + TypeScript) and is ready for later integration with a complete MERN stack backend (MongoDB Atlas, Express, Node.js).

## Figma Source

- Original design source:  
  https://www.figma.com/design/jUAsUCBPTRQF8oolxNjDMs/Design-SmileCare-Website-UIUX

## Project Goals

- Build trust with a clean, medical-grade visual style
- Drive conversions with repeated booking CTAs
- Support desktop-first design with strong mobile UX
- Provide service education through detail pages and FAQs

## Current Scope (UI/UX Frontend)

Implemented pages and flows:

- Homepage
- Service detail pages (dynamic by service slug)
- Contact / appointment page
- About (founder profile + gallery)
- Privacy Policy page
- Global FAQ chatbot widget
- Sticky mobile bottom CTA ("Book Now")

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS v4
- shadcn/ui primitives (Radix-based components)
- Lucide icons
- Sonner toast notifications

## Key Features

- Sticky header with desktop + mobile navigation
- Services dropdown menu in navbar
- Conversion-focused CTA placement across sections
- Dynamic service pages from centralized data source
- FAQ accordion on service detail pages
- Contact form UI with toast feedback (mock submit)
- Embedded Google Map + external map link
- Founder profile and gallery integration
- Footer quick links, service links, social links, emergency contact
- Keyword-based FAQ chatbot for instant responses

## Routes

- `/` - Homepage
- `/about` - Founder profile and gallery
- `/privacy-policy` - Privacy policy content page
- `/services/:serviceSlug` - Service detail page
- `/contact` - Appointment / lead page

## Project Structure

```text
src/
  app/
    App.tsx
    routes.ts
    components/
      Layout.tsx
      Header.tsx
      Footer.tsx
      MobileBookButton.tsx
      FaqChatbot.tsx
      figma/
      ui/
    pages/
      Homepage.tsx
      ServiceDetail.tsx
      Contact.tsx
      About.tsx
      PrivacyPolicy.tsx
    data/
      services.ts
      founder.ts
  styles/
    index.css
    tailwind.css
    theme.css
    fonts.css
public/
  images/
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended 20+)
- npm or pnpm

### Install Dependencies

Using npm:

```bash
npm install
```

Using pnpm:

```bash
pnpm install
```

### Run Development Server

```bash
npm run dev
```

Then open:

- `http://localhost:5173`

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npx vite preview
```

## Branding and Content Customization

### 1) Logo

Current logo file used in header/footer:

- `public/images/smilecare-logo.png`

Used in:

- `src/app/components/Header.tsx`
- `src/app/components/Footer.tsx`

### 2) Founder Profile + Gallery

Update founder content and gallery list in:

- `src/app/data/founder.ts`

Local founder image files:

- `public/images/founder-dr-adane-jano.jpg`
- `public/images/founder-gallery-doctor.jpg`
- `public/images/gallery-treatment-room.jpg`
- `public/images/gallery-clinic-lounge.jpg`

### 3) Services Content

All service titles, summaries, hero images, benefits, and FAQs are centralized in:

- `src/app/data/services.ts`

### 4) Theme and Color System

Core theme tokens and color variables:

- `src/styles/theme.css`

App stylesheet imports:

- `src/styles/index.css`

### 5) Contact Details and Map

Update contact numbers, email, address, and map links in:

- `src/app/pages/Contact.tsx`
- `src/app/components/Footer.tsx`
- `src/app/components/FaqChatbot.tsx`
- `src/app/pages/ServiceDetail.tsx`

## Offline Image Strategy

Some images are loaded from external URLs (mainly Unsplash). If images do not appear offline:

1. Download the image files manually.
2. Place them in `public/images/`.
3. Replace remote URLs with local paths like `/images/your-file.jpg` in:
   - `src/app/pages/Homepage.tsx`
   - `src/app/data/services.ts`
   - `src/app/data/founder.ts`

## Form and Chatbot Behavior (Important)

- Appointment form currently performs a **mock submit** and only shows a success toast.
- FAQ chatbot is **rule/keyword-based** and runs fully on the frontend.
- No backend/API/database is connected yet.

## Next Step: MERN Fullstack Integration Plan

Suggested implementation path:

1. Create Express API (`/api/appointments`, `/api/contact`, `/api/faq`).
2. Connect MongoDB Atlas and define schemas for appointments, leads, and FAQ logs.
3. Add server-side validation and sanitization.
4. Replace mock form submit with real API call from `Contact.tsx`.
5. Add admin dashboard for appointment management.
6. Add email/SMS notification pipeline for booking confirmations.

## Troubleshooting

- If changes are not visible after edits, hard refresh browser: `Ctrl + F5`.
- If map embed fails, verify the map provider allows iframe embedding.
- If IDE shows CSS warnings in Tailwind directives, ensure the project is opened with Tailwind-aware extensions and dependencies installed.

## Scripts

- `npm run dev` - Start dev server
- `npm run build` - Build production bundle

## Attribution

This project includes:

- shadcn/ui components (MIT): https://ui.shadcn.com/
- Unsplash images: https://unsplash.com/license

See also:

- `ATTRIBUTIONS.md`

## License

This project is for SmileCare Dental Clinic UI/UX development.  
Define your preferred project license before public distribution.
  
