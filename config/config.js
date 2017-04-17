var mongoose=require('mongoose');
// Connection URL
	mongoose.connect('mongodb://localhost/UserRegistration');
	var db = mongoose.connection;
	module.exports={
										"Secret":"amit",
									"algorithm":'aes-256-ctr',
									"password":'d6F3Efeq',
									"mongoconnection":function(){
											mongoose.connect(db,function(err){
													if(err){
														console.error(err);

														}
		});
		mongoose.connection.once('connected',function(){
			console.log("connected to the database");
		});
		}
	}
