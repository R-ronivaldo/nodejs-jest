const routes = require("express").Router();

const SessionController = require('../src/app/controllers/SessionsController');

routes.post('/Sessions', SessionController.store);

routes.get('/Dashboard', (req, res) => {
    return res.status(200).send();
});

module.exports = routes;