# SmileCare Dental Clinic - Fullstack Starter

Modern, responsive dental clinic website with:

- React + Vite frontend
- Express + MongoDB backend
- Real appointment submission API

This is now a working fullstack base you can deploy publicly.

## Figma Source

- https://www.figma.com/design/jUAsUCBPTRQF8oolxNjDMs/Design-SmileCare-Website-UIUX

## Stack

- Frontend: React, TypeScript, Vite, Tailwind v4, React Router, shadcn/ui
- Backend: Express, Mongoose, Zod, Helmet, CORS, Rate Limiting
- Database: MongoDB Atlas

## Features

- Sticky header + responsive navigation
- Services dropdown and dynamic service detail pages
- Contact/appointment form connected to backend API
- Founder profile + gallery
- FAQ chatbot widget
- Privacy policy page
- Mobile sticky booking CTA

## Routes

- `/` Homepage
- `/about` Founder page
- `/privacy-policy` Privacy policy
- `/services/:serviceSlug` Service details
- `/contact` Appointment page

## API Endpoints

- `GET /api/health` health status
- `POST /api/appointments` create appointment request

## Project Structure

```text
client/
  src/
    app/
      components/
      pages/
      data/
      lib/
    styles/
  public/
  assets/
  index.html
  vite.config.ts
server/
  src/
    config/
    middleware/
    models/
    routes/
```

## Environment Variables

### Frontend (`client/.env`)

Copy from `client/.env.example`:

```bash
VITE_API_URL=http://localhost:5000/api
```

If omitted, frontend falls back to `/api` and uses Vite proxy in local dev.

### Backend (`server/.env`)

Copy from `server/.env.example`:

```bash
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/smilecare?retryWrites=true&w=majority
CORS_ORIGIN=http://localhost:5173
```

## Local Run (Fullstack)

### 1) Install frontend deps

```bash
npm --prefix client install
```

### 2) Install backend deps

```bash
npm --prefix server install
```

### 3) Run backend

```bash
npm --prefix server run dev
```

### 4) Run frontend (new terminal)

```bash
npm --prefix client run dev
```

Open:

- Frontend: `http://localhost:5173`
- API Health: `http://localhost:5000/api/health`

## Build

```bash
npm --prefix client run build
```

## Scripts

- `npm run install:client` install frontend deps
- `npm run install:server` install backend deps
- `npm run dev:client` start frontend dev server
- `npm run build:client` build frontend
- `npm run dev:server` start backend server
- `npm run start:server` start backend server

## Key Config Files

- Frontend API client: `client/src/app/lib/api.ts`
- Contact form submit: `client/src/app/pages/Contact.tsx`
- Vite API proxy: `client/vite.config.ts`
- Backend entry: `server/src/index.js`
- Appointment model: `server/src/models/Appointment.js`
- Appointment route: `server/src/routes/appointments.js`

## Deployment Path (Public)

1. Deploy backend (`server/`) to Render Web Service.
2. Add Atlas `MONGODB_URI` and production `CORS_ORIGIN`.
3. Deploy frontend to Vercel or Render Static Site.
4. Set frontend `VITE_API_URL` to backend public API URL.
5. Add custom domain + HTTPS.

## Content Customization

- Services content: `client/src/app/data/services.ts`
- Founder content/gallery: `client/src/app/data/founder.ts`
- Brand logo: `client/public/images/smilecare-logo.png`

## Attribution

- shadcn/ui (MIT): https://ui.shadcn.com/
- Unsplash license: https://unsplash.com/license
- More details: `ATTRIBUTIONS.md`
