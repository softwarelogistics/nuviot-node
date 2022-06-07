"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const error_reporter_service_1 = require("./error-reporter.service");
describe('Service: ErrorReporter', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [error_reporter_service_1.ErrorReporterService]
        });
    });
    it('should ...', (0, testing_1.inject)([error_reporter_service_1.ErrorReporterService], (service) => {
        expect(service).toBeTruthy();
    }));
});
