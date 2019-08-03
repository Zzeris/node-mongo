const express = require('express');

const UserController = require('./controllers/UserController');

const routes = new express.Router();

routes.get('/', UserController.read);
routes.post('/', UserController.create);
routes.put('/:id', UserController.update);
routes.delete('/:id', UserController.delete);

module.exports = routes;