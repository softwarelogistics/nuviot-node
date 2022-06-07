"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieService = exports.environment = exports.HttpParams = exports.HttpHeaders = exports.HttpClient = exports.Router = exports.ActivatedRoute = void 0;
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
        return null;
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
        return null;
    }
}
exports.HttpClient = HttpClient;
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
    // siteUri: 'https://www.nuviot.com'
    siteUri: 'https://localhost:5001'
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
