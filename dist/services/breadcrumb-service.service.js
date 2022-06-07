"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadcrumbServiceService = void 0;
const rxjs_1 = require("rxjs");
class BreadcrumbServiceService {
    constructor() {
        this._breadCrumbs = [];
        this._breadCrumbsUpdated$ = new rxjs_1.ReplaySubject();
    }
    push(title, route, icon = undefined) {
        let breadCrumb = {
            title: title,
            icon: icon,
            route: route
        };
        this._breadCrumbs.push(breadCrumb);
        this._breadCrumbsUpdated$.next(this._breadCrumbs);
    }
    pop() {
        this._breadCrumbsUpdated$.next(this._breadCrumbs);
    }
    reset() {
        while (this._breadCrumbs.length > 0)
            this._breadCrumbs.pop();
        this._breadCrumbsUpdated$.next(this._breadCrumbs);
    }
    get breadcrumbs() {
        return this._breadCrumbs;
    }
}
exports.BreadcrumbServiceService = BreadcrumbServiceService;
