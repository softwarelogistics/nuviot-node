"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var fslite_service_1 = require("./fslite.service");
describe('Service: Fslite', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [fslite_service_1.FsliteService]
        });
    });
    it('should ...', (0, testing_1.inject)([fslite_service_1.FsliteService], function (service) {
        expect(service).toBeTruthy();
    }));
});
