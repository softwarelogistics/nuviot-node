"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const core_services_service_1 = require("./core-services.service");
describe('Service: CoreServices', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [core_services_service_1.CoreServicesService]
        });
    });
    it('should ...', (0, testing_1.inject)([core_services_service_1.CoreServicesService], (service) => {
        expect(service).toBeTruthy();
    }));
});
