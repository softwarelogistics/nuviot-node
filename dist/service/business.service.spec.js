"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var business_service_1 = require("./business.service");
describe('Service: Business', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [business_service_1.BusinessService]
        });
    });
    it('should ...', (0, testing_1.inject)([business_service_1.BusinessService], function (service) {
        expect(service).toBeTruthy();
    }));
});
