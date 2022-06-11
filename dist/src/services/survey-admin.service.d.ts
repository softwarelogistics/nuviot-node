import { NuviotClientService } from './nuviot-client.service';
export declare class SurveyAdminService {
    private nuviotClient;
    constructor(nuviotClient: NuviotClientService);
    createSurvey(): Promise<Core.FormResult<Planner.Survey, Planner.SurveyView>>;
    getSurvey(id: string): Promise<Core.FormResult<Planner.Survey, Planner.SurveyView>>;
    createQuestionSet(): Promise<Core.FormResult<Planner.SurveyQuestionSet, Planner.SurveyQuestionSetView>>;
    createSurveyQuestion(): Promise<Core.FormResult<Planner.SurveyQuestion, Planner.SurveyQuestionView>>;
    createSurveyAnswer(): Promise<Core.FormResult<Planner.SurveyAnswerChoice, Planner.SurveyAnswerChoiceView>>;
    insertSurvey(survey: Planner.Survey): Promise<Core.InvokeResult>;
    updateSurvey(survey: Planner.Survey): Promise<Core.InvokeResult>;
}
