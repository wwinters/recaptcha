/**
 * @NApiVersion 2.x
 * @ModuleScope TargetAccount
 */
define([
    'N/https'
], function (
    https
) {
    'use strict';

    var RecaptchaModel = {
        get: function (request) {
            return JSON.stringify({message: 'Hello SS2 World!'})
        },

        post: function (request) {
            var body = JSON.parse(request.body);

            var recaptchaRequest = body.request;

            var response = https.post({
                body:   recaptchaRequest,
                url:    "https://www.google.com/recaptcha/api/siteverify"
            });

            return JSON.stringify(response);
        },

        put: function (request) {

        },

        delete: function (request) {

        }

    }

    return RecaptchaModel

})