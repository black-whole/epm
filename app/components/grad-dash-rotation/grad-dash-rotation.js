( function (angular) {
	'use strict';
	let module = angular.module('gradDashRotationModule', []);

	module
	.directive( 'epmGradDashRotation', function () {
		return {
			templateUrl: 'app/components/grad-dash-rotation/grad-dash-rotation.html',
			scope: {
				
			}
		};
	});
} )( window.angular );