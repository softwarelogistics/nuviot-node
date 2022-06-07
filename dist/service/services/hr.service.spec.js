"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var hr_service_1 = require("./hr.service");
describe('Service: Hr', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [hr_service_1.HrService]
        });
    });
    it('should ...', (0, testing_1.inject)([hr_service_1.HrService], function (service) {
        expect(service).toBeTruthy();
    }));
});
