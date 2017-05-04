var express = require('express'),
 crypto = require('crypto'),
	Router = express.Router();
var userInfo = require('../modal/RegisterSchema.js');
Router.post('/signup', function(req,res){

      // var result = {};
      // result.status = false;
  //     try {
  //       console.log(connectIndex.validationSchema.login);
  //       reg.check(connectIndex.validationSchema.login);
  //       req.getValidationResult().then(function(isValid) {
  //           try {
  //               if (!isValid.isEmpty()) {
  //                   console.log("error");
  //                   var errors = request.validationErrors();
  //                   throw errors[0].msg
  //                     }
  // }
  try{
// console.log(req.body);
	var encryptedpassword=userInfo.encrypt(req.body.password);

	var data = {

		  fname : req.body.fname,
    	lname : req.body.lname,
      mobile : req.body.mobile,
		    email : req.body.email,
  	     password : encryptedpassword
};
	userInfo.saveUser(data, function(err,result){
    console.log( "resulty"+result);
  if (!err) {
 							if (!result) {
 								res.send({"status": true,"msg": "user email id already exist!"});
 							}
 							else {
                	// res.send({"status": true,"msg": result});
 							          res.send({"status": true,"msg": "data is saved!"});}
             } else {
                 if (err == undefined) {
                     res.send({"status": false,"msg": "data is not saved"});
                 }
                 else
                  {
                        res.send({"status": false,"msg": "validationErrors"});
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
