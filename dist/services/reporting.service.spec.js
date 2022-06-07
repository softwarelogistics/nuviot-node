"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const reporting_service_1 = require("./reporting.service");
describe('Service: ReportingService', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [reporting_service_1.ReportingService]
        });
    });
    it('should ...', (0, testing_1.inject)([reporting_service_1.ReportingService], (service) => {
        expect(service).toBeTruthy();
    }));
});
