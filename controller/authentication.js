var express=require('express');
 Router = express.Router();
 jwt = require('jsonwebtoken');
 var dbConnect = require('../config/config.js');
Router.use(function(req,res,next){
  var Secret="amit";
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    token=token.substr(14);
    jwt.verify(token, dbConnect.Secret, function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });
  }
});
module.exports=Router;
