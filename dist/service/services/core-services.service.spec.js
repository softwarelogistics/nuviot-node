"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var core_services_service_1 = require("./core-services.service");
describe('Service: CoreServices', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [core_services_service_1.CoreServicesService]
        });
    });
    it('should ...', (0, testing_1.inject)([core_services_service_1.CoreServicesService], function (service) {
        expect(service).toBeTruthy();
    }));
});
