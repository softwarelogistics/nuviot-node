import DeviceDetail = Devices.DeviceDetail;
import { Observable } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { DeviceGroupService } from './device-group.service';
import { NuviotClientService } from './nuviot-client.service';
export declare class DevicesService {
    private deviceGroupService;
    private nuviotClient;
    constructor(deviceGroupService: DeviceGroupService, nuviotClient: NuviotClientService);
    private _deviceIdForLogs;
    private _deviceId;
    private _repoId;
    private _device;
    private _deviceGroup;
    private _devices;
    private _deviceRepo;
    private _deviceRepos;
    private _deviceGroups;
    private _deviceGroups$;
    protected _device$: ReplaySubject<DeviceDetail>;
    protected _deviceCleared$: ReplaySubject<DeviceDetail>;
    protected _deviceLoading$: ReplaySubject<string>;
    protected _devices$: ReplaySubject<Devices.DeviceSummary[]>;
    protected _devicesLoading$: ReplaySubject<boolean>;
    protected _deviceRepo$: ReplaySubject<Devices.DeviceRepo>;
    protected _deviceGroup$: ReplaySubject<Devices.DeviceGroup>;
    protected _deviceRepos$: ReplaySubject<Devices.DeviceRepoSummary[]>;
    protected _deviceLogs$: ReplaySubject<Devices.DeviceLog[]>;
    protected _deviceLogCleared$: ReplaySubject<Devices.DeviceLog[]>;
    protected _deviceLogLoading$: ReplaySubject<string>;
    private _deviceNotificationSubscription$;
    private _deviceGroupNotificationSubscription$;
    private _deviceRepoNotificationSubscription$;
    private _deviceNotificationWebSocket;
    private _deviceGroupWebSocket;
    private _deviceRepoWebSocket;
    loadDeviceRepositories(): Promise<Devices.DeviceRepoSummary[]>;
    private deviceSafeInit;
    createDevice(deviceRepoId: string): Promise<DeviceDetail>;
    getDeviceTypes(): Promise<Devices.DeviceTypeSummary[]>;
    getFirmwares(): Promise<Devices.FirmwareSummary[]>;
    getFirmware(id: string): Promise<Devices.FirmwareDetail>;
    getDeviceProperties(deviceConfigId: string): Promise<Devices.PropertyMetaData[]>;
    getDeviceConnectionEvents(deviceRepoId: string, deviceId: string): Promise<Core.ListResponse<Devices.DeviceConnectionEvent>>;
    LoadRepoGroupsAndDevices(id: string, forceRefresh?: boolean): void;
    loadDeviceRepo(repoId: string): Promise<Devices.DeviceRepo>;
    /**
     * This method will load a device from the server and broadcast the device to
     * any pages that have a subscription.
     * @param repoId Repository Id
     * @param deviceId  Device Id
     */
    loadDeviceOntoPage(repoId: string, deviceId: string): void;
    updateRemoteDeviceProperties(repoId: string, deviceId: string): Promise<Core.InvokeResult>;
    restartDevice(repoId: string, deviceId: string): Promise<Core.InvokeResult>;
    refreshDeviceTwin(repoId: string, deviceId: string): Promise<Core.InvokeResult>;
    requestFirmwareUpdate(repoId: string, deviceId: string, firmwareId: string, revisionId: string): Promise<Core.InvokeResult>;
    getFirmareHistory(repoId: string, deviceId: string): Promise<Devices.FirmwareDownloadRequest[]>;
    /**
     * !!! not tested!!!
     * @param repoId
     * @param deviceId
     */
    loadDeviceLogs(repoId: string, deviceId: string): void;
    downloadDeviceTypeResource(fileName: string, deviceTypeId: string, resourceId: string): void;
    /**
   * This method will load a device from the server and broadcast the device to
   * any pages that have a subscription.
   * @param repoId Repository Id
   * @param deviceId  Device Id
   */
    getMediaItemsForDevice(repoId: string, deviceId: string): Promise<Core.ListResponse<Devices.MediaItem>>;
    /**
     * This method will return a device to the caller via a promise.
     * @param repoId Repository Id
     * @param deviceId Device Id
     */
    getDevice(repoId: string, deviceId: string): Promise<Devices.DeviceDetail>;
    refreshDeviceData(repoId: string, deviceId: string): void;
    loadDeviceGroup(repoId: string, groupId: string): void;
    loadDeviceExceptions(repoId: string, deviceId: string): Promise<Core.ListResponse<Devices.DeviceException>>;
    clearDevice(): void;
    clearDeviceErrorCode(repoId: string, deviceId: string, errorCode: string): Promise<Core.InvokeResult>;
    addDevice(device: Devices.DeviceDetail): Promise<Core.InvokeResult>;
    addUserDevice(user: Devices.DeviceUser): Promise<Core.InvokeResult>;
    getUserDevices(repoid: string, filter: Core.ListFilter): Promise<Core.ListResponse<Users.AppUserSummary>>;
    updateDevice(device: Devices.DeviceDetail, clearDevice?: boolean): Promise<Core.InvokeResult>;
    addDeviceNote(deviceRepoId: string, deviceId: string, deviceNote: Devices.DeviceNote): Promise<Core.InvokeResult>;
    validateDevice(device: Devices.DeviceDetail): Core.ErrorMessage[];
    createDeviceSensor(): Promise<Core.FormResult<Devices.Sensor, Devices.SensorView>>;
    onDeviceNotificationSubscription(): Observable<Core.Notification>;
    onDeviceGroupNotificationSubscription(): Observable<Core.Notification>;
    onDeviceRepoNotificationSubscription(): Observable<Core.Notification>;
    onDevices(): Observable<Devices.DeviceSummary[]>;
    onDevicesLoading(): Observable<boolean>;
    onDeviceRepo(): Observable<Devices.DeviceRepo>;
    onDeviceGroups(): Observable<Devices.DeviceGroupSummary[]>;
    onDeviceGroup(): Observable<Devices.DeviceGroup>;
    onDeviceRepos(): Observable<Devices.DeviceRepoSummary[]>;
    onDeviceDetail(): Observable<Devices.DeviceDetail>;
    onDeviceCleared(): Observable<Devices.DeviceDetail>;
    onDeviceLoading(): Observable<string>;
    onDeviceLog(): Observable<Devices.DeviceLog[]>;
    onDeviceLogCleared(): Observable<Devices.DeviceLog[]>;
    onDeviceLogLoading(): Observable<string>;
    getDeviceGroups(): Devices.DeviceGroupSummary[];
    getDevices(): Devices.DeviceSummary[];
    getDeviceRepo(): Devices.DeviceRepo;
    getDeviceRepos(): Devices.DeviceRepoSummary[];
    getDeviceDetail(): Devices.DeviceDetail;
    setDevices(devices: Devices.DeviceSummary[]): void;
    setDevicesLoading(isLoading: boolean): void;
    setDeviceRepo(deviceRepoSummary: Devices.DeviceRepo): void;
    setDeviceDetail(device: Devices.DeviceDetail): void;
    setDeviceGroups(deviceGroups: Devices.DeviceGroupSummary[]): void;
    setDeviceRepos(deviceRepos: Devices.DeviceRepoSummary[]): void;
    setDeviceGroup(deviceGroup: Devices.DeviceGroup): void;
}
