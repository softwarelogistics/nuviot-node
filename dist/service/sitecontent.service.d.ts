import { NuviotClientService } from './nuviot-client.service';
export declare class SiteContentService {
    private nuviotClient;
    constructor(nuviotClient: NuviotClientService);
    getPublicContentItemsByKey(contentTypeKey: string): Promise<SiteContent.SiteContent[]>;
    getPublicContentItemByKey(contentTypeKey: string): Promise<SiteContent.SiteContent>;
    getAllSiteContent(): Promise<SiteContent.SiteContentSummary[]>;
    createSiteContent(): Promise<SiteContent.SiteContent>;
    getSiteContent(id: string): Promise<SiteContent.SiteContent>;
    addSiteContent(glossary: SiteContent.SiteContent): Promise<Core.InvokeResultEx<unknown>>;
    updateSiteContent(glossary: SiteContent.SiteContent): Promise<Core.InvokeResult>;
    contentTypes(): Promise<Core.PickerOption[]>;
    deleteSiteContent(id: string): Promise<Core.InvokeResult>;
}
