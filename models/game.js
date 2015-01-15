'use strict';

var Game = function(){

}

Game.prototype.setDecision(player, decision){
  player = player.toString();
  if (player != '1' && player != '2'){
    throw 'Player must be 1 or 2.';
  }
  if (decision != 'rock' && decision != 'paper' && decision != 'scissors'){
    throw 'Decision must be "rock", "paper", or "scissors".';
  }
  this.data.decisions.player = decision;
}

module.exports = Game;