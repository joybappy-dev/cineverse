# 🎬 CineVerse - Premium Movie Catalog

CineVerse is a high-end, cinematic web application built with **Next.js 16 (App Router)** and **Tailwind CSS**. This project serves as a comprehensive movie database where users can explore films, view detailed synopses, and authorized administrators can manage the movie catalog through a protected interface.

---

## 🚀 Live Links
- **Live Deployment:** https://cineverse-joy.vercel.app/

---

## 📋 Project Description
CineVerse is designed for film enthusiasts to discover and track their favorite movies. Built using the latest **Next.js 16** standards, it demonstrates a full-stack flow by fetching data from an external **Express.js API** and managing administrative sessions via secure browser cookies and Middleware.

---

## ✨ Implemented Features

### 1. 7-Section Cinematic Landing Page
A professionally designed homepage containing:
* **Hero Section:** A massive cinematic visual with a primary call to action.
* **Trending Now:** High-quality movie cards featuring the latest hits.
* **Browse Genres:** Categorized sections for Action, Drama, Sci-Fi, etc.
* **About CineVerse:** A brief history and mission of the platform.
* **Live Platform Stats:** Real-time data showing 500+ movies and 10k+ active critics.
* **Critic Testimonials:** Feedback from professional industry reviewers.
* **Newsletter Signup:** A sleek form to get alerts for upcoming premieres.

### 2. Mock Authentication System
* **Login Logic:** Secure access using hardcoded credentials (`admin@hero.com` / `password123`).
* **Session Management:** Uses `js-cookie` to store the `isLoggedIn` state locally.
* **Auto-Redirect:** Automatically sends users to the Movie List page upon successful login.

### 3. Movie Management (Public & Private)
* **Movie Catalog:** A public page fetching movie data from a dedicated Express.js server.
* **Dynamic Details:** A route (`/items/[id]`) that shows specific movie metadata and cast details.
* **Add Movie (Protected):** A restricted form that allows admins to POST new movie data to the Express server.

### 4. Advanced Technical Features
* **Route Protection:** Next.js **Middleware** intercepts unauthorized users trying to access `/add-item`.
* **Toast Notifications:** Uses `sonner` to provide instant feedback when movies are added.
* **Next.js 16 Optimized:** Fully implements the new `await params` and `await cookies()` patterns.

---

## 🗺️ Route Summary

| Route | Accessibility | Description |
| :--- | :--- | :--- |
| `/` | **Public** | Cinematic Landing Page (7 Sections) |
| `/items` | **Public** | Movie List (Fetched from Express API) |
| `/items/[id]` | **Public** | Detailed Movie Synopsis & Information |
| `/login` | **Public** | Administrative Login Portal |
| `/add-item` | 🔒 **Protected** | Form to add new movies to the database |

---

## 🛠️ Technologies Used

* **Framework:** Next.js 16 (App Router)
* **Language:** JavaScript (JSX)
* **Styling:** Tailwind CSS (Cinematic Dark Theme)
* **Icons:** Lucide React
* **Backend:** Express.js / JSON API
* **Notifications:** Sonner Toast

---