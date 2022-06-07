"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreServices = void 0;
var core_1 = require("@angular/core");
var CoreServices = /** @class */ (function () {
    function CoreServices() {
    }
    CoreServices.prototype.isValidID = function (id) {
        if (!id) {
            return false;
        }
        var result = id.match('^[\\dABCDEF]{32}$');
        return result && result.length === 1;
    };
    CoreServices.prototype.invokeSuccess = function () {
        return { successful: true, errors: [], warnings: [] };
    };
    CoreServices.prototype.invokeError = function (err) {
        return { successful: false, errors: [{ message: err }], warnings: [] };
    };
    CoreServices = __decorate([
        (0, core_1.Injectable)()
    ], CoreServices);
    return CoreServices;
}());
exports.CoreServices = CoreServices;
