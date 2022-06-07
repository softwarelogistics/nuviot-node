"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkCallStatusService = void 0;
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var NetworkCallStatusService = /** @class */ (function () {
    function NetworkCallStatusService() {
        this._activeCallCount = 0;
        this._loadingMessages = [];
        this._activeCalls = new BehaviorSubject_1.BehaviorSubject(this._loadingMessages);
        this._endCalls = new BehaviorSubject_1.BehaviorSubject(this._loadingMessages);
    }
    NetworkCallStatusService.prototype.onCallBegin = function () {
        return this._activeCalls.asObservable();
    };
    NetworkCallStatusService.prototype.onCallEnd = function () {
        return this._endCalls.asObservable();
    };
    NetworkCallStatusService.prototype.beginCall = function () {
        this._activeCallCount++;
        this._loadingMessages.push["loading"];
        this._activeCalls.next(this._loadingMessages);
    };
    NetworkCallStatusService.prototype.endCall = function () {
        this._activeCallCount--;
        this._loadingMessages.pop["loading"];
        if (this._activeCallCount == 0) {
            this._endCalls.next(this._loadingMessages);
        }
    };
    NetworkCallStatusService = __decorate([
        (0, core_1.Injectable)()
    ], NetworkCallStatusService);
    return NetworkCallStatusService;
}());
exports.NetworkCallStatusService = NetworkCallStatusService;
