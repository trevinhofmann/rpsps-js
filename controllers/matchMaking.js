'use strict'; //not important, just include it


exports.invite = function (req,res){
    var ip = req.body.ip;
    var success = connections.connect(ip);
    var connectionSuccess ={status:success}
    res.json(connectionSuccess);
}

