import DeviceDetail = Devices.DeviceDetail;

import { Observable } from 'rxjs';

import { ReplaySubject } from 'rxjs';
import { DeviceGroupService } from './device-group.service';
import { NuviotClientService } from './nuviot-client.service';


export class DevicesService {
  constructor(private deviceGroupService: DeviceGroupService,
    private nuviotClient: NuviotClientService) { }


  private _deviceIdForLogs: string;
  private _deviceId: string;
  private _repoId: string;

  private _device: Devices.DeviceDetail;
  private _deviceGroup: Devices.DeviceGroup;

  private _devices: Devices.DeviceSummary[] = [];
  private _deviceRepo: Devices.DeviceRepo;
  private _deviceRepos: Devices.DeviceRepoSummary[] = [];

  private _deviceGroups: Devices.DeviceGroupSummary[] = [];
  private _deviceGroups$ = new ReplaySubject<Devices.DeviceGroupSummary[]>();

  protected _device$ = new ReplaySubject<Devices.DeviceDetail>();
  protected _deviceCleared$ = new ReplaySubject<Devices.DeviceDetail>();
  protected _deviceLoading$ = new ReplaySubject<string>();
  protected _devices$ = new ReplaySubject<Devices.DeviceSummary[]>();
  protected _devicesLoading$ = new ReplaySubject<boolean>();
  protected _deviceRepo$ = new ReplaySubject<Devices.DeviceRepo>();
  protected _deviceGroup$ = new ReplaySubject<Devices.DeviceGroup>();
  protected _deviceRepos$ = new ReplaySubject<Devices.DeviceRepoSummary[]>();

  protected _deviceLogs$ = new ReplaySubject<Devices.DeviceLog[]>();
  protected _deviceLogCleared$ = new ReplaySubject<Devices.DeviceLog[]>();
  protected _deviceLogLoading$ = new ReplaySubject<string>();

  private _deviceNotificationSubscription$ = new ReplaySubject<Core.Notification>();
  private _deviceGroupNotificationSubscription$ = new ReplaySubject<Core.Notification>();
  private _deviceRepoNotificationSubscription$ = new ReplaySubject<Core.Notification>();

  private _deviceNotificationWebSocket: WebSocket;
  private _deviceGroupWebSocket: WebSocket;
  private _deviceRepoWebSocket: WebSocket;

  public loadDeviceRepositories(): Promise<Devices.DeviceRepoSummary[]> {
    const promise = new Promise<Devices.DeviceRepoSummary[]>((resolve, reject) => {
      this.nuviotClient.getListResponse<Devices.DeviceRepoSummary>('/api/devicerepos')
        .then(listResponse => {
          this.setDeviceRepos(listResponse.model);
          resolve(listResponse.model);
        })
        .catch(err => { });
    });

    return promise;
  }

  private deviceSafeInit(device: Devices.DeviceDetail) {
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

  createDevice(deviceRepoId: string): Promise<DeviceDetail> {
    const promise = new Promise<DeviceDetail>((resolve, reject) => {
      this.nuviotClient.getFormResponse<Devices.DeviceDetail, Devices.DeviceView>(`/api/device/${deviceRepoId}/factory`)
        .then(response => {
          this.deviceSafeInit(response.model);
          resolve(response.model);
        });
    });

    return promise;
  }

  getDeviceTypes(): Promise<Devices.DeviceTypeSummary[]> {
    const promise = new Promise<Devices.DeviceTypeSummary[]>((resolve, reject) => {
      this.nuviotClient.request<Core.ListResponse<Devices.DeviceTypeSummary>>(`/api/devicetypes`)
        .then(resp => resolve(resp.model));
    });

    return promise;
  }

  getFirmwares(): Promise<Devices.FirmwareSummary[]> {
    const promise = new Promise<Devices.FirmwareSummary[]>((resolve, reject) => {
      this.nuviotClient.request<Core.ListResponse<Devices.FirmwareSummary>>(`/api/firmwares`)
        .then(resp => resolve(resp.model));
    });

    return promise;
  }

  getFirmware(id: string): Promise<Devices.FirmwareDetail> {
    const promise = new Promise<Devices.FirmwareDetail>((resolve, reject) => {
      this.nuviotClient.getFormResponse<Devices.FirmwareDetail, Devices.FirmwareView>(`/api/firmware/${id}`)
        .then(resp => resolve(resp.model));
    });

    return promise;
  }

  getDeviceProperties(deviceConfigId: string): Promise<Devices.PropertyMetaData[]> {
    return this.nuviotClient.request<Devices.PropertyMetaData[]>(`/api/deviceconfig/${deviceConfigId}/properties`);
  }

  getDeviceConnectionEvents(deviceRepoId: string, deviceId: string): Promise<Core.ListResponse<Devices.DeviceConnectionEvent>> {
    return this.nuviotClient.request<Core.ListResponse<Devices.DeviceConnectionEvent>>(`/api/device/${deviceRepoId}/${deviceId}/connectionlog`);
  }

  public LoadRepoGroupsAndDevices(id: string, forceRefresh = false) {
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

      this.nuviotClient.getFormResponse<Devices.DeviceRepo, Devices.DeviceRepoView>(`/api/devicerepo/${id}`)
        .then(deviceRepoResponse => this.setDeviceRepo(deviceRepoResponse.model));

      this.nuviotClient.getListResponse<Devices.DeviceSummary>(`/api/devices/${id}`)
        .then(devicesListResponse =>  {
          this.setDevices(devicesListResponse.model);
          this.setDevicesLoading(false);
        });

      this.nuviotClient.getListResponse<Devices.DeviceGroupSummary>(`api/repo/${id}/groups`)
        .then(deviceListResponse => this.setDeviceGroups(deviceListResponse.model));
    } else {
      this.setDeviceRepo(this._deviceRepo);
      this.setDevices(this._devices);
      this.setDeviceGroups(this._deviceGroups);
    }
  }

