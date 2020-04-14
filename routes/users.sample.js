const express = require('express');
const UserController = require('../controllers/UserController.sample');
const Router = express.Router();

Router.get('/', UserController.fetchAll);
Router.get('/:id', UserController.fetch);
Router.post('/', UserController.create);
Router.patch('/:id', UserController.update);
Router.delete('/:id', UserController.delete);

module.exports = Router;