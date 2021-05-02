const routes = require("express").Router();

const SessionController = require('../src/app/controllers/SessionsController');

routes.post('/Sessions', SessionController.store);

routes.get('/Dashboard', (req, res) => {
    const token = req.headers.authorization;
    if (!token){
        return res.status(401).send("Token not exist");
    }

    return res.status(200).send("it's ok!");
});

module.exports = routes;