"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreServices = void 0;
class CoreServices {
    constructor() { }
    isValidID(id) {
        if (!id) {
            return false;
        }
        const result = id.match('^[\\dABCDEF]{32}$');
        return result && result.length === 1;
    }
    invokeSuccess() {
        return { successful: true, errors: [], warnings: [] };
    }
    invokeError(err) {
        return { successful: false, errors: [{ message: err }], warnings: [] };
    }
}
exports.CoreServices = CoreServices;
