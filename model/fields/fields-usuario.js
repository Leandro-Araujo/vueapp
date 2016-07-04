const mongoose = require('mongoose');
module.exports = {type: mongoose.Schema.Types.ObjectId, ref: 'User' };