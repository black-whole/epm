(function(){
	var module = angular.module('app');
	module.factory('userFactory', function(){
		var user = {
			getUser: function(username, password){
				return {username: 'JonnyDepp', password: 'Jdepp1', userRole: 'graduate'};
			}
		};
		return user;
	});
})();