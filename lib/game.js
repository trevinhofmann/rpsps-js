'use strict';

var request = require('request');

var crypto = require('crypto');

var myHash;
var otherHash;
var myMessage;
var otherMessage;
var mySignature;
var otherSignature;

var submittedMyHash;

exports.submitHash = function(hash){
  otherHash = hash;
};

exports.submitDecision = function(decision){

  otherMessage = decision;
  
  if (verifyDecision()){
    var winner = determineWinner();
  }

};

exports.submitSignature = function(signature){

  otherSignature = signature;

}

exports.submitMyDecision = function(decision){

  myMessage = getDecisionMessage(decision);
  myHash = crypto.createHash('sha256').update(myMessage).digest('hex');  

  var params = {
    message: 'hash',
    hash: myHash
  }
  
  sendMessageToPeer(params, function(response){  });

}

function verifyDecision(){
  var verificationHash = crypto.createHash('sha256').update(otherMessage).digest('hex');
  return (verificationHash == otherHash);
}

function determineWinner(){
  var myChoice = myMessage.substring(0, 1);
  var otherChoice = myMessage.substring(0, 1);
  var winner;
  if (myChoice == otherChoice){
    winner = 'draw';
  } else if (myChoice == 'rock' && otherChoice == 'paper'){
    winner = 'opponent';
  } else if (myChoice == 'paper' && otherChoice == 'scissors'){
    winner = 'opponent';
  } else if (myChoice == 'scissors' && otherChoice == 'rock'){
    winner = 'opponent';
  } else{
    winner = 'me';
  }
  return winner;
}

function choiceIntegerToName(choice){
  switch (choice){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

function choiceNameToInteger(choice){
  switch (choice){
    case 'rock':
      return 0;
      break;
    case 'paper':
      return 1;
      break;
    case 'scissors':
      return 2;
      break;
  }
}

function getDecisionMessage(choice){
  return choice+Math.random();
}