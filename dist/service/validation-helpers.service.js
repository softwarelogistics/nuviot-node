"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationHelpersService = void 0;
var core_1 = require("@angular/core");
var ValidationHelpersService = /** @class */ (function () {
    function ValidationHelpersService(errorReporter) {
        this.errorReporter = errorReporter;
    }
    ValidationHelpersService.prototype.validateKeyNameForInsert = function (model, parentItems) {
        var results = { successful: true, errors: [], warnings: [] };
        if (!model.name) {
            results.successful = false;
            results.errors.push({
                message: "Name is required"
            });
        }
        if (!model.key) {
            results.successful = false;
            results.errors.push({
                message: "Key is required"
            });
        }
        if (!model.key.match('^[a-z][0-9a-z]{2,20}$')) {
            results.successful = false;
            results.errors.push({
                message: "Key must be between 3 and 20 characters and may only contain numbers and lower case letters.\n            The key must start with a lower case letter"
            });
        }
        if (parentItems.find(function (par) { return par.key === model.key; })) {
            results.successful = false;
            results.errors.push({
                message: "The provided key already exists, please enter a unique key."
            });
        }
        if (!results.successful) {
            this.errorReporter.addErrors(results.errors);
        }
        return results;
    };
    ValidationHelpersService.prototype.validateKeyNameForUpdate = function (model, parentItems) {
        var results = { successful: true, errors: [], warnings: [] };
        if (!model.name) {
            results.successful = false;
            results.errors.push({
                message: "Name is required"
            });
        }
        if (!model.key) {
            results.successful = false;
            results.errors.push({
                message: "Key is required"
            });
        }
        if (!model.key.match('^[a-z][0-9a-z]{2,20}$')) {
            results.successful = false;
            results.errors.push({
                message: "Key must be between 3 and 20 characters and may only contain numbers and lower case letters.\n            The key must start with a lower case letter"
            });
        }
        /* The key will exist in the parent, but it is for this item, we are not allowing editing of the key so check
           isn't important, we also check on the server prior to insert.
        if (parentItems.find(par => par.key === model.key)) {
            results.successful = false;
            results.errors.push({
                message: `The provided key already exists, please enter a unique key.`});
        } */
        if (!results.successful) {
            this.errorReporter.addErrors(results.errors);
        }
        return results;
    };
    ValidationHelpersService = __decorate([
        (0, core_1.Injectable)()
    ], ValidationHelpersService);
    return ValidationHelpersService;
}());
exports.ValidationHelpersService = ValidationHelpersService;
