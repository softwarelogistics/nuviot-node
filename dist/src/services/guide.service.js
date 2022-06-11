"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuideService = void 0;
const rxjs_1 = require("rxjs");
class GuideService {
    constructor(nuviotClient) {
        this.nuviotClient = nuviotClient;
        this._guide$ = new rxjs_1.ReplaySubject();
        this._guideStep$ = new rxjs_1.ReplaySubject();
        this._guideSummaries$ = new rxjs_1.ReplaySubject();
    }
    quickCreateGuide(guideQuickCreate) {
        return this.nuviotClient.post('/api/guide/quickcreate', guideQuickCreate);
    }
    rebuildGuideTree(id) {
        return this.nuviotClient.request(`/api/guide/${id}/createtree`);
    }
    getGuideCategories() {
        return this.nuviotClient.request('/api/guides/categories');
    }
    loadGuides() {
        return this.nuviotClient.request('/api/guides/all');
    }
    addChildGuide(node) {
        return this.nuviotClient.post('/api/guide/child', node);
    }
    loadGuidesByCategory(category, topLevel) {
        return this.nuviotClient.request(`/api/guides/${category}?toplevel=${topLevel}`);
    }
    loadGuide(guideId) {
        return this.nuviotClient.request(`/api/guide/${guideId}`);
    }
    deleteGuide(guideId) {
        return this.nuviotClient.delete(`/api/guide/${guideId}`);
    }
    createNewGuide() {
        return this.nuviotClient.request(`/api/guide/factory`);
    }
    createGuideStep() {
        return this.nuviotClient.request(`/api/guidestep/factory`);
    }
    loadGuidStep(guideId, guideStepId) {
        return this.nuviotClient.request(`/api/guide/${guideId}/step/${guideStepId}`);
    }
    createExampleApplication(key) {
        return this.nuviotClient.request(`/api/examples/create/${key}`);
    }
    updateGuide(guide) {
        return this.nuviotClient.update('/api/guide', guide);
    }
    insertGuide(guide) {
        return this.nuviotClient.post('/api/guide', guide);
    }
    setGuide(guide) {
        this._currentGuide = guide;
        this._guide$.next(guide);
    }
    setGuideStep(guideStep) {
        this._currentGuideStep = guideStep;
        this._guideStep$.next(guideStep);
    }
    setGuides(guides) {
        this._guideSummaries$.next(guides);
    }
    getCurrentGuide() {
        return this._currentGuide;
    }
    getCurrentGuideStep() {
        return this._currentGuideStep;
    }
    onGuide() {
        return this._guide$.asObservable();
    }
    onGuideStep() {
        return this._guideStep$.asObservable();
    }
    onGuides() {
        return this._guideSummaries$.asObservable();
    }
}
exports.GuideService = GuideService;
