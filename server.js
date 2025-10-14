require('dotenv').config();// Doit être en haut pour charger les variables d’environnement avant toute utilisation

const express = require('express');
const connectDB = require('./config/db');

connectDB(); // Connexion à la base de données

const app = express();
const PORT = 3000;

// On importe notre nouveau routeur
const articleRoutes = require('./routes/articleRoutes');
const userRoutes = require('./routes/userRoutes');



// --- Middleware pour parser le JSON ---
app.use(express.json());

// --- Routes GET ---
app.get('/', (req, res) => {
    res.status(200).send('<h1>Page d\'accueil de notre API de Blog !</h1>');
});

// --- NOUVEAU : Utilisation du routeur ---
// Express utilisera le routeur 'articleRoutes' pour toute requête
// commençant par '/api/articles'
app.use('/api/articles', articleRoutes);
app.use('/api/users', userRoutes);

// Démarrage du serveur

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});