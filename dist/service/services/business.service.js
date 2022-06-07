"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessService = void 0;
var environment_1 = require("./../../environments/environment");
var core_1 = require("@angular/core");
var BusinessService = /** @class */ (function () {
    function BusinessService(nuviotClient, cookieService) {
        this.nuviotClient = nuviotClient;
        this.cookieService = cookieService;
    }
    BusinessService.prototype.getTimeEntriesForTask = function (start, end, taskId, userId) {
        var filter = {
            'startDate': start,
            'endDate': end,
            'userId': userId,
            'workTaskId': taskId,
        };
        return this.nuviotClient.postForListResponse('/api/time/entries', filter);
    };
    BusinessService.prototype.getTimeEntriesForUser = function (start, end, userId) {
        var filter = {
            'startDate': start,
            'endDate': end,
            'userId': userId,
        };
        return this.nuviotClient.postForListResponse('/api/time/entries', filter);
    };
    BusinessService.prototype.addTimeEntry = function (timeRecord) {
        var recentTimeEntry = {
            project: timeRecord.project,
            workTask: timeRecord.workTask,
        };
        var mruJson = this.cookieService.get('time-entry-mru');
        if (mruJson) {
            var mrus = JSON.parse(mruJson);
            var existingMru = mrus.find(function (mru) { return mru.workTask.id === recentTimeEntry.workTask.id; });
            if (existingMru) {
                mrus.splice(mrus.indexOf(existingMru), 1);
            }
            mrus.splice(10);
            mrus.unshift(recentTimeEntry);
            this.cookieService.set('time-entry-mru', JSON.stringify(mrus));
        }
        else {
            var mrus = [];
            mrus.unshift(recentTimeEntry);
            this.cookieService.set('time-entry-mru', JSON.stringify(mrus));
        }
        return this.nuviotClient.postWithResponse('/api/time/entry', timeRecord);
    };
    BusinessService.prototype.updateTimeEntry = function (timeRecord) {
        return this.nuviotClient.updateWithResponse('/api/time/entry', timeRecord);
    };
    BusinessService.prototype.deleteTimeEntry = function (id) {
        return this.nuviotClient.delete("/api/time/entry/".concat(id));
    };
    BusinessService.prototype.getExpensesForTask = function (start, end, taskId, userId) {
        var filter = {
            'startDate': start,
            'endDate': end,
            'userId': userId,
            'taskId': taskId,
        };
        return this.nuviotClient.postForListResponse('/api/expense', filter);
    };
    BusinessService.prototype.getExpensesForUser = function (start, end, userId) {
        var filter = {
            'startDate': start,
            'endDate': end,
            'userId': userId,
        };
        return this.nuviotClient.postForListResponse('/api/expense', filter);
    };
    BusinessService.prototype.addExpenses = function (expense) {
        return this.nuviotClient.postWithResponse("/api/expense", expense);
    };
    BusinessService.prototype.updateExpenses = function (expense) {
        return this.nuviotClient.updateWithResponse("/api/expense", expense);
    };
    BusinessService.prototype.deleteExpenses = function (expenseId) {
        return this.nuviotClient.delete("/api/expense/".concat(expenseId));
    };
    BusinessService.prototype.getTimePeriods = function (year) {
        return this.nuviotClient.getListResponse("/api/time/timeperiods/".concat(year));
    };
    BusinessService.prototype.getAllTimePeriods = function () {
        return this.nuviotClient.getListResponse("/api/time/timeperiods");
    };
    BusinessService.prototype.createTimePeriods = function (year) {
        return this.nuviotClient.getListResponse("/api/time/timeperiods/".concat(year, "/create"));
    };
    BusinessService.prototype.getCustomers = function () {
        return this.nuviotClient.getListResponse('/api/customers');
    };
    BusinessService.prototype.saveCustomer = function (customer) {
        if (customer.id) {
            return this.nuviotClient.updateWithResponse('/api/customer', customer);
        }
        else {
            return this.nuviotClient.postWithResponse('/api/customer', customer);
        }
    };
    BusinessService.prototype.getCustomer = function (customerId) {
        return this.nuviotClient.request("/api/customer/".concat(customerId));
    };
    BusinessService.prototype.deleteCustomer = function (customerId) {
        return this.nuviotClient.delete("/api/customer/".concat(customerId));
    };
    BusinessService.prototype.getActiveAgreements = function (customerId) {
        return this.nuviotClient.request("/api/agreements/".concat(customerId, "/details"));
    };
    BusinessService.prototype.getAgreements = function (customerId) {
        return this.nuviotClient.request("/api/agreements/".concat(customerId, "/active/details"));
    };
    BusinessService.prototype.getActiveAgreementSummaries = function (customerId) {
        return this.nuviotClient.request("/api/agreements/".concat(customerId, "/active"));
    };
    BusinessService.prototype.getAgreementSummaries = function (customerId) {
        return this.nuviotClient.request("/api/agreements/".concat(customerId));
    };
    BusinessService.prototype.getAgreement = function (id) {
        return this.nuviotClient.request("/api/agreement/".concat(id));
    };
    BusinessService.prototype.saveAgreement = function (agreement) {
        if (agreement.id) {
            return this.nuviotClient.updateWithResponse('/api/agreement', agreement);
        }
        else {
            return this.nuviotClient.postWithResponse('/api/agreement', agreement);
        }
    };
    BusinessService.prototype.deleteAgreement = function (agreementId) {
        return this.nuviotClient.delete("/api/agreement/".concat(agreementId));
    };
    BusinessService.prototype.getCurrentPayRate = function (userId) {
        return this.nuviotClient.request("/api/payrate/user/".concat(userId, "/current"));
    };
    BusinessService.prototype.getUserPayRates = function (userId) {
        return this.nuviotClient.getListResponse("/api/payrates/user/".concat(userId));
    };
    BusinessService.prototype.getPayRate = function (id) {
        return this.nuviotClient.request("/api/payrate/".concat(id));
    };
    BusinessService.prototype.savePayRate = function (payRate) {
        if (payRate.id) {
            return this.nuviotClient.updateWithResponse('/api/payrate', payRate);
        }
        else {
            return this.nuviotClient.postWithResponse('/api/payrate', payRate);
        }
    };
    BusinessService.prototype.deletePayRate = function (payRateId) {
        return this.nuviotClient.delete("/api/payrate/".concat(payRateId));
    };
    BusinessService.prototype.getTimeReport = function (filter) {
        return this.nuviotClient.postWithResponse('/api/reports/time', filter);
    };
    BusinessService.prototype.downloadExcel = function (filter) {
        var uri = "".concat(environment_1.environment.siteUri, "/api/reports/time/xlsx?entityGroupBy=").concat(filter.entityGroupBy);
        if (filter.startDate) {
            uri += "&startDate=".concat(encodeURIComponent(filter.startDate));
        }
        if (filter.endDate) {
            uri += "&endDate=".concat(encodeURIComponent(filter.endDate));
        }
        if (filter.userId) {
            uri += "&userId=".concat(encodeURIComponent(filter.userId));
        }
        if (filter.clientId) {
            uri += "&userId=".concat(encodeURIComponent(filter.clientId));
        }
        if (filter.agreementId) {
            uri += "&userId=".concat(encodeURIComponent(filter.agreementId));
        }
        if (filter.projectId) {
            uri += "&projectId=".concat(encodeURIComponent(filter.projectId));
        }
        if (filter.workTaskId) {
            uri += "&workTaskId=".concat(encodeURIComponent(filter.workTaskId));
        }
        if (filter.includeFinancial) {
            uri += "&includeFinancial=true";
        }
        if (filter.includeTaskDetails) {
            uri += "&includeTaskDetails=true";
        }
        if (filter.timePeriodId) {
            uri += "&timePeriodId=".concat(encodeURIComponent(filter.timePeriodId));
        }
        window.open(uri, '_blank');
    };
    BusinessService.prototype.lockTimePeriod = function (id) {
        return this.nuviotClient.request("/api/time/timeperiod/".concat(id, "/lock"));
    };
    BusinessService.prototype.unlockTimePeriod = function (id) {
        return this.nuviotClient.request("/api/time/timeperiod/".concat(id, "/unlock"));
    };
    BusinessService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], BusinessService);
    return BusinessService;
}());
exports.BusinessService = BusinessService;
