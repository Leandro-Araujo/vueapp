const mongoose = require('mongoose');
module.exports = schema =>{
	console.log('Criando o model');
	mongoose.model('User', schema); 
}