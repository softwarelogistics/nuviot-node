import { NuviotClientService } from './nuviot-client.service';
export declare class DeviceGroupService {
    private client;
    constructor(client: NuviotClientService);
    getDeviceGroups(devicerepoid: string): Promise<Core.ListResponse<Devices.DeviceGroupSummary>>;
    createDeviceGroup(devicerepoid: string): Promise<Core.FormResult<Devices.DeviceGroup, Devices.DeviceGroupView>>;
    getDeviceGroup(deviceRepoId: string, deviceGroupId: string): Promise<Core.FormResult<Devices.DeviceGroup, Devices.DeviceGroupView>>;
    getSummaryDataForDeviceGroup(deviceRepoId: string, deviceGroupId: string): Promise<Core.ListResponse<Devices.DeviceSummaryData>>;
    insertDeviceGroup(group: Devices.DeviceGroup, devicerepoid: string): Promise<Core.InvokeResult>;
    updateDeviceGroup(group: Devices.DeviceGroup, devicerepoid: string): Promise<Core.InvokeResult>;
    deleteDeviceGroup(devicerepoid: string, deviceGroupId: string): Promise<Core.InvokeResult>;
    /**
     * @param deviceRepoId Add a Device to a Device Group
     * @param groupId
     * @param deviceId
     */
    addDeviceToGroup(deviceRepoId: string, groupId: string, deviceId: string): Promise<Core.InvokeResultEx<Devices.DeviceGroupEntry>>;
    removeDeviceFromGroup(deviceRepoId: string, groupId: string, deviceId: string): Promise<Core.InvokeResult>;
}
