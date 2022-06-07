"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportingService = void 0;
var core_1 = require("@angular/core");
var ReportingService = /** @class */ (function () {
    function ReportingService(client, errorReporter) {
        this.client = client;
        this.errorReporter = errorReporter;
    }
    ReportingService.prototype.getReports = function () {
        return this.client.getListResponse("api/reports");
    };
    ReportingService.prototype.getReport = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.getFormResponse("/api/report/".concat(id))
                .then(function (result) {
                resolve(result.model);
            });
        });
        return promise;
    };
    ReportingService.prototype.getScheduledReport = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.getFormResponse("/api/report/scheduled/".concat(id))
                .then(function (result) {
                resolve(result);
            });
        });
        return promise;
    };
    ReportingService.prototype.queueForExecution = function (reportId, request) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.insert("/api/report/".concat(reportId, "/run"), request)
                .then(function (resp) {
                var ticketResponse = resp;
                resolve(ticketResponse.result);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    ReportingService.prototype.deleteGeneratedReport = function (reportId, genertedReportId) {
        return this.client.delete("/report/".concat(reportId, "/").concat(genertedReportId));
    };
    ReportingService.prototype.getScheduledReports = function () {
        return this.client.getListResponse("/api/reports/scheduled");
    };
    ReportingService.prototype.deleteSchedueledReport = function (id) {
        return this.client.delete("/api/report/scheduled/".concat(id));
    };
    ReportingService.prototype.getScheduledReportsForReport = function (id) {
        return this.client.getListResponse("/api/reports/scheduled/".concat(id));
    };
    ReportingService.prototype.getGeneratedReports = function (reportId) {
        return this.client.getListResponse("/report/".concat(reportId, "/generated"));
    };
    ReportingService.prototype.getDeviceGeneratedReports = function (deviceId, continuationToken) {
        return this.client.getListResponse("/report/device/".concat(deviceId, "/generated"), { pageSize: 50, nextRowKey: continuationToken });
    };
    ReportingService.prototype.getDataStreams = function () {
        return this.client.getListResponse("api/datastreams");
    };
    ReportingService.prototype.getDataStream = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.getFormResponse("api/datastream/".concat(id))
                .then(function (result) {
                resolve(result.model);
            });
        });
        return promise;
    };
    ReportingService.prototype.getStreamData = function (dataStreamId, deviceId, filter) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var uri = "/api/datastream/".concat(dataStreamId, "/data/").concat(deviceId);
            _this.client.getListResponse(uri, filter)
                .then(function (response) {
                resolve(response);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    ReportingService = __decorate([
        (0, core_1.Injectable)()
    ], ReportingService);
    return ReportingService;
}());
exports.ReportingService = ReportingService;
