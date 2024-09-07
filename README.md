# MERN-o-Game: Video Game Library & Review

MERN-o-Game is a simple video game library and review system built using the MERN stack (MongoDB, Express.js, React, and Node.js). This project allows users to view a list of video games, and add reviews to them. The project does not implement any database logic yet, and data is stored & manipulated in JSON format.

## Link to the Website

- [Frontend on Vercel](https://mern-o-game-frontend2.vercel.app/) (Entire website will be visible here with the backend API running on Render)
- [Backend API on Render](https://mern-o-game-backend.onrender.com/)

## How I deployed the project

### Deploy Backend on Render

1. Create a new `Web Service` on Render.
2. Choose the GitHub repository to deploy from.
3. Change the root folder to `/backend`.
4. Setup the commands:
   - Build Command: `npm install`
   - Start Command: `node server.js`
5. Click on `Deploy` to deploy the backend API.

### Deploy Frontend on Vercel

1. Click on the `New Project` button.
2. Choose the GitHub repository to deploy from.
3. Choose `Create React App` as the **Framework Preset**.
4. Root directory: `/frontend`.
5. **Build Command**: `npm run build`
6. **Output Directory**: `build`
7. `Deploy` the project.

> Note: The backend API URL is hardcoded in the frontend. Make sure to update the URL in the frontend code to the deployed backend API URL.

## Features

- Display a list of video games with descriptions and images.
- Add reviews to each video game.
- Reviews are updated in real-time for each game.

## Project Structure

```plaintext
MERN-o-Game/
├── backend/
│   ├── routes/
│   │   └── videogameRoutes.js
│   ├── videogames_data.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── VideoGameCard.js
│   │   │   └── ReviewInput.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
├── README.md
└── package.json
```

## Project Installation

1. Clone this repository

2. Install dependencies for both the backend and frontend:

   - **Backend (in `/backend`):**

     ```bash
     cd backend
     npm install
     ```

   - **Frontend (in `/frontend`):**

     ```bash
     cd frontend
     npm install
     ```

> Pro Tip: Use a split terminal to run both the backend and frontend simultaneously.

## How to Run the Project

1. **Start the Backend Server:**

   Navigate to the `backend` directory and start the Express server:

   ```bash
   cd backend
   npm run dev  # for nodemon
   ```

   The server will start at `http://localhost:5000`.

2. **Start the Frontend Application:**

   In a new terminal, navigate to the `frontend` directory and start the React app:

   ```bash
   cd frontend
   npm start
   ```

   The React application will open in the browser at `http://localhost:3000`.

---

## Endpoints

- **GET `/api/videogames`**: Fetches all video games.
- **POST `/api/videogames/:id/review`**: Adds a review to a specific game by its ID.

---

## Future Improvements

- Implement MongoDB for persistent data storage.
- Add user authentication for posting reviews.
- Implement a rating system for games and reviews.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Styling**: CSS
- **HTTP Client**: Axios
