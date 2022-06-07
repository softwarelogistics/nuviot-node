"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var device_photos_data_source_service_1 = require("./device-photos-data-source.service");
describe('Service: ServerDeviceDataSource', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [device_photos_data_source_service_1.DevicePhotosDataSourceService]
        });
    });
    it('should ...', (0, testing_1.inject)([device_photos_data_source_service_1.DevicePhotosDataSourceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
