(function(){
	var module = angular.module('app');
	module.directive('epmWidget', function(){
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: 'app/components/widget/widget.html',
			scope: {
				width: '@',
				height: '@',
				widgetHeadingContent: '@',
				widgetFooterContent: '@'
			},
			link: function(){}
		};
	});
})();