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

module.exports = {
  createMessage,
};