'use strict'
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

const _post = {
	conteudo : String,
	created_at: { type: Date, default: Date.now },
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User' }
};

module.exports = {
	user: new mongoose.Schema(_user),
	post: new mongoose.Schema(_post)
}; 