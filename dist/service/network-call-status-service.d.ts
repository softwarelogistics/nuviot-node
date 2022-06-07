import { Observable } from 'rxjs/Observable';
export declare class NetworkCallStatusService {
    constructor();
    _activeCallCount: number;
    private _loadingMessages;
    protected _activeCalls: any;
    protected _endCalls: any;
    onCallBegin(): Observable<String[]>;
    onCallEnd(): Observable<String[]>;
    beginCall(): void;
    endCall(): void;
}
