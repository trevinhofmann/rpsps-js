'use strict'; //not important, just include it


exports.invite = function (req,res){
    var ip = req.body.ip;
    var success = connections.connect(ip);
    var connectionSuccess ={status:success};
    res.json(connectionSuccess);
};

exports.listOpenGames(req,res){
    
};

exports.createGame(req,res){
    
};

exports.checkInvitation(req,res){
    
};

exports.checkForInvitation(req,res){
    
};
