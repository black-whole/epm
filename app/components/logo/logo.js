(function(){
	var module = angular.module('app')
	module.directive('epmLogo', function(){
		return {
			restrict: 'E',
			templateUrl: 'app/components/logo/logo.html',
			scope: {
				logo: '@'
			}
		};
	});
})();