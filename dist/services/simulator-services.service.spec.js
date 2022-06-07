"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const simulator_services_service_1 = require("./simulator-services.service");
describe('Service: SimulatorServices', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [simulator_services_service_1.SimulatorServicesService]
        });
    });
    it('should ...', (0, testing_1.inject)([simulator_services_service_1.SimulatorServicesService], (service) => {
        expect(service).toBeTruthy();
    }));
});
