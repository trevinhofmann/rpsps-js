'use strict'; //not important, just include it

//takes hash and passes it on
exports.recieveHash = function(req,res){
    var hash = req.body.hash;
    GAME.submitHash(hash);
    res.json({status:"success"});
};

//takes RPS choice from opponent back-end
exports.recieveRPSMessage= function(req,res){
    var message = req.body.message;
    GAME.submitDecision(message);
    res.json({status:"success"});
};

//takes signature and passes it on
exports.recieveSignature= function(req,res){
    var sig =req.body.signature;
    GAME.submitSignature(sig);
    res.json({status:"success"});
};

//gets RPS choice from client
exports.getMyDesicion= function(req,res){
    var decision = req.body.decision;
    GAME.submitMyDecision(decision);
    res.json({status:"success"});
};
