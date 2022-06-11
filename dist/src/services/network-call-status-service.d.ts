import { BehaviorSubject, Observable } from 'rxjs';
export declare class NetworkCallStatusService {
    constructor();
    _activeCallCount: number;
    private _loadingMessages;
    protected _activeCalls: BehaviorSubject<String[]>;
    protected _endCalls: BehaviorSubject<String[]>;
    onCallBegin(): Observable<String[]>;
    onCallEnd(): Observable<String[]>;
    beginCall(): void;
    endCall(): void;
}
