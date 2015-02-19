'use strict';

function Wallet() {

  this.hdPrivateKey;
  this.nextDepositIndex = 0;

}

Wallet.prototype.getDepositAddress = function(){
  var privateKey = this.hdPrivateKey.derive('m/0/'+this.nextDepositIndex).privateKey;
  var address = new Address(privateKey.publicKey);
  return address;
};