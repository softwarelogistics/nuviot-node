import { LocalDataSource } from '../../../node_modules/ng2-smart-table/lib/data-source/local/local.data-source';
import { ErrorReporterService } from './error-reporter.service';
export declare class DeviceExplorerDataSourceService extends LocalDataSource {
    protected errorReporter: ErrorReporterService;
    lastRequestCount: number;
    constructor(errorReporter: ErrorReporterService);
    count(): number;
    getElements(): Promise<Devices.DeviceSummary>;
}
