"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyAdminService = void 0;
var core_1 = require("@angular/core");
var SurveyAdminService = /** @class */ (function () {
    function SurveyAdminService(nuviotClient) {
        this.nuviotClient = nuviotClient;
    }
    SurveyAdminService.prototype.createSurvey = function () {
        return this.nuviotClient.getFormResponse('/api/surveyadmin/factory');
    };
    SurveyAdminService.prototype.getSurvey = function (id) {
        return this.nuviotClient.getFormResponse("/api/surveyadmin/".concat(id));
    };
    SurveyAdminService.prototype.createQuestionSet = function () {
        return this.nuviotClient.getFormResponse('/api/surveyadmin/questionset/factory');
    };
    SurveyAdminService.prototype.createSurveyQuestion = function () {
        return this.nuviotClient.getFormResponse('/api/surveyadmin/question/factory');
    };
    SurveyAdminService.prototype.createSurveyAnswer = function () {
        return this.nuviotClient.getFormResponse('/api/surveyadmin/answer/factory');
    };
    SurveyAdminService.prototype.insertSurvey = function (survey) {
        return this.nuviotClient.post('/api/surveyadmin', survey);
    };
    SurveyAdminService.prototype.updateSurvey = function (survey) {
        return this.nuviotClient.update('/api/surveyadmin', survey);
    };
    SurveyAdminService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], SurveyAdminService);
    return SurveyAdminService;
}());
exports.SurveyAdminService = SurveyAdminService;
