"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevicesService = void 0;
const rxjs_1 = require("rxjs");
class DevicesService {
    constructor(deviceGroupService, nuviotClient) {
        this.deviceGroupService = deviceGroupService;
        this.nuviotClient = nuviotClient;
        this._devices = [];
        this._deviceRepos = [];
        this._deviceGroups = [];
        this._deviceGroups$ = new rxjs_1.ReplaySubject();
        this._device$ = new rxjs_1.ReplaySubject();
        this._deviceCleared$ = new rxjs_1.ReplaySubject();
        this._deviceLoading$ = new rxjs_1.ReplaySubject();
        this._devices$ = new rxjs_1.ReplaySubject();
        this._devicesLoading$ = new rxjs_1.ReplaySubject();
        this._deviceRepo$ = new rxjs_1.ReplaySubject();
        this._deviceGroup$ = new rxjs_1.ReplaySubject();
        this._deviceRepos$ = new rxjs_1.ReplaySubject();
        this._deviceLogs$ = new rxjs_1.ReplaySubject();
        this._deviceLogCleared$ = new rxjs_1.ReplaySubject();
        this._deviceLogLoading$ = new rxjs_1.ReplaySubject();
        this._deviceNotificationSubscription$ = new rxjs_1.ReplaySubject();
        this._deviceGroupNotificationSubscription$ = new rxjs_1.ReplaySubject();
        this._deviceRepoNotificationSubscription$ = new rxjs_1.ReplaySubject();
    }
    loadDeviceRepositories() {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.getListResponse('/api/devicerepos')
                .then(listResponse => {
                this.setDeviceRepos(listResponse.model);
                resolve(listResponse.model);
            })
                .catch(err => { });
        });
        return promise;
    }
    deviceSafeInit(device) {
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
    }
    createDevice(deviceRepoId) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.getFormResponse(`/api/device/${deviceRepoId}/factory`)
                .then(response => {
                this.deviceSafeInit(response.model);
                resolve(response.model);
            });
        });
        return promise;
    }
    getDeviceTypes() {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.request(`/api/devicetypes`)
                .then(resp => resolve(resp.model));
        });
        return promise;
    }
    getFirmwares() {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.request(`/api/firmwares`)
                .then(resp => resolve(resp.model));
        });
        return promise;
    }
    getFirmware(id) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.getFormResponse(`/api/firmware/${id}`)
                .then(resp => resolve(resp.model));
        });
        return promise;
    }
    getDeviceProperties(deviceConfigId) {
        return this.nuviotClient.request(`/api/deviceconfig/${deviceConfigId}/properties`);
    }
    getDeviceConnectionEvents(deviceRepoId, deviceId) {
        return this.nuviotClient.request(`/api/device/${deviceRepoId}/${deviceId}/connectionlog`);
    }
    LoadRepoGroupsAndDevices(id, forceRefresh = false) {
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
            this.nuviotClient.getFormResponse(`/api/devicerepo/${id}`)
                .then(deviceRepoResponse => this.setDeviceRepo(deviceRepoResponse.model));
            this.nuviotClient.getListResponse(`/api/devices/${id}`)
                .then(devicesListResponse => {
                this.setDevices(devicesListResponse.model);
                this.setDevicesLoading(false);
            });
            this.nuviotClient.getListResponse(`api/repo/${id}/groups`)
                .then(deviceListResponse => this.setDeviceGroups(deviceListResponse.model));
        }
        else {
            this.setDeviceRepo(this._deviceRepo);
            this.setDevices(this._devices);
            this.setDeviceGroups(this._deviceGroups);
        }
    }
    loadDeviceRepo(repoId) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.getFormResponse(`/api/devicerepo/${repoId}`)
                .then(deviceRepoResponse => {
                this.setDeviceRepo(deviceRepoResponse.model);
                resolve(deviceRepoResponse.model);
            })
                .catch(err => reject(err));
        });
        return promise;
    }
    /**
     * This method will load a device from the server and broadcast the device to
     * any pages that have a subscription.
     * @param repoId Repository Id
     * @param deviceId  Device Id
     */
    loadDeviceOntoPage(repoId, deviceId) {
        if (deviceId !== this._deviceId) {
            this._deviceLoading$.next(null);
            this._deviceCleared$.next(null);
            const uri = `/api/device/${repoId}/${deviceId}/metadata`;
            this.nuviotClient.getFormResponse(uri)
                .then(response => {
                this._deviceId = deviceId;
                this._repoId = repoId;
                /* Make any last minute initialization of potentially invalid data */
                this.deviceSafeInit(response.model);
                this.setDeviceDetail(response.model);
            });
        }
    }
    updateRemoteDeviceProperties(repoId, deviceId) {
        const uri = `/api/device/remoteconfig/${repoId}/${deviceId}/all/send`;
        return this.nuviotClient.request(uri);
    }
    restartDevice(repoId, deviceId) {
        const uri = `/api/device/remoteconfig/${repoId}/${deviceId}/restart`;
        return this.nuviotClient.request(uri);
    }
    refreshDeviceTwin(repoId, deviceId) {
        const uri = `/api/device/remoteconfig/${repoId}/${deviceId}/query`;
        return this.nuviotClient.request(uri);
    }
    requestFirmwareUpdate(repoId, deviceId, firmwareId, revisionId) {
        const uri = `/api/device/remoteconfig/${repoId}/${deviceId}/firmware/${firmwareId}/revision/${revisionId}`;
        return this.nuviotClient.request(uri);
    }
    getFirmareHistory(repoId, deviceId) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.getListResponse(`/api/firmware/history/${repoId}/${deviceId}`)
                .then(requests => {
                resolve(requests.model);
            })
                .catch(err => reject(err));
        });
        return promise;
    }
    /**
     * !!! not tested!!!
     * @param repoId
     * @param deviceId
     */
    loadDeviceLogs(repoId, deviceId) {
        if (deviceId !== this._deviceIdForLogs) {
            const uri = `device/${repoId}/logs/${deviceId}`;
            this._deviceLogLoading$.next(null);
            this._deviceCleared$.next(null);
            this.nuviotClient.getListResponse(uri)
                .then(response => {
                this._deviceId = deviceId;
                this._repoId = repoId;
                this._deviceLogs$.next(response.model);
            });
        }
    }
    downloadDeviceTypeResource(fileName, deviceTypeId, resourceId) {
        const uri = `/api/devicetype/${deviceTypeId}/resources/${resourceId}`;
        this.nuviotClient.getBlobResponse(uri, fileName);
    }
    /**
   * This method will load a device from the server and broadcast the device to
   * any pages that have a subscription.
   * @param repoId Repository Id
   * @param deviceId  Device Id
   */
    getMediaItemsForDevice(repoId, deviceId) {
        const promise = new Promise((resolve, reject) => {
            const uri = `/api/${repoId}/devices/${deviceId}/media`;
            this.nuviotClient.getListResponse(uri)
                .then(response => {
                resolve(response);
            })
                .catch(err => {
                reject(err);
            });
        });
        return promise;
    }
    /**
     * This method will return a device to the caller via a promise.
     * @param repoId Repository Id
     * @param deviceId Device Id
     */
    getDevice(repoId, deviceId) {
        this.setDeviceDetail(null);
        this._deviceLoading$.next(null);
        const promise = new Promise((resolve, reject) => {
            const uri = `/api/device/${repoId}/${deviceId}/metadata`;
            this.nuviotClient.getFormResponse(uri)
                .then(response => {
                resolve(response.model);
                this.setDeviceDetail(response.model);
            })
                .catch(err => reject(err));
        });
        return promise;
    }
    refreshDeviceData(repoId, deviceId) {
        const uri = `/api/device/${repoId}/${deviceId}/metadata`;
        this.nuviotClient.getFormResponse(uri)
            .then(response => {
            this.setDeviceDetail(response.model);
        });
    }
    loadDeviceGroup(repoId, groupId) {
        this.setDeviceGroup(null);
        this.deviceGroupService.getDeviceGroup(repoId, groupId)
            .then(group => this.setDeviceGroup(group.model));
    }
    loadDeviceExceptions(repoId, deviceId) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.getListResponse(`/api/device/${repoId}/errors/${deviceId}`)
                .then(resp => {
                resolve(resp);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    clearDevice() {
        this.setDeviceDetail(null);
    }
    clearDeviceErrorCode(repoId, deviceId, errorCode) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.delete(`/api/device/${repoId}/${deviceId}/error/${errorCode}`)
                .then(resp => {
                resolve(resp);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    addDevice(device) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.insert(`/api/device/${device.deviceRepository.id}`, device)
                .then(resp => {
                this.setDeviceDetail(null);
                resolve(resp);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    addUserDevice(user) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.insert(`/api/device/${user.device.deviceRepository.id}/userdevice`, user)
                .then(resp => {
                this.setDeviceDetail(null);
                resolve(resp);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    getUserDevices(repoid, filter) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.getListResponse(`/api/users/repo/${repoid}`, filter)
                .then(resp => {
                resolve(resp);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    updateDevice(device, clearDevice = true) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.update(`/api/device/${device.deviceRepository.id}`, device)
                .then(resp => {
                if (clearDevice) {
                    this.setDeviceDetail(null);
                }
                else {
                    this.setDeviceDetail(device);
                }
                resolve(resp);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    addDeviceNote(deviceRepoId, deviceId, deviceNote) {
        const promise = new Promise((resolve, reject) => {
            this.nuviotClient.post(`/api/device/${deviceRepoId}/${deviceId}/note`, deviceNote)
                .then(resp => {
                resolve(resp);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    validateDevice(device) {
        const errs = [];
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
    }
    createDeviceSensor() {
        return this.nuviotClient.getFormResponse("/api/device/sensor/factory");
    }
    onDeviceNotificationSubscription() {
        return this._deviceNotificationSubscription$.asObservable();
    }
    onDeviceGroupNotificationSubscription() {
        return this._deviceGroupNotificationSubscription$.asObservable();
    }
    onDeviceRepoNotificationSubscription() {
        return this._deviceRepoNotificationSubscription$.asObservable();
    }
    onDevices() {
        return this._devices$.asObservable();
    }
    onDevicesLoading() {
        return this._devicesLoading$.asObservable();
    }
    onDeviceRepo() {
        return this._deviceRepo$.asObservable();
    }
    onDeviceGroups() {
        return this._deviceGroups$.asObservable();
    }
    onDeviceGroup() {
        return this._deviceGroup$.asObservable();
    }
    onDeviceRepos() {
        return this._deviceRepos$.asObservable();
    }
    onDeviceDetail() {
        return this._device$.asObservable();
    }
    onDeviceCleared() {
        return this._deviceCleared$.asObservable();
    }
    onDeviceLoading() {
        return this._deviceLoading$.asObservable();
    }
    onDeviceLog() {
        return this._deviceLogs$.asObservable();
    }
    onDeviceLogCleared() {
        return this._deviceLogCleared$.asObservable();
    }
    onDeviceLogLoading() {
        return this._deviceLogLoading$.asObservable();
    }
    getDeviceGroups() {
        return this._deviceGroups;
    }
    getDevices() {
        return this._devices;
    }
    getDeviceRepo() {
        return this._deviceRepo;
    }
    getDeviceRepos() {
        return this._deviceRepos;
    }
    getDeviceDetail() {
        return this._device;
    }
    setDevices(devices) {
        this._devices = devices;
        this._devices$.next(devices);
    }
    setDevicesLoading(isLoading) {
        this._devicesLoading$.next(isLoading);
    }
    setDeviceRepo(deviceRepoSummary) {
        this._deviceRepo = deviceRepoSummary;
        this._deviceRepo$.next(deviceRepoSummary);
    }
    setDeviceDetail(device) {
        if (device) {
            this._deviceId = device.id;
        }
        else {
            this._deviceId = null;
        }
        this._device = device;
        this._device$.next(device);
    }
    setDeviceGroups(deviceGroups) {
        this._deviceGroups = deviceGroups;
        this._deviceGroups$.next(deviceGroups);
    }
    setDeviceRepos(deviceRepos) {
        this._deviceRepos = deviceRepos;
        this._deviceRepos$.next(deviceRepos);
    }
    setDeviceGroup(deviceGroup) {
        this._deviceGroup = deviceGroup;
        this._deviceGroup$.next(deviceGroup);
    }
}
exports.DevicesService = DevicesService;
