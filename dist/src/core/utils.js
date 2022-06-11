"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieService = exports.environment = exports.HttpParams = exports.HttpHeaders = exports.NativeStorage = exports.HttpClient = exports.Router = exports.ActivatedRoute = void 0;
const node_fetch_1 = require("node-fetch");
const async_storage_1 = require("@react-native-async-storage/async-storage");
class ActivatedRoute {
}
exports.ActivatedRoute = ActivatedRoute;
;
class Router {
    navigate(path, params) {
    }
}
exports.Router = Router;
;
class HttpClient {
    get(url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = yield (0, node_fetch_1.default)(url);
            var json = yield result.json();
            return json;
        });
    }
    ;
    put(url, body, options) {
        return null;
    }
    ;
    delete(url) {
        return null;
    }
    post(url, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = yield (0, node_fetch_1.default)(url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(result.status);
            var json = yield result.json();
            return json;
        });
    }
}
exports.HttpClient = HttpClient;
class NativeStorage {
    getValue(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield async_storage_1.default.getItem(key);
        });
    }
    setValue(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield async_storage_1.default.setItem(key, value);
        });
    }
}
exports.NativeStorage = NativeStorage;
class HttpHeaders {
    set(key, value) {
        return this;
    }
    ;
    append(key, value) {
        return this;
    }
}
exports.HttpHeaders = HttpHeaders;
class HttpParams {
    set(key, value) {
        return this;
    }
}
exports.HttpParams = HttpParams;
exports.environment = {
    production: false,
    appId: "1C114B00D8014BD988BF61D74672F9D2",
    deviceId: 'mobileApp',
    appInstanceid: "",
    siteUri: 'https://api.nuviot.com'
    // siteUri: 'https://localhost:5001'
    //siteUri: 'http://dev.nuviot.com'
};
class CookieService {
    get(name) {
        return "";
    }
    set(name, value) {
    }
}
exports.CookieService = CookieService;
