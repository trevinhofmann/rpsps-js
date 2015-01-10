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
    var nickname = req.body.nickname;
    var numGames = req.body.numGames;
    var betPerGame = req.body.betPerGame;
    var ip = req.body.ip;
    
    var success = conections.createGame(nickname,numGames,betPerGame,ip);
    var creationSuccess = {status:success};
    
    res.json(creationSuccess);
};

exports.checkInvitation = function(req,res){
    var invStatus = connections.checkForInvitation();
    var returnedStatus = {status:invStatus};
    
    res.json(returnedStatus);
};

exports.checkForInvitation = function(req,res){
    
};
