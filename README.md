# 🚀 Vitto – AI-First Lending Infrastructure

Vitto is a modern fintech web application designed to streamline lending operations using AI-driven decisioning, real-time analytics, and seamless user onboarding.

This project demonstrates a complete **full-stack flow** including:

* Interactive landing page
* OTP-based user verification
* Lead capture system
* Backend API integration

---

## ✨ Features

### 🔹 Frontend (React + Tailwind)

* Modern SaaS-style landing page
* Animated Hero section with dashboard UI
* Smooth transitions using Framer Motion
* Responsive design

### 🔹 OTP Authentication Flow

* Email/Phone input
* OTP generation & verification
* Step-based UI flow

### 🔹 Lead Generation System

* Collects:

  * Phone
  * Institution Name
  * City
  * Loan Size
* Stores data via backend API

### 🔹 Backend (Node.js + Express)

* OTP generation & validation
* JWT-based verification
* REST APIs for lead submission
* MongoDB integration

---

## 🛠 Tech Stack

### Frontend

* React.js (Vite)
* Tailwind CSS
* Framer Motion
* Recharts

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## 📂 Project Structure

```
Vitto/
├── Vitto Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│
├── Vitto backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/vitto.git
cd vitto
```

---

### 2️⃣ Setup Backend

```bash
cd "Vitto backend"
npm install
npm run dev
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5001
```

---

### 3️⃣ Setup Frontend

```bash
cd "Vitto Frontend"
npm install
npm run dev
```

---

## 🔄 API Endpoints

### 🔹 Send OTP

```
POST /api/auth/send-otp
```

### 🔹 Verify OTP

```
POST /api/auth/verify-otp
```

### 🔹 Submit Lead

```
POST /api/leads
```

---

## 🧪 Demo Flow

1. Click **Book a Demo**
2. Enter email/phone
3. Receive OTP (shown in alert for testing)
4. Verify OTP
5. Fill lead form
6. Submit successfully

---

## 🎯 Key Highlights

* Full-stack implementation
* Real-world fintech use case
* Clean UI/UX with animations
* Modular component structure
* API integration

---

## 🚀 Future Improvements

* Email/SMS OTP integration
* Dashboard for lead management
* Authentication system
* Deployment (Vercel + Render)

---

## 👨‍💻 Author

**Naman Verma**

---

## ⭐ Note

This project was built as part of an internship assignment to demonstrate:

* Frontend development skills
* Backend integration
* Product thinking & UI design
