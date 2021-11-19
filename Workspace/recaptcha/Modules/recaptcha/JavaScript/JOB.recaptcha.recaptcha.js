
define(
	'JOB.recaptcha.recaptcha'
,   [
		'JOB.recaptcha.recaptcha.View',
		'JOB.recaptcha.register.View',
		'JOB.recaptcha.guest.View',
		'JOB.recaptcha.callback.View',
		'JOB.recaptcha.getip.View'
	]
,   function (
		recaptchaNoGuestView,
		recaptchaRegisterView,
		recaptchaGuestView,
		recaptchaCallbackView,
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
			
			if(loginRegister)
			{
				var recaptchaOn = true;
				var isRegistrationOptionalTF = container.getComponent('Environment').getSiteSetting('registration').registrationoptional;
				var isRegistrationOptional = (isRegistrationOptionalTF === "T");
				loginRegister.addChildView('Register.CustomFields', function () {
					return new getipView({loginRegister: loginRegister});
				});
				if (isRegistrationOptional) {
					//Guest Shopper is ON
					loginRegister.addChildView('CheckoutAsGuest.CustomFields', function () {
						return new getipView({loginRegister: loginRegister});
					});
					if (recaptchaOn) {
						var layout = container.getComponent('Layout');
						//reCAPTCHA is ON
						//Explicitly render the reCAPTCHA widget in Guest Checkout Form
						loginRegister.addChildView('CheckoutAsGuest.CustomFields', function () {
							return new recaptchaGuestView({loginRegister: loginRegister});
						});
						//Explicitly render the reCAPTCHA widget in Register Form
						loginRegister.addChildView('Register.CustomFields', function () {
							return new recaptchaRegisterView({loginRegister: loginRegister});
						});
						//Add View for the reCAPTCHA Callback Function
						layout.addChildView('Header', function () {
							return new recaptchaCallbackView({loginRegister: loginRegister});
						})
					}
				}
				else if (recaptchaOn) {
					loginRegister.addChildView('Register.CustomFields', function () {
						//Automatically render the reCAPTCHA widget
						return new recaptchaNoGuestView({loginRegister: loginRegister});
					});
				}
			}

		}
	};
});
