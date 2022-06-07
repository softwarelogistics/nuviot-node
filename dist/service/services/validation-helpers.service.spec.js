"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var validation_helpers_service_1 = require("./validation-helpers.service");
describe('Service: ValidationHelpers', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [validation_helpers_service_1.ValidationHelpersService]
        });
    });
    it('should ...', (0, testing_1.inject)([validation_helpers_service_1.ValidationHelpersService], function (service) {
        expect(service).toBeTruthy();
    }));
});
