'use strict';

angular.module('myApp.create', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/create', {
    templateUrl: 'create/create.html',
    controller: 'CreateCtrl'
  });
}])

.controller('CreateCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.game = {
		nickname: null,
		betPerGame: null,
		numGames: null
	};

	$scope.submit = function() {
		$http.post('http://localhost:7175/local/create', $scope.game).

		success(function(data, status, headers, config) {
		    $scope.games = data;
		}).
	  error(function(data, status, headers, config) {
	    //some error
		});
	};
}]);