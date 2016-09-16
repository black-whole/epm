/*
this is where we specify where our dependencies are situated.
we do this by adding a configuration to rquire.
a configuration is added by calling the require.config() method.
in the configuration we specify the baseUrl, the paths to the dependencies and libraries, shim, and deps.
base url is a url;
paths is an object (map)
shim is also an object
deps is an array of scripts that we want tick start from our main'
*/
require.config({
	baseUrl: 'node_modules',
	paths: {
		'jquery': 'jquery/dist/jquery',
		// 'angular': 'angular/angular',
		'angularAMD': 'angular-amd/angularAMD',
		'ngload': 'angular-amd/ngload',
		'ngAnimate': 'angular-animate/angular-animate',
		'ngTouch': 'angular-touch/angular-touch',
		'ngUiBootstrap': 'angular-ui-bootstrap/dist/ui-bootstrap-tpls',
		// 'angular-route': 'angular-route/angular-route',
		'ngWidgetGrid': 'angular-widget-grid/angular-widget-grid.min',
		'material': 'material-design-lite/material',
		'mediator': 'mediator-js/mediator.min',

		'appConfig': '../app.config.js'
	},
	priority: ['angular'],

	shim: {
		// 'angularAMD': ['angular'],
		'jquery': {
      		exports: 'jquery'
    	},
    	// 'angular': {
     //  		exports: 'angular'
    	// },
    	// 'angular-route': {
     //  		exports: 'ngRoute',
     //  		deps: ['angular']
    	// } 
	},
	// deps: ['../app.js']
});
// require(['angular', '../app'], function() {
// 	angular.bootstrap(document, ['app']);
// });