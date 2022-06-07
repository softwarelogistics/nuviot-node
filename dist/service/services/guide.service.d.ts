import { NuviotClientService } from './nuviot-client.service';
import { Observable } from 'rxjs';
export declare class GuideService {
    private nuviotClient;
    private _currentGuide;
    private _currentGuideStep;
    private _guide$;
    private _guideStep$;
    private _guideSummaries$;
    constructor(nuviotClient: NuviotClientService);
    quickCreateGuide(guideQuickCreate: Guide.GuideQuickCreate): Promise<Core.InvokeResultEx<Core.EntityHeader>>;
    rebuildGuideTree(id: string): Promise<Guide.Guide>;
    getGuideCategories(): Promise<Core.PickerOption[]>;
    loadGuides(): Promise<Core.ListResponse<Guide.GuideSummary>>;
    addChildGuide(node: Guide.GuideNode): Promise<Core.InvokeResult>;
    loadGuidesByCategory(category: string, topLevel: boolean): Promise<Core.ListResponse<Guide.GuideSummary>>;
    loadGuide(guideId: string): Promise<Guide.Guide>;
    deleteGuide(guideId: string): Promise<Core.InvokeResult>;
    createNewGuide(): Promise<Guide.Guide>;
    createGuideStep(): Promise<Core.FormResult<Guide.GuideStep, Guide.GuideStepView>>;
    loadGuidStep(guideId: string, guideStepId: string): Promise<Guide.GuideStep>;
    createExampleApplication(key: string): Promise<Core.InvokeResult>;
    updateGuide(guide: Guide.Guide): Promise<Core.InvokeResult>;
    insertGuide(guide: Guide.Guide): Promise<Core.InvokeResultEx<unknown>>;
    setGuide(guide: Guide.Guide): void;
    setGuideStep(guideStep: Guide.GuideStep): void;
    setGuides(guides: Guide.GuideSummary[]): void;
    getCurrentGuide(): Guide.Guide;
    getCurrentGuideStep(): Guide.GuideStep;
    onGuide(): Observable<Guide.Guide>;
    onGuideStep(): Observable<Guide.GuideStep>;
    onGuides(): Observable<Guide.GuideSummary[]>;
}
