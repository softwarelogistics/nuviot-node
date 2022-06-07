"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var labels_service_1 = require("./labels.service");
describe('Service: Labels', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [labels_service_1.LabelsService]
        });
    });
    it('should ...', (0, testing_1.inject)([labels_service_1.LabelsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
