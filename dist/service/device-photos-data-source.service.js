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
exports.DevicePhotosDataSourceService = void 0;
var core_1 = require("@angular/core");
var local_data_source_1 = require("../../../node_modules/ng2-smart-table/lib/data-source/local/local.data-source");
var operators_1 = require("rxjs/operators");
var DevicePhotosDataSourceService = /** @class */ (function (_super) {
    __extends(DevicePhotosDataSourceService, _super);
    function DevicePhotosDataSourceService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.lastRequestCount = 0;
        return _this;
    }
    DevicePhotosDataSourceService.prototype.count = function () {
        return this.lastRequestCount;
    };
    DevicePhotosDataSourceService.prototype.getElements = function () {
        var _this = this;
        var url = 'https://jsonplaceholder.typicode.com/photos?';
        if (this.sortConf) {
            this.sortConf.forEach(function (fieldConf) {
                url += "_sort=".concat(fieldConf.field, "&_order=").concat(fieldConf.direction.toUpperCase(), "&");
            });
        }
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            url += "_page=".concat(this.pagingConf['page'], "&_limit=").concat(this.pagingConf['perPage'], "&");
        }
        if (this.filterConf.filters) {
            this.filterConf.filters.forEach(function (fieldConf) {
                if (fieldConf['search']) {
                    url += "".concat(fieldConf['field'], "_like=").concat(fieldConf['search'], "&");
                }
            });
        }
        return this.http.get(url, { observe: 'response' })
            .pipe((0, operators_1.map)(function (res) {
            _this.lastRequestCount = +res.headers.get('x-total-count');
            return res.body;
        })).toPromise();
    };
    DevicePhotosDataSourceService = __decorate([
        (0, core_1.Injectable)()
    ], DevicePhotosDataSourceService);
    return DevicePhotosDataSourceService;
}(local_data_source_1.LocalDataSource));
exports.DevicePhotosDataSourceService = DevicePhotosDataSourceService;
