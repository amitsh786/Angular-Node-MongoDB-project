var express = require('express'),
    router = express.Router();
    router.get('/session',function(req,res)
    {
      console.log("session started");
      if(req.headers.cookie)
      {
        res.send({"status": true,"msg": "user exit","session":true});
        }
      else {
        res.send({"status": false,"msg": "no user!","session":true});
        }
    });
    module.exports=router;
