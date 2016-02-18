var exec = require('cordova/exec'),
    cordova = require('cordova');


var stuff = {

    echoSomething: function (successCallback, errorCallback, args) {

        exec(successCallback, errorCallback, "Echo", "echo", args);
    }
};

module.exports = stuff;
