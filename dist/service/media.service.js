"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var MediaService = /** @class */ (function () {
    function MediaService(http, notificationService, nuviotClient) {
        this.http = http;
        this.notificationService = notificationService;
        this.nuviotClient = nuviotClient;
        this._libraries$ = new ReplaySubject_1.ReplaySubject();
        this._library$ = new ReplaySubject_1.ReplaySubject();
        this._resources$ = new ReplaySubject_1.ReplaySubject();
        this._resource$ = new ReplaySubject_1.ReplaySubject();
    }
    MediaService.prototype.loadMediaLibraries = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.getListResponse("/api/media/libraries")
                .then(function (resp) {
                _this.setMediaLibraries(resp.model);
                resolve(resp.model);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    MediaService.prototype.loadMediaResources = function (libraryId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.getListResponse("/api/media/library/".concat(libraryId, "/resources"))
                .then(function (resp) {
                _this.setMediaResources(resp.model);
                resolve(resp.model);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    MediaService.prototype.newMediaLibrary = function () {
        return this.nuviotClient.getFormResponse("/api/media/library/factory");
    };
    MediaService.prototype.loadMediaLibrary = function (id) {
        return this.nuviotClient.getFormResponse("/api/media/library/".concat(id));
    };
    MediaService.prototype.insertMediaLibrary = function (library) {
        return this.nuviotClient.insert("/api/media/library", library);
    };
    MediaService.prototype.updateMediaLibrary = function (library) {
        return this.nuviotClient.update("/api/media/library", library);
    };
    MediaService.prototype.newMediaResource = function () {
        return this.nuviotClient.getFormResponse("/api/media/resource/factory");
    };
    MediaService.prototype.loadMediaResource = function (id) {
        return this.nuviotClient.getFormResponse("/api/media/resource/".concat(id));
    };
    MediaService.prototype.insertMediaResource = function (resource) {
        return this.nuviotClient.insert("/api/media/resource", resource);
    };
    MediaService.prototype.updateMediaResource = function (resource) {
        return this.nuviotClient.update("/api/media/resource", resource);
    };
    MediaService.prototype.onMediaLibraries = function () {
        this._libraries$.asObservable();
    };
    MediaService.prototype.onMediaLibrary = function () {
        this._library$.asObservable();
    };
    MediaService.prototype.onMediaResources = function () {
        this._resources$.asObservable();
    };
    MediaService.prototype.onMediaResource = function () {
        this._resource$.asObservable();
    };
    MediaService.prototype.setMediaLibraries = function (libraries) {
        this._mediaLibraries = libraries;
        this._libraries$.next(libraries);
    };
    MediaService.prototype.setMediaLibrary = function (library) {
        this._mediaLibrary = library;
        this._library$.next(library);
    };
    MediaService.prototype.setMediaResources = function (resources) {
        this._mediaResoures = resources;
        this._resources$.next(resources);
    };
    MediaService.prototype.setMediaResource = function (resource) {
        this._mediaResource = resource;
        this._resource$.next(resource);
    };
    MediaService.prototype.getMediaLibraries = function () {
        return this._mediaLibraries;
    };
    MediaService.prototype.getMediaLibrary = function () {
        return this._mediaLibrary;
    };
    MediaService.prototype.getMediaResources = function () {
        return this._mediaResoures;
    };
    MediaService.prototype.getMediaResource = function () {
        return this._mediaResource;
    };
    MediaService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], MediaService);
    return MediaService;
}());
exports.MediaService = MediaService;
