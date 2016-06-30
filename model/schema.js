const Mongoose = require('mongoose');

const _endereco = {
	rua: String,
	bairro: String
};

const _user = {
	nome: String,
	idade: Number,
	endereco: _endereco
};

module.exports = new Mongoose.Schema(_user); 