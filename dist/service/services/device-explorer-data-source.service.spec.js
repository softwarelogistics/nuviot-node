"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var device_explorer_data_source_service_1 = require("./device-explorer-data-source.service");
describe('Service: DeviceExplorerDataSource', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [device_explorer_data_source_service_1.DeviceExplorerDataSourceService]
        });
    });
    it('should ...', (0, testing_1.inject)([device_explorer_data_source_service_1.DeviceExplorerDataSourceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
