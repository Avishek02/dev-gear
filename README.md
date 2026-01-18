# 🚀 DevStack - Full-Stack Developer Resource Hub

DevStack is a professional curated directory for developers to explore AI tools, frameworks, and deployment platforms. This project is built using **Next.js 16 (Turbopack)** and **MongoDB Atlas** for persistent data storage.

## 🌐 Live Demo
https://devstack02.vercel.app/

## ✨ Key Features
- **Dynamic Resource Library**: Fetches and displays developer tools in real-time from MongoDB.
- **Admin Control Panel**: Securely add new tools via a dedicated form with error handling.
- **Detailed View**: Dynamic routing to show specific tool details including ratings and English descriptions.
- **Route Protection**: Middleware implementation to protect the admin dashboard from unauthorized access.
- **Modern UI**: Built with Tailwind CSS v4 and DaisyUI v5 for a sleek, responsive experience.

## 🛠️ Tech Stack
- **Frontend**: Next.js 16 (App Router), React 19
- **Backend**: Next.js API Routes (Serverless Functions)
- **Database**: MongoDB Atlas (NoSQL)
- **Styling**: Tailwind CSS & DaisyUI
- **Deployment**: Vercel

## 🔑 Admin Credentials
- **Email**: `admin@devstack.com`
- **Password**: `admin123`

## 📁 Project Structure
- `/src/app/api/items`: Main API endpoint for fetching and posting tools.
- `/src/app/api/items/[id]`: Dynamic API for single item retrieval.
- `/src/app/items/[id]`: Dynamic frontend route for item details.
- `/src/lib/mongodb.js`: Database connection utility.
- `/src/middleware.js`: Logic for protecting admin routes.

## 🚀 Local Setup
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Create a `.env.local` file and add your `MONGODB_URI`.
4. Run the development server: `npm run dev`.