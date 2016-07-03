'use strict';

(function(){
	var module = angular.module('app');
	module.service('rotationService', ['$http', function($http){
		let rotation = {
			getRotationInfo: function(ID){
				return JSON.parse('{"rotation": "1"}');
				/*when we have a service that we can consume, we expect it 
				to return a json file. so we will not have to json parse its result. 
				we can return it to whoever consumes our service as it is*/
			}
		};
		return rotation;
	}]);
})();