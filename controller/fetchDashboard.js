var express = require('express'),
    Router = express.Router();
crypto = require('crypto');
var userInfo = require('../modal/dashSchema.js');
var connectDB = require('../config/config.js');
var connectIndex = require('../config/index.js');
Router.post('/fetchDashboard', function(req, res) {
            var data = {
                  i2: req.body.i2,
                  i3: req.body.i3
                }
                // console.log("data"+data);
              userInfo.ValidateUser(data, function(err, user) {
                // console.log(err);
                // console.log("user"+user);
                if(err==null)
                {
                  if(user==null)
                  {
                    res.send({"status": false,"msg": "data is not present there!!"});
                  }
                  if(user!=null)
                  {

                      res.send({"status": true,"msg": user});
                    }
                  }

                else {


                  res.send({"status": false,"msg": "data is not present there!"});

                }
              });
              });
            module.exports = Router
