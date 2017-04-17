var express = require('express'),
router = express.Router(),
userprofile = require('../modal/RegisterSchema.js');
router.get('/', function(req,res){
  try {
    var userid = req.decoded.id;
      // console.log(userid);
      userprofile.getRegisterUserProfile(userid,function(err,result){
        if(!err)
        {
          // console.log(result);

          res.send({"status":true,message:"your Email is:"+" "+result.email});
        }
        else
        {
          res.send({"status":false,message:"use authentic profile"});
        }
      });
  } catch (e) {
    // console.log("hiiiii"+e);
    res.send({"status":false,message:"server error"});
  }
});
module.exports = router;
