/// <reference path="../core/core.d.ts" />
declare namespace FSLite {
    interface ServiceBoard {
        id: string;
        name: string;
        key: string;
        description: string;
        primaryContact: Core.EntityHeader;
        boardAbbreviation: string;
    }
    interface ServiceboardSummary {
        id: string;
        name: string;
        key: string;
        description: string;
    }
    interface CreateServiceTicketRequest {
        templateId: string;
        repoId: string;
        deviceId: string;
        subject: string;
        description: string;
        boardId: string;
    }
    interface ServiceTicket {
        ticketId: string;
        id: string;
        name: string;
        key: string;
        description: string;
        device: Core.EntityHeaderEx<Devices.DeviceDetail>;
        assignedTo: Core.EntityHeader;
        status: Core.EntityHeader;
        statusDate: string;
        address: Core.Address;
        template: Core.EntityHeaderEx<ServiceTicketTemplate>;
        subject: string;
        serviceBoard: Core.EntityHeader;
        isViewed: boolean;
        viewedBy: Core.EntityHeader;
        viewedDate: string;
        isClosed: boolean;
        closedBy: Core.EntityHeader;
        closedDate: string;
        dueDate: string;
        statusDueDate: string;
        notes: ServiceTicketNote[];
        history: ServiceTicketStatusHistory[];
        hoursEstimate: number;
        costEstimate: number;
        statusType: Core.EntityHeaderEx<StatusDefinition>;
        urgency: Core.EntityHeader;
        skillLevel: Core.EntityHeader;
        instructions: Core.SectionGrouping<ServiceTicketTemplateInstruction>[];
        serviceParts: Core.SectionGrouping<BOMItem>[];
        resources: MediaResourceSummary[];
        troubleshootingSteps: Core.SectionGrouping<TroubleshootingStep>[];
        tools: EquipmentSummary[];
        partsKits: PartsKitSummary[];
    }
    interface ServiceTicketView {
        ticketId: Core.FormField;
        name: Core.FormField;
        key: Core.FormField;
        device: Core.FormField;
        assignedTo: Core.FormField;
        status: Core.FormField;
        statusDate: Core.FormField;
        address: Core.FormField;
        subject: Core.FormField;
        isClosed: Core.FormField;
        closedBy: Core.FormField;
        serviceBoard: Core.FormField;
        dueDate: Core.FormField;
    }
    interface StatusDefinition {
        id: string;
        key: string;
        name: string;
        items: Status[];
    }
    interface Status {
        id: string;
        key: string;
        name: string;
    }
    interface ServiceTicketStatusHistory {
        dateStamp: string;
        addedBy: Core.EntityHeader;
        status: string;
        note: string;
    }
    interface ServiceTicketSummary {
        ticketId: string;
        id: string;
        subject: string;
        deviceId: string;
        device: string;
        isClosed: boolean;
        status: string;
        dueDate: string;
        assignedTo: string;
        company: string;
    }
    interface ServiceTicketNote {
        id?: string;
        addedBy?: Core.EntityHeader;
        dateStamp?: string;
        note: string;
    }
    interface ServiceTicketTemplate {
        id: string;
        name: string;
        key: string;
        costEstimate: Number;
        hoursEstimate: Number;
        templateCategory: Core.EntityHeaderEx<TemplateCategory>;
        statusType: Core.EntityHeaderEx<Core.StateSet>;
        urgency: Core.EntityHeader;
        skillLevel: Core.EntityHeader;
        description: string;
        defaultSubject: string;
        defaultDescription: string;
        instructions: Core.SectionGrouping<ServiceTicketTemplateInstruction>[];
        troubleshootingSteps: Core.SectionGrouping<TroubleshootingStep>[];
        serviceParts: Core.SectionGrouping<BOMItem>[];
        partsKits: PartsKitSummary[];
        resources: MediaResourceSummary[];
        tools: Equipment[];
    }
    interface InstructionsConfiguration {
        key: string;
        name: string;
        nameLabel: string;
        instructionsLabel: string;
        hintsLabel: string;
        toolsLabel: string;
        notesLabel: string;
        resourcesLabel: string;
        showName: boolean;
        showInstructions: boolean;
        showHints: boolean;
        showNotes: boolean;
        showTools: boolean;
        showResources: boolean;
    }
    interface TemplateCategory {
        id: string;
        name: string;
        key: string;
        description: string;
        ticketLabel: string;
        subjectLabel: string;
        statusLabel: string;
        isClosedLabel: string;
        showIsViewed: boolean;
        isViewedLabel: string;
        serviceBoardLabel: string;
        urgencyLabel: string;
        skillLevelLabel: any;
        string: any;
        instructionsLabel: string;
        troubleshootingStepsLabel: string;
        primaryContactLabel: string;
        resourcesLabel: string;
        costEstimateLabel: string;
        hoursEstimateLabel: string;
        servicePartsLabel: string;
        toolsLabel: string;
        partsKitsLabel: string;
        dueDateLabel: string;
        statusDateLabel: string;
        statusDueDateLabel: string;
        showUrgency: boolean;
        showSkillLevel: boolean;
        showCostEstimate: boolean;
        showHoursEstimate: boolean;
        showInstructions: boolean;
        showResources: boolean;
        showServiceParts: boolean;
        showTools: boolean;
        showPartsKits: boolean;
        showTroubleshootingSteps: boolean;
        showDueDate: boolean;
        showStatusDate: boolean;
        showStatusDueDate: boolean;
        instructionConfiguration: InstructionsConfiguration;
        troubleshootingConfiguration: TroubleshootingConfiguration;
    }
    interface ServiceTicketTemplateSummary {
        id: string;
        name: string;
        key: string;
        description: string;
    }
    interface ServiceTicketTemplateInstruction {
        id: string;
        stepId: string;
        name: string;
        instructions: string;
        hints: string;
        notes: string;
        resources: MediaResource[];
        tools: Equipment[];
    }
    interface TroubleshootingConfiguration {
        key: string;
        name: string;
        instructionsLabel: string;
        problemLabel: string;
        hintsLabel: string;
        notesLabel: string;
        expectedOutcomeLabel: string;
        nameLabel: string;
        resourcesLabel: string;
        toolsLabel: string;
        showName: boolean;
        showInstructions: boolean;
        showProblem: boolean;
        showHints: boolean;
        showNotes: boolean;
        showExpectedOutcome: boolean;
        showResources: boolean;
        showTools: boolean;
    }
    interface ServiceTicketTemplateSummary {
        id: string;
        name: string;
        key: string;
        description: string;
    }
    interface MediaResource {
        name: string;
        mimeType: string;
        contentSize: number;
        link: string;
        isFileUpload: boolean;
        resourceType: Core.EntityHeader;
        fileName: string;
        id: string;
        description: string;
        key: string;
    }
    interface MediaResourceSummary {
        id: string;
        name: string;
        key: string;
        resourceType: string;
        mimeType: string;
        contentSize?: number;
        isFileUpload: boolean;
        link: string;
    }
    interface BOMItem {
        id: string;
        partNumber: string;
        name: string;
        manufacturer: string;
        description: string;
        assemblyNumber: string;
        quantity: number;
        link: string;
        resources: MediaResourceSummary[];
    }
    interface TroubleshootingStep {
        id: string;
        stepId: string;
        name: string;
        instructions: string;
        expectedOutcome: string;
        problem: string;
        notes: string;
        resources: MediaResourceSummary[];
    }
    interface Equipment {
        id: string;
        name: string;
        key: string;
        description: string;
        resources: MediaResourceSummary[];
    }
    interface PartsKit {
        id: string;
        name: string;
        key: string;
        kitNumber: string;
        parts: BOMItem[];
    }
    interface PartsKitSummary {
        id: string;
        name: string;
        key: string;
        description: string;
    }
    interface EquipmentSummary {
        id: string;
        name: string;
        key: string;
        description: string;
    }
    interface TicketFilter {
        userId: string;
        templateId: string;
        statusKey: string;
        isClosed?: boolean;
        deviceId: string;
        serviceBoardId: string;
    }
}
