"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const survey_service_1 = require("./survey.service");
describe('Service: Survey', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [survey_service_1.SurveyService]
        });
    });
    it('should ...', (0, testing_1.inject)([survey_service_1.SurveyService], (service) => {
        expect(service).toBeTruthy();
    }));
});
