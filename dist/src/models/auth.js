/// <reference path="./core/core.ts" />
var Auth;
(function (Auth) {
    class Request {
        constructor() {
            this.GrantType = 'password';
            this.AppId = 'dashboard';
            this.DeviceId = 'browser';
            this.AppInstanceId = 'browser';
            this.ClientType = 'browser';
        }
    }
    Auth.Request = Request;
})(Auth || (Auth = {}));
