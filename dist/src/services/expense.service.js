"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseService = void 0;
class ExpenseService {
    constructor(client) {
        this.client = client;
    }
    getExpenses(filter) {
        return this.client.postForListResponse('/api/expenses', filter);
    }
    addExpense(expense) {
        return this.client.post('/api/expense', expense);
    }
    updateExpense(expense) {
        return this.client.updateWithResponse('/api/expense', expense);
    }
    getExpense(id) {
        return this.client.request(`/api/expense/${id}`);
    }
    deleteExpense(id) {
        return this.client.delete(`/api/expense/${id}`);
    }
    factory() {
        return this.client.request('/api/expensecategory/factory');
    }
    getExpenseCategories() {
        return this.client.request('/api/expensecategories');
    }
    getActiveExpenseCategories() {
        return this.client.request('/api/expensecategories/active');
    }
    addExpenseCategory(expenseCategory) {
        return this.client.post('/api/expensecategory', expenseCategory);
    }
    updateExpenseCategory(expenseCategory) {
        return this.client.update('/api/expensecategory', expenseCategory);
    }
}
exports.ExpenseService = ExpenseService;
