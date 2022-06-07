"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevicePhotosDataSourceService = void 0;
const core_1 = require("@angular/core");
const local_data_source_1 = require("../../../node_modules/ng2-smart-table/lib/data-source/local/local.data-source");
const operators_1 = require("rxjs/operators");
let DevicePhotosDataSourceService = class DevicePhotosDataSourceService extends local_data_source_1.LocalDataSource {
    constructor(http) {
        super();
        this.http = http;
        this.lastRequestCount = 0;
    }
    count() {
        return this.lastRequestCount;
    }
    getElements() {
        let url = 'https://jsonplaceholder.typicode.com/photos?';
        if (this.sortConf) {
            this.sortConf.forEach((fieldConf) => {
                url += `_sort=${fieldConf.field}&_order=${fieldConf.direction.toUpperCase()}&`;
            });
        }
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            url += `_page=${this.pagingConf['page']}&_limit=${this.pagingConf['perPage']}&`;
        }
        if (this.filterConf.filters) {
            this.filterConf.filters.forEach((fieldConf) => {
                if (fieldConf['search']) {
                    url += `${fieldConf['field']}_like=${fieldConf['search']}&`;
                }
            });
        }
        return this.http.get(url, { observe: 'response' })
            .pipe((0, operators_1.map)(res => {
            this.lastRequestCount = +res.headers.get('x-total-count');
            return res.body;
        })).toPromise();
    }
};
DevicePhotosDataSourceService = __decorate([
    (0, core_1.Injectable)()
], DevicePhotosDataSourceService);
exports.DevicePhotosDataSourceService = DevicePhotosDataSourceService;
