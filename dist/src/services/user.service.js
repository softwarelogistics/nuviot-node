"use strict";
/// <reference path="../models/user.ts" />
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
exports.UserService = void 0;
const utils_1 = require("../core/utils");
const rxjs_1 = require("rxjs");
const utils_2 = require("../core/utils");
class UserService {
    constructor(http, clientService, errorReporter, router, _activatedRoute) {
        this.http = http;
        this.clientService = clientService;
        this.errorReporter = errorReporter;
        this.router = router;
        this._activatedRoute = _activatedRoute;
        this._isLoggedIn$ = new rxjs_1.ReplaySubject(0);
        this._org$ = new rxjs_1.ReplaySubject(null);
        this._user$ = new rxjs_1.ReplaySubject(null);
        this._users$ = new rxjs_1.ReplaySubject(null);
        console.log('create user service instance');
        if (this._activatedRoute.snapshot) {
            this.queryParams = Object.keys(this._activatedRoute.snapshot.queryParams).length > 0 ? this._activatedRoute.snapshot.queryParams : {};
            const paramOptions = {};
            if (this.hasParams()) {
                paramOptions['queryParamsHandling'] = 'preserve';
            }
            else {
                if (window.location.href.search) {
                    const vm = this;
                    location.search.substr(1).replace('==', '`').split('&').forEach(function (item) {
                        const parts = item.split('=');
                        if (parts[0] !== '') {
                            vm.queryParams[parts[0]] = parts[1].replace('`', '==');
                        }
                    });
                    if (this.hasParams()) {
                        paramOptions['queryParams'] = this.queryParams;
                    }
                }
            }
        }
    }
    get isLoggedIn() {
        return window.localStorage.getItem("is_logged_in") == "login_true";
    }
    set isLoggedIn(value) {
        this._isLoggedIn$.next(value);
        window.localStorage.setItem("is_logged_in", value ? "login_true" : "login_false");
    }
    loadCurrentUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.clientService.request('/api/user');
            this.setUser(response.model);
            this.isLoggedIn = true;
            return response.model;
        });
    }
    updateCoreInfo(coreUserInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clientService.update('/api/user/coreinfo', coreUserInfo);
        });
    }
    hasParams() {
        return Object.keys(this.queryParams).length > 0;
    }
    logout() {
        this.http.get(`${utils_1.environment.siteUri}/api/account/logout`)
            .then(result => {
        });
        this.setUser(null);
        this.isLoggedIn = false;
    }
    getOrgsForCurrentUser() {
        return this.clientService.getListResponse(`/api/user/orgs`);
    }
    acceptTermsAndConditions() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.clientService.request('/api/user/accepttc');
            if (result.successful) {
                this.setUser(result.result);
            }
            return result;
        });
    }
    changeOrganization(orgId) {
        const promise = new Promise((resolve, reject) => {
            this.clientService.get(`/api/org/${orgId}/change`)
                .then(result => {
                if (result.successful) {
                    this.loadCurrentUser()
                        .then(res => resolve(true))
                        .catch(err => reject(err));
                }
                else {
                    console.log(result.errors[0].message);
                    reject(result.errors[0].message);
                }
            })
                .catch(err => {
                if (reject) {
                    reject(false);
                }
            });
        });
        return promise;
    }
    loadUser(id) {
        return this.clientService.getFormResponse(`/api/user/${id}`);
    }
    updateUser(user) {
        return this.clientService.update(`/api/user`, user);
    }
    loadUsers(filter) {
        const promise = new Promise((resolve, reject) => {
            this.clientService.getListResponse(`/api/users`, filter)
                .then(resp => {
                resolve(resp);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    loadActiveUsers(filter) {
        const promise = new Promise((resolve, reject) => {
            this.clientService.getListResponse(`/api/users/active`, filter)
                .then(resp => {
                resolve(resp);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    getDistributionLists(filter) {
        const promise = new Promise((resolve, reject) => {
            this.clientService.getListResponse(`/api/distros`, filter)
                .then(resp => {
                resolve(resp);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    auth(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = {
                GrantType: 'password',
                AppInstanceId: utils_1.environment.appInstanceid,
                AppId: utils_1.environment.appId,
                DeviceId: utils_1.environment.deviceId,
                ClientType: 'mobileapp',
                Email: email,
                Password: password,
                UserName: email
            };
            let result = yield this.clientService.post('/api/v1/auth', request);
            if (result.successful) {
                var storage = new utils_1.NativeStorage();
                yield storage.setValue('access-token', result.result.accessToken);
            }
            return result;
        });
    }
    login(email, password, rememberMe) {
        const promise = new Promise((resolve, reject) => {
            const body = new utils_2.HttpParams()
                .set('email', email)
                .set('password', password)
                .set('rememberme', rememberMe.toString());
            let siteUrl = `${utils_1.environment.siteUri}/api/v1/login`;
            if (email.indexOf('@') === -1) {
                siteUrl += 'kiosk';
            }
            this.http.post(siteUrl, body.toString(), {
                headers: new utils_2.HttpHeaders()
                    .set('Content-Type', 'application/x-www-form-urlencoded')
                    .set('dashboard', 'true')
            }).then(data => {
                if (data.successful) {
                    if (data.result && data.result !== '') {
                        this.router.navigate([`/kiosk/${data.result}`]);
                    }
                    else {
                        this.loadCurrentUser()
                            .then(usr => {
                            resolve(usr);
                        })
                            .catch(err => reject(err));
                    }
                }
                else {
                    this.errorReporter.addErrors(data.errors);
                    reject(data.errors[0].message);
                }
            }, err => {
                this.errorReporter.addErrors(err.statusText);
                reject(err.statusText);
            });
        });
        return promise;
    }
    validateDeviceUser(user) {
        const errs = [];
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
            const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
            if ((user.email.length <= 5 || !EMAIL_REGEXP.test(user.email))) {
                errs.push({ message: 'Invalid Email Address.' });
            }
        }
        if (!user.phoneNumber) {
            errs.push({ message: 'Phone Number is a required field.' });
        }
        else {
            const PHONE_NUMBER_REGEXP = /^\d{10}$/i;
            if ((user.phoneNumber.length !== 10 || !PHONE_NUMBER_REGEXP.test(user.phoneNumber))) {
                errs.push({ message: 'Please enter your phone number without and spaces, dashes, spaces.' });
            }
        }
        if (!user.password) {
            errs.push({ message: 'Password is a required field.' });
        }
        else {
            const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d#&$@!+\-*]{8,}$$/i;
            if ((user.password.length <= 5 || !PASSWORD_REGEXP.test(user.password))) {
                // tslint:disable-next-line:max-line-length
                errs.push({ message: 'It must be at least 6 characters and include at least one lowercase letter, one uppercase letter, and one number and may contain the characters #,&,$,\@,!,+,-' });
            }
        }
        if (user.password !== user.confirmPassword) {
            errs.push({ message: 'Password and confirm password must match.' });
        }
        return errs;
    }
    onLoggedIn() {
        return this._isLoggedIn$.asObservable();
    }
    onUsers() {
        return this._users$.asObservable();
    }
    onUser() {
        return this._user$.asObservable();
    }
    onOrg() {
        return this._org$.asObservable();
    }
    getUsers() {
        return this._users;
    }
    getOrg() {
        return this._org;
    }
    getUser() {
        let user = window.localStorage.getItem("app_user");
        if (user) {
            return JSON.parse(user);
        }
        return undefined;
    }
    setUser(user) {
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
    }
    addMediaResourceForUser(userId, mediaResourceEH) {
        this.clientService.post(`/api/user/${userId}/mediaresource`, mediaResourceEH);
    }
    showWelcomeOnLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            this.clientService.request('/api/users/welcome/show/true');
        });
    }
    hideWelcomeOnLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            this.clientService.request('/api/users/welcome/show/false');
        });
    }
    setOrg(org) {
        if (org) {
            window.localStorage.setItem("app_user_org", JSON.stringify(org));
            this._org$.next(org);
        }
        else {
            this._org$.next(null);
            window.localStorage.removeItem("app_user_org");
        }
    }
}
exports.UserService = UserService;
