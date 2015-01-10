'use strict';

var request = require('request');

var peer;
var me = {
  'nickname': 'Bob'
};

var myOffer;

var invitations = [];

var myInvitation;
// status = 'accepted' || 'declined' || 'pending'


// Attempt to open a connection 
exports.connect = function(ip, callback){

  var params = {
    message: 'invitation',
    nickname: me.nickname
  }
  
  sendMessageToPeer(params, function(response){
    if (body.accept){
      return callback(true);
    }
    return callback(false);
  });

};

// Create a game offer
exports.createGame = function(numGames, betPerGame){
  
  myOffer = {
    nickname: me.nickname,
    numGames: numGames,
    betPerGame: betPerGame
  };
  
};

// Get the status of the current invitation
exports.checkInvitation = function(){
  return myInvitation.status;
}

// Get the list of open invitations
exports.checkForInvitations = function(){
  return invitations;
}

// Get a list of available game offers (From IRC?)
exports.getOpenGames = function(callback){

  var openGames = [];
  callback(openGames);

};

// Sends a message to the current peer
function sendMessageToPeer(params, callback){

  var options = {
    url: 'http://'+peer.ip+':7175',
    form: params,
    json: true
  };
  
  request.post(options, function(error, response, body){
    if (error){
      return console.log(error);
    }
    callback(body);
  });
  
}
