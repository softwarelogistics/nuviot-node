"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRequest = void 0;
var AuthRequest = /** @class */ (function () {
    function AuthRequest() {
        this.GrantType = 'password';
        this.AppId = 'dashboard';
        this.DeviceId = 'browser';
        this.AppInstanceId = 'browser';
        this.ClientType = 'browser';
    }
    return AuthRequest;
}());
exports.AuthRequest = AuthRequest;
