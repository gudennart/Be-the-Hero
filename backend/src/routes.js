const express = require('express');

const OngController = require('./controllers/OngController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs',  OngController.create);

routes.post('/incident', incidentController.create);
routes.get('/incident', incidentController.index);
routes.delete('/incident/:id', incidentController.delete);

routes.get('/profile', profileController.index);

routes.post('/profile', sessionController.create);

module.exports = routes;