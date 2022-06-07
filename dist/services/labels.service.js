"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelsService = void 0;
class LabelsService {
    constructor(nuviotClient) {
        this.nuviotClient = nuviotClient;
    }
    getLabeledEntities(id) {
        return this.nuviotClient.request(`/api/label/entities/${id}`);
    }
    getLabelSetForOrg() {
        return this.nuviotClient.request(`/api/labelset`);
    }
    addLabel(label) {
        return this.nuviotClient.postWithResponse('/api/label', label);
    }
    updateLabel(label) {
        return this.nuviotClient.updateWithResponse('/api/label', label);
    }
}
exports.LabelsService = LabelsService;
