"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyService = void 0;
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var SurveyService = /** @class */ (function () {
    function SurveyService(nuviotClient) {
        this.nuviotClient = nuviotClient;
        this._currentSurvey$ = new ReplaySubject_1.ReplaySubject();
        this._allSurveys$ = new ReplaySubject_1.ReplaySubject();
        this._currentQuestion$ = new ReplaySubject_1.ReplaySubject();
    }
    /**
     * Get a list of top level surveys that can be taken
     */
    SurveyService.prototype.getAvailableSurveys = function () {
        return this.nuviotClient.request('/api/surveys');
    };
    /**
     * Get a list of top level surveys that can be taken
     */
    SurveyService.prototype.loadAllSurveys = function () {
        console.log('requesting');
        return this.nuviotClient.getListResponse('/api/surveyadmin/surveys');
    };
    /**
     * Create a top level survey for an org
     * @param surveyeId
     */
    SurveyService.prototype.createSurvey = function (surveyId) {
        return this.nuviotClient.requestForInvokeResultEx("/api/survey/".concat(surveyId, "/factory"));
    };
    /**
     * get or create a survey for user based upon survey key.
     * @param surveyKey
     * @returns
     */
    SurveyService.prototype.getOrCreateASurveyForUser = function (surveyKey) {
        return this.nuviotClient.requestForInvokeResultEx("/api/survey/user/".concat(surveyKey, "?autocreate=true"));
    };
    /**
     * get or create a survey for user based upon survey key.
     * @param surveyKey
     * @returns
     */
    SurveyService.prototype.getSurveyForUser = function (surveyKey) {
        return this.nuviotClient.requestForInvokeResultEx("/api/survey/user/".concat(surveyKey));
    };
    /**
     * Create a survey that is attached to a parent survey via a question
     * @param surveyId
     * @param topLevelSureyResponseId
     * @param parentSurveyResponseId
     * @param questionId
     * @param index
     */
    SurveyService.prototype.createChildSurvey = function (surveyId, topLevelSureyResponseId, parentSurveyResponseId, questionId, index) {
        return this.nuviotClient.requestForInvokeResultEx("/api/survey/".concat(surveyId, "/").concat(topLevelSureyResponseId, "/").concat(parentSurveyResponseId, "/").concat(questionId, "/").concat(index, "/factory"));
    };
    /**
     * Get all surveys for a given org
     */
    SurveyService.prototype.getSurveysForCurrentOrg = function () {
        return this.nuviotClient.request("/api/survey/responses");
    };
    /**
     * Complete a survey with top level id
     */
    SurveyService.prototype.completeSurvey = function (id) {
        return this.nuviotClient.request("/api/survey/".concat(id, "/complete"));
    };
    /**
    * Complete a child survey with top level id and child.
    */
    SurveyService.prototype.completeChildSurvey = function (id, childSurveyId) {
        return this.nuviotClient.request("/api/survey/".concat(id, "/").concat(childSurveyId, "/complete"));
    };
    /**
     * Get all surveys for a given user
     */
    SurveyService.prototype.getSurveysForUser = function (id) {
        return this.nuviotClient.request("/api/survey/responses/user/".concat(id));
    };
    /**
     * Get a specific survey for an org
     * @param id - Row Key of the Survey Id
     */
    SurveyService.prototype.getSurveyResponse = function (topLevelResponseId, responseId) {
        if (topLevelResponseId !== responseId) {
            return this.nuviotClient.request("/api/survey/response/".concat(topLevelResponseId, "/").concat(responseId));
        }
        else {
            return this.nuviotClient.request("/api/survey/response/".concat(responseId));
        }
    };
    /**
     * Get a specific survey for an org
     * @param parentSurveyId - id of the parent survey id.
     * @param id - Id of the child survey result record.
     */
    SurveyService.prototype.getChildSurveyResult = function (parentSurveyId, id) {
        return this.nuviotClient.request("/api/survey/response/".concat(parentSurveyId, "/").concat(id));
    };
    /**
    * Get a list of child surveys attached to a parent for a specific question
    * @param topLevelSurveyResponseId
    * @param surveyResultId
    * @param questionId
    */
    SurveyService.prototype.getChildSurveys = function (topLevelSurveyResponseId, parentSurveyResultId, questionId) {
        return this.nuviotClient.request("/api/survey/".concat(topLevelSurveyResponseId, "/").concat(parentSurveyResultId, "/").concat(questionId, "/children "));
    };
    /**
     * Get a survey with all it's questions
     * @param surveyId Id of the Survey Template
     */
    SurveyService.prototype.getSurveyTemplate = function (surveyId) {
        return this.nuviotClient.request("/api/survey/template/".concat(surveyId));
    };
    /**
     * Delete a top level and all the child surveys
     * @param orgId Org that has the survey
     * @param id survey result id
     */
    SurveyService.prototype.deleteSurvey = function (orgId, id) {
        return this.nuviotClient.delete("/api/survey/".concat(orgId, "/").concat(id));
    };
    /**
     * Delete a child survey attached to a parent via a question
     * @param parentSurveyId
     * @param id
     */
    SurveyService.prototype.deleteChildSurvey = function (parentSurveyId, id) {
        return this.nuviotClient.delete("/api/survey/".concat(parentSurveyId, "/child/").concat(id));
    };
    /**
     * Get an answer for a question
     * @param surveyResultId
     * @param surveyQuestionId
     */
    SurveyService.prototype.getAnswers = function (surveyResultId, surveyQuestionId) {
        return this.nuviotClient.request("/api/survey/result/answer/".concat(surveyResultId, "/").concat(surveyQuestionId));
    };
    /**
     * Update the survey and question
     * @param surveyResult current survey result (could be a child)
     * @param questionId Id of the question that is updated.
     * @param answers list of answers for the given question
     */
    SurveyService.prototype.updateSurveyAnswer = function (surveyResponse, questionId, answers) {
        var survayAnswerupdate = {
            surveyResponse: surveyResponse,
            questionId: questionId,
            surveyResponseAnswers: answers,
        };
        return this.nuviotClient.update('/api/survey/answer', survayAnswerupdate);
    };
    /**
     * Update current survey
     * @param surveyResult
     */
    SurveyService.prototype.updateSurvey = function (surveyResult) {
        return this.nuviotClient.update('/api/survey', surveyResult);
    };
    /**
     * Can be called at any time to set a current question on a survey
     * @param orgId - Org ID for survey
     * @param surveyResultId - Survey Result Id
     * @param questionId - Question Id
     */
    SurveyService.prototype.setSurveyCurrentQuestion = function (topLevelSurveyResponseId, currentResponseId, questionId) {
        return this.nuviotClient.request("/api/survey/status/".concat(topLevelSurveyResponseId, "/").concat(currentResponseId, "/").concat(questionId));
    };
    /**
     * Get all the answers for a survey
     * @param surveyResultId -Survey Result Id
     */
    SurveyService.prototype.getAllAnswersForSurvey = function (surveyResultId) {
        return this.nuviotClient.request("/api/survey/result/answer/".concat(surveyResultId));
    };
    SurveyService.prototype.onCurrentQuestion = function () {
        return this._currentQuestion$.asObservable();
    };
    SurveyService.prototype.getCurrentQuestion = function () {
        return this._currentQuestion;
    };
    SurveyService.prototype.onSurvey = function () {
        return this._currentSurvey$.asObservable();
    };
    SurveyService.prototype.getCurrentSurvey = function () {
        return this._currentSurvey;
    };
    SurveyService.prototype.onAllSurvey = function () {
        return this._allSurveys$.asObservable();
    };
    SurveyService.prototype.getAllSurveys = function () {
        return this._allSurveys;
    };
    SurveyService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], SurveyService);
    return SurveyService;
}());
exports.SurveyService = SurveyService;
