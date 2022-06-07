"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SevenSegmentService = void 0;
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var SevenSegmentService = /** @class */ (function () {
    function SevenSegmentService(client, errorReporter) {
        this.client = client;
        this.errorReporter = errorReporter;
        this.deviceMessageTypes$ = new ReplaySubject_1.ReplaySubject();
        this.deviceMessageType$ = new ReplaySubject_1.ReplaySubject();
    }
    SevenSegmentService.prototype.getSevenSegementMessages = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.getListResponse('/api/devicemessagetypes/sevenseg')
                .then(function (res) {
                resolve(res);
                _this.deviceMessageTypes = res.model;
            })
                .catch(function (err) { return _this.errorReporter.addError(err); });
        });
        return promise;
    };
    SevenSegmentService.prototype.getSevenSegementMessage = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.getFormResponse("/api/devicemessagetype/".concat(id))
                .then(function (res) {
                if (res.successful) {
                    resolve(res);
                    _this.deviceMessageType = res.model;
                }
                else {
                    _this.errorReporter.addErrors(res.errors);
                }
            })
                .catch(function (err) { return _this.errorReporter.addError(err); });
        });
        return promise;
    };
    SevenSegmentService.prototype.testSevenSegementMessage = function (message) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.post('/api/devicemessagetype/sevensegement/test', message)
                .then(function (res) {
                if (res.successful) {
                    console.log(res);
                    resolve(res.result);
                }
            })
                .catch(function (err) { return _this.errorReporter.addError(err); });
        });
        return promise;
    };
    SevenSegmentService.prototype.addSevenSegementMessage = function (message) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.insert('/api/devicemessagetype', message)
                .then(function (res) {
                if (res.successful) {
                    resolve(res);
                }
                else {
                    _this.errorReporter.addErrors(res.errors);
                }
            })
                .catch(function (err) { return _this.errorReporter.addError(err); });
        });
        return promise;
    };
    SevenSegmentService.prototype.createSevenSegementMessage = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.request('/api/devicemessagetype/factory')
                .then(function (res) {
                if (res.successful) {
                    resolve(res.model);
                }
                else {
                    _this.errorReporter.addErrors(res.errors);
                }
            })
                .catch(function (err) { return _this.errorReporter.addError(err); });
        });
        return promise;
    };
    SevenSegmentService.prototype.updateSevenSegementMessage = function (message) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.update('/api/devicemessagetype', message)
                .then(function (res) { return resolve(res); })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    SevenSegmentService.prototype.onCurrentMessageDefinition = function () {
        return this.deviceMessageType$.asObservable();
    };
    SevenSegmentService.prototype.onMessageDefinitions = function () {
        return this.deviceMessageTypes$.asObservable();
    };
    SevenSegmentService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], SevenSegmentService);
    return SevenSegmentService;
}());
exports.SevenSegmentService = SevenSegmentService;
