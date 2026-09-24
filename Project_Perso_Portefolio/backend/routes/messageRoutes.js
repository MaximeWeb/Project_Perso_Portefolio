const express = require("express");

const {
  createMessage,
  getMessages,
} = require("../controllers/messageController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Public : un visiteur peut envoyer un message
router.post("/", createMessage);

// Privé : seul l'admin peut lire les messages
router.get("/", protect, getMessages);

module.exports = router;