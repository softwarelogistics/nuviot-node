"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteContentService = void 0;
var core_1 = require("@angular/core");
var SiteContentService = /** @class */ (function () {
    function SiteContentService(nuviotClient) {
        this.nuviotClient = nuviotClient;
    }
    SiteContentService.prototype.getPublicContentItemsByKey = function (contentTypeKey) {
        return this.nuviotClient.request("/api/sitecontent/public/".concat(contentTypeKey, "/all"));
    };
    SiteContentService.prototype.getPublicContentItemByKey = function (contentTypeKey) {
        return this.nuviotClient.request("/api/sitecontent/".concat(contentTypeKey, "/public"));
    };
    SiteContentService.prototype.getAllSiteContent = function () {
        return this.nuviotClient.request('/api/sitecontent/all');
    };
    SiteContentService.prototype.createSiteContent = function () {
        return this.nuviotClient.request('/api/sitecontent/factory');
    };
    SiteContentService.prototype.getSiteContent = function (id) {
        return this.nuviotClient.request("/api/sitecontent/".concat(id));
    };
    SiteContentService.prototype.addSiteContent = function (glossary) {
        return this.nuviotClient.post('/api/sitecontent', glossary);
    };
    SiteContentService.prototype.updateSiteContent = function (glossary) {
        return this.nuviotClient.update('/api/sitecontent', glossary);
    };
    SiteContentService.prototype.contentTypes = function () {
        return this.nuviotClient.request('/api/sitecontent/contenttypes');
    };
    SiteContentService.prototype.deleteSiteContent = function (id) {
        return this.nuviotClient.delete("/api/sitecontent/".concat(id));
    };
    SiteContentService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], SiteContentService);
    return SiteContentService;
}());
exports.SiteContentService = SiteContentService;
