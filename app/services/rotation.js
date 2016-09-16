'use strict';

(function(){
	var module = angular.module('rotationModule', []);
	module.service('rotation', ['$http', function ($http, $q) {
		//fields
		let activeRotationNumber = 0;
		let rotationList = [];
		let service = {
			//methods
			getActiveRotationNumber: function () {
				return activeRotationNumber;
			},
			setActiveRotationNumber: function (rotationNumber) {
				activeRotationNumber = rotationNumber;
			},
			isEmpty: function (rotationNumber) {
				return true;
			}
		};
		return service;
	}]);
})();