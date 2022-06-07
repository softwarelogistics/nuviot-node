"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const device_group_service_1 = require("./device-group.service");
describe('Service: DeviceGroup', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [device_group_service_1.DeviceGroupService]
        });
    });
    it('should ...', (0, testing_1.inject)([device_group_service_1.DeviceGroupService], (service) => {
        expect(service).toBeTruthy();
    }));
});
