'use strict';

// Library for HTTP requests
var request = require('request');

// Cryptographic library
var crypto = require('crypto');

// The hash for my RPS decision
var myHash;

// The hash for the other player's decision
var otherHash;

// My decision message
var myMessage;

// The other player's decision message
var otherMessage;

// Boolean, whether or not I have submitted my hash
var submittedMyHash;

// Accept other player's hash
exports.submitHash = function(hash){
  otherHash = hash;
};

// Accept other player's decision
exports.submitDecision = function(decision){
  otherMessage = decision;
  if (verifyDecision()){
    var winner = determineWinner();
  }
};

// Submit my decision
exports.submitMyDecision = function(decision){
  myMessage = getDecisionMessage(decision);
  myHash = crypto.createHash('sha256').update(myMessage).digest('hex');  
  var params = {
    message: 'hash',
    hash: myHash
  }
  sendMessageToPeer(params, function(response){});
}

// Veryify the other player's decision with their hash
function verifyDecision(){
  var verificationHash = crypto.createHash('sha256').update(otherMessage).digest('hex');
  return (verificationHash == otherHash);
}

// Convert an integer decision to string
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

// Convert a string decision to integer
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

// TODO: implement properly
// Generate a decision message
function getDecisionMessage(choice){
  return choice+Math.random();
}