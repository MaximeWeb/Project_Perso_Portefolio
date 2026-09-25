# 💼 Portfolio Full Stack

Portfolio personnel développé afin de présenter mes projets, mes compétences et mon parcours en développement web.

L'application a été conçue comme un véritable projet **full-stack**, avec un frontend développé avec React, une API REST avec Node.js et Express, une base de données MongoDB et un espace d'administration sécurisé.

🌐 **Portfolio en ligne :**  
https://maximeweb.github.io/Project_Perso_Portefolio/

---

## 🚀 Fonctionnalités

### Portfolio public

- Présentation du profil développeur
- Affichage dynamique des projets
- Présentation des technologies utilisées
- Section À propos
- Formulaire de contact
- Navigation fluide entre les différentes sections
- Interface responsive

### Administration

Un espace d'administration permet de gérer le contenu du portfolio.

- Authentification administrateur
- Authentification sécurisée avec JWT
- Ajout de projets
- Modification de projets
- Suppression de projets
- Consultation des messages reçus depuis le formulaire de contact
- Protection des routes administrateur

---

## 🛠️ Technologies utilisées

### Frontend

- React
- JavaScript
- Vite
- React Router
- HTML5
- CSS3
- Fetch API

### Backend

- Node.js
- Express
- API REST
- JWT (JSON Web Token)
- bcrypt

### Base de données

- MongoDB Atlas
- Mongoose

### Déploiement

- GitHub Pages — frontend
- Render — API backend
- MongoDB Atlas — base de données

---

## 🏗️ Architecture

```text
Utilisateur
    │
    ▼
React + Vite
GitHub Pages
    │
    │ Requêtes HTTP / Fetch
    ▼
API REST
Node.js + Express
Render
    │
    │ Mongoose
    ▼
MongoDB Atlas
```

---

## 🔗 API

L'application communique avec une API REST développée avec Node.js et Express.

### Projets

```text
GET     /api/projects
GET     /api/projects/:id
POST    /api/projects
PUT     /api/projects/:id
DELETE  /api/projects/:id
```

Les opérations de création, modification et suppression sont protégées par authentification.

### Authentification

```text
POST /api/auth/login
GET  /api/auth/me
```

Lors d'une connexion valide, l'API génère un token JWT permettant d'accéder aux routes protégées.

### Messages

```text
POST /api/messages
GET  /api/messages
```

L'envoi d'un message est public tandis que la consultation des messages est réservée à l'administrateur.

---

## 🔐 Sécurité

Plusieurs mécanismes sont utilisés pour sécuriser l'application :

- Hashage des mots de passe avec bcrypt
- Authentification avec JWT
- Routes administrateur protégées
- Middleware d'authentification côté backend
- Variables sensibles stockées dans des variables d'environnement
- Aucun mot de passe administrateur stocké en clair dans la base de données

Les fichiers `.env` contenant les informations sensibles ne doivent jamais être ajoutés au dépôt Git.

---

## 📁 Structure du projet

```text
Project_Perso_Portefolio/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── scripts/
    ├── server.js
    └── package.json
```

---

## ⚙️ Installation locale

### 1. Cloner le projet

```bash
git clone https://github.com/MaximeWeb/Project_Perso_Portefolio.git
```

Puis accéder au projet.

### 2. Installer le frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Installer le backend

Dans un autre terminal :

```bash
cd backend
npm install
npm run dev
```

---

## 🔑 Variables d'environnement

Le backend nécessite plusieurs variables d'environnement.

Créer un fichier `.env` dans le dossier backend :

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

> ⚠️ Ne jamais publier le fichier `.env` ou de véritables identifiants dans le dépôt GitHub.

---

## 🌍 Déploiement

Le projet utilise plusieurs services :

```text
Frontend  → GitHub Pages
Backend   → Render
Database  → MongoDB Atlas
```

Cette architecture permet au frontend React hébergé sur GitHub Pages de communiquer avec l'API REST hébergée sur Render.

---

## 🎯 Objectifs du projet

Ce projet m'a permis de mettre en pratique plusieurs compétences de développement full-stack :

- Création d'une application React
- Création d'une API REST
- Architecture frontend / backend
- Manipulation d'une base MongoDB
- Création d'un CRUD complet
- Authentification avec JWT
- Hashage des mots de passe
- Protection des routes
- Gestion des variables d'environnement
- Communication frontend / API avec Fetch
- Déploiement d'une application full-stack

---

## 👨‍💻 Auteur

**Maxime**

Développeur Web Full Stack

GitHub : https://github.com/MaximeWeb
