var express = require('express'),
router = express.Router();
// mongoose.connect('mongodb://127.0.0.1/UserRegistration');
// var db = mongoose.connection;
console.log("I am inside the index file");
// router.use('/api',require('./authentication'));
router.use('/api',require('./signup'));
 router.use('/api',require('./login'));
router.use("/readProfile",require('./authentication'),require('./userprofile'));

module.exports = router;
