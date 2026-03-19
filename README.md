# 🎯 Target Coaching Classes — Full Stack Web Application

A complete, production-ready coaching institute website built with React.js (frontend) and Node.js + Express + MySQL (backend).

---

## 📁 Project Structure

```
target-coaching/
│
├── backend/
│   ├── config/
│   │   ├── db.js              # MySQL connection pool
│   │   └── email.js           # Nodemailer transporter
│   ├── controllers/
│   │   └── contactController.js   # Form submission logic
│   ├── routes/
│   │   └── contactRoutes.js       # API routes
│   ├── database.sql           # MySQL setup queries
│   ├── server.js              # Express app entry point
│   ├── package.json
│   └── .env                   # Environment variables
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js + Navbar.css
│   │   │   └── Footer.js + Footer.css
│   │   ├── pages/
│   │   │   ├── Home.js + Home.css
│   │   │   ├── About.js + About.css
│   │   │   ├── Achievements.js + Achievements.css
│   │   │   ├── Batches.js + Batches.css
│   │   │   └── Contact.js + Contact.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css          # Global styles + CSS variables
│   └── package.json
│
└── README.md
```

---

## 🗄️ MySQL Database Setup

### Step 1: Open MySQL and run the setup script

```bash
mysql -u root -p < backend/database.sql
```

**OR** run these queries manually in MySQL Workbench / CLI:

```sql
CREATE DATABASE IF NOT EXISTS coaching_db
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE coaching_db;

CREATE TABLE IF NOT EXISTS enquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  class VARCHAR(20) NOT NULL,
  subject VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

---

## ⚙️ Backend Setup

### Step 1: Navigate to backend folder
```bash
cd backend
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Configure environment variables
Edit the `.env` file:
```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password_here
DB_NAME=coaching_db

EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_gmail_app_password_here

RECEIVER_EMAIL=vishalverma@gmail.com
```

> 📌 **Gmail App Password Setup:**
> 1. Go to your Google Account → Security
> 2. Enable 2-Step Verification
> 3. Go to App Passwords → Select "Mail" + "Other device"
> 4. Copy the generated 16-character app password into `EMAIL_PASS`

### Step 4: Start the backend server
```bash
# Development (with auto-restart)
npm run dev

# Production
npm start
```

Server runs on: **http://localhost:5000**

---

## 🌐 Frontend Setup

### Step 1: Navigate to frontend folder
```bash
cd frontend
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Start the development server
```bash
npm start
```

Frontend runs on: **http://localhost:3000**

> The frontend `package.json` has `"proxy": "http://localhost:5000"` configured, so API calls are automatically forwarded to the backend.

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit an enquiry form |
| GET | `/api/enquiries` | Fetch all enquiries (admin) |
| GET | `/` | Health check |

### POST `/api/contact` — Request Body

```json
{
  "name": "Priya Sharma",
  "phone": "9876543210",
  "classLevel": "Class 12",
  "subject": "PCM (Physics+Chem+Math)",
  "message": "I want to join the morning batch."
}
```

### Success Response
```json
{
  "success": true,
  "message": "Your enquiry has been submitted successfully! We will contact you soon.",
  "id": 1
}
```

---

## 🌟 Features Overview

### Frontend Pages
| Page | Route | Features |
|------|-------|---------|
| Home | `/` | Hero, Teacher profile, Subjects, Why Us, CTA |
| About | `/about` | Vishal Verma profile, Teaching structure, Timeline |
| Achievements | `/achievements` | Stats, Hall of Fame toppers, Year-wise results |
| Batches | `/batches` | Batch cards with filter, Weekly timetable, Notes |
| Contact | `/contact` | Validated form, Dynamic subjects, Success/Error state |

### Backend Features
- ✅ Input validation (server-side)
- ✅ MySQL data persistence
- ✅ Nodemailer Gmail SMTP email notification
- ✅ CORS enabled
- ✅ MVC pattern (routes / controllers / config)
- ✅ Global error handling
- ✅ Async/await throughout

---

## 🏃 Quick Start (Both Servers)

Open two terminal windows:

**Terminal 1 — Backend:**
```bash
cd target-coaching/backend
npm install
npm run dev
```

**Terminal 2 — Frontend:**
```bash
cd target-coaching/frontend
npm install
npm start
```

Then open **http://localhost:3000** in your browser.

---

## 🔧 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js 18, React Router v6, Axios |
| Styling | Custom CSS with CSS Variables |
| Backend | Node.js, Express.js |
| Database | MySQL 8 (via mysql2 package) |
| Email | Nodemailer (Gmail SMTP) |
| Dev Tools | nodemon |

---

## 📧 Email Configuration Notes

- Uses Gmail SMTP via Nodemailer
- Requires a **Gmail App Password** (not your regular Gmail password)
- Email is sent to `RECEIVER_EMAIL` (default: vishalverma@gmail.com) on every enquiry
- If email fails, the enquiry is still saved to the database

---

## 🛡️ Environment Variables Reference

```env
PORT=5000                          # Backend server port
DB_HOST=localhost                  # MySQL host
DB_USER=root                       # MySQL username
DB_PASSWORD=your_password          # MySQL password
DB_NAME=coaching_db                # Database name
EMAIL_USER=yourmail@gmail.com      # Gmail address for sending
EMAIL_PASS=xxxx xxxx xxxx xxxx     # Gmail 16-char App Password
RECEIVER_EMAIL=vishalverma@gmail.com  # Email to receive enquiries
```

---

*Built for Target Coaching Classes | By Vishal Verma | Gorakhpur, UP*
