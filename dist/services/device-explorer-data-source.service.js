"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceExplorerDataSourceService = void 0;
const local_data_source_1 = require("../../../node_modules/ng2-smart-table/lib/data-source/local/local.data-source");
let DeviceExplorerDataSourceService = class DeviceExplorerDataSourceService extends local_data_source_1.LocalDataSource {
    constructor(errorReporter) {
        super();
        this.errorReporter = errorReporter;
        this.lastRequestCount = 0;
    }
    count() {
        return this.lastRequestCount;
    }
    getElements() {
        return null;
    }
};
DeviceExplorerDataSourceService = __decorate([
    Injectable({ providedIn: 'root' })
], DeviceExplorerDataSourceService);
exports.DeviceExplorerDataSourceService = DeviceExplorerDataSourceService;
