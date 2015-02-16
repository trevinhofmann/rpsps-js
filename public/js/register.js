'use strict';

$(document).ready(function(){

  var mnemonic = new Mnemonic();
  $('#register-mnemonic').val(mnemonic.toString());
  
  $('#register-submit').prop('disabled', true);

  $('#register-submit').click(function(){
    if ($('#register-mnemonic-confirm').val() == $('#register-mnemonic').val()){
      var mnemonic = new Mnemonic($('#register-mnemonic-confirm').val());
      xpriv = mnemonic.toHDPrivateKey();
    }
  });

  $('#register-back').click(function(){
    navigation.to('index');
  });
  
  $('#register-mnemonic-confirm').change(function(){
    if ($('#register-mnemonic-confirm').val() == $('#register-mnemonic').val()){
      $('#register-submit').prop('disabled', false);
    } else {
      $('#register-submit').prop('disabled', true);
    }
  });

});