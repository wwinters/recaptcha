// @module JOB.recaptcha.recaptcha
define('JOB.recaptcha.callback.View'
,	[
	'job_recaptcha_callback.tpl'

	,	'Backbone'

    ]
, function (
	job_recaptcha_callback_tpl

	,	Backbone

)
{
    'use strict';

	// @class JOB.recaptcha.recaptcha.View @extends Backbone.View
	return Backbone.View.extend({

		template: job_recaptcha_callback_tpl

	,	initialize: function (options) {

			/*  Uncomment to test backend communication with an example service
				(you'll need to deploy and activate the extension first)
			*/

			// this.model = new recaptchaModel();
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
	,	getContext: function getContext()
		{
			this.sitekey = "6LfuHUMdAAAAAJKLd46-D-c3-ldFlSD4wBVYMCPV";
			return {
				sitekey: this.sitekey
			};
		}
	});
});
