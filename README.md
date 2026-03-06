🏥 Backend Scheduling System (NestJS + Prisma)








📌 Project Overview

This project is a Backend Scheduling System built using NestJS and Prisma ORM.

The system demonstrates a modular backend architecture including:

Google OAuth authentication structure

User management APIs

Patient and Doctor onboarding

Database integration using Prisma ORM

The project follows NestJS best practices such as:

Modular architecture

Dependency Injection

Prisma ORM integration

REST API design

This backend can be extended into a doctor–patient appointment scheduling platform.

⚙️ Tech Stack

Node.js

NestJS

TypeScript

Prisma ORM

SQLite Database

Passport.js (Google OAuth structure)

📂 Project Structure
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
🚀 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/KumarManglam-123/nestjs-prisma-scheduling-system.git
cd nestjs-prisma-scheduling-system
2️⃣ Install Dependencies
npm install
3️⃣ Configure Environment Variables

Create a .env file in the root folder:

DATABASE_URL="file:./dev.db"

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
4️⃣ Run Prisma Migration
npx prisma migrate dev

This will create the SQLite database (dev.db).

5️⃣ Start the Backend Server
npm run start:dev

Server will start on:

http://localhost:3000
📡 API Endpoints
Users
GET /users

Returns all users stored in the database.

Example response:

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
Google OAuth Authentication
GET /auth/google

Redirects user to Google OAuth login.

Onboarding

Create Patient

POST /onboarding/patient

Create Doctor

POST /onboarding/doctor

These endpoints store users with roles:

PATIENT

DOCTOR

🗄️ Database

The project uses Prisma ORM with SQLite.

User Model
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String
  role      String
  createdAt DateTime @default(now())
}
🔍 Database Viewer (Prisma Studio)

To view the database in a browser:

npx prisma studio

This will open:

http://localhost:5555

Here you can:

View users

Add new users

Edit records

Inspect database tables

Example table:

id	name	email	role
1	Rahul	patient@gmail.com
	PATIENT
2	Dr Sharma	doctor@gmail.com
	DOCTOR
🧠 Architecture

The project follows NestJS Modular Architecture.

AppModule
 ├── AuthModule
 ├── UsersModule
 ├── OnboardingModule
 └── PrismaModule

Each module contains:

Controller

Service

Module configuration

This architecture improves scalability and maintainability.

📊 ER Diagram (Conceptual)
User
 ├── id
 ├── email
 ├── name
 └── role

Patient
Doctor
Appointment
📚 Features Demonstrated

NestJS modular architecture

Prisma ORM integration

Google OAuth authentication structure

REST API development

Patient onboarding

Doctor onboarding

SQLite database integration

Clean backend project design

Dependency injection