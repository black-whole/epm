(function(){
	var module = angular.module('app');
	module.directive('epmLogin', ['userFactory', function(userFactory){
		return {
			restrict: 'EA',
			transclude: true,
			scope: {},
			templateUrl: 'app/components/login/login.html',
			link: function(scope, element){
				angular.extend(scope, {
					username: '',
					password: '',
					authenticate: function(){
						var user = userFactory.getUser('jonnyDepp', 'Jdepp1');
					}
				});
			}
		};
	}]);
})();