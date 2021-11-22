// Model.js
// -----------------------
// @module Case
define("JOB.recaptcha.recaptcha.SS2Model", ["SCModel", "Utils"], function(
    SCModelModule,
    Utils
) {
    'use strict';

    var SCModel = SCModelModule.SCModel;

    function RecaptchaModel() {
        SCModel.call(this);

        this.urlRoot = function urlRoot() {
            Utils.getAbsoluteUrl(
                getExtensionAssetsPath(
                    "Modules/recaptcha/SuiteScript2/recaptcha.Service.ss"
                ),
                true
            )
        }
    }

    RecaptchaModel.prototype = Object.create(SCModel.prototype);
    RecaptchaModel.prototype.constructor = RecaptchaModel;

    return RecaptchaModel

})
