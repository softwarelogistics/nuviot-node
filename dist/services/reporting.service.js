"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportingService = void 0;
class ReportingService {
    constructor(client) {
        this.client = client;
    }
    getReports() {
        return this.client.getListResponse(`api/reports`);
    }
    getReport(id) {
        const promise = new Promise((resolve, reject) => {
            this.client.getFormResponse(`/api/report/${id}`)
                .then(result => {
                resolve(result.model);
            });
        });
        return promise;
    }
    getScheduledReport(id) {
        const promise = new Promise((resolve, reject) => {
            this.client.getFormResponse(`/api/report/scheduled/${id}`)
                .then(result => {
                resolve(result);
            });
        });
        return promise;
    }
    queueForExecution(reportId, request) {
        const promise = new Promise((resolve, reject) => {
            this.client.insert(`/api/report/${reportId}/run`, request)
                .then(resp => {
                const ticketResponse = resp;
                resolve(ticketResponse.result);
            })
                .catch((err) => reject(err));
        });
        return promise;
    }
    deleteGeneratedReport(reportId, genertedReportId) {
        return this.client.delete(`/report/${reportId}/${genertedReportId}`);
    }
    getScheduledReports() {
        return this.client.getListResponse(`/api/reports/scheduled`);
    }
    deleteSchedueledReport(id) {
        return this.client.delete(`/api/report/scheduled/${id}`);
    }
    getScheduledReportsForReport(id) {
        return this.client.getListResponse(`/api/reports/scheduled/${id}`);
    }
    getGeneratedReports(reportId) {
        return this.client.getListResponse(`/report/${reportId}/generated`);
    }
    getDeviceGeneratedReports(deviceId, continuationToken) {
        return this.client.getListResponse(`/report/device/${deviceId}/generated`, { pageSize: 50, nextRowKey: continuationToken });
    }
    getDataStreams() {
        return this.client.getListResponse(`api/datastreams`);
    }
    getDataStream(id) {
        const promise = new Promise((resolve, reject) => {
            this.client.getFormResponse(`api/datastream/${id}`)
                .then(result => {
                resolve(result.model);
            });
        });
        return promise;
    }
    getStreamData(dataStreamId, deviceId, filter) {
        const promise = new Promise((resolve, reject) => {
            const uri = `/api/datastream/${dataStreamId}/data/${deviceId}`;
            this.client.getListResponse(uri, filter)
                .then(response => {
                resolve(response);
            })
                .catch(err => reject(err));
        });
        return promise;
    }
}
exports.ReportingService = ReportingService;
