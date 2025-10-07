const getAllUsers = (req, res) => {
    res.status(200).json({
        message: 'Liste de tous les utilisateurs',
        users: [] // Ceci serait remplacé par une vraie liste d'utilisateurs
    });
}

const createUser = (req, res) => {
    const userData = req.body;
    console.log('Données reçues :', userData);

    res.status(201).json({
        message: 'Utilisateur créé avec succès !',
        user: {
            id: Date.now(),
            ...userData
        }
    });
};

module.exports = {
    getAllUsers,
    createUser
}