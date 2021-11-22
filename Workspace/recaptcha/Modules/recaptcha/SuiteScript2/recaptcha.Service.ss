/**
* @NApiVersion 2.x
* @NModuleScope Public
*/
define([
    './JOB.recaptcha.recaptcha.SS2Model'
    ], function (RecaptchaModel) {
    "use strict";

    function service (context) {
        var response = {};

        switch (context.request.method) {
            case 'GET':
                response = RecaptchaModel.get(context.request);
                break;
            case 'POST':
                response = RecaptchaModel.post(context.request);
                break;
            case 'PUT':
                response = RecaptchaModel.put(context.request);
                break;
            case 'DELETE':
                response = RecaptchaModel.delete(context.request);
                break;
            default:
                response = {
                    type: 'error',
                    message: 'Method not supported: ' + context.request.method
                };
        }

        context.request.write(JSON.stringify(response));

    }
    return {
        service: service
        }

})
