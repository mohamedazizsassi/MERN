const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('MongoDB connected');
    }
    catch (err) {
        console.error('Erreur de connection a MongoDB', err.message);
        // Quitter le processus avec un code d’erreur
        process.exit(1);
    }
}

module.exports = connectDB;