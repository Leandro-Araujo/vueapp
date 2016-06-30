const Mongoose = require('mongoose');
const config = require('./config.js')(Mongoose);
const schema = require('./schema.js');
const models = require('./models.js')(schema);