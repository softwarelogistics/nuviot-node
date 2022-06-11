"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlossaryService = void 0;
class GlossaryService {
    constructor(nuviotClient) {
        this.nuviotClient = nuviotClient;
    }
    getGlossaries() {
        return this.nuviotClient.request('/api/glossaries');
    }
    createGlossary() {
        return this.nuviotClient.request('/api/glossary/factory');
    }
    getGlossary(id) {
        return this.nuviotClient.request(`/api/glossary/${id}`);
    }
    addGlossary(glossary) {
        return this.nuviotClient.post('/api/glossary', glossary);
    }
    addNewGlossary(glossary) {
        return this.nuviotClient.post('/api/glossary', glossary);
    }
    updateGlossary(glossary) {
        return this.nuviotClient.update('/api/glossary', glossary);
    }
}
exports.GlossaryService = GlossaryService;
