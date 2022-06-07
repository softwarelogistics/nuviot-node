"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SevenSegmentService = void 0;
const rxjs_1 = require("rxjs");
class SevenSegmentService {
    constructor(client, errorReporter) {
        this.client = client;
        this.errorReporter = errorReporter;
        this.deviceMessageTypes$ = new rxjs_1.ReplaySubject();
        this.deviceMessageType$ = new rxjs_1.ReplaySubject();
    }
    getSevenSegementMessages() {
        const promise = new Promise((resolve, reject) => {
            this.client.getListResponse('/api/devicemessagetypes/sevenseg')
                .then(res => {
                resolve(res);
                this.deviceMessageTypes = res.model;
            })
                .catch(err => this.errorReporter.addError(err));
        });
        return promise;
    }
    getSevenSegementMessage(id) {
        const promise = new Promise((resolve, reject) => {
            this.client.getFormResponse(`/api/devicemessagetype/${id}`)
                .then(res => {
                if (res.successful) {
                    resolve(res);
                    this.deviceMessageType = res.model;
                }
                else {
                    this.errorReporter.addErrors(res.errors);
                }
            })
                .catch(err => this.errorReporter.addError(err));
        });
        return promise;
    }
    testSevenSegementMessage(message) {
        const promise = new Promise((resolve, reject) => {
            this.client.post('/api/devicemessagetype/sevensegement/test', message)
                .then(res => {
                if (res.successful) {
                    console.log(res);
                    resolve(res.result);
                }
            })
                .catch(err => this.errorReporter.addError(err));
        });
        return promise;
    }
    addSevenSegementMessage(message) {
        const promise = new Promise((resolve, reject) => {
            this.client.insert('/api/devicemessagetype', message)
                .then(res => {
                if (res.successful) {
                    resolve(res);
                }
                else {
                    this.errorReporter.addErrors(res.errors);
                }
            })
                .catch(err => this.errorReporter.addError(err));
        });
        return promise;
    }
    createSevenSegementMessage() {
        const promise = new Promise((resolve, reject) => {
            this.client.request('/api/devicemessagetype/factory')
                .then(res => {
                if (res.successful) {
                    resolve(res.model);
                }
                else {
                    this.errorReporter.addErrors(res.errors);
                }
            })
                .catch(err => this.errorReporter.addError(err));
        });
        return promise;
    }
    updateSevenSegementMessage(message) {
        const promise = new Promise((resolve, reject) => {
            this.client.update('/api/devicemessagetype', message)
                .then(res => resolve(res))
                .catch(err => reject(err));
        });
        return promise;
    }
    onCurrentMessageDefinition() {
        return this.deviceMessageType$.asObservable();
    }
    onMessageDefinitions() {
        return this.deviceMessageTypes$.asObservable();
    }
}
exports.SevenSegmentService = SevenSegmentService;
