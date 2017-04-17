var express = require('express'),
    Router = express.Router();
crypto = require('crypto');
var userInfo = require('../modal/RegisterSchema');
var connectDB = require('../config/config.js');
Router.post('/login', function(req, res) {
    var data = {
        email: req.body.email,
        password: req.body.password
    };
    try {
        userInfo.ValidateUser(data, function(err, user) {
            var token;
            console.log(err);
            console.log(user);
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
                        token = jwt.sign({
                            id: user._id
                        }, connectDB.Secret), {
                            expiresIn: 1440
                        };
                        res.send({
                            success: true,
                            "msg": "you are the valid user",
                            token
                        });
                    } else {
                        if (userInfo.decrypt(user.password) != data.password) {
                            res.send({
                                success: false,
                                "msg": "your password is wrong"
                            });

                        }
                    }
                }
            }

        });
    } catch (e) {
        res.send({
            "msg": "server error"
        });
    }
});
module.exports = Router
