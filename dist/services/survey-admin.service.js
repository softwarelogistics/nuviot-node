"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyAdminService = void 0;
class SurveyAdminService {
    constructor(nuviotClient) {
        this.nuviotClient = nuviotClient;
    }
    createSurvey() {
        return this.nuviotClient.getFormResponse('/api/surveyadmin/factory');
    }
    getSurvey(id) {
        return this.nuviotClient.getFormResponse(`/api/surveyadmin/${id}`);
    }
    createQuestionSet() {
        return this.nuviotClient.getFormResponse('/api/surveyadmin/questionset/factory');
    }
    createSurveyQuestion() {
        return this.nuviotClient.getFormResponse('/api/surveyadmin/question/factory');
    }
    createSurveyAnswer() {
        return this.nuviotClient.getFormResponse('/api/surveyadmin/answer/factory');
    }
    insertSurvey(survey) {
        return this.nuviotClient.post('/api/surveyadmin', survey);
    }
    updateSurvey(survey) {
        return this.nuviotClient.update('/api/surveyadmin', survey);
    }
}
exports.SurveyAdminService = SurveyAdminService;
