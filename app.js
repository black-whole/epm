(function (angular) {
	'use strict';
	let module = angular.module('app', ['ngRoute', 'widgetGrid', 'login', 'grad-dashModule', 'nameField']);
	module
	.controller('graduateCtrl', function ($scope) {})
	.config(function($routeProvider){
		window.mediator = new Mediator();
		$routeProvider
		.when('/login', {
			templateUrl: 'app/screens/login/loginScreen.html'
		})
		.when('/graduate', {
			templateUrl: 'app/screens/graduate/graduateScreen.html',
			controller: 'graduateCtrl'
		})
		.when('/manager', {
			templateUrl: 'app/screens/manager/managerScreen.html'
		})
		.when('/admin', {
			templateUrl: '#'
		})
		.otherwise({
			redirectTo: '/login'
		});
	});
})(window.angular);