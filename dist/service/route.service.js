"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteService = void 0;
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var RouteService = /** @class */ (function () {
    function RouteService(client) {
        this.client = client;
        this.currentRoute$ = new ReplaySubject_1.ReplaySubject();
        this.routes$ = new ReplaySubject_1.ReplaySubject();
        this.routes = [];
    }
    RouteService.prototype.insertRoute = function (route) {
        return this.client.insert("/api/geo/route", route);
    };
    RouteService.prototype.getNewRoute = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.getFormResponse('/api/geo/route/factory')
                .then(function (res) { return resolve(res.model); })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    RouteService.prototype.getNewWaypoint = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.getFormResponse('/api/geo/route/waypoint/factory')
                .then(function (res) { return resolve(res.model); })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    RouteService.prototype.updateRoute = function (route) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.update("/api/geo/route", route)
                .then(function (res) { return resolve(res); })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    RouteService.prototype.roundGeolocation = function (location) {
        return (Math.round(location * 1000000)) / 1000000.0;
    };
    RouteService.prototype.getRoute = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.getFormResponse("/api/geo/route/".concat(id))
                .then(function (res) { return resolve(res.model); })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    RouteService.prototype.deleteRoute = function (id) {
        return this.client.delete("/api/geo/route/".concat(id));
    };
    RouteService.prototype.getRoutes = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.getListResponse('/api/geo/routes')
                .then(function (res) {
                _this.routes = res.model;
                _this.routes$.next(res.model);
                resolve(res);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    RouteService.prototype.onCurrentRoute = function () {
        return this.currentRoute$.asObservable();
    };
    RouteService.prototype.onRoutes = function () {
        return this.routes$.asObservable();
    };
    RouteService = __decorate([
        (0, core_1.Injectable)()
    ], RouteService);
    return RouteService;
}());
exports.RouteService = RouteService;
