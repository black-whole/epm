(function(){
	var module = angular.module('app');
	module.directive('epmMainHeader', function(){
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: 'app/components/main-header/mainHeader.html',
			scope: {},
			link: function(){}
		};
	});
})();