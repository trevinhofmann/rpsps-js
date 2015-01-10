'use strict';

// This handles routing for the website, pointing requests to
// the appropriate view renderer.
module.exports = function(app){

  var matchmaking = require('./controllers/matchMaking');
  
  app.get('/local/games', matchmaking.listOpenGames);
  app.post('/local/create', matchmaking.createGame);
  app.post('/local/invite', matchmaking.invite);
  app.get('/local/checkInvite', matchmaking.checkInvitation);
  app.get('/local/checkForInvitations', matchmaking.checkForInvitations);
  app.post('/local/accept', matchmaking.acceptInvitation);
  app.post('/local/decline', matchmaking.declineInvitation);
  
  var messages = require('./controllers/messages');
  
  
};
