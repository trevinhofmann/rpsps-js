'use strict';

angular.module('myApp.game', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/game', {
    templateUrl: 'game/game.html',
    controller: 'GameCtrl'
  });
}])

.controller('GameCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.rock = function() {
		$http.post('http://localhost:7175/local/decision', {
			decision: 'rock'
		}).
		success(function(data, status, headers, config) {
		    console.log(data)
		}).
		error(function(data, status, headers, config) {
		    //some error
		});	
	};

	$scope.paper = function() {
		$http.post('http://localhost:7175/local/decision', {
			decision: 'paper'
		}).
		success(function(data, status, headers, config) {
		    console.log(data)
		}).
		error(function(data, status, headers, config) {
		    //some error
		});	
	};

	$scope.scissors = function() {
		$http.post('http://localhost:7175/local/decision', {
			decision: 'scissors'
		}).
		success(function(data, status, headers, config) {
		    console.log(data)
		}).
		error(function(data, status, headers, config) {
		    //some error
		});	
	};
}]);