module.exports = Mongoose=>{
	const db = Mongoose.connection;
	db.on('error', console.error);
	db.once('open', function() {
	  console.log('Mongodb Conectado');
	});
	Mongoose.connect('mongodb://localhost/vuejs');
};