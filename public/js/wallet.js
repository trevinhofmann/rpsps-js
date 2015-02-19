'use strict';

function Wallet() {

  this.hdPrivateKey;
  this.nextDepositIndex;
  this.updating = false;

}

Wallet.prototype.update = function() {
  // TODO: Load actual values from server
  if (!this.updating){
    return;
  }
  this.nextDepositIndex = 0;
  this.updateDepositAddress();
  console.log('updated');
  var tempWallet = this;
  setTimeout(function(){
    tempWallet.update();
  }, 1000);
}

Wallet.prototype.startUpdating = function() {
  this.updating = true;
  this.update();
};

Wallet.prototype.stopUpdating = function() {
  this.updating = false;
};

Wallet.prototype.updateDepositAddress = function() {
  var Address = bitcore.Address;
  var privateKey = this.hdPrivateKey.derive('m/0/'+this.nextDepositIndex).privateKey;
  var address = new Address(privateKey.publicKey);
  $('#deposit-address').text(address);
};