'use strict';

angular.module('myApp.waiting', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/waiting', {
    templateUrl: 'waiting/waiting.html',
    controller: 'WaitingCtrl'
  });
}])

.controller('WaitingCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
	$scope.offers = {};


	var polling = setInterval(function() {
		$http.get('http://localhost:7175/local/checkForInvitations').
	
		success(function(data, status, headers, config) {
	    console.log(data);
	    
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