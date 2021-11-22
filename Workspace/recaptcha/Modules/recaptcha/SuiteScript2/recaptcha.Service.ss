/**
* @NApiVersion 2.x
* @NModuleScope Public
*/
define([
    './JOB.recaptcha.recaptcha.SS2Model'
    ], function (RecaptchaModel) {
    "use strict";

    function service (ctx) {
        var response = {};

        switch (ctx.request.method) {
            case 'GET':
                response = RecaptchaModel
        }
    }
    return {
        service: function (ctx) {
            ctx.response.write(JSON.stringify({message: 'Hello SS2 World!'}));
        }
    };
});
