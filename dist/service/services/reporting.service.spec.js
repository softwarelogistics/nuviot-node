"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var reporting_service_1 = require("./reporting.service");
describe('Service: ReportingService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [reporting_service_1.ReportingService]
        });
    });
    it('should ...', (0, testing_1.inject)([reporting_service_1.ReportingService], function (service) {
        expect(service).toBeTruthy();
    }));
});
