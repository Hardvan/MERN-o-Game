const express = require("express");
const cors = require("cors");
const videoGameRoutes = require("./routes/videogameRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/videogames", videoGameRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
