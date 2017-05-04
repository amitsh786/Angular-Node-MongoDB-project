var express = require('express'),
    Router = express.Router();
crypto = require('crypto');
var userInfo = require('../modal/RegisterSchema');
var connectDB = require('../config/config.js');
var connectIndex = require('../config/index.js');
Router.post('/login', function(req, res) {
            var data = {
                email: req.body.email,
                password: req.body.password
            };
            console.log(data);

                // console.log(data.email);
                // var result = {};
                // result.status = false;
                ///////////
                // console.log("hiiiiii");
                // try { ////
                //   console.log("baby");
                // console.log(connectIndex.validationSchema.login);
                //
                // req.check(connectIndex.validationSchema.login);
                // console.log("helo kunfu chudel");
                // req.getValidationResult().then(function(isValid) {////
                //   console.log("helo kunfu aunty");
                //         try {/////
                //           console.log("heloooo");
                //             if (!isValid.isEmpty()) {
                //                 console.log("error");
                //                 var errors = req.validationErrors();
                //                 throw errors[0].msg
                //                     }
                try{
                            userInfo.ValidateUser(data, function(err, user) {//
                                    var token;
                                    console.log(data);
                                    console.log("err"+err);
                                    console.log("user"+user);
                                    if (err) {
                                        res.send({
                                            success: false,
                                            err: "Email error"
                                        })
                                    } else {
                                        if (user == null) {
                                            res.send({
                                                success: false,
                                                "msg": "your emaild is wrong"
                                            });
                                        } else {
                                            if (userInfo.decrypt(user.password) == data.password) {
                                                token = jwt.sign({id: user._id}, connectDB.Secret), {
                                                    expiresIn: 1440
                                                };
                                                res.cookie("cokkiesession",token);
                                                res.send({
                                                    success: true,
                                                    "msg": "you are the valid user",
                                                    token
                                                });
                                            } else {
                                                if (userInfo.decrypt(user.password) !=data.password) {
                                                    res.send({
                                                        success: false,
                                                        "msg": "your password is wrong"
                                                    });

                                                }
                                            }}}

                                                    });


                                //     catch(e)
                                //     {
                                //       res.send({
                                //           "msg": "MongoDB error"
                                //       });
                                //     }
                                //
                                // });


                    } catch (e) {
                        res.send({
                            "msg": "server error"
                        });
                    }
                });
            module.exports = Router
