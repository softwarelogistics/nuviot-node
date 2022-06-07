"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const devices_data_source_service_1 = require("./devices-data-source.service");
describe('Service: DevicesDataSource', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [devices_data_source_service_1.DevicesDataSourceService]
        });
    });
    it('should ...', (0, testing_1.inject)([devices_data_source_service_1.DevicesDataSourceService], (service) => {
        expect(service).toBeTruthy();
    }));
});
