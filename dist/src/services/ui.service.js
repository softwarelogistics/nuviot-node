"use strict";
/// <reference path="../models/ui.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiService = void 0;
const rxjs_1 = require("rxjs");
class UiService {
    constructor(client, router) {
        this.client = client;
        this.router = router;
        this._currentAppsList$ = new rxjs_1.ReplaySubject();
        this._currentApp$ = new rxjs_1.ReplaySubject();
        this._currentKiosksList$ = new rxjs_1.ReplaySubject();
        this._kioskViews$ = new rxjs_1.ReplaySubject();
        this._currentKiosk$ = new rxjs_1.ReplaySubject();
        this._currentKioskView$ = new rxjs_1.ReplaySubject();
        this._dateRange$ = new rxjs_1.ReplaySubject();
        this._currentDashboard$ = new rxjs_1.ReplaySubject();
        this._currentView$ = new rxjs_1.ReplaySubject();
        this._dashboards$ = new rxjs_1.ReplaySubject();
        this._addedWidgets$ = new rxjs_1.ReplaySubject(1);
    }
    createView() {
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
    }
    newId() {
        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16).toUpperCase();
        });
    }
    createDashboard() {
        return this.client.request(`/api/ui/dashboard/factory`);
    }
    loadDashboards(appId, dashboardKey, viewKey, app) {
        const promise = new Promise((resolve, reject) => {
            if (this.currentApp && appId === this.currentApp.id && this._dashboards) {
                resolve(this._dashboards);
                this.setCurrentView(dashboardKey, viewKey);
            }
            else {
                this.client.getListResponse(`/api/ui/dashboards/${appId}`)
                    .then((response) => {
                    this._dashboards = response.model;
                    if (app) {
                        app.dashboards = this._dashboards;
                    }
                    else {
                        this.currentApp.dashboards = this._dashboards;
                    }
                    this._dashboards$.next(response.model);
                    resolve(response.model);
                    this.setCurrentView(dashboardKey, viewKey);
                })
                    .catch((err) => {
                    reject(err);
                });
            }
        });
        return promise;
    }
    loadAllDashboards() {
        const promise = new Promise((resolve, reject) => {
            this.client.getListResponse(`/api/ui/dashboards`)
                .then((response) => {
                resolve(response.model);
            })
                .catch((err) => {
                reject(err);
            });
        });
        return promise;
    }
    setApp(appId, dashboardKey, viewKey) {
        if (this.apps) {
            const app = this.apps.find(ap => ap.id === appId);
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
    }
    loadApps(appId, dashboardKey, viewKey) {
        const promise = new Promise((resolve, reject) => {
            this.client.getListResponse('/api/ui/iotapps')
                .then((response) => {
                this.apps = response.model;
                this.apps.unshift({
                    id: this.deviceRepoAppId,
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
                this._currentAppsList$.next(this.apps);
                resolve(response.model);
                if (appId) {
                    const app = this.apps.find(ap => ap.id === appId);
                    if (app) {
                        this.loadDashboards(appId, dashboardKey, viewKey);
                        this._currentApp$.next(app);
                        this.currentApp = app;
                    }
                    else {
                        this.currentApp = null;
                    }
                }
            })
                .catch((err) => {
                reject(err);
            });
        });
        return promise;
    }
    loadApp(appId, dashboardKey, viewKey) {
        const promise = new Promise((resolve, reject) => {
            if (this.currentApp && this.currentApp.id === appId
                && this.currentApp.dashboards
                && this._currentDashboardKey === dashboardKey
                && this._currentViewKey === viewKey) {
                resolve(this.currentApp);
                return;
            }
            if (this.apps) {
                this.currentApp = this.apps.find(ap => ap.id === appId);
                if (this.currentApp) {
                    this._currentApp$.next(this.currentApp);
                    resolve(this.currentApp);
                    this.loadDashboards(appId, dashboardKey, viewKey);
                }
            }
            else {
                this.loadApps(appId, dashboardKey, viewKey)
                    .then(apps => resolve(this.currentApp));
            }
        });
        return promise;
    }
    getApp(appId) {
        return this.client.requestForInvokeResultEx(`/api/ui/iotapp/${appId}`);
    }
    createApp() {
        return this.client.requestForInvokeResultEx(`/api/ui/iotapp/factory`);
    }
    insertApp(app) {
        const promise = new Promise((resolve, reject) => {
            this.client.insert(`/api/ui/iotapp`, app)
                .then(res => {
                this.apps.push(app);
                resolve(res);
            }).catch(err => reject(err));
        });
        return promise;
    }
    updateApp(app) {
        const promise = new Promise((resolve, reject) => {
            this.client.update(`/api/ui/iotapp`, app)
                .then(res => {
                if (this.apps) {
                    this.apps = this.apps.filter(ap => ap.id !== app.id);
                    this.apps.push(app);
                }
                resolve(res);
            }).catch(err => reject(err));
        });
        return promise;
    }
    deleteApp(appId) {
        return this.client.delete(`/api/ui/iotapp/${appId}`);
    }
    insertDashboard(dashboard) {
        const promise = new Promise((resolve, reject) => {
            this.client.insert(`/api/ui/dashboard`, dashboard)
                .then(response => {
                this._dashboards.push(dashboard);
                this._dashboards$.next(this._dashboards);
                resolve(response);
            })
                .catch(err => reject(err));
        });
        return promise;
    }
    getDashboard(id) {
        return this._dashboards.find(itm => itm.id === id);
    }
    setCurrentView(dashboardKey, viewKey) {
        if (dashboardKey !== this._currentDashboardKey || viewKey !== this._currentViewKey) {
            this._currentDashboardKey = dashboardKey;
            this._currentViewKey = viewKey;
            if (this._dashboards) {
                this._currentDashboard = this._dashboards.find(itm => itm.key === dashboardKey);
                if (this._currentDashboard) {
                    this._currentDashboard$.next(this._currentDashboard);
                    this._currentView = this._currentDashboard.views.find(itm => itm.key === viewKey);
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
    }
    updateDashboard(dashboard) {
        return this.client.update(`/api/ui/dashboard`, dashboard);
    }
    updateCurrentDashboard() {
        return this.updateDashboard(this._currentDashboard);
    }
    removeViewById(dashboard, viewKey) {
        const promise = new Promise((resolve, reject) => {
            const view = dashboard.views.find(vw => vw.key === viewKey);
            if (view) {
                const indexToRemove = dashboard.views.indexOf(view);
                if (indexToRemove > -1) {
                    dashboard.views.splice(indexToRemove, 1);
                    this.updateDashboard(dashboard)
                        .then(data => resolve(data))
                        .catch(err => reject(err));
                }
            }
        });
        return promise;
    }
    navigateToAppsHome() {
        this.router.navigate(['apps']);
    }
    navigateToKiosksHome() {
        this.router.navigate(['kiosks']);
    }
    returnToCurrentView() {
        if (this._currentDashboardKey && this._currentViewKey) {
            this.router.navigate(['app', { appid: this.currentApp.id, dashboard: this._currentDashboardKey, view: this._currentViewKey }]);
        }
        else if (this.currentApp) {
            this.router.navigate(['app', { appid: this.currentApp.id }]);
        }
        else {
            this.router.navigate(['apps']);
        }
    }
    addWidgetToCurrentView(widgetTemplate) {
        if (!widgetTemplate) {
            throw new Error('Widget Template was Null');
        }
        const newWidget = {
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
            .then(res => this._addedWidgets$.next(newWidget));
    }
    createWidget(name, help, key) {
        return this.client.request(`/api/ui/widget/factory`);
    }
    insertWidget(widget) {
        return this.client.insert(`/api/ui/widget`, widget);
    }
    updateWidget(widget) {
        return this.client.update(`/api/ui/widget`, widget);
    }
    onWidgetAddedToView() {
        return this._addedWidgets$.asObservable();
    }
    removeWidgetById(id) {
        const widget = this._currentView.widgets.find(wdg => wdg.id === id);
        const widgetIndex = this._currentView.widgets.indexOf(widget);
        this._currentView.widgets.splice(widgetIndex, 1);
        this.updateCurrentDashboard();
    }
    reorderWidgets(ids) {
        const existingWidgets = this._currentView.widgets;
        this._currentView.widgets = [];
        for (const id of ids) {
            const widget = existingWidgets.find(wdg => wdg.id === id);
            this._currentView.widgets.push(widget);
        }
        this.updateCurrentDashboard();
    }
    getWidgets(dashboardId, viewKey) {
        return this.client.getListResponse(`/api/ui/dashboard/${dashboardId}/${viewKey}`);
    }
    onDashboards() {
        return this._dashboards$.asObservable();
    }
    getDashboards() {
        return this._dashboards;
    }
    removeDashboardById(id) {
        const promise = new Promise((resolve, reject) => {
            this.client.delete(`/api/ui/dashboard/${id}`)
                .then(res => {
                this._dashboards = this._dashboards.filter(itm => itm.id !== id);
                this._dashboards$.next(this._dashboards);
                resolve(res);
            })
                .catch(err => reject(err));
        });
        return promise;
    }
    deviceSelected(repoid, deviceId) {
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
    }
    clearApp() {
        this.currentApp = null;
        this._currentApp$.next(null);
    }
    clearView() {
        this._currentView = null;
        this._currentView$.next(null);
    }
    onDateRangeChanged() {
        return this._dateRange$.asObservable();
    }
    getDateRange() {
        if (this._dateRange) {
            const parts = this._dateRange.split('x');
            return {
                start: new Date(parseInt(parts[0], 10)),
                end: new Date(parseInt(parts[1], 10)),
                hasValue: true
            };
        }
        return {
            hasValue: true
        };
    }
    setDateRange(start, end) {
        if (start && end) {
            this._dateRange = `${start.getTime()}x${end.getTime()}`;
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
    }
    onAppsLoaded() {
        return this._currentAppsList$.asObservable();
    }
    onCurrentApp() {
        return this._currentApp$.asObservable();
    }
    onCurrentDashboard() {
        return this._currentDashboard$.asObservable();
    }
    getCurrentDashboard() {
        return this._currentDashboard;
    }
    setCurrentDashboard(dashboard) {
        this._currentDashboard = dashboard;
        this._currentDashboard$.next(dashboard);
    }
    onCurrentView() {
        return this._currentView$.asObservable();
    }
    getCurrentView() {
        return this._currentView;
    }
    loadKioskViews(kioskId, viewKey, kiosk) {
        const promise = new Promise((resolve, reject) => {
            if (this.currentKiosk && kioskId === this.currentKiosk.id && this._kioskViews) {
                resolve(this._kioskViews);
                this.setCurrentKioskView(this.currentKiosk.key, viewKey);
            }
            else {
                this.client.getListResponse(`/api/ui/kiosks/${kioskId}/views`)
                    .then((response) => {
                    this._kioskViews = response.model;
                    if (kiosk) {
                        kiosk.views = this._kioskViews;
                    }
                    else {
                        this.currentKiosk.views = this._kioskViews;
                    }
                    this._kioskViews$.next(response.model);
                    resolve(response.model);
                    this.setCurrentKioskView(this.currentKiosk.key, viewKey);
                })
                    .catch((err) => {
                    reject(err);
                });
            }
        });
        return promise;
    }
    setCurrentKioskView(kioskKey, viewKey) {
        if (kioskKey !== this._currentKioskKey || viewKey !== this._currentKioskViewKey) {
            this._currentKioskKey = kioskKey;
            this._currentKioskViewKey = viewKey;
            if (this.kiosks) {
                this.currentKiosk = this.kiosks.find(itm => itm.key === kioskKey);
                if (this.currentKiosk) {
                    this._currentKiosk$.next(this.currentKiosk);
                    this._currentKioskView = (this.currentKiosk.views).find(itm => itm.key === viewKey);
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
    }
    setKiosk(kioskId, viewKey) {
        if (this.kiosks) {
            const kiosk = this.kiosks.find(k => k.id === kioskId);
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
    }
    loadKiosks(kioskId, viewKey) {
        const promise = new Promise((resolve, reject) => {
            this.client.getListResponse('/api/ui/kiosks')
                .then((response) => {
                this.kiosks = response.model;
                this._currentKiosksList$.next(this.kiosks);
                resolve(response.model);
                if (kioskId) {
                    const kiosk = this.kiosks.find(ap => ap.id === kioskId);
                    if (kiosk) {
                        this.loadKioskViews(kioskId, viewKey, kiosk);
                        this._currentKiosk$.next(kiosk);
                        this.currentKiosk = kiosk;
                    }
                    else {
                        this.currentKiosk = null;
                    }
                }
            })
                .catch((err) => {
                reject(err);
            });
        });
        return promise;
    }
    loadKiosk(kioskId, viewKey) {
        const promise = new Promise((resolve, reject) => {
            if (this.currentKiosk && this.currentKiosk.id === kioskId
                && this.currentKiosk.viewDefinitions
                && this._currentViewKey === viewKey) {
                resolve(this.currentKiosk);
                return;
            }
            if (this.kiosks) {
                this.currentKiosk = this.kiosks.find(ap => ap.id === kioskId);
                if (this.currentKiosk) {
                    this._currentKiosk$.next(this.currentKiosk);
                    resolve(this.currentKiosk);
                    this.loadKioskViews(kioskId, viewKey, this.currentKiosk);
                }
            }
            else {
                this.loadKiosks(kioskId, viewKey)
                    .then(kiosks => resolve(this.currentKiosk));
            }
        });
        return promise;
    }
    getKiosk(kioskId) {
        return this.client.requestForInvokeResultEx(`/api/ui/kiosk/${kioskId}`);
    }
    createKiosk() {
        return this.client.requestForInvokeResultEx(`/api/ui/kiosk/factory`);
    }
    insertKiosk(newKiosk) {
        const promise = new Promise((resolve, reject) => {
            this.client.insert(`/api/ui/kiosk`, newKiosk)
                .then(res => {
                this.kiosks.push(newKiosk);
                resolve(res);
            }).catch(err => reject(err));
        });
        return promise;
    }
    updateKiosk(targetKiosk) {
        const promise = new Promise((resolve, reject) => {
            this.client.update(`/api/ui/kiosk`, targetKiosk)
                .then(res => {
                if (this.kiosks) {
                    this.kiosks = this.kiosks.filter(ap => ap.id !== targetKiosk.id);
                    this.kiosks.push(targetKiosk);
                }
                resolve(res);
            }).catch(err => reject(err));
        });
        return promise;
    }
    deleteKiosk(kioskId) {
        return this.client.delete(`/api/ui/kiosk/${kioskId}`);
    }
}
exports.UiService = UiService;
