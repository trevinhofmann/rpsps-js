'use strict';

describe('myApp.create module', function() {

  beforeEach(module('myApp.create'));

  describe('create controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var createCtrl = $controller('CreateCtrl');
      expect(createCtrl).toBeDefined();
    }));

  });
});