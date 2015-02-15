'use strict';

var bitcore = require('bitcore');
var message = require('bitcore-message');
var mnemonic = require('bitcore-mnemonic');

var navigation;

$(document).ready(function(){
  
  navigation = new Navigation();

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
