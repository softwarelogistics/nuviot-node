"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceExplorerDataSourceService = void 0;
var core_1 = require("@angular/core");
var local_data_source_1 = require("../../../node_modules/ng2-smart-table/lib/data-source/local/local.data-source");
var DeviceExplorerDataSourceService = /** @class */ (function (_super) {
    __extends(DeviceExplorerDataSourceService, _super);
    function DeviceExplorerDataSourceService(errorReporter) {
        var _this = _super.call(this) || this;
        _this.errorReporter = errorReporter;
        _this.lastRequestCount = 0;
        return _this;
    }
    DeviceExplorerDataSourceService.prototype.count = function () {
        return this.lastRequestCount;
    };
    DeviceExplorerDataSourceService.prototype.getElements = function () {
        return null;
    };
    DeviceExplorerDataSourceService = __decorate([
        (0, core_1.Injectable)()
    ], DeviceExplorerDataSourceService);
    return DeviceExplorerDataSourceService;
}(local_data_source_1.LocalDataSource));
exports.DeviceExplorerDataSourceService = DeviceExplorerDataSourceService;
