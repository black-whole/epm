(function(){
	'use strict';
	let module = angular.module('loginModule', []);
	module.service('loginService', function($http, $q){
		let service = {
			login: function (user) {
				//will not add the login logic for now.
				//will just mock out the response.
				return {
					firstName: 'some',
					lastName: 'graduate',
					online: true
				};
			}
		};
		return service;
	});
})();