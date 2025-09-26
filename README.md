# 📚 Shopping List Web App

A full-stack web application for managing a shopping list.
Built with **React (Vite + Tailwind)** on the frontend and **Node.js + Express** on the backend.
Deployed on **Vercel (frontend)** and **Render (backend)**.

---

## 🚀 Live Demo

* **Frontend:** [https://shopping-list-management.vercel.app](https://shopping-list-management.vercel.app)
* **Backend API:** [https://shopping-list-backend-d8go.onrender.com/api/items](https://shopping-list-backend-d8go.onrender.com/api/items)

---

## 📌 Features

* Add new items (name, quantity, category)
* Edit existing items
* Delete items
* View all shopping list items
* Responsive design using Tailwind CSS

---

## 🛠️ Tech Stack

**Frontend**

* React (Vite)
* Tailwind CSS
* Axios

**Backend**

* Node.js
* Express.js
* CORS

**Deployment**

* Frontend → Vercel
* Backend → Render

---

## ⚙️ Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/shopping-list-app.git
cd shopping-list-app
```

### 2. Backend Setup

```bash
cd backend
npm install
npm run start   # start backend at http://localhost:5000
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev   # start frontend at http://localhost:5173
```

### 4. API Configuration

In `frontend/src/services/api.js`, set the backend URL:

```js
const API = axios.create({
  baseURL: "http://localhost:5000/api", // local dev
  // baseURL: "https://shopping-list-backend-d8go.onrender.com/api", // production
});
```

---

## 🌐 Deployment

### Backend (Render)

1. Push `backend/` folder to GitHub.
2. Create a **Web Service** on [Render](https://render.com/).
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Use `process.env.PORT` in server.

### Frontend (Vercel)

1. Push `frontend/` folder to GitHub.
2. Import project on [Vercel](https://vercel.com/).
3. Deploy — Vercel auto-detects Vite React.

---

## 📽️ Demo Video

Record a 30-second screen recording showing:

* Adding an item
* Editing an item
* Deleting an item

---

## 📖 API Endpoints

**Base URL:** `/api/items`

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/items     | Get all items |
| POST   | /api/items     | Add new item  |
| PUT    | /api/items/:id | Update item   |
| DELETE | /api/items/:id | Delete item   |

---

## 📂 Project Structure

```
shopping-list-app/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ItemForm.jsx
│   │   │   ├── ItemList.jsx
│   │   │   └── ItemCard.jsx
│   │   ├── services/api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── ...
└── README.md
```

---

## ✅ Evaluation Checklist

* [x] Functionality: Add / Edit / Delete / Display items
* [x] Code Quality: Clean, modular, reusable components
* [x] Design & UX: Responsive with Tailwind
* [x] State Management: React hooks (`useState`, `useEffect`)
* [x] Deployment: Live frontend & backend

---


