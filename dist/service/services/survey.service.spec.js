"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var survey_service_1 = require("./survey.service");
describe('Service: Survey', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [survey_service_1.SurveyService]
        });
    });
    it('should ...', (0, testing_1.inject)([survey_service_1.SurveyService], function (service) {
        expect(service).toBeTruthy();
    }));
});
