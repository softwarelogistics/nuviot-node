"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const hr_service_1 = require("./hr.service");
describe('Service: Hr', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [hr_service_1.HrService]
        });
    });
    it('should ...', (0, testing_1.inject)([hr_service_1.HrService], (service) => {
        expect(service).toBeTruthy();
    }));
});
