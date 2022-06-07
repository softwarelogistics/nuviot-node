import { NuviotClientService } from './nuviot-client.service';
import { ErrorReporterService } from './error-reporter.service';
import { DataStream, DataStreamSummary, GeneratedReport, ReportSummary, Report, ScheduledReport, ScheduledReportView, ScheduledReportSummary, ReportExecutionRequest, DeviceGeneratedReport } from '../models/reporting';
export declare class ReportingService {
    private client;
    private errorReporter;
    constructor(client: NuviotClientService, errorReporter: ErrorReporterService);
    getReports(): Promise<Core.ListResponse<ReportSummary>>;
    getReport(id: string): Promise<Report>;
    getScheduledReport(id: string): Promise<Core.FormResult<ScheduledReport, ScheduledReportView>>;
    queueForExecution(reportId: string, request: ReportExecutionRequest): Promise<string>;
    deleteGeneratedReport(reportId: string, genertedReportId: string): Promise<Core.InvokeResult>;
    getScheduledReports(): Promise<Core.ListResponse<ScheduledReportSummary>>;
    deleteSchedueledReport(id: string): Promise<Core.InvokeResult>;
    getScheduledReportsForReport(id: string): Promise<Core.ListResponse<ScheduledReportSummary>>;
    getGeneratedReports(reportId: string): Promise<Core.ListResponse<GeneratedReport>>;
    getDeviceGeneratedReports(deviceId: string, continuationToken: string): Promise<Core.ListResponse<DeviceGeneratedReport>>;
    getDataStreams(): Promise<Core.ListResponse<DataStreamSummary>>;
    getDataStream(id: string): Promise<DataStream>;
    getStreamData(dataStreamId: string, deviceId: string, filter: Core.ListFilter): Promise<Core.ListResponse<any>>;
}
