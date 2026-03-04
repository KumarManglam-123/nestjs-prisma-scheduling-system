# Backend Scheduling System (NestJS + Prisma)

## Project Overview

This project is a backend scheduling system built using **NestJS** and **Prisma ORM**.
It demonstrates modular backend architecture, authentication setup, and database integration.

The system includes modules for:

* Authentication
* User management
* User onboarding (Patient / Doctor roles)
* Database access using Prisma

---

# Tech Stack

* Node.js
* NestJS
* TypeScript
* Prisma ORM
* SQLite
* Passport.js (Google OAuth structure)

---

# Project Structure

```
src
 ├ auth
 ├ users
 ├ onboarding
 ├ prisma
 ├ app.module.ts
 └ main.ts

prisma
 └ schema.prisma
```

---

# Installation

### Clone the repository

```
git clone https://github.com/yourusername/backend-scheduling-system.git
cd backend-scheduling-system
```

### Install dependencies

```
npm install
```

### Run the server

```
npm run start:dev
```

Server runs on:

```
http://localhost:3000
```

---

# API Endpoints

## Users

```
GET /users
```

Response:

```
{
 "message": "Users endpoint working"
}
```

---

## Authentication

```
GET /auth/google
```

This endpoint represents the authentication module structure.

---

# Architecture

The application follows NestJS modular architecture.

```
AppModule
 ├ AuthModule
 ├ UsersModule
 ├ OnboardingModule
 └ PrismaModule
```

Each module contains:

* Controller
* Service
* Module file

---

# Author

Kumar Manglam

Backend Developer (Node.js | NestJS | Prisma)

GitHub: https://github.com/yourusername
