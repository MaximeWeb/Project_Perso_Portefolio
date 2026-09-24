const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Vérification des champs
    if (!email || !password) {
      return res.status(400).json({
        message: "Email et mot de passe obligatoires",
      });
    }

    // Recherche de l'administrateur
    const admin = await Admin.findOne({
      email: email.toLowerCase(),
    });

    if (!admin) {
      return res.status(401).json({
        message: "Email ou mot de passe incorrect",
      });
    }

    // Comparaison avec le mot de passe hashé
    const passwordIsValid = await bcrypt.compare(
      password,
      admin.password
    );

    if (!passwordIsValid) {
      return res.status(401).json({
        message: "Email ou mot de passe incorrect",
      });
    }

    // Création du JWT
    const token = jwt.sign(
      {
        adminId: admin._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );

    res.status(200).json({
      message: "Connexion réussie",
      token,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Erreur lors de la connexion",
    });
  }
};

module.exports = {
  login,
};