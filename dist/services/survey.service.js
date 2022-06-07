"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyService = void 0;
const rxjs_1 = require("rxjs");
class SurveyService {
    constructor(nuviotClient) {
        this.nuviotClient = nuviotClient;
        this._currentSurvey$ = new rxjs_1.ReplaySubject();
        this._allSurveys$ = new rxjs_1.ReplaySubject();
        this._currentQuestion$ = new rxjs_1.ReplaySubject();
    }
    /**
     * Get a list of top level surveys that can be taken
     */
    getAvailableSurveys() {
        return this.nuviotClient.request('/api/surveys');
    }
    /**
     * Get a list of top level surveys that can be taken
     */
    loadAllSurveys() {
        console.log('requesting');
        return this.nuviotClient.getListResponse('/api/surveyadmin/surveys');
    }
    /**
     * Create a top level survey for an org
     * @param surveyeId
     */
    createSurvey(surveyId) {
        return this.nuviotClient.requestForInvokeResultEx(`/api/survey/${surveyId}/factory`);
    }
    /**
     * get or create a survey for user based upon survey key.
     * @param surveyKey
     * @returns
     */
    getOrCreateASurveyForUser(surveyKey) {
        return this.nuviotClient.requestForInvokeResultEx(`/api/survey/user/${surveyKey}?autocreate=true`);
    }
    /**
     * get or create a survey for user based upon survey key.
     * @param surveyKey
     * @returns
     */
    getSurveyForUser(surveyKey) {
        return this.nuviotClient.requestForInvokeResultEx(`/api/survey/user/${surveyKey}`);
    }
    /**
     * Create a survey that is attached to a parent survey via a question
     * @param surveyId
     * @param topLevelSureyResponseId
     * @param parentSurveyResponseId
     * @param questionId
     * @param index
     */
    createChildSurvey(surveyId, topLevelSureyResponseId, parentSurveyResponseId, questionId, index) {
        return this.nuviotClient.requestForInvokeResultEx(`/api/survey/${surveyId}/${topLevelSureyResponseId}/${parentSurveyResponseId}/${questionId}/${index}/factory`);
    }
    /**
     * Get all surveys for a given org
     */
    getSurveysForCurrentOrg() {
        return this.nuviotClient.request(`/api/survey/responses`);
    }
    /**
     * Complete a survey with top level id
     */
    completeSurvey(id) {
        return this.nuviotClient.request(`/api/survey/${id}/complete`);
    }
    /**
    * Complete a child survey with top level id and child.
    */
    completeChildSurvey(id, childSurveyId) {
        return this.nuviotClient.request(`/api/survey/${id}/${childSurveyId}/complete`);
    }
    /**
     * Get all surveys for a given user
     */
    getSurveysForUser(id) {
        return this.nuviotClient.request(`/api/survey/responses/user/${id}`);
    }
    /**
     * Get a specific survey for an org
     * @param id - Row Key of the Survey Id
     */
    getSurveyResponse(topLevelResponseId, responseId) {
        if (topLevelResponseId !== responseId) {
            return this.nuviotClient.request(`/api/survey/response/${topLevelResponseId}/${responseId}`);
        }
        else {
            return this.nuviotClient.request(`/api/survey/response/${responseId}`);
        }
    }
    /**
     * Get a specific survey for an org
     * @param parentSurveyId - id of the parent survey id.
     * @param id - Id of the child survey result record.
     */
    getChildSurveyResult(parentSurveyId, id) {
        return this.nuviotClient.request(`/api/survey/response/${parentSurveyId}/${id}`);
    }
    /**
    * Get a list of child surveys attached to a parent for a specific question
    * @param topLevelSurveyResponseId
    * @param surveyResultId
    * @param questionId
    */
    getChildSurveys(topLevelSurveyResponseId, parentSurveyResultId, questionId) {
        return this.nuviotClient.request(`/api/survey/${topLevelSurveyResponseId}/${parentSurveyResultId}/${questionId}/children `);
    }
    /**
     * Get a survey with all it's questions
     * @param surveyId Id of the Survey Template
     */
    getSurveyTemplate(surveyId) {
        return this.nuviotClient.request(`/api/survey/template/${surveyId}`);
    }
    /**
     * Delete a top level and all the child surveys
     * @param orgId Org that has the survey
     * @param id survey result id
     */
    deleteSurvey(orgId, id) {
        return this.nuviotClient.delete(`/api/survey/${orgId}/${id}`);
    }
    /**
     * Delete a child survey attached to a parent via a question
     * @param parentSurveyId
     * @param id
     */
    deleteChildSurvey(parentSurveyId, id) {
        return this.nuviotClient.delete(`/api/survey/${parentSurveyId}/child/${id}`);
    }
    /**
     * Get an answer for a question
     * @param surveyResultId
     * @param surveyQuestionId
     */
    getAnswers(surveyResultId, surveyQuestionId) {
        return this.nuviotClient.request(`/api/survey/result/answer/${surveyResultId}/${surveyQuestionId}`);
    }
    /**
     * Update the survey and question
     * @param surveyResult current survey result (could be a child)
     * @param questionId Id of the question that is updated.
     * @param answers list of answers for the given question
     */
    updateSurveyAnswer(surveyResponse, questionId, answers) {
        const survayAnswerupdate = {
            surveyResponse: surveyResponse,
            questionId: questionId,
            surveyResponseAnswers: answers,
        };
        return this.nuviotClient.update('/api/survey/answer', survayAnswerupdate);
    }
    /**
     * Update current survey
     * @param surveyResult
     */
    updateSurvey(surveyResult) {
        return this.nuviotClient.update('/api/survey', surveyResult);
    }
    /**
     * Can be called at any time to set a current question on a survey
     * @param orgId - Org ID for survey
     * @param surveyResultId - Survey Result Id
     * @param questionId - Question Id
     */
    setSurveyCurrentQuestion(topLevelSurveyResponseId, currentResponseId, questionId) {
        return this.nuviotClient.request(`/api/survey/status/${topLevelSurveyResponseId}/${currentResponseId}/${questionId}`);
    }
    /**
     * Get all the answers for a survey
     * @param surveyResultId -Survey Result Id
     */
    getAllAnswersForSurvey(surveyResultId) {
        return this.nuviotClient.request(`/api/survey/result/answer/${surveyResultId}`);
    }
    onCurrentQuestion() {
        return this._currentQuestion$.asObservable();
    }
    getCurrentQuestion() {
        return this._currentQuestion;
    }
    onSurvey() {
        return this._currentSurvey$.asObservable();
    }
    getCurrentSurvey() {
        return this._currentSurvey;
    }
    onAllSurvey() {
        return this._allSurveys$.asObservable();
    }
    getAllSurveys() {
        return this._allSurveys;
    }
}
exports.SurveyService = SurveyService;
