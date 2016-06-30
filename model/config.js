module.exports = mongoose=>{
	const db = mongoose.connection;
	db.on('error', console.error);
	db.once('open', function() {
	  console.log('Mongodb Conectado');
	});
	mongoose.connect('mongodb://localhost/vuejs');
};