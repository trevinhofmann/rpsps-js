'use strict'; //not important, just include it

//takes hash and passes it on
exports.recieveHash(req,res){
    var hash = req.body.hash;
    GAME.submitHash(hash);
};

//takes RPS choice from opponent back-end
exports.recieveRPSMessage(req,res){
    var message = req.body.message;
    GAME.submitDecision(message);
};

//takes signature and passes it on
exports.recieveSignature(req,res){
    var sig =req.body.signature;
    GAME.submitSignature(sig);
};

//gets RPS choice from client
exports.getMyDesicion(req,res){
    var decision = req.body.decision;
    GAME.submitMyDecision(decision);
};
