"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteContentService = void 0;
class SiteContentService {
    constructor(nuviotClient) {
        this.nuviotClient = nuviotClient;
    }
    getPublicContentItemsByKey(contentTypeKey) {
        return this.nuviotClient.request(`/api/sitecontent/public/${contentTypeKey}/all`);
    }
    getPublicContentItemByKey(contentTypeKey) {
        return this.nuviotClient.request(`/api/sitecontent/${contentTypeKey}/public`);
    }
    getAllSiteContent() {
        return this.nuviotClient.request('/api/sitecontent/all');
    }
    createSiteContent() {
        return this.nuviotClient.request('/api/sitecontent/factory');
    }
    getSiteContent(id) {
        return this.nuviotClient.request(`/api/sitecontent/${id}`);
    }
    addSiteContent(glossary) {
        return this.nuviotClient.post('/api/sitecontent', glossary);
    }
    updateSiteContent(glossary) {
        return this.nuviotClient.update('/api/sitecontent', glossary);
    }
    contentTypes() {
        return this.nuviotClient.request('/api/sitecontent/contenttypes');
    }
    deleteSiteContent(id) {
        return this.nuviotClient.delete(`/api/sitecontent/${id}`);
    }
}
exports.SiteContentService = SiteContentService;
