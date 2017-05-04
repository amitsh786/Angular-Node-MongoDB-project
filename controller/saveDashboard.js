var express = require('express'),
	Router = express.Router();
var userInfo = require('../modal/dashSchema.js');
Router.post('/saveDashboard', function(req,res){
	var data = {
		  i2 : req.body.i2,
    	i3 : req.body.i3
};
 userInfo.saveUser(data, function(err,result){
    console.log("result"+result);
    console.log("err"+err);
		if (err) {
						res.send({"status": false,"result":err});
							}
								else {
											res.send({"status": true,"msg": result});
										}

             });

           });

module.exports = Router
