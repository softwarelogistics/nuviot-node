"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var devices_service_1 = require("./devices.service");
describe('Service: Devices', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [devices_service_1.DevicesService]
        });
    });
    it('should ...', (0, testing_1.inject)([devices_service_1.DevicesService], function (service) {
        expect(service).toBeTruthy();
    }));
});
