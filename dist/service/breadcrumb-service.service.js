"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadcrumbServiceService = void 0;
var core_1 = require("@angular/core");
var rxjs_compat_1 = require("rxjs-compat");
var BreadcrumbServiceService = /** @class */ (function () {
    function BreadcrumbServiceService() {
        this._breadCrumbs = [];
        this._breadCrumbsUpdated$ = new rxjs_compat_1.ReplaySubject();
    }
    BreadcrumbServiceService.prototype.push = function (title, route, icon) {
        if (icon === void 0) { icon = undefined; }
        var breadCrumb = {
            title: title,
            icon: icon,
            route: route
        };
        this._breadCrumbs.push(breadCrumb);
        this._breadCrumbsUpdated$.next(this._breadCrumbs);
    };
    BreadcrumbServiceService.prototype.pop = function () {
        this._breadCrumbsUpdated$.next(this._breadCrumbs);
    };
    BreadcrumbServiceService.prototype.reset = function () {
        while (this._breadCrumbs.length > 0)
            this._breadCrumbs.pop();
        this._breadCrumbsUpdated$.next(this._breadCrumbs);
    };
    Object.defineProperty(BreadcrumbServiceService.prototype, "breadcrumbs", {
        get: function () {
            return this._breadCrumbs;
        },
        enumerable: false,
        configurable: true
    });
    BreadcrumbServiceService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], BreadcrumbServiceService);
    return BreadcrumbServiceService;
}());
exports.BreadcrumbServiceService = BreadcrumbServiceService;
