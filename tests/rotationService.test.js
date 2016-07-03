'use strict';

(function(){
	describe('unit test for the rotationService service', function(){
		var rotationService;

		beforeEach(module('app'));

		beforeEach(inject(function(_rotationService_){
			rotationService = _rotationService_;
		}));

		it('It should get the information for the specified rotation', function(){
			expect(rotationService.getRotationInfo(1).rotation).not.toBe(null);
		});
	});
})();