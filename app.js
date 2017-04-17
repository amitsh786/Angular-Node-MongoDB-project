var express      =  require("express"),
app          =  express(),
bodyParser   =  require("body-parser");
var cors = require('cors');
// var cookieSession = require('cookie-session');
// var validator = require('express-validator');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
console.log(" I am inside the app file");
app.use(require('./controller'));
console.log("i am inside the controller file");
app.use(express.static('./public'));
// var database=require('./database.js');
var port = 8081;
app.listen(port,function () {
  console.log("listning from the port" +port);
});