  public loadDeviceRepo(repoId: string): Promise<Devices.DeviceRepo> {
    const promise = new Promise<Devices.DeviceRepo>((resolve, reject) => {
      this.nuviotClient.getFormResponse<Devices.DeviceRepo, Devices.DeviceRepoView>(`/api/devicerepo/${repoId}`)
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
  public loadDeviceOntoPage(repoId: string, deviceId: string) {
    if (deviceId !== this._deviceId) {
      this._deviceLoading$.next(null);
      this._deviceCleared$.next(null);

      const uri = `/api/device/${repoId}/${deviceId}/metadata`;
      this.nuviotClient.getFormResponse<Devices.DeviceDetail, Devices.DeviceView>(uri)
        .then(response => {
          this._deviceId = deviceId;
          this._repoId = repoId;

          /* Make any last minute initialization of potentially invalid data */
          this.deviceSafeInit(response.model);
          this.setDeviceDetail(response.model);
        });
    }
  }

  public updateRemoteDeviceProperties(repoId: string, deviceId: string): Promise<Core.InvokeResult> {
    const uri = `/api/device/remoteconfig/${repoId}/${deviceId}/all/send`;
    return this.nuviotClient.request<Core.InvokeResult>(uri);
  }

  public restartDevice(repoId: string, deviceId: string): Promise<Core.InvokeResult> {
    const uri = `/api/device/remoteconfig/${repoId}/${deviceId}/restart`;
    return this.nuviotClient.request<Core.InvokeResult>(uri);
  }

  public refreshDeviceTwin(repoId: string, deviceId: string): Promise<Core.InvokeResult> {
    const uri = `/api/device/remoteconfig/${repoId}/${deviceId}/query`;
    return this.nuviotClient.request<Core.InvokeResult>(uri);
  }

  public requestFirmwareUpdate(repoId: string, deviceId: string, firmwareId: string, revisionId: string) {
    const uri = `/api/device/remoteconfig/${repoId}/${deviceId}/firmware/${firmwareId}/revision/${revisionId}`;
    return this.nuviotClient.request<Core.InvokeResult>(uri);
  }

  public getFirmareHistory(repoId: string, deviceId: string): Promise<Devices.FirmwareDownloadRequest[]> {
    const promise = new Promise<Devices.FirmwareDownloadRequest[]>((resolve, reject) => {
      this.nuviotClient.getListResponse<Devices.FirmwareDownloadRequest>(`/api/firmware/history/${repoId}/${deviceId}`)
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
  public loadDeviceLogs(repoId: string, deviceId: string) {
    if (deviceId !== this._deviceIdForLogs) {
      const uri = `device/${repoId}/logs/${deviceId}`;
      this._deviceLogLoading$.next(null);
      this._deviceCleared$.next(null);
      this.nuviotClient.getListResponse<Devices.DeviceLog>(uri)
        .then(response => {
          this._deviceId = deviceId;
          this._repoId = repoId;
          this._deviceLogs$.next(response.model);
        });
    }
  }


  public downloadDeviceTypeResource(fileName: string, deviceTypeId: string, resourceId: string) {
    const uri = `/api/devicetype/${deviceTypeId}/resources/${resourceId}`;

    this.nuviotClient.getBlobResponse(uri, fileName);
  }

  /**
 * This method will load a device from the server and broadcast the device to
 * any pages that have a subscription.
 * @param repoId Repository Id
 * @param deviceId  Device Id
 */
  public getMediaItemsForDevice(repoId: string, deviceId: string): Promise<Core.ListResponse<Devices.MediaItem>> {
    const promise = new Promise<Core.ListResponse<Devices.MediaItem>>((resolve, reject) => {
      const uri = `/api/${repoId}/devices/${deviceId}/media`;
      this.nuviotClient.getListResponse<Devices.MediaItem>(uri)
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
  public getDevice(repoId: string, deviceId: string): Promise<Devices.DeviceDetail> {
    this.setDeviceDetail(null);
    this._deviceLoading$.next(null);
    const promise = new Promise<Devices.DeviceDetail>((resolve, reject) => {
      const uri = `/api/device/${repoId}/${deviceId}/metadata`;
      this.nuviotClient.getFormResponse<Devices.DeviceDetail, Devices.DeviceView>(uri)
        .then(response => {
          resolve(response.model);
          this.setDeviceDetail(response.model);
        })
        .catch(err => reject(err));
    });

    return promise;
  }


  public refreshDeviceData(repoId: string, deviceId: string) {
    const uri = `/api/device/${repoId}/${deviceId}/metadata`;
    this.nuviotClient.getFormResponse<Devices.DeviceDetail, Devices.DeviceView>(uri)
      .then(response => {
        this.setDeviceDetail(response.model);
      });
  }

  public loadDeviceGroup(repoId: string, groupId: string) {
    this.setDeviceGroup(null);
    this.deviceGroupService.getDeviceGroup(repoId, groupId)
      .then(group => this.setDeviceGroup(group.model));
  }

  public loadDeviceExceptions(repoId: string, deviceId: string): Promise<Core.ListResponse<Devices.DeviceException>> {
    const promise = new Promise<Core.ListResponse<Devices.DeviceException>>((resolve, reject) => {
      this.nuviotClient.getListResponse<Devices.DeviceException>(`/api/device/${repoId}/errors/${deviceId}`)
        .then(resp => {
          resolve(resp);
        })
        .catch((err) => reject(err));
    });

    return promise;
  }

  public clearDevice() {
    this.setDeviceDetail(null);
  }

  public clearDeviceErrorCode(repoId: string, deviceId: string, errorCode: string): Promise<Core.InvokeResult> {
    const promise = new Promise<Core.InvokeResult>((resolve, reject) => {
      this.nuviotClient.delete(`/api/device/${repoId}/${deviceId}/error/${errorCode}`)
        .then(resp => {
          resolve(resp);
        })
        .catch((err) => reject(err));
    });

    return promise;
  }

  public addDevice(device: Devices.DeviceDetail): Promise<Core.InvokeResult> {
    const promise = new Promise<Core.InvokeResult>((resolve, reject) => {
      this.nuviotClient.insert(`/api/device/${device.deviceRepository.id}`, device)
        .then(resp => {
          this.setDeviceDetail(null);
          resolve(resp);
        })
        .catch((err) => reject(err));
    });

    return promise;
  }

  public addUserDevice(user: Devices.DeviceUser): Promise<Core.InvokeResult> {
    const promise = new Promise<Core.InvokeResult>((resolve, reject) => {
      this.nuviotClient.insert(`/api/device/${user.device.deviceRepository.id}/userdevice`, user)
        .then(resp => {
          this.setDeviceDetail(null);
          resolve(resp);
        })
        .catch((err) => reject(err));
    });

    return promise;
  }


  public getUserDevices(repoid: string, filter: Core.ListFilter): Promise<Core.ListResponse<Users.AppUserSummary>> {
    const promise = new Promise<Core.ListResponse<Users.AppUserSummary>>((resolve, reject) => {
      this.nuviotClient.getListResponse<Users.AppUserSummary>(`/api/users/repo/${repoid}`, filter)
        .then(resp => {
          resolve(resp);
        })
        .catch((err) => reject(err));
    });

    return promise;
  }

  public updateDevice(device: Devices.DeviceDetail, clearDevice: boolean = true): Promise<Core.InvokeResult> {
    const promise = new Promise<Core.InvokeResult>((resolve, reject) => {
      this.nuviotClient.update(`/api/device/${device.deviceRepository.id}`, device)
        .then(resp => {
          if (clearDevice) {
            this.setDeviceDetail(null);
          } else {
            this.setDeviceDetail(device);
          }
          resolve(resp);
        })
        .catch((err) => reject(err));
    });

    return promise;
  }

  public addDeviceNote(deviceRepoId: string, deviceId: string, deviceNote: Devices.DeviceNote): Promise<Core.InvokeResult> {
    const promise = new Promise<Core.InvokeResult>((resolve, reject) => {

      this.nuviotClient.post(`/api/device/${deviceRepoId}/${deviceId}/note`, deviceNote)
        .then(resp => {
          resolve(resp);
        })
        .catch((err) => reject(err));
    });

    return promise;
  }

  public validateDevice(device: Devices.DeviceDetail): Core.ErrorMessage[] {
    const errs: Core.ErrorMessage[] = [];

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
    } else if (!device.deviceConfiguration || !device.deviceConfiguration.id) {
      errs.push({ message: 'Device Configuration is a required field (device type may be invalid)' });
    }

    return errs;
  }

  createDeviceSensor() : Promise<Core.FormResult<Devices.Sensor, Devices.SensorView>> {
    return this.nuviotClient.getFormResponse("/api/device/sensor/factory");
  }

  onDeviceNotificationSubscription(): Observable<Core.Notification> {
    return this._deviceNotificationSubscription$.asObservable();
  }

  onDeviceGroupNotificationSubscription(): Observable<Core.Notification> {
    return this._deviceGroupNotificationSubscription$.asObservable();
  }

  onDeviceRepoNotificationSubscription(): Observable<Core.Notification> {
    return this._deviceRepoNotificationSubscription$.asObservable();
  }

  onDevices(): Observable<Devices.DeviceSummary[]> {
    return this._devices$.asObservable();
  }

  onDevicesLoading(): Observable<boolean> {
    return this._devicesLoading$.asObservable();
  }

  onDeviceRepo(): Observable<Devices.DeviceRepo> {
    return this._deviceRepo$.asObservable();
  }

  onDeviceGroups(): Observable<Devices.DeviceGroupSummary[]> {
    return this._deviceGroups$.asObservable();
  }

  onDeviceGroup(): Observable<Devices.DeviceGroup> {
    return this._deviceGroup$.asObservable();
  }

  onDeviceRepos(): Observable<Devices.DeviceRepoSummary[]> {
    return this._deviceRepos$.asObservable();
  }

  onDeviceDetail(): Observable<Devices.DeviceDetail> {
    return this._device$.asObservable();
  }

  onDeviceCleared(): Observable<Devices.DeviceDetail> {
    return this._deviceCleared$.asObservable();
  }

  onDeviceLoading(): Observable<string> {
    return this._deviceLoading$.asObservable();
  }

  onDeviceLog(): Observable<Devices.DeviceLog[]> {
    return this._deviceLogs$.asObservable();
  }

  onDeviceLogCleared(): Observable<Devices.DeviceLog[]> {
    return this._deviceLogCleared$.asObservable();
  }

  onDeviceLogLoading(): Observable<string> {
    return this._deviceLogLoading$.asObservable();
  }

  getDeviceGroups(): Devices.DeviceGroupSummary[] {
    return this._deviceGroups;
  }

  getDevices(): Devices.DeviceSummary[] {
    return this._devices;
  }

  getDeviceRepo(): Devices.DeviceRepo {
    return this._deviceRepo;
  }

  getDeviceRepos(): Devices.DeviceRepoSummary[] {
    return this._deviceRepos;
  }

  getDeviceDetail(): Devices.DeviceDetail {
    return this._device;
  }

  setDevices(devices: Devices.DeviceSummary[]) {
    this._devices = devices;
    this._devices$.next(devices);
  }

  setDevicesLoading(isLoading: boolean) {
    this._devicesLoading$.next(isLoading);
  }

  setDeviceRepo(deviceRepoSummary: Devices.DeviceRepo) {
    this._deviceRepo = deviceRepoSummary;
    this._deviceRepo$.next(deviceRepoSummary);
  }

  setDeviceDetail(device: Devices.DeviceDetail) {
    if (device) {
      this._deviceId = device.id;
    } else {
      this._deviceId = null;
    }

    this._device = device;
    this._device$.next(device);
  }

  setDeviceGroups(deviceGroups: Devices.DeviceGroupSummary[]) {
    this._deviceGroups = deviceGroups;
    this._deviceGroups$.next(deviceGroups);
  }

  setDeviceRepos(deviceRepos: Devices.DeviceRepoSummary[]) {
    this._deviceRepos = deviceRepos;
    this._deviceRepos$.next(deviceRepos);
  }

  setDeviceGroup(deviceGroup: Devices.DeviceGroup) {
    this._deviceGroup = deviceGroup;
    this._deviceGroup$.next(deviceGroup);
  }
}
