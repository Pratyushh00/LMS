# MERN LMS 🎓💻  
A full‑stack Learning Management System that feels like a real product: create and sell courses, enroll, learn, track progress, and see revenue grow. Built on the MERN stack with secure auth, Stripe payments, Cloudinary media, and a slick, responsive UI.

***

## ✨ Why I Built This
As a front‑end engineer leveling up to full‑stack, I wanted more than a “hello world” CRUD app. This LMS tackles real workflows: course creation, lecture uploads, payments, progress tracking, dashboards, and role‑based access—all packaged with performance and DX best practices.

***

## 🚀 Demo
Add links when ready:
- Live: 
- Test/Admin:
- API Base:
- Demo Video/GIF:

***

## 🔑 Features You’ll Actually Use

### For Learners
- Browse only Published courses (no drafts in the wild)
- Search by name/description + filter by category (Next.js, Data Science, etc.)
- Detailed course page: title, subtitle, creator, last updated, enrolled count
- Lecture player with free/locked indicators and progress tracking
- Mark lectures complete/incomplete; auto-updated course progress
- “My Learning” hub with all enrolled courses

### For Instructors/Admins
- Create/edit courses: title, subtitle, rich descriptions, level, category, price, thumbnail
- Add/edit/remove lectures, upload/update videos, set “free preview”
- Toggle course status: Published/Unpublished (enforced by lecture presence)
- Admin Dashboard: total sales, total revenue, course progress chart, purchase overview
- Centralized course/lecture management with protected routes

### Security & Auth
- JWT auth with HTTP‑only cookies (safer tokens)
- Role‑based access (user, instructor, admin)
- Bcrypt password hashing, validated inputs, CORS configured

### Payments & Media
- Stripe for secure checkout and post‑purchase enrollment
- Cloudinary for images/videos (upload previews, reliable streaming)
- Multer pipeline for server‑side uploads

### UX That Feels Modern
- Responsive (mobile/tablet/desktop)
- Light/Dark mode
- Skeleton loaders + toast notifications
- Rich text editor for course descriptions

***

## 🧱 Tech Stack

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

***

## 🧩 Architecture (What’s Under the Hood)

- Client (SPA)
  - Feature‑based slices with Redux Toolkit
  - RTK Query for data fetching, caching, and auto‑revalidation.
  - Routes: Home, Course Detail, Lecture Viewer, My Learning, Dashboard, Profile, Auth
  - Global UI state: dark/light theme, skeletons, toasts

- Server (REST)
  - Modules: auth, users, courses, lectures, payments/orders, uploads
  - Upload flow: Multer → Cloudinary → persisted URLs
  - Guards: JWT auth + role checks (instructor/admin)
  - Media streaming via Cloudinary URLs

- Database (MongoDB)
  - Users (profiles/roles/enrollments)
  - Courses (metadata, price, status, thumbnail)
  - Lectures (title, video URL, free/locked)
  - Progress (user/lecture completion)
  - Orders/Payments (Stripe session/status/totals)

***

## 🔐 Security Snapshot
- HTTP‑only cookies for JWT auth → mitigates XSS token theft
- Bcrypt for password hashing
- Whitelisted CORS and validated payloads
- Protected API routes + role‑based UI

***

## ⚡ Performance & DX
- RTK Query to dedupe requests and cache aggressively
- Cloudinary offloads media for fast delivery
- Tailwind + shadcn/ui for consistent, accessible components
- Vite dev server + nodemon for smooth local development
- Skeletons and optimistic UI to keep interactions snappy

***

## 🛠️ Getting Started

Prereqs:
- Node.js ≥ 20.1
- MongoDB URI
- Stripe keys
- Cloudinary credentials

1) Clone  
- git clone   
- cd 

2) Install  
- cd client && npm install  
- cd ../server && npm install

3) Environment

Server (.env)
- PORT=5000
- MONGODB_URI=your_mongodb_uri
- JWT_SECRET=your_jwt_secret
- COOKIE_NAME=auth_token
- STRIPE_SECRET_KEY=sk_test_or_live
- STRIPE_WEBHOOK_SECRET=whsec_...
- CLOUDINARY_CLOUD_NAME=your_name
- CLOUDINARY_API_KEY=your_key
- CLOUDINARY_API_SECRET=your_secret
- CLIENT_URL=http://localhost:5173

Client (.env)
- VITE_API_BASE_URL=http://localhost:5000
- VITE_STRIPE_PUBLISHABLE_KEY=pk_test_or_live

4) Run
- Server: cd server && npm run dev
- Client: cd client && npm run dev
- Open: http://localhost:5173

***

## 📦 Scripts

Server
- npm run dev — dev with nodemon
- npm run start — prod start

Client
- npm run dev — Vite dev
- npm run build — prod build
- npm run preview — preview build

***

## 🗂️ Folder Structure

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

***

## 🧠 What I Learned
- Building a production‑style MERN app end‑to‑end (auth → payments → media → RBAC)
- RTK Query: cache‑first data layer, fewer network calls, smooth UX
- Secure JWT auth with HTTP‑only cookies and protected routes
- Stripe checkout flows + web‑safe post‑purchase enrollment
- Cloudinary media uploads/streaming at scale
- Designing flexible course/lecture/progress schemas
- Shipping responsive, themeable UI with modern patterns

***

## 🗺️ Roadmap
- TypeScript migration across client and server for stronger type safety.
- Access control enhancements: instructor role separation, organization/teams, multi‑instructor courses.
- Ratings & Reviews for courses; Q&A/Discussions per lecture.
- Certificates of completion and shareable badges.
- Wishlists, gift purchases, and coupons/discount codes.
- Email workflows: transactional emails (purchase, progress reminders), newsletters.
- Mobile‑first PWA features: offline syllabus, partial video buffering.
- Accessibility upgrades (WCAG), keyboard shortcuts, transcripts/subtitles.
- CI/CD: automated tests (Jest/RTL), E2E (Cypress/Playwright), coverage reports, preview deployments.

***

## 📬 Contact
Pratyush Singh Rajawat  
Email: pratyushsinghrajawat@gmail.com  
LinkedIn: [linkedin.com/in/pratyush-singh-rajawat](https://www.linkedin.com/in/pratyush-singh-rajawat/)

***
