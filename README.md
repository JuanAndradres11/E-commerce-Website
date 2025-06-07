# 🛍️ E-Commerce Website

A modern, responsive e-commerce web app built with **React** for the frontend and **Firebase** for backend services like authentication, database (Firestore), and hosting. Users can browse products, add items to the cart, sign in/out, and place orders.

---

## 📦 Features

* 🛒 Add-to-cart functionality
* 🔐 User Authentication via Firebase (Email/Password or Google)
* 📦 Product catalog from Firebase Firestore
* 💳 Checkout 

---

## 🛠️ Tech Stack

| Layer      | Tech Used                         |
| ---------- | --------------------------------- |
| Frontend   | React                             |
| Auth & DB  | Firebase Auth, Firebase Firestore |
| Hosting    | Firebase Hosting or Vercel        |

---

## 🧑‍💻 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/react-firebase-ecommerce.git
cd react-firebase-ecommerce
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Firebase Setup

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Create a new Firebase project
3. Enable Authentication (Email/Password or Google)
4. Create a Firestore Database
5. Copy your Firebase config and replace in `/src/firebase.js`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "yourapp.firebaseapp.com",
  projectId: "yourapp-id",
  storageBucket: "yourapp.appspot.com",
  messagingSenderId: "xxxxxxxx",
  appId: "1:xxxx:web:xxxx"
};
```

---

### 4. Start the App

```bash
npm start
```

App runs on `http://localhost:3000`

---

## ⚙️ Available Scripts

```bash
npm start       # Start development server
npm run build   # Create production build
```

---

## 📦 Firebase Features Used

| Feature          | Used For              |
| ---------------- | --------------------- |
| Firebase Auth    | User login/signup     |
| Firestore        | Product data + orders |
| Firebase Hosting | Deploying the app     |

---

## 🛡️ License

### MIT License

> You can use, modify, distribute, or sell this code freely. Just keep the original license and don’t blame the author if it breaks.

---

## 📌 TODO / Future Features

* ✅ Search and filter products
* 🛍️ Wishlist / Save for later
* 🧾 Order history page
* 🧪 Add test cases
* 💳 Integrate payment gateway (e.g., Razorpay / Stripe)
