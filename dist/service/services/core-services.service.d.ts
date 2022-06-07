export declare class CoreServices {
    constructor();
    isValidID(id: string): boolean;
    invokeSuccess(): Core.InvokeResult;
    invokeError(err: any): Core.InvokeResult;
}
