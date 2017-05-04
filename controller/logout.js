var express=require("express");
router=express.Router();
router.get('/logout',function(req,res)
{
  res.clearCookie('cokkiesession');
  res.send({
    "status":true,
    "message":"logged out"
  });
});
module.exports=router;
