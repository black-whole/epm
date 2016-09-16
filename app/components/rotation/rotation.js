(function(angular) {
	'use strict';
	let controllerFn = function() {};
	let module = angular.module('rotation', []);

	module
	.directive('epmRotation', function (rotation, $rootScope) {
		return {
			transclude: true,
			templateUrl: 'app/components/rotation/rotation.html',
			scope: {
				on: '=',
				rotation: '='
			},
			link: function (scope, element, attrs, controller) {
				let getTitle = function () {
					switch (scope.rotation) {
						case 1: return 'ROTATION ONE'; break;
						case 2: return 'ROTATION TWO'; break;
						case 3: return 'ROTATION THREE'; break;
						case 4: return 'ROTATION FOUR'; break;
					}
				}
				let updateRotation = function () {
					rotation.number = scope.rotation;
					rotation.on = scope.on;
					rotation.title = scope.title;
				}
				angular.extend(scope, {
					headerColor: scope.on === true ? 'rgb(32, 144, 44)' : 'rgb(32, 135, 144)',
					title: getTitle(),

					selectRotation: function () {
						updateRotation();
						$rootScope.$broadcast('renderRotationDetails', scope.rotation);
					}
				});
				updateRotation();
			}
		};
	})
	.directive( 'epmRotationDetails', function ($rootScope, rotation, rotationDetails) {
		return {
			templateUrl: 'app/components/grad-dash-rotation/grad-dash-rotation.html',
			scope: {},
			link: function (scope, element, attrs, controller) {
				var numberOfTimesDoneButtonIsClicked = 0;
				/*0 == not clicked ... 3 == confirm that you are done*/
				angular.extend(scope, {
					rotationDetails: {
						rotation: 0,
						goals: [],
						manager: {},
						area: {}
					},//this is where the rotation details are captured. this object will be sent to back end for storage
					rotation: rotation.number,
					goals: [],
					on: rotation.on,
					title: rotation.title,
					managers: rotationDetails.getManagers(rotation.number),// list of managers
					areas: rotationDetails.getRotationAreas(),
					next: function(eventName) {
						numberOfTimesDoneButtonIsClicked ++;
						captureEnteredInformation();
						$rootScope.$broadcast(eventName);
					},
					done: function() {
						if(numberOfTimesDoneButtonIsClicked++ == 1) {
							/*ask user to confirm*/
							$('#doneButton')
								.text('confirm')
								.css('background-color', 'rgb(144, 134, 32)');
						}
						else {
							/*save changes*/
							scope.rotationDetails.goals = scope.goals;
							rotation.saveRotationDetails(scope.rotationDetails);
						}
					},
					newGoal: function() {
						scope.goals[scope.goals.length] = {goal:'goal two', kpi: 'kpi two', target: 'target two'};
					}
				});

				let captureEnteredInformation = function() {
					scope.rotationDetails.rotation = scope.rotation;
					$('#managerAndareaDetails').addClass('ng-hide');
					$('#goalDetails').removeClass('ng-hide');
					console.log(scope.rotationDetails);
				};

				let clearCheckedList = function (list) {
					for (var i = 0; i < list.length; i ++) {
						$('#' + list[i].id).text('');
					}
				};

				scope.selectManager = function (manager) {
					clearCheckedList(scope.managers);
					$('#' + manager.id).text('check');
					scope.rotationDetails.manager = manager;
				};

				scope.selectArea = function (area) {
					clearCheckedList(scope.areas);
					$('#' + area.id).text('check');
					scope.rotationDetails.area = area;
				};

				let setRotationDetails = function () {
					scope.rotation = rotation.number;
					scope.on = rotation.on;
					scope.title = rotation.title;
				};

				scope.$on('renderRotationDetails', function (event, data){
					setRotationDetails();
					console.log(scope.title);
				});
				
			}
		};
	})
	.service('rotation', function () {
		return {
			saveRotationDetails: function(rotationDetails) {
				/*post  rotationDetails object to the save endpoint*/
				console.log('trying to save rotation ' + rotationDetails.rotation + ' details');
			},
			number: 0,
			title: '',
			on: false
		};
	})
	.service('rotationDetails', function () {
		return {
			getManagers: function(rotationNumber) {
				return [
					{name: 'Edward', surname: 'Soobramoney', id: 'Edwsoo'},
					{name: 'Portia', surname: 'Waters', id: 'Porwar'},
					{name: 'Martha', surname: 'Pillay', id: 'marpil'},
					{name: 'Samantha', surname: 'Naidoo', id: 'samnai'},
					{name: 'Tabatha', surname: 'Jacobs', id: 'tabjac'},
					{name: 'Ndoni', surname: 'Neno', id: 'ndonen'},
					{name: 'Ziyaziwa', surname: 'Zungu', id: 'ziyzun'},
					{name: 'Millicent', surname: 'Satjie', id: 'milsat'},
					{name: 'Marshal', surname: 'Wildehog', id: 'marwil'},
					{name: 'James', surname: 'Jones', id: 'jamjon'},
					{name: 'Timothy', surname: 'Pattison', id: 'timpat'}
				];
			},
			getRotationAreas: function(manager) {
				return [
					{name: 'Risk Management', id: 'area1'},
					{name: 'Open Innovation Lab', id: 'area2'},
					{name: 'Compliance', id: 'area3'},
					{name: 'Card and Emerging Payments', id: 'area4'},
					{name: 'Legal Division', id: 'area5'},
					{name: 'Systems Security', id: 'area6'},
					{name: 'Rest of Africa Online', id: 'area7'},
					{name: 'Online Share Trading', id: 'area8'},
					{name: 'Marketing', id: 'area9'},
					{name: 'Business Strategy', id: 'area0'},
					{name: 'Vehicle Insurance', id: 'area01 '}
				];
			}
		};
	});
})(window.angular);