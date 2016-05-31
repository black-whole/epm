(function(){
	var module = angular.module('app');
	module.directive('epmMainFooter', function(){
		return {
			restrict: 'E',
			templateUrl: 'app/components/main-footer/mainFooter.html',
			scope: {},
			link: function(){}
		};
	});
})();