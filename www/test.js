var exec = require('cordova/exec'),
    cordova = require('cordova');


var stuff = {

    echoSomething: function (successCallback, errorCallback) {

        exec(successCallback, errorCallback, "Echo", "echo", []);
    }
};

module.exports = stuff;
