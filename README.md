# FRONTEND LOOPED

## Overview
The **Looped Web System for Rating and Reviewing Music** is an online platform designed for discovering, rating, and reviewing music tracks and albums. This project provides users with an interactive space to share feedback, explore reviews, and engage with a community of music enthusiasts

## Features
- **User Authentication**: Secure log-in and sign-up, including Google OAuth integration via SupabaseAuth.
- **Homepage Dashboard**: Displays recent music releases (albums & EPs from Spotify API), popular reviews, playlists, and friend activities.
- **Music Rating & Reviews**: Rate albums/EPs using the unique “Loops” system (similar to stars), write reviews, and view detailed album info.
- **User Profiles**: Showcase favorite albums, recent reviews, playlists, activity history, genres, queue (to-listen list), and customizable profile details (username, bio, etc.).
- **Playlists Management**: Create, edit, and share playlists; explore popular and recently updated playlists; filter by genres
- **Albums Catalog**: Browse albums with filters (year, rating, genre, A–Z), view album stats, and listen via Spotify integration.
- **Community & Social Features**: Follow or block other users (“Loopers”), explore looper profiles, view their catalogs, reviews, and activities.
- **Search Functionality**: Search across albums, artists, playlists, and loopers with advanced filters for quick discovery.
- **Content Creation**: Built-in forms for writing reviews and creating playlists with options for tags (genres), privacy settings, and customization.
- **Interactive Navigation**: Dynamic navigation bar with quick access to profiles, albums, playlists, loopers, and creation tools.

## Getting Started

## Setup Instructions

### 1. Clone the Repository
If applicable, clone the project repository:
```bash
git clone https://github.com/jiejiebureche/FRONTEND-LOOPED
cd looped-fe
npm run dev
```

### 2. Set Up a Virtual Environment
Create and activate a Python virtual environment:
```bash
python -m venv venv
# On Windows:
env\Scripts\activate.bat

# On macOS/Linux:
source env\Scripts\activate.bat
```

### 3. Install Dependencies
Install the required Python libraries:
```bash
pip install -r requirements.txt
```
Install the required npm libraries too:
```
npm install
```
### 4. Run the Development Server
Start the Django server locally:
```bash
python manage.py runserver
```
Access the application at `http://127.0.0.1:8000`.

### Tech Stack
- Frontend Framework: **React + Vite** for building a fast, interactive, and modern user interface.
- Backend Framework: **Django with Django REST Framework** for handling server-side logic and providing robust APIs.
- Database: **PostgreSQL with Supabase integration** for scalable data storage and real-time features.
- Authentication: **SupabaseAuth** for secure user sign-up, log-in, and OAuth support (Google authentication).

### Folder Structure
```bash
looped-fe/
├── public/
│   ├── vite.svg                 # App entry asset for Vite
├── src/
│   ├── assets/                  # Static images and icons
│   │   ├── infinity.svg
│   │   ├── looped-bg.png
│   │   ├── looped-resized.svg
│   │   ├── looped-white.svg
│   │   ├── looped.svg
│   │   ├── react.svg
│   ├── components/              # Reusable UI components (Homepage, Auth forms, etc.)
│   │   ├── ForgetPass.jsx
│   │   ├── Homepage.jsx
│   │   ├── LoginForm.jsx
│   │   ├── SignUpForm.jsx
│   ├── App.jsx                  # Root application component
│   ├── index.css                # Global stylesheet
│   ├── main.jsx                 # React entry point
│   ├── router.jsx               # Route definitions
```
