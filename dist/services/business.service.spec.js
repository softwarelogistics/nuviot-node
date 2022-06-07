"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const business_service_1 = require("./business.service");
describe('Service: Business', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [business_service_1.BusinessService]
        });
    });
    it('should ...', (0, testing_1.inject)([business_service_1.BusinessService], (service) => {
        expect(service).toBeTruthy();
    }));
});
