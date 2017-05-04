var express = require('express');
var app = express();
var mongoose = require('mongoose');
  var jwt = require('jsonwebtoken');
var morgan = require('morgan');

var crypto = require('crypto');
  var validators = require('mongoose-validators');
var connectDB = require('../config/config.js');

// app.set('Secret', 'amit');
userInfoSchema = mongoose.Schema({

    fname: {
        type: String,
        minlength: 4,
        maxlength: 128,
        required: true,

    },
    lname: {
        type: String,
        minlength: 4,
        maxlength: 128,
        required: true,

    },
    mobile: {
        type: Number,
        minlength: 10,
        maxlength: 10,
        // unique: true,
        required: true,
    },
    email: {
        type: String,
        minlength: 4,
        maxlength: 30,
        required: true,
        unique: true,
        validate: validators.isEmail()
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 100,
        required: true
    }
});
userInfoSchema.statics.encrypt = function(text) {
        var cipher = crypto.createCipher(connectDB.algorithm, connectDB.password)
        var crypted = cipher.update(text, 'utf8', 'hex')
        crypted += cipher.final('hex');
        return crypted;
}
userInfoSchema.statics.decrypt = function(text) {
    var decipher = crypto.createDecipher(connectDB.algorithm, connectDB.password)
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}
userInfoSchema.statics.saveUser = function(data, cb) {
  // console.log("saveUserdata"+data.email);

    var ref = this;
    this.findOne({
        email: data.email
    }, function(error, user) {
        if (user) {
          console.log("user"+user);
          cb(null,false);
        } else {
           console.log("data"+ data);
          var userObj = new ref(data);
           console.log("userObj"+ userObj);
          userObj.save(cb);
        }
    });
}
userInfoSchema.statics.ValidateUser = function(data, cb) {
    var token;
    userInfo.findOne({ email: data.email },cb);
  };
userInfoSchema.statics.getRegisterUserProfile = function(userid, cb) {
  this.findById(userid,cb);
};
var userInfo = mongoose.model('userInfo', userInfoSchema);
module.exports = userInfo;
