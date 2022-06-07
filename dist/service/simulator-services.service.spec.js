"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var simulator_services_service_1 = require("./simulator-services.service");
describe('Service: SimulatorServices', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [simulator_services_service_1.SimulatorServicesService]
        });
    });
    it('should ...', (0, testing_1.inject)([simulator_services_service_1.SimulatorServicesService], function (service) {
        expect(service).toBeTruthy();
    }));
});
