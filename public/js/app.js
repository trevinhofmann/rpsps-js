'use strict';

var bitcore = require('bitcore');
var Message = require('bitcore-message');
var Mnemonic = require('bitcore-mnemonic');

var navigation;

var xpriv; // HD Private Key

$(document).ready(function(){
  
  navigation = new Navigation();

  $('#app-home').click(function(){
    navigation.to('index');
  });

  $('#app-index').click(function(){
    navigation.to('index');
  });

  $('#app-login').click(function(){
    navigation.to('login');
  });

  $('#app-register').click(function(){
    navigation.to('register');
  });
  
});
