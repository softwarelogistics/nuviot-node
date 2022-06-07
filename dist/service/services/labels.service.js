"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelsService = void 0;
var core_1 = require("@angular/core");
var LabelsService = /** @class */ (function () {
    function LabelsService(nuviotClient) {
        this.nuviotClient = nuviotClient;
    }
    LabelsService.prototype.getLabeledEntities = function (id) {
        return this.nuviotClient.request("/api/label/entities/".concat(id));
    };
    LabelsService.prototype.getLabelSetForOrg = function () {
        return this.nuviotClient.request("/api/labelset");
    };
    LabelsService.prototype.addLabel = function (label) {
        return this.nuviotClient.postWithResponse('/api/label', label);
    };
    LabelsService.prototype.updateLabel = function (label) {
        return this.nuviotClient.updateWithResponse('/api/label', label);
    };
    LabelsService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], LabelsService);
    return LabelsService;
}());
exports.LabelsService = LabelsService;
