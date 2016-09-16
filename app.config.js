define(['angular', 'ngRoute'], function() {
	function config($routeProvider) {
		$routeProvider
		.when('/login', {
			teplateUrl: 'app/screens/login-screen/loginScreen.html'
		})
		.otherwise({
			redirectTo: '/login'
		});
	}
	config.$inject = ['$routeProvider'];
	return config;
});