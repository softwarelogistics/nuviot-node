"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkCallStatusService = void 0;
const rxjs_1 = require("rxjs");
class NetworkCallStatusService {
    constructor() {
        this._activeCallCount = 0;
        this._loadingMessages = [];
        this._activeCalls = new rxjs_1.BehaviorSubject(this._loadingMessages);
        this._endCalls = new rxjs_1.BehaviorSubject(this._loadingMessages);
    }
    onCallBegin() {
        return this._activeCalls.asObservable();
    }
    onCallEnd() {
        return this._endCalls.asObservable();
    }
    beginCall() {
        this._activeCallCount++;
        this._loadingMessages.push["loading"];
        this._activeCalls.next(this._loadingMessages);
    }
    endCall() {
        this._activeCallCount--;
        this._loadingMessages.pop["loading"];
        if (this._activeCallCount == 0) {
            this._endCalls.next(this._loadingMessages);
        }
    }
}
exports.NetworkCallStatusService = NetworkCallStatusService;
