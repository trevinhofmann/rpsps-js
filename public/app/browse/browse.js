'use strict';

angular.module('myApp.browse', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/browse', {
    templateUrl: 'browse/browse.html',
    controller: 'BrowseCtrl'
  });
}])

.controller('BrowseCtrl', ['$scope', '$http', function($scope, $http) {

	$http.get('http://localhost:7175/local/games').
	
	success(function(data, status, headers, config) {
	    $scope.games = data;
	    console.log($scope.games);
	}).
  error(function(data, status, headers, config) {
    //some error
	});

  var invite = function(ip) {
  	$http.post('http://localhost:7175/local/invite', ip).

		success(function(data, status, headers, config) {
		    $location.path('/game');

		}).
		error(function(data, status, headers, config) {
	    //some error
		});
  }

}]);