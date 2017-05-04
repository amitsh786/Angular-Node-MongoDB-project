var express = require('express');
var app = express();
var mongoose = require('mongoose');
  // var validators = require('mongoose-validators');
var connectDB = require('../config/config.js');
// app.set('Secret', 'amit');
 var dashSchema = mongoose.Schema({
i2: {
        type: String,
      },
    i3: {
        type: String,

  }
});
dashSchema.statics.saveUser = function(data, cb)
{
  this.findOne({i2: data.i2}, function(error, user) {
  //var ref = this;
  if (user) {
    cb(null,false);
  } else {
    var user12=new dashInfo(data);
    console.log("dashSchema"+user12);
    user12.save(cb);
  }
});
}
dashSchema.statics.ValidateUser = function(data, cb) {
  console.log(data.i2);
    dashInfo.find({},cb);
  };
var dashInfo = mongoose.model('dashInfo', dashSchema);
module.exports = dashInfo;
