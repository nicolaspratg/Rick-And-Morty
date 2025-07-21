# Rick and Morty Full Stack App

A full stack web application to search, favorite, and explore Rick and Morty characters. Built with React, Node.js, Express, and deployed on Vercel (frontend) and Render (backend).

## Features

- User login (demo, any credentials accepted)
- Search for characters by ID
- Add/remove favorites
- Responsive, modern UI

## Live Demo

- **Frontend:** [Rick & Morty Character Finder](https://rick-and-morty-peach-zeta.vercel.app/home)
- **Backend API:** [https://rick-and-morty-cawz.onrender.com](https://rick-and-morty-cawz.onrender.com)

## Screenshots

*(Add a few screenshots of your app!)*

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Clone the repository

```bash
git clone https://github.com/nicolaspratg/Rick-And-Morty.git
cd Rick-And-Morty
```

### Backend Setup

```bash
cd back
npm install
npm start
```
The backend will run on [http://localhost:3001](http://localhost:3001) by default.

### Frontend Setup

```bash
cd ../front
npm install
npm run dev
```
The frontend will run on [http://localhost:5173](http://localhost:5173) by default.

### Environment Variables

- **Frontend:**  
  Create a `.env` file in `/front` with:
  ```
  VITE_API_URL=http://localhost:3001
  ```
  (or your deployed backend URL for production)

- **Backend:**  
  No environment variables required for local development.

## Deployment

- **Frontend:** Deployed on Vercel. Set `VITE_API_URL` in Vercel project settings to your Render backend URL.
- **Backend:** Deployed on Render. Set the root directory to `/back`.

## Author

- Nicolás de Prat Gay  
  [LinkedIn](https://www.linkedin.com/in/ndepratg/)
