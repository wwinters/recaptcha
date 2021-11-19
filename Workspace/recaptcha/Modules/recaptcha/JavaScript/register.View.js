// @module JOB.recaptcha.register
define('JOB.recaptcha.register.View'
,	[
	'job_recaptcha_register.tpl'
	
	,	'JOB.recaptcha.recaptcha.SS2Model'
	
	,	'Backbone'

	,	'jQuery'
    ]
, function (
	job_recaptcha_register_tpl
	
	,	recaptchaSS2Model
	
	,	Backbone

	,	jQuery
)
{
    'use strict';

	// @class JOB.recaptcha.recaptcha.View @extends Backbone.View
	return Backbone.View.extend({

		template: job_recaptcha_register_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new recaptchaModel();
			var self = this;

			this.options.loginRegister.on('beforeRegister', function (formFields) {
				console.log(JSON.stringify(formFields));
				if (formFields["g-recaptcha-response"] === "") {
					return jQuery.Deferred().reject();
				}
			})
         	// this.model.fetch().done(function(result) {
			// 	self.message = result.message;
			// 	self.render();
      		// });
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		//@method getContext @return JOB.recaptcha.recaptcha.View.Context
	,	getContext: function getContext(){}

	});
});
