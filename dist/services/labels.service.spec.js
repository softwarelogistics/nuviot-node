"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const labels_service_1 = require("./labels.service");
describe('Service: Labels', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [labels_service_1.LabelsService]
        });
    });
    it('should ...', (0, testing_1.inject)([labels_service_1.LabelsService], (service) => {
        expect(service).toBeTruthy();
    }));
});
