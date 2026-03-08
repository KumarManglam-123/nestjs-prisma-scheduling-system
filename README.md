# 🏥 Backend Scheduling System (NestJS + Prisma)

## 📌 Project Overview

This project is a **Backend Scheduling System** built using **NestJS and Prisma ORM**.

The system demonstrates a scalable backend architecture including:

- Google OAuth authentication using Passport.js
- User management APIs
- Patient and Doctor onboarding
- Database integration using Prisma ORM

The project follows **NestJS best practices**:

- Modular architecture
- Dependency Injection
- Prisma ORM integration
- REST API design

This backend can be extended into a **Doctor–Patient Appointment Scheduling Platform**.

---

# ⚙️ Tech Stack

- Node.js
- NestJS
- TypeScript
- Prisma ORM
- SQLite Database
- Passport.js
- Google OAuth 2.0

---

# 📂 Project Structure

```
src
 ├── auth
 │   ├── auth.controller.ts
 │   ├── auth.module.ts
 │   ├── auth.service.ts
 │   └── google.strategy.ts
 │
 ├── users
 │   ├── users.controller.ts
 │   ├── users.module.ts
 │   └── users.service.ts
 │
 ├── onboarding
 │   ├── onboarding.controller.ts
 │   ├── onboarding.module.ts
 │   └── onboarding.service.ts
 │
 ├── prisma
 │   ├── prisma.module.ts
 │   └── prisma.service.ts
 │
 ├── app.module.ts
 └── main.ts

prisma
 ├── schema.prisma
 └── migrations
```

---

# 🚀 Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/KumarManglam-123/nestjs-prisma-scheduling-system.git
cd nestjs-prisma-scheduling-system
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Configure Environment Variables

Create a `.env` file in the root folder:

```env
DATABASE_URL="file:./dev.db"

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## 4️⃣ Run Prisma Migration

```bash
npx prisma migrate dev
```

This will create the SQLite database (`dev.db`).

---

## 5️⃣ Start the Backend Server

```bash
npm run start:dev
```

Server will start on:

```
http://localhost:3000
```

---

# 🔐 Google OAuth Authentication

This project implements **Google OAuth login using Passport.js**.

### Authentication Flow

1️⃣ User visits:

```
GET /auth/google
```

2️⃣ Backend redirects the user to **Google Login**

3️⃣ User authenticates with Google

4️⃣ Google redirects back to:

```
GET /auth/google/callback
```

5️⃣ Backend returns authenticated user details.

### Example Response

```json
{
  "message": "Google OAuth successful",
  "user": {
    "email": "user@gmail.com",
    "name": "User Name",
    "googleId": "123456789"
  }
}
```

---

# 📡 API Endpoints

## Users

### Get Users

```
GET /users
```

Example response:

```json
[
  {
    "id": 1,
    "name": "Rahul",
    "email": "patient@gmail.com",
    "role": "PATIENT"
  },
  {
    "id": 2,
    "name": "Dr Sharma",
    "email": "doctor@gmail.com",
    "role": "DOCTOR"
  }
]
```

---

# 🧾 Onboarding APIs

### Create Patient

```
POST /onboarding/patient
```

### Create Doctor

```
POST /onboarding/doctor
```

These endpoints create users with roles:

- PATIENT
- DOCTOR

---

# 🗄️ Database

The project uses **Prisma ORM with SQLite**.

### User Model

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String
  role      String
  createdAt DateTime @default(now())
}
```

---

# 🔍 Database Viewer (Prisma Studio)

Run:

```bash
npx prisma studio
```

Opens:

```
http://localhost:5555
```

You can:

- View database records
- Edit users
- Add new entries

---

# 🧠 Architecture

The project follows **NestJS Modular Architecture**.

```
AppModule
 ├── AuthModule
 ├── UsersModule
 ├── OnboardingModule
 └── PrismaModule
```

Each module contains:

- Controller
- Service
- Module configuration

This architecture improves **scalability and maintainability**.

---

# 📚 Features Demonstrated

- NestJS modular architecture
- Prisma ORM integration
- Google OAuth authentication (Passport Strategy)
- REST API development
- Patient onboarding
- Doctor onboarding
- SQLite database integration
- Clean backend architecture
- Dependency Injection