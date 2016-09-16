( function (angular) {
	'use strict';
	let module = angular.module('grad-dashModule', ['GradDashMainModule', 'welcomeModule', 'goalSettingModule']);
	module.directive('epmGradDash', function () {
		return {
			templateUrl: 'app/components/grad-dash/grad-dash.html',
			restrict: 'E',
			scope: {},
			link: function (scope, element, attrs, controller) {
				scope.rotation = {number: 'Rotation One'};
				scope.$on ('renderWelcomeScreen', function (event, data) {
					switch (data) {
						case 1: scope.rotation.number = 'Rotation One';
						break;
						case 2: scope.rotation.number = 'Rotation Two';
						break;
						case 3: scope.rotation.number = 'Rotation Three';
						break;
						case 4: scope.rotation.number = 'Rotation Four';
						default: 'Undefine Rotation';
					}
					$('.grad-dash').hideComponent({component: 'epm-grad-dash-main'});
					$('.grad-dash').showComponent({component: 'epm-rotation-welcome'});
				});
				scope.$on('renderRotationDetails', function (event, data){
					$('.grad-dash').hideComponent({component: 'epm-grad-dash-main'});
					$('.grad-dash').showComponent({component: 'epm-rotation-details'});
				})
				scope.$on('renderGoalSettingScreen', function () {
					console.log('goal setting');
					$('.grad-dash').hideComponent({component: 'epm-rotation-welcome'});
					$('.grad-dash').showComponent({component: 'epm-goal-setting'});
				});
			}
		};
	});
} )(window.angular);