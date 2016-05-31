(function(){
  var app = angular.module('app', ['ngAnimate', 'ui.bootstrap', 'ngRoute', 'widgetGrid']);
  app.controller('AppController', ['$scope', function($scope){}]);
  app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/login', {
      templateUrl: 'app/screens/login-screen/loginScreen.html',
    })
    .when('/graduate', {
      templateUrl: 'graduateView',
      controller: 'graduateController'
    })
    .when('/manager', {
      templateUrl: 'managerView',
      controller: 'managerController',
    })
    .when('/admin', {
      templateUrl: 'adminView',
      controller: 'adminController'
    })
    .otherwise({
      redirectTo: '/login'
    });
  }])
})();