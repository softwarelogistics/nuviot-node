"use strict";
/// <reference path="../models/user.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var environment_1 = require("../../environments/environment");
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var http_1 = require("@angular/common/http");
var UserService = /** @class */ (function () {
    function UserService(http, clientService, errorReporter, router, _activatedRoute) {
        this.http = http;
        this.clientService = clientService;
        this.errorReporter = errorReporter;
        this.router = router;
        this._activatedRoute = _activatedRoute;
        this._isLoggedIn$ = new ReplaySubject_1.ReplaySubject(0);
        this._org$ = new ReplaySubject_1.ReplaySubject(null);
        this._user$ = new ReplaySubject_1.ReplaySubject(null);
        this._users$ = new ReplaySubject_1.ReplaySubject(null);
        console.log('create user service instance');
        this.queryParams = Object.keys(this._activatedRoute.snapshot.queryParams).length > 0 ? this._activatedRoute.snapshot.queryParams : {};
        var paramOptions = {};
        if (this.hasParams()) {
            paramOptions['queryParamsHandling'] = 'preserve';
        }
        else {
            if (window.location.href.search) {
                var vm_1 = this;
                location.search.substr(1).replace('==', '`').split('&').forEach(function (item) {
                    var parts = item.split('=');
                    if (parts[0] !== '') {
                        vm_1.queryParams[parts[0]] = parts[1].replace('`', '==');
                    }
                });
                if (this.hasParams()) {
                    paramOptions['queryParams'] = this.queryParams;
                }
            }
        }
    }
    Object.defineProperty(UserService.prototype, "isLoggedIn", {
        get: function () {
            return window.localStorage.getItem("is_logged_in") == "login_true";
        },
        set: function (value) {
            this._isLoggedIn$.next(value);
            window.localStorage.setItem("is_logged_in", value ? "login_true" : "login_false");
        },
        enumerable: false,
        configurable: true
    });
    UserService.prototype.loadCurrentUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clientService.request('/api/user')];
                    case 1:
                        response = _a.sent();
                        this.setUser(response.model);
                        this.isLoggedIn = true;
                        return [2 /*return*/, response.model];
                }
            });
        });
    };
    UserService.prototype.updateCoreInfo = function (coreUserInfo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clientService.update('/api/user/coreinfo', coreUserInfo)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.hasParams = function () {
        return Object.keys(this.queryParams).length > 0;
    };
    UserService.prototype.logout = function () {
        this.http.get("".concat(environment_1.environment.siteUri, "/api/account/logout"))
            .subscribe(function (result) {
        });
        this.setUser(null);
        this.isLoggedIn = false;
    };
    UserService.prototype.getOrgsForCurrentUser = function () {
        return this.clientService.getListResponse("/api/user/orgs");
    };
    UserService.prototype.acceptTermsAndConditions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clientService.request('/api/user/accepttc')];
                    case 1:
                        result = _a.sent();
                        if (result.successful) {
                            this.setUser(result.result);
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    UserService.prototype.changeOrganization = function (orgId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.clientService.get("/api/org/".concat(orgId, "/change"))
                .then(function (result) {
                if (result.successful) {
                    _this.loadCurrentUser()
                        .then(function (res) { return resolve(true); })
                        .catch(function (err) { return reject(err); });
                }
                else {
                    console.log(result.errors[0].message);
                    reject(result.errors[0].message);
                }
            })
                .catch(function (err) {
                if (reject) {
                    reject(false);
                }
            });
        });
        return promise;
    };
    UserService.prototype.loadUser = function (id) {
        return this.clientService.getFormResponse("/api/user/".concat(id));
    };
    UserService.prototype.updateUser = function (user) {
        return this.clientService.update("/api/user", user);
    };
    UserService.prototype.loadUsers = function (filter) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.clientService.getListResponse("/api/users", filter)
                .then(function (resp) {
                resolve(resp);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    UserService.prototype.loadActiveUsers = function (filter) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.clientService.getListResponse("/api/users/active", filter)
                .then(function (resp) {
                resolve(resp);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    UserService.prototype.getDistributionLists = function (filter) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.clientService.getListResponse("/api/distros", filter)
                .then(function (resp) {
                resolve(resp);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    UserService.prototype.login = function (email, password, rememberMe) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var body = new http_1.HttpParams()
                .set('email', email)
                .set('password', password)
                .set('rememberme', rememberMe.toString());
            var siteUrl = "".concat(environment_1.environment.siteUri, "/api/v1/login");
            if (email.indexOf('@') === -1) {
                siteUrl += 'kiosk';
            }
            _this.http.post(siteUrl, body.toString(), {
                headers: new http_1.HttpHeaders()
                    .set('Content-Type', 'application/x-www-form-urlencoded')
                    .set('dashboard', 'true')
            }).subscribe(function (data) {
                if (data.successful) {
                    if (data.result && data.result !== '') {
                        _this.router.navigate(["/kiosk/".concat(data.result)]);
                    }
                    else {
                        _this.loadCurrentUser()
                            .then(function (usr) {
                            resolve(usr);
                        })
                            .catch(function (err) { return reject(err); });
                    }
                }
                else {
                    _this.errorReporter.addErrors(data.errors);
                    reject(data.errors[0].message);
                }
            }, function (err) {
                _this.errorReporter.addErrors(err.statusText);
                reject(err.statusText);
            });
        });
        return promise;
    };
    UserService.prototype.validateDeviceUser = function (user) {
        var errs = [];
        if (!user.firstName) {
            errs.push({ message: 'First Name is a required field.' });
        }
        if (!user.lastName) {
            errs.push({ message: 'Last Name is a required field.' });
        }
        if (!user.email) {
            errs.push({ message: 'Email is a required field.' });
        }
        else {
            var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
            if ((user.email.length <= 5 || !EMAIL_REGEXP.test(user.email))) {
                errs.push({ message: 'Invalid Email Address.' });
            }
        }
        if (!user.phoneNumber) {
            errs.push({ message: 'Phone Number is a required field.' });
        }
        else {
            var PHONE_NUMBER_REGEXP = /^\d{10}$/i;
            if ((user.phoneNumber.length !== 10 || !PHONE_NUMBER_REGEXP.test(user.phoneNumber))) {
                errs.push({ message: 'Please enter your phone number without and spaces, dashes, spaces.' });
            }
        }
        if (!user.password) {
            errs.push({ message: 'Password is a required field.' });
        }
        else {
            var PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d#&$@!+\-*]{8,}$$/i;
            if ((user.password.length <= 5 || !PASSWORD_REGEXP.test(user.password))) {
                // tslint:disable-next-line:max-line-length
                errs.push({ message: 'It must be at least 6 characters and include at least one lowercase letter, one uppercase letter, and one number and may contain the characters #,&,$,\@,!,+,-' });
            }
        }
        if (user.password !== user.confirmPassword) {
            errs.push({ message: 'Password and confirm password must match.' });
        }
        return errs;
    };
    UserService.prototype.onLoggedIn = function () {
        return this._isLoggedIn$.asObservable();
    };
    UserService.prototype.onUsers = function () {
        return this._users$.asObservable();
    };
    UserService.prototype.onUser = function () {
        return this._user$.asObservable();
    };
    UserService.prototype.onOrg = function () {
        return this._org$.asObservable();
    };
    UserService.prototype.getUsers = function () {
        return this._users;
    };
    UserService.prototype.getOrg = function () {
        return this._org;
    };
    UserService.prototype.getUser = function () {
        var user = window.localStorage.getItem("app_user");
        if (user) {
            return JSON.parse(user);
        }
        return undefined;
    };
    UserService.prototype.setUser = function (user) {
        if (user) {
            window.localStorage.setItem("app_user", JSON.stringify(user));
            this._user$.next(user);
            this.setOrg({ id: user.currentOrganization.id, name: user.currentOrganization.text });
        }
        else {
            window.localStorage.removeItem("app_user");
            this.setOrg(null);
            this._user$.next(null);
        }
    };
    UserService.prototype.addMediaResourceForUser = function (userId, mediaResourceEH) {
        this.clientService.post("/api/user/".concat(userId, "/mediaresource"), mediaResourceEH);
    };
    UserService.prototype.showWelcomeOnLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.clientService.request('/api/users/welcome/show/true');
                return [2 /*return*/];
            });
        });
    };
    UserService.prototype.hideWelcomeOnLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.clientService.request('/api/users/welcome/show/false');
                return [2 /*return*/];
            });
        });
    };
    UserService.prototype.setOrg = function (org) {
        if (org) {
            window.localStorage.setItem("app_user_org", JSON.stringify(org));
            this._org$.next(org);
        }
        else {
            this._org$.next(null);
            window.localStorage.removeItem("app_user_org");
        }
    };
    UserService = __decorate([
        (0, core_1.Injectable)()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
