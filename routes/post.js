'use strict'
const mongoose = require('mongoose');
const Post     = mongoose.model('Post');
const User     = mongoose.model('User');

module.exports = (req, res)=>{
	Post.find((err, posts)=>{
		res.json(posts);
	});
}