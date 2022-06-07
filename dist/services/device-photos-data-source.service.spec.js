"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const device_photos_data_source_service_1 = require("./device-photos-data-source.service");
describe('Service: ServerDeviceDataSource', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [device_photos_data_source_service_1.DevicePhotosDataSourceService]
        });
    });
    it('should ...', (0, testing_1.inject)([device_photos_data_source_service_1.DevicePhotosDataSourceService], (service) => {
        expect(service).toBeTruthy();
    }));
});
