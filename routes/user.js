const mongoose = require('mongoose');
const User = mongoose.model('User');

// GET ALL
module.exports = (req, res) => {
  User.find((err, user)=>{
  	if(err) console.log(err);
  	res.json({data: user});
  });
}