# Book List App

## 📌 Overview
Book List is a React application that allows users to manage a list of books. It provides functionality to add, edit, filter, and toggle the active status of books. The app uses JSON Server as a mock backend and React Router for navigation.

## 🚀 Features
- Add new books with details like title, author, category, and ISBN.
- Edit existing books.
- Toggle book status (Active/Deactivated).
- Filter books by status (Show All, Show Active, Show Deactivated).
- Persistent filter selection using `localStorage`.

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS, Radix UI, Lucide Icons
- **Routing:** React Router
- **State Management:** useState, useEffect
- **Mock Backend:** JSON Server
- **Build Tool:** Vite
- **Linting:** ESLint
```

## 📦 Installation
1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/book-list.git
   cd book-list
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

## 🚀 Running the Application
### Start the development server:
```sh
npm run dev
```
This will start the Vite development server.

### Start the JSON Server:
```sh
npm run server
```
This will run the JSON Server on `http://localhost:8000/`.

## 🛠 Usage
- Navigate to `http://localhost:5173/` (default Vite port) to use the app.
- Use the **Add Book** page to add a new book.
- Click **Edit** on any book to modify its details.
- Use the **Toggle Active** button to activate/deactivate books.
- Use the **Filter Dropdown** to switch between **Show All, Show Active, Show Deactivated**.


## ✨ Additional Commands
- **Build the project:**
  ```sh
  npm run build
  ```
- **Lint the code:**
  ```sh
  npm run lint
  ```
- **Preview production build:**
  ```sh
  npm run preview
  ```


