import { HttpClient } from '@angular/common/http';
import { ErrorReporterService } from './error-reporter.service';
import 'rxjs/add/operator/toPromise';
import { NetworkCallStatusService } from './network-call-status-service';
export declare class NuviotClientService {
    private http;
    private networkCallService;
    private errorReporter;
    constructor(http: HttpClient, networkCallService: NetworkCallStatusService, errorReporter: ErrorReporterService);
    getListResponse<TData>(path: string, filter?: Core.ListFilter): Promise<Core.ListResponse<TData>>;
    getMarkDownContent(path: string): Promise<string>;
    getBlobResponse(path: string, fileName: string): Promise<Blob>;
    getDateFilterHeaders(start: string, end: string): any[];
    requestForInvokeResultEx<TData>(path: string): Promise<Core.InvokeResultEx<TData>>;
    request<TData>(path: string): Promise<TData>;
    get(path: string): Promise<Core.InvokeResult>;
    getFormResponse<TModel, TView>(path: string): Promise<Core.FormResult<TModel, TView>>;
    post<TModel, TResponse>(path: string, model: TModel): Promise<Core.InvokeResultEx<TResponse>>;
    insert<TModel>(path: string, model: TModel): Promise<Core.InvokeResult>;
    postWithResponse<TModel, TResponse>(path: string, model: TModel): Promise<Core.InvokeResultEx<TResponse>>;
    postForListResponse<TModel, TResponse>(path: string, model: TModel): Promise<Core.ListResponse<TResponse>>;
    updateWithResponse<TModel, TResponse>(path: string, model: TModel): Promise<Core.InvokeResultEx<TResponse>>;
    update<TModel>(path: string, model: TModel): Promise<Core.InvokeResult>;
    delete<TModel>(path: string): Promise<Core.InvokeResult>;
    deleteWithResponse<TResponse>(path: string): Promise<Core.InvokeResultEx<TResponse>>;
}
