'use strict'; //not important, just include it

exports.recieveHash(req,res){
    var hash = req.body.hash;
    GAME.submitHash(hash);
};

exports.recieveRPSMessage(req,res){
    var message = req.body.message;
    GAME.submitDecision(message);
};

exports.recieveSignature(req,res){
    var sig =req.body.signature;
    GAME.submitSignature(sig);
}