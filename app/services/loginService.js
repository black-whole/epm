'use strict';

(function(){
	let module = angular.module('app');

	module.service('loginService', function(){
		let service = {
			retrieveAccountInfo: function(username, password){},
			getUsername: function(){},
			getPassword: function(){}
		};
		return service;
	});
})();