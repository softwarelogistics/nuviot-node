import { BehaviorSubject, Observable } from 'rxjs';
export declare class ErrorReporterService {
    constructor();
    private _errorMsgs;
    protected _errorMsgs$: BehaviorSubject<Core.ErrorMessage[]>;
    onErrMsgs(): Observable<Core.ErrorMessage[]>;
    addErrors(errs: Core.ErrorMessage[]): void;
    addError(err: Core.ErrorMessage): void;
    addErrorMessage(msg: string): void;
    addMessage(msg: string): void;
    addMessages(msgs: string[]): void;
    clearErrors(): void;
}
