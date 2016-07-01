const mongoose = require('mongoose');
const User = mongoose.model('User');

// GET ALL
module.exports = (req, res) => {
  User.find((err, user)=>{
  	if(err) console.log(err);
  	res.json({data: user});
  });
}

/*user = new User();
user.nome = "Pedro";
user.idade = 32;
user.endereco = {rua: "Maré baixa", bairro: 'Centro'};
user.save(function(err, user){
	console.log(user);
});*/