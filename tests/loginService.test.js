'use strict';

(function(){
	describe('loginService', function(){
		let loginService;

		beforeEach(module('app'));

		beforeEach(inject(function(_loginService_){
			loginService = _loginService_;
		}));

		it('should retrieve account information for the specified username and password', function(){
			let username, password, result;

			username = 'grad';
			password = 'grad';

			result = loginService.retrieveAccountInfo(username, password);

			expect(result).toBe(true);
		});

		it('should provide username and password', function(){
			let username = loginService.getUsername();
			let password = loginService.getPassword();

			console.log(username);

			expect(username !== undefined && password !== undefined).toBe(true);
		});
	});
})();