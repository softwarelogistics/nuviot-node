"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NuviotClientService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("../../environments/environment");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/toPromise");
var NuviotClientService = /** @class */ (function () {
    function NuviotClientService(http, networkCallService, errorReporter) {
        this.http = http;
        this.networkCallService = networkCallService;
        this.errorReporter = errorReporter;
    }
    NuviotClientService.prototype.getListResponse = function (path, filter) {
        var _this = this;
        if (filter === void 0) { filter = null; }
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        var headers = new http_1.HttpHeaders();
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
        var promise = new Promise(function (resolve, reject) {
            _this.http.get("".concat(environment_1.environment.siteUri, "/").concat(path), { headers: headers })
                .subscribe(function (response) {
                _this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    _this.errorReporter.addErrors(response.errors);
                    if (reject) {
                        reject(response.errors[0].message);
                    }
                }
            }, function (err) {
                _this.networkCallService.endCall();
                _this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    };
    NuviotClientService.prototype.getMarkDownContent = function (path) {
        var basePath = 'https://raw.githubusercontent.com/LagoVista/docs/master/guides';
        var promise = new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState === 4 &&
                    this.status === 200) {
                    resolve(xhr.responseText);
                }
            };
            xhr.open('GET', "".concat(basePath).concat(path), true);
            xhr.send();
        });
        return promise;
    };
    NuviotClientService.prototype.getBlobResponse = function (path, fileName) {
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        var uri = "".concat(environment_1.environment.siteUri, "/").concat(path);
        var downloadLink = document.createElement('a');
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.setAttribute('href', uri);
        downloadLink.setAttribute('target', '_blank');
        downloadLink.setAttribute('download', fileName);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        return null;
    };
    NuviotClientService.prototype.getDateFilterHeaders = function (start, end) {
        return [
            { 'x-filter-startdate': start },
            { 'x-filter-enddate': end }
        ];
    };
    NuviotClientService.prototype.requestForInvokeResultEx = function (path) {
        var _this = this;
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        var promise = new Promise(function (resolve, reject) {
            _this.http.get("".concat(environment_1.environment.siteUri, "/").concat(path))
                .subscribe(function (response) {
                _this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    _this.errorReporter.addErrors(response.errors);
                    if (reject) {
                        reject(response.errors[0].message);
                    }
                }
            }, function (err) {
                _this.networkCallService.endCall();
                _this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    };
    NuviotClientService.prototype.request = function (path) {
        var _this = this;
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        var promise = new Promise(function (resolve, reject) {
            _this.http.get("".concat(environment_1.environment.siteUri, "/").concat(path))
                .subscribe(function (response) {
                _this.networkCallService.endCall();
                resolve(response);
            }, function (err) {
                _this.networkCallService.endCall();
                _this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    };
    NuviotClientService.prototype.get = function (path) {
        var _this = this;
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        var promise = new Promise(function (resolve, reject) {
            _this.http.get("".concat(environment_1.environment.siteUri, "/").concat(path))
                .toPromise()
                .then(function (response) {
                _this.networkCallService.endCall();
                if (!response.successful) {
                    _this.errorReporter.addMessage(response.errors[0].message);
                }
                else {
                    resolve(response);
                }
            })
                .catch(function (err) {
                _this.networkCallService.endCall();
                if (reject) {
                    reject(err);
                }
            });
        });
        return promise;
    };
    NuviotClientService.prototype.getFormResponse = function (path) {
        var _this = this;
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        var promise = new Promise(function (resolve, reject) {
            _this.http.get("".concat(environment_1.environment.siteUri, "/").concat(path))
                .subscribe(function (response) {
                _this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    _this.errorReporter.addErrors(response.errors);
                    if (reject) {
                        reject(response.errors[0].message);
                    }
                }
            }, function (err) {
                _this.networkCallService.endCall();
                _this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    };
    NuviotClientService.prototype.post = function (path, model) {
        return this.postWithResponse(path, model);
    };
    NuviotClientService.prototype.insert = function (path, model) {
        var _this = this;
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        var promise = new Promise(function (resolve, reject) {
            _this.http.post("".concat(environment_1.environment.siteUri, "/").concat(path), model)
                .subscribe(function (response) {
                _this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    _this.errorReporter.addErrors(response.errors);
                    if (reject) {
                        reject(response.errors[0].message);
                    }
                }
            }, function (err) {
                _this.networkCallService.endCall();
                _this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    };
    NuviotClientService.prototype.postWithResponse = function (path, model) {
        var _this = this;
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        var promise = new Promise(function (resolve, reject) {
            _this.http.post("".concat(environment_1.environment.siteUri, "/").concat(path), model)
                .subscribe(function (response) {
                _this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    _this.errorReporter.addErrors(response.errors);
                    if (reject) {
                        reject(response.errors[0].message);
                    }
                }
            }, function (err) {
                _this.networkCallService.endCall();
                _this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    };
    NuviotClientService.prototype.postForListResponse = function (path, model) {
        var _this = this;
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        var promise = new Promise(function (resolve, reject) {
            _this.http.post("".concat(environment_1.environment.siteUri, "/").concat(path), model)
                .subscribe(function (response) {
                _this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    _this.errorReporter.addErrors(response.errors);
                    if (reject) {
                        reject(response.errors[0].message);
                    }
                }
            }, function (err) {
                _this.networkCallService.endCall();
                _this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    };
    NuviotClientService.prototype.updateWithResponse = function (path, model) {
        var _this = this;
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        var promise = new Promise(function (resolve, reject) {
            _this.http.put("".concat(environment_1.environment.siteUri, "/").concat(path), model)
                .subscribe(function (response) {
                _this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    _this.errorReporter.addErrors(response.errors);
                    if (reject) {
                        reject(response.errors[0].message);
                    }
                }
            }, function (err) {
                _this.networkCallService.endCall();
                _this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    };
    NuviotClientService.prototype.update = function (path, model) {
        var _this = this;
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        var promise = new Promise(function (resolve, reject) {
            _this.http.put("".concat(environment_1.environment.siteUri, "/").concat(path), model)
                .subscribe(function (response) {
                _this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    _this.errorReporter.addErrors(response.errors);
                    if (reject) {
                        reject(response.errors[0].message);
                    }
                }
            }, function (err) {
                _this.networkCallService.endCall();
                _this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    };
    NuviotClientService.prototype.delete = function (path) {
        var _this = this;
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        var promise = new Promise(function (resolve, reject) {
            _this.http.delete("".concat(environment_1.environment.siteUri, "/").concat(path))
                .subscribe(function (response) {
                _this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    _this.errorReporter.addErrors(response.errors);
                    reject(response.errors[0].message);
                }
            }, function (err) {
                _this.networkCallService.endCall();
                _this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    };
    NuviotClientService.prototype.deleteWithResponse = function (path) {
        var _this = this;
        if (path.startsWith('/')) {
            path = path.substring(1);
        }
        this.networkCallService.beginCall();
        var promise = new Promise(function (resolve, reject) {
            _this.http.delete("".concat(environment_1.environment.siteUri, "/").concat(path))
                .subscribe(function (response) {
                _this.networkCallService.endCall();
                if (response.successful) {
                    resolve(response);
                }
                else {
                    _this.errorReporter.addErrors(response.errors);
                    reject(response.errors[0].message);
                }
            }, function (err) {
                _this.networkCallService.endCall();
                _this.errorReporter.addMessage(err.message);
                if (reject) {
                    reject(err.message);
                }
            });
        });
        return promise;
    };
    NuviotClientService = __decorate([
        (0, core_1.Injectable)()
    ], NuviotClientService);
    return NuviotClientService;
}());
exports.NuviotClientService = NuviotClientService;
