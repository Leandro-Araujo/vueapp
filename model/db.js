'use strict'
const mongoose = require('mongoose');
const config = require('./config.js')(mongoose);
const schema = require('./schema.js');
const models = require('./models.js')(schema);