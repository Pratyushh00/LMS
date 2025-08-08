# Learning Management System (LMS) – MERN Stack

A full‑stack LMS focused on real‑world course selling and learning management. Built with MERN, it delivers a complete experience for learners, instructors, and admins — from course creation and payment to progress tracking and analytics.

## Demo
- NOTE: Add links when available
  - Live URL:
  - Admin/Test Account:
  - API Base URL:
  - Demo Video/GIF:

## Table of Contents
- Overview
- Key Features
- Tech Stack
- Architecture & Modules
- Security & Auth
- Performance & UX
- Getting Started
- Environment Variables
- Scripts
- Folder Structure
- Learning & Highlights
- Roadmap (Future Updates)
- Contributing
- License

## Overview
This LMS enables:
- Learners to browse, purchase, and complete courses.
- Instructors/admins to create, manage, and publish courses and lectures.

## Key Features

### Course Management & Viewing
- Browse published courses (drafts hidden).
- Course detail page with title, subtitle, creator, last update, enrolled count.
- Search by course name/description and filter by category (e.g., Next.js, Data Science).
- Course creation with title, subtitle, description (rich text), category, level (beginner/medium/advanced), price, and thumbnail.
- Lecture management: add/edit/remove lectures; upload/update video; mark lecture as free preview.
- Course status toggle (Published/Unpublished) based on lecture presence.
- Lecture list with free/locked indicators and integrated video playback.
- Track progress: mark lectures complete/incomplete; automatic course progress updates.
- “My Learning” shows enrolled courses and progress.

### User Management & Authentication
- Register, login, logout (HTTP‑only cookie JWT).
- Edit profile (name, profile photo).
- Protected routes for authenticated users and role‑based access (instructor/admin).

### Payments & Orders
- Stripe integration for secure course purchases.
- Order flow with feedback (toasts), and post‑purchase enrollment.

### Admin Dashboard
- Overview of purchased courses, total sales, and total revenue.
- Course progress chart and insights for admins.
- Manage courses and lectures centrally.

### UI/UX
- Responsive design (mobile, tablet, desktop).
- Light/Dark mode.
- Skeletons for loading states.
- Toast notifications for success/error.
- Rich text editor for course descriptions.
- Image/video previews before upload.

## Tech Stack

- Frontend:
  - React (Vite)
  - Redux Toolkit + RTK Query
  - React Router DOM
  - Tailwind CSS
  - shadcn/ui
  - Recharts
  - Axios
  - React Quill

- Backend:
  - Node.js (>= 20.1.0)
  - Express.js
  - MongoDB + Mongoose
  - Multer (file uploads)
  - Cloudinary (media storage)
  - Stripe (payments)
  - Bcrypt.js (password hashing)
  - JSON Web Token (JWT) with HTTP‑only cookies
  - CORS, dotenv, nodemon

## Architecture & Modules

- Client (SPA):
  - Feature slices with Redux Toolkit.
  - RTK Query for data fetching, caching, and auto‑revalidation.
  - Route‑based pages: Home, Course Detail, Lecture Viewer, My Learning, Dashboard, Profile, Auth.
  - UI state: dark mode, skeleton loaders, toasts.

- Server:
  - RESTful APIs for auth, users, courses, lectures, orders/payments.
  - File upload pipeline: Multer -> Cloudinary -> persisted URLs in DB.
  - Role-based guards (auth, instructor/admin).
  - Web‑safe media streaming via Cloudinary URLs.

- Database (MongoDB):
  - Users: profile, roles, purchased courses.
  - Courses: metadata, price, status, thumbnail, lectures.
  - Lectures: title, video URL, free/locked flag.
  - Progress: completion by user/lecture.
  - Orders/Payments: Stripe session IDs, status, totals.

## Security & Auth

- JWT stored in HTTP‑only cookies to mitigate XSS token theft.
- Bcrypt password hashing.
- Role-based access control for instructor/admin.
- CORS configured for client–server domains.
- Validations on input and upload.

## Performance & UX

- RTK Query: request de‑duplication, caching, invalidation for snappy UI.
- Tailwind + shadcn/ui for accessible, consistent components.
- Skeletons and optimistic UX where appropriate.
- Media offloaded to Cloudinary for reliable delivery.
- Client‑side search/filtering plus backend query params.

## Getting Started

Prerequisites:
- Node.js >= 20.1.0
- MongoDB connection URL
- Stripe account & API keys
- Cloudinary account (cloud name, API key/secret)

1) Clone
- git clone 
- cd 

2) Install
- cd client && npm install
- cd ../server && npm install

3) Environment
Create .env files for both client (if needed) and server:

Server .env:
- PORT=5000
- MONGODB_URI=your_mongodb_uri
- JWT_SECRET=your_jwt_secret
- COOKIE_NAME=auth_token
- STRIPE_SECRET_KEY=sk_live_or_test
- STRIPE_WEBHOOK_SECRET=whsec_...
- CLOUDINARY_CLOUD_NAME=your_name
- CLOUDINARY_API_KEY=your_key
- CLOUDINARY_API_SECRET=your_secret
- CLIENT_URL=http://localhost:5173

Client .env (Vite):
- VITE_API_BASE_URL=http://localhost:5000
- VITE_STRIPE_PUBLISHABLE_KEY=pk_live_or_test

4) Run
- Server: cd server && npm run dev
- Client: cd client && npm run dev
- Open client URL (Vite default: http://localhost:5173)

## Scripts

Server:
- npm run dev – start with nodemon
- npm run start – production start

Client:
- npm run dev – Vite dev
- npm run build – production build
- npm run preview – preview build

## Folder Structure

- root/
  - client/
    - src/
      - app/ (store, RTK Query setup)
      - features/ (slices, API services)
      - pages/
      - components/
      - routes/
      - styles/
  - server/
    - src/
      - models/
      - controllers/
      - routes/
      - middleware/
      - services/ (stripe, cloudinary)
      - utils/
      - config/
  - README.md

## Learning & Highlights

- Built a production‑style MERN app handling end‑to‑end flows: auth, payments, media, and role‑based access.
- Leveraged RTK Query for cache‑first UX, mutation invalidation, and fewer network calls.
- Implemented HTTP‑only cookie auth to improve security posture.
- Designed a flexible course/lecture schema to support previews, publishing states, and progress tracking.
- Integrated Stripe for secure payments and Cloudinary for scalable media storage and delivery.
- Delivered responsive, themeable UI with Tailwind and shadcn/ui; improved perceived performance with skeletons and toasts.

## Roadmap (Future Updates)

- TypeScript migration across client and server for stronger type safety.
- Access control enhancements: instructor role separation, organization/teams, multi‑instructor courses.
- Ratings & Reviews for courses; Q&A/Discussions per lecture.
- Certificates of completion and shareable badges.
- Wishlists, gift purchases, and coupons/discount codes.
- Email workflows: transactional emails (purchase, progress reminders), newsletters.
- Mobile‑first PWA features: offline syllabus, partial video buffering.
- Accessibility upgrades (WCAG), keyboard shortcuts, transcripts/subtitles.
- CI/CD: automated tests (Jest/RTL), E2E (Cypress/Playwright), coverage reports, preview deployments.


Notes:
- Replace placeholders (repo URLs, env names, demo accounts) with your actual values.
- If you add screenshots or a short demo video/gif, include a “Screenshots” section to boost recruiter appeal.
