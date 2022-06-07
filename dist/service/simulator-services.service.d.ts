import { HttpClient } from '@angular/common/http';
import { NotificationService } from './notification.service';
import { NuviotClientService } from './nuviot-client.service';
import { ErrorReporterService } from './error-reporter.service';
export declare class SimulatorServices {
    private http;
    private notificationService;
    private nuviotClient;
    private errorReporter;
    constructor(http: HttpClient, notificationService: NotificationService, nuviotClient: NuviotClientService, errorReporter: ErrorReporterService);
    addSimulator: any;
}
