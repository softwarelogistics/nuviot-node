"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorReporterService = void 0;
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var ErrorReporterService = /** @class */ (function () {
    function ErrorReporterService() {
        this._errorMsgs = [];
        this._errorMsgs$ = new BehaviorSubject_1.BehaviorSubject(this._errorMsgs);
    }
    ErrorReporterService.prototype.onErrMsgs = function () {
        return this._errorMsgs$.asObservable();
    };
    ErrorReporterService.prototype.addErrors = function (errs) {
        this._errorMsgs$.next(errs);
    };
    ErrorReporterService.prototype.addError = function (err) {
        this._errorMsgs$.next([err]);
    };
    ErrorReporterService.prototype.addErrorMessage = function (msg) {
        this._errorMsgs$.next([{
                message: msg
            }]);
    };
    ErrorReporterService.prototype.addMessage = function (msg) {
        this.addError({ message: msg });
    };
    ErrorReporterService.prototype.addMessages = function (msgs) {
        var errs = [];
        for (var _i = 0, msgs_1 = msgs; _i < msgs_1.length; _i++) {
            var msg = msgs_1[_i];
            errs.push({ message: msg });
        }
        this.addErrors(errs);
    };
    ErrorReporterService.prototype.clearErrors = function () {
        this._errorMsgs$.next(null);
    };
    ErrorReporterService = __decorate([
        (0, core_1.Injectable)()
    ], ErrorReporterService);
    return ErrorReporterService;
}());
exports.ErrorReporterService = ErrorReporterService;
