
define(
	'JOB.recaptcha.recaptcha'
,   [
		'JOB.recaptcha.recaptcha.View',
		'JOB.recaptcha.getip.View'
	]
,   function (
		recaptchaView,
		getipView
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			/** @type {LayoutComponent} */
			var loginRegister = container.getComponent('LoginRegisterPage');
			var recaptchaOn = false;
			
			if(loginRegister)
			{
				loginRegister.addChildView('Register.CustomFields', function () {
					return new getipView({loginRegister: loginRegister});
				});
				if (recaptchaOn) {
					loginRegister.addChildView('Register.CustomFields', function () {
						return new recaptchaView({loginRegister: loginRegister});
					});
				}
			}

		}
	};
});
