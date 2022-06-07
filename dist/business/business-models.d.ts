/// <reference path="../core/core.d.ts" />
declare namespace Business {
    interface TimeEntry {
        id: string;
        billingEventId: string;
        date: string;
        organizationId: Core.EntityHeader;
        project: Core.EntityHeader;
        workTask: Core.EntityHeader;
        userId: string;
        locked: boolean;
        hours: number;
        notes: string;
        originalHours: number;
        originalDate: string;
        originalNotes: string;
        value: string;
        originalValue: string;
    }
    interface RecentTimeEntry {
        project: Core.EntityHeader;
        workTask: Core.EntityHeader;
    }
    interface NewTimeEntry {
        date: string;
        project: Core.EntityHeader;
        workTask: Core.EntityHeader;
        userId: string;
        hours: number;
        notes: string;
    }
    interface TimePeriod {
        id: string;
        year: number;
        start: string;
        end: string;
        locked: boolean;
    }
    interface TimeEntryUpdate {
        id: string;
        date: string;
        hours: number;
        notes: string;
    }
    interface TimeEntryFilter {
        projectId?: string;
        workTaskId?: string;
        userId?: string;
        startDate: string;
        endDate: string;
    }
    interface TimeReportFilter {
        startDate?: string;
        endDate?: string;
        timePeriodId?: string;
        userId?: string;
        clientId?: string;
        agreementId?: string;
        projectId?: string;
        workTaskId?: string;
        includeFinancial: boolean;
        includeTaskDetails: boolean;
        entityGroupBy?: string;
    }
    interface TimeReportData {
        summary: TimeReportDetail;
        rows: TimeReportDetail[];
    }
    interface TimeReportDetail {
        summaryName: string;
        startDateStamp: string;
        endDateStamp: string;
        user: string;
        userId: string;
        client: string;
        clientId: string;
        agreement: string;
        agreementId: string;
        project: string;
        projectId: string;
        workTaskCode: string;
        externalWorkTaskCode: string;
        externalTaskLink: string;
        workTask: string;
        workTaskId: string;
        internalHours: number;
        billableHours: number;
        internalAmount: number;
        billableAmount: number;
        totalHours: number;
        totalAmount: number;
        revenue: number;
    }
    interface ExpenseFilter {
        projectId?: string;
        workTaskId?: string;
        userId?: string;
        startDate: string;
        endDate: string;
    }
    interface Customer {
        id?: string;
        customerName: string;
        organizationId?: string;
        billingContactName: string;
        billingContactEmail: string;
        address1: string;
        address2: string;
        notes: string;
        city: string;
        state: string;
        zip: string;
        createdByUserId?: string;
        lastUpdatedByUserId?: string;
        creationDate?: string;
        lastUpdatedDate?: string;
    }
    interface AgreementSummary {
        id: string;
        name: string;
        start: string;
        end: string;
        locked: boolean;
    }
    interface Agreement {
        id?: string;
        organizationId?: string;
        customerId: string;
        name: string;
        identifier: string;
        locked: boolean;
        internal: boolean;
        start: string;
        end: string;
        hours: number;
        rate: number;
        notes: string;
        createdByUserId?: string;
        lastUpdatedByUserId?: string;
        creationDate?: string;
        lastUpdatedDate?: string;
    }
    interface Expense {
        id: string;
        agreementId: string;
        billingEventId: string;
        date: string;
        project: Core.EntityHeader;
        workTask: Core.EntityHeader;
        description: string;
        notes: string;
        amount: number;
        locked: boolean;
        userId: string;
        organizationId: string;
        createdByUserId: string;
        lastUpdatedByUserId: string;
        creationDate: string;
        lastUpdatedDate: string;
    }
    interface PayRate {
        id?: string;
        start: string;
        end?: string;
        notes: string;
        userId: string;
        billableRate: number;
        internalRate: number;
        organizationId?: string;
        createdByUserId?: string;
        lastUpdatedByUserId?: string;
        creationDate?: string;
        lastUpdatedDate?: string;
    }
}
