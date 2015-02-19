'use strict';

var bitcore = require('bitcore');
var Message = require('bitcore-message');
var Mnemonic = require('bitcore-mnemonic');

var navigation;
var wallet;

var xpriv; // HD Private Key

$(document).ready(function(){
  
  navigation = new Navigation();
  wallet = new Wallet();
  
});
