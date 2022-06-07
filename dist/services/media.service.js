"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
const rxjs_1 = require("rxjs");
class MediaService {
    constructor(nuviotClient) {
        this.nuviotClient = nuviotClient;
        this._libraries$ = new rxjs_1.ReplaySubject();
        this._library$ = new rxjs_1.ReplaySubject();
        this._resources$ = new rxjs_1.ReplaySubject();
        this._resource$ = new rxjs_1.ReplaySubject();
    }
    loadMediaLibraries() {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.getListResponse(`/api/media/libraries`)
                .then(resp => {
                this.setMediaLibraries(resp.model);
                resolve(resp.model);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    loadMediaResources(libraryId) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.getListResponse(`/api/media/library/${libraryId}/resources`)
                .then(resp => {
                this.setMediaResources(resp.model);
                resolve(resp.model);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    newMediaLibrary() {
        return this.nuviotClient.getFormResponse(`/api/media/library/factory`);
    }
    loadMediaLibrary(id) {
        return this.nuviotClient.getFormResponse(`/api/media/library/${id}`);
    }
    insertMediaLibrary(library) {
        return this.nuviotClient.insert(`/api/media/library`, library);
    }
    updateMediaLibrary(library) {
        return this.nuviotClient.update(`/api/media/library`, library);
    }
    newMediaResource() {
        return this.nuviotClient.getFormResponse(`/api/media/resource/factory`);
    }
    loadMediaResource(id) {
        return this.nuviotClient.getFormResponse(`/api/media/resource/${id}`);
    }
    insertMediaResource(resource) {
        return this.nuviotClient.insert(`/api/media/resource`, resource);
    }
    updateMediaResource(resource) {
        return this.nuviotClient.update(`/api/media/resource`, resource);
    }
    onMediaLibraries() {
        this._libraries$.asObservable();
    }
    onMediaLibrary() {
        this._library$.asObservable();
    }
    onMediaResources() {
        this._resources$.asObservable();
    }
    onMediaResource() {
        this._resource$.asObservable();
    }
    setMediaLibraries(libraries) {
        this._mediaLibraries = libraries;
        this._libraries$.next(libraries);
    }
    setMediaLibrary(library) {
        this._mediaLibrary = library;
        this._library$.next(library);
    }
    setMediaResources(resources) {
        this._mediaResoures = resources;
        this._resources$.next(resources);
    }
    setMediaResource(resource) {
        this._mediaResource = resource;
        this._resource$.next(resource);
    }
    getMediaLibraries() {
        return this._mediaLibraries;
    }
    getMediaLibrary() {
        return this._mediaLibrary;
    }
    getMediaResources() {
        return this._mediaResoures;
    }
    getMediaResource() {
        return this._mediaResource;
    }
}
exports.MediaService = MediaService;
