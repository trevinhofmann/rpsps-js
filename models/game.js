'use strict';

var Game = function(){
  this.data.decisions = {};
}

Game.prototype.setDecision = function(player, decision){
  player = player.toString();
  if (player != '1' && player != '2'){
    throw 'Player must be 1 or 2.';
  }
  if (decision != 'rock' && decision != 'paper' && decision != 'scissors'){
    throw 'Decision must be "rock", "paper", or "scissors".';
  }
  this.data.decisions.player = decision;
}

Game.prototype.winner = function(){
  if (typeof this.data.decisions.1 == 'undefined'){
    throw 'Player 1 must decide.';
  }
  if (typeof this.data.decisions.2 == 'undefined'){
    throw 'Player 2 must decide.';
  }
  var winner;
  if (this. == otherChoice){
    winner = 0;
  } else if (this.data.decisions.1 == 'rock' && this.data.decisions.2 == 'paper'){
    winner = 2;
  } else if (this.data.decisions.1 == 'paper' && this.data.decisions.2 == 'scissors'){
    winner = 2;
  } else if (this.data.decisions.1 == 'scissors' && this.data.decisions.2 == 'rock'){
    winner = 2;
  } else{
    winner = 1;
  }
  return winner;
}

module.exports = Game;
