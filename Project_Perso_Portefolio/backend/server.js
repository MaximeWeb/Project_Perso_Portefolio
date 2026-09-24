const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const messageRoutes = require("./routes/messageRoutes");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const projectRoutes = require("./routes/projectRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/auth", authRoutes);

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connexion MongoDB réussie");

    app.listen(PORT, () => {
      console.log(`🚀 Serveur démarré sur le port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Erreur MongoDB :", error);
  });