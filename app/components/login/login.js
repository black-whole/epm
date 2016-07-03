(function(angular){
	'use strict';

	var module = angular.module('app');
	module.component('epmLogin', {
		templateUrl: 'app/components/login/login.html',
		controller: ctrl,
		bindings: {}
	});

	function ctrl(userAccountsService, $location){
		this.user = {
			username: '',
			password: '',
			name: '',
			role:'',
			loggedIn: false
		};

		//get login details for all 2016 graduates and managers
		this.users = userAccountsService.getAllUsers(2016);
		//set this array for dev purposes
		this.users = [{username:'grad', password:'grad', name:'Mzwandile', role:'graduate'},{}];

		//user clicks login button
		this.login = function(){

			console.log(this.user.username);

			//both login fields must be provided
			if(!(this.user.username && this.user.password)){
				alert('both username and password are required');
			}
			else{
				let users = this.users;
				for(let i = 0; i < users.length; i ++){
					console.log(users[i].username === this.user.username)
					if(users[i].username === this.user.username){
						if(users[i].password === this.user.password){
							this.user.name = users[i].name;
							this.user.role = users[i].role;
							this.user.loggedIn = true;
							break;
						}
						else continue;
					}
				}
				this.grantAccess();
			}
		}

		this.grantAccess = function(){
			if(this.user.loggedIn){
				if(this.user.role === 'graduate'){
					$location.path('/graduate');
				}
				else if(this.user.role === 'manager'){
					$location.path('/manager');
				}
				else if(this.user.role === 'administrator'){
					$location.path('/admin');
				}
				else {
					alert('your role in this system is not recognised. please contact your system administrator');
					this.clearUser();
				}
			}
			else alert('Please provide correct username and password');
		}

		this.clearUser = function (){
				this.user = this.user = {
					username: '',
					password: '',
					name: '',
					role:''
				};
			}
	}

})(window.angular);