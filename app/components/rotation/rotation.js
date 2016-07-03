(function(){
	var module = angular.module('app');
	module.directive('epmRotation', function(){
		return {
			restrict: 'E',
			scope: {
				rotation: '='
			},
			templateUrl: 'app/components/rotation/rotation.html',
			link: function(scope){

			}
		};
	});
})();