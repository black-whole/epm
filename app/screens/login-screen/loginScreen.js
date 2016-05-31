(function(){
	var module = angular.module('app');
	module.directive('epmLoginScreen', function(userFactory){
		return {
			restrict: 'EA',
			transclude: true,
			scope: {
				username: '',
				password: '',
				authenticate: function(){
					
				}
			},
			templateUrl: 'app/screens/login-screen/loginScreen.html',
		};
	});
})();