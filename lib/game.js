'use strict';

var request = require('request');

var myHash;
var otherHash;
var myMessage;
var otherMessage;
var mySignature;
var otherSignature;

exports.submitHash = function(hash){

};

exports.submitDecision = function(decision){

  if (verifyDecision(otherMessage, otherHash)){
    
  }

};

exports.submitSignature = function(signature){

  otherSignature = signature;

}