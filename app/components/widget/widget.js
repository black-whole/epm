(function(){
	var module = angular.module('app');
	module.directive('epmWidget', function(){
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: 'app/components/widget/widget.html',
			scope: {
				widgetHeadingContent: '@',
				widgetFooterContent: '@'
			},
			link: function(){}
		};
	});
})();