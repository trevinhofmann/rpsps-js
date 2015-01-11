'use strict'; //not important, just include it

//Takes in the ip you're connecting to and calls CONNECTIONS.connect to create the socket
exports.invite = function (req,res){
    var ip = req.body.ip;
    
    CONNECTIONS.connect(ip, function(connStatus){
        if (connStatus){
            var success = "success";
        }else{
            var success = "failure";
        };
        
        var connectionSuccess ={status:success};
        //sends connection status back up to the client
        res.json(connectionSuccess);
    });
        
};

//Gets the list of games open for joining
exports.listOpenGames = function(req,res){
    CONNECTIONS.getOpenGames(function (openList){
        res.json(openList);
    });    
};

//Creates a new game based on the input parameters (#games, and bet per game)
exports.createGame = function(req,res){
    var nickname = req.body.nickname;
    var numGames = req.body.numGames;
    var betPerGame = req.body.betPerGame;
    
    CONNECTIONS.createGame(nickname,numGames,betPerGame);
    
    var creationSuccess = {status:"success"};
    //passes back that the creation was successful
    res.json(creationSuccess);
};

//Requests to join a game and returns accept,denied,or pending
exports.checkInvitation = function(req,res){
    var invStatus = CONNECTIONS.checkInvitation();
    var returnedStatus = {status:invStatus};
    
    res.json(returnedStatus);
};

//Gets a list of clients attempting to join your game.Returns an empty array if no clients attempting to join
exports.checkForInvitations = function(req,res){
    res.json(CONNECTIONS.checkForInvitations());
};

//accepts an invitation
exports.acceptInvitation = function(req,res){
    var nickname = req.body.nickname;
    var ip = req.body.ip;
    
    CONNECTIONS.acceptInvitation(nickname,ip);
    
    res.json({status:"success"});
};

//declines an invitation
exports.declineInvitation = function(req,res){
    var nickname = req.body.nickname;
    var ip = req.body.ip;
    
    CONNECTIONS.declineInvitation(nickname,ip);
    
    res.json({status:"success"});
};
