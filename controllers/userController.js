const User = require('../models/Users');

//@desc Recuperer tous les utilisateurs
//@route GET /api/users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs.', error: error.message });
    }
};

//@desc Créer un nouvel utilisateur
//@route POST /api/users
const createUser = async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        // await attend que la promesse de . save () soit résolue
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: 'Erreur lors de la création de l\'utilisateur.', error: error.message });
    }
};

module.exports = {
    getAllUsers,
    createUser
}