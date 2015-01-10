'use strict'; //not important, just include it


exports.invite = function (req,res){
    var ip = req.body.ip;
    var success = connections.connect(ip);
    var connectionSuccess ={status:success};
    res.json(connectionSuccess);
};

exports.listOpenGames = function(req,res){
    connections.getOpenGames(function (openList){
        res.json(openList);
    });    
};

exports.createGame = function(req,res){
    
};

exports.checkInvitation = function(req,res){
    
};

exports.checkForInvitation = function(req,res){
    
};
