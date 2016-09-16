(function(angular){
	'use strict';
	var module = angular.module('login', []);

	module
	.component('epmLogin', {
		templateUrl: 'app/components/login/login.html',
		controller: function ctrl(user, $location, $rootScope){
			this.user = {
				username: '',
				password: '',
				name: '', 
				role: ''
			};
			this.login = function () {
				this.user = user.login(this.user);
				console.log(this.user);
				if (this.user.username) {
					sessionStorage.setItem('name', this.user.name);
					sessionStorage.setItem('userName', this.user.name);
					$location.path('/graduate');
				}
			};
		},
		bindings: {}
	})
	.service('user', function($http, $q){
		return {
			user: {username: '', password: '', name: '', userRole: ''},
			login: function(user) {
				var loginEndpoint = 'http://localhost:8080/backend/webapi/login';
				var defer = $q.defer();
				

				//mock
				if(user.username && user.password) user = {username: 'JonnyDepp', password: 'Jdepp1', name: 'Jonny Depp', userRole: 'graduate'};
				else user = {username: '', password: '', name: '', userRole: ''};
				return user;
			}
		};
	});
	
})(window.angular);