// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'example' module routes
angular.module('feature').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'feature/views/feature.client.view.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]);
