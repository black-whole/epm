$.fn.showComponent = function(options) {
	let component = $(document.getElementsByTagName(options.component));
	component.removeClass('ng-hide');
}