 (function (angular) {
 	'use strict';
 	let ctrl = function ($rootScope, rotation) {
 		$rootScope.$broadcast('loginSuccessful');
 		this.selectRotation = function (rotationNumber) { 	
 		    $rootScope.$broadcast('renderWelcomeScreen', rotationNumber);	    
            rotation.setActiveRotationNumber(rotationNumber);
 			if (rotation.isEmpty(rotationNumber)) {
 				window.mediator.publish('renderWelcomeScreen');
 			} 
 		};
 	};
 	let module = angular.module('GradDashMainModule', ['rotationModule', 'rotation']);
 	module.component('epmGradDashMain', {
 		templateUrl: 'app/components/grad-dash-main/gradDashMain.html',
 		controller: ctrl,
 		bindings: {}
 	});
 	
 })(window.angular);