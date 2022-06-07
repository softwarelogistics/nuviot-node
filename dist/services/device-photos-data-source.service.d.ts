import { HttpClient } from '@angular/common/http';
import { LocalDataSource } from '../../../node_modules/ng2-smart-table/lib/data-source/local/local.data-source';
export declare class DevicePhotosDataSourceService extends LocalDataSource {
    protected http: HttpClient;
    lastRequestCount: number;
    constructor(http: HttpClient);
    count(): number;
    getElements(): Promise<any>;
}
