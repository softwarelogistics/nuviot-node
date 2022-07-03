import { NuviotClientService } from './nuviot-client.service';
export declare class ExpenseService {
    private client;
    constructor(client: NuviotClientService);
    getExpenses(filter: Business.ExpenseFilter): Promise<Core.ListResponse<Business.ExpenseSummary>>;
    addExpense(expense: Business.NewExpense): Promise<Core.InvokeResultEx<Business.ExpenseSummary>>;
    updateExpense(expense: Business.ExpenseUpdate): Promise<Core.InvokeResultEx<Business.ExpenseSummary>>;
    getExpense(id: string): Promise<Business.ExpenseSummary>;
    deleteExpense(id: string): Promise<Core.InvokeResult>;
    factory(): Promise<Core.FormResult<Business.ExpenseCategory, Business.ExpenseCategoryView>>;
    getExpenseCategories(): Promise<Business.ExpenseCategory[]>;
    getActiveExpenseCategories(): Promise<Business.ExpenseCategory[]>;
    addExpenseCategory(expenseCategory: Business.ExpenseCategory): Promise<Core.InvokeResult>;
    updateExpenseCategory(expenseCategory: Business.ExpenseCategory): Promise<Core.InvokeResult>;
}
