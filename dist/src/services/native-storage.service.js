"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NativeStorageService = void 0;
let NativeStorageService = class NativeStorageService {
    constructor() { }
    setItemAsync(key, value) {
        let promise = new Promise(res => {
            window.localStorage.setItem(key, value);
            return true;
        });
        return promise;
    }
    getItemAsync(key) {
        let promise = new Promise(res => {
            res(window.localStorage.getItem(key));
        });
        return promise;
    }
    removeItemAsync(key) {
        let promise = new Promise(res => {
            window.localStorage.removeItem(key);
            return true;
        });
        return promise;
    }
};
NativeStorageService = __decorate([
    Injectable({ providedIn: 'root' })
], NativeStorageService);
exports.NativeStorageService = NativeStorageService;
