"use strict";
/// <reference path="./core/core.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRequest = void 0;
class AuthRequest {
    constructor() {
        this.GrantType = 'password';
        this.AppId = 'dashboard';
        this.DeviceId = 'browser';
        this.AppInstanceId = 'browser';
        this.ClientType = 'browser';
    }
}
exports.AuthRequest = AuthRequest;
