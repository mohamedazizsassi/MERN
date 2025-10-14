const express = require('express');
const Router = express.Router();

// On importe les fonctions du controleur
const { createArticle, getAllArticles } = require('../controllers/articleController');

// Dé finition des routes
// Note : Le chemin ’/’ ici correspondra à la racine de ce que nous définirons dans server.js

// Route POST pour /api/ articles ( devient / dans ce routeur )
Router.post('/', createArticle);
//Route GET pour /api/ articles ( devient / dans ce routeur )
Router.get('/', getAllArticles);

// On exporte le routeur pour l’utiliser dans server .js
module.exports = Router;