"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrService = void 0;
class HrService {
    constructor(nuviotClient) {
        this.nuviotClient = nuviotClient;
    }
    addJobApplication(application) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.nuviotClient.post('/api/job/application', application);
        });
    }
    updateJobApplication(application) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.nuviotClient.update('/api/job/application', application);
        });
    }
    getJobApplication(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nuviotClient.request(`/api/job/application/${id}`);
        });
    }
    getApplicationsForUser(userid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nuviotClient.request(`/api/job/applications/user/${userid}`);
        });
    }
    getMyApplications() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nuviotClient.request(`/api/job/applications/my`);
        });
    }
    removeApplication(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nuviotClient.delete(`/api/job/application/${id}`);
        });
    }
    updateJobApplicationStatus(applicationId, statusId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nuviotClient.request(`/api/job/applications/${applicationId}/${statusId}`);
        });
    }
    findJobApplicationsWithStatusAsync(jobId, statusId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nuviotClient.request(`/api/job/applications/${jobId}/${statusId}`);
        });
    }
    findJobApplicationsByJobIdAsync(jobId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nuviotClient.request(`/api/job/applications/${jobId}`);
        });
    }
    getApplicationForUserByKey(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.nuviotClient.request(`/api/job/application/my/${key}`);
        });
    }
}
exports.HrService = HrService;
