"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessService = void 0;
const utils_1 = require("./../core/utils");
class BusinessService {
    constructor(nuviotClient, cookieService) {
        this.nuviotClient = nuviotClient;
        this.cookieService = cookieService;
    }
    getTimeEntriesForTask(start, end, taskId, userId) {
        const filter = {
            'startDate': start,
            'endDate': end,
            'userId': userId,
            'workTaskId': taskId,
        };
        return this.nuviotClient.postForListResponse('/api/time/entries', filter);
    }
    getTimeEntriesForUser(start, end, userId) {
        const filter = {
            'startDate': start,
            'endDate': end,
            'userId': userId,
        };
        return this.nuviotClient.postForListResponse('/api/time/entries', filter);
    }
    addTimeEntry(timeRecord) {
        const recentTimeEntry = {
            project: timeRecord.project,
            workTask: timeRecord.workTask,
        };
        const mruJson = this.cookieService.get('time-entry-mru');
        if (mruJson) {
            const mrus = JSON.parse(mruJson);
            const existingMru = mrus.find(mru => mru.workTask.id === recentTimeEntry.workTask.id);
            if (existingMru) {
                mrus.splice(mrus.indexOf(existingMru), 1);
            }
            mrus.splice(10);
            mrus.unshift(recentTimeEntry);
            this.cookieService.set('time-entry-mru', JSON.stringify(mrus));
        }
        else {
            const mrus = [];
            mrus.unshift(recentTimeEntry);
            this.cookieService.set('time-entry-mru', JSON.stringify(mrus));
        }
        return this.nuviotClient.postWithResponse('/api/time/entry', timeRecord);
    }
    updateTimeEntry(timeRecord) {
        return this.nuviotClient.updateWithResponse('/api/time/entry', timeRecord);
    }
    deleteTimeEntry(id) {
        return this.nuviotClient.delete(`/api/time/entry/${id}`);
    }
    getExpensesForTask(start, end, taskId, userId) {
        const filter = {
            'startDate': start,
            'endDate': end,
            'userId': userId,
            'taskId': taskId,
        };
        return this.nuviotClient.postForListResponse('/api/expense', filter);
    }
    getExpensesForUser(start, end, userId) {
        const filter = {
            'startDate': start,
            'endDate': end,
            'userId': userId,
        };
        return this.nuviotClient.postForListResponse('/api/expense', filter);
    }
    addExpenses(expense) {
        return this.nuviotClient.postWithResponse(`/api/expense`, expense);
    }
    updateExpenses(expense) {
        return this.nuviotClient.updateWithResponse(`/api/expense`, expense);
    }
    deleteExpenses(expenseId) {
        return this.nuviotClient.delete(`/api/expense/${expenseId}`);
    }
    getTimePeriods(year) {
        return this.nuviotClient.getListResponse(`/api/time/timeperiods/${year}`);
    }
    getAllTimePeriods() {
        return this.nuviotClient.getListResponse(`/api/time/timeperiods`);
    }
    createTimePeriods(year) {
        return this.nuviotClient.getListResponse(`/api/time/timeperiods/${year}/create`);
    }
    getCustomers() {
        return this.nuviotClient.getListResponse('/api/customers');
    }
    getPayrollForYear(year) {
        return this.nuviotClient.request(`/api/payroll/year/${year}`);
    }
    generatePayroll(timePeriodId) {
        return this.nuviotClient.request(`/api/payroll/generate/${timePeriodId}`);
    }
    getPaymentsForPeriod(timePeriodId) {
        return this.nuviotClient.request(`/api/payroll/payments/${timePeriodId}`);
    }
    updatePayment(update) {
        return this.nuviotClient.updateWithResponse(`/api/payment/update`, update);
    }
    generatePaymentsForPeriod(timePeriodId) {
        return this.nuviotClient.requestForInvokeResultEx(`/api/payroll/generate/${timePeriodId}`);
    }
    saveCustomer(customer) {
        if (customer.id) {
            return this.nuviotClient.updateWithResponse('/api/customer', customer);
        }
        else {
            return this.nuviotClient.postWithResponse('/api/customer', customer);
        }
    }
    getCustomer(customerId) {
        return this.nuviotClient.request(`/api/customer/${customerId}`);
    }
    deleteCustomer(customerId) {
        return this.nuviotClient.delete(`/api/customer/${customerId}`);
    }
    getActiveAgreements(customerId) {
        return this.nuviotClient.request(`/api/agreements/${customerId}/details`);
    }
    getAgreements(customerId) {
        return this.nuviotClient.request(`/api/agreements/${customerId}/active/details`);
    }
    getActiveAgreementSummaries(customerId) {
        return this.nuviotClient.request(`/api/agreements/${customerId}/active`);
    }
    getAgreementSummaries(customerId) {
        return this.nuviotClient.request(`/api/agreements/${customerId}`);
    }
    getAgreement(id) {
        return this.nuviotClient.request(`/api/agreement/${id}`);
    }
    saveAgreement(agreement) {
        if (agreement.id) {
            return this.nuviotClient.updateWithResponse('/api/agreement', agreement);
        }
        else {
            return this.nuviotClient.postWithResponse('/api/agreement', agreement);
        }
    }
    deleteAgreement(agreementId) {
        return this.nuviotClient.delete(`/api/agreement/${agreementId}`);
    }
    getCurrentPayRate(userId) {
        return this.nuviotClient.request(`/api/payrate/user/${userId}/current`);
    }
    getUserPayRates(userId) {
        return this.nuviotClient.getListResponse(`/api/payrates/user/${userId}`);
    }
    getPayRate(id) {
        return this.nuviotClient.request(`/api/payrate/${id}`);
    }
    savePayRate(payRate) {
        if (payRate.id) {
            return this.nuviotClient.updateWithResponse('/api/payrate', payRate);
        }
        else {
            return this.nuviotClient.postWithResponse('/api/payrate', payRate);
        }
    }
    deletePayRate(payRateId) {
        return this.nuviotClient.delete(`/api/payrate/${payRateId}`);
    }
    getTimeReport(filter) {
        return this.nuviotClient.postWithResponse('/api/reports/time', filter);
    }
    downloadExcel(filter) {
        let uri = `${utils_1.environment.siteUri}/api/reports/time/xlsx?entityGroupBy=${filter.entityGroupBy}`;
        if (filter.startDate) {
            uri += `&startDate=${encodeURIComponent(filter.startDate)}`;
        }
        if (filter.endDate) {
            uri += `&endDate=${encodeURIComponent(filter.endDate)}`;
        }
        if (filter.userId) {
            uri += `&userId=${encodeURIComponent(filter.userId)}`;
        }
        if (filter.clientId) {
            uri += `&userId=${encodeURIComponent(filter.clientId)}`;
        }
        if (filter.agreementId) {
            uri += `&userId=${encodeURIComponent(filter.agreementId)}`;
        }
        if (filter.projectId) {
            uri += `&projectId=${encodeURIComponent(filter.projectId)}`;
        }
        if (filter.workTaskId) {
            uri += `&workTaskId=${encodeURIComponent(filter.workTaskId)}`;
        }
        if (filter.includeFinancial) {
            uri += `&includeFinancial=true`;
        }
        if (filter.includeTaskDetails) {
            uri += `&includeTaskDetails=true`;
        }
        if (filter.timePeriodId) {
            uri += `&timePeriodId=${encodeURIComponent(filter.timePeriodId)}`;
        }
        window.open(uri, '_blank');
    }
    lockTimePeriod(id) {
        return this.nuviotClient.request(`/api/time/timeperiod/${id}/lock`);
    }
    unlockTimePeriod(id) {
        return this.nuviotClient.request(`/api/time/timeperiod/${id}/unlock`);
    }
}
exports.BusinessService = BusinessService;
