"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteService = void 0;
const rxjs_1 = require("rxjs");
class RouteService {
    constructor(client) {
        this.client = client;
        this.currentRoute$ = new rxjs_1.ReplaySubject();
        this.routes$ = new rxjs_1.ReplaySubject();
        this.routes = [];
    }
    insertRoute(route) {
        return this.client.insert(`/api/geo/route`, route);
    }
    getNewRoute() {
        const promise = new Promise((resolve, reject) => {
            this.client.getFormResponse('/api/geo/route/factory')
                .then(res => resolve(res.model))
                .catch(err => reject(err));
        });
        return promise;
    }
    getNewWaypoint() {
        const promise = new Promise((resolve, reject) => {
            this.client.getFormResponse('/api/geo/route/waypoint/factory')
                .then(res => resolve(res.model))
                .catch(err => reject(err));
        });
        return promise;
    }
    updateRoute(route) {
        const promise = new Promise((resolve, reject) => {
            this.client.update(`/api/geo/route`, route)
                .then(res => resolve(res))
                .catch(err => reject(err));
        });
        return promise;
    }
    roundGeolocation(location) {
        return (Math.round(location * 1000000)) / 1000000.0;
    }
    getRoute(id) {
        const promise = new Promise((resolve, reject) => {
            this.client.getFormResponse(`/api/geo/route/${id}`)
                .then(res => resolve(res.model))
                .catch(err => reject(err));
        });
        return promise;
    }
    deleteRoute(id) {
        return this.client.delete(`/api/geo/route/${id}`);
    }
    getRoutes() {
        const promise = new Promise((resolve, reject) => {
            this.client.getListResponse('/api/geo/routes')
                .then(res => {
                this.routes = res.model;
                this.routes$.next(res.model);
                resolve(res);
            })
                .catch(err => reject(err));
        });
        return promise;
    }
    onCurrentRoute() {
        return this.currentRoute$.asObservable();
    }
    onRoutes() {
        return this.routes$.asObservable();
    }
}
exports.RouteService = RouteService;
