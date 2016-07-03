(function(){
	var module = angular.module('app');
	module.directive('epmProfile', function(){
		return {
			restrict: 'E',
			templateUrl: 'app/components/profile/profile.html',
			scope: {},
			link: function(scope){
				scope.hovered = false;
				scope.hover = function(hoverVal){
					scope.hovered = hoverVal;
					console.log(scope.hovered)
				};

				scope.profile = {};
				scope.profile.name = 'offline';
				scope.profile.photo = 'app/resources/genericprofile.jpg';
				scope.profile.manage = function(){
					//open page to manage user profile
				};
			}
		};
	});
})();