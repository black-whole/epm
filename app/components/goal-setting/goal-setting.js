(function (angular) {
	'use strict';
	let module = angular.module('goalSettingModule', []);
	module.directive('epmGoalSetting', function () {
		return {
			restrict: 'E',
			templateUrl: 'app/components/goal-setting/goal-setting.html',
			scope: {},
			link: function (scope, element, attrs, controller) {
				let clearCheckedList = function (list) {
					for (var i = 0; i < list.length; i ++) {
						$('#' + list[i].replace(' ', '')).text('');
					}
				}
				scope.managers = ['Jacob Zuma', 'Andrew Oosthuizen', 'Andile Xulu', 'Anban Pillay', 'Rose Quiling'];
				scope.areas = ['Some', 'Stuff', 'That I', 'Dont', 'Even', 'Know'];
				scope.goals = [{description: 'some goal', kpi: 'kpi for this goal', businessAlignment: ''}];
				scope.selectManager = function (manager) {
					clearCheckedList(scope.managers);
					$('#' + manager.replace(' ', '')).text('check');
				}
				scope.selectArea = function (area) {
					clearCheckedList(scope.areas);
					$('#' + area.replace(' ', '')).text('check');
				};
				scope.addNewGoal = function() {
					console.log('capturing a new goal');
					scope.goals.push({description: 'some other goal', kpi: 'kpi for this goal', businessAlignment: ''});
				};
			}
		};
	});
})(window.angular);