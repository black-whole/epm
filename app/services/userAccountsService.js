(function(angular){
	'use strict';
	let module = angular.module('app');
	module.service('userAccountsService', ['$http', '$q', function($http, $q){
		let service = {
			getAllUsers: function(year){}
		};
		return service;
	}]);
})(window.angular);