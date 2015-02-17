'use strict';

$(document).ready(function(){

  $('#home-browse').click(function(){
    navigation.to('browse');
  });

  $('#home-create').click(function(){
    navigation.to('create');
  });

  $('#home-deposit').click(function(){
    navigation.to('deposit');
  });

  $('#home-withdraw').click(function(){
    navigation.to('withdraw');
  });

});