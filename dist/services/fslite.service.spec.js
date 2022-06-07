"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const fslite_service_1 = require("./fslite.service");
describe('Service: Fslite', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [fslite_service_1.FsliteService]
        });
    });
    it('should ...', (0, testing_1.inject)([fslite_service_1.FsliteService], (service) => {
        expect(service).toBeTruthy();
    }));
});
