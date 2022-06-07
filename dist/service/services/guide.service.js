"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuideService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var GuideService = /** @class */ (function () {
    function GuideService(nuviotClient) {
        this.nuviotClient = nuviotClient;
        this._guide$ = new rxjs_1.ReplaySubject();
        this._guideStep$ = new rxjs_1.ReplaySubject();
        this._guideSummaries$ = new rxjs_1.ReplaySubject();
    }
    GuideService.prototype.quickCreateGuide = function (guideQuickCreate) {
        return this.nuviotClient.post('/api/guide/quickcreate', guideQuickCreate);
    };
    GuideService.prototype.rebuildGuideTree = function (id) {
        return this.nuviotClient.request("/api/guide/".concat(id, "/createtree"));
    };
    GuideService.prototype.getGuideCategories = function () {
        return this.nuviotClient.request('/api/guides/categories');
    };
    GuideService.prototype.loadGuides = function () {
        return this.nuviotClient.request('/api/guides/all');
    };
    GuideService.prototype.addChildGuide = function (node) {
        return this.nuviotClient.post('/api/guide/child', node);
    };
    GuideService.prototype.loadGuidesByCategory = function (category, topLevel) {
        return this.nuviotClient.request("/api/guides/".concat(category, "?toplevel=").concat(topLevel));
    };
    GuideService.prototype.loadGuide = function (guideId) {
        return this.nuviotClient.request("/api/guide/".concat(guideId));
    };
    GuideService.prototype.deleteGuide = function (guideId) {
        return this.nuviotClient.delete("/api/guide/".concat(guideId));
    };
    GuideService.prototype.createNewGuide = function () {
        return this.nuviotClient.request("/api/guide/factory");
    };
    GuideService.prototype.createGuideStep = function () {
        return this.nuviotClient.request("/api/guidestep/factory");
    };
    GuideService.prototype.loadGuidStep = function (guideId, guideStepId) {
        return this.nuviotClient.request("/api/guide/".concat(guideId, "/step/").concat(guideStepId));
    };
    GuideService.prototype.createExampleApplication = function (key) {
        return this.nuviotClient.request("/api/examples/create/".concat(key));
    };
    GuideService.prototype.updateGuide = function (guide) {
        return this.nuviotClient.update('/api/guide', guide);
    };
    GuideService.prototype.insertGuide = function (guide) {
        return this.nuviotClient.post('/api/guide', guide);
    };
    GuideService.prototype.setGuide = function (guide) {
        this._currentGuide = guide;
        this._guide$.next(guide);
    };
    GuideService.prototype.setGuideStep = function (guideStep) {
        this._currentGuideStep = guideStep;
        this._guideStep$.next(guideStep);
    };
    GuideService.prototype.setGuides = function (guides) {
        this._guideSummaries$.next(guides);
    };
    GuideService.prototype.getCurrentGuide = function () {
        return this._currentGuide;
    };
    GuideService.prototype.getCurrentGuideStep = function () {
        return this._currentGuideStep;
    };
    GuideService.prototype.onGuide = function () {
        return this._guide$.asObservable();
    };
    GuideService.prototype.onGuideStep = function () {
        return this._guideStep$.asObservable();
    };
    GuideService.prototype.onGuides = function () {
        return this._guideSummaries$.asObservable();
    };
    GuideService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], GuideService);
    return GuideService;
}());
exports.GuideService = GuideService;
