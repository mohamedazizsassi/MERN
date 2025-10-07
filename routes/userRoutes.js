const express = require('express');
const Router = express.Router();
const {getAllUsers, createUser} = require('../controllers/userController');

// Définition des routes
Router.get('/', getAllUsers);
Router.post('/', createUser);

module.exports = Router;