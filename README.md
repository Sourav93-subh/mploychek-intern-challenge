# MPloyChek – Background Verification SPA

Built for the MPloyChek Software Engineer Intern Code Challenge.

**Tech Stack:** Angular 21 · Node.js · TypeScript · MongoDB · JWT

---

## Live Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@mploychek.com | Admin@123 |
| General User | riya@mploychek.com | User@123 |

---

## Features

- ✅ Login page with Email, Password, Role selector
- ✅ JWT authentication with auto logout on token expiry
- ✅ Role-based access — Admin vs General User
- ✅ Dashboard with user profile, sortable records table, pagination
- ✅ Async API delay demo (slider to simulate latency)
- ✅ Skeleton loading screens
- ✅ Admin panel — full CRUD for users (create, edit, delete)
- ✅ Search and filter users
- ✅ Blockchain-ready architecture (Polygon)

---

## Project Structure

mploychek/
├── backend/        # Node.js + TypeScript REST API (port 3000)
└── frontend/       # Angular 21 SPA (port 4200)

---

## Setup & Run

### Prerequisites
- Node.js v18+
- MongoDB running locally
- Angular CLI: `npm install -g @angular/cli`

### 1. Start MongoDB
```bash
brew services start mongodb-community
```

### 2. Backend
```bash
cd backend
npm install
cp .env.example .env
npm run seed        # creates demo users & records
npm run dev         # runs on http://localhost:3000
```

### 3. Frontend
```bash
cd frontend
npm install --legacy-peer-deps
ng serve            # runs on http://localhost:4200
```

### 4. Open browser
http://localhost:4200

---

## API Endpoints

| Method | Endpoint | Access |
|--------|----------|--------|
| POST | `/api/auth/login` | Public |
| GET | `/api/auth/profile` | Auth |
| GET | `/api/users` | Auth |
| POST | `/api/users` | Admin |
| PUT | `/api/users/:id` | Admin |
| DELETE | `/api/users/:id` | Admin |
| GET | `/api/records` | Auth |

> All endpoints support `?delay=ms` for async simulation demo.

---

## Evaluation Criteria Met

| Criteria | Implementation |
|----------|---------------|
| Angular framework | Angular 21 standalone components |
| API knowledge | REST API with Express + JWT |
| Cloud framework | AWS-ready, MongoDB Atlas compatible |
| UI design | Custom SCSS, responsive layout |
| Async processing | forkJoin + configurable delay slider |
| Modular code | UserService, AuthService, RecordService, Guards, Interceptors |
| Clean architecture | Controller → Route → Model pattern 

