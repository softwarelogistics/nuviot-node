"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NuviotClientService = void 0;
const utils_1 = require("../core/utils");
const utils_2 = require("../core/utils");
require("rxjs/add/operator/toPromise");
class NuviotClientService {
    constructor(http, networkCallService, errorReporter) {
        this.http = http;
        this.networkCallService = networkCallService;
        this.errorReporter = errorReporter;
    }
    getListResponse(path, filter = null) {
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        let headers = new utils_2.HttpHeaders();
        if (filter) {
            if (filter.start) {
                headers = headers.append('x-filter-startdate', filter.start);
            }
            if (filter.end) {
                headers = headers.append('x-filter-enddate', filter.end);
            }
            if (filter.groupBy) {
                headers = headers.append('x-group-by', filter.groupBy);
            }
            if (filter.groupBySize) {
                headers = headers.append('x-group-by-size', filter.groupBySize.toString());
            }
            if (filter.nextPartitionKey) {
                headers = headers.append('x-nextpartitionkey', filter.nextPartitionKey);
            }
            if (filter.nextRowKey) {
                headers = headers.append('x-nextrowkey', filter.nextRowKey);
            }
            if (filter.pageSize) {
                headers = headers.append('x-pagesize', filter.pageSize.toString());
            }
            if (filter.pageIndex) {
                headers = headers.append('x-pageindex', filter.pageIndex.toString());
            }
        }
        this.networkCallService.beginCall();
        const promise = new Promise((resolve, reject) => {
            this.http.get(`${utils_1.environment.siteUri}/${path}`, { headers: headers })
                .subscribe((response) => {
                this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    this.errorReporter.addErrors(response.errors);
                    if (reject) {
                        reject(response.errors[0].message);
                    }
                }
            }, (err) => {
                this.networkCallService.endCall();
                this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    }
    getMarkDownContent(path) {
        const basePath = 'https://raw.githubusercontent.com/LagoVista/docs/master/guides';
        const promise = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState === 4 &&
                    this.status === 200) {
                    resolve(xhr.responseText);
                }
            };
            xhr.open('GET', `${basePath}${path}`, true);
            xhr.send();
        });
        return promise;
    }
    getBlobResponse(path, fileName) {
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        const uri = `${utils_1.environment.siteUri}/${path}`;
        const downloadLink = document.createElement('a');
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.setAttribute('href', uri);
        downloadLink.setAttribute('target', '_blank');
        downloadLink.setAttribute('download', fileName);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        return null;
    }
    getDateFilterHeaders(start, end) {
        return [
            { 'x-filter-startdate': start },
            { 'x-filter-enddate': end }
        ];
    }
    requestForInvokeResultEx(path) {
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        const promise = new Promise((resolve, reject) => {
            this.http.get(`${utils_1.environment.siteUri}/${path}`)
                .subscribe((response) => {
                this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    this.errorReporter.addErrors(response.errors);
                    if (reject) {
                        reject(response.errors[0].message);
                    }
                }
            }, (err) => {
                this.networkCallService.endCall();
                this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    }
    request(path) {
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        const promise = new Promise((resolve, reject) => {
            this.http.get(`${utils_1.environment.siteUri}/${path}`)
                .subscribe((response) => {
                this.networkCallService.endCall();
                resolve(response);
            }, (err) => {
                this.networkCallService.endCall();
                this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    }
    get(path) {
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        const promise = new Promise((resolve, reject) => {
            this.http.get(`${utils_1.environment.siteUri}/${path}`)
                .toPromise()
                .then((response) => {
                this.networkCallService.endCall();
                if (!response.successful) {
                    this.errorReporter.addMessage(response.errors[0].message);
                }
                else {
                    resolve(response);
                }
            })
                .catch(err => {
                this.networkCallService.endCall();
                if (reject) {
                    reject(err);
                }
            });
        });
        return promise;
    }
    getFormResponse(path) {
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        const promise = new Promise((resolve, reject) => {
            this.http.get(`${utils_1.environment.siteUri}/${path}`)
                .subscribe((response) => {
                this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    this.errorReporter.addErrors(response.errors);
                    if (reject) {
                        reject(response.errors[0].message);
                    }
                }
            }, (err) => {
                this.networkCallService.endCall();
                this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    }
    post(path, model) {
        return this.postWithResponse(path, model);
    }
    insert(path, model) {
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        const promise = new Promise((resolve, reject) => {
            this.http.post(`${utils_1.environment.siteUri}/${path}`, model)
                .subscribe((response) => {
                this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    this.errorReporter.addErrors(response.errors);
                    if (reject) {
                        reject(response.errors[0].message);
                    }
                }
            }, (err) => {
                this.networkCallService.endCall();
                this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    }
    postWithResponse(path, model) {
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        const promise = new Promise((resolve, reject) => {
            this.http.post(`${utils_1.environment.siteUri}/${path}`, model)
                .subscribe((response) => {
                this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    this.errorReporter.addErrors(response.errors);
                    if (reject) {
                        reject(response.errors[0].message);
                    }
                }
            }, (err) => {
                this.networkCallService.endCall();
                this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    }
    postForListResponse(path, model) {
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        const promise = new Promise((resolve, reject) => {
            this.http.post(`${utils_1.environment.siteUri}/${path}`, model)
                .subscribe((response) => {
                this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    this.errorReporter.addErrors(response.errors);
                    if (reject) {
                        reject(response.errors[0].message);
                    }
                }
            }, (err) => {
                this.networkCallService.endCall();
                this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    }
    updateWithResponse(path, model) {
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        const promise = new Promise((resolve, reject) => {
            this.http.put(`${utils_1.environment.siteUri}/${path}`, model)
                .subscribe((response) => {
                this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    this.errorReporter.addErrors(response.errors);
                    if (reject) {
                        reject(response.errors[0].message);
                    }
                }
            }, (err) => {
                this.networkCallService.endCall();
                this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    }
    update(path, model) {
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        const promise = new Promise((resolve, reject) => {
            this.http.put(`${utils_1.environment.siteUri}/${path}`, model)
                .subscribe((response) => {
                this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    this.errorReporter.addErrors(response.errors);
                    if (reject) {
                        reject(response.errors[0].message);
                    }
                }
            }, (err) => {
                this.networkCallService.endCall();
                this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    }
    delete(path) {
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        const promise = new Promise((resolve, reject) => {
            this.http.delete(`${utils_1.environment.siteUri}/${path}`)
                .subscribe((response) => {
                this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    this.errorReporter.addErrors(response.errors);
                    reject(response.errors[0].message);
                }
            }, (err) => {
                this.networkCallService.endCall();
                this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    }
    deleteWithResponse(path) {
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        const promise = new Promise((resolve, reject) => {
            this.http.delete(`${utils_1.environment.siteUri}/${path}`)
                .subscribe((response) => {
                this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    this.errorReporter.addErrors(response.errors);
                    reject(response.errors[0].message);
                }
            }, (err) => {
                this.networkCallService.endCall();
                this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    }
}
exports.NuviotClientService = NuviotClientService;
