// @module JOB.recaptcha.getip
define('JOB.recaptcha.getip.View',
    [
        'job_recaptcha_getip.tpl'
        ,'Backbone'
    ]
, function (
    job_recaptcha_getip_tpl,
    Backbone
)
    {
        'use strict';

        // @class JOB.recaptcha.getip.View @extends Backbone.View
        return Backbone.View.extend({
            template: job_recaptcha_getip_tpl,

            initialize: function (options) {

            },

            events: {
        },
            bindings: {
            },
            childViews: {

            }

    });
});
