"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var device_group_service_1 = require("./device-group.service");
describe('Service: DeviceGroup', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [device_group_service_1.DeviceGroupService]
        });
    });
    it('should ...', (0, testing_1.inject)([device_group_service_1.DeviceGroupService], function (service) {
        expect(service).toBeTruthy();
    }));
});
