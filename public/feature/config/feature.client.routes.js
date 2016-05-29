// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'example' module routes
angular.module('feature').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/features',{
			templateUrl:'feature/views/list-feature.client.view.html'
		}).
		when('/features?management=true',{
			templateUrl:'feature/views/list-feature.client.view.html'
		}).
		when('/features/create',{
			templateUrl:'feature/views/create-feature.client.view.html'
		}).
		when('/feature/:featureId/edit', {
			templateUrl: 'feature/views/edit-feature.client.view.html'
		}).
		when('/feature/:featureId/edit?management=true', {
			templateUrl: 'feature/views/edit-feature.client.view.html'
		}).
		when('/', {
			templateUrl:'feature/views/feature.client.index.view.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]);
