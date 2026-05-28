<div align="center">

<img src="https://img.shields.io/badge/MPloyChek-Background%20Verification-FF6B00?style=for-the-badge" />

# 🔐 MPloyChek
### AI-Powered Background Verification Platform

*Submitted for: Software Engineer Intern Code Challenge — NSQTech Private Limited*

<br/>

[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io)
[![Polygon](https://img.shields.io/badge/Polygon-Blockchain-8247E5?style=for-the-badge&logo=polygon&logoColor=white)](https://polygon.technology)

<br/>

![Login Preview](file:///Users/souravsubham/Desktop/Screenshot%202026-05-28%20at%203.54.10%E2%80%AFPM.png)

</div>

---

## 📌 About The Project

**MPloyChek** is a production-ready full-stack SPA built to demonstrate:

- 🏗️ Clean Angular architecture with standalone components & lazy loading
- 🔐 Secure JWT authentication with role-based route protection
- ⚡ Async API processing with observable patterns (`forkJoin`, `finalize`)
- 🛠️ Full CRUD admin panel with real-time UI updates
- 📊 Dynamic data tables with sorting, filtering & pagination

---

## ✨ Features

<table>
<tr>
<td>

**🔐 Authentication**
- JWT login with bcrypt password hashing
- Auto logout on token expiry
- HTTP interceptor attaches token automatically

</td>
<td>

**👥 Role-Based Access**
- Admin and General User roles
- Route guards protect sensitive pages
- API enforces access on backend too

</td>
</tr>
<tr>
<td>

**📊 Dashboard**
- User profile card
- Sortable & filterable records table
- Pagination with page controls

</td>
<td>

**⚡ Async Demo**
- Configurable API delay slider (0–3000ms)
- Skeleton shimmer loaders
- `forkJoin` for parallel API calls

</td>
</tr>
<tr>
<td>

**🛠️ Admin Panel**
- Full CRUD for users
- Create/Edit modal with validation
- Delete confirmation dialog

</td>
<td>

**🎨 UI/UX**
- Responsive design (mobile + desktop)
- Custom SCSS with animations
- Toast notifications

</td>
</tr>
</table>

---

## 🎭 Demo Credentials

> Use the **Quick Fill** buttons on the login page to auto-fill!

| Role | Email | Password | Access |
|------|-------|----------|--------|
| 👑 **Admin** | admin@mploychek.com | Admin@123 | Full access |
| 👤 **General User** | riya@mploychek.com | User@123 | Own data only |
| 👤 **General User** | arjun@mploychek.com | User@123 | Own data only |

---

## 🏗️ Project Structure

mploychek/
│
├── 📁 backend/                    # Node.js + TypeScript REST API
│   └── src/
│       ├── 📁 config/
│       │   ├── database.ts        # MongoDB connection
│       │   └── seed.ts            # Demo data seeder
│       ├── 📁 controllers/        # Business logic layer
│       │   ├── authController.ts
│       │   ├── userController.ts
│       │   └── recordController.ts
│       ├── 📁 middleware/
│       │   └── auth.ts            # JWT + Admin guard
│       ├── 📁 models/             # Mongoose schemas
│       │   ├── User.ts
│       │   └── Record.ts
│       ├── 📁 routes/             # Express route definitions
│       │   ├── auth.ts
│       │   ├── users.ts
│       │   └── records.ts
│       └── index.ts               # App entry point
│
└── 📁 frontend/                   # Angular 21 SPA
└── src/app/
├── 📁 components/
│   ├── login/             # Login page
│   ├── dashboard/         # Main dashboard
│   └── admin/             # User management
├── 📁 guards/             # Route protection
├── 📁 interceptors/       # JWT HTTP interceptor
├── 📁 models/             # TypeScript interfaces
├── 📁 services/           # API service layer
├── app.ts                 # Root component
├── app.routes.ts          # Route definitions
└── app.config.ts          # App configuration

---

## 🚀 Getting Started

### ✅ Prerequisites

| Tool | Version | Download |
|------|---------|----------|
| Node.js | v18+ | https://nodejs.org |
| MongoDB | Latest | https://mongodb.com/try/download/community |
| Angular CLI | v21 | `npm install -g @angular/cli` |

---

### Step 1 — Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/mploychek-intern-challenge.git
cd mploychek-intern-challenge
```

---

### Step 2 — Start MongoDB

```bash
# macOS
brew services start mongodb-community

# Windows
net start MongoDB

# Linux
sudo systemctl start mongod
```

---

### Step 3 — Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Seed database with demo users & records
npm run seed

# Start server
npm run dev
```

> ✅ Backend running at **http://localhost:3000**

---

### Step 4 — Frontend Setup

```bash
cd frontend

# Install dependencies
npm install --legacy-peer-deps

# Start dev server
ng serve
```

> ✅ Frontend running at **http://localhost:4200**

---

### Step 5 — Open in Browser

http://localhost:4200

> 💡 Click the **Admin** or **General User** quick fill buttons on the login page!

---

## 🔌 API Reference

### 🔑 Auth
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `POST` | `/api/auth/login` | Public | Login, returns JWT |
| `GET` | `/api/auth/profile` | Auth | Current user profile |

### 👥 Users
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `GET` | `/api/users` | Auth | Admin: all · User: self |
| `GET` | `/api/users/:id` | Admin | Get by ID |
| `POST` | `/api/users` | Admin | Create user |
| `PUT` | `/api/users/:id` | Admin | Update user |
| `DELETE` | `/api/users/:id` | Admin | Delete user |

### 📋 Records
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| `GET` | `/api/records` | Auth | Admin: all · User: own |
| `POST` | `/api/records` | Admin | Create record |
| `PUT` | `/api/records/:id` | Admin | Update record |
| `DELETE` | `/api/records/:id` | Admin | Delete record |

> 💡 All endpoints support `?delay=<ms>` for async simulation demo

---

## 🧱 Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | Angular 21 + TypeScript | SPA framework |
| **Styling** | SCSS | Custom responsive design |
| **Backend** | Node.js + Express + TypeScript | REST API |
| **Database** | MongoDB + Mongoose | Data storage |
| **Auth** | JWT + bcryptjs | Secure authentication |
| **Blockchain** | Polygon | Architecture ready |
| **Cloud** | AWS compatible | Deployment ready |

---

## 📋 Evaluation Criteria

| Criteria | Implementation |
|----------|---------------|
| ✅ **Angular framework** | Standalone components, reactive forms, lazy loading, route guards |
| ✅ **API knowledge** | RESTful Express API, JWT middleware, role-based endpoints |
| ✅ **Cloud framework** | MongoDB Atlas ready, AWS environment config |
| ✅ **UI design** | Custom SCSS, animations, skeleton loaders, modals, toasts |
| ✅ **Async processing** | `forkJoin`, `finalize`, configurable delay slider demo |
| ✅ **Modular code** | Services, Guards, Interceptors, Controller/Route/Model pattern |
| ✅ **Original code** | 100% custom implementation, no copied GitHub code |

---

## 👨‍💻 Author

<div align="center">

**Sourav Subham**

Submitted for **Software Engineer Intern** position
**MPloyChek / NSQTech Private Limited** · May 2026

</div>