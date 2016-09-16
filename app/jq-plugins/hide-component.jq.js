$.fn.hideComponent = function (options) {
	let component = options.component;
	$(document.getElementsByTagName(component)[0]).addClass('ng-hide');
};