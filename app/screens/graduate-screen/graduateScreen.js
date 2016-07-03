(function(){
	var module = angular.module('app');
	module.directive('epmLoginScreen', function(userFactory){
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			templateUrl: 'app/screens/graduate-screen/graduateScreen.html',
		};
	});
})();