'use strict';

$(document).ready(function(){

  $('#login-submit').click(function(){
    
    var passphrase = $('#login-mnemonic').val();
    var mnemonic = new Mnemonic(passphrase);
    xpriv = mnemonic.toHDPrivateKey();
    
  });

});