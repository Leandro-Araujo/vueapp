const mongoose = require('mongoose');

const _endereco = {
	rua: String,
	bairro: String
};

const _user = {
	nome: String,
	idade: Number,
	endereco: _endereco
};

module.exports = new mongoose.Schema(_user); 