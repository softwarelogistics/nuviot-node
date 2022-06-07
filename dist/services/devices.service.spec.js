"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const devices_service_1 = require("./devices.service");
describe('Service: Devices', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [devices_service_1.DevicesService]
        });
    });
    it('should ...', (0, testing_1.inject)([devices_service_1.DevicesService], (service) => {
        expect(service).toBeTruthy();
    }));
});
