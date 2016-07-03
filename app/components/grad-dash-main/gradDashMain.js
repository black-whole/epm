(function(){
	var module = angular.module('app');
	module.directive('epmGradDashMain', function(){
		return {
			restrict: 'E',
			scope: {},
			templateUrl: 'app/components/grad-dash-main/gradDashMain.html',
			link: function(scope){
				scope.hovered1 = false;
				scope.hovered2 = false;
				scope.hovered3 = false;
				scope.hovered4 = false;
				scope.hover1 = function(hoverVal){
					scope.hovered1 = hoverVal;
					scope.hovered2 = !hoverVal;
					scope.hovered3 = !hoverVal;
					scope.hovered4 = !hoverVal;
					
					if(!hoverVal){
						scope.hovered1 = hoverVal;
						scope.hovered2 = hoverVal;
						scope.hovered3 = hoverVal;
						scope.hovered4 = hoverVal;
					}
					// console.log(scope.hovered)
				};

				scope.hover2 = function(hoverVal){
					scope.hovered2 = hoverVal;
					scope.hovered1 = !hoverVal;
					scope.hovered3 = !hoverVal;
					scope.hovered4 = !hoverVal;

					if(!hoverVal){
						scope.hovered1 = hoverVal;
						scope.hovered2 = hoverVal;
						scope.hovered3 = hoverVal;
						scope.hovered4 = hoverVal;
					}
					// console.log(scope.hovered)
				};

				scope.hover3 = function(hoverVal){
					scope.hovered3 = hoverVal;
					scope.hovered2 = !hoverVal;
					scope.hovered1 = !hoverVal;
					scope.hovered4 = !hoverVal;

					if(!hoverVal){
						scope.hovered1 = hoverVal;
						scope.hovered2 = hoverVal;
						scope.hovered3 = hoverVal;
						scope.hovered4 = hoverVal;
					}
					// console.log(scope.hovered)
				};

				scope.hover4 = function(hoverVal){
					scope.hovered4 = hoverVal;
					scope.hovered2 = !hoverVal;
					scope.hovered3 = !hoverVal;
					scope.hovered1 = !hoverVal;

					if(!hoverVal){
						scope.hovered1 = hoverVal;
						scope.hovered2 = hoverVal;
						scope.hovered3 = hoverVal;
						scope.hovered4 = hoverVal;
					}
					// console.log(scope.hovered)
				};
				scope.dash = {
					rotation: 0
				};
				scope.activate = function(rotation){
					// alert("activate" + rotation);
					scope.dash.rotation = rotation;
				}
			}
		};
	});
})();