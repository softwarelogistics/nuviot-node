"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevicesService = void 0;
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var DevicesService = /** @class */ (function () {
    function DevicesService(http, deviceGroupService, notificationService, nuviotClient, errorReporter) {
        this.http = http;
        this.deviceGroupService = deviceGroupService;
        this.notificationService = notificationService;
        this.nuviotClient = nuviotClient;
        this.errorReporter = errorReporter;
        this._devices = [];
        this._deviceRepos = [];
        this._deviceGroups = [];
        this._deviceGroups$ = new ReplaySubject_1.ReplaySubject();
        this._device$ = new ReplaySubject_1.ReplaySubject();
        this._deviceCleared$ = new ReplaySubject_1.ReplaySubject();
        this._deviceLoading$ = new ReplaySubject_1.ReplaySubject();
        this._devices$ = new ReplaySubject_1.ReplaySubject();
        this._devicesLoading$ = new ReplaySubject_1.ReplaySubject();
        this._deviceRepo$ = new ReplaySubject_1.ReplaySubject();
        this._deviceGroup$ = new ReplaySubject_1.ReplaySubject();
        this._deviceRepos$ = new ReplaySubject_1.ReplaySubject();
        this._deviceLogs$ = new ReplaySubject_1.ReplaySubject();
        this._deviceLogCleared$ = new ReplaySubject_1.ReplaySubject();
        this._deviceLogLoading$ = new ReplaySubject_1.ReplaySubject();
        this._deviceNotificationSubscription$ = new ReplaySubject_1.ReplaySubject();
        this._deviceGroupNotificationSubscription$ = new ReplaySubject_1.ReplaySubject();
        this._deviceRepoNotificationSubscription$ = new ReplaySubject_1.ReplaySubject();
    }
    DevicesService.prototype.loadDeviceRepositories = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.getListResponse('/api/devicerepos')
                .then(function (listResponse) {
                _this.setDeviceRepos(listResponse.model);
                resolve(listResponse.model);
            })
                .catch(function (err) { });
        });
        return promise;
    };
    DevicesService.prototype.deviceSafeInit = function (device) {
        /* In some cases the data provided by the service may not be valid for use in the app, this method
         * can be used to initialize invalid properties */
        if (!device.primaryAccessKey) {
            device.primaryAccessKey = btoa(Math.random().toString(36).substring(2) +
                (new Date()).getTime().toString(36));
        }
        if (!device.secondaryAccessKey) {
            device.secondaryAccessKey = btoa(Math.random().toString(36).substring(2) +
                (new Date()).getTime().toString(36));
        }
        if (!device.properties) {
            device.properties = [];
        }
    };
    DevicesService.prototype.createDevice = function (deviceRepoId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.getFormResponse("/api/device/".concat(deviceRepoId, "/factory"))
                .then(function (response) {
                _this.deviceSafeInit(response.model);
                resolve(response.model);
            });
        });
        return promise;
    };
    DevicesService.prototype.getDeviceTypes = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.request("/api/devicetypes")
                .then(function (resp) { return resolve(resp.model); });
        });
        return promise;
    };
    DevicesService.prototype.getFirmwares = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.request("/api/firmwares")
                .then(function (resp) { return resolve(resp.model); });
        });
        return promise;
    };
    DevicesService.prototype.getFirmware = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.getFormResponse("/api/firmware/".concat(id))
                .then(function (resp) { return resolve(resp.model); });
        });
        return promise;
    };
    DevicesService.prototype.getDeviceProperties = function (deviceConfigId) {
        return this.nuviotClient.request("/api/deviceconfig/".concat(deviceConfigId, "/properties"));
    };
    DevicesService.prototype.getDeviceConnectionEvents = function (deviceRepoId, deviceId) {
        return this.nuviotClient.request("/api/device/".concat(deviceRepoId, "/").concat(deviceId, "/connectionlog"));
    };
    DevicesService.prototype.LoadRepoGroupsAndDevices = function (id, forceRefresh) {
        var _this = this;
        if (forceRefresh === void 0) { forceRefresh = false; }
        if (id !== this._repoId ||
            !this._deviceRepo ||
            !this._devices ||
            !this._deviceGroups ||
            forceRefresh) {
            this.setDeviceRepo(null);
            this.setDevices(null);
            this.setDeviceDetail(null);
            this.setDeviceGroups(null);
            this.setDevicesLoading(true);
            this._repoId = id;
            this.nuviotClient.getFormResponse("/api/devicerepo/".concat(id))
                .then(function (deviceRepoResponse) { return _this.setDeviceRepo(deviceRepoResponse.model); });
            this.nuviotClient.getListResponse("/api/devices/".concat(id))
                .then(function (devicesListResponse) {
                _this.setDevices(devicesListResponse.model);
                _this.setDevicesLoading(false);
            });
            this.nuviotClient.getListResponse("api/repo/".concat(id, "/groups"))
                .then(function (deviceListResponse) { return _this.setDeviceGroups(deviceListResponse.model); });
        }
        else {
            this.setDeviceRepo(this._deviceRepo);
            this.setDevices(this._devices);
            this.setDeviceGroups(this._deviceGroups);
        }
    };
    DevicesService.prototype.loadDeviceRepo = function (repoId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.getFormResponse("/api/devicerepo/".concat(repoId))
                .then(function (deviceRepoResponse) {
                _this.setDeviceRepo(deviceRepoResponse.model);
                resolve(deviceRepoResponse.model);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    /**
     * This method will load a device from the server and broadcast the device to
     * any pages that have a subscription.
     * @param repoId Repository Id
     * @param deviceId  Device Id
     */
    DevicesService.prototype.loadDeviceOntoPage = function (repoId, deviceId) {
        var _this = this;
        if (deviceId !== this._deviceId) {
            this._deviceLoading$.next(null);
            this._deviceCleared$.next(null);
            var uri = "/api/device/".concat(repoId, "/").concat(deviceId, "/metadata");
            this.nuviotClient.getFormResponse(uri)
                .then(function (response) {
                _this._deviceId = deviceId;
                _this._repoId = repoId;
                /* Make any last minute initialization of potentially invalid data */
                _this.deviceSafeInit(response.model);
                _this.setDeviceDetail(response.model);
            });
        }
    };
    DevicesService.prototype.updateRemoteDeviceProperties = function (repoId, deviceId) {
        var uri = "/api/device/remoteconfig/".concat(repoId, "/").concat(deviceId, "/all/send");
        return this.nuviotClient.request(uri);
    };
    DevicesService.prototype.restartDevice = function (repoId, deviceId) {
        var uri = "/api/device/remoteconfig/".concat(repoId, "/").concat(deviceId, "/restart");
        return this.nuviotClient.request(uri);
    };
    DevicesService.prototype.refreshDeviceTwin = function (repoId, deviceId) {
        var uri = "/api/device/remoteconfig/".concat(repoId, "/").concat(deviceId, "/query");
        return this.nuviotClient.request(uri);
    };
    DevicesService.prototype.requestFirmwareUpdate = function (repoId, deviceId, firmwareId, revisionId) {
        var uri = "/api/device/remoteconfig/".concat(repoId, "/").concat(deviceId, "/firmware/").concat(firmwareId, "/revision/").concat(revisionId);
        return this.nuviotClient.request(uri);
    };
    DevicesService.prototype.getFirmareHistory = function (repoId, deviceId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.getListResponse("/api/firmware/history/".concat(repoId, "/").concat(deviceId))
                .then(function (requests) {
                resolve(requests.model);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    /**
     * !!! not tested!!!
     * @param repoId
     * @param deviceId
     */
    DevicesService.prototype.loadDeviceLogs = function (repoId, deviceId) {
        var _this = this;
        if (deviceId !== this._deviceIdForLogs) {
            var uri = "device/".concat(repoId, "/logs/").concat(deviceId);
            this._deviceLogLoading$.next(null);
            this._deviceCleared$.next(null);
            this.nuviotClient.getListResponse(uri)
                .then(function (response) {
                _this._deviceId = deviceId;
                _this._repoId = repoId;
                _this._deviceLogs$.next(response.model);
            });
        }
    };
    DevicesService.prototype.downloadDeviceTypeResource = function (fileName, deviceTypeId, resourceId) {
        var uri = "/api/devicetype/".concat(deviceTypeId, "/resources/").concat(resourceId);
        this.nuviotClient.getBlobResponse(uri, fileName);
    };
    /**
   * This method will load a device from the server and broadcast the device to
   * any pages that have a subscription.
   * @param repoId Repository Id
   * @param deviceId  Device Id
   */
    DevicesService.prototype.getMediaItemsForDevice = function (repoId, deviceId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var uri = "/api/".concat(repoId, "/devices/").concat(deviceId, "/media");
            _this.nuviotClient.getListResponse(uri)
                .then(function (response) {
                resolve(response);
            })
                .catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    /**
     * This method will return a device to the caller via a promise.
     * @param repoId Repository Id
     * @param deviceId Device Id
     */
    DevicesService.prototype.getDevice = function (repoId, deviceId) {
        var _this = this;
        this.setDeviceDetail(null);
        this._deviceLoading$.next(null);
        var promise = new Promise(function (resolve, reject) {
            var uri = "/api/device/".concat(repoId, "/").concat(deviceId, "/metadata");
            _this.nuviotClient.getFormResponse(uri)
                .then(function (response) {
                resolve(response.model);
                _this.setDeviceDetail(response.model);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    DevicesService.prototype.refreshDeviceData = function (repoId, deviceId) {
        var _this = this;
        var uri = "/api/device/".concat(repoId, "/").concat(deviceId, "/metadata");
        this.nuviotClient.getFormResponse(uri)
            .then(function (response) {
            _this.setDeviceDetail(response.model);
        });
    };
    DevicesService.prototype.loadDeviceGroup = function (repoId, groupId) {
        var _this = this;
        this.setDeviceGroup(null);
        this.deviceGroupService.getDeviceGroup(repoId, groupId)
            .then(function (group) { return _this.setDeviceGroup(group.model); });
    };
    DevicesService.prototype.loadDeviceExceptions = function (repoId, deviceId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.getListResponse("/api/device/".concat(repoId, "/errors/").concat(deviceId))
                .then(function (resp) {
                resolve(resp);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    DevicesService.prototype.clearDevice = function () {
        this.setDeviceDetail(null);
    };
    DevicesService.prototype.clearDeviceErrorCode = function (repoId, deviceId, errorCode) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.delete("/api/device/".concat(repoId, "/").concat(deviceId, "/error/").concat(errorCode))
                .then(function (resp) {
                resolve(resp);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    DevicesService.prototype.addDevice = function (device) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.insert("/api/device/".concat(device.deviceRepository.id), device)
                .then(function (resp) {
                _this.setDeviceDetail(null);
                resolve(resp);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    DevicesService.prototype.addUserDevice = function (user) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.insert("/api/device/".concat(user.device.deviceRepository.id, "/userdevice"), user)
                .then(function (resp) {
                _this.setDeviceDetail(null);
                resolve(resp);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    DevicesService.prototype.getUserDevices = function (repoid, filter) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.getListResponse("/api/users/repo/".concat(repoid), filter)
                .then(function (resp) {
                resolve(resp);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    DevicesService.prototype.updateDevice = function (device, clearDevice) {
        var _this = this;
        if (clearDevice === void 0) { clearDevice = true; }
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.update("/api/device/".concat(device.deviceRepository.id), device)
                .then(function (resp) {
                if (clearDevice) {
                    _this.setDeviceDetail(null);
                }
                else {
                    _this.setDeviceDetail(device);
                }
                resolve(resp);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    DevicesService.prototype.addDeviceNote = function (deviceRepoId, deviceId, deviceNote) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.nuviotClient.post("/api/device/".concat(deviceRepoId, "/").concat(deviceId, "/note"), deviceNote)
                .then(function (resp) {
                resolve(resp);
            })
                .catch(function (err) { return reject(err); });
        });
        return promise;
    };
    DevicesService.prototype.validateDevice = function (device) {
        var errs = [];
        if (!device.name) {
            errs.push({ message: 'Device Name is a required field.' });
        }
        if (!device.deviceId) {
            errs.push({ message: 'Device Id is a required field.' });
        }
        if (!device.primaryAccessKey) {
            errs.push({ message: 'Primary access key is a required field.' });
        }
        if (!device.secondaryAccessKey) {
            errs.push({ message: 'Secondary access key is a required field.' });
        }
        if (!device.deviceType || !device.deviceType.id) {
            errs.push({ message: 'Device Type is a required Field.' });
        }
        else if (!device.deviceConfiguration || !device.deviceConfiguration.id) {
            errs.push({ message: 'Device Configuration is a required field (device type may be invalid)' });
        }
        return errs;
    };
    DevicesService.prototype.createDeviceSensor = function () {
        return this.nuviotClient.getFormResponse("/api/device/sensor/factory");
    };
    DevicesService.prototype.onDeviceNotificationSubscription = function () {
        return this._deviceNotificationSubscription$.asObservable();
    };
    DevicesService.prototype.onDeviceGroupNotificationSubscription = function () {
        return this._deviceGroupNotificationSubscription$.asObservable();
    };
    DevicesService.prototype.onDeviceRepoNotificationSubscription = function () {
        return this._deviceRepoNotificationSubscription$.asObservable();
    };
    DevicesService.prototype.onDevices = function () {
        return this._devices$.asObservable();
    };
    DevicesService.prototype.onDevicesLoading = function () {
        return this._devicesLoading$.asObservable();
    };
    DevicesService.prototype.onDeviceRepo = function () {
        return this._deviceRepo$.asObservable();
    };
    DevicesService.prototype.onDeviceGroups = function () {
        return this._deviceGroups$.asObservable();
    };
    DevicesService.prototype.onDeviceGroup = function () {
        return this._deviceGroup$.asObservable();
    };
    DevicesService.prototype.onDeviceRepos = function () {
        return this._deviceRepos$.asObservable();
    };
    DevicesService.prototype.onDeviceDetail = function () {
        return this._device$.asObservable();
    };
    DevicesService.prototype.onDeviceCleared = function () {
        return this._deviceCleared$.asObservable();
    };
    DevicesService.prototype.onDeviceLoading = function () {
        return this._deviceLoading$.asObservable();
    };
    DevicesService.prototype.onDeviceLog = function () {
        return this._deviceLogs$.asObservable();
    };
    DevicesService.prototype.onDeviceLogCleared = function () {
        return this._deviceLogCleared$.asObservable();
    };
    DevicesService.prototype.onDeviceLogLoading = function () {
        return this._deviceLogLoading$.asObservable();
    };
    DevicesService.prototype.getDeviceGroups = function () {
        return this._deviceGroups;
    };
    DevicesService.prototype.getDevices = function () {
        return this._devices;
    };
    DevicesService.prototype.getDeviceRepo = function () {
        return this._deviceRepo;
    };
    DevicesService.prototype.getDeviceRepos = function () {
        return this._deviceRepos;
    };
    DevicesService.prototype.getDeviceDetail = function () {
        return this._device;
    };
    DevicesService.prototype.setDevices = function (devices) {
        this._devices = devices;
        this._devices$.next(devices);
    };
    DevicesService.prototype.setDevicesLoading = function (isLoading) {
        this._devicesLoading$.next(isLoading);
    };
    DevicesService.prototype.setDeviceRepo = function (deviceRepoSummary) {
        this._deviceRepo = deviceRepoSummary;
        this._deviceRepo$.next(deviceRepoSummary);
    };
    DevicesService.prototype.setDeviceDetail = function (device) {
        if (device) {
            this._deviceId = device.id;
        }
        else {
            this._deviceId = null;
        }
        this._device = device;
        this._device$.next(device);
    };
    DevicesService.prototype.setDeviceGroups = function (deviceGroups) {
        this._deviceGroups = deviceGroups;
        this._deviceGroups$.next(deviceGroups);
    };
    DevicesService.prototype.setDeviceRepos = function (deviceRepos) {
        this._deviceRepos = deviceRepos;
        this._deviceRepos$.next(deviceRepos);
    };
    DevicesService.prototype.setDeviceGroup = function (deviceGroup) {
        this._deviceGroup = deviceGroup;
        this._deviceGroup$.next(deviceGroup);
    };
    DevicesService = __decorate([
        (0, core_1.Injectable)()
    ], DevicesService);
    return DevicesService;
}());
exports.DevicesService = DevicesService;
