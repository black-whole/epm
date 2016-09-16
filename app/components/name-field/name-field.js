(function (angular) {
	'use strict';

	let module = angular.module('nameField', []);

	module
	.directive('epmNameField', function() {
		return {
			templateUrl: 'app/components/name-field/name-field.html',
			scope: {},
			link: function (scope, element, attrs) {
				angular.extend(scope, {
					user: {name: ''}
				});

				scope.$on('loginSuccessful', function (event) {
					scope.user.name = sessionStorage.getItem('name');
				});
			},
			controller: function () {}
		};
	});
})(window.angular)