(function(angular){
	'use strict';
	var module = angular.module('app');
	module.controller('graduateController', function ($location, loginService) {
		$onInit = function () {
			if (!loginService.online) {
				$location.path('/login');
			}
		};
	});
})(window.angular);