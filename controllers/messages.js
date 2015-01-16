'use strict';

//takes hash and passes it on
exports.receiveHash = function(req,res){
    var hash = req.body.hash;
    GAME.submitHash(hash);
    res.json({status:"success"});
};

//takes RPS choice from opponent back-end
exports.receiveRPSMessage = function(req,res){
    var message = req.body.message;
    GAME.submitDecision(message);
    res.json({status:"success"});
};

//takes signature and passes it on
exports.receiveSignature = function(req,res){
    var sig = req.body.signature;
    GAME.submitSignature(sig);
    res.json({status:"success"});
};

//gets RPS choice from client
exports.getMyDesicion = function(req,res){
    var decision = req.body.decision;
    GAME.submitMyDecision(decision);
    res.json({status:"success"});
};
