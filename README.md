# 🏥 Backend Scheduling System (NestJS + Prisma)

![Node.js](https://img.shields.io/badge/Node.js-18-green)
![NestJS](https://img.shields.io/badge/NestJS-Framework-red)
![Prisma](https://img.shields.io/badge/Prisma-ORM-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

# 📌 Project Overview

This project is a **Backend Scheduling System** built using **NestJS** and **Prisma ORM**.

The system demonstrates a **modular backend architecture** with authentication structure, user management, onboarding, and database integration.

The project follows **NestJS best practices** such as:

* Modular architecture
* Dependency Injection
* Prisma ORM integration
* REST API design

This backend can be extended into a **doctor–patient scheduling platform**.

---

# ⚙️ Tech Stack

* **Node.js**
* **NestJS**
* **TypeScript**
* **Prisma ORM**
* **SQLite Database**
* **Passport.js (Google OAuth structure)**

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

```
git clone https://github.com/KumarManglam-123/nestjs-prisma-scheduling-system.git
cd nestjs-prisma-scheduling-system
```

---

## 2️⃣ Install Dependencies

```
npm install
```

---

## 3️⃣ Configure Environment Variables

Create a `.env` file in the root folder:

```
DATABASE_URL="file:./dev.db"

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## 4️⃣ Run Prisma Migration

```
npx prisma migrate dev
```

---

## 5️⃣ Start the Server

```
npm run start:dev
```

Server will run on:

```
http://localhost:3000
```

---

# 📡 API Endpoints

## Users Endpoint

```
GET /users
```

Example Response:

```
{
 "message": "Users endpoint working"
}
```

---

## Authentication Endpoint

```
GET /auth/google
```

Example Response:

```
{
 "message": "Google auth endpoint"
}
```

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

* Controller
* Service
* Module configuration

This structure ensures **scalability and maintainability**.

---

# 🗄️ Database

The project uses **Prisma ORM with SQLite**.

Example schema structure:

```
model User {
  id    Int    @id @default(autoincrement())
  email String @unique
  name  String?
  role  String
}
```

---

# 📊 ER Diagram (Conceptual)

```
User
 ├── id
 ├── email
 ├── name
 └── role

Patient
Doctor
Appointment
```






---

# 📚 Features Demonstrated

* NestJS modular architecture
* Prisma ORM integration
* REST API development
* Google OAuth structure
* Clean backend project design
* Dependency injection

---

# 👨‍💻 Author

**Kumar Manglam**

GitHub Profile:

https://github.com/KumarManglam-123

Project Repository:

https://github.com/KumarManglam-123/nestjs-prisma-scheduling-system

---

# 📄 License

This project is created for **educational and internship evaluation purposes**.
