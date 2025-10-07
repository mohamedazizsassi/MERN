const testapi = (req, res) => {
    res.status(200).json({
        message: 'Le test a fonctionné !',
        success: true
    });
};

// --- Route pour gérer les requêtes POST ---
const createArticle = (req, res) => {
    const articleData = req.body;
    console.log('Données reçues :', articleData);

    res.status(201).json({
        message: 'Article créé avec succès !',
        article: {
            id: Date.now(),
            ...articleData
        }
    });
};
module.exports = {
    testapi,
    createArticle
};