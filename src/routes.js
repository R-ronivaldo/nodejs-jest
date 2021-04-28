const routes = require("express").Router();

const SessionController = require('../src/app/controllers/SessionsController');

routes.post('/Sessions', SessionController.store);

module.exports = routes;