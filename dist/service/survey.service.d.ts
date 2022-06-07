import { Observable } from 'rxjs/Observable';
import { NuviotClientService } from './nuviot-client.service';
export declare class SurveyService {
    private nuviotClient;
    private _currentSurvey;
    private _allSurveys;
    private _currentQuestion;
    protected _currentSurvey$: any;
    protected _allSurveys$: any;
    protected _currentQuestion$: any;
    constructor(nuviotClient: NuviotClientService);
    /**
     * Get a list of top level surveys that can be taken
     */
    getAvailableSurveys(): Promise<Planner.SurveySummary[]>;
    /**
     * Get a list of top level surveys that can be taken
     */
    loadAllSurveys(): Promise<Core.ListResponse<Planner.SurveySummary>>;
    /**
     * Create a top level survey for an org
     * @param surveyeId
     */
    createSurvey(surveyId: string): Promise<Core.InvokeResultEx<Planner.SurveyResponse>>;
    /**
     * get or create a survey for user based upon survey key.
     * @param surveyKey
     * @returns
     */
    getOrCreateASurveyForUser(surveyKey: string): Promise<Core.InvokeResultEx<Planner.SurveyResponse>>;
    /**
     * get or create a survey for user based upon survey key.
     * @param surveyKey
     * @returns
     */
    getSurveyForUser(surveyKey: string): Promise<Core.InvokeResultEx<Planner.SurveyResponse>>;
    /**
     * Create a survey that is attached to a parent survey via a question
     * @param surveyId
     * @param topLevelSureyResponseId
     * @param parentSurveyResponseId
     * @param questionId
     * @param index
     */
    createChildSurvey(surveyId: string, topLevelSureyResponseId: string, parentSurveyResponseId: string, questionId: string, index: number): Promise<Core.InvokeResultEx<Planner.SurveyResponse>>;
    /**
     * Get all surveys for a given org
     */
    getSurveysForCurrentOrg(): Promise<Planner.SurveyResponse[]>;
    /**
     * Complete a survey with top level id
     */
    completeSurvey(id: string): Promise<Core.InvokeResult>;
    /**
    * Complete a child survey with top level id and child.
    */
    completeChildSurvey(id: string, childSurveyId: any): Promise<Core.InvokeResult>;
    /**
     * Get all surveys for a given user
     */
    getSurveysForUser(id: string): Promise<Planner.SurveyResponse[]>;
    /**
     * Get a specific survey for an org
     * @param id - Row Key of the Survey Id
     */
    getSurveyResponse(topLevelResponseId: string, responseId: string): Promise<Planner.SurveyDetail>;
    /**
     * Get a specific survey for an org
     * @param parentSurveyId - id of the parent survey id.
     * @param id - Id of the child survey result record.
     */
    getChildSurveyResult(parentSurveyId: string, id: string): Promise<Planner.SurveyResponse>;
    /**
    * Get a list of child surveys attached to a parent for a specific question
    * @param topLevelSurveyResponseId
    * @param surveyResultId
    * @param questionId
    */
    getChildSurveys(topLevelSurveyResponseId: string, parentSurveyResultId: string, questionId: string): Promise<Planner.SurveyResponse[]>;
    /**
     * Get a survey with all it's questions
     * @param surveyId Id of the Survey Template
     */
    getSurveyTemplate(surveyId: string): Promise<Planner.Survey>;
    /**
     * Delete a top level and all the child surveys
     * @param orgId Org that has the survey
     * @param id survey result id
     */
    deleteSurvey(orgId: string, id: string): Promise<Core.InvokeResult>;
    /**
     * Delete a child survey attached to a parent via a question
     * @param parentSurveyId
     * @param id
     */
    deleteChildSurvey(parentSurveyId: string, id: string): Promise<Core.InvokeResult>;
    /**
     * Get an answer for a question
     * @param surveyResultId
     * @param surveyQuestionId
     */
    getAnswers(surveyResultId: string, surveyQuestionId: string): Promise<Planner.SurveyResponseAnswer[]>;
    /**
     * Update the survey and question
     * @param surveyResult current survey result (could be a child)
     * @param questionId Id of the question that is updated.
     * @param answers list of answers for the given question
     */
    updateSurveyAnswer(surveyResponse: Planner.SurveyResponse, questionId: string, answers: Planner.SurveyResponseAnswer[]): Promise<Core.InvokeResult>;
    /**
     * Update current survey
     * @param surveyResult
     */
    updateSurvey(surveyResult: Planner.SurveyResponse): Promise<Core.InvokeResult>;
    /**
     * Can be called at any time to set a current question on a survey
     * @param orgId - Org ID for survey
     * @param surveyResultId - Survey Result Id
     * @param questionId - Question Id
     */
    setSurveyCurrentQuestion(topLevelSurveyResponseId: string, currentResponseId: string, questionId: string): Promise<Core.InvokeResult>;
    /**
     * Get all the answers for a survey
     * @param surveyResultId -Survey Result Id
     */
    getAllAnswersForSurvey(surveyResultId: string): Promise<Planner.SurveyResponseAnswer[]>;
    onCurrentQuestion(): Observable<Planner.SurveyQuestion>;
    getCurrentQuestion(): Planner.SurveyQuestion;
    onSurvey(): Observable<Planner.Survey>;
    getCurrentSurvey(): Planner.Survey;
    onAllSurvey(): Observable<Planner.SurveySummary[]>;
    getAllSurveys(): Planner.SurveySummary[];
}
