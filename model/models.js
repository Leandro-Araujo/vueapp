'use strict'
const mongoose = require('mongoose');
module.exports = schema =>{
	mongoose.model('User', schema.user); 
	mongoose.model('Post', schema.post);
};