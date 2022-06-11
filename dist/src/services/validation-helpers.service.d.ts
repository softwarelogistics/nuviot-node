import { ErrorReporterService } from './error-reporter.service';
export declare class ValidationHelpersService {
    private errorReporter;
    constructor(errorReporter: ErrorReporterService);
    validateKeyNameForInsert(model: Core.IKeyNamedModel, parentItems: Core.IKeyedModel[]): Core.InvokeResult;
    validateKeyNameForUpdate(model: Core.IKeyNamedModel, parentItems: Core.IKeyedModel[]): Core.InvokeResult;
}
