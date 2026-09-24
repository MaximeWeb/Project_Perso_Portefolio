const Message = require("../models/Message");

const createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Tous les champs sont obligatoires",
      });
    }

    const newMessage = await Message.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      message: "Message envoyé avec succès",
      data: newMessage,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de l'envoi du message",
    });
  }
};

// Récupérer tous les messages
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({
      createdAt: -1,
    });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des messages",
    });
  }
};

module.exports = {
  createMessage,
  getMessages,
};