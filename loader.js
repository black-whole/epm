(function (angular) {
	'use strict';

	//*3rd party libraries
	// System.import('node_modules/jquery/dist/jquery.js');
	// System.import('node_modules/angular/angular.js');
	// System.import('node_modules/angular-route/angular-route.js');
	System.import('node_modules/angular-widget-grid/angular-widget-grid.js');
	System.import('node_modules/mediator-js/lib/mediator.js');

	//my jqury plugins
	System.import('app/jq-plugins/hide-component.jq.js');
	System.import('app/jq-plugins/show-component.jq.js');

	//*application modules
	//**services
	System.import('app/services/login.js');
	System.import('app/services/rotation.js');

	//**components
	System.import('app/components/login/login.js');
	System.import('app/components/grad-dash/grad-dash.js');
	System.import('app/components/grad-dash-main/gradDashMain.js');
	System.import('app/components/rotation-welcome/rotation-welcome.js');
	System.import('app/components/goal-setting/goal-setting.js');
	System.import('app/components/rotation/rotation.js');
	System.import('app/components/name-field/name-field.js');

	//**main app
	System.import('app.js');

	//*view controllers
	System.import('app/screens/graduate/graduate.js');

})(window.angular);