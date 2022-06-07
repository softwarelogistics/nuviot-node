"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceGroupService = void 0;
class DeviceGroupService {
    constructor(client) {
        this.client = client;
    }
    getDeviceGroups(devicerepoid) {
        return this.client.getListResponse(`api/repo/${devicerepoid}/groups`);
    }
    createDeviceGroup(devicerepoid) {
        return this.client.getFormResponse(`api/repo/${devicerepoid}/group/factory`);
    }
    getDeviceGroup(deviceRepoId, deviceGroupId) {
        return this.client.getFormResponse(`api/repo/${deviceRepoId}/group/${deviceGroupId}`);
    }
    getSummaryDataForDeviceGroup(deviceRepoId, deviceGroupId) {
        return this.client.getListResponse(`/api/repo/${deviceRepoId}/group/${deviceGroupId}/devices/summarydata`);
    }
    insertDeviceGroup(group, devicerepoid) {
        return this.client.insert(`/api/repo/${devicerepoid}/group`, group);
    }
    updateDeviceGroup(group, devicerepoid) {
        return this.client.update(`/api/repo/${devicerepoid}/group`, group);
    }
    deleteDeviceGroup(devicerepoid, deviceGroupId) {
        return this.client.delete(`/api/repo/${devicerepoid}/group/${deviceGroupId}`);
    }
    /**
     * @param deviceRepoId Add a Device to a Device Group
     * @param groupId
     * @param deviceId
     */
    addDeviceToGroup(deviceRepoId, groupId, deviceId) {
        return this.client.requestForInvokeResultEx(`/api/repo/${deviceRepoId}/group/${groupId}/add/${deviceId}`);
    }
    removeDeviceFromGroup(deviceRepoId, groupId, deviceId) {
        return this.client.get(`/api/repo/${deviceRepoId}/group/${groupId}/remove/${deviceId}`);
    }
}
exports.DeviceGroupService = DeviceGroupService;
