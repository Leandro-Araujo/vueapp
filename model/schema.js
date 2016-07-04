'use strict'
const mongoose = require('mongoose');


const rua    = require('./fields/fields-rua');
const bairro = require('./fields/fields-bairro');
const nome   = require('./fields/fields-nome');
const idade  = require('./fields/fields-idade');
const conteudo = require('./fields/fields-conteudo');
const criado_em = require('./fields/fields-criado_em');
const usuario   = require('./fields/fields-usuario');



const _endereco = {
	rua,
	bairro
};

const _user = {
	nome,
	idade,
	endereco: _endereco,
	criado_em
};

const _post = {
	conteudo,
	criado_em,
	usuario
};

module.exports = {
	user: new mongoose.Schema(_user),
	post: new mongoose.Schema(_post)
}; 