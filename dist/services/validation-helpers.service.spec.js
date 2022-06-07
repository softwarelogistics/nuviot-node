"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const validation_helpers_service_1 = require("./validation-helpers.service");
describe('Service: ValidationHelpers', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [validation_helpers_service_1.ValidationHelpersService]
        });
    });
    it('should ...', (0, testing_1.inject)([validation_helpers_service_1.ValidationHelpersService], (service) => {
        expect(service).toBeTruthy();
    }));
});
