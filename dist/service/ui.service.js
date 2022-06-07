"use strict";
/// <reference path="../models/ui.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiService = void 0;
var core_1 = require("@angular/core");
var linqts_1 = require("linqts");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var UiService = /** @class */ (function () {
    function UiService(client, router) {
        this.client = client;
        this.router = router;
        this._currentAppsList$ = new ReplaySubject_1.ReplaySubject();
        this._currentApp$ = new ReplaySubject_1.ReplaySubject();
        this._currentKiosksList$ = new ReplaySubject_1.ReplaySubject();
        this._kioskViews$ = new ReplaySubject_1.ReplaySubject();
        this._currentKiosk$ = new ReplaySubject_1.ReplaySubject();
        this._currentKioskView$ = new ReplaySubject_1.ReplaySubject();
        this._dateRange$ = new ReplaySubject_1.ReplaySubject();
        this._currentDashboard$ = new ReplaySubject_1.ReplaySubject();
        this._currentView$ = new ReplaySubject_1.ReplaySubject();
        this._dashboards$ = new ReplaySubject_1.ReplaySubject();
        this._addedWidgets$ = new ReplaySubject_1.ReplaySubject(1);
    }
    UiService.prototype.createView = function () {
        return {
            name: '',
            title: '',
            key: '',
            icon: 'fa fa-document',
            foregroundColor: '#fff',
            backgroundColor: '#3996F2',
            isBeta: false,
            widgets: []
        };
    };
    UiService.prototype.newId = function () {
        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16).toUpperCase();
        });
    };
    UiService.prototype.createDashboard = function () {
        return this.client.request("/api/ui/dashboard/factory");
    };
    UiService.prototype.loadDashboards = function (appId, dashboardKey, viewKey, app) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (_this.currentApp && appId === _this.currentApp.id && _this._dashboards) {
                resolve(_this._dashboards);
                _this.setCurrentView(dashboardKey, viewKey);
            }
            else {
                _this.client.getListResponse("/api/ui/dashboards/".concat(appId))
                    .then(function (response) {
                    _this._dashboards = response.model;
                    if (app) {
                        app.dashboards = _this._dashboards;
                    }
                    else {
                        _this.currentApp.dashboards = _this._dashboards;
                    }
                    _this._dashboards$.next(response.model);
                    resolve(response.model);
                    _this.setCurrentView(dashboardKey, viewKey);
                })
                    .catch(function (err) {
                    reject(err);
                });
            }
        });
        return promise;
    };
    UiService.prototype.loadAllDashboards = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.getListResponse("/api/ui/dashboards")
                .then(function (response) {
                resolve(response.model);
            })
                .catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UiService.prototype.setApp = function (appId, dashboardKey, viewKey) {
        if (this.apps) {
            var app = this.apps.find(function (ap) { return ap.id === appId; });
            if (app) {
                this.loadDashboards(appId, dashboardKey, viewKey, app);
                this.currentApp = app;
                this.router.navigate(['app', { appid: appId }]);
                this._currentApp$.next(app);
            }
        }
        else {
            this.loadApps(appId, dashboardKey, viewKey);
        }
    };
    UiService.prototype.loadApps = function (appId, dashboardKey, viewKey) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.getListResponse('/api/ui/iotapps')
                .then(function (response) {
                _this.apps = response.model;
                _this.apps.unshift({
                    id: _this.deviceRepoAppId,
                    isReadOnly: true,
                    title: 'Device Explorer',
                    name: 'Device Explorer',
                    icon: 'fa fa-microchip',
                    foregroundColor: '#fff',
                    backgroundColor: '#3996F2',
                    key: 'deviceexplorer',
                    help: 'Explore and manage the devices in your device repositories.',
                    isBeta: false,
                    dashboards: []
                });
                _this._currentAppsList$.next(_this.apps);
                resolve(response.model);
                if (appId) {
                    var app = _this.apps.find(function (ap) { return ap.id === appId; });
                    if (app) {
                        _this.loadDashboards(appId, dashboardKey, viewKey);
                        _this._currentApp$.next(app);
                        _this.currentApp = app;
                    }
                    else {
                        _this.currentApp = null;
                    }
                }
            })
                .catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UiService.prototype.loadApp = function (appId, dashboardKey, viewKey) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (_this.currentApp && _this.currentApp.id === appId
                && _this.currentApp.dashboards
                && _this._currentDashboardKey === dashboardKey
                && _this._currentViewKey === viewKey) {
                resolve(_this.currentApp);
                return;
            }
            if (_this.apps) {
                _this.currentApp = _this.apps.find(function (ap) { return ap.id === appId; });
                if (_this.currentApp) {
                    _this._currentApp$.next(_this.currentApp);
                    resolve(_this.currentApp);
                    _this.loadDashboards(appId, dashboardKey, viewKey);
                }
            }
            else {
                _this.loadApps(appId, dashboardKey, viewKey)
                    .then(function (apps) { return resolve(_this.currentApp); });
            }
        });
        return promise;
    };
    UiService.prototype.getApp = function (appId) {
        return this.client.requestForInvokeResultEx("/api/ui/iotapp/".concat(appId));
    };
    UiService.prototype.createApp = function () {
        return this.client.requestForInvokeResultEx("/api/ui/iotapp/factory");
    };
    UiService.prototype.insertApp = function (app) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.insert("/api/ui/iotapp", app)
                .then(function (res) {
                _this.apps.push(app);
                resolve(res);
            }).catch(function (err) { return reject(err); });
        });
        return promise;
    };
    UiService.prototype.updateApp = function (app) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.update("/api/ui/iotapp", app)
                .then(function (res) {
                if (_this.apps) {
                    _this.apps = _this.apps.filter(function (ap) { return ap.id !== app.id; });
                    _this.apps.push(app);
                }
                resolve(res);
            }).catch(function (err) { return reject(err); });
        });
        return promise;
    };
    UiService.prototype.deleteApp = function (appId) {
        return this.client.delete("/api/ui/iotapp/".concat(appId));
    };
    UiService.prototype.insertDashboard = function (dashboard) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.insert("/api/ui/dashboard", dashboard)
                .then(function (response) {
                _this._dashboards.push(dashboard);
                _this._dashboards$.next(_this._dashboards);
                resolve(response);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    UiService.prototype.getDashboard = function (id) {
        return new linqts_1.List(this._dashboards).Where(function (itm) { return itm.id === id; }).FirstOrDefault();
    };
    UiService.prototype.setCurrentView = function (dashboardKey, viewKey) {
        if (dashboardKey !== this._currentDashboardKey || viewKey !== this._currentViewKey) {
            this._currentDashboardKey = dashboardKey;
            this._currentViewKey = viewKey;
            if (this._dashboards) {
                this._currentDashboard = new linqts_1.List(this._dashboards).Where(function (itm) { return itm.key === dashboardKey; }).FirstOrDefault();
                if (this._currentDashboard) {
                    this._currentDashboard$.next(this._currentDashboard);
                    this._currentView = new linqts_1.List(this._currentDashboard.views).Where(function (itm) { return itm.key === viewKey; }).FirstOrDefault();
                    this._currentView$.next(this._currentView);
                }
            }
            else if (this.currentApp) {
                this.loadDashboards(this.currentApp.id, this._currentDashboardKey, this._currentViewKey);
            }
            else {
                this.router.navigate(['apps']);
            }
        }
    };
    UiService.prototype.updateDashboard = function (dashboard) {
        return this.client.update("/api/ui/dashboard", dashboard);
    };
    UiService.prototype.updateCurrentDashboard = function () {
        return this.updateDashboard(this._currentDashboard);
    };
    UiService.prototype.removeViewById = function (dashboard, viewKey) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var view = new linqts_1.List(dashboard.views).Where(function (vw) { return vw.key === viewKey; }).FirstOrDefault();
            if (view) {
                var indexToRemove = dashboard.views.indexOf(view);
                if (indexToRemove > -1) {
                    dashboard.views.splice(indexToRemove, 1);
                    _this.updateDashboard(dashboard)
                        .then(function (data) { return resolve(data); })
                        .catch(function (err) { return reject(err); });
                }
            }
        });
        return promise;
    };
    UiService.prototype.navigateToAppsHome = function () {
        this.router.navigate(['apps']);
    };
    UiService.prototype.navigateToKiosksHome = function () {
        this.router.navigate(['kiosks']);
    };
    UiService.prototype.returnToCurrentView = function () {
        if (this._currentDashboardKey && this._currentViewKey) {
            this.router.navigate(['app', { appid: this.currentApp.id, dashboard: this._currentDashboardKey, view: this._currentViewKey }]);
        }
        else if (this.currentApp) {
            this.router.navigate(['app', { appid: this.currentApp.id }]);
        }
        else {
            this.router.navigate(['apps']);
        }
    };
    UiService.prototype.addWidgetToCurrentView = function (widgetTemplate) {
        var _this = this;
        if (!widgetTemplate) {
            throw new Error('Widget Template was Null');
        }
        var newWidget = {
            id: this.newId(),
            name: widgetTemplate.name,
            widgetId: widgetTemplate.widgetId,
            title: widgetTemplate.title,
            widgetAttributes: widgetTemplate.getDefaultWidgetAttributes(),
            order: this.getCurrentView().widgets.length + 1
        };
        console.log(newWidget);
        this.getCurrentView().widgets.push(newWidget);
        this.updateCurrentDashboard()
            .then(function (res) { return _this._addedWidgets$.next(newWidget); });
    };
    UiService.prototype.createWidget = function (name, help, key) {
        return this.client.request("/api/ui/widget/factory");
    };
    UiService.prototype.insertWidget = function (widget) {
        return this.client.insert("/api/ui/widget", widget);
    };
    UiService.prototype.updateWidget = function (widget) {
        return this.client.update("/api/ui/widget", widget);
    };
    UiService.prototype.onWidgetAddedToView = function () {
        return this._addedWidgets$.asObservable();
    };
    UiService.prototype.removeWidgetById = function (id) {
        var widget = this._currentView.widgets.find(function (wdg) { return wdg.id === id; });
        var widgetIndex = this._currentView.widgets.indexOf(widget);
        this._currentView.widgets.splice(widgetIndex, 1);
        this.updateCurrentDashboard();
    };
    UiService.prototype.reorderWidgets = function (ids) {
        var existingWidgets = this._currentView.widgets;
        this._currentView.widgets = [];
        var _loop_1 = function (id) {
            var widget = existingWidgets.find(function (wdg) { return wdg.id === id; });
            this_1._currentView.widgets.push(widget);
        };
        var this_1 = this;
        for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
            var id = ids_1[_i];
            _loop_1(id);
        }
        this.updateCurrentDashboard();
    };
    UiService.prototype.getWidgets = function (dashboardId, viewKey) {
        return this.client.getListResponse("/api/ui/dashboard/".concat(dashboardId, "/").concat(viewKey));
    };
    UiService.prototype.onDashboards = function () {
        return this._dashboards$.asObservable();
    };
    UiService.prototype.getDashboards = function () {
        return this._dashboards;
    };
    UiService.prototype.removeDashboardById = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.delete("/api/ui/dashboard/".concat(id))
                .then(function (res) {
                _this._dashboards = _this._dashboards.filter(function (itm) { return itm.id !== id; });
                _this._dashboards$.next(_this._dashboards);
                resolve(res);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    UiService.prototype.deviceSelected = function (repoid, deviceId) {
        if (this._currentDashboardKey && this._currentViewKey) {
            this.router.navigate(['app', {
                    appid: this.currentApp.id, dashboard: this._currentDashboardKey,
                    view: this._currentViewKey, deviceid: deviceId, repoid: repoid
                }]);
        }
        else if (this.currentApp) {
            this.router.navigate(['app', { appid: this.currentApp.id, deviceid: deviceId, repoid: repoid }]);
        }
        else {
            this.router.navigate(['apps', { deviceid: deviceId, repoid: repoid }]);
        }
    };
    UiService.prototype.clearApp = function () {
        this.currentApp = null;
        this._currentApp$.next(null);
    };
    UiService.prototype.clearView = function () {
        this._currentView = null;
        this._currentView$.next(null);
    };
    UiService.prototype.onDateRangeChanged = function () {
        return this._dateRange$.asObservable();
    };
    UiService.prototype.getDateRange = function () {
        if (this._dateRange) {
            var parts = this._dateRange.split('x');
            return {
                start: new Date(parseInt(parts[0], 10)),
                end: new Date(parseInt(parts[1], 10)),
                hasValue: true
            };
        }
        return {
            hasValue: true
        };
    };
    UiService.prototype.setDateRange = function (start, end) {
        if (start && end) {
            this._dateRange = "".concat(start.getTime(), "x").concat(end.getTime());
            this._dateRange$.next({
                start: start,
                end: end,
                hasValue: true
            });
        }
        else {
            this._dateRange = null;
            this._dateRange$.next({
                hasValue: false
            });
        }
    };
    UiService.prototype.onAppsLoaded = function () {
        return this._currentAppsList$.asObservable();
    };
    UiService.prototype.onCurrentApp = function () {
        return this._currentApp$.asObservable();
    };
    UiService.prototype.onCurrentDashboard = function () {
        return this._currentDashboard$.asObservable();
    };
    UiService.prototype.getCurrentDashboard = function () {
        return this._currentDashboard;
    };
    UiService.prototype.setCurrentDashboard = function (dashboard) {
        this._currentDashboard = dashboard;
        this._currentDashboard$.next(dashboard);
    };
    UiService.prototype.onCurrentView = function () {
        return this._currentView$.asObservable();
    };
    UiService.prototype.getCurrentView = function () {
        return this._currentView;
    };
    UiService.prototype.loadKioskViews = function (kioskId, viewKey, kiosk) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (_this.currentKiosk && kioskId === _this.currentKiosk.id && _this._kioskViews) {
                resolve(_this._kioskViews);
                _this.setCurrentKioskView(_this.currentKiosk.key, viewKey);
            }
            else {
                _this.client.getListResponse("/api/ui/kiosks/".concat(kioskId, "/views"))
                    .then(function (response) {
                    _this._kioskViews = response.model;
                    if (kiosk) {
                        kiosk.views = _this._kioskViews;
                    }
                    else {
                        _this.currentKiosk.views = _this._kioskViews;
                    }
                    _this._kioskViews$.next(response.model);
                    resolve(response.model);
                    _this.setCurrentKioskView(_this.currentKiosk.key, viewKey);
                })
                    .catch(function (err) {
                    reject(err);
                });
            }
        });
        return promise;
    };
    UiService.prototype.setCurrentKioskView = function (kioskKey, viewKey) {
        if (kioskKey !== this._currentKioskKey || viewKey !== this._currentKioskViewKey) {
            this._currentKioskKey = kioskKey;
            this._currentKioskViewKey = viewKey;
            if (this.kiosks) {
                this.currentKiosk = new linqts_1.List(this.kiosks).Where(function (itm) { return itm.key === kioskKey; }).FirstOrDefault();
                if (this.currentKiosk) {
                    this._currentKiosk$.next(this.currentKiosk);
                    this._currentKioskView = new linqts_1.List(this.currentKiosk.views).Where(function (itm) { return itm.key === viewKey; }).FirstOrDefault();
                    this._currentKioskView$.next(this._currentKioskView);
                }
            }
            else if (this.currentKiosk) {
                this.loadKioskViews(this.currentKiosk.id, this._currentKioskViewKey, this.currentKiosk);
            }
            else {
                this.router.navigate(['kiosks']);
            }
        }
    };
    UiService.prototype.setKiosk = function (kioskId, viewKey) {
        if (this.kiosks) {
            var kiosk = this.kiosks.find(function (k) { return k.id === kioskId; });
            if (kiosk) {
                this.loadKioskViews(kioskId, viewKey, kiosk);
                this.currentKiosk = kiosk;
                this.router.navigate(['kiosk', { kioskid: kioskId }]);
                this._currentKiosk$.next(kiosk);
            }
        }
        else {
            this.loadKiosks(kioskId, viewKey);
        }
    };
    UiService.prototype.loadKiosks = function (kioskId, viewKey) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.getListResponse('/api/ui/kiosks')
                .then(function (response) {
                _this.kiosks = response.model;
                _this._currentKiosksList$.next(_this.kiosks);
                resolve(response.model);
                if (kioskId) {
                    var kiosk = _this.kiosks.find(function (ap) { return ap.id === kioskId; });
                    if (kiosk) {
                        _this.loadKioskViews(kioskId, viewKey, kiosk);
                        _this._currentKiosk$.next(kiosk);
                        _this.currentKiosk = kiosk;
                    }
                    else {
                        _this.currentKiosk = null;
                    }
                }
            })
                .catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    UiService.prototype.loadKiosk = function (kioskId, viewKey) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (_this.currentKiosk && _this.currentKiosk.id === kioskId
                && _this.currentKiosk.viewDefinitions
                && _this._currentViewKey === viewKey) {
                resolve(_this.currentKiosk);
                return;
            }
            if (_this.kiosks) {
                _this.currentKiosk = _this.kiosks.find(function (ap) { return ap.id === kioskId; });
                if (_this.currentKiosk) {
                    _this._currentKiosk$.next(_this.currentKiosk);
                    resolve(_this.currentKiosk);
                    _this.loadKioskViews(kioskId, viewKey, _this.currentKiosk);
                }
            }
            else {
                _this.loadKiosks(kioskId, viewKey)
                    .then(function (kiosks) { return resolve(_this.currentKiosk); });
            }
        });
        return promise;
    };
    UiService.prototype.getKiosk = function (kioskId) {
        return this.client.requestForInvokeResultEx("/api/ui/kiosk/".concat(kioskId));
    };
    UiService.prototype.createKiosk = function () {
        return this.client.requestForInvokeResultEx("/api/ui/kiosk/factory");
    };
    UiService.prototype.insertKiosk = function (newKiosk) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.insert("/api/ui/kiosk", newKiosk)
                .then(function (res) {
                _this.kiosks.push(newKiosk);
                resolve(res);
            }).catch(function (err) { return reject(err); });
        });
        return promise;
    };
    UiService.prototype.updateKiosk = function (targetKiosk) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.client.update("/api/ui/kiosk", targetKiosk)
                .then(function (res) {
                if (_this.kiosks) {
                    _this.kiosks = _this.kiosks.filter(function (ap) { return ap.id !== targetKiosk.id; });
                    _this.kiosks.push(targetKiosk);
                }
                resolve(res);
            }).catch(function (err) { return reject(err); });
        });
        return promise;
    };
    UiService.prototype.deleteKiosk = function (kioskId) {
        return this.client.delete("/api/ui/kiosk/".concat(kioskId));
    };
    UiService = __decorate([
        (0, core_1.Injectable)()
    ], UiService);
    return UiService;
}());
exports.UiService = UiService;
