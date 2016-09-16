(function(angular) {
	'use strict';
	let module = angular.module('welcomeModule', ['rotationModule']);
	module.directive('epmRotationWelcome', function () {
		return {
			restrict: 'E',
			templateUrl: 'app/components/rotation-welcome/rotation-welcome.html',
			scope: {
				rotation: '=rotation'
			},
			link: function (scope, element, attrs, controller) {
				scope.clickStart = function () {
					console.log('start button is clicked... will start rotation '+ scope.rotationNumber +' setup in a second');
					scope.$root.$broadcast('renderGoalSettingScreen');
				};
			}
		};
	});
})(window.angular);