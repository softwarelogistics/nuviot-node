"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const device_explorer_data_source_service_1 = require("./device-explorer-data-source.service");
describe('Service: DeviceExplorerDataSource', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [device_explorer_data_source_service_1.DeviceExplorerDataSourceService]
        });
    });
    it('should ...', (0, testing_1.inject)([device_explorer_data_source_service_1.DeviceExplorerDataSourceService], (service) => {
        expect(service).toBeTruthy();
    }));
});
