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

  var openGames = [
    {
      nickname: 'Bob',
      numGames: 10,
      betPerGame: 100000,
      ip: '192.0.0.1'
    },
    {
      nickname: 'Alice',
      numGames: 100,
      betPerGame: 10000,
      ip: '192.0.0.2'
    },
    {
      nickname: 'Trudy',
      numGames: 500,
      betPerGame: 2000,
      ip: '192.0.0.3'
    },
  ];
  
  callback(openGames);

};

// Accept an invitation to play RPS
exports.acceptInvitation = function(nickname, ip){
  var accepted = false;
  for (var i in invitations){
    if (!accepted && invitations[i].ip == ip){
      accepted = true;
      invitations.splice(i, 1);
      var params = {
        message: 'accept'
      };
      sendMessageToPeer(params, function(response){ });
    }
  }
};

// Decline an invitation to play RPS
exports.declineInvitation = function(nickname, ip){
  var declined = false;
  for (var i in invitations){
    if (!declined && invitations[i].ip == ip){
      declined = true;
      invitations.splice(i, 1);
      var params = {
        message: 'decline'
      };
      sendMessageToPeer(params, function(response){
      });
    }
  }
}

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
