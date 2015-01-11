'use strict';

angular.module('myApp.waiting', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/waiting', {
    templateUrl: 'waiting/waiting.html',
    controller: 'WaitingCtrl'
  });
}])

.controller('WaitingCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {

	$scope.accept = function(info) {
		$http.post('http://localhost:7175/local/accept', info).

		success(function(data, status, headers, config) {
		    console.log(data)
		    console.log("passed")
		    if( polling ) {
					clearInterval(polling);
				}

		    $location.path('/game');
		}).
		error(function(data, status, headers, config) {
		    //some error
		});
	};

	$scope.decline = function(info) {
		$http.post('http://localhost:7175/local/decline', info).

		success(function(data, status, headers, config) {
		    console.log(data)

		}).
		error(function(data, status, headers, config) {
		    //some error
		});
	};

	var polling = setInterval(function() {
		$http.get('http://localhost:7175/local/checkForInvitations').

		success(function(data, status, headers, config) {
			console.log($scope.offers);
			$scope.offers = data;
	    
		}).
	  error(function(data, status, headers, config) {
	  	console.log(data);
	    //some error
		});
	}, 1000);

	$scope.goHome = function() {
		if( polling ) {
			clearInterval(polling);
		}

		$location.path('/home');
	};
}]);