'use strict';

angular.module('myApp.browse', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/browse', {
    templateUrl: 'browse/browse.html',
    controller: 'BrowseCtrl'
  });
}])

.controller('BrowseCtrl', ['$scope', '$resource', function($scope, $resource) {


	$scope.games = [
		{
			nickname: 'Bob',
			number: '7',
			bet: '100',
			escrow: '10'
		},
		{
			nickname: 'Trudy',
			number: '9',
			bet: '150',
			escrow: '2'
		},
		{
			nickname: 'Alice',
			number: '7',
			bet: '130',
			escrow: '6'
		},
	];

	console.log($scope.games);
}]);