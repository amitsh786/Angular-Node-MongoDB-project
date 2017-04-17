var express = require('express'),
 crypto = require('crypto'),
	Router = express.Router();

  var userInfo = require('../modal/RegisterSchema.js');
Router.post('/signup', function(req,res){
  try{
	var encryptedpassword=userInfo.encrypt(req.body.password);
	var data = {
    id:req.body.id,
		name : req.body.name,
		email : req.body.email,
		mobile : req.body.mobile,
		password : encryptedpassword
};
	userInfo.saveUser(data, function(err,result){
    // console.log("result"+   result);
    // console.log("err"+err);
    if (!err) {
 							if (!result) {
 								res.send({"status": true,"msg": "user email id already exist!"});
 							}
 							else {
 								res.send({"status": true,"msg": "data is saved!"});
 							}
             } else {
                 if (err == undefined) {
                     res.send({"status": false,"msg": "data is not saved"});
                 }
                 else
                  {
                     var validationErrors = [];
                     var errormsg = JSON.stringify(err);
                     var convertmsg = JSON.parse(errormsg).errors;
                     for (var key in convertmsg) {
                         validationErrors.push(convertmsg[key].message);
                     }
                     res.send({"status": false,"msg": validationErrors});
                 }
               }
             });
           }

catch(e)
{
  console.log(e);
       res.send({"status": false,"message": "server error"});

}

});
module.exports = Router
