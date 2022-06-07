import { Observable } from 'rxjs';
import { NuviotClientService } from './nuviot-client.service';
import { DeviceMessageDefinitionSummary, DeviceMessageDefinition, DeviceMessageDefinitionView, SevenSegementParseResult } from '../models/seven-seg.models';
import { ErrorReporterService } from './error-reporter.service';
export declare class SevenSegmentService {
    private client;
    private errorReporter;
    deviceMessageTypes: DeviceMessageDefinitionSummary[];
    deviceMessageType: DeviceMessageDefinition;
    private deviceMessageTypes$;
    private deviceMessageType$;
    constructor(client: NuviotClientService, errorReporter: ErrorReporterService);
    getSevenSegementMessages(): Promise<Core.ListResponse<DeviceMessageDefinitionSummary>>;
    getSevenSegementMessage(id: string): Promise<Core.FormResult<DeviceMessageDefinition, DeviceMessageDefinitionView>>;
    testSevenSegementMessage(message: DeviceMessageDefinition): Promise<SevenSegementParseResult[]>;
    addSevenSegementMessage(message: DeviceMessageDefinition): Promise<Core.InvokeResult>;
    createSevenSegementMessage(): Promise<DeviceMessageDefinition>;
    updateSevenSegementMessage(message: DeviceMessageDefinition): Promise<Core.InvokeResult>;
    onCurrentMessageDefinition(): Observable<DeviceMessageDefinition>;
    onMessageDefinitions(): Observable<DeviceMessageDefinitionSummary[]>;
}
