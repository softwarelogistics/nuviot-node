"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceGroupService = void 0;
var core_1 = require("@angular/core");
var DeviceGroupService = /** @class */ (function () {
    function DeviceGroupService(client) {
        this.client = client;
    }
    DeviceGroupService.prototype.getDeviceGroups = function (devicerepoid) {
        return this.client.getListResponse("api/repo/".concat(devicerepoid, "/groups"));
    };
    DeviceGroupService.prototype.createDeviceGroup = function (devicerepoid) {
        return this.client.getFormResponse("api/repo/".concat(devicerepoid, "/group/factory"));
    };
    DeviceGroupService.prototype.getDeviceGroup = function (deviceRepoId, deviceGroupId) {
        return this.client.getFormResponse("api/repo/".concat(deviceRepoId, "/group/").concat(deviceGroupId));
    };
    DeviceGroupService.prototype.getSummaryDataForDeviceGroup = function (deviceRepoId, deviceGroupId) {
        return this.client.getListResponse("/api/repo/".concat(deviceRepoId, "/group/").concat(deviceGroupId, "/devices/summarydata"));
    };
    DeviceGroupService.prototype.insertDeviceGroup = function (group, devicerepoid) {
        return this.client.insert("/api/repo/".concat(devicerepoid, "/group"), group);
    };
    DeviceGroupService.prototype.updateDeviceGroup = function (group, devicerepoid) {
        return this.client.update("/api/repo/".concat(devicerepoid, "/group"), group);
    };
    DeviceGroupService.prototype.deleteDeviceGroup = function (devicerepoid, deviceGroupId) {
        return this.client.delete("/api/repo/".concat(devicerepoid, "/group/").concat(deviceGroupId));
    };
    /**
     * @param deviceRepoId Add a Device to a Device Group
     * @param groupId
     * @param deviceId
     */
    DeviceGroupService.prototype.addDeviceToGroup = function (deviceRepoId, groupId, deviceId) {
        return this.client.requestForInvokeResultEx("/api/repo/".concat(deviceRepoId, "/group/").concat(groupId, "/add/").concat(deviceId));
    };
    DeviceGroupService.prototype.removeDeviceFromGroup = function (deviceRepoId, groupId, deviceId) {
        return this.client.get("/api/repo/".concat(deviceRepoId, "/group/").concat(groupId, "/remove/").concat(deviceId));
    };
    DeviceGroupService = __decorate([
        (0, core_1.Injectable)()
    ], DeviceGroupService);
    return DeviceGroupService;
}());
exports.DeviceGroupService = DeviceGroupService;
