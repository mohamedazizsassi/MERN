const express = require('express');
const Router = express.Router();

// On importe les fonctions du controleur
const { testapi, createArticle } = require('../controllers/articleController');

// Dé finition des routes
// Note : Le chemin ’/’ ici correspondra à la racine de ce que nous définirons dans server.js


// Route GET pour /api/ test ( devient / test dans ce routeur )
Router.get('/test', testapi);
// Route POST pour /api/ articles ( devient / dans ce routeur )
Router.post('/', createArticle);

// On exporte le routeur pour l’utiliser dans server .js
module.exports = Router;