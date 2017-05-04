var express = require('express'),
	Router = express.Router();
var userInfo = require('../modal/dashSchema.js');
Router.post('/dashboard', function(req,res){
	var data = {
		  id1 : req.body.id1,
    	id2 : req.body.id2,
};
	 userInfo.deleteUser(data, function(err,result){
    console.log("data"+result);
    console.log("err"+err);
                    if (err)
                      {
                          res.send({"status": false,"msg": "data is not saved"});
                      }
                      else
                        {
                            res.send({"status": true,"msg": "the data is saved"});
                        }

             });
           });

module.exports = Router
