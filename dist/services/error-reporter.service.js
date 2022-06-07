"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorReporterService = void 0;
const rxjs_1 = require("rxjs");
class ErrorReporterService {
    constructor() {
        this._errorMsgs = [];
        this._errorMsgs$ = new rxjs_1.BehaviorSubject(this._errorMsgs);
    }
    onErrMsgs() {
        return this._errorMsgs$.asObservable();
    }
    addErrors(errs) {
        this._errorMsgs$.next(errs);
    }
    addError(err) {
        this._errorMsgs$.next([err]);
    }
    addErrorMessage(msg) {
        this._errorMsgs$.next([{
                message: msg
            }]);
    }
    addMessage(msg) {
        this.addError({ message: msg });
    }
    addMessages(msgs) {
        const errs = [];
        for (const msg of msgs) {
            errs.push({ message: msg });
        }
        this.addErrors(errs);
    }
    clearErrors() {
        this._errorMsgs$.next(null);
    }
}
exports.ErrorReporterService = ErrorReporterService;
