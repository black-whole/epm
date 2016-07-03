(function(){
  var app = angular.module('app', ['ngAnimate', 'ui.bootstrap', 'ngRoute', 'widgetGrid']);
  app.controller('AppController', ['$scope', function($scope){}]);
  app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/login', {
      templateUrl: 'app/screens/login-screen/loginScreen.html'
    })
    .when('/graduate', {
      templateUrl: 'app/screens/graduate-screen/graduateScreen.html'
    })
    .when('/manager', {
      templateUrl: 'app/screens/manager-screen/managerScreen.html'
    })
    .when('/admin', {
      templateUrl: '#'
    })
    .otherwise({
      redirectTo: '/login'
    });
  }])
})();