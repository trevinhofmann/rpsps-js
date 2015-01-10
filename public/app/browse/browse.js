'use strict';

angular.module('myApp.browse', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/browse', {
    templateUrl: 'browse/browse.html',
    controller: 'BrowseCtrl'
  });
}])

.controller('BrowseCtrl', [function() {

}]);